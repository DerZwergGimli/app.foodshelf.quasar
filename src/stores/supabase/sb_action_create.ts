import type { SupabaseClient } from '@supabase/supabase-js';
import type { SB_Object } from 'stores/supabase/SB_Object';

export async function sb_create(db: SupabaseClient, table: string, item: SB_Object) {
  const { data, error } = await db.from(table).insert([item]);

  if (error) {
    console.error('Error creating item:', error);
    return `Error creating ${item.name}!`; // Indicate failure
  }

  console.log(`${table} created:`, data);
  return `${item.name} created!`; // Indicate success
}
