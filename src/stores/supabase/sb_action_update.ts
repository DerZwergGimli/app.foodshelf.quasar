import type { SupabaseClient } from '@supabase/supabase-js';
import type { SB_Object } from 'stores/supabase/SB_Object';
import type { SB_Response } from 'stores/supabase/sb_toast';

export async function sb_update(db: SupabaseClient, table: string, id: number, object: SB_Object) {
  const { error } = await db.from(table).update(object).eq('id', id).select();
  if (error) {
    console.error('Error updating item:', error);
    return {
      status: 'ERROR',
      message: error.message,
    } as SB_Response;
  }

  return {
    status: 'OK',
    message: `Updated!`,
  } as SB_Response;
}
