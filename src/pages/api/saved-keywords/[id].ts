import { NextApiRequest, NextApiResponse } from 'next';
import pool from '@/lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = parseInt(req.query.id as string);
  
  if (isNaN(id)) {
    return res.status(400).json({ message: 'Invalid ID' });
  }
  
  switch (req.method) {
    case 'DELETE':
      try {
        // Delete the saved keyword
        await pool.query(
          'DELETE FROM saved_keywords WHERE id = $1',
          [id]
        );
        
        return res.status(200).json({ message: 'Saved keyword deleted' });
      } catch (error) {
        console.error('Error deleting saved keyword:', error);
        return res.status(500).json({ message: 'Error deleting saved keyword' });
      }
      
    default:
      return res.status(405).json({ message: 'Method not allowed' });
  }
}