import type { SupabaseClient } from '@supabase/supabase-js';
import type { SB_Object } from 'stores/supabase/SB_Object';

export async function sb_update(db: SupabaseClient, table: string, id: number, object: SB_Object) {
  const { data, error } = await db.from(table).update(object).eq('id', id).select();
  if (error) {
    console.error('Error updating item:', error);
    return `Error updating ${table}!`; // Indicate failure
  }

  console.log(`${table} updated:`, data);
  return `${table} updated!`; // Indicate success
}
