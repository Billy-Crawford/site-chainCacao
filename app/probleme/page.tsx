import Container from "@/components/shared/Container";

export default function ProblemePage() {
  return (
    <main className="py-20">
      <Container>
        {/* Titre */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold mb-4">
            Comprendre les enjeux de la filière cacao
          </h1>
          <p className="text-gray-400 max-w-2xl">
            La filière cacao au Togo fait face à des défis structurels majeurs,
            notamment en matière de transparence, de traçabilité et de
            répartition de la valeur.
          </p>
        </div>

        {/* Contexte */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-6">
            Une chaîne de valeur fragmentée
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Visuel */}
            <div className="bg-white/5 border border-white/10 rounded-xl h-64 flex items-center justify-center">
              <p className="text-gray-400">Schéma chaîne de valeur</p>
            </div>

            {/* Texte */}
            <div className="text-gray-300 space-y-4">
              <p>
                La production de cacao repose sur un réseau complexe d’acteurs :
                agriculteurs, coopératives, exportateurs et intermédiaires.
              </p>

              <p>
                Cette multiplicité d’intervenants rend difficile la traçabilité
                des produits et favorise les asymétries d’information.
              </p>

              <p>
                En conséquence, les producteurs captent une faible part de la
                valeur finale, tandis que les risques de fraude et de
                non-conformité augmentent.
              </p>
            </div>
          </div>
        </section>

        {/* Données */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-6">
            Données clés de la filière
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-white/10">
              <thead className="bg-white/5">
                <tr>
                  <th className="p-4 text-left">Indicateur</th>
                  <th className="p-4 text-left">Valeur</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-t border-white/10">
                  <td className="p-4">Familles productrices</td>
                  <td className="p-4 text-secondary">40 000+</td>
                </tr>

                <tr className="border-t border-white/10">
                  <td className="p-4">Part de valeur agriculteur</td>
                  <td className="p-4 text-secondary">15% – 25%</td>
                </tr>

                <tr className="border-t border-white/10">
                  <td className="p-4">Pertes annuelles</td>
                  <td className="p-4 text-secondary">30 – 40 M$</td>
                </tr>

                <tr className="border-t border-white/10">
                  <td className="p-4">Entrée en vigueur EUDR</td>
                  <td className="p-4 text-secondary">2025</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* EUDR */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-6">
            Impact du règlement EUDR
          </h2>

          <div className="space-y-6">
            <div className="border-l-2 border-secondary pl-4">
              <h3 className="font-semibold">2023</h3>
              <p className="text-gray-400">
                Adoption du règlement européen contre la déforestation.
              </p>
            </div>

            <div className="border-l-2 border-secondary pl-4">
              <h3 className="font-semibold">2024</h3>
              <p className="text-gray-400">
                Phase de préparation et d’adaptation des acteurs.
              </p>
            </div>

            <div className="border-l-2 border-secondary pl-4">
              <h3 className="font-semibold">2025</h3>
              <p className="text-gray-400">
                Entrée en vigueur obligatoire pour les exportations.
              </p>
            </div>
          </div>
        </section>

        {/* Benchmark */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">
            Benchmark des solutions existantes
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-white/10">
              <thead className="bg-white/5">
                <tr>
                  <th className="p-4">Critère</th>
                  <th className="p-4">Solutions existantes</th>
                  <th className="p-4 text-secondary">ChainCacao</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-t border-white/10">
                  <td className="p-4">Traçabilité</td>
                  <td className="p-4">Partielle</td>
                  <td className="p-4 text-secondary">Complète</td>
                </tr>

                <tr className="border-t border-white/10">
                  <td className="p-4">Transparence</td>
                  <td className="p-4">Limitée</td>
                  <td className="p-4 text-secondary">Totale</td>
                </tr>

                <tr className="border-t border-white/10">
                  <td className="p-4">Conformité EUDR</td>
                  <td className="p-4">Non garantie</td>
                  <td className="p-4 text-secondary">Assurée</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </Container>
    </main>
  );
}
