"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import Logo from "./logo";

const components = [
  {
    title: "Residential Projects",
    href: "/projects?category=residential",
    description: "Premium residential plots and developments",
  },
  {
    title: "Commercial Projects",
    href: "/projects?category=commercial",
    description: "State-of-the-art commercial spaces for businesses",
  },
  {
    title: "Ongoing Projects",
    href: "/projects?status=ongoing",
    description: "See our current developments in progress",
  },
  {
    title: "Completed Projects",
    href: "/projects?status=completed",
    description: "View our successful completed projects",
  },
  {
    title: "Upcoming Projects",
    href: "/projects?status=upcoming",
    description: "Discover our future development plans",
  },
  {
    title: "Fishing Club",
    href: "/fishing-club",
    description: "Exclusive fishing club with family day out facilities",
  },
];

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerBg = "bg-gray-900 backdrop-blur-md";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 h-16",
        headerBg,
        isScrolled ? "shadow-md" : ""
      )}
    >
      {isMobileMenuOpen && (
        <div
          className="md:hidden bg-gray-900 text-white shadow-lg absolute top-16 left-0 w-full z-40 animate-slide-down"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <ul className="flex flex-col space-y-2 p-4">
            {[
              { href: "/", label: "Home" },
              { href: "/about-us", label: "About Us" },
              { href: "/projects", label: "Projects" },
              { href: "/purbayan-city", label: "Purbayan City" },
              { href: "/locations", label: "Locations" },
              { href: "/fishing-club", label: "Fishing Club" },
              { href: "/gallery", label: "Gallery" },
              { href: "/faq", label: "FAQ" },
              { href: "/contact", label: "Contact" },
              { href: "/privacy-policy", label: "Privacy Policy" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-4 py-2 rounded hover:bg-gray-800 transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Button className="w-full bg-[#f8c927] hover:bg-amber-600 text-black">
                Register Interest
              </Button>
            </li>
          </ul>
        </div>
      )}

      <div className="container flex h-full items-center transition-all duration-300">
        <div className="mr-6 flex items-center space-x-2 md:mr-7">
          <Logo />
        </div>

        {/* Desktop and Tablet Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/about-us"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Welcome to Purbayan Properties Ltd
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Discover premium residential and commercial properties
                          in prime locations.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/about-us" title="About Us">
                    Learn about our mission and values
                  </ListItem>
                  <ListItem href="/locations" title="Locations">
                    Find our properties in prime locations
                  </ListItem>
                  <ListItem href="/faq" title="FAQ">
                    Answers to commonly asked questions
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/purbayan-city" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Purbayan City
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/fishing-club" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Fishing Club
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>


                        <NavigationMenuItem>
              <Link href="/privacy-policy" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Privacy Policy
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>


          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button
            variant="default"
            className="hidden md:flex bg-[#f8c927] hover:bg-amber-600 text-black hover:scale-105 transition-all duration-300"
          >
            Register Interest
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-800  focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
