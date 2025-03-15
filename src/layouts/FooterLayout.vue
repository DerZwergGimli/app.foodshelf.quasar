<script setup lang="ts">
import type { NavLinkProps } from 'layouts/NavigationBar.vue';
import NavigationBar from 'layouts/NavigationBar.vue';

const linksList: NavLinkProps[] = [
  {
    title: 'Home',
    icon: 'ion-home',
    to: '/',
  },
  {
    title: 'Add',
    icon: 'ion-add',
    to: '/add',
  },
  {
    title: 'About',
    icon: 'ion-information',
    to: '/about',
  },
];
</script>

<template>
  <NavigationBar :links="linksList" />
</template>

<style scoped></style>
