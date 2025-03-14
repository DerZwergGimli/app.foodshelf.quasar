import type { SupabaseClient } from '@supabase/supabase-js';

export async function sb_fetchAll(db: SupabaseClient, table: string) {
  const { data, error } = await db.from(table).select('*');
  if (error) {
    console.error('Error fetching items:', error);
  } else {
    return data;
  }
}
