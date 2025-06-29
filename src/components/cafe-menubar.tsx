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
  const navItems = [
    {
      link: "/",
      name: "未来"
    },
    {
      link: "/thoughts",
      name: "思绪"
    },

  ]

  return (
    <NavigationMenuContainer className="flex justify-center p-2 sticky top-0 bg-background">
      <NavigationMenu viewport={false} className="justify-center self-stretch">
        <NavigationMenuList className="flex justify-center">
          {
            navItems.map((item) => {
              return (
                <NavigationMenuItem key={item.link}>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href={item.link}>{item.name}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )
            })
          }

        </NavigationMenuList>
      </NavigationMenu>
    </NavigationMenuContainer>
  );
}

const NavigationMenuContainer = styled.div``;
