import Container from "@/components/shared/Container"
import TraceDemo from "@/components/demo/TraceDemo"

export default function DemoPage() {
  return (
    <main className="py-20">
      <Container>

        <h1 className="text-4xl font-bold mb-6">
          Démonstration de traçabilité
        </h1>

        <p className="text-gray-400 mb-10 max-w-2xl">
          Cette simulation illustre comment un lot de cacao peut être tracé
          à chaque étape grâce à la blockchain.
        </p>

        <TraceDemo />

      </Container>
    </main>
  )
}