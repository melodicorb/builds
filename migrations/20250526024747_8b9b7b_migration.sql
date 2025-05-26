-- Add views_percentage column to keywords table if it doesn't exist
ALTER TABLE keywords ADD COLUMN IF NOT EXISTS views_percentage INTEGER NOT NULL DEFAULT 0;

-- Update existing records with random values for views_percentage
UPDATE keywords SET views_percentage = floor(random() * 60 + 40) WHERE views_percentage = 0;

-- Update sample data to include views_percentage
ALTER TABLE keywords DROP CONSTRAINT IF EXISTS keywords_views_percentage_check;
ALTER TABLE keywords ADD CONSTRAINT keywords_views_percentage_check CHECK (views_percentage >= 0 AND views_percentage <= 100);