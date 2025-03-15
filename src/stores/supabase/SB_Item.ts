import type { SB_Object } from 'stores/supabase/SB_Object';

export interface SB_Item extends SB_Object {
  image: string;
  tag_id?: number | null;
  group_id: number | null;

  amount: number;
  unit: string | null;

  date_added: Date;
  date_expire: string;
}

export const SB_ItemDefault: SB_Item = {
  user_id: '',
  name: '',
  description: '',
  image: '',
  tag_id: null,
  group_id: null,
  amount: 1,
  unit: 'unit',
  date_added: new Date(),
  date_expire: '',
};
