<script setup lang="ts">
const timespans = [
  {
    label: '1 Week',
    value: 7,
  },
  {
    label: '1 Month',
    value: 30,
  },
  {
    label: '6 Months',
    value: 30 * 6,
  },
  {
    label: '1 Year',
    value: 365,
  },
  {
    label: '2 Year',
    value: 365 * 2,
  },
  {
    label: '3 Year',
    value: 365 * 3,
  },
];

const emits = defineEmits(['update:expireTime']);
</script>

<template>
  <div style="display: grid; grid-template-columns: repeat(2, auto); gap: 10px">
    <q-btn
      v-for="(timespan, idx) in timespans"
      :key="idx"
      color="primary"
      :label="`+ ${timespan.label}`"
      @click="emits('update:expireTime', timespan.value)"
    />
  </div>
</template>

<style scoped></style>
