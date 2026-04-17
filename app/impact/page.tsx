import Container from "@/components/shared/Container";

export default function ImpactPage() {
  return (
    <main className="py-20">
      <Container>
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold mb-4">
            Impact social et économique de ChainCacao
          </h1>
          <p className="text-gray-400 max-w-2xl">
            Notre solution vise à transformer durablement la filière cacao en
            améliorant les revenus, la transparence et la conformité.
          </p>
        </div>

        {/* Statistiques d’impact */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-6">Impact attendu</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
              <h3 className="text-3xl font-bold text-secondary">40 000+</h3>
              <p className="text-gray-400">Familles bénéficiaires</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
              <h3 className="text-3xl font-bold text-secondary">+20%</h3>
              <p className="text-gray-400">Augmentation des revenus</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
              <h3 className="text-3xl font-bold text-secondary">-30%</h3>
              <p className="text-gray-400">Réduction des fraudes</p>
            </div>
          </div>
        </section>

        {/* ODD détaillés */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-6">
            Contribution aux Objectifs de Développement Durable
          </h2>

          <div className="space-y-6 text-gray-300">
            <div>
              <h3 className="text-secondary font-semibold">
                ODD 1 — Pas de pauvreté
              </h3>
              <p>
                En améliorant la transparence des transactions, ChainCacao
                permet une meilleure redistribution de la valeur vers les
                producteurs.
              </p>
            </div>

            <div>
              <h3 className="text-secondary font-semibold">
                ODD 2 — Faim zéro
              </h3>
              <p>
                Des revenus plus stables permettent aux familles agricoles
                d’assurer leur sécurité alimentaire.
              </p>
            </div>

            <div>
              <h3 className="text-secondary font-semibold">
                ODD 8 — Travail décent
              </h3>
              <p>
                Le projet favorise des conditions économiques plus équitables
                dans la chaîne de production.
              </p>
            </div>

            <div>
              <h3 className="text-secondary font-semibold">
                ODD 12 — Consommation responsable
              </h3>
              <p>
                La traçabilité garantit aux consommateurs une origine
                transparente et conforme aux normes internationales.
              </p>
            </div>
          </div>
        </section>

        {/* Déploiement (carte) */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-6">
            Plan de déploiement au Togo
          </h2>

          <div className="bg-white/5 border border-white/10 rounded-xl h-64 flex items-center justify-center">
            <p className="text-gray-400">
              Carte du Togo avec zones cibles (à intégrer)
            </p>
          </div>
        </section>

        {/* Témoignage */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Témoignage terrain</h2>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-gray-300">
            <p className="italic mb-4">
              “Avant, nous ne savions pas où partait notre cacao ni à quel prix
              il était réellement vendu. Avec ChainCacao, nous pouvons suivre
              notre production et espérer une meilleure rémunération.”
            </p>

            <p className="text-sm text-gray-400">
              — Kossi, producteur de cacao (région des Plateaux)
            </p>
          </div>
        </section>
      </Container>
    </main>
  );
}

