import Container from "../shared/Container"
import OddBadge from "./OddBadge"

export default function OddSection() {
  return (
    <section className="py-24 bg-black">
      <Container>

        {/* Titre */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Un impact aligné avec les Objectifs de Développement Durable
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            ChainCacao contribue directement à plusieurs ODD définis par les Nations Unies.
          </p>
        </div>

        {/* Grille */}
        <div className="grid md:grid-cols-4 gap-6">

          <OddBadge
            number="1"
            title="Pas de pauvreté"
            description="Augmenter les revenus des producteurs grâce à une meilleure répartition de la valeur."
          />

          <OddBadge
            number="2"
            title="Faim zéro"
            description="Stabiliser les revenus agricoles pour renforcer la sécurité alimentaire."
          />

          <OddBadge
            number="8"
            title="Travail décent"
            description="Assurer des conditions économiques plus justes pour les agriculteurs."
          />

          <OddBadge
            number="12"
            title="Consommation responsable"
            description="Garantir une chaîne d’approvisionnement transparente et traçable."
          />

        </div>

      </Container>
    </section>
  )
}

