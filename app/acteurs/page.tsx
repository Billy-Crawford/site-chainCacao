import Container from "@/components/shared/Container"
import { User, Users, Truck, ShieldCheck } from "lucide-react"
import Link from "next/link"

export default function ActeursPage() {
  return (
    <main className="py-20">
      <Container>

        {/* 🧠 HEADER */}
        <div className="mb-20 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Les acteurs de l’écosystème ChainCacao
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto">
            ChainCacao connecte tous les acteurs de la filière cacao dans un
            système unifié, transparent et sécurisé, où chaque interaction est
            tracée et vérifiable.
          </p>
        </div>

        {/* 👥 ACTEURS */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">

          {/* Agriculteur */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-secondary transition">
            <User className="text-secondary mb-4" size={28} />
            <h3 className="font-semibold text-lg mb-2">Agriculteur</h3>

            <p className="text-gray-400 text-sm mb-4">
              Point d’entrée du système, l’agriculteur enregistre les informations
              liées à la production du cacao.
            </p>

            <ul className="text-sm text-gray-300 space-y-2">
              <li>• Enregistrement des récoltes</li>
              <li>• Identification des lots</li>
              <li>• Accès à une meilleure valorisation</li>
            </ul>
          </div>

          {/* Coopérative */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-secondary transition">
            <Users className="text-secondary mb-4" size={28} />
            <h3 className="font-semibold text-lg mb-2">Coopérative</h3>

            <p className="text-gray-400 text-sm mb-4">
              La coopérative centralise et vérifie les données provenant des producteurs.
            </p>

            <ul className="text-sm text-gray-300 space-y-2">
              <li>• Agrégation des données</li>
              <li>• Validation des informations</li>
              <li>• Suivi des lots</li>
            </ul>
          </div>

          {/* Exportateur */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-secondary transition">
            <Truck className="text-secondary mb-4" size={28} />
            <h3 className="font-semibold text-lg mb-2">Exportateur</h3>

            <p className="text-gray-400 text-sm mb-4">
              L’exportateur garantit la conformité des produits avant leur mise sur le marché.
            </p>

            <ul className="text-sm text-gray-300 space-y-2">
              <li>• Vérification de la traçabilité</li>
              <li>• Gestion des expéditions</li>
              <li>• Accès aux données certifiées</li>
            </ul>
          </div>

          {/* Vérificateur */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-secondary transition">
            <ShieldCheck className="text-secondary mb-4" size={28} />
            <h3 className="font-semibold text-lg mb-2">Autorité / Vérificateur</h3>

            <p className="text-gray-400 text-sm mb-4">
              Les organismes de contrôle accèdent à des données fiables et immuables.
            </p>

            <ul className="text-sm text-gray-300 space-y-2">
              <li>• Audit des données</li>
              <li>• Contrôle réglementaire</li>
              <li>• Validation EUDR</li>
            </ul>
          </div>

        </div>

        {/* 🔄 SCÉNARIO RÉEL */}
        <section className="mb-24">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Exemple concret d’utilisation
          </h2>

          <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-gray-300 max-w-3xl mx-auto space-y-4">
            <p>
              Un agriculteur enregistre une récolte de cacao dans le système. 
              Un identifiant unique est généré et enregistré sur la blockchain.
            </p>

            <p>
              La coopérative valide les informations et ajoute des données complémentaires.
              Chaque modification est horodatée et traçable.
            </p>

            <p>
              Lors de l’export, l’exportateur vérifie l’historique complet du lot,
              garantissant sa conformité aux normes internationales.
            </p>

            <p className="text-secondary font-medium">
              → Résultat : une chaîne transparente, fiable et vérifiable de bout en bout.
            </p>
          </div>
        </section>

        {/* 🎯 VALEUR */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Valeur apportée par ChainCacao
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <h3 className="font-semibold mb-2">Transparence</h3>
              <p className="text-gray-400 text-sm">
                Accès à des données fiables pour tous les acteurs.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <h3 className="font-semibold mb-2">Réduction des fraudes</h3>
              <p className="text-gray-400 text-sm">
                Impossibilité de modifier les données enregistrées.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <h3 className="font-semibold mb-2">Conformité</h3>
              <p className="text-gray-400 text-sm">
                Respect simplifié des réglementations internationales.
              </p>
            </div>

          </div>
        </section>

        {/* 🚀 CTA */}
        <div className="text-center">
          <Link
            href="/solution"
            className="bg-secondary text-black px-6 py-3 rounded-lg font-medium hover:opacity-80 transition"
          >
            Voir comment fonctionne la solution
          </Link>
        </div>

      </Container>
    </main>
  )
}

