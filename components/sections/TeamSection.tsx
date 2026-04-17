import Container from "../shared/Container"
import TeamCard from "./TeamCard"
import Link from "next/link"

export default function TeamSection() {
  return (
    <section className="py-24 bg-dark">
      <Container>

        {/* Titre */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            L’équipe QUILL
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            Une équipe jeune, engagée et multidisciplinaire, réunie pour apporter
            une solution technologique concrète aux défis de la filière cacao au Togo.
          </p>
        </div>

        {/* Grille */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">

          <TeamCard
            name="NGARTOBAYE Oumarou Billy"
            role="Chef d’équipe · Master 1 Intelligence Artificielle"
            description="Responsable de la vision globale du projet, de la coordination technique et de la conception de la solution ChainCacao."
          />

          <TeamCard
            name="LARE Liman Laurentia"
            role="Frontend Developer"
            description="Passionnée par le développement informatique, elle conçoit des interfaces modernes, intuitives et centrées utilisateur."
          />

          <TeamCard
            name="KPODAR Ekoue Jean Didier"
            role="Étudiant en Cybersecurity (3e année)"
            description="Spécialisé en cybersécurité, il contribue à la sécurisation des données et à la fiabilité du système."
          />

          <TeamCard
            name="TCHEDRE Aboudoul-Koudouse"
            role="Étudiant en Sécurité Informatique"
            description="Formé en sécurité informatique et cybersécurité, il participe à la protection et à l’intégrité des flux de données."
          />

        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/equipe"
            className="border border-white/20 px-6 py-3 rounded-lg hover:bg-white/10 transition"
          >
            Découvrir l’équipe complète
          </Link>
        </div>

      </Container>
    </section>
  )
}

