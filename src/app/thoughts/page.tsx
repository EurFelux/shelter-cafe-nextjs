"use client";
import { Separator } from "@/components/ui/separator";
import { TypographyMuted } from "@/components/ui/typography";
import { getThoughts } from "@/lib/thoughts";
import { Thought } from "@/types/thought";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Thoughts() {
  const [thoughts, setThoughts] = useState<Thought[]>([]);

  useEffect(() => {
    getThoughts().then((thoughts) => {
      setThoughts(
        thoughts.toSorted(
          (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
        )
      );
    });
  }, []);

  return (
    <ThoughtsContainer className="flex flex-col justify-start gap-4 items-center mx-48">
      {thoughts &&
        thoughts.map((thought) => {
          return (
            <>
              <ThoughtItem
                key={thought.id}
                className="my-2 p-2 w-xl h-32 flex flex-col"
              >
                <ThoughtContent className="grow">
                  {thought.content}
                </ThoughtContent>
                <ThoughtFooter className="text-right">
                  <TypographyMuted>
                    {thought.createdAt.toLocaleString()}
                  </TypographyMuted>
                </ThoughtFooter>
              </ThoughtItem>
              <Separator></Separator>
            </>
          );
        })}
    </ThoughtsContainer>
  );
}

const ThoughtsContainer = styled.div``;

const ThoughtItem = styled.div``;

const ThoughtContent = styled.div``;

const ThoughtFooter = styled.div``;
