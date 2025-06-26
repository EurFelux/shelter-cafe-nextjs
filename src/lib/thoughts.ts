// lib/getThoughts.ts
import { GET } from '@/app/api/github';
import { Thought } from '@/types/thought';
import { v4 as uuidv4 } from 'uuid';

export function createThought(content: string): Thought {
    return {
        id: uuidv4(),
        content,
        createdAt: new Date()
    }
}


export async function getThoughts(): Promise<Thought[]> {
  try {
    const path = 'eurfelux/shelter-cafe-manager/thoughts.json'
  
    const res = await GET(path)
    console.log("res", res)
    
    if (!res.ok) {
      throw new Error('Failed to fetch thoughts');
    }
    
    const data = await res.json();
    return data.map((thought: Thought) => ({
      ...thought,
      createdAt: new Date(thought.createdAt)
    }));
  } catch (error) {
    console.error('Error fetching thoughts:', error);
    return [];
  }
}