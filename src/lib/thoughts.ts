// lib/getThoughts.ts
import { Thought } from "@/types/thought";

export async function getThoughts(): Promise<Thought[]> {
  try {
    const res = await fetch(`/api/thoughts`);

    if (!res.ok) {
      throw new Error("Failed to fetch thoughts");
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching thoughts:", error);
    return [];
  }
}
