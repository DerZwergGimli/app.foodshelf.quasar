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
  <router-view />
</template>
