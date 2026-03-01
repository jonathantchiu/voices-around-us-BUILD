import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://dfrlccjeywtecoadnglt.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRmcmxjY2pleXd0ZWNvYWRuZ2x0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE4OTE5ODksImV4cCI6MjA4NzQ2Nzk4OX0.JzRnxcwmpxmJ5Y64B-n-iIBukRWcIdvJ9KFaiqUQ_Jw';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
