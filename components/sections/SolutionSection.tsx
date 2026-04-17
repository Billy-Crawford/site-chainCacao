import Container from "../shared/Container";
import Link from "next/link";
import { ShieldCheck, Link as LinkIcon, CheckCircle } from "lucide-react";
import BlockchainStepper from "./BlockchainStepper";
import BlockchainDiagram from "./BlockchainDiagram";

export default function SolutionSection() {
  return (
    <section className="py-24 bg-dark">
      <Container>
        {/* Titre */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Une solution basée sur la blockchain
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            ChainCacao permet de tracer chaque lot de cacao de la production à
            l’export, grâce à une technologie transparente, sécurisée et
            immuable.
          </p>
        </div>

        {/* Diagramme (PRIORITÉ VISUELLE) */}
        <div className="mb-16">
          <BlockchainDiagram />
        </div>

        {/* Stepper (INTERACTION) */}
        <div className="mb-20">
          <BlockchainStepper />
        </div>

        {/* Avantages */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-secondary transition">
            <ShieldCheck className="mx-auto mb-4 text-secondary" size={32} />
            <h3 className="font-semibold text-lg mb-2">Immuabilité</h3>
            <p className="text-sm text-gray-400">
              Les données enregistrées sur la blockchain ne peuvent pas être modifiées.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-secondary transition">
            <LinkIcon className="mx-auto mb-4 text-secondary" size={32} />
            <h3 className="font-semibold text-lg mb-2">Traçabilité</h3>
            <p className="text-sm text-gray-400">
              Chaque étape du parcours du cacao est enregistrée et vérifiable.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-secondary transition">
            <CheckCircle className="mx-auto mb-4 text-secondary" size={32} />
            <h3 className="font-semibold text-lg mb-2">Conformité EUDR</h3>
            <p className="text-sm text-gray-400">
              La solution facilite le respect des réglementations européennes.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/solution"
            className="bg-secondary text-black px-6 py-3 rounded-lg font-medium hover:opacity-80 transition"
          >
            Voir l’architecture complète
          </Link>
        </div>
      </Container>
    </section>
  );
}

