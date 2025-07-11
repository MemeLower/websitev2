import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "mit mir - MIT mir | Marie P.",
  description: "Körpermalerei und Blindmalerei von Marie P. - Kunst mit Händen, Füßen und Fingern",
}

const bodyArt = [
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
    note: "reine Fuß-/Zehenmalerei",
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

const blindChickenArt = [
  {
    title: "von blind zu sehend",
    year: "2008",
    size: "44x64",
    note: "reine Finger-(Nagel)-Malerei mit lichtundurchlässiger Augenbinde",
    image: "/mpichl29/B-BLIND-von_blind_zu_sehend0.jpg",
  },
  {
    title: "Menschenmenge",
    year: "2008",
    size: "44x64",
    note: "zu Trommelmusik entstanden",
    image: "/mpichl29/B-BLIND-Menschenmenge.jpg",
  },
  {
    title: "watching you blind",
    year: "2008",
    size: "44x64",
    note: "reine Finger-(Nagel)-Malerei mit lichtundurchlässiger Augenbinde",
    image: "/mpichl29/B-BLIND-watching_you_blind0.jpg",
  },
]

export default function MitMirPage() {
  return (
    <main className="section-padding">
      <div className="container">
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-6 text-gray-900">mit mir</h1>
        </div>

        {/* Body Art Section */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-lg text-gray-700 mb-4">
              <strong>
                Wer braucht schon Hilfsmittel zum Malen, wie z.B. Pinsel etc.? - Wenn er/sie ohnehin sich selbst als
                Instrument zur Verfügung hat ;-)
              </strong>
            </p>
            <p className="text-lg text-gray-700">
              Die nachfolgenden Acryl-Werke sind lediglich mittels Körpereinsatz meiner Füße bzw. Zehen, Hände und/oder
              Finger bzw. Fingernägel entstanden. Das macht unheimlich viel Spaß - in etwa so, wie sich als Kind im
              Schlamm aalen ...
            </p>
          </div>

          <div className="artwork-grid">
            {bodyArt.map((work, index) => (
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
                  {work.note && <p className="text-sm text-gray-500 italic">{work.note}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Blind Chicken Section */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">blind chicken</h2>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Viele nennen mich/kennen mich als "verrücktes Huhn".</strong>
            </p>
            <p className="text-lg text-gray-700">
              Ich selbst würde da durchaus auch in Richtung "blindes Huhn" gehen, was nicht nur mit meiner
              Altersweitsichtigkeit zu tun hat ;-) Die nachfolgenden Bilder stammen jedenfalls alle aus einer
              Blindmal-Serie von 2008 (Acryl 44x64).
            </p>
          </div>

          {/* First row: two images */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {blindChickenArt.slice(0, 2).map((work, index) => (
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
                  {work.note && <p className="text-sm text-gray-500 italic">{work.note}</p>}
                </div>
              </div>
            ))}
          </div>

          {/* Second row: centered "blind sehend" image */}
          <div className="flex justify-center mb-8">
            <div className="artwork-card group max-w-md">
              <div className="relative overflow-hidden">
                <Image
                  src="/mpichl29/B-BLIND-blind_sehend.jpg"
                  alt="blind sehend"
                  width={400}
                  height={300}
                  className="artwork-image"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">blind sehend</h3>
                <p className="text-sm text-gray-600 mb-1">2008 - 44x64</p>
                <p className="text-sm text-gray-500 italic">
                  reine Finger-(Nagel)-Malerei mit lichtundurchlässiger Augenbinde
                </p>
              </div>
            </div>
          </div>

          {/* Third row: single image */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="artwork-card group">
              <div className="relative overflow-hidden">
                <Image
                  src={blindChickenArt[2].image || "/placeholder.svg"}
                  alt={blindChickenArt[2].title}
                  width={400}
                  height={300}
                  className="artwork-image"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{blindChickenArt[2].title}</h3>
                <p className="text-sm text-gray-600 mb-1">
                  {blindChickenArt[2].year} - {blindChickenArt[2].size}
                </p>
                {blindChickenArt[2].note && <p className="text-sm text-gray-500 italic">{blindChickenArt[2].note}</p>}
              </div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto mt-12 p-6 bg-gray-50 rounded-lg">
            <blockquote className="text-lg italic text-gray-700 text-center">
              "Wer immer tut, was er schon kann, bleibt immer das, was er schon ist."
              <footer className="text-sm mt-2 text-gray-500">— Henry Ford, Gründer der Ford Motor Company</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </main>
  )
}
