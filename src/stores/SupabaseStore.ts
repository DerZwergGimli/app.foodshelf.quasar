import { defineStore } from 'pinia';

import { createClient } from '@supabase/supabase-js';

import { sb_create } from 'stores/supabase/sb_action_create';
import { sb_update } from 'stores/supabase/sb_action_update';
import { sb_delete } from 'stores/supabase/sb_action_delete';
import { sb_fetchAll } from 'stores/supabase/sb_action_fetchAll';

import type { SB_Item } from 'stores/supabase/SB_Item';
import { SB_ItemDefault } from 'stores/supabase/SB_Item';
import type { SB_Group } from 'stores/supabase/SB_Group';
import type { SB_Tag } from 'stores/supabase/SB_Tag';
import type { SB_Object } from 'stores/supabase/SB_Object';
import { sb_toast } from 'stores/supabase/sb_toast';
import { sb_login } from 'stores/supabase/sb_login';

const supabaseUrl = 'https://ldgejbqndhdvsyeqwfme.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY;

export const useSupabaseStore = defineStore('SupabaseStore', {
  state: () => ({
    loading: false,
    supabase: createClient(supabaseUrl, supabaseKey),
    isSignedIn: false,
    user_id: '',
    user_email: '',
    item_selected: SB_ItemDefault,
    items: [] as SB_Item[],
    groups: [] as SB_Group[],
    tags: [] as SB_Tag[],
  }),

  getters: {
    getTagName: (state) => {
      return (tagID: number) => state.tags.find((tag) => tag.id === tagID)?.name;
    },
  },

  actions: {
    //User
    async loadUser() {
      const user = await this.supabase.auth.getUser();
      this.user_id = user.data.user?.id ?? '';
      this.user_email = user.data.user?.email ?? '';
      this.isSignedIn = this.user_id !== '';
    },

    async login(email: string, password: string) {
      const result = await sb_login(email, password);
      sb_toast(result);
      await useSupabaseStore().loadUser();
    },

    //Create
    async createItem(item: SB_Item) {
      item.user_id = this.user_id;
      const result = await sb_create(this.supabase as never, 'items', item);
      sb_toast(result);
      if (result.status === 'OK') await this.fetchItems();
    },
    async createGroup(group: SB_Group) {
      group.user_id = this.user_id;
      const result = await sb_create(this.supabase as never, 'groups', group);
      sb_toast(result);
      if (result.status === 'OK') await this.fetchGroups();
    },
    async createTag(tag: SB_Tag) {
      tag.user_id = this.user_id;
      const result = await sb_create(this.supabase as never, 'tags', tag);
      sb_toast(result);
      if (result.status === 'OK') await this.fetchTags();
    },

    //Update
    async updateGroup(newGroup: SB_Group, id?: number) {
      if (!id) return false;
      const result = await sb_update(this.supabase as never, 'groups', id, newGroup);
      sb_toast(result);
    },
    async updateTag(newTag: SB_Tag, id?: number) {
      if (!id) return false;
      const result = await sb_update(this.supabase as never, 'tags', id, newTag);
      sb_toast(result);
    },
    async updateItem(newItem: SB_Item, id?: number) {
      const result = await sb_update(this.supabase as never, 'items', id ?? 0, newItem);
      sb_toast(result);
    },

    //Delete
    async deleteItem(id?: number) {
      if (!id) return false;
      const result = await sb_delete(this.supabase as never, 'items', id);
      sb_toast(result);
      if (result.status === 'OK') await this.fetchItems();
    },
    async deleteTag(id?: number) {
      if (!id) return false;
      const result = await sb_delete(this.supabase as never, 'tags', id);
      sb_toast(result);
      if (result.status === 'OK') await this.fetchTags();
    },
    async deleteGroup(id?: number) {
      if (!id) return false;
      const result = await sb_delete(this.supabase as never, 'groups', id);
      sb_toast(result);
      if (result.status === 'OK') await this.fetchGroups();
    },

    //Fetch
    async fetchAll() {
      await this.fetchGroups();
      await this.fetchTags();
      await this.fetchItems();
    },
    async fetchItems() {
      this.loading = true;
      this.items =
        (await sb_fetchAll(this.supabase as never, 'items'))?.sort((a: SB_Object, b: SB_Object) =>
          a.name.localeCompare(b.name),
        ) ?? [];
      this.loading = false;
    },
    async fetchGroups() {
      this.loading = true;
      this.groups =
        (await sb_fetchAll(this.supabase as never, 'groups'))?.sort((a: SB_Object, b: SB_Object) =>
          a.name.localeCompare(b.name),
        ) ?? [];
      this.loading = false;
    },
    async fetchTags() {
      this.loading = true;
      this.tags =
        (await sb_fetchAll(this.supabase as never, 'tags'))?.sort((a: SB_Object, b: SB_Object) =>
          a.name.localeCompare(b.name),
        ) ?? [];
      this.loading = false;
    },
  },
});
