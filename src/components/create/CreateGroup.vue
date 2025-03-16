<script setup lang="ts">
import { ref } from 'vue';
import { QBtn, QForm, QInput } from 'quasar';
import { useSupabaseStore } from 'stores/SupabaseStore';

const groupName = ref('');
const groupDescription = ref('');

async function createGroup() {
  await useSupabaseStore().createGroup({
    name: groupName.value,
    description: groupDescription.value,
    created_at: new Date(),
    user_id: useSupabaseStore().user_id,
  });
  console.log('Group Created:', { name: groupName.value, description: groupDescription.value });
}
</script>

<template>
  <q-form @submit.prevent="createGroup" class="q-gutter-y-md">
    <q-input dense v-model="groupName" label="Group Name" outlined maxlength="100" autofocus />
    <q-input
      dense
      v-model="groupDescription"
      label="Group Description"
      outlined
      type="text"
      maxlength="500"
      autofocus
    />
    <q-btn class="full-width" label="Create Group" type="submit" color="primary" />
  </q-form>
</template>

<style scoped></style>
