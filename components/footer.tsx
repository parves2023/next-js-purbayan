import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram, Twitter } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex flex-col items-center md:items-start mb-4">
              <div className="relative h-12 w-20">
                <Image src="/purbayan-logo.png" alt="Purbayan City Logo" fill className="object-contain" />
              </div>
              <div className="text-center md:text-left text-white mt-2">
                <div className="text-sm font-bold">Purbayan</div>
                <div className="text-xs">City</div>
              </div>
            </Link>
            <p className="text-gray-400 mt-4 text-center md:text-left">
              Purbayan City offers premium land development projects and modern living spaces in Bangladesh.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mt-6">
              <Link href="https://facebook.com" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://linkedin.com" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://instagram.com" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://twitter.com" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4 text-center md:text-left">Quick Links</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <Link href="/" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/purbayan-group" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Purbayan Group
                </Link>
              </li>
              <li>
                <Link href="/land-project" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Land Project
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/important" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Important
                </Link>
              </li>
              <li>
                <Link href="/fishing-club" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Fishing Club
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4 text-center md:text-left">Projects</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <Link
                  href="/projects/purbayan-city-phase-1"
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Purbayan City Phase 1
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/purbayan-commercial-hub"
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Purbayan Commercial Hub
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/purbayan-green-valley"
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Purbayan Green Valley
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/purbayan-waterfront"
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Purbayan Waterfront
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/purbayan-business-park"
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Purbayan Business Park
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4 text-center md:text-left">Contact Us</h3>
            <ul className="space-y-4 text-center md:text-left">
              <li className="flex items-center justify-center md:justify-start text-gray-400">
                <Phone size={16} className="mr-2 text-amber-500" />
                <Link href="tel:+8801713034079" className="hover:text-amber-500 transition-colors">
                  +8801713034079
                </Link>
              </li>
              <li className="flex items-center justify-center md:justify-start text-gray-400">
                <Mail size={16} className="mr-2 text-amber-500" />
                <Link href="mailto:info@purbayanbd.com" className="hover:text-amber-500 transition-colors">
                  info@purbayanbd.com
                </Link>
              </li>
              <li className="flex items-center justify-center md:justify-start text-gray-400">
                <MapPin size={16} className="mr-2 text-amber-500 flex-shrink-0" />
                <address className="not-italic">123 Gulshan Avenue, Dhaka 1212, Bangladesh</address>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center">
          <p className="text-gray-400 text-sm">© {currentYear} Purbayan City. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
