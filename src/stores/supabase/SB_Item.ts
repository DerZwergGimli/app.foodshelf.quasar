import type { SB_Object } from 'stores/supabase/SB_Object';

export interface SB_Item extends SB_Object {
  image: string;
  tag_id?: number | null;
  group_id: number | null;

  amount: number;
  unit: string | null;

  date_added: string;
  date_expire: string;
}

export const SB_ItemDefault: SB_Item = {
  id: 0,
  user_id: '',
  name: '',
  description: '',
  image: '',
  tag_id: null,
  group_id: null,
  amount: 0,
  unit: null,
  date_added: '',
  date_expire: '',
};
