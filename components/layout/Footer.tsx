import Container from "../shared/Container"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 mt-20">
      <Container>
        <div className="py-12 grid md:grid-cols-3 gap-8">

          {/* Branding */}
          <div>
            <h3 className="text-xl font-bold text-secondary mb-3">
              ChainCacao
            </h3>
            <p className="text-sm text-gray-400">
              Une solution de traçabilité blockchain au service des producteurs
              de cacao au Togo.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-3">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/">Accueil</Link></li>
              <li><Link href="/probleme">Problème</Link></li>
              <li><Link href="/solution">Solution</Link></li>
              <li><Link href="/impact">Impact</Link></li>
              <li><Link href="/equipe">Équipe</Link></li>
              <li><Link href="/acteurs">Acteurs</Link></li>
            </ul>
          </div>

          {/* Hackathon / Crédit */}
          <div>
            <h4 className="font-semibold mb-3">Projet</h4>
            <p className="text-sm text-gray-400">
              Développé dans le cadre du MIABE Hackathon 2026.
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Équipe QUILL · TG-31 · Lomé, Togo
            </p>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} ChainCacao — Tous droits réservés
        </div>
      </Container>
    </footer>
  )
}

