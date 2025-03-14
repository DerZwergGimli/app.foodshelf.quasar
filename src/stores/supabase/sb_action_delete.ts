import type { SupabaseClient } from '@supabase/supabase-js';
import type { SB_Response } from 'stores/supabase/sb_toast';

export async function sb_delete(db: SupabaseClient, table: string, id: number) {
  const { error } = await db.from(table).delete().eq('id', id);
  if (error) {
    console.log(error);

    return {
      status: 'ERROR',
      message: error.message,
    } as SB_Response;
  }

  return {
    status: 'OK',
    message: `Deleted!`,
  } as SB_Response;
}
