import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { FeaturedWorks } from "@/components/featured-works"
import { Exhibitions } from "@/components/exhibitions"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <FeaturedWorks />
      <Exhibitions />
    </main>
  )
}
