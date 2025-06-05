import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "mit mir - MIT mir | Marie P.",
  description: "Körpermalerei und Blindmalerei von Marie P. - Kunst mit Händen, Füßen und Fingern",
}

const bodyArtWorks = [
  {
    title: "unique - c'est moi",
    year: "2008",
    size: "24x30",
    image: "/mpichl29/B-MIT-unique0.jpg",
  },
  {
    title: "Fantasien",
    year: "2008",
    size: "20x30",
    description: "reine Fuß-/Zehenmalerei",
    image: "/mpichl29/B-MIT-Fantasien0.jpg",
  },
  {
    title: "Klein(st)kunst",
    year: "2008",
    size: "8x10",
    image: "/mpichl29/B-MIT-Klein-st-kunstwerk.jpg",
  },
  {
    title: "crowded",
    year: "2008",
    size: "24x30",
    image: "/mpichl29/B-MIT-crowded.jpg",
  },
  {
    title: "Leichtigkeit",
    year: "2011",
    size: "70x100",
    image: "/mpichl29/B-MIT-Leichtigkeit.jpg",
  },
  {
    title: "Beschwingtheit",
    year: "2010",
    size: "70x100",
    image: "/mpichl29/B-MIT-Beschwingtheit0.jpg",
  },
]

const blindPaintingWorks = [
  {
    title: "von blind zu sehend",
    year: "2008",
    size: "44x64",
    image: "/mpichl29/B-BLIND-von_blind_zu_sehend0.jpg",
  },
  {
    title: "Menschenmenge",
    year: "2008",
    size: "44x64",
    description: "zu Trommelmusik entstanden",
    image: "/mpichl29/B-BLIND-Menschenmenge.jpg",
  },
  {
    title: "watching you blind",
    year: "2008",
    size: "44x64",
    image: "/mpichl29/B-BLIND-watching_you_blind0.jpg",
  },
  {
    title: "blind sehend",
    year: "2008",
    size: "44x64",
    image: "/mpichl29/B-BLIND-blind_sehend.jpg",
  },
]

export default function MitMirPage() {
  return (
    <main className="section-padding">
      <div className="container">
        {/* Body Art Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-6 text-gray-900">mit mir</h1>
          <p className="text-lg text-gray-700 mb-8">
            <strong>
              Wer braucht schon Hilfsmittel zum Malen, wie z.B. Pinsel etc.? - Wenn er/sie ohnehin sich selbst als
              Instrument zur Verfügung hat ;-)
            </strong>
          </p>
          <p className="text-gray-700 mb-8">
            Die nachfolgenden Acryl-Werke sind lediglich mittels Körpereinsatz meiner Füße bzw. Zehen, Hände und/oder
            Finger bzw. Fingernägel entstanden. Das macht unheimlich viel Spaß - in etwa so, wie sich als Kind im
            Schlamm aalen ...
          </p>
        </div>

        <div className="artwork-grid mb-16">
          {bodyArtWorks.map((work, index) => (
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
                {work.description && <p className="text-sm text-gray-500 italic">{work.description}</p>}
              </div>
            </div>
          ))}
        </div>

        {/* Blind Chicken Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">blind chicken</h2>
          <p className="text-lg text-gray-700 mb-6">
            <strong>Viele nennen mich/kennen mich als "verrücktes Huhn".</strong>
          </p>
          <p className="text-gray-700 mb-8">
            Ich selbst würde da durchaus auch in Richtung "blindes Huhn" gehen, was nicht nur mit meiner
            Altersweitsichtigkeit zu tun hat ;-) Die nachfolgenden Bilder stammen jedenfalls alle aus einer
            Blindmal-Serie von 2008 (Acryl 44x64).
          </p>
        </div>

        <div className="artwork-grid mb-12">
          {blindPaintingWorks.map((work, index) => (
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
                <p className="text-sm text-gray-500">
                  reine Finger-(Nagel)-Malerei mit lichtundurchlässiger Augenbinde
                </p>
                {work.description && <p className="text-sm text-gray-500 italic mt-1">{work.description}</p>}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <blockquote className="text-lg italic text-gray-600 border-l-4 border-gray-300 pl-4">
            "Wer immer tut, was er schon kann, bleibt immer das, was er schon ist."
            <footer className="text-sm mt-2 text-gray-500">— Henry Ford, Gründer der Ford Motor Company</footer>
          </blockquote>
        </div>
      </div>
    </main>
  )
}
