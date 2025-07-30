"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Send } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({
    type: null,
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        type: "error",
        message: "Please fill in all required fields.",
      })
      return
    }

    console.log("Form submitted:", formData)

    setFormStatus({
      type: "success",
      message: "Thank you for your message. We'll get back to you soon!",
    })

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })

    setTimeout(() => {
      setFormStatus({
        type: null,
        message: "",
      })
    }, 5000)
  }

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Contact Us</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Have questions about our projects or interested in learning more? Get in touch with our team.
          </p>
        </div>



        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-900 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-white">Send Us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Name <span className="text-amber-500">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-gray-800 border-gray-700 text-white"
                    required
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Email <span className="text-amber-500">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-gray-800 border-gray-700 text-white"
                    required
                    aria-required="true"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Your Message <span className="text-amber-500">*</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="bg-gray-800 border-gray-700 text-white w-full"
                  required
                  aria-required="true"
                />
              </div>

              {formStatus.type && (
                <div
                  className={`p-4 rounded ${
                    formStatus.type === "success" ? "bg-green-900/50 text-green-300" : "bg-red-900/50 text-red-300"
                  }`}
                  role="alert"
                  aria-live="polite"
                >
                  {formStatus.message}
                </div>
              )}

              <Button
                type="submit"
                className="bg-amber-500 hover:bg-amber-600 text-black w-full flex items-center justify-center"
              >
                Send Message <Send className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </form>
          </div>


{/* Contact Information */}
<div className="space-y-8">
  <div className="bg-gray-900 rounded-lg p-8">
    <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>

    <div className="space-y-6">
      <div className="flex items-start">
        <div className="bg-amber-500 rounded-full p-3 mr-4">
          <Phone className="h-6 w-6 text-white" aria-hidden="true" />
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-1">Phone</h4>
          <p className="text-gray-300">
            Bangladesh: +880 1806-426117 <br />
            United Kingdom: +44 7795 082404
          </p>
        </div>
      </div>

      <div className="flex items-start">
        <div className="bg-amber-500 rounded-full p-3 mr-4">
          <Mail className="h-6 w-6 text-white" aria-hidden="true" />
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
          <a
            href="mailto:info@purbayanbd.com"
            className="text-gray-300 hover:text-amber-500 transition-colors"
          >
            info@purbayanbd.com
          </a>
        </div>
      </div>

      <div className="flex items-start">
        <div className="bg-amber-500 rounded-full p-3 mr-4">
          <MapPin className="h-6 w-6 text-white" aria-hidden="true" />
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-1">Head Office</h4>
          <address className="text-gray-300 not-italic">
            House #35 (5th Floor), Road #7, Block #G, Banani, Dhaka
          </address>
        </div>
      </div>
    </div>
  </div>

  {/* Office Locations */}
  <div className="bg-gray-900 rounded-lg p-8">
    <h3 className="text-2xl font-bold mb-6 text-white">Office Locations</h3>
    <div className="space-y-4 text-gray-300">
      <div>
        <h4 className="font-semibold text-white">Head Office:</h4>
        <p>
          House #35 (5th Floor), Road #7, Block #G, Banani, Dhaka
          <br />
          Phone: +880 1806-426117
        </p>
      </div>
      <div>
        <h4 className="font-semibold text-white">Sales Office:</h4>
        <p>
          House #60 (1st Floor), Road #8 & 9, Block #F, Banani, Dhaka
        </p>
      </div>
      <div>
        <h4 className="font-semibold text-white">Site Office:</h4>
        <p>
          Purbayan City, Purbachal, Rupgonj (Gutulia)
        </p>
      </div>
    </div>
  </div>

  {/* Our Site Location */}
  <div className="mt-12 bg-gray-900 rounded-lg p-8">
    <h3 className="text-2xl font-bold text-white mb-4">Our Site Location</h3>
    <p className="text-gray-300 mb-4">
      Visit our site at Purbayan City, Purbachal, Rupganj (Gutulia), Narayanganj.
    </p>
    <a
      href="https://maps.app.goo.gl/WwSyktiMjCMtjPWbA"
      target="_blank"
      rel="noopener noreferrer"
      className="text-amber-500 hover:underline"
    >
      View on Google Maps
    </a>
  </div>
</div>
</div>


                {/* Map */}
        <div className="mt-16">
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <div className="relative w-full h-64 sm:h-80 md:h-[400px] lg:h-[500px]">
              <iframe
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3649.482384060961!2d90.6037728!3d23.8369986!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37543592cc6286c7%3A0x57c3dbbb6b2bb37b!2sPurbayan%20City!5e0!3m2!1sen!2sbd!4v1746803052087!5m2!1sen!2sbd"
                allowFullScreen
                loading="lazy"
                title="Purbayan Properties Limited Location Map"
                aria-label="Map showing Purbayan Properties Limited location in Banani, Dhaka"
              ></iframe>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  )
}
