<script setup lang="ts">
const features = [
  'Create and manage food groups',
  'Assign expiration dates to items',
  'Track storage and receive expiration reminders',
  'Optimize your food usage and reduce waste',
];
</script>

<template>
  <q-page padding>
    <q-card flat class="q-pa-md">
      <q-card-section>
        <div class="text-h4">About Food Storage Tracker</div>
        <p class="text-subtitle1 q-mt-sm">
          The Food Storage Tracker is your ultimate companion for managing your food supplies
          efficiently. Whether you're organizing a pantry at home or supplies in a professional
          kitchen, we make it seamless.
        </p>
      </q-card-section>
      <q-card-section>
        <div class="text-h6">Features</div>
        <q-list bordered padding>
          <q-item v-for="(feature, index) in features" :key="index">
            <q-item-section avatar>
              <q-icon name="check_circle" color="green" />
            </q-item-section>
            <q-item-section>{{ feature }}</q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<style scoped></style>
