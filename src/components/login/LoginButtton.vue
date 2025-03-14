<script setup lang="ts">
import LoginDialog from 'components/login/LoginDialog.vue';
import { useGlobalStore } from 'stores/globalStore';
</script>

<template>
  <q-btn
    icon="ion-log-in"
    outline
    :label="$t('login')"
    color="primary"
    @click="useGlobalStore().show_login = true"
  />
  <LoginDialog v-if="useGlobalStore().show_login" />
</template>

<style scoped></style>
