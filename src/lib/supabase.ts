import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          phone: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name?: string | null;
          phone?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string | null;
          phone?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      tryouts: {
        Row: {
          id: string;
          title: string;
          description: string | null;
          category: 'TWK' | 'TIU' | 'TKP' | 'FULL';
          duration_minutes: number;
          total_questions: number;
          is_free: boolean;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
      };
      questions: {
        Row: {
          id: string;
          tryout_id: string;
          question_number: number;
          question_text: string;
          option_a: string;
          option_b: string;
          option_c: string;
          option_d: string;
          option_e: string | null;
          correct_answer: 'A' | 'B' | 'C' | 'D' | 'E';
          explanation: string | null;
          created_at: string;
        };
      };
      user_tryout_attempts: {
        Row: {
          id: string;
          user_id: string;
          tryout_id: string;
          started_at: string;
          completed_at: string | null;
          time_spent_seconds: number;
          score: number;
          correct_answers: number;
          wrong_answers: number;
          unanswered: number;
          is_completed: boolean;
        };
        Insert: {
          id?: string;
          user_id: string;
          tryout_id: string;
          started_at?: string;
          completed_at?: string | null;
          time_spent_seconds?: number;
          score?: number;
          correct_answers?: number;
          wrong_answers?: number;
          unanswered?: number;
          is_completed?: boolean;
        };
      };
      user_answers: {
        Row: {
          id: string;
          attempt_id: string;
          question_id: string;
          selected_answer: 'A' | 'B' | 'C' | 'D' | 'E' | null;
          is_correct: boolean;
          time_spent_seconds: number;
          is_flagged: boolean;
          answered_at: string;
        };
        Insert: {
          id?: string;
          attempt_id: string;
          question_id: string;
          selected_answer?: 'A' | 'B' | 'C' | 'D' | 'E' | null;
          is_correct?: boolean;
          time_spent_seconds?: number;
          is_flagged?: boolean;
          answered_at?: string;
        };
      };
    };
  };
};
