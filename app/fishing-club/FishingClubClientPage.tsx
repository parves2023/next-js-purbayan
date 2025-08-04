"use client"
import { Calendar, Fish } from "lucide-react"
import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import FishingClubGallery from "@/components/fishing-club-gallery"
import OptimizedImage from "@/components/optimized-image"

export default function FishingClubClientPage() {
  const [imagesLoaded, setImagesLoaded] = useState(false)

  const handleImageLoad = () => {
    setImagesLoaded(true)
  }

  return (
    <>
      <SiteHeader />
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <div className="absolute inset-0 bg-gray-900"></div>
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${imagesLoaded ? "opacity-100" : "opacity-0"}`}
        >
          <OptimizedImage
            src="https://i.ibb.co/C5WMK7px/Purbayan2.webp"
            alt="Fishing Club at Purbayan Properties Limited"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            onLoad={handleImageLoad}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-lg">
            Free Fish Hunting & Family Dayout
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl drop-shadow-md">
            Experience the joy of fishing and family time at our exclusive club
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-gray-900 rounded-lg p-8 shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-amber-500 flex items-center">
                  <Fish className="mr-2 h-6 w-6" />
                  Features
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>ফ্রি মাছ শিকার</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>ফ্যামিলিসহ অথবা সিঙ্গেল অংশ গ্রহন</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>লোকেশনঃ ঢাকা পূর্বাচল – রূপগঞ্জে (কুড়িল থেকে মাত্র ১৫ কিমি দূরত্বে)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>
                      স্লটঃ সকাল ৯টা – দুপুর ২টা
                      <br />
                      অথবা দুপুর ২টা – রাত ৮টা
                      <br />
                      অথবা সারাদিন সকাল ৯টা – রাত ৮টা
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900 rounded-lg p-8 shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-amber-500 flex items-center">
                  <Calendar className="mr-2 h-6 w-6" />
                  শর্তাবলী
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>কমপক্ষে ১ দিন আগে পূর্ব বুকিং করতে হবে</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>শুধুমাত্র হুইল বা বড়শীতে মাছ ধরা যাবে</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>২ কেজি পর্যন্ত মাছ ফ্রি (পরবর্তি প্রতি কেজি ৩০০ টাকা)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900 rounded-lg p-8 shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-amber-500">খাবারের ব্যবস্থা</h2>
                <p className="mb-4 text-gray-300">(লাকড়ীর রান্না, মেনু ফেসবুকে দেওয়া আছে)</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>সকালের নাস্তা</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>দুপুরের খাবার (১০ পদের ভর্তাসহ)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>বিকালে পিঠা-পুলি</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>রাতের ডিনার</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>(বার-বি-কিউ এর ব্যবস্থা আছে)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-900 rounded-lg p-8 shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-amber-500">ঘুরে দেখা</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>১০০ এর অধিক প্রজাতির ফুল-ফলের গাছ</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>অর্গানিক সবজি বাগান</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>১০০ এর অধিক বিঘা জমির পুকুর ও জলাধার</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>গ্রামীন ঐতিয্য</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>জ্যোৎস্না বা চাঁদনী রাত</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>পাথুরে পানিতে পা ভেজানো</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>নৌকা ভ্রমন</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900 rounded-lg p-8 shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-amber-500">খেলাধুলা</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>ব্যডমিন্টন</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>ভলিবল</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>ক্যারোম</span>
                  </li>
                </ul>
                <p className="mt-6 text-gray-300">আতশবাজি এবং ফানুস উড়ানোর ব্যবস্থা</p>
              </div>

              <div className="bg-gray-900 rounded-lg p-8 shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-amber-500">কেনা-কাটা</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>অর্গানিক সবজি</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>গ্রামীন মিষ্টি</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>তাঁতের শাড়ী, ইত্যাদি</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-amber-500">Fishing Club Gallery</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-12">
            Explore our beautiful fishing club through our curated gallery of images
          </p>

          <FishingClubGallery />
        </div>
      </section>
    </>
  )
}
