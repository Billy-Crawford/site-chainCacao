import Container from "@/components/shared/Container"
import { Mail, Code, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="py-20">
      <Container>

        <div className="mb-16">
          <h1 className="text-4xl font-bold mb-4">
            Contact & informations
          </h1>
          <p className="text-gray-400 max-w-2xl">
            Pour toute question concernant le projet ChainCacao ou le MIABE Hackathon 2026,
            vous pouvez nous contacter via les canaux ci-dessous.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-secondary transition">
            <Mail className="mx-auto mb-4 text-secondary" />
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-gray-400 text-sm">
              chaincacao.team@gmail.com
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-secondary transition">
            <Code className="mx-auto mb-4 text-secondary" />
            <h3 className="font-semibold mb-2">GitHub</h3>
            <p className="text-gray-400 text-sm">
              github.com/chaincacao
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-secondary transition">
            <MapPin className="mx-auto mb-4 text-secondary" />
            <h3 className="font-semibold mb-2">Localisation</h3>
            <p className="text-gray-400 text-sm">
              Lomé, Togo — MIABE 2026
            </p>
          </div>

        </div>

      </Container>
    </main>
  )
}