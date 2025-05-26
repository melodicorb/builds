import { NextApiRequest, NextApiResponse } from 'next';
import { generateRelatedKeywords } from '@/utils/keywords';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  
  try {
    const { keyword, category } = req.query;
    
    if (!keyword) {
      return res.status(400).json({ message: 'Keyword parameter is required' });
    }
    
    // Set a default category if none provided
    const categoryValue = (category as string) || 'profile';
    
    // In a real application, we would fetch related keywords from the database
    // For this demo, we'll generate sample data
    const relatedKeywords = generateRelatedKeywords(
      keyword as string,
      categoryValue
    );
    
    return res.status(200).json(relatedKeywords);
  } catch (error) {
    console.error('Error fetching related keywords:', error);
    return res.status(500).json({ message: 'Error fetching related keywords' });
  }
}