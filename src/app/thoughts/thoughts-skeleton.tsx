import { Separator } from "@/components/ui/separator"
import styled from "styled-components"
import ThoughtSkeleton from "./thought-skeleton"

type Props = {
    className?: string
}

export default function ThoughtsSkeleton({ className }: Props) {
    return (
        <ThoughtSkeletonContainer className={className}>
            <ThoughtSkeleton className="my-2 p-2" />
            <Separator />
            <ThoughtSkeleton className="my-2 p-2" />
            <Separator />
            <ThoughtSkeleton className="my-2 p-2" />
            <Separator />
            <ThoughtSkeleton className="my-2 p-2" />
            <Separator />
            <ThoughtSkeleton className="my-2 p-2" />
        </ThoughtSkeletonContainer>
    )
}

const ThoughtSkeletonContainer = styled.div``
