<script setup lang="ts">
import LoginButtton from 'components/login/LoginButtton.vue';
import { useRoute } from 'vue-router';
</script>

<template>
  <q-toolbar>
    <q-btn
      v-if="useRoute().path.includes('edit')"
      flat
      icon="las la-chevron-left"
      @click="$router.back()"
    /><q-toolbar-title class=""> FoodTrack </q-toolbar-title>
    <LoginButtton class="" />
  </q-toolbar>
</template>

<style scoped></style>
