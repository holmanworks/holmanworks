import { BentoCard } from '@/components/bento-card'
import { Container } from '@/components/container'
import { Navbar } from '@/components/navbar'
import { CaseStudies } from '@/components/works'
import { Link } from '@/components/link'
import type { Metadata } from 'next'
import Image from 'next/image'
import { ArrowRightIcon } from '@heroicons/react/24/outline'


export const metadata: Metadata = {
  description: '',
}

function Hero() {
  return (
    <div className="relative mt-10 px-5 ml-5 w-full md:w-[360px]">
      <div className="flex flex-col justify-center gap-5">
        <Image
          alt=""
          src="/holmanworks-icon/avatar2.png"
          width={80}
          height={80}
          className="w-[80px] h-[80px] rounded-full object-cover"
        />

        <div className="text-xl font-title font-semibold text-gray-800">
          holman
        </div>

        <div className="text-base font-sans leading-5 font-normal text-gray-800 space-y-4">
          <p>
            A Sr. Product Designer from Los Angeles, experienced in B2B platforms, mobile apps, and scalable design systems. 
            I lead product design for startup and enterprise teams, 
            and currently run a design consultancy helping companies in building digital and AI products.
          </p>

          <p>
            My work also helps marketing shape user journeys and content strategy to increase brand and customer engagement.
          </p>
        </div>

        <div className="mt-5">
          <BentoSection />
        </div>
      </div>
    </div>
  )
}

function BentoSection() {
  return (
    <div>
      <Link href="/portfolio" aria-label="My work" className="flex flex-col">
        <div className="flex items-center justify-between text-xl font-semibold font-title text-gray-800">
          <span>portfolio</span>

          <span className="flex items-center gap-1 text-base font-title font-normal text-gray-500 hover:text-gray-800">
            <span>See all</span>
            <ArrowRightIcon className="size-4" />
          </span>
        </div>

        <div className="grid gap-1 mt-4 grid-cols-2">
          <BentoCard
            title=""
            description=""
            graphic={
              <div className="h-full bg-[url(/screenshots/ft-solve/article.png)] bg-contain bg-no-repeat bg-center" />
            }
            hoverGraphic={
              <div className="" />
            }
            className="bg-black/5"
          />

          <BentoCard
            title=""
            description=""
            graphic={
              <div className="h-full bg-[url(/screenshots/oursong/wallet.png)] bg-contain bg-no-repeat bg-center" />
            }
            hoverGraphic={
              <div className="" />
            }
            className="bg-black/5"
          />

          <BentoCard
            title=""
            description=""
            graphic={
              <div className="h-full bg-[url(/screenshots/ft-assist/preview.png)] bg-contain bg-no-repeat bg-center" />
            }
            hoverGraphic={
              <div className="" />
            }
            className="bg-black/5"
          />

          <BentoCard
            title=""
            description=""
            graphic={
              <div className="h-full bg-[url(/screenshots/makesheets/preview.png)] bg-contain bg-no-repeat bg-center" />
            }
            hoverGraphic={
              <div className="" />
            }
            className="bg-black/5"
          />

          <BentoCard
            title=""
            description=""
            graphic={
              <div className="h-full bg-[url(/screenshots/types/searching.png)] bg-contain bg-no-repeat bg-center" />
            }
            hoverGraphic={
              <div className="" />
            }
            className="bg-black/5"
          />

          <BentoCard
            title=""
            description=""
            graphic={
              <div className="h-full bg-[url(/screenshots/ft-widget/widget1.png)] bg-contain bg-no-repeat bg-center" />
            }
            hoverGraphic={
              <div className="" />
            }
            className="bg-black/5"
          />

        </div>
      </Link>
    </div>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col overflow-hidden">
      <Container>
        <Navbar />
      </Container>

      <div className="flex-1">
        <div className="mx-auto max-w-[1280px] h-full flex flex-col md:flex-row md:divide-x divide-y md:divide-y-0 divide-gray-100">

          <div className="flex-1 overflow-y-auto flex justify-center">
            <div className="w-full max-w-[720px]">
              <CaseStudies />
            </div>
          </div>

          <div className="min-w-[380px] flex-shrink-0">
            <Hero />
          </div>
          
        </div>
      </div>
    </div>
  )
}
