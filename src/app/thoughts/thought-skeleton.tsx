import CenterContainer from "@/components/ui/center-container"
import { Skeleton } from "@/components/ui/skeleton"
import styled from "styled-components"

type Props = {
    className?: string
}

export default function ThoughtSkeleton({ className }: Props) {
    return (
        <CenterContainer className={className}>
            <SkeletonContainer className="flex my-2 p-2 flex-col items-start gap-2">
                <Skeleton className="h-4 w-xs sm:w-sm md:w-md lg:w-lg mb-2"></Skeleton>
                <Skeleton className="h-4 w-xs sm:w-sm md:w-md lg:w-lg mb-2"></Skeleton>
                <Skeleton className="h-4 w-xs"></Skeleton>
            </SkeletonContainer>
        </CenterContainer>
    )
}

const SkeletonContainer = styled.div``
