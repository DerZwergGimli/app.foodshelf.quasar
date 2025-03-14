<script setup lang="ts">
import { useSupabaseStore } from 'stores/SupabaseStore';
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
</script>

<template>
  <q-table
    hide-bottom
    grid
    flat
    :title="props.group.name"
    :rows="useSupabaseStore().items.filter((item) => item.group_id === props.group.id)"
    :columns="columns"
    row-key="name"
    hide-header
  >
    <!--    <template v-slot:top-right>-->
    <!--      <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">-->
    <!--        <template v-slot:append>-->
    <!--          <q-icon name="search" />-->
    <!--        </template>-->
    <!--      </q-input>-->
    <!--    </template>-->

    <template v-slot:item="props">
      <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4">
        <q-card flat bordered>
          <q-card-section class="row items-center q-gutter-x-sm">
            <q-img width="80px" height="80px" :src="props.row.image"></q-img>
            <div>
              <h5 class="q-ma-none">{{ props.row.name }}</h5>
              <h6 class="q-ma-none text-weight-thin">{{ props.row.description }}</h6>
            </div>
            <div
              class="col absolute-top-right q-ma-xs"
              v-if="useSupabaseStore().getTagName(props.row.tag)"
            >
              <q-chip outline>{{ useSupabaseStore().getTagName(props.row.tag) }} </q-chip>
            </div>
          </q-card-section>
          <q-separator />
          <q-card-section>
            <div class="row items-center">
              <div class="col">Best til</div>
              <div class="col text-right">
                {{ date.formatDate(props.row.date_expire, 'YYYY-MM-DD') }}
              </div>
            </div>
          </q-card-section>
          <q-separator />
          <q-card-section>
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
            <div class="row full-width" v-else>
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
          </q-card-section>
        </q-card>
      </div>
    </template>
  </q-table>
</template>

<style scoped></style>
