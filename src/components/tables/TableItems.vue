<script setup lang="ts">
import { useSupabaseStore } from 'stores/SupabaseStore';
import { ref } from 'vue';
import { date } from 'quasar';

const props = defineProps(['group']);
const columns = [
  {
    name: 'image',
    required: true,
    label: 'Dessert (100g serving)',
    sortable: true,
    field: 'image',
  },
  {
    name: 'name',
    required: true,
    label: 'Dessert (100g serving)',
    sortable: true,
    field: 'name',
  },
  {
    name: 'bestTil',
    required: true,
    label: 'Dessert (100g serving)',
    sortable: true,
    field: 'date_expire',
  },
];

const filter = ref();

function formatDate(timestamp: string) {
  return date.formatDate(timestamp, 'DD-MM-YYYY');
}
</script>

<template>
  <q-expansion-item
    class="text-h6"
    :label="props.group.name"
    :caption="props.group.description"
    default-opened
  >
    <q-table
      class="q-mb-md"
      hide-bottom
      grid
      :filter="filter"
      flat
      :rows="useSupabaseStore().items.filter((item) => item.group_id === props.group.id)"
      :columns="columns"
      row-key="name"
      hide-header
    >
      <template v-slot:top>
        <q-input
          class="full-width"
          outlined
          rounded
          dense
          debounce="300"
          v-model="filter"
          placeholder="Search"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <template v-slot:item="props">
        <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4">
          <q-card flat bordered class="full-height">
            <q-card-section class="row items-center q-gutter-x-sm">
              <q-avatar>
                <q-img :src="props.row.image"></q-img>
              </q-avatar>
              <div class="col">
                <h5 class="q-ma-none">{{ props.row.name }}</h5>
                <h6
                  class="q-ma-none text-weight-thin"
                  :class="props.row.description ? '' : 'text-transparent'"
                >
                  {{ props.row.description || 'No description available' }}
                </h6>
              </div>
              <div class="col items-end">
                <div class="col justify-around">
                  <q-chip v-if="props.row.tag"
                    >{{ useSupabaseStore().getTagName(props.row.tag) }}
                  </q-chip>
                  <q-chip outline style="font-size: 11px" class="">
                    {{ formatDate(props.row.date_expire) }}
                  </q-chip>
                </div>
              </div>
              <div class="absolute-top-right">
                <q-btn :to="'/edit/' + props.row.id" class="" icon="edit" flat />
              </div>
            </q-card-section>

            <q-btn-group class="row full-width" v-if="props.row.amount != 0">
              <q-btn
                color="primary"
                icon="remove"
                @click="props.row.amount = Math.max((props.row.amount || 0) - 1, 0)"
              />
              <q-input
                standout
                dense
                square
                input-class="text-right"
                :suffix="props.row.unit"
                v-model="props.row.amount"
                type="number"
                min="0"
                class="col"
                :value="props.row.amount || 0"
              />
              <q-btn
                color="primary"
                icon="add"
                @click="props.row.amount = (props.row.amount || 0) + 1"
              />
            </q-btn-group>
            <div class="row full-width q-px-xs" v-else>
              <q-btn
                class="col q-mr-md"
                color="primary"
                label="cancel"
                @click="props.row.amount = 1"
              />

              <q-btn
                class="col"
                color="red"
                label="delete"
                @click="useSupabaseStore().deleteItem(props.row.id)"
              />
            </div>
          </q-card>
        </div>
      </template>
    </q-table>
  </q-expansion-item>
  <q-separator />
</template>

<style scoped></style>
