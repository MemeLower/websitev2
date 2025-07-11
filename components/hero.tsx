import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/mpichl29/Bild_Einstiegsseite-NEU.jpg"
          alt="Marie P. Artwork"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white container">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-playfair">Marie P.</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          bei, in/aus & mit mir... gestaltet/geschaffen
        </p>
        <p className="text-lg mb-12 max-w-2xl mx-auto opacity-90">
          Malerei, Installationen und diverse kreative Werke einer Amateurkünstlerin, die ihrer Fantasie und ihren Gefühlen einfach freien Lauf lässt.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100">
            <Link href="/bei-mir">Werke entdecken</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-black bg-transparent"
          >
            <Link href="/ich">Über mich</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
