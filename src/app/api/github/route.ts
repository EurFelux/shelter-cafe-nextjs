// app/api/github/route.ts
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const path = searchParams.get('path'); // 从查询参数获取 path
    
    const response = await fetch(`https://api.github.com/repos/${path}`, {
      headers: {
        'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`, // ✅ 服务端可安全访问
        'Accept': 'application/vnd.github.v3+json'
      }
    });
    
    if (!response.ok) {
      console.error('Failed to fetch data', response)
      throw new Error('Failed to fetch data')};
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message }, 
      { status: 500 }
    );
  }
}
