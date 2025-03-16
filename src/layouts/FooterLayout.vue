<script setup lang="ts">
import type { NavLinkProps } from 'layouts/NavigationBar.vue';
import NavigationBar from 'layouts/NavigationBar.vue';

const linksList: NavLinkProps[] = [
  {
    title: 'Home',
    icon: 'las la-home',
    to: '/',
  },
  {
    title: 'Add',
    icon: 'las la-plus',
    to: '/add',
  },
  {
    title: 'About',
    icon: 'las la-info',
    to: '/about',
  },
];
</script>

<template>
  <NavigationBar :links="linksList" />
  <q-separator />
  <NavigationBar :links="linksList" />
</template>

<style scoped></style>
