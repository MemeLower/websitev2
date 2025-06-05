import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Objektkunst | Marie P.",
  description: "Objektkunst und Installationen von Marie P. - dreidimensionale Kunstwerke und Mixed Media",
}

const objectArt = [
  {
    title: "a man in the mirror",
    year: "2011",
    size: "25,5 x 25,5",
    image: "/mpichl29/B-INST-a_man_in_the_mirror.jpg",
  },
  {
    title: "a woman in the mirror",
    year: "2011",
    size: "25,5 x 25,5",
    image: "/mpichl29/B-INST-a_woman_in_the_mirror.jpg",
  },
  {
    title: "the animal farm",
    year: "2011",
    size: "25,5 x 25,5",
    image: "/mpichl29/B-INST-the_animal_farm.jpg",
  },
  {
    title: "Du hast die Wahl",
    year: "2011",
    size: "25,5 x 25,5",
    image: "/mpichl29/B-INST-Du_hast_die_Wahl0.jpg",
  },
  {
    title: "erdverknüpft - herzhaft wachsen",
    year: "2011",
    size: "30x45,5",
    image: "/mpichl29/B-INST-herzhaft_wachsen.jpg",
  },
  {
    title: "gefülltes Blatt",
    year: "2010",
    size: "H 43,5, B 30, L ca. 65",
    image: "/mpichl29/B-INST-gefuelltes_Blatt-NEU.jpg",
  },
  {
    title: "Des Glück in der Schale",
    year: "2011",
    size: "",
    image: "/mpichl29/B-INST-Des_Glueck_in_der_Schale_2.jpg",
  },
]

const wallSeries = [
  {
    title: "Another Brick in the Wall-Reihe",
    year: "2011",
    size: "30x30",
    description:
      "8 Objekte: red ribbon / working poor / weiße Feder / Süchte / pink ribbon / Verhütung / NO body is perfect / soziale Verarmung",
    image: "/mpichl29/B-INST-the_wall_neu.jpg",
  },
]

const stopGoSeries = [
  {
    title: "stop & go in einer verquerten Welt",
    year: "2012",
    medium: "Klebesticker auf 3 Eimerdeckeln",
    images: [
      "/mpichl29/B-INST-stop_and_go.jpg",
      "/mpichl29/B-INST-STOP_and_go_1.jpg",
      "/mpichl29/B-INST-stop_AND_go_2.jpg",
      "/mpichl29/B-INST-stop_and_GO_3.jpg",
    ],
  },
]

export default function ObjectArtPage() {
  return (
    <main className="section-padding">
      <div className="container">
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-6 text-gray-900">Objektkunst</h1>
          <p className="text-lg text-gray-700">
            Weitere Gestaltungen, ich nenne sie "Objektkunst" - dreidimensionale Werke und Mixed Media Installationen.
          </p>
        </div>

        {/* Main Object Art Collection */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-gray-900">Objektkunst & Mixed Media</h2>
          <div className="artwork-grid">
            {objectArt.map((work, index) => (
              <div key={index} className="artwork-card group">
                <div className="relative overflow-hidden">
                  <Image
                    src={work.image || "/placeholder.svg"}
                    alt={work.title}
                    width={400}
                    height={300}
                    className="artwork-image"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{work.title}</h3>
                  <p className="text-sm text-gray-600 mb-1">{work.year}</p>
                  <p className="text-sm text-gray-500">{work.size}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The Wall Series */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-gray-900">Another Brick in the Wall-Reihe</h2>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src={wallSeries[0].image || "/placeholder.svg"}
                alt={wallSeries[0].title}
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">{wallSeries[0].title}</h3>
              <p className="text-gray-600 mb-2">
                {wallSeries[0].year} - {wallSeries[0].size}
              </p>
              <p className="text-gray-700">{wallSeries[0].description}</p>
            </div>
          </div>
        </div>

        {/* Stop & Go Series */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-gray-900">Alles im Griff?</h2>
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4 text-gray-900">"stop & go in einer verquerten Welt"</h3>
            <p className="text-lg text-gray-600">
              {stopGoSeries[0].year} - {stopGoSeries[0].medium}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stopGoSeries[0].images.map((image, index) => (
              <div key={index} className="artwork-card group">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Stop & Go ${index + 1}`}
                  width={300}
                  height={300}
                  className="artwork-image"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12">
          <Button asChild variant="outline">
            <Link href="/body-art" className="flex items-center gap-2">
              <ChevronLeft className="h-4 w-4" />
              Mit mir
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/spray-art" className="flex items-center gap-2">
              Spray Art
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
