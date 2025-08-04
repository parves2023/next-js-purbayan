"use client";

import Link from "next/link";

export default function CampaignBanner() {
  return (
    <section className="bg-yellow-100 py-8 px-4 md:px-12 text-center rounded-2xl shadow-md mt-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
        Eid al-Adha Special Offer – 20% Discount on A Block Ready Plots
      </h2>
      <p className="text-gray-700 text-lg mb-4">
        Limited availability | Instant registration and acquisition
      </p>
      <Link
        href="https://wa.me/8801XXXXXXXXX" // Replace with your WhatsApp or contact link
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
      >
        Claim Offer
      </Link>
    </section>
  );
}
