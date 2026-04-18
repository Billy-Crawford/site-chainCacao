import Container from "../shared/Container"
import Link from "next/link"
import { User, Users, Truck, Store } from "lucide-react"

export default function ProblemSection() {
  return (
    <section className="py-24 bg-black">
      <Container>

        {/* Titre */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Un système opaque et déséquilibré
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            La filière cacao au Togo repose sur une chaîne de valeur complexe,
            où les producteurs captent une faible part de la valeur réelle.
          </p>
        </div>

        {/* Contenu */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* 🔴 Schéma visuel */}
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

          {/* 📝 Texte */}
          <div className="space-y-5 text-gray-300">
            <p>
              Aujourd’hui, le parcours du cacao est fragmenté entre plusieurs acteurs :
              producteurs, coopératives, exportateurs et intermédiaires.
            </p>

            <p>
              À chaque étape, la traçabilité devient floue, rendant difficile la vérification
              de l’origine réelle des produits et la répartition équitable de la valeur.
            </p>

            <p>
              Cette opacité entraîne des pertes économiques importantes et limite
              la conformité aux nouvelles réglementations comme l’EUDR 2025.
            </p>

            <Link
              href="/solution"
              className="inline-block mt-4 bg-secondary text-black px-6 py-3 rounded-lg font-medium hover:opacity-80 transition"
            >
              Voir la solution ChainCacao →
            </Link>
          </div>

        </div>
      </Container>
    </section>
  )
}