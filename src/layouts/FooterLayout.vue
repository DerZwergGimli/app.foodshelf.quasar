<script setup lang="ts">
import type { NavLinkProps } from 'layouts/NavigationBarMain.vue';
import NavigationBarMain from 'layouts/NavigationBarMain.vue';
import NavigationBarAdd from 'layouts/NavigationBarAdd.vue';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();

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

const showBarAdd = computed(() => route.path.includes('add'));
</script>

<template>
  <NavigationBarAdd v-if="showBarAdd" />
  <q-separator />
  <NavigationBarMain :links="linksList" />
</template>

<style scoped></style>
