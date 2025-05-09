"use client";

import type React from "react";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTheme } from "next-themes";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send this to your API
      console.log("Subscribing email:", email);
      setSubscribed(true);
      setEmail("");

      // Reset the subscribed message after 3 seconds
      setTimeout(() => {
        setSubscribed(false);
      }, 3000);
    }
  };

  const logoSrc =
    theme === "dark"
      ? "https://i.ibb.co/cKrXhpYM/Purbayan-Properties-Limited-Logo-White.webp"
      : "https://i.ibb.co/NgNThXsZ/Purbayan-Properties-Limited-Logo.webp";

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link
              href="/"
              className="flex flex-col items-center md:items-start mb-4"
            >
              <div className="relative h-16 w-48">
                <Image
                  src={logoSrc || "/placeholder.svg"}
                  alt="Purbayan Properties Limited Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-gray-400 mt-4 text-center md:text-left">
              Purbayan Properties Limited offers premium land development
              projects and modern living spaces in Bangladesh.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mt-6">
              <Link
                href="https://facebook.com"
                className="text-gray-400 hover:text-amber-500 transition-colors"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://linkedin.com"
                className="text-gray-400 hover:text-amber-500 transition-colors"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://instagram.com"
                className="text-gray-400 hover:text-amber-500 transition-colors"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://twitter.com"
                className="text-gray-400 hover:text-amber-500 transition-colors"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4 text-center md:text-left">
              Contact Info
            </h3>
            <ul className="space-y-4 text-center md:text-left">
              <li className="flex items-center justify-center md:justify-start text-gray-400">
                <Phone size={16} className="mr-2 text-amber-500" />
                <Link
                  href="tel:01713034079"
                  className="hover:text-amber-500 transition-colors"
                >
                  CALL 01713034079
                </Link>
              </li>
              <li className="flex items-center justify-center md:justify-start text-gray-400">
                <Mail size={16} className="mr-2 text-amber-500" />
                <Link
                  href="mailto:info@purbayanbd.com"
                  className="hover:text-amber-500 transition-colors"
                >
                  info@purbayanbd.com
                </Link>
              </li>
              <li className="flex items-start justify-center md:justify-start text-gray-400">
                <MapPin
                  size={16}
                  className="mr-2 text-amber-500 flex-shrink-0 mt-1"
                />
                <address className="not-italic">
                  House-35 (5th floor), Road-7,
                  <br />
                  Block-G, Banani, Dhaka.
                </address>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4 text-center md:text-left">
              More Info
            </h3>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <Link
                  href="/plot-booking"
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Plot Booking Form
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="pt-4">
                <h4 className="text-white font-semibold mb-2">Office Hour</h4>
                <p className="text-gray-400">Sunday - Thursday 10AM - 6PM</p>
                <p className="text-gray-400">Saturday 10AM - 2PM</p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4 text-center md:text-left">
              Subscribe to newsletter
            </h3>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="flex flex-col space-y-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-gray-800 border-gray-700 text-white"
                />
                <Button
                  type="submit"
                  className="bg-[#f8c927] hover:bg-yellow-600 text-black w-full flex items-center justify-center"
                >
                  See More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              {subscribed && (
                <p className="text-green-500 text-sm">
                  Thank you for subscribing!
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Large iT, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
