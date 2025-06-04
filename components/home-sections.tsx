"use client"

import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import CounterSection from "@/components/counter-section"
import BoardOfDirectors from "@/components/board-of-directors"
import ScrollableCards from "@/components/scrollable-cards"
import ContactSection from "@/components/contact-section"
import TestimonialsSection from "@/components/TestimonialsSection"

// Skeleton loaders for each section
function CounterSectionSkeleton() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Skeleton className="h-10 w-3/4 mx-auto bg-gray-700" />
          <Skeleton className="h-6 w-1/2 mx-auto mt-4 bg-gray-700" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="text-center">
              <Skeleton className="h-16 w-24 mx-auto bg-gray-700" />
              <Skeleton className="h-6 w-32 mx-auto mt-2 bg-gray-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function BoardSkeleton() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Skeleton className="h-10 w-1/2 mx-auto bg-gray-800" />
          <Skeleton className="h-6 w-3/4 mx-auto mt-4 bg-gray-800" />
        </div>
        <div className="flex overflow-x-auto space-x-6 pb-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex-shrink-0 w-[280px] sm:w-[320px]">
              <Skeleton className="h-80 w-full bg-gray-800" />
              <div className="mt-4 space-y-2">
                <Skeleton className="h-6 w-3/4 bg-gray-800" />
                <Skeleton className="h-4 w-1/2 bg-gray-800" />
                <Skeleton className="h-16 w-full bg-gray-800" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ScrollableCardsSkeleton() {
  return (
    <section className="py-10 bg-muted/30">
      <div className="flex space-x-4 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <Skeleton key={i} className="h-[60vh] w-[280px] md:w-[600px] flex-shrink-0 rounded-xl bg-gray-800" />
        ))}
      </div>
    </section>
  )
}

function ContactSectionSkeleton() {
  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Skeleton className="h-10 w-1/4 mx-auto bg-gray-700" />
          <Skeleton className="h-6 w-1/2 mx-auto mt-4 bg-gray-700" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Skeleton className="h-[500px] w-full bg-gray-700 rounded-lg" />
          <div className="space-y-8">
            <Skeleton className="h-[200px] w-full bg-gray-700 rounded-lg" />
            <Skeleton className="h-[200px] w-full bg-gray-700 rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default function HomeSections() {
  return (
    <>
      <Suspense fallback={<CounterSectionSkeleton />}>
        <CounterSection />
      </Suspense>

      <Suspense fallback={<BoardSkeleton />}>
        <BoardOfDirectors />
      </Suspense>

      <Suspense fallback={<BoardSkeleton />}>
        <TestimonialsSection />
      </Suspense>

      <Suspense fallback={<ScrollableCardsSkeleton />}>
        <ScrollableCards />
      </Suspense>

      <Suspense fallback={<ContactSectionSkeleton />}>
        <ContactSection />
      </Suspense>
    </>
  )
}
