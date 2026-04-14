import { ArrowUpRight, Globe } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import AnimatedGridPattern from "@/components/backgrounds/AnimatedGridPattern"

export default function Hero() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <AnimatedGridPattern
        className={cn(
          "mask-[radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 h-full skew-y-12"
        )}
        duration={3}
        maxOpacity={0.1}
        numSquares={30}
      />
      <div className="relative z-10 max-w-3xl py-10 text-center">
        <Badge
          asChild
          className="rounded-full border-border py-1"
          variant="secondary"
        >
          <Link href="/models">
            200+ Models • 50+ Categories{" "}
            <ArrowUpRight className="ml-1 size-4" />
          </Link>
        </Badge>
        <h1 className="font-satoshi mt-6 text-4xl font-semibold tracking-tight sm:text-4xl md:text-5xl md:leading-[1.2] lg:text-6xl">
          AI LLM Leaderboard <br /> Real-Time Rankings for Every Use Case
        </h1>
        <p className="mt-6 text-foreground/80 md:text-lg">
          Discover the best LLMs for coding, SEO, science, legal, Arabic,
          English, Python, JavaScript & 50+ specialized categories. Transparent,
          unbiased, updated daily.
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Link href="/leaderboards">
            <Button className="cursor-pointer rounded-full text-base" size="lg">
              Browse All Leaderboards <ArrowUpRight className="h-5! w-5!" />
            </Button>
          </Link>

          <Link href="/leaderboards">
            <Button
              className="cursor-pointer rounded-full text-base shadow-none"
              size="lg"
              variant="outline"
            >
              <Globe className="h-5! w-5!" /> View Global Ranking
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
