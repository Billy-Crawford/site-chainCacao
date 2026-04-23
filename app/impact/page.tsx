import Container from "@/components/shared/Container";
import Image from "next/image";

export default function ImpactPage() {
  return (
    <main className="py-20">
      <Container>

        {/* 🧠 HEADER */}
        <div className="mb-20 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Impact social et économique
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            ChainCacao vise à transformer durablement la filière cacao au Togo
            en améliorant la transparence, la traçabilité et la répartition de la valeur.
          </p>
        </div>

        {/* 📊 IMPACT CHIFFRÉ */}
        <section className="mb-24">
          <h2 className="text-2xl font-semibold mb-10 text-center">
            Impact mesurable attendu
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white/5 border border-white/10 p-8 rounded-xl text-center hover:border-secondary transition">
              <h3 className="text-4xl font-bold text-secondary mb-2">40 000+</h3>
              <p className="text-gray-400">Familles bénéficiaires</p>
              <p className="text-xs text-gray-500 mt-2">
                Estimation basée sur la production nationale
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-xl text-center hover:border-secondary transition">
              <h3 className="text-4xl font-bold text-secondary mb-2">+20%</h3>
              <p className="text-gray-400">Revenus des producteurs</p>
              <p className="text-xs text-gray-500 mt-2">
                Réduction des intermédiaires et meilleure transparence
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-xl text-center hover:border-secondary transition">
              <h3 className="text-4xl font-bold text-secondary mb-2">-30%</h3>
              <p className="text-gray-400">Fraudes et pertes</p>
              <p className="text-xs text-gray-500 mt-2">
                Grâce à la traçabilité blockchain
              </p>
            </div>

          </div>
        </section>

        {/* 🌍 ODD */}
        <section className="mb-24">
          <h2 className="text-2xl font-semibold mb-10 text-center">
            Contribution aux ODD
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-gray-300">

            <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
              <h3 className="text-secondary font-semibold mb-2">
                ODD 1 — Pas de pauvreté
              </h3>
              <p>
                Amélioration directe des revenus des producteurs grâce à une
                meilleure répartition de la valeur.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
              <h3 className="text-secondary font-semibold mb-2">
                ODD 2 — Faim zéro
              </h3>
              <p>
                Stabilisation des revenus agricoles et amélioration des conditions
                de vie des familles rurales.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
              <h3 className="text-secondary font-semibold mb-2">
                ODD 8 — Travail décent
              </h3>
              <p>
                Création d’un système plus équitable et transparent dans la filière.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
              <h3 className="text-secondary font-semibold mb-2">
                ODD 12 — Consommation responsable
              </h3>
              <p>
                Garantie d’une origine traçable et conforme aux normes internationales.
              </p>
            </div>

          </div>
        </section>

        {/* 🗺️ DÉPLOIEMENT */}
        <section className="mb-24">
          <h2 className="text-2xl font-semibold mb-10 text-center">
            Plan de déploiement au Togo
          </h2>

          <div className="relative h-80 rounded-xl overflow-hidden border border-white/10">
            <Image
              src="/images/carte-Togo-centre.png" 
              alt="Carte du Togo - zones de déploiement"
              fill
              className="object-cover opacity-60"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white font-medium text-center">
                Zones pilotes : Plateaux • Centrale • Kara
              </p>
            </div>
          </div>
        </section>

        {/* 🧑‍🌾 TÉMOIGNAGE */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-10 text-center">
            Témoignage terrain
          </h2>

          <div className="max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-xl p-8 text-center">

            <p className="italic text-lg mb-6 text-gray-300">
              “Avant, nous ne savions pas où partait notre cacao ni à quel prix
              il était réellement vendu. Avec ChainCacao, nous pouvons suivre
              notre production et espérer une meilleure rémunération.”
            </p>

            <p className="text-sm text-gray-400">
              — Producteur de cacao, région des Plateaux
            </p>

          </div>
        </section>

        {/* 🚀 CTA FINAL */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">
            Une transformation durable de la filière cacao
          </h3>

          <p className="text-gray-400 mb-6">
            ChainCacao ne se limite pas à une solution technique,
            mais propose un changement systémique.
          </p>

          <a
            href="/solution"
            className="bg-secondary text-black px-6 py-3 rounded-lg font-medium hover:opacity-80 transition"
          >
            Voir la solution complète
          </a>
        </div>

      </Container>
    </main>
  );
}