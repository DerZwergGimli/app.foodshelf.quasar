<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-dark">
      <HeaderLayout />

      <q-separator />
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-dark">
      <q-separator />
      <FooterLayout />
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import HeaderLayout from 'layouts/HeaderLayout.vue';
import FooterLayout from 'layouts/FooterLayout.vue';
</script>
