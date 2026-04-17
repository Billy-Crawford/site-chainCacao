import HeroSection from "@/components/sections/HeroSection"
import OddSection from "@/components/sections/OddSection"
import ProblemSection from "@/components/sections/ProblemSection"
import SolutionSection from "@/components/sections/SolutionSection"
import StatsSection from "@/components/sections/StatsSection"
import TeamSection from "@/components/sections/TeamSection"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <ProblemSection />
      <SolutionSection />
      <OddSection />
      <TeamSection />
    </main>
  )
}

