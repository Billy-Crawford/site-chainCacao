import Container from "../shared/Container"
import Link from "next/link"
import { ShieldCheck, Link as LinkIcon, CheckCircle } from "lucide-react"
import BlockchainStepper from "./BlockchainStepper"
import BlockchainDiagram from "./BlockchainDiagram"

export default function SolutionSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-black/95">
      <Container>

        {/* 🧠 INTRO */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Une solution basée sur la blockchain
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            ChainCacao transforme la filière cacao en un système transparent,
            où chaque étape est enregistrée, vérifiable et immuable.
          </p>
        </div>

        {/* 🔷 DIAGRAMME (preuve visuelle) */}
        <div className="mb-20">
          <div className="mb-6 text-center">
            <h3 className="text-lg font-semibold text-secondary">
              Architecture de traçabilité
            </h3>
            <p className="text-sm text-gray-500">
              Visualisation du flux blockchain du cacao
            </p>
          </div>

          <BlockchainDiagram />
        </div>

        {/* 🔁 FLUX INTERACTIF */}
        <div className="mb-20">
          <div className="mb-6 text-center">
            <h3 className="text-lg font-semibold text-secondary">
              Parcours d’un lot de cacao
            </h3>
            <p className="text-sm text-gray-500">
              Simulation étape par étape du processus
            </p>
          </div>

          <BlockchainStepper />
        </div>

        {/* 💡 VALEUR AJOUTÉE */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-lg font-semibold text-secondary">
              Pourquoi cette solution change tout ?
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-secondary transition">
              <ShieldCheck className="text-secondary mb-4" size={30} />
              <h4 className="font-semibold mb-2">Immuabilité</h4>
              <p className="text-sm text-gray-400">
                Chaque transaction est enregistrée de manière permanente et ne peut pas être modifiée.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-secondary transition">
              <LinkIcon className="text-secondary mb-4" size={30} />
              <h4 className="font-semibold mb-2">Traçabilité complète</h4>
              <p className="text-sm text-gray-400">
                Suivi transparent du cacao de la ferme jusqu’à l’exportation.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-secondary transition">
              <CheckCircle className="text-secondary mb-4" size={30} />
              <h4 className="font-semibold mb-2">Conformité EUDR</h4>
              <p className="text-sm text-gray-400">
                Respect automatique des normes européennes sur la déforestation.
              </p>
            </div>

          </div>
        </div>

        {/* 🚀 CTA FINAL */}
        <div className="text-center">
          <Link
            href="/solution"
            className="inline-block bg-secondary text-black px-7 py-3 rounded-lg font-medium hover:opacity-80 transition"
          >
            Explorer l’architecture complète
          </Link>
        </div>

      </Container>
    </section>
  )
}

