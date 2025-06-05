import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const featuredWorks = [
  {
    title: "Stierblut",
    year: "2008",
    technique: "Acryl auf Leinwand, 80x80",
    image: "/mpichl29/B-BEI-Stierblut-NEU.jpg",
    category: "early-works",
  },
  {
    title: "Skyline",
    year: "2008",
    technique: "Acryl auf Malkarton, 70x100",
    image: "/mpichl29/B-BEI-skyline.jpg",
    category: "early-works",
  },
  {
    title: "Leichtigkeit",
    year: "2011",
    technique: "Acryl, 70x100 (Fingermalerei)",
    image: "/mpichl29/B-MIT-Leichtigkeit.jpg",
    category: "body-art",
  },
  {
    title: "SOS",
    year: "2011",
    technique: "Collage-Technik, Acryl + div. Materialien",
    image: "/mpichl29/ART-SOS.jpg",
    category: "techniques",
  },
  {
    title: "the wall",
    year: "2011",
    technique: "Installation, 30x30",
    image: "/mpichl29/B-INST-the_wall_neu.jpg",
    category: "installations",
  },
  {
    title: "Energiequelle",
    year: "2011",
    technique: "Chaos-Technik, Acryl",
    image: "/mpichl29/ART-Energiequelle.jpg",
    category: "techniques",
  },
]

export function FeaturedWorks() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Ausgewählte Werke</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Eine Auswahl meiner Arbeiten aus verschiedenen Schaffensperioden und Techniken
          </p>
        </div>

        <div className="artwork-grid">
          {featuredWorks.map((work, index) => (
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
                <p className="text-sm text-gray-500">{work.technique}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/early-works">Alle Werke ansehen</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
