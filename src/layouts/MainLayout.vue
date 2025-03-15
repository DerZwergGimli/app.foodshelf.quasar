<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="">
      <HeaderLayout />
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer>
      <FooterLayout />
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import HeaderLayout from 'layouts/HeaderLayout.vue';
import FooterLayout from 'layouts/FooterLayout.vue';
</script>
