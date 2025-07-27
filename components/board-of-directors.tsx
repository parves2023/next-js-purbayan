"use client"

import { Card, CardContent } from "@/components/ui/card"
import OptimizedImage from "./optimized-image"

interface Director {
  id: string
  name: string
  title: string
  image: string
}

const directors: Director[] = [
  {
    id: "1",
    name: "Shamsuddin Ahmed",
    title: "Chairman",
    image: "https://i.ibb.co/tTnHgvdY/chairman.jpg",
  },
  {
    id: "2",
    name: "Barrister Sharjia Ahmed",
    title: "Vice-Chairman",
    image: "https://i.ibb.co/zHTTTmmF/vice-chairman.jpg",
  },
  {
    id: "3",
    name: "Abu Sayer Choudhury",
    title: "Co-Chairman",
    image: "https://i.ibb.co/Nnm1Dd7S/dummyimg.jpg",
  },
  {
    id: "4",
    name: "M.A. Khaleque (PSC)",
    title: "Chief Advisor",
    image: "https://i.ibb.co/dsqycY09/chief-advisor.jpg",
  },
  {
    id: "5",
    name: "Abu Sufian Choudhury",
    title: "Director",
    image: "https://i.ibb.co/ymSJgnG7/director.jpg",
  },
  {
    id: "6",
    name: "Mahbubul Alam",
    title: "Managing Director",
    image: "https://i.ibb.co/fGCKRDwh/managing-director.jpg",
  },
  {
    id: "7",
    name: "Mahmudul Hasan Palash",
    title: "Deputy Managing Director",
    image: "https://i.ibb.co/k23nbTDp/deputy-managing-director.jpg",
  },
  {
    id: "8",
    name: "Dewan Mohammad Shafiullah",
    title: "Director",
    image: "https://i.ibb.co/Nnm1Dd7S/dummyimg.jpg",
  },
]

export default function BoardOfDirectors() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Leadership Team
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {directors.map((director) => (
            <Card
              key={director.id}
              className="bg-gray-800 border border-gray-700 text-center overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-full aspect-square relative">
                <OptimizedImage
                  src={director.image}
                  alt={director.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <CardContent className="pt-4 pb-6">
                <h3 className="text-xl font-semibold text-white mb-1">
                  {director.name}
                </h3>
                <p className="text-sm text-amber-500">{director.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
 
"use client"

import { Card, CardContent } from "@/components/ui/card"

interface Director {
  id: string
  name: string
  title: string
}

const directors: Director[] = [
  { id: "1", name: "Shamsuddin Ahmed", title: "Chairman" },
  { id: "2", name: "Mahbubul Alam", title: "Managing Director" },
  { id: "3", name: "Mahmudul Hasan", title: "Director" },
  { id: "4", name: "Dewan Mohammad Shafiullah", title: "Director" },
  { id: "5", name: "Mohaiminul Hossen", title: "Director" },
  { id: "6", name: "Dewan Mohammad Shajedul Karim", title: "Director" },
  { id: "7", name: "Mohammad Zakaria Bhuiyan", title: "Director" },
  { id: "8", name: "Mohammad Humayn Kabir Jewel", title: "Director" },
]

export default function BoardOfDirectors() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Board of Directors
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {directors.map((director) => (
            <Card key={director.id} className="bg-gray-800 border border-gray-700 text-center py-8 px-4">
              <CardContent>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {director.name}
                </h3>
                <p className="text-sm text-amber-500">{director.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
