import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "in/aus mir ... - IN_AUS mir | Marie P.",
  description: "Therapeutische Kunstwerke und Gestaltpädagogik-Arbeiten von Marie P.",
}

const therapeuticWorks = [
  {
    title: "Frau sein",
    year: "Ton",
    image: "/mpichl29/B-IN-Frau_sein-Ton.jpg",
  },
  {
    title: "Frau sein",
    year: "Wellpappe",
    image: "/mpichl29/B-IN-Frau_sein-Karton.jpg",
  },
  {
    title: "Puppenspiel",
    description: "von und mit Marie P.",
    image: "/mpichl29/B-IN-Puppenspiel.jpg",
  },
  {
    title: "Mein Lebens-Baum-Traum",
    year: "",
    image: "/mpichl29/B-IN-Mein_Lebens-Baum-Traum.jpg",
  },
  {
    title: "bewegt",
    year: "2010",
    size: "36x50",
    medium: "Acryl",
    image: "/mpichl29/B-IN-bewegt.jpg",
  },
  {
    title: "die Kraft in mir",
    year: "2011",
    size: "20x30",
    medium: "Acryl",
    image: "/mpichl29/B-IN-die_Kraft_in_mir0.jpg",
  },
  {
    title: "orange Lebensglück",
    year: "2011",
    size: "36x50",
    medium: "Acryl",
    image: "/mpichl29/B-IN-orange_Lebensglueck.jpg",
  },
  {
    title: "übermütig durch die Lüfte",
    year: "2010",
    size: "36x50",
    medium: "Acryl",
    image: "/mpichl29/B-IN-uebermuetig_durch_die_Luefte0.jpg",
  },
]

export default function InAusMirPage() {
  return (
    <main className="section-padding">
      <div className="container">
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-6 text-gray-900">in/aus mir ...</h1>

          <blockquote className="text-lg italic text-gray-600 border-l-4 border-gray-300 pl-4 mb-6">
            "Was hinter uns liegt und was vor uns liegt, sind Belanglosigkeiten verglichen mit dem, was in uns selbst
            liegt."
            <footer className="text-sm mt-2 text-gray-500">— Walt Emerson Baum, Künstler und Pädagoge</footer>
          </blockquote>

          <div className="prose prose-lg text-gray-700 space-y-4">
            <p>
              Mit Besuch einer Gestaltpädagogik-Ausbildung 2008-2009 und regelmäßiger Kunsttherapie-Zyklen in der
              Kleingruppe 2010-2011 konnte ich verschiedenste Methoden kennen lernen um wichtige anstehende Themen zu
              er- und verarbeiten bzw. meine verschiedenartigen Seiten und unterbewussten Gefühle los-/zuzulassen und
              auszuleben.
            </p>
            <p>
              Um einen kleinen Eindruck zu vermitteln, was dabei so alles Unterschiedliches entstehen kann,
              veröffentliche ich hier gerne auch vier Fotos (1-4) von Werken/Aktionen, die bei meinen diversen
              Ausstellungen nicht gezeigt werden bzw. käuflich erhältlich sind ;-))
            </p>
          </div>

          <blockquote className="text-lg italic text-gray-600 border-l-4 border-gray-300 pl-4 mt-8 text-center">
            "Kunst gibt nicht das Sichtbare wieder, sondern macht sichtbar."
            <footer className="text-sm mt-2 text-gray-500">— Paul Klee, deutscher Maler</footer>
          </blockquote>
        </div>

        <div className="artwork-grid">
          {therapeuticWorks.map((work, index) => (
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
                {work.year && <p className="text-sm text-gray-600 mb-1">{work.year}</p>}
                {work.size && <p className="text-sm text-gray-600 mb-1">{work.size}</p>}
                {work.medium && <p className="text-sm text-gray-500">{work.medium}</p>}
                {work.description && <p className="text-sm text-gray-500 italic">{work.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
