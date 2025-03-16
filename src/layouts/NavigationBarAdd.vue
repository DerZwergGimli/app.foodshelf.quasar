<script setup lang="ts">
import { useGlobalStore } from 'stores/globalStore';
</script>

<template>
  <q-tabs
    dense
    active-color="accent"
    indicator-color="transparent"
    class="bg-dark"
    v-model="useGlobalStore().addActiveTab"
    align="justify"
  >
    <q-tab icon="las la-box" name="item" label="Item"></q-tab>
    <q-tab icon="las la-users" name="group" label="Group"></q-tab>
    <q-tab icon="las la-tag" name="tag" label="Tag"></q-tab>
  </q-tabs>
</template>

<style scoped></style>
