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
