"use client";

import type React from "react";
import { FaWhatsapp } from "react-icons/fa";

import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "./logo";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex flex-col items-center md:items-start mb-4">
              <Logo width={220} height={85} />
            </div>
            <p className="text-gray-400 mt-4 text-center md:text-left">
              Purbayan Properties Limited offers premium land development
              projects and modern living spaces in Bangladesh.
            </p>

            {/* social media & contact links */}
            <div className="flex flex-wrap justify-center md:justify-start items-center space-x-4 space-y-2 mt-6 text-gray-400">
              {/* Facebook */}
              <Link
                href="https://facebook.com"
                className="hover:text-amber-500 transition-colors flex items-center space-x-1"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>

              {/* WhatsApp */}
              <Link
                href="https://api.whatsapp.com/send/?phone=8801841398560&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-500 transition-colors flex items-center space-x-1"
              >
                <FaWhatsapp size={20} />
                <span className="sr-only">WhatsApp</span>
              </Link>

              {/* Phone (click-to-call) */}
              <Link
                href="tel:01841398560"
                className="hover:text-amber-500 transition-colors flex items-center space-x-1"
              >
                <Phone size={20} />
                <span className="sr-only">Call us</span>
              </Link>

              {/* Email */}
              <Link
                href="mailto:info@purbayanbd.com"
                className="hover:text-amber-500 transition-colors flex items-center space-x-1"
              >
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

<div>
  <h3 className="text-white font-bold text-lg mb-4 text-center md:text-left">
    Contact Us
  </h3>
  <ul className="space-y-4 text-center md:text-left text-gray-400">
    <li>
      <strong className="text-white">Purbayan Properties Ltd.</strong>
    </li>
    <li>
      <strong className="text-white">Head Office:</strong>
      <br />
      House # 35 (5th Floor), Road # 7, Block # G, Banani, Dhaka
    </li>

    <li>
      <strong className="text-white">For Inquiries:</strong>
      <br />
      Bangladesh:{" "}
      <Link
        href="tel:+8801806426117"
        className="hover:text-amber-500 transition-colors"
      >
        +880 1806-426117
      </Link>
      <br />
      United Kingdom:{" "}
      <Link
        href="tel:+447795082404"
        className="hover:text-amber-500 transition-colors"
      >
        +44 7795 082404
      </Link>
    </li>
  </ul>
</div>


<div>
  <h3 className="text-white font-bold text-lg mb-4 text-center md:text-left">
    Office Locations
  </h3>
  <ul className="space-y-3 text-center md:text-left text-gray-400">
    <li>
      <strong className="text-white">Corporate Office:</strong><br />
      Sumsun Place, 5th Floor, House #35, Road #07,<br />
      Block #G, Banani, Dhaka-1213
    </li>
    <li>
      <strong className="text-white">Sales Office:</strong><br />
      House #60, Road #8 & 9, Block #F, Banani, Dhaka-1213
    </li>
    <li>
      <strong className="text-white">Site Office:</strong><br />
      Purbachal Purbayan City, Gutulia, Rupganj, Narayanganj
    </li>
  </ul>
</div>


          {/* newsletter subscription */}
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
                  className="bg-[#f8c927] hover:bg-amber-600 text-black w-full flex items-center justify-center"
                >
                  Subscribe <ArrowRight className="ml-2 h-4 w-4" />
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

        <div className=" border-gray-800 mt-4 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Purbayan Properties Ltd. All Rights Reserved.
            Powered by SentiKat.
          </p>
        </div>
      </div>
    </footer>
  );
}
