import type { SB_Object } from 'stores/supabase/SB_Object';

export interface SB_Item extends SB_Object {
  image: string;
  tag?: number | null;
  group: number | null;

  amount: number;
  unit: string | null;

  date_added: Date;
  date_bestTill: Date;
}
