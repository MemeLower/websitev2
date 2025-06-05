import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ich - ICH | Marie P.",
  description: "Persönliche Beschreibung der Künstlerin Marie P.",
}

export default function IchPage() {
  return (
    <main className="section-padding">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-gray-900">ich</h1>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-3 text-gray-900">
                  Oberflächlich betrachtet könnte man mich so beschreiben:
                </h2>
                <p className="text-gray-700">
                  kreativ, bunt, crazy, leicht chaotisch, ein Sonnenschein, optimistisch, lebenslustig, selten ruhig =
                  kommunikativ ;-)
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3 text-gray-900">
                  Wer mich näher kennt, würde u.a. aber auch folgendes über mich sagen:
                </h2>
                <p className="text-gray-700">
                  nachdenklich, sensibel, verletzlich, reflektiert, selten, aber doch auch einmal zornig
                </p>
              </div>

              <div className="prose prose-lg text-gray-700">
                <p>
                  Nicht jeder kennt diese - unbestritten - sehr unterschiedlichen Seiten von mir, weil ich sie nicht
                  immer bzw. durchaus selektiv zeige. Diese Webpages brechen insofern damit, da sie ganz mich selbst
                  bzw. das Ergebnis davon zeigen. Denn künstlerisches Gestalten ist nicht nur eine Ausdrucksmöglichkeit
                  seiner Kreativität sondern auch ein Mittel, sich besser kennen zu lernen und neu zu erfahren. Ob man
                  will, oder nicht, das Unterbewusstsein gestaltet immer mit. Man(n)/Frau gibt daher automatisch auch
                  Persönliches preis.
                </p>
              </div>
            </div>

            <div className="text-center">
              <Image
                src="/mpichl29/ole.jpg"
                alt="Marie P."
                width={400}
                height={500}
                className="rounded-lg shadow-lg mx-auto"
              />
            </div>
          </div>

          <div className="mt-12 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/mpichl29/ICH-Abendstimmung.jpg"
                alt="Abendstimmung"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <blockquote className="text-lg italic text-gray-600 border-l-4 border-gray-300 pl-4 mb-4">
                "Wer nach außen schaut, träumt. Wer nach innen sieht, erwacht."
                <footer className="text-sm mt-2 text-gray-500">— Carl Gustav Jung, schweizer Psychiater</footer>
              </blockquote>

              <div className="mt-6">
                <h3 className="font-semibold text-gray-900 mb-2">Bild: Abendstimmung</h3>
                <p className="text-sm text-gray-600">
                  2012 - 20x25 oval (Acryl & permanent Universalstift auf Malmappe)
                </p>
              </div>

              <blockquote className="text-lg italic text-gray-600 border-l-4 border-gray-300 pl-4 mt-8">
                "Nur wer sich ändert, bleibt sich treu."
                <footer className="text-sm mt-2 text-gray-500">
                  — Wolf Biermann, deutscher Liedermacher und Lyriker
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
