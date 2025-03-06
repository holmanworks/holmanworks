"use client";

import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { GradientBackground } from "@/components/gradient";
import { Navbar } from "@/components/navbar";


export default function About() {
  return (
    <main className="overflow-hidden bg-black">
      <GradientBackground />

      <Container className="bg-white sm:pb-6 pb-6">
        <Navbar />

        <div className="mx-auto flex flex-col items-center max-w-[800px] gap-y-6 py-20">
          <div className="tracking-widest font-bold md:text-base text-sm text-center text-gray-800 font-mono">
            ABOUT
          </div>

          <h1 className="font-display font-semibold text-gray-800 text-center lg:text-8xl md:text-7xl sm:text-7xl text-4xl">
            COMING <br /> SOON
          </h1>
        </div>

      </Container>

      <Footer />
    </main>
  );
}
