<script setup lang="ts">
import { ref } from 'vue';
import { QBtn, QCardSection, QForm, QInput } from 'quasar';
import { useSupabaseStore } from 'stores/SupabaseStore';
import type { SB_Tag } from 'stores/supabase/SB_Tag';

const tag = ref<SB_Tag>({
  name: '',
  description: '',
  created_at: new Date(),
  user_id: useSupabaseStore().user_id,
});
</script>

<template>
  <q-card-section>
    <q-form class="q-gutter-y-md">
      <q-input outlined v-model="tag.name" label="Tag Name" required autofocus />
      <q-input
        outlined
        v-model="tag.description"
        label="Tag Description"
        type="textarea"
        autofocus
      />
      <q-btn
        class="full-width"
        @click="useSupabaseStore().createTag(tag)"
        type="submit"
        label="Create Tag"
        color="primary"
      />
    </q-form>
  </q-card-section>
</template>

<style scoped></style>
