// components/sections/StatsSection.tsx
import Container from "../shared/Container"
import StatCard from "./StatCard"

export default function StatsSection() {
  return (
    <section className="py-20">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Pourquoi ChainCacao ?
          </h2>
          <p className="text-gray-400 mt-3">
            Des chiffres qui révèlent une réalité critique
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StatCard value={40000} label="Familles productrices" suffix="+" />
          <StatCard value={20} label="Part de valeur perçue par l’agriculteur" suffix="%" />
          <StatCard value={35} label="Millions $ perdus par fraude" suffix="M$" />
          <StatCard value={2025} label="Entrée en vigueur EUDR" />
        </div>
      </Container>
    </section>
  )
}

