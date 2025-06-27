// app/api/github/route.ts
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const path = searchParams.get("path");

    const response = await fetch(`https://api.github.com/repos/${path}`, {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
      },
    });

    if (!response.ok) {
      console.error("GitHub API error:", response.status, response.statusText);
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const data = await response.json();

    // 添加缓存控制头 (客户端缓存1小时)
    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
        "CDN-Cache-Control": "public, s-maxage=3600",
        Vary: "Accept-Encoding",
      },
    });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: (error as Error).message || "Internal server error" },
      { status: 500 }
    );
  }
}
