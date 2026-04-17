import Container from "../shared/Container"
import Link from "next/link"

export default function ProblemSection() {
  return (
    <section className="py-24 bg-black">
      <Container>
        
        {/* Titre */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Un système opaque et déséquilibré
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            La filière cacao au Togo repose sur une chaîne de valeur complexe,
            où les producteurs captent une faible part de la valeur réelle.
          </p>
        </div>

        {/* Contenu principal */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Illustration (placeholder) */}
          <div className="bg-white/5 border border-white/10 rounded-xl h-64 flex items-center justify-center">
            <p className="text-gray-400">
              Schéma chaîne de valeur (à ajouter)
            </p>
          </div>

          {/* Texte */}
          <div className="space-y-4 text-gray-300">
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
              className="inline-block mt-4 bg-secondary text-black px-5 py-3 rounded-lg font-medium hover:opacity-80 transition"
            >
              Voir la solution ChainCacao
            </Link>
          </div>

        </div>
      </Container>
    </section>
  )
}

