-- Create keywords table
CREATE TABLE IF NOT EXISTS keywords (
  id SERIAL PRIMARY KEY,
  keyword TEXT NOT NULL,
  category TEXT NOT NULL,
  popularity INTEGER NOT NULL DEFAULT 50,
  relevance INTEGER NOT NULL DEFAULT 50,
  difficulty INTEGER NOT NULL DEFAULT 50,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create saved_keywords table
CREATE TABLE IF NOT EXISTS saved_keywords (
  id SERIAL PRIMARY KEY,
  keyword_id INTEGER REFERENCES keywords(id) ON DELETE CASCADE,
  session_id TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Add indexes for performance
CREATE INDEX IF NOT EXISTS idx_keywords_keyword ON keywords(keyword);
CREATE INDEX IF NOT EXISTS idx_keywords_category ON keywords(category);
CREATE INDEX IF NOT EXISTS idx_saved_keywords_session_id ON saved_keywords(session_id);

-- Insert some sample keywords for the most common job categories
INSERT INTO keywords (keyword, category, popularity, relevance, difficulty) VALUES
-- Profile keywords
('project manager', 'profile', 90, 85, 75),
('digital marketing', 'profile', 88, 80, 70),
('web developer', 'profile', 95, 90, 80),
('data analyst', 'profile', 92, 85, 65),
('product manager', 'profile', 89, 87, 72),
('software engineer', 'profile', 96, 92, 85),
('content strategist', 'profile', 75, 78, 60),
('ux designer', 'profile', 85, 82, 68),
('sales director', 'profile', 80, 75, 65),
('human resources', 'profile', 82, 78, 62),

-- Job search keywords
('remote', 'job', 95, 88, 80),
('entry level', 'job', 85, 78, 65),
('senior position', 'job', 80, 82, 70),
('work from home', 'job', 92, 85, 75),
('full-time', 'job', 85, 80, 60),
('part-time', 'job', 75, 70, 55),
('contract', 'job', 78, 72, 58),
('leadership', 'job', 82, 78, 68),
('tech jobs', 'job', 90, 85, 75),
('startup', 'job', 85, 80, 65),

-- Content keywords
('leadership tips', 'content', 88, 82, 70),
('career advice', 'content', 90, 85, 75),
('industry trends', 'content', 85, 80, 68),
('professional development', 'content', 82, 78, 65),
('networking strategies', 'content', 80, 75, 62),
('workplace culture', 'content', 78, 72, 60),
('productivity hacks', 'content', 85, 80, 65),
('innovation', 'content', 88, 82, 70),
('success stories', 'content', 80, 75, 62),
('future of work', 'content', 92, 88, 78);