<script setup lang="ts">
export interface NavLinkProps {
  title: string;
  to?: string;
  icon?: string;
}

const props = defineProps(['links']);
</script>

<template>
  <q-tabs active-color="accent" dense flat bordered indicator-color="transparent">
    <q-route-tab
      v-for="link in props.links"
      :key="link.title"
      v-bind="link"
      clickable
      tag="a"
      :to="link.to"
      :name="link.title"
      :icon="link.icon"
      :label="link.title"
    />
  </q-tabs>
</template>
