<script setup lang="ts">
import LoginButtton from 'components/login/LoginButtton.vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRouter();
</script>

<template>
  <q-toolbar>
    <q-btn
      v-if="useRoute().path.includes('edit')"
      flat
      icon="las la-chevron-left"
      @click="route.push('/')"
    />
    <q-avatar>
      <q-img src="icon.png" @click="route.push('/')"></q-img>
    </q-avatar>
    <q-toolbar-title @click="route.push('/')" class=""> FoodTrack </q-toolbar-title>
    <LoginButtton class="" />
  </q-toolbar>
</template>

<style scoped></style>
