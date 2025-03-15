<script setup lang="ts">
import { ref } from 'vue';
import { useGlobalStore } from 'stores/globalStore';
import { useSupabaseStore } from 'stores/SupabaseStore';

const activeTab = ref('login');

const name = ref('');
const email = ref('');
const password = ref('');

async function onLogin() {
  await useSupabaseStore().login(email.value, password.value);
}
</script>

<template>
  <q-dialog v-model="useGlobalStore().show_login">
    <q-card flat bordered style="min-width: 350px">
      <q-tabs v-model="activeTab">
        <q-tab name="login" label="Login" />
        <q-tab name="signup" label="Sign Up" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="activeTab" animated>
        <q-tab-panel name="login">
          <q-form @submit.prevent="onLogin()">
            <q-card-section>
              <div class="q-gutter-y-md">
                <q-input
                  :rules="[
                    (val) =>
                      (val && val.length > 0 && val.includes(['@'])) || 'Please enter an email',
                  ]"
                  v-model="email"
                  outlined
                  lazy-rules
                  dense
                  label="Email"
                  type="email"
                />
                <q-input
                  :rules="[(val) => (val && val.length > 0) || 'Please enter a password']"
                  v-model="password"
                  outlined
                  lazy-rules
                  dense
                  label="Password"
                  type="password"
                />
              </div>
              <q-btn class="text-secondary">Forgot Password?</q-btn>
            </q-card-section>

            <q-card-actions align="right">
              <q-btn type="submit" class="full-width" label="Login" color="primary" />
            </q-card-actions>
          </q-form>
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
