<script setup lang="ts">
import { ref } from 'vue';
import { QBtn, QForm, QInput } from 'quasar';

const groupName = ref('');
const groupDescription = ref('');

const createGroup = () => {
  console.log('Group Created:', { name: groupName.value, description: groupDescription.value });
};
</script>

<template>
  <q-form @submit.prevent="createGroup" class="q-gutter-y-md">
    <q-input v-model="groupName" label="Group Name" outlined maxlength="100" autofocus />
    <q-input
      v-model="groupDescription"
      label="Group Description"
      outlined
      type="textarea"
      maxlength="500"
      autofocus
    />
    <q-btn class="full-width" label="Create Group" type="submit" color="primary" />
  </q-form>
</template>

<style scoped></style>
