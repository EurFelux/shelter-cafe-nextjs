"use client";
import CenterContainer from "@/components/ui/center-container";
import { EmptyState } from "@/components/ui/empty-data";
import { Separator } from "@/components/ui/separator";
import { TypographyMuted, TypographyP } from "@/components/ui/typography";
import { getThoughts } from "@/lib/thoughts";
import { Thought } from "@/types/thought";
import { useEffect, useState } from "react";
import styled from "styled-components";
import ThoughtsSkeleton from "./thoughts-skeleton";

export default function Thoughts() {
  const [thoughts, setThoughts] = useState<Thought[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchThoughts = async () => {
      const fetchedThoughts = await getThoughts();
      fetchedThoughts.forEach((thought) => {
        thought.createdAt = new Date(thought.createdAt)
      })
      setThoughts(
        fetchedThoughts.sort(
          (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
        ),
      );
      setLoading(false);
    };

    // const mockThoughts = [
    //   {
    //     id: "1",
    //     content: "Just finished reading 'The Pragmatic Programmer'. So many valuable insights about software development!",
    //     createdAt: new Date("2024-03-15T10:30:00")
    //   },
    //   {
    //     id: "2",
    //     content: "Learning Next.js has been an amazing journey. The way it handles server-side rendering is elegant.",
    //     createdAt: new Date("2024-03-14T15:45:00")
    //   },
    //   {
    //     id: "3",
    //     content: "Today's coffee at the local cafe was exceptional. Perfect blend of flavors! ☕",
    //     createdAt: new Date("2024-03-13T09:20:00")
    //   },
    //   {
    //     id: "4",
    //     content: "Spent the evening stargazing. The universe is incredibly vast and beautiful. 🌟",
    //     createdAt: new Date("2024-03-12T22:15:00")
    //   }
    // ] satisfies Thought[]

    fetchThoughts();
    // setThoughts(mock)
  }, []);

  if (thoughts.length === 0 && !loading)
    return (
      <CenterContainer>
        <EmptyState />
      </CenterContainer>
    );

  return (
    <ThoughtsContainer className="flex flex-col grow justify-start gap-4 w-xs sm:w-sm md:w-md lg:w-lg">
      <ThoughtsDescriptionContainer className="p-4 my-16 border-2 border-blue-200 w-full">
        <TypographyP>
          我在这里记录我的一些想法🤔，或者灵感💡？也可能只是碎碎念🤐
        </TypographyP>
      </ThoughtsDescriptionContainer>
      {
        loading &&
        <ThoughtsSkeleton />
      }
      {!loading && thoughts.map((thought) => (
        <ThoughtItemContainer key={thought.id} className="self-stretch">
          <Separator />
          <ThoughtItem className="my-2 p-2 min-h-32 flex flex-col">
            <ThoughtContent className="grow flex flex-col justify-start">
              <TypographyP>{thought.content}</TypographyP>
            </ThoughtContent>
            <ThoughtFooter className="text-right pt-2">
              <TypographyMuted>
                {thought.createdAt.toLocaleString()}
              </TypographyMuted>
            </ThoughtFooter>
          </ThoughtItem>
        </ThoughtItemContainer>
      ))}
    </ThoughtsContainer>
  );
}

const ThoughtsDescriptionContainer = styled.div``;

const ThoughtsContainer = styled.div``;

const ThoughtItemContainer = styled.div``;

const ThoughtItem = styled.div``;

const ThoughtContent = styled.div``;

const ThoughtFooter = styled.div``;
