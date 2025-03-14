<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-dark">
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> FoodTrack </q-toolbar-title>

        <LoginButtton class="" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Food Tracker </q-item-label>
        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EssentialLink, { type EssentialLinkProps } from 'components/EssentialLink.vue';
import LoginButtton from 'components/login/LoginButtton.vue';

const linksList: EssentialLinkProps[] = [
  {
    title: 'Home',
    caption: 'View and Track',
    icon: 'ion-home',
    to: '/',
  },
  {
    title: 'Edit',
    caption: 'Create and edit',
    icon: 'ion-add',
    to: '/add',
  },
  {
    title: 'About',
    caption: 'About this app',
    icon: 'ion-information',
    to: '/about',
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
