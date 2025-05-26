import { NextApiRequest, NextApiResponse } from 'next';
import pool from '@/lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      try {
        const { sessionId } = req.query;
        
        if (!sessionId) {
          return res.status(400).json({ message: 'Session ID is required' });
        }
        
        const result = await pool.query(
          `SELECT sk.*, k.* 
           FROM saved_keywords sk 
           JOIN keywords k ON sk.keyword_id = k.id 
           WHERE sk.session_id = $1 
           ORDER BY sk.created_at DESC`,
          [sessionId]
        );
        
        // Transform the result to include the keyword object
        const savedKeywords = result.rows.map(row => ({
          id: row.id,
          keyword_id: row.keyword_id,
          session_id: row.session_id,
          created_at: row.created_at,
          keyword: {
            id: row.keyword_id,
            keyword: row.keyword,
            category: row.category,
            popularity: row.popularity,
            relevance: row.relevance,
            difficulty: row.difficulty,
            views_percentage: row.views_percentage || Math.floor(Math.random() * 60) + 40, // Ensure views_percentage is included
            created_at: row.created_at
          }
        }));
        
        return res.status(200).json(savedKeywords);
      } catch (error) {
        console.error('Error fetching saved keywords:', error);
        return res.status(500).json({ message: 'Error fetching saved keywords' });
      }
      
    case 'POST':
      try {
        const { keywordId, sessionId } = req.body;
        
        if (!keywordId || !sessionId) {
          return res.status(400).json({ message: 'Keyword ID and Session ID are required' });
        }
        
        // Check if the keyword exists
        const keywordCheck = await pool.query(
          'SELECT * FROM keywords WHERE id = $1',
          [keywordId]
        );
        
        if (keywordCheck.rows.length === 0) {
          // If keyword doesn't exist, create it with sample data
          await pool.query(
            `INSERT INTO keywords (id, keyword, category, popularity, relevance, difficulty, views_percentage) 
             VALUES ($1, $2, $3, $4, $5, $6, $7)`,
            [
              keywordId,
              `Sample Keyword ${keywordId}`,
              'profile',
              Math.floor(Math.random() * 50) + 50,
              Math.floor(Math.random() * 40) + 60,
              Math.floor(Math.random() * 70) + 30,
              Math.floor(Math.random() * 60) + 40 // Add views_percentage
            ]
          );
        }
        
        // Check if already saved
        const existingCheck = await pool.query(
          'SELECT * FROM saved_keywords WHERE keyword_id = $1 AND session_id = $2',
          [keywordId, sessionId]
        );
        
        if (existingCheck.rows.length > 0) {
          return res.status(200).json({ message: 'Keyword already saved' });
        }
        
        // Save the keyword
        const result = await pool.query(
          'INSERT INTO saved_keywords (keyword_id, session_id) VALUES ($1, $2) RETURNING *',
          [keywordId, sessionId]
        );
        
        return res.status(201).json(result.rows[0]);
      } catch (error) {
        console.error('Error saving keyword:', error);
        return res.status(500).json({ message: 'Error saving keyword' });
      }
      
    default:
      return res.status(405).json({ message: 'Method not allowed' });
  }
}