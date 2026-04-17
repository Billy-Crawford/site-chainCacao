import Container from "@/components/shared/Container";
import BlockchainDiagram from "@/components/sections/BlockchainDiagram";
import BlockchainStepper from "@/components/sections/BlockchainStepper";

export default function SolutionPage() {
  return (
    <main className="py-20">
      <Container>
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold mb-4">
            Architecture de la solution ChainCacao
          </h1>
          <p className="text-gray-400 max-w-2xl">
            Une approche basée sur la blockchain pour garantir la traçabilité,
            la transparence et la conformité des données tout au long de la
            chaîne de valeur.
          </p>
        </div>

        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-6">
            Pourquoi utiliser la blockchain ?
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="bg-white/5 border border-white/10 rounded-xl h-64 flex items-center justify-center">
              <p className="text-gray-400">Illustration coffre-fort immuable</p>
            </div>

            <div className="text-gray-300 space-y-4">
              <p>
                La blockchain agit comme un registre distribué, sécurisé et
                immuable, où chaque transaction est enregistrée de manière
                transparente.
              </p>

              <p>
                Contrairement aux systèmes traditionnels, les données ne peuvent
                pas être modifiées une fois validées, garantissant ainsi leur
                intégrité.
              </p>

              <p>
                Cette propriété est essentielle pour assurer la traçabilité du
                cacao et répondre aux exigences réglementaires comme l’EUDR.
              </p>
            </div>
          </div>
        </section>

        {/* Diagramme */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-6">
            Architecture du système
          </h2>

          <BlockchainDiagram />
        </section>

        {/* Flux de traçabilité */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-6">
            Flux de traçabilité du cacao
          </h2>

          <BlockchainStepper />
        </section>

        {/* On-chain vs Off-chain */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">
            Données On-chain vs Off-chain
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-white/10">
              <thead className="bg-white/5">
                <tr>
                  <th className="p-4">Type de données</th>
                  <th className="p-4">Stockage</th>
                  <th className="p-4">Exemples</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-t border-white/10">
                  <td className="p-4">On-chain</td>
                  <td className="p-4 text-secondary">Blockchain</td>
                  <td className="p-4">Hash, ID lot, timestamp</td>
                </tr>

                <tr className="border-t border-white/10">
                  <td className="p-4">Off-chain</td>
                  <td className="p-4 text-secondary">Base de données</td>
                  <td className="p-4">Images, documents, détails produit</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </Container>
    </main>
  );
}
