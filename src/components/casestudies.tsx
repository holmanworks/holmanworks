'use client'

import * as Headless from '@headlessui/react'
import { clsx } from 'clsx'
import {
  MotionValue,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  type HTMLMotionProps,
} from 'framer-motion'
import { useCallback, useLayoutEffect, useRef, useState } from 'react'
import useMeasure, { type RectReadOnly } from 'react-use-measure'
import { Container } from './container'
import { Link } from './link'
import { Heading, Subheading } from './text'
import { ArrowRightIcon, ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline'


const testimonials = [
  {
    img: '/screenshots/case-solve.png',
    name: 'Forethought - Workflow Builder',
    title: 'Simplifying workflow creation for support teams',
    url: 'https://docs.google.com/presentation/d/1wBCmaenxcehNCNh65VSPwlbsloMA2uk5Puxx_CLkcn4/edit?usp=sharing',
  },
  {
    img: '/screenshots/case-system.png',
    name: 'Forethought - Design System',
    title: 'Built the first design system to scale AI product delivery',
    url: 'https://docs.google.com/presentation/d/1qrcPJREW0WzEdXbySzHabDaCrQLonhPa00TZNNY30H4/edit?usp=sharing',
  },
  {
    img: '/screenshots/case-oursong.png',
    name: 'OurSong - Music NFT',
    title: 'From NFT Marketplace to VIP Music Community',
    url: 'https://docs.google.com/presentation/d/1IMigIkFY0sp1qgTIAt0_bT9uuQfmP4BniAkkH8pW52c/edit?usp=sharing',
  },
  {
    img: '/screenshots/case-ft-widget.png',
    name: 'Forethought - Customer Service Widget',
    title: 'Revamp the widget interface to enhance user experience',
    url: 'https://docs.google.com/presentation/d/1qXSxnLgPCCti5Y3VjjzrLzf_XZaH0GJZlH65s7t8vwM/edit?usp=sharing',
  },
  {
    img: '/screenshots/case-playground.png',
    name: 'Forethought - SupportGPT Playground',
    title: "A sandbox lets companies test and customize bots with their data",
    url: 'https://docs.google.com/presentation/d/1N5_5yJyH4pVq8CyQ-w7tG5CL3t1_JFky0WLlka7G7gM/edit?usp=sharing',
  },
  {
    img: '/screenshots/case-assist.png',
    name: 'Forethought - Gen AI Response',
    title: 'Gen AI suggests replies tailored to each ticket’s context',
    url: 'https://docs.google.com/presentation/d/1ZeggOX9cvm2repa_423idjjRztpRyQeghJXlVmJLNbk/edit?usp=sharing',
  },
  {
    img: '/screenshots/case-discover.png',
    name: 'Forethought - AI Powered Support Insights',
    title: 'Emphasize the values that drive the Call-To-Action',
    url: 'https://docs.google.com/presentation/d/10s_ugsKWGptHvVwPZZi7R4kTFxacGKfArbnvugo-a5A/edit?usp=sharing',
  },
  {
    img: '/screenshots/case-ti8.png',
    name: 'Trend Micro Internet Security',
    title: 'Reimagine a leading global antivirus software with a modern design',
    url: 'https://docs.google.com/presentation/d/1QgG-uXN-LPTDIrJbH6vhsX7UqtS226L4A1iWBwaftrM/edit?usp=sharing',
  },
]

function CaseStudyCard({
  name,
  title,
  img,
  bounds,
  scrollX,
  url,
  ...props
}: {
  img: string
  name: string
  title: string
  bounds: RectReadOnly
  scrollX: MotionValue<number>
  url?: string // Optional URL prop
} & HTMLMotionProps<'div'>) {
  let ref = useRef<HTMLDivElement | null>(null)

  let computeOpacity = useCallback(() => {
    let element = ref.current
    if (!element || bounds.width === 0) return 1

    let rect = element.getBoundingClientRect()

    if (rect.left < bounds.left) {
      let diff = bounds.left - rect.left
      let percent = diff / rect.width
      return Math.max(0.5, 1 - percent)
    } else if (rect.right > bounds.right) {
      let diff = rect.right - bounds.right
      let percent = diff / rect.width
      return Math.max(0.5, 1 - percent)
    } else {
      return 1
    }
  }, [ref, bounds.width, bounds.left, bounds.right])

  let opacity = useSpring(computeOpacity(), {
    stiffness: 154,
    damping: 23,
  })

  useLayoutEffect(() => {
    opacity.set(computeOpacity())
  }, [computeOpacity, opacity])

  useMotionValueEvent(scrollX, 'change', () => {
    opacity.set(computeOpacity())
  })

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      {...props}
      className="relative flex flex-col aspect-[4/6] w-72 shrink-0 snap-start scroll-ml-[var(--scroll-padding)] justify-end overflow-hidden rounded-2xl sm:aspect-[4/6] sm:w-96 group"
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        <div className="relative w-full h-full">
          {/* Image container */}
          <img
            alt=""
            src={img}
            className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
  
          {/* Gradient overlay */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#000000]/80 from-[calc(0*100%)] to-transparent to-[calc(2/5*100%)] ring-1 ring-inset ring-black/0"
          />
  
          {/* Text content */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="font-san text-lg font-bold text-white">{name}</p>
            <p className="font-mono text-3xl font-medium text-white pt-1 sm:tracking-tighter">{title}</p>
          </div>
        </div>
      </a>
    </motion.div>
  )
}


export function CaseStudies() {
  let scrollRef = useRef<HTMLDivElement | null>(null);
  let { scrollX } = useScroll({ container: scrollRef });
  let [setReferenceWindowRef, bounds] = useMeasure();
  let [activeIndex, setActiveIndex] = useState(0);

  // Update active index on scroll
  useMotionValueEvent(scrollX, 'change', (x) => {
    setActiveIndex(Math.floor(x / scrollRef.current!.children[0].clientWidth));
  });

  // Function to scroll to a specific index
  function scrollTo(index: number) {
    if (!scrollRef.current) return;
    let gap = 32; // Gap between cards
    let width = (scrollRef.current!.children[0] as HTMLElement).offsetWidth;
    scrollRef.current.scrollTo({ left: (width + gap) * index, behavior: 'smooth' });
  }

  return (
    <div className="overflow-hidden py-20">
      <Container>
        <div className="flex items-center gap-4">
          {/* Title */}
          <Link href="/case" aria-label="Case Studies" className="w-full">
            <div className="text-xl font-bold font-mono text-gray-800 flex items-center gap-x-2 hover:gap-x-4 transition-all duration-300 ease-in-out">
              Case Studies
              <ArrowRightIcon className="size-5" />
            </div>
          </Link>

          <div className="flex gap-4 hidden md:flex">
            {/* Left Arrow Button */}
            <button
              onClick={() => scrollTo(Math.max(activeIndex - 1, 0))}
              className="p-3 border border-gray-800 hover:bg-gray-800 rounded-full transition text-gray-800 hover:text-white"
              aria-label="Scroll Left"
            >
              <ChevronLeftIcon className="w-4 h-4" />
            </button>

            {/* Right Arrow Button */}
            <button
              onClick={() =>
                scrollTo(Math.min(activeIndex + 1, testimonials.length - 1))
              }
              className="p-3 border border-gray-800 hover:bg-gray-800 rounded-full transition text-gray-800 hover:text-white"
              aria-label="Scroll Right"
            >
              <ChevronRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Container>

      <div
        ref={scrollRef}
        className={clsx([
          'sm:mt-6 mt-4 flex sm:gap-8 gap-6 px-[var(--scroll-padding)]',
          '[scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
          'snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth',
          '[--scroll-padding:max(theme(spacing.6),calc((100vw-720px)/2))] lg:[--scroll-padding:max(theme(spacing.8),calc((100vw-1280px)/2))]',
        ])}
      >
        {testimonials.map(({ img, name, title, url }, testimonialIndex) => (
          <CaseStudyCard
            key={testimonialIndex}
            name={name}
            title={title}
            img={img}
            url={url}
            bounds={bounds}
            scrollX={scrollX}
          />
        ))}
        <div className="w-[42rem] shrink-0 sm:w-[54rem]" />
      </div>

      {/* Dots */}
      <Container className="sm:mt-16 mt-8">
        <div className="flex justify-between">
          <div className="flex sm:gap-2 gap-1.5">
            {testimonials.map(({ name }, testimonialIndex) => (
              <Headless.Button
                key={testimonialIndex}
                data-active={activeIndex === testimonialIndex ? true : undefined}
                aria-label={`Scroll to testimonial from ${name}`}
                className={clsx(
                  'sm:size-2.5 size-2 rounded-full border border-transparent bg-gray-300 transition',
                  'data-[active]:bg-gray-800 data-[hover]:bg-gray-400',
                  'forced-colors:data-[active]:bg-[Highlight] forced-colors:data-[focus]:outline-offset-4'
                )}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}


export function CaseStudiesGrid() {
  return (
    <div className="">

        {/* Grid Layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {testimonials.map(({ img, name, title, url }, index) => (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block overflow-hidden rounded-2xl group"
            >
              {/* Image */}
              <img
                src={img}
                alt={name}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#000000]/80 from-[calc(0*100%)] to-transparent to-[calc(2/5*100%)] ring-1 ring-inset ring-black/0"
              />

              {/* Text content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-san text-lg font-bold text-white">{name}</p>
                <p className="font-mono text-3xl font-medium text-white pt-1 sm:tracking-tighter">{title}</p>
              </div>
            </a>
          ))}
        </div>
    </div>
  );
}