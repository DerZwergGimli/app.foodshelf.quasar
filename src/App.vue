<script setup lang="ts">
import { useQuasar } from 'quasar';

useQuasar().dark.set(true);
</script>

<template>
  <q-img
    src="background.webp"
    class="absolute-center fit"

  />
  <router-view />
</template>

