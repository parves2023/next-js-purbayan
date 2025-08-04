import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import Footer from "@/components/footer"

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="bg-gray-900 text-white min-h-[70vh] flex items-center">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Page Not Found</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-lg mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link href="/">
            <Button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-6 text-lg">Return to Homepage</Button>
          </Link>
        </div>
      </main>
    </>
  )
}
