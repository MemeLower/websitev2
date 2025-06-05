import Image from "next/image"
import { Mail, Globe, MapPin } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kontakt | Marie P.",
  description: "Kontaktieren Sie Marie P. für Anfragen zu Kunstwerken und Ausstellungen",
}

export default function ContactPage() {
  return (
    <main className="section-padding">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-12 text-center text-gray-900">Kontakt</h1>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-gray-900">Interesse an meinen Werken?</h2>
              <p className="text-lg text-gray-700 mb-8">
                Bei Interesse an einem der Werke bzw. Wunsch nach Detailfotos oder einem extra
                Besichtigungs-/Präsentationstermin bitte um direkte Kontaktaufnahme.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <Mail className="h-6 w-6 text-gray-600" />
                  <div>
                    <p className="font-medium text-gray-900">E-Mail</p>
                    <a href="mailto:marie-p@aon.at" className="text-blue-600 hover:text-blue-800 transition-colors">
                      marie-p@aon.at
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <Globe className="h-6 w-6 text-gray-600" />
                  <div>
                    <p className="font-medium text-gray-900">Website</p>
                    <p className="text-gray-600 text-sm">Neue Website-Adresse wird in Kürze bekannt gegeben</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <MapPin className="h-6 w-6 text-gray-600" />
                  <div>
                    <p className="font-medium text-gray-900">Standort</p>
                    <p className="text-gray-600">Wien, Österreich</p>
                    <p className="text-gray-500 text-sm">Genaue Anschrift auf Anfrage</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Verfügbare Services</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Detailfotos der Kunstwerke</li>
                  <li>• Besichtigungstermine</li>
                  <li>• Informationen zu Preisen</li>
                  <li>• Beratung zu Kunstankäufen</li>
                  <li>• Ausstellungsanfragen</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <Image
                src="/mpichl29/Kontaktinfos.png"
                alt="Kontaktinformationen"
                width={400}
                height={300}
                className="mx-auto rounded-lg shadow-lg mb-6"
              />

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-800 text-sm">
                  <strong>Hinweis:</strong> Die Website-Adresse und Anschrift werden derzeit aktualisiert. Für aktuelle
                  Informationen bitte per E-Mail kontaktieren.
                </p>
              </div>
            </div>
          </div>

          {/* Link to Impressum */}
          <div className="mt-12 text-center">
            <Link href="/impressum" className="text-blue-600 hover:text-blue-800 transition-colors underline">
              Impressum
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
