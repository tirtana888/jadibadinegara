/*
  # Create Users and Tryouts Schema

  ## Overview
  This migration creates the core database schema for the tryout system with user authentication,
  tryout management, questions, and user progress tracking.

  ## New Tables
  
  ### `profiles`
  - `id` (uuid, primary key) - References auth.users
  - `email` (text, unique, not null) - User email
  - `full_name` (text) - User's full name
  - `phone` (text) - User's phone number
  - `created_at` (timestamptz) - Account creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### `tryouts`
  - `id` (uuid, primary key) - Unique tryout identifier
  - `title` (text, not null) - Tryout title (e.g., "SKD CPNS 2024")
  - `description` (text) - Tryout description
  - `category` (text, not null) - Category (TWK, TIU, TKP, or FULL)
  - `duration_minutes` (integer, not null) - Total duration in minutes
  - `total_questions` (integer, not null) - Number of questions
  - `is_free` (boolean, default false) - Whether tryout is free
  - `is_active` (boolean, default true) - Whether tryout is active
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### `questions`
  - `id` (uuid, primary key) - Unique question identifier
  - `tryout_id` (uuid, foreign key) - References tryouts table
  - `question_number` (integer, not null) - Question order number
  - `question_text` (text, not null) - The question content
  - `option_a` (text, not null) - Option A
  - `option_b` (text, not null) - Option B
  - `option_c` (text, not null) - Option C
  - `option_d` (text, not null) - Option D
  - `option_e` (text) - Option E (optional)
  - `correct_answer` (text, not null) - Correct answer (A, B, C, D, or E)
  - `explanation` (text) - Answer explanation
  - `created_at` (timestamptz) - Creation timestamp

  ### `user_tryout_attempts`
  - `id` (uuid, primary key) - Unique attempt identifier
  - `user_id` (uuid, foreign key) - References auth.users
  - `tryout_id` (uuid, foreign key) - References tryouts
  - `started_at` (timestamptz, not null) - When attempt started
  - `completed_at` (timestamptz) - When attempt completed
  - `time_spent_seconds` (integer) - Total time spent
  - `score` (integer) - Final score
  - `correct_answers` (integer) - Number of correct answers
  - `wrong_answers` (integer) - Number of wrong answers
  - `unanswered` (integer) - Number of unanswered questions
  - `is_completed` (boolean, default false) - Whether attempt is completed

  ### `user_answers`
  - `id` (uuid, primary key) - Unique answer identifier
  - `attempt_id` (uuid, foreign key) - References user_tryout_attempts
  - `question_id` (uuid, foreign key) - References questions
  - `selected_answer` (text) - User's selected answer (A, B, C, D, or E)
  - `is_correct` (boolean) - Whether answer is correct
  - `time_spent_seconds` (integer) - Time spent on this question
  - `is_flagged` (boolean, default false) - Whether question was flagged
  - `answered_at` (timestamptz) - When answer was submitted

  ## Security
  - Enable RLS on all tables
  - Users can only read their own profile data
  - Users can only view their own attempts and answers
  - All users can read active tryouts and questions
  - Only authenticated users can create attempts and submit answers
*/

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text UNIQUE NOT NULL,
  full_name text,
  phone text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own profile"
  ON profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON profiles FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- Create tryouts table
CREATE TABLE IF NOT EXISTS tryouts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  category text NOT NULL CHECK (category IN ('TWK', 'TIU', 'TKP', 'FULL')),
  duration_minutes integer NOT NULL DEFAULT 90,
  total_questions integer NOT NULL DEFAULT 0,
  is_free boolean DEFAULT false,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE tryouts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active tryouts"
  ON tryouts FOR SELECT
  TO authenticated, anon
  USING (is_active = true);

-- Create questions table
CREATE TABLE IF NOT EXISTS questions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  tryout_id uuid NOT NULL REFERENCES tryouts(id) ON DELETE CASCADE,
  question_number integer NOT NULL,
  question_text text NOT NULL,
  option_a text NOT NULL,
  option_b text NOT NULL,
  option_c text NOT NULL,
  option_d text NOT NULL,
  option_e text,
  correct_answer text NOT NULL CHECK (correct_answer IN ('A', 'B', 'C', 'D', 'E')),
  explanation text,
  created_at timestamptz DEFAULT now(),
  UNIQUE(tryout_id, question_number)
);

ALTER TABLE questions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view questions"
  ON questions FOR SELECT
  TO authenticated, anon
  USING (true);

-- Create user_tryout_attempts table
CREATE TABLE IF NOT EXISTS user_tryout_attempts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  tryout_id uuid NOT NULL REFERENCES tryouts(id) ON DELETE CASCADE,
  started_at timestamptz NOT NULL DEFAULT now(),
  completed_at timestamptz,
  time_spent_seconds integer DEFAULT 0,
  score integer DEFAULT 0,
  correct_answers integer DEFAULT 0,
  wrong_answers integer DEFAULT 0,
  unanswered integer DEFAULT 0,
  is_completed boolean DEFAULT false
);

ALTER TABLE user_tryout_attempts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own attempts"
  ON user_tryout_attempts FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create own attempts"
  ON user_tryout_attempts FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own attempts"
  ON user_tryout_attempts FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Create user_answers table
CREATE TABLE IF NOT EXISTS user_answers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  attempt_id uuid NOT NULL REFERENCES user_tryout_attempts(id) ON DELETE CASCADE,
  question_id uuid NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
  selected_answer text CHECK (selected_answer IN ('A', 'B', 'C', 'D', 'E')),
  is_correct boolean DEFAULT false,
  time_spent_seconds integer DEFAULT 0,
  is_flagged boolean DEFAULT false,
  answered_at timestamptz DEFAULT now(),
  UNIQUE(attempt_id, question_id)
);

ALTER TABLE user_answers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own answers"
  ON user_answers FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_tryout_attempts
      WHERE user_tryout_attempts.id = user_answers.attempt_id
      AND user_tryout_attempts.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can create own answers"
  ON user_answers FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_tryout_attempts
      WHERE user_tryout_attempts.id = user_answers.attempt_id
      AND user_tryout_attempts.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can update own answers"
  ON user_answers FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_tryout_attempts
      WHERE user_tryout_attempts.id = user_answers.attempt_id
      AND user_tryout_attempts.user_id = auth.uid()
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_tryout_attempts
      WHERE user_tryout_attempts.id = user_answers.attempt_id
      AND user_tryout_attempts.user_id = auth.uid()
    )
  );

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_profiles_email ON profiles(email);
CREATE INDEX IF NOT EXISTS idx_questions_tryout_id ON questions(tryout_id);
CREATE INDEX IF NOT EXISTS idx_user_tryout_attempts_user_id ON user_tryout_attempts(user_id);
CREATE INDEX IF NOT EXISTS idx_user_tryout_attempts_tryout_id ON user_tryout_attempts(tryout_id);
CREATE INDEX IF NOT EXISTS idx_user_answers_attempt_id ON user_answers(attempt_id);
CREATE INDEX IF NOT EXISTS idx_user_answers_question_id ON user_answers(question_id);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_tryouts_updated_at
  BEFORE UPDATE ON tryouts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
