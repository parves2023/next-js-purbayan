"use client"

import OptimizedImage from "@/components/optimized-image"

export default function PurbayanCityAssistedHome() {
  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <OptimizedImage
              src="https://i.ibb.co/vvCSG1gQ/ASSISTED-HOME.png"
              alt="ASSISTED HOME FOR SENIOR'S RESIDENTS"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#f8c927]">ASSISTED HOME FOR SENIOR'S RESIDENTS</h2>
            <p className="text-lg text-gray-300">
              পূর্বায়ন সিটি একটি সুচিন্তিতভাবে ডিজাইনকৃত আবাসিক এলাকা, যা একটি ভারসাম্যপূর্ণ, নিরাপদ এবং প্রাণবন্ত আবাসনের লক্ষ্যে গড়ে তোলা
              হয়েছে। ১০ বিঘা জমির উপর বিস্তৃত এই প্রকল্পে বয়স্কদের জন্য একটি সহায়তা প্রদানকারী আবাসন (assisted home) অন্তর্ভুক্ত রয়েছে, যা
              প্রবীণদের প্রয়োজনীয় যত্ন ও সেবা প্রদান করে। এছাড়াও প্রকল্পটিতে রয়েছে বিনোদনমূলক সুবিধা যেমন খেলার মাঠ, পার্ক, জগিং ট্র্যাক এবং
              একটি গল্ফ ক্লাব, যা সক্রিয় এবং স্বাস্থ্যকর জীবনধারাকে উৎসাহিত করে। সামাজিক চাহিদা পূরণের জন্য কমিউনিটি সেন্টার, ক্লাবহাউস এবং
              কফিশপ সহ সুবিধাজনক স্টোরগুলি প্লটগুলোর বিভিন্ন স্থানে কৌশলগতভাবে স্থাপন করা হয়েছে। এই প্রকল্পে ব্যাপক স্বাস্থ্যসেবা সুবিধাও
              অন্তর্ভুক্ত রয়েছে, যেমন হাসপাতাল, মেডিক্যাল কলেজ, ক্লিনিক এবং জরুরি সেবা ইউনিট, যা বাসিন্দাদের মানসম্পন্ন চিকিৎসা সেবার প্রাপ্তি
              নিশ্চিত করে। এর পাশাপাশি, পানি, বিদ্যুৎ এবং রক্ষণাবেক্ষণ সেবার জন্য ইউটিলিটি অফিসগুলো একটি নিরবচ্ছিন্ন জীবনযাপনের অভিজ্ঞতা
              নিশ্চিত করে।
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
