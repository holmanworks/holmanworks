"use client";

import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { GradientBackground } from "@/components/gradient";
import { Navbar } from "@/components/navbar";
import { CaseStudiesGrid } from '@/components/casestudies'


export default function Case() {
  return (
    <main className="overflow-hidden bg-black">
      <GradientBackground />

      <Container className="bg-white sm:pb-6 pb-6">
        <Navbar />

        <div className="mx-auto flex flex-col items-center max-w-[800px] gap-y-6 py-24">
          <div className="sm:text-9xl text-7xl font-bold text-gray-800 flex items-center gap-x-4 hover:gap-x-6 transition-all duration-300 ease-in-out">
            Case Studies
          </div>

          {/* <h1 className="font-display font-semibold text-gray-800 text-center lg:text-8xl md:text-7xl sm:text-7xl text-4xl">
            COMING <br /> SOON
          </h1> */}
        </div>

        <CaseStudiesGrid />

      </Container>

      <Footer />
    </main>
  );
}
