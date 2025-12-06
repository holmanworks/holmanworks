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

        <div className="mx-auto flex flex-col py-10">
          <div className="text-xl font-bold font-mono text-gray-800 flex gap-x-4 hover:gap-x-6 transition-all duration-300 ease-in-out">
            Case Studies
          </div>
        </div>

        <CaseStudiesGrid />

      </Container>

      <Footer />
    </main>
  );
}
