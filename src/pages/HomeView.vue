<script setup lang="ts">
import { watch } from 'vue';
import { useSupabaseStore } from 'stores/SupabaseStore';
import TableItems from 'components/tables/TableItems.vue';
import { useGlobalStore } from 'stores/globalStore';

watch(
  () => useSupabaseStore().isSignedIn,
  async () => {
    await useSupabaseStore().fetchAll();
  },
);
</script>

<template>
  <q-page class="q-gutter-y-md">
    <q-input
      class="q-pt-sm q-px-sm"
      outlined
      dense
      debounce="300"
      v-model="useGlobalStore().filter"
      placeholder="Search"
    >
      <template v-slot:append>
        <q-icon name="search" />
      </template>
    </q-input>

    <div class="col row" v-for="(group, idx) in useSupabaseStore().groups" :key="idx">
      <q-separator style="width: 10px" vertical></q-separator>
      <TableItems class="col full-width" :group="group"> </TableItems>
    </div>
  </q-page>
</template>

<style scoped></style>
