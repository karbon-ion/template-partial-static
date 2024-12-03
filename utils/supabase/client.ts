import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "@supabase/ssr: Your project's URL and API key are required to create a Supabase client!"
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
