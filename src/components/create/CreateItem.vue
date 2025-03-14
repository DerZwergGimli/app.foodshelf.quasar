<script setup lang="ts">
import { ref } from 'vue';
import { useSupabaseStore } from 'stores/SupabaseStore';
import type { SB_Item } from 'stores/supabase/SB_Item';
import SelectExpireTime from 'components/extra/SelectExpireTime.vue';
import { date } from 'quasar';

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
</script>

<template>
  <q-form class="q-gutter-y-md">
    <q-input v-model="item.name" label="Name" outlined />
    <q-input v-model="item.description" label="Description" type="textarea" outlined />
    <q-select
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
      <q-input class="col" v-model="item.amount" type="number" label="Amount" outlined />
      <q-select
        class="col-4"
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
    <q-btn
      @click="useSupabaseStore().createItem(item)"
      class="full-width"
      type="submit"
      label="Create Item"
      color="primary"
    />
  </q-form>
</template>

<style scoped></style>
