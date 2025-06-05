import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Impressum | Marie P.",
  description: "Impressum und rechtliche Informationen",
}

export default function ImpressumPage() {
  return (
    <main className="section-padding">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-12 text-gray-900">Impressum</h1>

          <div className="prose prose-lg max-w-none">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <p className="text-yellow-800 mb-0">
                <strong>Hinweis:</strong> Das Impressum wird derzeit für die eventuelle Anmeldung bei der Finanz
                vorbereitet. Die vollständigen Angaben werden in Kürze ergänzt.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Angaben gemäß § 5 TMG</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Verantwortlich für den Inhalt:</h3>
                <p className="text-gray-700">
                  Marie P.
                  <br />
                  Künstlerin & Malerin
                  <br />
                  <span className="text-gray-500">[Anschrift wird ergänzt]</span>
                  <br />
                  Wien, Österreich
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">Kontakt:</h3>
                <p className="text-gray-700">
                  E-Mail:{" "}
                  <a href="mailto:marie-p@aon.at" className="text-blue-600 hover:text-blue-800">
                    marie-p@aon.at
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">Umsatzsteuer-Identifikationsnummer:</h3>
                <p className="text-gray-500">[Wird bei Anmeldung ergänzt]</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">Haftungsausschluss:</h3>
                <h4 className="font-medium text-gray-900 mt-4">Haftung für Inhalte</h4>
                <p className="text-gray-700">
                  Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit
                  und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                </p>

                <h4 className="font-medium text-gray-900 mt-4">Haftung für Links</h4>
                <p className="text-gray-700">
                  Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss
                  haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                </p>

                <h4 className="font-medium text-gray-900 mt-4">Urheberrecht</h4>
                <p className="text-gray-700">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                  Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                  Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw.
                  Erstellers.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">Datenschutz</h3>
                <p className="text-gray-700">
                  Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf
                  unseren Seiten personenbezogene Daten erhoben werden, erfolgt dies stets auf freiwilliger Basis.
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Stand: {new Date().toLocaleDateString("de-DE")} | Dieses Impressum wird bei Bedarf aktualisiert.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
