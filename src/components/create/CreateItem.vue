<script setup lang="ts">
import { ref } from 'vue';

const name = ref('');
const description = ref('');
const group = ref('');
const tag = ref('');
const amount = ref<number | null>(null);

const groups = [
  { id: 1, name: 'Group 1' },
  { id: 2, name: 'Group 2' },
];
const tags = [
  { id: 1, name: 'Tag 1' },
  { id: 2, name: 'Tag 2' },
];
</script>

<template>
  <q-form class="q-gutter-y-md">
    <q-input v-model="name" label="Name" outlined />
    <q-input v-model="description" label="Description" type="textarea" outlined />
    <q-select
      v-model="group"
      :options="groups.map((g) => ({ label: g.name, value: g.name }))"
      label="Group"
      outlined
    />
    <q-select
      v-model="tag"
      :options="tags.map((t) => ({ label: t.name, value: t.name }))"
      label="Tag"
      outlined
    />
    <q-input v-model="amount" type="number" label="Amount" outlined />
    <q-btn class="full-width" type="submit" label="Create Item" color="primary" />
  </q-form>
</template>

<style scoped></style>
