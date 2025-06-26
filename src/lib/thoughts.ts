// lib/getThoughts.ts
import { Thought } from "@/types/thought";
import { v4 as uuidv4 } from "uuid";

export function createThought(content: string): Thought {
  return {
    id: uuidv4(),
    content,
    createdAt: new Date(),
  };
}

export async function getThoughts(): Promise<Thought[]> {
  try {
    const path =
      "eurfelux/shelter-cafe-manager/contents/backend/app/data/thoughts.json";

    const res = await fetch(`/api/github?path=${path}`);
    console.log("res", res);

    if (!res.ok) {
      throw new Error("Failed to fetch thoughts");
    }

    const data = await res.json();
    // 2. 解码内容
    const fileContent = Buffer.from(data.content, "base64").toString("utf-8");

    // 3. 解析为 JSON
    const jsonData = JSON.parse(fileContent);
    return jsonData.map((thought: Thought) => ({
      ...thought,
      createdAt: new Date(thought.createdAt),
    }));
  } catch (error) {
    console.error("Error fetching thoughts:", error);
    return [];
  }
}
