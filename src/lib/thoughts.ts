// lib/getThoughts.ts
import { Thought } from '@/types/thought';
import { randomUUID } from 'crypto';

export function createThought(content: string): Thought {
    return {
        id: randomUUID(),
        content,
        createdAt: new Date()
    }
}


export async function getThoughts(): Promise<Thought[]> {
  try {
    // 在生产环境和开发环境都从公共URL获取
    const baseUrl = process.env.NODE_ENV === 'development' 
      ? 'http://localhost:3000' 
      : process.env.NEXT_PUBLIC_BASE_URL || '';
    
    const res = await fetch(`${baseUrl}/thoughts.json`);
    
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