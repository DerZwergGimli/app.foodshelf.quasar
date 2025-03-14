import { useSupabaseStore } from 'stores/SupabaseStore';

export async function sb_login(email: string, password: string) {
  try {
    const { error } = await useSupabaseStore().supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) {
      return error.message;
    }
  } catch {
    return 'An unexpected error occurred. Please try again.';
  }
  return 'Ok';
}
