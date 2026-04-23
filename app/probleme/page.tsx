import Container from "@/components/shared/Container";
import { User, Users, Truck, Store } from "lucide-react";

export default function ProblemePage() {
  return (
    <main className="py-20">
      <Container>

        {/* 🧠 HEADER */}
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

        {/* 🔗 CHAÎNE DE VALEUR */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-6">
            Une chaîne de valeur fragmentée
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* 🔴 SCHÉMA */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-6">

              {/* Agriculteur */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <User className="text-secondary" />
                  <span>Agriculteur</span>
                </div>
                <span className="text-red-400 text-sm">Faible revenu</span>
              </div>

              <div className="text-center text-gray-500">↓</div>

              {/* Coopérative */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Users className="text-secondary" />
                  <span>Coopérative</span>
                </div>
                <span className="text-red-400 text-sm">Données fragmentées</span>
              </div>

              <div className="text-center text-gray-500">↓</div>

              {/* Exportateur */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Truck className="text-secondary" />
                  <span>Exportateur</span>
                </div>
                <span className="text-red-400 text-sm">Manque de traçabilité</span>
              </div>

              <div className="text-center text-gray-500">↓</div>

              {/* Acheteur */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Store className="text-secondary" />
                  <span>Acheteur final</span>
                </div>
                <span className="text-green-400 text-sm">Valeur maximale</span>
              </div>

            </div>

            {/* 📝 TEXTE */}
            <div className="text-gray-300 space-y-5">
              <p>
                La production de cacao repose sur un réseau complexe d’acteurs :
                agriculteurs, coopératives, exportateurs et intermédiaires.
              </p>

              <p>
                À chaque étape, les informations sont partiellement perdues ou
                mal transmises, ce qui crée une rupture dans la traçabilité.
              </p>

              <p>
                Ce manque de transparence empêche une vérification fiable de
                l’origine du cacao et fragilise toute la chaîne de valeur.
              </p>

              <p className="text-secondary font-medium">
                → Plus on avance dans la chaîne, plus la valeur augmente, mais moins la transparence est garantie.
              </p>
            </div>

          </div>
        </section>

        {/* 📊 DONNÉES */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-6">
            Données clés de la filière
          </h2>

          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full">
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

        {/* 🏛️ EUDR */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-6">
            Impact du règlement EUDR
          </h2>

          <div className="space-y-6">
            {[
              {
                year: "2023",
                text: "Adoption du règlement européen contre la déforestation.",
              },
              {
                year: "2024",
                text: "Phase de préparation et d’adaptation des acteurs.",
              },
              {
                year: "2025",
                text: "Entrée en vigueur obligatoire pour les exportations.",
              },
            ].map((item) => (
              <div key={item.year} className="border-l-2 border-secondary pl-4">
                <h3 className="font-semibold">{item.year}</h3>
                <p className="text-gray-400">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ⚖️ BENCHMARK */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">
            Benchmark des solutions existantes
          </h2>

          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full">
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
