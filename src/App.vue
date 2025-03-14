<script setup lang="ts">
import { useQuasar } from 'quasar';
import { useSupabaseStore } from 'stores/SupabaseStore';
import { onMounted } from 'vue';

useQuasar().dark.set(true);

useSupabaseStore();
onMounted(async () => {
  await useSupabaseStore().loadUser();
});
</script>

<template>
  <q-img src="background.webp" class="absolute-center fit" />
  <router-view />
</template>
