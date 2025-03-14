<script setup lang="ts">
import LoginDialog from 'components/login/LoginDialog.vue';
import { useGlobalStore } from 'stores/globalStore';
import { useSupabaseStore } from '../../stores/SupabaseStore';
import { computed } from 'vue';
import { sb_logout } from 'stores/supabase/sb_logout';
import { sb_toast } from 'stores/supabase/sb_toast';

const isSignedIn = computed(() => {
  return useSupabaseStore().user_email != '';
});

const buttonLabel = computed(() => {
  return isSignedIn.value ? 'Logout' : 'Login';
});

async function handleButtonClick() {
  if (isSignedIn.value) {
    const result = await sb_logout();
    sb_toast(result);
    await useSupabaseStore().loadUser();
  } else {
    useGlobalStore().show_login = true;
  }
}
</script>

<template>
  <q-btn icon="ion-log-in" :label="buttonLabel" color="primary" @click="handleButtonClick()" />
  <LoginDialog v-if="useGlobalStore().show_login" />
</template>

<style scoped></style>
