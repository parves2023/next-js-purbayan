import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="space-y-8">
        {/* Hero section skeleton */}
        <div className="relative h-[50vh] w-full bg-gray-800 rounded-lg animate-pulse"></div>

        {/* About section skeleton */}
        <div className="space-y-4">
          <Skeleton className="h-10 w-3/4 mx-auto bg-gray-800" />
          <Skeleton className="h-24 w-full mx-auto bg-gray-800" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-40 w-full bg-gray-800" />
            ))}
          </div>
        </div>

        {/* Projects section skeleton */}
        <div className="space-y-4">
          <Skeleton className="h-10 w-1/2 mx-auto bg-gray-800" />
          <Skeleton className="h-20 w-3/4 mx-auto bg-gray-800" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} className="h-64 w-full bg-gray-800" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
