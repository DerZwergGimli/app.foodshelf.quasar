import type { SupabaseClient } from '@supabase/supabase-js';
import type { SB_Object } from 'stores/supabase/SB_Object';
import type { SB_Response } from 'stores/supabase/sb_toast';

export async function sb_create(db: SupabaseClient, table: string, item: SB_Object) {
  const { error } = await db.from(table).insert([item]);

  if (error) {
    return {
      status: 'ERROR',
      message: error.message,
    } as SB_Response;
  }

  return {
    status: 'OK',
    message: `Created ${item.name}!`,
  } as SB_Response;
}
