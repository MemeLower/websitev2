import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "selbst - SELBST | Marie P.",
  description: "Gedicht 'SELBST' von Marie P.",
}

export default function SelbstPage() {
  return (
    <main className="section-padding">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-12 text-center text-gray-900">selbst</h1>

          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-8 lg:p-12">
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 font-playfair">S E L B S T</h2>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>von Selbst.ZWEIFELN geprägte Selbst.WAHRNEHMUNG</p>
                <p>von außen abhängige „Selbst".MOTIVATION</p>
                <p>durch Selbst.VERLEUGNUNG SELBST.herrliche Selbst.BEWEIHR ÄUCHERUNG</p>
                <p>täuschendes Selbst.VERTRAUEN</p>

                <p className="font-semibold">das SELBST.verständliche Resultat:</p>
                <p>Selbst.BETRUG, Selbst.TÄUSCHUNG, Selbst.ZERSTÖRUNG</p>
                <p>durch SELBST.loses Agieren komplette Selbst.AUSBEUTUNG</p>
                <p>Mit einem Selbst.VERSTÄNDNIS in den Abgrund!</p>

                <p className="font-semibold">Was nun? Selbst.VERTEIDIGUNG!</p>
                <p>Selbst.HILFE anstelle von Selbst.MITLEID</p>
                <p>Übernahme von Selbst.VERANTWORTUNG</p>
                <p>Steigerung von Selbst.LIEBE und Selbst.WERT</p>
                <p>Schluss auch mit der ewigen Selbst.BEHERRSCHUNG!</p>

                <p className="font-semibold">SELBST.redend und SELBST.bewusst</p>
                <p>vom Mit- zum Selbst.LÄUFER</p>
                <p>von der Fremd- zur Selbst.BESTIMMUNG</p>
                <p>Selbst.BESTÄTIGUNG durch Selbst.VERWIRKLICHUNG!</p>

                <p>Selbst.BILD versus Fremdbild</p>
                <p>Selbst.GEISSELUNG versus Selbst.BEFREIUNG</p>
                <p>Was bleibt?</p>
                <p className="font-bold">Selbst.ICH – ich SELBST</p>

                <p className="text-right font-semibold border-t pt-4 mt-8">von Marie P.</p>
              </div>
            </div>

            <div className="mt-8 text-center text-sm text-gray-600">
              <p className="font-semibold">veröffentlicht in:</p>
              <p>
                "Frankfurter Bibliothek - Jahrbuch für das neue Gedicht. Erste Abteilung / Gedicht und Gesellschaft
                2011:22"
              </p>
              <p className="mt-2">
                Leopold von Emden (Vorwort, Herausgeber), Susann Fleischer (Bearbeitung), Anne Grimmeissen
                (Bearbeitung), Markus von Hänsel-Hohenhausen (Nachwort), Klaus Schmidt-Mäcon (Herausgeber)
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
