<script setup lang="ts">
import { ref, watch } from 'vue';
import { useSupabaseStore } from 'stores/SupabaseStore';
import type { SB_Item } from 'stores/supabase/SB_Item';
import SelectExpireTime from 'components/extra/SelectExpireTime.vue';
import { date } from 'quasar';
import { createClient } from 'pexels';
import { watchDebounced } from '@vueuse/core';

const item = ref<SB_Item>({
  name: '',
  description: '',
  amount: 0,
  unit: '',
  image: '',
  group_id: null,
  tag_id: null,
  date_added: date.formatDate(Date.now(), 'YYYY/MM/DD'),
  date_expire: date.formatDate(Date.now(), 'YYYY/MM/DD'),
  user_id: useSupabaseStore().user_id,
});

const units = [
  { unit: 'unit', label: 'unit' },
  { unit: 'g', label: 'gram' },
  { unit: 'kg', label: 'kilogram' },
  { unit: 'portion', label: 'portion' },
  { unit: 'box', label: 'box' },
];

const slide = ref(0);
const pexels = createClient(import.meta.env.VITE_PEXELS_API_KEY);
const photos = ref<string[]>([]);
watchDebounced(
  item.value,
  async () => {
    if (item.value.name.length >= 3) {
      try {
        const query = item.value.name.trim();
        const data = await pexels.photos.search({
          query,
          per_page: 5,
        });

        if ('photos' in data) {
          // Only access `photos` if it exists in the response
          photos.value = data.photos.map((p) => p.src.original);
          item.value.image = data.photos[0]?.src?.original || '';
        } else {
          console.error('No photos found or invalid response:', data);
        }
      } catch (error) {
        console.error('Error while searching for photos:', error);
      }
    }
  },
  { debounce: 2000, maxWait: 5000 },
);

watch(
  () => slide.value,
  () => (item.value.image = photos.value[slide.value] ?? ('' as string)),
);

async function onCreate() {
  await useSupabaseStore().createItem(item.value);
}
</script>

<template>
  <q-form class="q-gutter-y-md" @submit="onCreate">
    <q-input
      lazy-rules
      :rules="[(val) => (val && val.length > 0) || 'Name required!']"
      v-model="item.name"
      label="Name"
      outlined
    />

    <q-carousel style="max-height: 200px" swipeable animated v-model="slide" thumbnails infinite>
      <q-carousel-slide v-for="(photo, idx) in photos" :name="idx" :key="idx" :img-src="photo" />
    </q-carousel>
    <q-input v-model="item.description" label="Description" type="textarea" outlined />
    <q-select
      lazy-rules
      :rules="[(val) => val || 'Group required!']"
      v-model="item.group_id"
      :options="useSupabaseStore().groups.map((g) => ({ label: g.name, value: g.id }))"
      label="Group"
      outlined
      emit-value
      map-options
    />
    <q-select
      v-model="item.tag_id"
      :options="useSupabaseStore().tags.map((g) => ({ label: g.name, value: g.id }))"
      label="Tag"
      outlined
      emit-value
      map-options
    />

    <div class="row q-gutter-x-sm">
      <q-input
        lazy-rules
        :rules="[(val) => (val && val > 0) || 'Amount can not be 0']"
        class="col"
        v-model="item.amount"
        type="number"
        label="Amount"
        outlined
      />
      <q-select
        class="col-4"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please select a unit']"
        v-model="item.unit"
        :options="units.map((g) => ({ label: g.unit, value: g.label }))"
        label="Unit"
        outlined
        emit-value
        map-options
      />
    </div>

    <q-card bordered flat class="col">
      <div>
        <div class="text-subtitle1 text-center">Expire</div>
        <q-separator />
      </div>
      <SelectExpireTime
        @update:expireTime="
          (days) =>
            (item.date_expire = date.formatDate(
              Date.now() + days * 24 * 60 * 60 * 1000,
              'YYYY/MM/DD',
            ))
        "
        class="q-my-sm q-mx-sm"
      />

      <q-date class="full-width" v-model="item.date_expire" first-day-of-week="1" />
    </q-card>
    <q-btn class="full-width" type="submit" label="Create Item" color="primary" />
  </q-form>
</template>

<style scoped></style>
