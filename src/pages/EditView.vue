<script setup lang="ts">
import { useSupabaseStore } from 'stores/SupabaseStore';
import { useRoute } from 'vue-router';
import { SB_ItemDefault } from 'stores/supabase/SB_Item';
import CreateItem from 'components/create/CreateItem.vue';

useSupabaseStore().item_selected =
  useSupabaseStore().items.find((item) => item.id == useRoute().params.id) ?? SB_ItemDefault;
</script>

<template>
  <div class="q-ma-md">
    <q-card flat class="" style="max-width: 600px; margin: auto">
      <q-card-section>
        <CreateItem action="EDIT" />
      </q-card-section>
    </q-card>
  </div>
</template>

<style scoped></style>
