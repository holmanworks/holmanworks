import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Keyboard } from '@/components/keyboard'
import { Link } from '@/components/link'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCloud } from '@/components/logo-cloud'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { CaseStudies } from '@/components/casestudies'
import { Heading, Subheading } from '@/components/text'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:""
}

function Hero() {
  return (
    <div className="relative">
      {/* <Gradient className="absolute xl:inset-4 lg:inset-3 md:inset-3 sm:inset-3 inset-2 bottom-0 rounded-[32px] ring-1 ring-inset ring-black/5" /> */}
      <Container className="relative">

        <Navbar/>

        <div className="flex flex-col justify-center">

          {/* <div className="sm:text-6xl text-4xl font-bold sm:tracking-tight text-gray-800 sm:mb-1 mb-0">
            holman
          </div>

          <div className="lg:text-3xl md:text-2xl sm:text-2xl text-xl font-normal font-serif text-gray-800 mb-6">
            [ <span className='italic'>Design consultant / Design leader / Designer</span> ]
          </div> */}

          {/* <div className='w-1/4 h-[2px] bg-gray-950'></div> */}

          <div className="text-base font-mono max-w-[620px] leading-5 font-normal text-gray-800 px-4 py-3 my-10">
            Holman, I make products that look good, feel good, and do the job. From UX to front-end, concept to craft — I help startups and teams design smarter tools, stronger brands, and better ideas.
          </div>

          {/* <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="#">Get started</Button>
            <Button variant="secondary" href="/pricing">
              See pricing
            </Button>
          </div> */}

        </div>
      </Container>
    </div>
  )
}


function BentoSection() {
  return (
    <Container>
      {/* <div className="text-7xl font-medium tracking-tight max-w-3xl">
        My recent work
      </div> */}

      <Link
        href="/portfolio"
        aria-label="My work"
        className="flex flex-col"
      >

        <div className="text-3xl font-bold font-mono text-gray-800 flex items-center gap-x-2 hover:gap-x-4 transition-all duration-300 ease-in-out px-4">
          Showcase
          <ArrowRightIcon className="size-6" />
        </div>

        <div className=" grid gap-4 sm:mt-8 mt-4 lg:grid-cols-6 grid-cols-1 lg:grid-rows-2">
          <BentoCard
            title=""
            description=""
            graphic={
              <div className="h-full bg-[url(/screenshots/types/ai.png)] bg-contain bg-no-repeat bg-center" />
            }
            hoverGraphic={
              <div className="h-full bg-[url(/screenshots/types/result.png)] bg-contain bg-no-repeat bg-center" />
            }
            className="lg:col-span-2 bg-sky-200/70"
          />

          <BentoCard
            title=""
            description=""
            graphic={
              <div className="h-full bg-[url(/screenshots/ft-solve/condition.png)] bg-contain bg-no-repeat bg-center" />
            }
            hoverGraphic={
              <div className="h-full bg-[url(/screenshots/ft-solve/translation.png)] bg-contain bg-no-repeat bg-center" />
            }
            className="lg:col-span-2 bg-indigo-200/70"
          />

          <BentoCard
            title=""
            description=""
            graphic={
              <div className="h-full bg-[url(/screenshots/makesheets/preview.png)] bg-contain bg-no-repeat bg-center" />
            }
            hoverGraphic={
              <div className="h-full bg-[url(/screenshots/makesheets/practice.png)] bg-contain bg-no-repeat bg-center" />
            }
            className="lg:col-span-2 bg-rose-200/70"
          />
          
          <BentoCard
            title=""
            description=""
            graphic={
              <div className="h-full bg-[url(/screenshots/ft-discover/thumbnail1.png)] bg-contain bg-no-repeat bg-center" />
            }
            hoverGraphic={
              <div className="h-full bg-[url(/screenshots/ft-discover/thumbnail2.png)] bg-contain bg-no-repeat bg-center" />
            }
            className="lg:col-span-2 bg-amber-200/60"
          />
          
          <BentoCard
            title=""
            description=""
            graphic={
              <div className="h-full bg-[url(/screenshots/oursong/home.png)] bg-contain bg-no-repeat bg-center" />
            }
            hoverGraphic={
              <div className="h-full bg-[url(/screenshots/oursong/community.png)] bg-contain bg-no-repeat bg-center" />
            }
            className="lg:col-span-2 bg-fuchsia-200/60"
          />

          <BentoCard
            title=""
            description=""
            graphic={
              <div className="h-full bg-[url(/screenshots/penyo/trial.png)] bg-contain bg-no-repeat bg-center" />
            }
            hoverGraphic={
              <div className="h-full bg-[url(/screenshots/penyo/home.png)] bg-contain bg-no-repeat bg-center" />
            }
            className="lg:col-span-2 bg-teal-200/70"
          />

        </div>

      </Link>
    </Container>
  )
}


export default function Home() {
  return (
    <div className="overflow-hidden">

      <Hero />

      <main>
        
        {/* <Container className="mt-10 opacity-90">
          <LogoCloud />
        </Container> */}

        <div className="bg-gradient-to-b from-white from-50% to-gray-100 py-10">
          <BentoSection />
        </div>

      </main>

      <CaseStudies />

      <Footer />

    </div>
  )
}
