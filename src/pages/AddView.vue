<script setup lang="ts">
import { ref } from 'vue';
import CreateItem from 'components/create/CreateItem.vue';
import CreateGroup from 'components/create/CreateGroup.vue';
import CreateTag from 'components/create/CreateTag.vue';

const activeTab = ref('item');
</script>

<template>
  <q-tabs class="bg-dark" v-model="activeTab">
    <q-tab name="item" label="Item"></q-tab>
    <q-tab name="group" label="Group"></q-tab>
    <q-tab name="tag" label="Tag"></q-tab>
  </q-tabs>

  <q-tab-panels v-model="activeTab" animated>
    <q-tab-panel name="item">
      <CreateItem />
    </q-tab-panel>
    <q-tab-panel name="group">
      <CreateGroup />
    </q-tab-panel>
    <q-tab-panel name="tag">
      <CreateTag />
    </q-tab-panel>
  </q-tab-panels>
</template>

<style scoped></style>
