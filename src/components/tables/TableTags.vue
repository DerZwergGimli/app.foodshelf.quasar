<script setup lang="ts">
import { useSupabaseStore } from 'stores/SupabaseStore.js';

const columns = [
  {
    name: 'name',
    required: true,
    label: 'Name',
    align: 'left',
    field: 'name',
    sortable: true,
  },
  {
    name: 'description',
    required: true,
    align: 'left',
    label: 'Description',
    field: 'description',
    sortable: true,
  },
  {
    name: 'button',
    required: true,

    label: '',
    field: 'button',
  },
];
</script>

<template>
  <q-table
    flat
    :rows="useSupabaseStore().tags"
    :columns="columns as never"
    row-key="name"
    hide-bottom
    :rows-per-page-options="[0]"
    :pagination="{ rowsPerPage: 0 }"
    binary-state-sort
  >
    <template v-slot:body="props">
      <q-tr :props="props">
        <q-td key="name" :props="props">
          {{ props.row.name }}
          <q-popup-edit
            v-model="props.row.name"
            v-slot="scope"
            @save="useSupabaseStore().updateTag(props.row, props.row.id)"
          >
            <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" />
          </q-popup-edit>
        </q-td>
        <q-td key="description" :props="props">
          {{ props.row.description }}
          <q-popup-edit
            v-model="props.row.description"
            v-slot="scope"
            @save="useSupabaseStore().updateTag(props.row, props.row.id)"
          >
            <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" />
          </q-popup-edit>
        </q-td>
        <q-td key="description" :props="props">
          <q-btn @click="useSupabaseStore().deleteTag(props.row.id)" icon="delete" flat></q-btn>
        </q-td>
      </q-tr>
    </template>
  </q-table>
</template>

<style scoped></style>
