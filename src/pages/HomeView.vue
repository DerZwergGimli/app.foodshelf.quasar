<script setup lang="ts">
import { watch } from 'vue';
import { useSupabaseStore } from 'stores/SupabaseStore';
import TableItems from 'components/tables/TableItems.vue';

watch(
  () => useSupabaseStore().isSignedIn,
  async () => {
    await useSupabaseStore().fetchAll();
  },
);
</script>

<template>
  <TableItems
    class="q-mb-md"
    :group="group"
    v-for="(group, idx) in useSupabaseStore().groups"
    :key="idx"
  >
  </TableItems>
</template>

<style scoped></style>
