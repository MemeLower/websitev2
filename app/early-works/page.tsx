import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bei mir - Frühe Werke | Marie P.",
  description: "Frühe Acrylarbeiten von Marie P. aus dem Jahr 2008 - der künstlerische Ursprung",
}

const earlyWorks = [
  {
    title: "Stierblut",
    year: "2008",
    size: "80x80",
    medium: "Acryl auf Leinwand",
    image: "/mpichl29/B-BEI-Stierblut-NEU.jpg",
  },
  {
    title: "Heimat",
    year: "2008",
    size: "40x60",
    medium: "Acryl auf Leinwand",
    image: "/mpichl29/B-BEI-Heimat-NEU3.jpg",
  },
  {
    title: "Die tanzenden Spermien",
    year: "2008",
    size: "10x30",
    medium: "Acryl auf Malplatte",
    image: "/mpichl29/B-BEI-Die_tanzenden_Spermien.jpg",
  },
  {
    title: "jungle",
    year: "2009",
    size: "19,8x40",
    medium: "Acryl auf Leinwand",
    image: "/mpichl29/B-BEI-jungle.jpg",
  },
  {
    title: "Skyline",
    year: "2008",
    size: "70x100",
    medium: "Acryl auf Malkarton",
    image: "/mpichl29/B-BEI-skyline.jpg",
  },
  {
    title: "tropical garden",
    year: "2008",
    size: "31,4x63,8",
    medium: "Acryl auf Malkarton",
    image: "/mpichl29/B-BEI-tropical_garden_NEU.jpg",
  },
  {
    title: "summer 99 - Lucky Strike Limited Edition",
    year: "2008",
    size: "20x40",
    medium: "Acryl auf Leinwand, Sand, Steine etc.",
    image: "/mpichl29/B-BEI-summer_99_-_Lucky_Strike_Limited_Edition.jpg",
  },
  {
    title: "diversity",
    year: "2008",
    size: "18x24",
    medium: "Acryl auf Holzplatte",
    image: "/mpichl29/B-BEI-diversity.jpg",
  },
]

export default function EarlyWorksPage() {
  return (
    <main className="section-padding">
      <div className="container">
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-6 text-gray-900">Bei mir... - Künstlerischer Ursprung</h1>
          <div className="prose prose-lg text-gray-700">
            <p>
              Als "Kind" einer sich teilweise vorrangig nur durch Arbeit definierenden Generation (guter 68er Jahrgang
              ;-) hatte ich meinen Beruf mit soviel Elan und Begeisterung ausgeübt, dass es knapp vor meinem 40igsten
              höchste Zeit für eine Pause wurde.
            </p>
            <p>
              Ein Acrylkurs im Juni 2008 half mir nicht nur, den Respekt vor den Farben bzw. diversen Mal-Materialien zu
              verlieren, sondern vor allen Dingen meine Bodenhaftung wieder zu erlangen. Ich konnte mich nach langer
              Zeit erstmals wieder richtig spüren.
            </p>
            <blockquote className="text-lg italic text-gray-600 border-l-4 border-gray-300 pl-4 my-6">
              "Kunst ist die Sprache der Seele, die Technik, innere Schwingungen auszudrücken und aufzubewahren."
              <footer className="text-sm mt-2 text-gray-500">— Hermann Hesse</footer>
            </blockquote>
          </div>
        </div>

        <div className="artwork-grid">
          {earlyWorks.map((work, index) => (
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
                <p className="text-sm text-gray-500">{work.medium}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
