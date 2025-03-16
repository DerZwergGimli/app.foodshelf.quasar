<script setup lang="ts">
import { onMounted, watch } from 'vue';
import CreateGroup from 'components/create/CreateGroup.vue';
import CreateTag from 'components/create/CreateTag.vue';
import TableTags from 'components/tables/TableTags.vue';
import { useSupabaseStore } from 'stores/SupabaseStore';
import TableGroups from 'components/tables/TableGroups.vue';
import { SB_ItemDefault } from 'stores/supabase/SB_Item';
import { useQuasar } from 'quasar';
import { useGlobalStore } from 'stores/globalStore';
import CreateItem from 'components/create/CreateItem.vue';

watch(
  () => useSupabaseStore().isSignedIn,
  async () => {
    await useSupabaseStore().fetchAll();
  },
);

onMounted(() => {
  useSupabaseStore().item_selected = SB_ItemDefault;
});
</script>

<template>
  <div :class="useQuasar().screen.gt.sm ? 'q-pa-md' : 'q-pa-none'">
    <q-card flat style="max-width: 600px; margin: auto">
      <q-tab-panels v-model="useGlobalStore().addActiveTab" animated>
        <q-tab-panel name="item">
          <q-card flat>
            <CreateItem />
          </q-card>
        </q-tab-panel>
        <q-tab-panel name="group" class="q-gutter-y-md">
          <q-card flat>
            <CreateGroup />
          </q-card>
          <q-card flat>
            <TableGroups />
          </q-card>
        </q-tab-panel>
        <q-tab-panel name="tag" class="q-gutter-y-md">
          <q-card flat>
            <CreateTag />
          </q-card>
          <q-card flat>
            <TableTags />
          </q-card>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>

<style scoped></style>
