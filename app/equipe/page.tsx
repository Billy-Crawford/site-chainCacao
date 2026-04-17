import Container from "@/components/shared/Container"
import TeamCard from "@/components/sections/TeamCard"
import Link from "next/link"

export default function EquipePage() {
  return (
    <main className="py-20">
      <Container>

        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold mb-4">
            Équipe QUILL
          </h1>
          <p className="text-gray-400 max-w-2xl">
            Une équipe pluridisciplinaire combinant intelligence artificielle,
            développement web et cybersécurité pour construire ChainCacao.
          </p>
        </div>

        {/* Membres */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">

          <TeamCard
            name="NGARTOBAYE Oumarou Billy"
            role="Chef d’équipe · IA & Architecture"
            description="Conception globale du système, coordination technique et vision produit."
          />

          <TeamCard
            name="LARE Liman Laurentia"
            role="Frontend Developer"
            description="Développement UI/UX et intégration des interfaces web modernes."
          />

          <TeamCard
            name="KPODAR Ekoue Jean Didier"
            role="Cybersécurité"
            description="Sécurisation des flux de données et analyse des risques systèmes."
          />

          <TeamCard
            name="TCHEDRE Aboudoul-Koudouse"
            role="Sécurité informatique"
            description="Protection des données et intégrité des architectures techniques."
          />

        </div>

        {/* Vision */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">
            Notre vision
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Nous croyons que la technologie peut transformer durablement les filières agricoles en Afrique.
            ChainCacao est notre réponse à un problème réel : l’opacité et l’injustice dans la chaîne de valeur du cacao.
            Notre objectif est de rendre chaque transaction transparente, traçable et équitable.
          </p>
        </section>

        {/* CTA GitHub */}
        <div className="text-center">
          <Link
            href="https://github.com/Billy-Crawford/site-chainCacao"
            target="_blank"
            className="bg-secondary text-black px-6 py-3 rounded-lg font-medium hover:opacity-80 transition"
          >
            Voir le projet sur GitHub
          </Link>
        </div>

      </Container>
    </main>
  )
}