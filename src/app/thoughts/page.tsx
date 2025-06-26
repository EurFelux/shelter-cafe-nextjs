"use client";
import CenterContainer from "@/components/ui/center-container";
import { EmptyState } from "@/components/ui/empty-data";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { Separator } from "@/components/ui/separator";
import { TypographyMuted, TypographyP } from "@/components/ui/typography";
import { getThoughts } from "@/lib/thoughts";
import { Thought } from "@/types/thought";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Thoughts() {
  const [thoughts, setThoughts] = useState<Thought[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchThoughts = async () => {
      const fetchedThoughts = await getThoughts();
      setThoughts(
        fetchedThoughts.sort(
          (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
        )
      );
      setLoading(false);
    };

    fetchThoughts();
  }, []);

  if (loading)
    return (
      <CenterContainer>
        <LoadingSpinner />
      </CenterContainer>
    );

  if (!thoughts.length)
    return (
      <CenterContainer>
        <EmptyState />
      </CenterContainer>
    );

  return (
    <ThoughtsContainer className="flex flex-col grow justify-start gap-4 w-xl">
      <ThoughtsDescriptionContainer className="p-4 my-16 border-2 border-blue-200 w-full">
        <TypographyP>我在这里记录我的一些想法🤔，或者灵感💡？也可能只是碎碎念🤐</TypographyP>
      </ThoughtsDescriptionContainer>
      {thoughts.map((thought) => (
        <ThoughtItemContainer key={thought.id} className="self-stretch">
          <Separator />
          <ThoughtItem className="my-2 p-2 h-32 flex flex-col">
            <ThoughtContent className="grow flex flex-col justify-center">
              <TypographyP>{thought.content}</TypographyP>
            </ThoughtContent>
            <ThoughtFooter className="text-right">
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
