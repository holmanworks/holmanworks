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
import Image from 'next/image'




const testimonials = [
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

const posts = [
  {
    image: '/screenshots/ft-solve/cover.png',
    icon: '/screenshots/ft-logo.svg',
    company: 'Forethought',
    title: 'Designing the AI-Powered Workflow Logic for Customer Support',
    excerpt:
      'A redesigned workflow builder that improved UX and drove over 50% of the company’s revenue.',
    date: '',
    url: 'https://www.figma.com/deck/5w0jvYxCYQyJKzdIWtiLEh/Forethought---Customer-Service-Workflow-Builder?node-id=0-1&t=UURm1ds4UpMxTMBM-1',
  },
  {
    image: '/screenshots/ft-assist/cover.png',
    icon: '/screenshots/ft-logo.svg',
    company: 'Forethought',
    title: 'Designing the AI Response Experience for Human Agents',
    excerpt:
      'A generative AI copilot that helps human agents respond faster while staying in full control.',
    date: '',
    url: 'https://www.figma.com/deck/vqRgmkSpDZRZ8iVEvjCSGs/Forethought---Assist---Generate-Response?node-id=0-1&t=ENggFx7sIwnLgn5U-1',
  },
  {
    image: '/screenshots/ft-solve/cover_copy.png',
    icon: '/screenshots/ft-logo.svg',
    company: 'Forethought',
    title: 'Creating Reusable Steps to Simplify Workflow Building',
    excerpt:
      'Helping admins and engineers save time through step reuse.',
    date: '',
    url: 'https://www.figma.com/deck/2GGWNYFozYvjl94YNCsjFS/Forethought---Workflow-Builder---Reuse-Logic-Steps?node-id=0-1&t=X5jiXJWrgUzXRreM-1',
  },
  {
    image: '/screenshots/ft-widget/cover_live.png',
    icon: '/screenshots/ft-logo.svg',
    company: 'Forethought',
    title: 'Designing the AI to Human Chat Handoff',
    excerpt:
      '',
    date: '',
    url: 'https://www.figma.com/deck/b6g8xcEHwxGa37aMIOvCX2/Forethought---Widget---Live-Chat?node-id=0-1&t=NboPv9h40CztD7Wv-1',
  },
  {
    image: '/screenshots/ft-designsystem/cover.png',
    icon: '/screenshots/ft-logo.svg',
    company: 'Forethought',
    title: 'Built the first Design System to scale AI product delivery',
    excerpt:
      '',
    date: '',
    url: 'https://www.figma.com/deck/DEzpolTOT8gKP8HftkDlNg/Forethought---Design-System?node-id=0-1&t=oc3MBS21gSisOmlt-1',
  },
  {
    image: '/screenshots/furbo/cover.png',
    icon: '/screenshots/furbo-logo.svg',
    company: 'Furbo',
    title: 'Simplifying IoT Setup and Onboarding for Dog Camera',
    excerpt:
      'A redesigned setup experience that cut failure rates, reduced returns, and boosted customer satisfaction.',
    date: '',
    url: 'https://www.figma.com/deck/b6g8xcEHwxGa37aMIOvCX2/Forethought---Widget---Live-Chat?node-id=0-1&t=NboPv9h40CztD7Wv-1',
  },
]



export function CaseStudies() {
  return (
    <section id="work" aria-label="work" className="py-12 bg-white">
      <div className="max-w-[720px] px-5">
        {/* <div className="text-6xl font-title font-semibold text-gray-800 mb-12">
          Works
        </div> */}

        <div className="flex flex-col divide-y divide-gray-100">
          {posts.map((post, index) => (
            <a
              key={index}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block py-8 first:pt-0 last:pb-0"
            >
              {/* Company row */}
              <div className="flex items-center gap-x-2 ml-[1px] mb-4">
                <Image
                  alt={post.company}
                  src={post.icon}
                  width={20}
                  height={20}
                  className="w-[20px] h-[20px] rounded-[2px] object-cover"
                />
                <div className="text-base font-sans font-normal text-gray-900">
                  {post.company}
                </div>
              </div>

              {/* Main content */}
              <div className="flex gap-x-12">
                <div className="flex-1">
                  <h2 className="text-3xl font-display font-extrabold text-gray-900 mb-3">
                    {post.title}
                  </h2>

                  <p className="text-lg font-sans font-normal text-gray-500">
                    {post.excerpt}
                  </p>

                  <div className="text-base text-gray-500 mt-6">
                    {post.date}
                  </div>
                </div>

                <Image
                  alt={post.title}
                  src={post.image}
                  width={800}
                  height={800}
                  className="w-[190px] h-[128px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
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