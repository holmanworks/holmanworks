'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { Bars2Icon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import { Link } from './link'
import { PlusGrid, PlusGridItem, PlusGridRow } from './plus-grid'
import { Icon } from './logo'


const links = [
  { href: '/portfolio', label: 'Projects' },
  { href: '/case', label: 'Case Studies' },
  { href: '/about', label: 'About' },
]

function DesktopNav() {
  return (
    <nav className="relative hidden lg:flex">
      {links.map(({ href, label }) => (
        <PlusGridItem key={href} className="relative flex">
          <Link
            href={href}
            className="flex items-center px-4 py-3 font-mono text-base font-medium text-gray-950/80 data-[hover]:text-gray-950 bg-blend-multiply data-[hover]:bg-gray-200/50"
          >
            {label}
          </Link>
        </PlusGridItem>
      ))}
    </nav>
  )
}

function MobileNavButton() {
  return (
    <DisclosureButton
      className="flex size-[60px] items-center justify-center self-center data-[hover]:bg-gray-200/50 lg:hidden"
      aria-label="Open main menu"
    >
      <Bars2Icon className="size-6" />
    </DisclosureButton>
  )
}

function MobileNav() {
  return (
    <DisclosurePanel className="lg:hidden">
      <div className="flex flex-col gap-6 py-4">
        {links.map(({ href, label }, linkIndex) => (
          <motion.div
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{
              duration: 0.15,
              ease: 'easeInOut',
              rotateX: { duration: 0.3, delay: linkIndex * 0.1 },
            }}
            key={href}
          >
            <Link href={href} className="text-base font-medium text-gray-950">
              {label}
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="absolute left-1/2 w-screen -translate-x-1/2">
        <div className="absolute inset-x-0 top-0 border-t border-black/5" />
        <div className="absolute inset-x-0 top-2 border-t border-black/5" />
      </div>
    </DisclosurePanel>
  )
}

function SocialIconLinkedIn(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M14.82 0H1.18A1.169 1.169 0 000 1.154v13.694A1.168 1.168 0 001.18 16h13.64A1.17 1.17 0 0016 14.845V1.15A1.171 1.171 0 0014.82 0zM4.744 13.64H2.369V5.996h2.375v7.644zm-1.18-8.684a1.377 1.377 0 11.52-.106 1.377 1.377 0 01-.527.103l.007.003zm10.075 8.683h-2.375V9.921c0-.885-.015-2.025-1.234-2.025-1.218 0-1.425.966-1.425 1.968v3.775H6.233V5.997H8.51v1.05h.032c.317-.601 1.09-1.235 2.246-1.235 2.405-.005 2.851 1.578 2.851 3.63v4.197z" />
    </svg>
  )
}

function SocialLinks() {
  return (
    <>
      <Link
        href="https://www.linkedin.com/in/holmanworks/"
        target="_blank"
        aria-label="Visit us on LinkedIn"
        className="text-gray-950/80 data-[hover]:text-[#0077b5] p-5 items-center flex bg-blend-multiply data-[hover]:bg-gray-200/50"
      >
        <SocialIconLinkedIn className="size-5" />
      </Link>
    </>
  )
}

export function Navbar({ banner }: { banner?: React.ReactNode }) {
  return (
    <Disclosure as="header" className="sm:pt-16 pt-12">
      <PlusGrid>

        <PlusGridRow className="relative flex justify-between">

          {/* Nav Left */}
          <div className="relative flex gap-6">
            <PlusGridItem className="relative flex">
              <Link 
                href="/" 
                title="Home"
                className="flex items-center px-4 py-3 font-mono text-base font-medium text-gray-950/80 data-[hover]:text-gray-950 bg-blend-multiply data-[hover]:bg-gray-200/50"
              >Hi, I am...

                {/* <div className="size-16 relative bg-no-repeat bg-center bg-cover" 
                    style={{
                      backgroundImage: `url('/holmanworks-icon/avatar2.png')`
                    }}
                >
                  <div 
                    className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out"
                    style={{
                      backgroundImage: `url('/holmanworks-icon/avatar.png')`
                    }}
                  ></div>
                </div> */}

              </Link>
            </PlusGridItem>
          </div>

          {/* Nav Center */}
          <DesktopNav />

          {/* Nav right */}
          <div className='flex flex-1 justify-end'>
            <PlusGridItem className="relative flex">
              <SocialLinks />
            </PlusGridItem>
          </div>

          <MobileNavButton />
        </PlusGridRow>

      </PlusGrid>
      <MobileNav />
    </Disclosure>
  )
}
