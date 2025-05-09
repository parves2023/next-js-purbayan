import Footer from "@/components/footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "FAQ | Purbayan Properties Limited",
  description:
    "Frequently asked questions about Purbayan Properties Limited's projects and services.",
};

export default function FAQPage() {
  const faqs = [
    {
      question:
        "What types of properties does Purbayan Properties Limited offer?",
      answer:
        "Purbayan Properties Limited offers a variety of premium residential plots, commercial spaces, and mixed-use developments designed with modern infrastructure and amenities.",
    },
    {
      question: "Where are Purbayan Properties Limited's projects located?",
      answer:
        "Our projects are strategically located in prime areas of Bangladesh, with excellent connectivity and access to essential services and amenities.",
    },
    {
      question:
        "What amenities are included in Purbayan Properties Limited's residential projects?",
      answer:
        "Our residential projects include amenities such as 24/7 security, landscaped gardens, community centers, wide roads and walkways, and in some cases, exclusive facilities like fishing clubs.",
    },
    {
      question: "How can I book a plot in Purbayan Properties Limited?",
      answer:
        "You can book a plot by filling out our Plot Booking Form available on our website or by visiting our office. Our sales team will guide you through the process and help you select the best option based on your requirements.",
    },
    {
      question: "What are the payment options available?",
      answer:
        "We offer flexible payment plans including installment options. Please contact our sales team for detailed information about payment schedules and financing options.",
    },
    {
      question:
        "Is there a maintenance fee for Purbayan Properties Limited properties?",
      answer:
        "Yes, there is a reasonable maintenance fee to ensure the upkeep of common areas, security services, and other shared amenities. The fee structure varies by project and is designed to maintain the quality and value of your investment.",
    },
    {
      question: "Can I visit the project sites before making a decision?",
      answer:
        "We encourage potential buyers to visit our project sites. Please contact us to schedule a site visit, and our representatives will be happy to show you around and answer any questions.",
    },
    {
      question: "What documents do I need to purchase a property?",
      answer:
        "Typically, you'll need identification documents (NID/passport), TIN certificate, and passport-sized photographs. Our sales team will provide you with a comprehensive list based on the specific requirements of the project you're interested in.",
    },
  ];

  return (
    <>
      <SiteHeader />
      <main className="bg-gray-900 text-white ">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-12">
              Find answers to common questions about Purbayan Properties
              Limited's projects, services, and processes.
            </p>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-300 mb-4">
                Don't see your question here? Feel free to contact us directly.
              </p>
              <a
                href="/contact"
                className="inline-block bg-[#f8c927] text-gray-800 px-6 py-3 rounded-md font-medium hover:bg-yellow-600 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
