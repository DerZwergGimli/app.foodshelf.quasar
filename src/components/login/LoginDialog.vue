<script setup lang="ts">
import { ref } from 'vue';
import { useGlobalStore } from 'stores/globalStore';
import { sb_login } from 'stores/supabase/sb_login';
import { sb_toast } from 'stores/supabase/sb_toast';
import { useSupabaseStore } from 'stores/SupabaseStore';

const activeTab = ref('login');

const name = ref('');
const email = ref('');
const password = ref('');

async function handleLogin() {
  const result = await sb_login(email.value, password.value);
  sb_toast(result);
  await useSupabaseStore().loadUser();
}
</script>

<template>
  <q-dialog v-model="useGlobalStore().show_login" full-width>
    <q-card flat bordered>
      <q-tabs v-model="activeTab">
        <q-tab name="login" label="Login" />
        <q-tab name="signup" label="Sign Up" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="activeTab" animated>
        <q-tab-panel name="login">
          <q-card-section class="q-gutter-y-md">
            <q-input v-model="email" outlined dense label="Email" type="email" />
            <q-input v-model="password" outlined dense label="Password" type="password" />
          </q-card-section>
          <q-card-actions align="right">
            <q-btn @click.prevent="handleLogin" class="full-width" label="Login" color="primary" />
          </q-card-actions>
        </q-tab-panel>

        <q-tab-panel name="signup">
          <q-card-section>
            <div class="text-h6">Sign Up</div>
            <q-input v-model="name" filled label="Name" type="text" class="q-mb-md" />
            <q-input v-model="email" filled label="Email" type="email" class="q-mb-md" />
            <q-input v-model="password" t filled label="Password" type="password" class="q-mb-md" />
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat label="Sign Up" color="primary" />
          </q-card-actions>
        </q-tab-panel>
      </q-tab-panels>

      <q-separator />
    </q-card>
  </q-dialog>
</template>

<style scoped></style>
