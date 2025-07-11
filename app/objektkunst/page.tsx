import Image from "next/image"
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
    image: "/mpichl29/B-INST-the_animal_farm-NEW.jpg",
  },
  {
    title: "Du hast die Wahl",
    year: "2011",
    size: "25,5 x 25,5",
    image: "/mpic hl29/B-INST-Du_hast_die_Wahl0.jpg",
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
    image: "/mpichl29/B-INST-gefuelltes_Blatt-NEW.jpg",
  },
]

const stopGoSeries = [
  { image: "/mpichl29/B-INST-stop_and_go.jpg" },
  { image: "/mpichl29/B-INST-STOP_and_go_1.jpg" },
  { image: "/mpichl29/B-INST-stop_AND_go_2.jpg" },
  { image: "/mpichl29/B-INST-stop_and_GO_3.jpg" },
]

export default function ObjektkunstPage() {
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
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Objektkunst & Mixed Media</h2>
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
                  <p className="text-sm text-gray-600 mb-1">
                    {work.year} - {work.size}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Centered "Des Glück in der Schale" */}
          <div className="flex justify-center mt-8">
            <div className="artwork-card group max-w-md">
              <div className="relative overflow-hidden">
                <Image
                  src="/mpichl29/B-INST-Des_Glueck_in_der_Schale_2.jpg"
                  alt="Des Glück in der Schale"
                  width={400}
                  height={300}
                  className="artwork-image"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Des Glück in der Schale</h3>
                <p className="text-sm text-gray-600">2011</p>
              </div>
            </div>
          </div>
        </div>

        {/* The Wall Series */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Another Brick in the Wall-Reihe</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/mpichl29/B-INST-the_wall_neu.jpg"
                alt="Another Brick in the Wall-Reihe"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">Another Brick in the Wall-Reihe</h3>
              <p className="text-lg font-semibold text-gray-700">2011 - 30x30</p>
              <p className="text-gray-700">
                8 Objekte: red ribbon / working poor / weiße Feder / Süchte / pink ribbon / Verhütung / NO body is
                perfect / soziale Verarmung
              </p>
            </div>
          </div>
        </div>

        {/* Stop & Go Series */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Alles im Griff?</h2>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">"stop & go in einer verquerten Welt"</h3>
            <p className="text-lg text-gray-600">2012 - Klebesticker auf 3 Eimerdeckeln</p>
          </div>
          <div className="artwork-grid">
            {stopGoSeries.map((work, index) => (
              <div key={index} className="artwork-card group">
                <div className="relative overflow-hidden">
                  <Image
                    src={work.image || "/placeholder.svg"}
                    alt={`Stop & Go ${index + 1}`}
                    width={400}
                    height={300}
                    className="artwork-image"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
