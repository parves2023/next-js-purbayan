"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import React, { useEffect, useState } from "react"

const components = [
  {
    title: "Playground Equipment",
    href: "/equipment",
    description: "High-quality playground equipment designed for safety and fun.",
  },
  {
    title: "Indoor Activities",
    href: "/indoor",
    description: "Engaging indoor activities for all weather conditions.",
  },
  {
    title: "Outdoor Adventures",
    href: "/outdoor",
    description: "Exciting outdoor adventures to explore nature and stay active.",
  },
  {
    title: "Educational Programs",
    href: "/programs",
    description: "Programs designed to combine learning with play for children of all ages.",
  },
  {
    title: "Birthday Parties",
    href: "/parties",
    description: "Special birthday packages to create memorable celebrations.",
  },
  {
    title: "Safety Guidelines",
    href: "/safety",
    description: "Our comprehensive safety guidelines for a worry-free experience.",
  },
]

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
<header className={cn(
  "sticky top-0 z-50 w-full border-b transition-all duration-300 h-16 bg-[##1f2937] backdrop-blur-md",

)}>

{/* isScrolled
    ? "h-16 bg-white/30 backdrop-blur-md"
    : "h-36 bg-background/95" */}

      <div className="container flex h-full items-center transition-all duration-300">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          {/* {!isScrolled && (
            <Image
              src="/PurbayanLogoblack.png"
              alt="Logo"
              width={80}
              height={200}
              className="h-32 w-36 transition-opacity duration-300"
            />
          )} */}
       <div className="text-lg bg-transparent font-semibold leading-tight flex items-center md:mr-7">
            <Image
              src="https://i.ibb.co/Dfv2YPBN/Purbayanlogolight.webp"
              alt="Logo"
              width={80}
              height={200}
              className="h-[3.9rem] w-20 transition-opacity duration-300"
            />
            <div className="transition-opacity duration-300 uppercase">
  Purbayan <br />
  properties ltd.
</div>

          </div>
        </Link>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">Welcome to Purbayan Properties Ltd</div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Discover a world of fun, learning, and adventure for children of all ages.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/about" title="About Us">
                    Learn about our mission and values
                  </ListItem>
                  <ListItem href="/locations" title="Locations">
                    Find a PlayWorld center near you
                  </ListItem>
                  <ListItem href="/faq" title="FAQ">
                    Answers to commonly asked questions
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Features</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
                  {components.map((component) => (
                    <ListItem key={component.title} title={component.title} href={component.href}>
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/fishing-club" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Fishing Club</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button variant="default" className="hidden md:flex bg-[#f8c927] hover:bg-[#fe584e]">
            Register Interest
          </Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a"> & { title: string }>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"
