// app/api/thoughts/route.ts
import { db } from "@/lib/firebase"; // 注意路径可能不同
import { Thought } from "@/types/thought";
import { collection, getDocs, Timestamp } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const snapshot = await getDocs(collection(db, "thoughts"));
    const thoughts: Thought[] = snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        content: data.content,
        createdAt: (data.createdAt as Timestamp).toDate(),
      };
    });

    return NextResponse.json(thoughts);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch thoughts." },
      { status: 500 }
    );
  }
}
