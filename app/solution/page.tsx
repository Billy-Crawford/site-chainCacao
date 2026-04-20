import Container from "@/components/shared/Container";
import BlockchainDiagram from "@/components/sections/BlockchainDiagram";
import BlockchainStepper from "@/components/sections/BlockchainStepper";
import Image from "next/image";

export default function SolutionPage() {
  return (
    <main className="py-20">
      <Container>
        {/* 🧠 HEADER */}
        <div className="mb-20">
          <h1 className="text-4xl font-bold mb-5">
            Architecture de la solution ChainCacao
          </h1>

          <p className="text-gray-400 max-w-3xl">
            ChainCacao repose sur une architecture hybride combinant blockchain
            et stockage off-chain afin de garantir la traçabilité, la
            transparence et la conformité des données dans toute la chaîne de
            valeur du cacao.
          </p>
        </div>

        {/* 🔐 BLOCK 1 — POURQUOI BLOCKCHAIN */}
        <section className="mb-24">
          <h2 className="text-2xl font-semibold mb-8">
            Pourquoi utiliser la blockchain ?
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* VISUEL */}
            <div className="relative bg-white/5 border border-white/10 rounded-xl h-72 overflow-hidden">
              <Image
                src="/images/blockchain-safe.jpg"
                alt="Blockchain coffre-fort numérique"
                fill
                className="object-cover brightness-75"
              />
            </div>

            {/* TEXTE */}
            <div className="space-y-5 text-gray-300">
              <p>
                La blockchain est un registre distribué qui permet d’enregistrer
                des transactions de manière sécurisée et immuable.
              </p>

              <p>
                Chaque événement (récolte, transfert, exportation) est horodaté
                et lié à un identifiant unique appelé hash.
              </p>

              <p>
                Cela garantit que les données ne peuvent ni être modifiées ni
                falsifiées après validation.
              </p>

              <p className="text-secondary font-medium">
                → Objectif : assurer une traçabilité vérifiable de bout en bout.
              </p>
            </div>
          </div>
        </section>

        {/* 🧩 BLOCK 2 — ARCHITECTURE */}
        <section className="mb-24">
          <h2 className="text-2xl font-semibold mb-8">
            Architecture du système
          </h2>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <BlockchainDiagram />
          </div>
        </section>

        {/* 🔄 BLOCK 3 — FLUX */}
        <section className="mb-24">
          <h2 className="text-2xl font-semibold mb-8">
            Flux de traçabilité du cacao
          </h2>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <BlockchainStepper />
          </div>
        </section>

        {/* 🧠 BLOCK 4 — DONNÉES */}
        <section>
          <h2 className="text-2xl font-semibold mb-8">
            Données On-chain vs Off-chain
          </h2>

          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-left">
              <thead className="bg-white/5">
                <tr>
                  <th className="p-4">Type</th>
                  <th className="p-4">Stockage</th>
                  <th className="p-4">Exemples</th>
                  <th className="p-4">Rôle</th>
                </tr>
              </thead>

              <tbody className="text-gray-300">
                <tr className="border-t border-white/10">
                  <td className="p-4 font-medium">On-chain</td>
                  <td className="p-4 text-secondary">Blockchain</td>
                  <td className="p-4">Hash, ID lot, timestamp</td>
                  <td className="p-4">Preuve d’intégrité</td>
                </tr>

                <tr className="border-t border-white/10">
                  <td className="p-4 font-medium">Off-chain</td>
                  <td className="p-4 text-secondary">Base de données</td>
                  <td className="p-4">Images, documents, certificats</td>
                  <td className="p-4">Stockage volumineux</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </Container>
    </main>
  );
}


