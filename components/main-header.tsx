"use client";

import Link from "next/link";
import Image from "next/image";
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
import { useTheme } from "next-themes";
import { Menu, X } from "lucide-react";

export function MainHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoSrc =
    "https://i.ibb.co/cKrXhpYM/Purbayan-Properties-Limited-Logo-White.webp";

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300 h-16 bg-white/30 backdrop-blur-md dark:bg-gray-900/30",
        isScrolled ? "shadow-md" : ""
      )}
    >
      <div className="container flex h-full items-center transition-all duration-300">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <div className="text-lg bg-transparent font-semibold leading-tight flex items-center md:mr-7">
            <div className="relative h-16 w-48">
              <Image
                src={logoSrc || "/placeholder.svg"}
                alt="Purbayan Properties Limited Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </Link>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about-us" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:grid-cols-2">
                  <ListItem
                    title="Residential Projects"
                    href="/projects?category=residential"
                  >
                    Premium residential plots and developments
                  </ListItem>
                  <ListItem
                    title="Commercial Projects"
                    href="/projects?category=commercial"
                  >
                    State-of-the-art commercial spaces
                  </ListItem>
                  <ListItem
                    title="Ongoing Projects"
                    href="/projects?status=ongoing"
                  >
                    See our current developments
                  </ListItem>
                  <ListItem
                    title="Completed Projects"
                    href="/projects?status=completed"
                  >
                    View our successful projects
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/locations" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Location
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
              <Link href="/gallery" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Gallery
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/faq" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  FAQ
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
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button
            variant="default"
            className="hidden md:flex hover:scale-105 transition-all duration-300 bg-[#f8c927] hover:bg-amber-600 text-black"
          >
            Register Interest
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="md:hidden hover:scale-105 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg absolute top-16 left-0 w-full z-40 animate-slide-down">
          <ul className="flex flex-col space-y-2 p-4">
            {[
              { href: "/", label: "Home" },
              { href: "/about-us", label: "About Us" },
              { href: "/projects", label: "Projects" },
              { href: "/purbayan-city", label: "Purbayan City" },
              { href: "/locations", label: "Location" },
              { href: "/fishing-club", label: "Fishing Club" },
              { href: "/faq", label: "FAQ" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-4 py-2 rounded hover:bg-blue transition-all duration-300"
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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
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
