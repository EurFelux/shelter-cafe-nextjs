"use client";

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
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
    <div className="sticky top-0">
      <NavigationMenuContainer className="flex flex-col justify-center items-center p-2 bg-background">
        <NavigationMenu viewport={false} className="justify-center">
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
        <Separator />
      </NavigationMenuContainer>
    </div>
  );
}

const NavigationMenuContainer = styled.div``;
