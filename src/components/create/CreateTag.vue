<script setup lang="ts">
import { ref } from 'vue';
import { QBtn, QCard, QCardSection, QForm, QInput } from 'quasar';

const tagName = ref('');
const tagDescription = ref('');

const createTag = () => {
  console.log('Tag Name:', tagName.value);
  console.log('Tag Description:', tagDescription.value);
};
</script>

<template>
  <q-card flat>
    <q-card-section>
      <q-form @submit="createTag" class="q-gutter-md">
        <q-input outlined v-model="tagName" label="Tag Name" required autofocus />
        <q-input
          outlined
          v-model="tagDescription"
          label="Tag Description"
          type="textarea"
          autofocus
        />
        <q-btn type="submit" label="Create Tag" color="primary" />
      </q-form>
    </q-card-section>
  </q-card>
</template>

<style scoped></style>
