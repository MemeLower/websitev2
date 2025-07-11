import Link from "next/link"
import { Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-playfair">Marie P.</h3>
            <p className="text-gray-300 mb-4">
              Amateurkünstlerin und Malerin aus Wien. Spezialisiert auf Acrylmalerei, Objektkunst, Spray Art und experimentelle Techniken.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Über mich
                </Link>
              </li>
              <li>
                <Link href="/early-works" className="hover:text-white transition-colors">
                  Werke
                </Link>
              </li>
              <li>
                <Link href="/object-art" className="hover:text-white transition-colors">
                  Objektkunst
                </Link>
              </li>
              <li>
                <Link href="/spray-art" className="hover:text-white transition-colors">
                  Spray Art
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>marie-p@aon.at</span>
              </div>
              <p className="text-sm">
                Bei Interesse an einem der Werke oder Wunsch nach Detailfotos bitte um direkte Kontaktaufnahme.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Marie P. Alle Rechte vorbehalten.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link href="/impressum" className="hover:text-white transition-colors text-sm">
              Impressum
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
