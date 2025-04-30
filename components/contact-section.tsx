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

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        type: "error",
        message: "Please fill in all required fields.",
      })
      return
    }

    // Here you would typically send the form data to your API
    console.log("Form submitted:", formData)

    // Simulate successful submission
    setFormStatus({
      type: "success",
      message: "Thank you for your message. We'll get back to you soon!",
    })

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })

    // Clear success message after 5 seconds
    setTimeout(() => {
      setFormStatus({
        type: null,
        message: "",
      })
    }, 5000)
  }

  return (
    <section className="py-16 bg-gray-800">
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
                />
              </div>

              {formStatus.type && (
                <div
                  className={`p-4 rounded ${
                    formStatus.type === "success" ? "bg-green-900/50 text-green-300" : "bg-red-900/50 text-red-300"
                  }`}
                >
                  {formStatus.message}
                </div>
              )}

              <Button
                type="submit"
                className="bg-amber-500 hover:bg-amber-600 text-white w-full flex items-center justify-center"
              >
                Send Message <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-900 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-amber-500 rounded-full p-3 mr-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Phone</h4>
                    <p className="text-gray-300">01713034079</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-500 rounded-full p-3 mr-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                    <p className="text-gray-300">info@purbayanbd.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-500 rounded-full p-3 mr-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Address</h4>
                    <p className="text-gray-300">
                      House-35 (5th floor), Road-7,
                      <br />
                      Block-G, Banani, Dhaka.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Office Hours</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Weekdays</h4>
                  <p className="text-gray-300">Sunday - Thursday: 10AM - 6PM</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Weekend</h4>
                  <p className="text-gray-300">Saturday: 10AM - 2PM</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Friday</h4>
                  <p className="text-gray-300">Closed</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg overflow-hidden h-64 relative">
              {/* Replace with an actual map component or iframe */}
              <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                <p className="text-gray-400">Map Loading...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
