// 在 API 路由中 (pages/api/github.ts 或 app/api/github/route.ts)
import { NextResponse } from 'next/server'

export async function GET(path: string) {
  try {
    const response = await fetch(`https://api.github.com/repos/${path}`, {
      headers: {
        'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    })
    
    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }
    
    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 })
  }
}
