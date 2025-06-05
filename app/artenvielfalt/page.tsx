import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Artenvielfalt | Marie P.",
  description: "Verschiedene Maltechniken und experimentelle Ansätze von Marie P.",
}

const techniques1 = [
  {
    title: "SOS",
    year: "2011",
    technique: "Collage-Technik",
    medium: "Acryl + div. Materialien",
    size: "Malkarton 50x65, mit schwarzem Passepartout 60x80",
    image: "/mpichl29/ART-SOS.jpg",
  },
  {
    title: "Tag & Nacht",
    year: "2012",
    technique: "Sgraffito-Technik",
    medium: "Acryl und Kreide",
    size: "Malkarton 50x65, mit schwarzem Passepartout 60x80",
    image: "/mpichl29/ART-Tag-u-Nacht.jpg",
  },
  {
    title: "Energiequelle",
    year: "2011",
    technique: "Chaos-Technik",
    medium: "Acryl",
    size: "Malkarton 50x65, mit schwarzem Passepartout 60x80",
    image: "/mpichl29/ART-Energiequelle.jpg",
  },
]

const techniques2 = [
  {
    title: "Homeoffice",
    year: "2012",
    technique: "Spachtel-Technik",
    medium: "Acryl auf Leinwand",
    size: "40x50",
    image: "/mpichl29/ART-Homeoffice1.jpg",
  },
  {
    title: "La Mancha",
    year: "2012",
    technique: "Spachtel-Technik",
    medium: "Acryl auf Malkarton",
    size: "50x64, mit Passepartout 60x80",
    image: "/mpichl29/ART-La_Mancha1.jpg",
  },
  {
    title: "Ölfelder",
    year: "2012",
    technique: "Kreiden-Technik",
    medium: "Ölkreiden und Edding",
    size: "24x34, in Rahmen 30x40",
    image: "/mpichl29/ART-Oelfelder1.jpg",
  },
  {
    title: "everland",
    year: "2012",
    technique: "Pastellkreiden-Technik",
    medium: "Pastellkreide auf Malkarton",
    size: "42x56, mit Passepartout 60x80",
    image: "/mpichl29/ART-everland1.jpg",
  },
  {
    title: "Schoko-Traum",
    year: "14.02.2012",
    technique: "Experimentell",
    medium: "Schokolade & Streusel auf Keilrahmen",
    size: "30x30",
    image: "/mpichl29/ART-Schoko-Traum.jpg",
  },
  {
    title: "Frühlingsgruß",
    year: "2012",
    technique: "Prozesskunst-Technik",
    medium: "Acryl und Kreide",
    size: "26x48, in Rahmen 40x50",
    image: "/mpichl29/ART-Fruehlingsgrusz2.jpg",
  },
]

const decalcomanie = [
  {
    title: "Fresien",
    year: "2012",
    size: "Malkarton 50x64, mit weißem Passepartout 60x80",
    image: "/mpichl29/ART-Fresien.jpg",
  },
  {
    title: "the rose",
    year: "2012",
    size: "Malkarton 50x64, mit weißem Passepartout 60x80",
    image: "/mpichl29/ART-the_rose.jpg",
  },
  {
    title: "Blätterrauschen",
    year: "2012",
    size: "Malkarton 50x64, mit weißem Passepartout 60x80",
    image: "/mpichl29/ART-Blaetterrauschen.jpg",
  },
  {
    title: "Korallenstrudel",
    year: "2012",
    size: "Malkarton 50x64, mit weißem Passepartout 60x80",
    image: "/mpichl29/ART-Korallenstrudel.jpg",
  },
]

const recycling = [
  {
    title: "smile",
    year: "2012",
    medium: "Nespressokapseln auf Eimerdeckel",
    image: "/mpichl29/B-RECYCL-smile_1.jpg",
  },
  {
    title: "flower power 1",
    year: "2012",
    medium: "Nespressokapseln auf Eimerdeckel",
    image: "/mpichl29/B-RECYCL-flower_power_1_neu.jpg",
  },
  {
    title: "flower power 2",
    year: "2012",
    medium: "Nespressokapseln auf Eimerdeckel",
    image: "/mpichl29/B-RECYCL-flower_power_2_neu.jpg",
  },
  {
    title: "happy go lucky",
    year: "2012",
    medium: "Nespressokapseln auf Eimerdeckel",
    image: "/mpichl29/B-RECYCL-happy_go_lucky_1.jpg",
  },
]

export default function ArtenvielfaltPage() {
  return (
    <main className="section-padding">
      <div className="container">
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-6 text-gray-900">Artenvielfalt</h1>
          <p className="text-lg text-gray-700">
            Verschiedene Techniken und experimentelle Ansätze in der Malerei - von traditionellen bis zu völlig
            unkonventionellen Methoden.
          </p>
        </div>

        {/* Techniques 1 */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-gray-900">unterschiedliche Techniken</h2>
          <div className="artwork-grid">
            {techniques1.map((work, index) => (
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
                    {work.technique}, {work.year}
                  </p>
                  <p className="text-sm text-gray-500">{work.medium}</p>
                  <p className="text-xs text-gray-400 mt-1">{work.size}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Techniques 2 */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-gray-900">weitere Techniken</h2>
          <div className="artwork-grid">
            {techniques2.map((work, index) => (
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
                    {work.technique}, {work.year}
                  </p>
                  <p className="text-sm text-gray-500">{work.medium}</p>
                  <p className="text-xs text-gray-400 mt-1">{work.size}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Décalcomanie */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-gray-900">Décalcomanie-Technik</h2>
          <div className="artwork-grid">
            {decalcomanie.map((work, index) => (
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
                  <p className="text-sm text-gray-600 mb-1">Acryl, {work.year}</p>
                  <p className="text-xs text-gray-400">{work.size}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recycling */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-gray-900">"Griffige Bilder" - Recycling</h2>
          <p className="text-lg text-gray-700 mb-8">
            <strong>"Griffige Bilder" - hier erübrigen sich wohl viele Worte ;-)</strong>
          </p>
          <div className="artwork-grid">
            {recycling.map((work, index) => (
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
                  <p className="text-sm text-gray-500">{work.medium}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
