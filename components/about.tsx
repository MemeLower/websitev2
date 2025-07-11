import Image from "next/image"

export function About() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">bei, in/aus & mit mir...</h2>
            <h3 className="text-2xl font-semibold mb-6 text-gray-700">...gestaltet/geschaffen</h3>
            <p className="text-lg text-gray-600 mb-6">sei es in Form von Bildern, Tonfiguren, Lyrik, etc.</p>

            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                <strong>Ich ...</strong>
              </p>
              <ul className="space-y-2">
                <li>lasse meiner Fantasie/meinen Gefühlen einfach freien Lauf;</li>
                <li>
                  sehe zu, was <strong>AUS MIR</strong> kommt, wenn ich ganz <strong>BEI MIR</strong> bin;
                </li>
                <li>
                  lasse mich davon überraschen, was <strong>IN MIR</strong> steckt und nur darauf wartet, von mir
                  ausgedrückt zu werden.
                </li>
              </ul>

              <p>
                Und wenn es für mich passt, gestalte ich auch direkt <strong>MIT MIR</strong>. Wer braucht schon
                Hilfsmittel, wenn er/sie sich selbst zur Verfügung hat?
              </p>

              <p>
                Derart unterschiedlich sind daher auch meine Werke. Sehen Sie selbst - einen kleinen Auszug - auf diesen
                Webseiten oder, ein Vielfaches davon, bei einer meiner Ausstellungsaktivitäten.{" "}
                <strong>Viel Vergnügen!</strong>
              </p>

              <p>
                Bei Interesse an einem der Werke bzw. Wunsch nach Detailfotos oder einem extra
                Besichtigungs-/Präsentationstermin bitte um{" "}
                <strong>
                  <a href="mailto:marie-p@aon.at" className="text-blue-600 hover:text-blue-800">
                    direkte Kontaktaufnahme
                  </a>
                </strong>
                .
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/mpichl29/Bild_Einstiegsseite-NEU.jpg"
              alt="easy going, 2009"
              width={500}
              height={600}
              className="rounded-lg shadow-lg"
            />
            <p className="text-center text-sm text-gray-600 mt-4">
              <strong>easy going</strong>, 2009 - 50x70 (Acryl auf Leinwand)
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
