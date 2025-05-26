// Simple function to generate or retrieve a session ID
export const generateSessionId = (): string => {
  const storageKey = 'linkedin_keywords_session_id';
  
  // Check if we already have a session ID in localStorage
  if (typeof window !== 'undefined') {
    const existingSessionId = localStorage.getItem(storageKey);
    
    if (existingSessionId) {
      return existingSessionId;
    }
    
    // Generate a new session ID
    const newSessionId = Math.random().toString(36).substring(2, 15) + 
                         Math.random().toString(36).substring(2, 15);
    
    // Store it for future use
    localStorage.setItem(storageKey, newSessionId);
    
    return newSessionId;
  }
  
  // Fallback for server-side rendering
  return 'server-side-session';
}