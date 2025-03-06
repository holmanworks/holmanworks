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
    name: 'Forethought Solve - Workflow Builder',
    title: 'Build intricate workflows easily',
    url: 'https://docs.google.com/presentation/d/1T3s0EdzQTvZrvO69eNFc730rWkrYJ6135sFgi0o2EYc/edit#slide=id.g2bdd7d84be1_1_442',
  },
  {
    img: '/screenshots/case-ft-widget.png',
    name: 'Forethought Solve - Widget',
    title: 'Revamp the widget interface to enhance user experience',
    url: 'https://docs.google.com/presentation/d/1T3s0EdzQTvZrvO69eNFc730rWkrYJ6135sFgi0o2EYc/edit#slide=id.g2bdd7d84be1_1_629',
  },
  {
    img: '/screenshots/case-playground.png',
    name: 'Forethought SupportGPT - Playground',
    title: "Gen AI for customer support automation, with Open AI's ChatGPT",
    url: 'https://docs.google.com/presentation/d/1T3s0EdzQTvZrvO69eNFc730rWkrYJ6135sFgi0o2EYc/edit#slide=id.g2bdd7d84be1_1_641',
  },
  {
    img: '/screenshots/case-assist.png',
    name: 'Forethought Assist - Generate Response with SupportGPT',
    title: 'Agents get suggested response based on ticket context and powered by Gen AI',
    url: 'https://docs.google.com/presentation/d/1T3s0EdzQTvZrvO69eNFc730rWkrYJ6135sFgi0o2EYc/edit#slide=id.g2bdd7d84be1_1_652',
  },
  {
    img: '/screenshots/case-discover.png',
    name: 'Forethought Discover - Automation',
    title: 'Emphasize the values that drive the Call-To-Action',
    url: 'https://docs.google.com/presentation/d/1T3s0EdzQTvZrvO69eNFc730rWkrYJ6135sFgi0o2EYc/edit#slide=id.g2bdd7d84be1_1_663',
  },
  {
    img: '/screenshots/case-oursong.png',
    name: 'OurSong - Music NFT + VIP Community',
    title: 'Transforming a music NFT marketplace into an exclusion VIP community',
    url: 'https://docs.google.com/presentation/d/1T3s0EdzQTvZrvO69eNFc730rWkrYJ6135sFgi0o2EYc/edit#slide=id.g2bdd7d84be1_1_674',
  },
  {
    img: '/screenshots/case-ti8.png',
    name: 'Trend Micro Internet Security',
    title: 'Reimagine a leading global antivirus software with a modern design',
    url: 'https://docs.google.com/presentation/d/1T3s0EdzQTvZrvO69eNFc730rWkrYJ6135sFgi0o2EYc/edit#slide=id.g2bdd7d84be1_1_817',
  },
]

function TestimonialCard({
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
      className="relative flex flex-col aspect-[4/6] w-72 shrink-0 snap-start scroll-ml-[var(--scroll-padding)] justify-end overflow-hidden rounded-[8px] sm:aspect-[4/6] sm:w-96 group"
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
            <p className="font-mono sm:text-4xl text-2xl font-medium sm:tracking-tighter text-white">{name}</p>
            <p className="font-sans sm:text-lg text-base font-normal text-white pt-2">{title}</p>
          </div>
        </div>
      </a>
    </motion.div>
  )
}


export function Testimonials() {
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
    <div className="overflow-hidden py-32">
      <Container>
        <div className="flex items-center gap-4">
          {/* Title */}
          <Link href="/case" aria-label="Case Studies" className="flex flex-1">
            <div className="sm:text-7xl text-5xl font-medium text-gray-950 sm:tracking-tight flex items-center gap-x-2 hover:gap-x-4 transition-all duration-300 ease-in-out">
              Case Studies
              <ArrowRightIcon className="size-8" />
            </div>
          </Link>

          <div className='flex gap-4'>
            {/* Left Arrow Button */}
            <button
              onClick={() => scrollTo(Math.max(activeIndex - 1, 0))}
              className="p-3 border border-gray-800 hover:bg-gray-800 rounded-full transition text-gray-800 hover:text-white"
              aria-label="Scroll Left"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>

            {/* Right Arrow Button */}
            <button
              onClick={() =>
                scrollTo(Math.min(activeIndex + 1, testimonials.length - 1))
              }
              className="p-3 border border-gray-800 hover:bg-gray-800 rounded-full transition text-gray-800 hover:text-white"
              aria-label="Scroll Right"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </Container>

      <div
        ref={scrollRef}
        className={clsx([
          'sm:mt-16 mt-8 flex sm:gap-8 gap-6 px-[var(--scroll-padding)]',
          '[scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
          'snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth',
          '[--scroll-padding:max(theme(spacing.6),calc((100vw-720px)/2))] lg:[--scroll-padding:max(theme(spacing.8),calc((100vw-1280px)/2))]',
        ])}
      >
        {testimonials.map(({ img, name, title, url }, testimonialIndex) => (
          <TestimonialCard
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
