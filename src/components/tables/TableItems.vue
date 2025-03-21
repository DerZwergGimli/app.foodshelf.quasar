<script setup lang="ts">
import { useSupabaseStore } from 'stores/SupabaseStore';
import { date } from 'quasar';
import { useGlobalStore } from 'stores/globalStore';
import { useExpireColor } from 'src/use/useExpireColor';

const props = defineProps(['group', 'filter']);
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

function formatDate(timestamp: string) {
  return date.formatDate(timestamp, 'DD-MM-YYYY');
}
</script>

<template>
  <q-card flat>
    <q-expansion-item
      class="text-h6 full-width"
      :label="props.group.name"
      :caption="props.group.description"
      default-opened
      expand-icon="las la-angle-down"
      expanded-icon="las la-angle-up"
    >
      <q-table
        hide-bottom
        grid
        :filter="useGlobalStore().filter"
        flat
        :rows="useSupabaseStore().items.filter((item) => item.group_id === props.group.id)"
        :columns="columns"
        row-key="name"
        hide-header
      >
        <template v-slot:item="props">
          <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4">
            <q-card bordered flat class="full-height">
              <q-card-section class="row items-center" horizontal>
                <q-img class="col-2" height="110px" fit="cover" :src="props.row.image"></q-img>
                <q-separator vertical />
                <div class="col q-mx-xs">
                  <div class="row full-width">
                    <div class="col">
                      <h5 class="q-ma-none">{{ props.row.name }}</h5>
                      <h6
                        class="q-ma-none text-weight-thin"
                        :class="props.row.description ? '' : 'text-transparent'"
                      >
                        {{ props.row.description || 'none' }}
                      </h6>
                    </div>
                    <div class="col text-right">
                      <div class="col">
                        <q-chip
                          outline
                          :color="useExpireColor(props.row.date_expire)"
                          style="font-size: 11px"
                          class=""
                        >
                          {{ formatDate(props.row.date_expire) }}
                        </q-chip>
                      </div>
                      <div class="">
                        <q-chip style="font-size: 11px"
                          >{{ useSupabaseStore().getTagName(props.row.tag_id) }}
                        </q-chip>
                      </div>
                    </div>
                  </div>

                  <div>
                    <q-btn-group class="row full-width" v-if="props.row.amount != 0">
                      <q-btn
                        dense
                        class="q-px-md"
                        color="primary"
                        icon="las la-minus"
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
                        dense
                        class="q-px-md"
                        color="primary"
                        icon="las la-plus"
                        @click="props.row.amount = (props.row.amount || 0) + 1"
                      />
                    </q-btn-group>
                    <div class="row full-width q-pa-xs" v-else>
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
                  </div>
                </div>
              </q-card-section>

              <div class="absolute-top-left" :style="{ top: '-5px', left: '-15px' }">
                <q-btn flat :to="'/edit/' + props.row.id" class="" icon="las la-edit" />
              </div>
            </q-card>
          </div>
        </template>
      </q-table>
    </q-expansion-item>
  </q-card>
</template>

<style scoped></style>
