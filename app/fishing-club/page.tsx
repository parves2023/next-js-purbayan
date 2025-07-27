import { SiteHeader } from "@/components/site-header"
import Footer from "@/components/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import { Phone } from "lucide-react"
import FishingClubGallery from "@/components/fishing-club-gallery"

export const metadata: Metadata = {
  title: "Fishing Club | Purbayan Properties Limited",
  description: "Enjoy free fish hunting and family day out at Purbayan Properties Limited's exclusive fishing club.",
}

export default function FishingClubPage() {
  const galleryImages = [
    "https://i.ibb.co/spRvGwP0/12.jpg",
    "https://i.ibb.co/5gFS98tT/7.jpg",
    "https://i.ibb.co/q3kZYgTw/3.jpg",
    "https://i.ibb.co/PzWF9T8y/2.jpg",
    "https://i.ibb.co/xtRvRvkV/1.jpg",
  ]

  return (
    <>
      <SiteHeader />
      <main className="bg-gray-900 text-white pt-0">
        {/* Hero Section */}
        <section className="relative h-[50vh] w-full">
          <Image
            src="https://i.ibb.co/C5WMK7px/Purbayan2.webp"
            alt="Fishing Club at Purbayan Properties Limited"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
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
                <div className="bg-gray-800 rounded-lg p-8">
                  <h2 className="text-2xl font-bold mb-6 text-amber-500">Features</h2>
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

                <div className="bg-gray-800 rounded-lg p-8">
                  <h2 className="text-2xl font-bold mb-6 text-amber-500">শর্তাবলী</h2>
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

                <div className="bg-gray-800 rounded-lg p-8">
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
                <div className="bg-gray-800 rounded-lg p-8">
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

                <div className="bg-gray-800 rounded-lg p-8">
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

                <div className="bg-gray-800 rounded-lg p-8">
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
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">•</span>
                      <span>নিজ এলাকায় উৎপাদিত বাটিকের কাপড়</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">•</span>
                      <span>গ্রামীন বড়শী</span>
                    </li>
                  </ul>
                </div>





              </div>

              
            </div>
            <div className="bg-gray-800 rounded-lg p-8 text-center mt-10">
  <h2 className="text-4xl font-bold mb-6 text-amber-500">যোগাযোগ</h2>

  <div className="space-y-4 ">
    <a href="tel:01903573335">
      <Button variant="outline" className="w-full mb-1 justify-center bg-white text-amber-500 hover:bg-gray-400">
        <Phone className="mr-2 h-4 w-4" />
        01903573335
      </Button>
    </a>
    <a href="tel:01321192455">
      <Button variant="outline" className="w-full justify-center bg-white text-amber-500 hover:bg-gray-400">
        <Phone className="mr-2 h-4 w-4" />
        01321192455
      </Button>
    </a>
  </div>

  <p className="mt-6 text-gray-300">
    বাড়ী # ৬০ (দ্বিতীয় তলা), রোড # ৮ ও ৯, ব্লক # এফ, বনানী, ঢাকা
  </p>
</div>
          </div>
        </section>

        {/* Gallery Section */}
        <FishingClubGallery></FishingClubGallery>
        {/* <section className="py-16 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Fishing Club Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <div key={index} className="relative h-64 rounded-lg overflow-hidden group">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Fishing Club Gallery Image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </section> */}


      </main>
      <Footer />
    </>
  )
}
