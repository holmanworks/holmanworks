"use client";

import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { GradientBackground } from "@/components/gradient";
import { Navbar } from "@/components/navbar";
import Masonry from "react-masonry-css";
import { useState, useEffect, useRef } from "react";

const boardData = [
  {
    images: [
      "/screenshots/makesheets/preview.png",
      "/screenshots/makesheets/share.png",
      "/screenshots/makesheets/score.png",
      "/screenshots/makesheets/answer.png",
      "/screenshots/makesheets/practice.png",
      "/screenshots/makesheets/home.png",
      "/screenshots/makesheets/settings.png",
      "/screenshots/makesheets/summary.png",
      "/screenshots/makesheets/sign up.png",
      "/screenshots/makesheets/2.png",
      "/screenshots/makesheets/3.png",
      "/screenshots/makesheets/4.png",
      "/screenshots/makesheets/5.png",
      "/screenshots/makesheets/landing.png",
    ],
    name: "Makesheets - Personalize your child's learning",
  },
  {
    images: [
      "/screenshots/types/ai.png",
      "/screenshots/types/typing.png",
      "/screenshots/types/searching.png",
      "/screenshots/types/result.png",
      "/screenshots/types/details.png",
      "/screenshots/types/listening.png",
    ],
    name: "TypeS - Automotive Bulb AI Finder",
  },
  {
    images: [
      "/screenshots/ft-solve/builder.png",
      "/screenshots/ft-solve/translation.png",
      "/screenshots/ft-solve/action.png",
      "/screenshots/ft-solve/article.png",
      "/screenshots/ft-solve/barometer.png",
      "/screenshots/ft-solve/condition.png",
      "/screenshots/ft-solve/dashboard.png",
      "/screenshots/ft-solve/intent.png",
      "/screenshots/ft-solve/preview.png",
      "/screenshots/ft-solve/preview2.png",
    ],
    name: "Forethought - Workflow Builder",
  },
  {
    images: [
      "/screenshots/oursong/3d.png",
      "/screenshots/oursong/home.png",
      "/screenshots/oursong/community.png",
    ],
    name: "OurSong - Music NFT",
  },
  {
    images: [
      "/screenshots/penyo/signin.png",
      "/screenshots/penyo/gender.png",
      "/screenshots/penyo/name.png",
      "/screenshots/penyo/age.png",
      "/screenshots/penyo/trial.png",
      "/screenshots/penyo/confirmation.png",
      "/screenshots/penyo/home.png",
      "/screenshots/penyo/configuration.png",
      "/screenshots/penyo/setting.png",
      "/screenshots/penyo/landing.png",
      "/screenshots/penyo/usecase.png",
    ],
    name: "Penyo - AI companion for elderly",
  },
];

function Board({ name, images }: { name: string; images: string[] }) {
  const [columns, setColumns] = useState(2);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const adjustColumns = () => {
      if (!containerRef.current) return;

      // Adjust columns based on screen width
      if (window.innerWidth < 480) {
        setColumns(1); // < 480px → 1 column
      } else if (window.innerWidth >= 480 && window.innerWidth < 960) {
        setColumns(2); // 480px - 960px → 2 columns
      } else if (window.innerWidth >= 960 && window.innerWidth < 1440) {
        setColumns(3); // 960px - 1440px → 3 columns
      } else {
        setColumns(4); // > 1440px → 4 columns
      }
    };

    adjustColumns();

    window.addEventListener("resize", adjustColumns);
    return () => window.removeEventListener("resize", adjustColumns);
  }, []);

  const breakpointColumns = {
    default: columns,
    1440: 3,
    960: 2,
    480: 1,
  };

  return (
    <div className="relative" ref={containerRef}>
      <div className="flex flex-col items-center sm:pb-24 pb-12">
        <p className="font-mono text-center max-w-[700px] xl:text-6xl lg:text-6xl md:text-5xl text-3xl font-medium sm:tracking-tighter text-white md:py-24 py-12">
          {name}
        </p>

        <Masonry
          breakpointCols={breakpointColumns}
          className="masonry-grid"
          columnClassName="masonry-grid-column"
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${name} - ${index + 1}`}
              className="w-full h-auto"
            />
          ))}
        </Masonry>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <main className="overflow-hidden bg-black">
      <GradientBackground />

      <Container className="bg-white sm:pb-6 pb-6">
        <Navbar />
      </Container>

      <div className="xl:p-20 sm:p-10 p-6 space-y-8">
        {boardData.map((item, index) => (
          <Board key={index} name={item.name} images={item.images} />
        ))}
      </div>

      <Footer />
    </main>
  );
}
