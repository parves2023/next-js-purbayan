import React from 'react'

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gray-950">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Testimonials
      </h2>
      <p className="text-gray-400 text-base max-w-2xl mx-auto">
        Hear from the leadership team about the values and vision driving Purbayan Properties forward.
      </p>
    </div>

    <div className="space-y-12">
      {/* Chairman's Message */}
      <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 md:p-8 shadow-lg">
        <p className="text-lg italic text-gray-300 mb-4">
          “In my years in this industry I’ve learned that growth without integrity is never sustainable. At Purbayan we are not just developing land. We are nurturing trust. I see in this team a rare commitment to doing things right with care, patience and vision. Together we aim to build communities that stand the test of time and a company that earns its place through action not words.”
        </p>
        <div className="text-right">
          <p className="text-white font-semibold">Samsuddin Ahmed</p>
          <p className="text-sm text-gray-400">Chairman, Purbayan Properties Limited</p>
          <p className="text-sm text-gray-500">Former Senior Executive Director, Bashundhara Group</p>
        </div>
      </div>

      {/* Managing Director's Message */}
      <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 md:p-8 shadow-lg">
        <p className="text-lg italic text-gray-300 mb-4">
          As the Managing Director of Purbayan Properties Ltd. I take immense pride in leading an organization that goes beyond constructing buildings. We build thriving communities and enduring homes that transform lives. Our unwavering commitment to exceptional quality, cutting edge design and sustainable development defines who we are. Your trust is our most valuable asset and we relentlessly pursue excellence to surpass your highest expectations. Together we are shaping a brighter, more prosperous future.
        </p>
        <div className="text-right">
          <p className="text-white font-semibold">Mr. Mahbubul Alam</p>
          <p className="text-sm text-gray-400">Managing Director, Purbayan Properties Ltd.</p>
          <p className="text-sm text-gray-500">Managing Director, SNM Leathers Ltd.</p>
        </div>
      </div>

     
    </div>
  </div>
</section>

  )
}

export default TestimonialsSection