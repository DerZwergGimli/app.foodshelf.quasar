import { useSupabaseStore } from 'stores/SupabaseStore';
import type { SB_Response } from 'stores/supabase/sb_toast';

export async function sb_logout() {
  try {
    const { error } = await useSupabaseStore().supabase.auth.signOut();
    if (error) {
      return {
        status: 'ERROR',
        message: error.message,
      } as SB_Response;
    }
  } catch {
    return {
      status: 'ERROR',
      message: 'An unexpected error occurred. Please try again.',
    } as SB_Response;
  }

  return {
    status: 'OK',
    message: 'Logout successful!',
  } as SB_Response;
}
