<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import CreateItem from 'components/create/CreateItem.vue';
import CreateGroup from 'components/create/CreateGroup.vue';
import CreateTag from 'components/create/CreateTag.vue';
import TableTags from 'components/tables/TableTags.vue';
import { useSupabaseStore } from 'stores/SupabaseStore';
import TableGroups from 'components/tables/TableGroups.vue';
import { SB_ItemDefault } from 'stores/supabase/SB_Item';

const activeTab = ref('item');

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
  <div style="max-width: 600px; margin: auto">
    <q-tabs class="bg-primary" v-model="activeTab" align="justify">
      <q-tab name="item" label="Item"></q-tab>
      <q-tab name="group" label="Group"></q-tab>
      <q-tab name="tag" label="Tag"></q-tab>
    </q-tabs>

    <q-tab-panels v-model="activeTab" animated>
      <q-tab-panel name="item">
        <CreateItem />
      </q-tab-panel>
      <q-tab-panel name="group">
        <q-card flat>
          <CreateGroup />
          <TableGroups />
        </q-card>
      </q-tab-panel>
      <q-tab-panel name="tag">
        <q-card flat>
          <CreateTag />
          <TableTags />
        </q-card>
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<style scoped></style>
