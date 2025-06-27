import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// Φορτώνει το .env στο process.env
dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
