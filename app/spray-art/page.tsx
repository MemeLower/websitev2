import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Spray Art | Marie P.",
  description: "Spray Art Werke von Marie P. - experimentelle Sprühtechniken und Street Art inspirierte Kunst",
}

// Placeholder für zukünftige Spray Art Werke
const sprayArtWorks = [
  {
    title: "Spray Art Werk 1",
    year: "2023",
    size: "TBD",
    medium: "Spray auf Leinwand",
    image: "/placeholder.svg?height=400&width=400",
    description: "Foto noch zu liefern",
  },
  {
    title: "Spray Art Werk 2",
    year: "2023",
    size: "TBD",
    medium: "Spray auf Leinwand",
    image: "/placeholder.svg?height=400&width=400",
    description: "Foto noch zu liefern",
  },
]

export default function SprayArtPage() {
  return (
    <main className="section-padding">
      <div className="container">
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-6 text-gray-900">Spray Art</h1>
          <p className="text-lg text-gray-700 mb-6">
            Experimentelle Sprühtechniken und Street Art inspirierte Kunstwerke - eine neue Dimension meiner
            künstlerischen Ausdrucksformen.
          </p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-yellow-800">
              <strong>Hinweis:</strong> Diese Sektion wird derzeit aktualisiert. Fotos der Spray Art Werke werden in
              Kürze hinzugefügt.
            </p>
          </div>
        </div>

        {/* Spray Art Collection - Placeholder */}
        <div className="artwork-grid">
          {sprayArtWorks.map((work, index) => (
            <div key={index} className="artwork-card group">
              <div className="relative overflow-hidden">
                <Image
                  src={work.image || "/placeholder.svg"}
                  alt={work.title}
                  width={400}
                  height={300}
                  className="artwork-image opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100/80">
                  <p className="text-gray-600 font-medium">Foto folgt in Kürze</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{work.title}</h3>
                <p className="text-sm text-gray-600 mb-1">{work.year}</p>
                <p className="text-sm text-gray-500">{work.medium}</p>
                <p className="text-xs text-yellow-600 mt-2 italic">{work.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Technique Description */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">Über die Spray Art Technik</h2>
          <div className="prose prose-lg text-gray-700">
            <p>
              Die Spray Art Technik eröffnet völlig neue Möglichkeiten des künstlerischen Ausdrucks. Mit Sprühfarben
              entstehen fließende Übergänge, intensive Farbverläufe und dynamische Kompositionen, die mit traditionellen
              Maltechniken schwer zu erreichen sind.
            </p>
            <p>
              Diese experimentelle Herangehensweise passt perfekt zu meiner Philosophie des spontanen, intuitiven
              Gestaltens - wo das Unterbewusstsein mitgestaltet und Überraschungen entstehen können.
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12">
          <Button asChild variant="outline">
            <Link href="/object-art" className="flex items-center gap-2">
              <ChevronLeft className="h-4 w-4" />
              Objektkunst
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/techniques" className="flex items-center gap-2">
              Artenvielfalt
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
