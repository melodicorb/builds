import { NextApiRequest, NextApiResponse } from 'next';
import pool from '@/lib/db';
import { generateSampleKeywords } from '@/utils/keywords';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      try {
        const { keyword, category } = req.query;
        
        if (!keyword) {
          // If no keyword is provided, return popular keywords from the database
          const result = await pool.query(
            'SELECT * FROM keywords ORDER BY popularity DESC LIMIT 20'
          );
          
          if (result.rows.length === 0) {
            // If no keywords in database yet, return sample data
            const sampleKeywords = generateSampleKeywords('linkedin', 'profile');
            return res.status(200).json(sampleKeywords);
          }
          
          return res.status(200).json(result.rows);
        }
        
        // Search for keywords that match the query
        const result = await pool.query(
          'SELECT * FROM keywords WHERE keyword ILIKE $1 AND ($2::text IS NULL OR category = $2) ORDER BY popularity DESC LIMIT 20',
          [`%${keyword}%`, category || null]
        );
        
        if (result.rows.length === 0) {
          // If no matching keywords in database, generate sample data
          const sampleKeywords = generateSampleKeywords(keyword as string, (category as string) || 'profile');
          return res.status(200).json(sampleKeywords);
        }
        
        return res.status(200).json(result.rows);
      } catch (error) {
        console.error('Error fetching keywords:', error);
        return res.status(500).json({ message: 'Error fetching keywords' });
      }
      
    default:
      return res.status(405).json({ message: 'Method not allowed' });
  }
}