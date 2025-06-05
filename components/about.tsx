import Image from "next/image"

export function About() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Über mich</h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                <strong>Oberflächlich betrachtet könnte man mich so beschreiben:</strong>
                <br />
                kreativ, bunt, crazy, leicht chaotisch, ein Sonnenschein, optimistisch, lebenslustig, selten ruhig =
                kommunikativ ;-)
              </p>
              <p>
                <strong>Wer mich näher kennt, würde u.a. aber auch folgendes über mich sagen:</strong>
                <br />
                nachdenklich, sensibel, verletzlich, reflektiert, selten, aber doch auch einmal zornig
              </p>
              <p>
                Künstlerisches Gestalten ist nicht nur eine Ausdrucksmöglichkeit meiner Kreativität, sondern auch ein
                Mittel, mich besser kennen zu lernen und neu zu erfahren. Das Unterbewusstsein gestaltet immer mit.
              </p>
            </div>
            <blockquote className="mt-8 text-lg italic text-gray-600 border-l-4 border-gray-300 pl-4">
              "Wer nach außen schaut, träumt. Wer nach innen sieht, erwacht."
              <footer className="text-sm mt-2 text-gray-500">— Carl Gustav Jung</footer>
            </blockquote>
          </div>
          <div className="relative">
            <Image src="/mpichl29/ole.jpg" alt="Marie P." width={500} height={600} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}
