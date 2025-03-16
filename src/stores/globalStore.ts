import { defineStore } from 'pinia';

export const useGlobalStore = defineStore('globalStore', {
  state: () => ({
    show_login: false,
    filter: '',
  }),

  getters: {},

  actions: {},
});
