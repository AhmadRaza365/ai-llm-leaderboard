"use client"
import React, { type ComponentProps } from "react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { CATEGORIES } from "@/data/Categories"
import ListItem from "../ui/ListItem"
import Link from "next/link"

export const NavMenu = (props: ComponentProps<typeof NavigationMenu>) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className="gap-1 space-x-0 text-sm">
      <NavigationMenuItem id="categories">
        <NavigationMenuTrigger>Leaderboards</NavigationMenuTrigger>
        <NavigationMenuContent className="z-100">
          <ul className="w-40">
            {CATEGORIES.map((category, index) => {
              return (
                <ListItem
                  key={`nav-menu-categories-${index}`}
                  href={`/leaderboards/${category.slug}`}
                  title={category.name}
                >
                  {category.name}
                </ListItem>
              )
            })}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <Link href="/models">New Models</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <Link href="/blog">Blog</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
)
