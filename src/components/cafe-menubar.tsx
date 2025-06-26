"use client";

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import styled from "styled-components";

export function CafeNavigationMenu() {
  return (
    <NavigationMenuContainer className="flex justify-center p-2 mx-2 border-b-2 border-b-gray-100">
      <NavigationMenu viewport={false} className="justify-center self-stretch">
        <NavigationMenuList className="flex justify-center">
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href={"/"}>Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/thoughts">Thoughts</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </NavigationMenuContainer>
  );
}

const NavigationMenuContainer = styled.div``;
