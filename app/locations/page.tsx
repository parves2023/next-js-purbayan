import Footer from "@/components/footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Location | Purbayan Properties Limited",
  description:
    "Discover the strategic location of Purbayan Properties Limited and its connectivity to key areas.",
};

export default function LocationPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-gray-900 text-white ">
        {/* Hero Section */}
        <section className="relative h-[40vh] w-full">
          <Image
            src="https://i.ibb.co.com/0jJ457w5/Purbayan3.jpg"
            alt="Purbayan Properties Limited Location"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-lg">
              Our Location
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl drop-shadow-md">
              Strategically located for convenience and accessibility
            </p>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-[#f8c927]">
                  Strategic Location
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  Purbayan Properties Limited is strategically located in one of
                  the most promising areas of Bangladesh, offering excellent
                  connectivity to major roads, business districts, educational
                  institutions, and healthcare facilities.
                </p>
                <p className="text-lg text-gray-300 mb-6">
                  Our development is just a short drive from key urban centers
                  while providing a peaceful and serene environment away from
                  the hustle and bustle of city life.
                </p>
                <div className="flex items-center mb-6">
                  <MapPin className="h-6 w-6 text-[#f8c927] mr-2" />
                  <address className="not-italic text-lg">
                    House-35 (5th floor), Road-7, Block-G, Banani, Dhaka.
                  </address>
                </div>
                <Button className="bg-[#f8c927] text-black hover:bg-yellow-600">
                  Get Directions
                </Button>
              </div>
              <div className="h-[500px] w-full rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.5983460988937!2d90.39941781498236!3d23.79477379291855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70c15010fcb%3A0x6e9cbf01e4b60418!2sBanani%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1651234567890!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Purbayan Properties Location"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Connectivity Section */}
        <section className="py-16 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-[#f8c927]">
              Connectivity & Proximity
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-900 p-6 rounded-lg">
                <div className="bg-primary/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
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
                    className="h-8 w-8 text-[#f8c927]"
                  >
                    <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
                    <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
                    <path d="M12 3v6"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Transportation</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>15 minutes from Kuril Flyover</li>
                  <li>20 minutes from Airport</li>
                  <li>Easy access to major highways</li>
                  <li>Public transportation available</li>
                </ul>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <div className="bg-primary/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
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
                    className="h-8 w-8 text-[#f8c927]"
                  >
                    <path d="M20 7h-9"></path>
                    <path d="M14 17H5"></path>
                    <circle cx="17" cy="17" r="3"></circle>
                    <circle cx="7" cy="7" r="3"></circle>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Education</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>Nearby international schools</li>
                  <li>10 minutes to leading universities</li>
                  <li>Educational institutes within reach</li>
                  <li>Libraries and learning centers</li>
                </ul>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <div className="bg-primary/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
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
                    className="h-8 w-8 text-[#f8c927]"
                  >
                    <path d="M19 9H9a2 2 0 0 0-2 2v.5"></path>
                    <path d="M3 15h10a2 2 0 0 1 2 2v.5"></path>
                    <rect width="4" height="4" x="15" y="15" rx="1"></rect>
                    <rect width="4" height="4" x="5" y="5" rx="1"></rect>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Healthcare</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>Multiple hospitals nearby</li>
                  <li>Clinics and diagnostic centers</li>
                  <li>Pharmacies within the vicinity</li>
                  <li>Emergency services accessible</li>
                </ul>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <div className="bg-primary/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
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
                    className="h-8 w-8 text-[#f8c927]"
                  >
                    <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"></path>
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                    <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"></path>
                    <path d="M2 7h20"></path>
                    <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Shopping & Leisure</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>Shopping malls within reach</li>
                  <li>Restaurants and cafes</li>
                  <li>Parks and recreational areas</li>
                  <li>Entertainment venues</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
