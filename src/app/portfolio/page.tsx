"use client";

import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { GradientBackground } from "@/components/gradient";
import { Button } from "@/components/button";
import { Navbar } from "@/components/navbar";
import Masonry from "react-masonry-css";
import { useState, useEffect } from "react";

const categories = ["All", "B2B", "B2C", "Design System", "Marketing", "Exhibition", "Merchandise"];

const boardData = [
  {
    images: [
      "/screenshots/ft-assist/click.png",
      "/screenshots/ft-assist/writing.png",
      "/screenshots/ft-assist/preview.png",
      "/screenshots/ft-assist/modal.png",
    ],
    name: "Forethought Assist",
    description: "Provides agents with AI-guided responses",
    category: "B2B",
    column: 2,
  },  
  {
    images: [
      "/screenshots/ft-solve/1.png",
      "/screenshots/ft-solve/builder.png",
      "/screenshots/ft-solve/translation.png",
      "/screenshots/ft-solve/action.png",
      "/screenshots/ft-solve/article.png",
      "/screenshots/ft-solve/barometer.png",
      "/screenshots/ft-solve/condition.png",
      "/screenshots/ft-solve/intent.png",
      "/screenshots/ft-solve/preview.png",
      "/screenshots/ft-solve/prediction.png",
      "/screenshots/ft-solve/dashboard.png",
      "/screenshots/ft-widget/configuration.png",
      "/screenshots/ft-solve/2.png",
      "/screenshots/ft-solve/preview2.png",
      "/screenshots/ft-solve/2-2.png",
      "/screenshots/ft-solve/2-3.png",

    ],
    name: "Forethought Solve",
    description: "Build automated workflows for customer service",
    category: "B2B",
    column: 2,
  },
  {
    images: [
      "/screenshots/ft-discover/dashboard.png",
      "/screenshots/ft-discover/details.png",
      "/screenshots/ft-discover/impact.png",
      "/screenshots/ft-discover/article.png",
      "/screenshots/ft-discover/filter1.png",
      "/screenshots/ft-discover/filter2.png",
    ],
    name: "Forethought Discover",
    description: "AI-powered customer support insights",
    category: "B2B",
    column: 2,
  },
  {
    images: [
      "/screenshots/ft-playground/signup.png",
      "/screenshots/ft-playground/sample.png",
      "/screenshots/ft-playground/playground.png",
    ],
    name: "Forethought SupportGPT",
    description: "A sandbox lets companies test GenAI bots with their data",
    category: "B2B",
    column: 2,
  },
  {
    images: [
      "/screenshots/ft-widget/widget1.png",
      "/screenshots/ft-widget/widget2.png",
      "/screenshots/ft-widget/widget3.png",
      "/screenshots/ft-widget/widget4.png",
      "/screenshots/ft-widget/widget5.png",
      "/screenshots/ft-widget/widget6.png",
    ],
    name: "Forethought Widget",
    description: "AI-powered assistant platforms for self-service support",
    category: "B2C",
    column: 4,
  },
  {
    images: [
      "/screenshots/ft-designsystem/colors.png",
      "/screenshots/ft-designsystem/grid.png",
      "/screenshots/ft-designsystem/typography.png",
      "/screenshots/ft-designsystem/elevations.png",
      "/screenshots/ft-designsystem/button.png",
      "/screenshots/ft-designsystem/input.png",
      "/screenshots/ft-designsystem/filter.png",
      "/screenshots/ft-designsystem/menu.png",
      "/screenshots/ft-designsystem/tabs.png",
      "/screenshots/ft-designsystem/sidebar.png",
      "/screenshots/ft-designsystem/toast.png",
      "/screenshots/ft-designsystem/others.png",
    ],
    name: "Forethought Design System",
    description: "Consistency, efficiency, collaboration and scalability",
    category: "Design System",
    column: 2,
  },
  {
    images: [
      "/screenshots/oursong/home.png",
      "/screenshots/oursong/community.png",
      "/screenshots/oursong/chatroom.png",
      "/screenshots/oursong/wallet.png",
      "/screenshots/oursong/gift.png",
      "/screenshots/oursong/cardfront.png",
      "/screenshots/oursong/cardback.png",
      "/screenshots/oursong/market.png",
      "/screenshots/oursong/tasks.png",
      "/screenshots/oursong/voucherinfo.png",
      "/screenshots/oursong/voucher.png",
      "/screenshots/oursong/create1.png",
      "/screenshots/oursong/create2.png",
      "/screenshots/oursong/create5.png",
      "/screenshots/oursong/complete.png",
    ],
    name: "OurSong",
    description: "Blockchain-based social NFT platform",
    category: "B2C",
    column: 6,
  },
  {
    images: [
      "/screenshots/makesheets/logo.png",
      "/screenshots/makesheets/home.png",
      "/screenshots/makesheets/settings.png",
      "/screenshots/makesheets/summary.png",
      "/screenshots/makesheets/preview.png",
      "/screenshots/makesheets/share.png",
      "/screenshots/makesheets/practice.png",
      "/screenshots/makesheets/score.png",
    ],
    name: "Chimoya",
    description: "Personalize your child's learning",
    category: "B2C",
    column: 2,
    url: "https://chimoya.org", // ← put your real link here
  },
  {
    images: [
      "/screenshots/furbo/01.png",
      "/screenshots/furbo/02.png",
      "/screenshots/furbo/03.png",
      "/screenshots/furbo/a2.png",
      "/screenshots/furbo/04.gif",
      "/screenshots/furbo/a1.png",
      "/screenshots/furbo/05.png",
      "/screenshots/furbo/a3.png",
      "/screenshots/furbo/07.gif",
      "/screenshots/furbo/09.png",
      "/screenshots/furbo/a4.png",
      "/screenshots/furbo/08.png",
    ],
    name: "Furbo",
    description: "Smart pet camera and treat system",
    category: "B2C",
    column: 6,
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
    name: "TypeS",
    description: "AI-powered automotive light bulb finder",
    category: "B2C",
    column: 6,
  },
  {
    images: [
      "/screenshots/penyo/logo.png",
      "/screenshots/penyo/signin.png",
      "/screenshots/penyo/gender.png",
      "/screenshots/penyo/name.png",
      "/screenshots/penyo/age.png",
      "/screenshots/penyo/trial.png",
      "/screenshots/penyo/home.png",
      "/screenshots/penyo/configuration.png",
      "/screenshots/penyo/setting.png",
      "/screenshots/penyo/component.png",
    ],
    name: "Penyo",
    description: "AI-powered companion for elderly",
    category: "B2C",
    column: 2,
  },
  {
    images: [
      "/screenshots/marketing/galeai_banner.png",
      "/screenshots/marketing/invaniti.png",
      "/screenshots/marketing/furbo_banner.png",
    ],
    name: "Marketing",
    description: "",
    category: "Marketing",
    column: 4,
  },
  {
    images: [
      "/screenshots/sony/ps3 poster.jpg",
      "/screenshots/sony/ps3 poster sg.jpg",
      "/screenshots/sony/resistance pop.jpg",
      "/screenshots/sony/ps3 sleeve.jpg",
      "/screenshots/sony/gr.jpg",
      "/screenshots/sony/saru concept.jpg",
      "/screenshots/sony/saru 3d.jpg",
      "/screenshots/sony/saru merch.jpg",
      "/screenshots/sony/prepare card.jpg",
    ],
    name: "PlayStation Marketing",
    description: "Marketing campaigns & packaging",
    category: "Marketing",
    column: 4,
  },
  {
    images: [
      "/screenshots/sony/merch/ps3 jacket.jpg",
      "/screenshots/sony/merch/ps3 shirt.jpg",
      "/screenshots/sony/merch/ps3 bag.jpg",
      "/screenshots/sony/merch/psp cushion design.jpg",
      "/screenshots/sony/merch/psp cushion.jpg",
      "/screenshots/sony/merch/saru bag.jpg",
      "/screenshots/sony/merch/saru clip.jpg",
      "/screenshots/sony/merch/we premium.jpg",
      "/screenshots/sony/merch/calendar.jpg",
    ],
    name: "PlayStation Merchandise",
    description: "Promotional products",
    category: "Merchandise",
    column: 4,
  },
];


function Board({
  name,
  description,
  images,
  column, // desktop: 2 / 4 / 6
  url,
}: {
  name: string;
  description: string;
  images: string[];
  column: number;
  url?: string;
}) {
  const [columns, setColumns] = useState(column);

  useEffect(() => {
    const adjustColumns = () => {
      let newColumns = column;
      const width = window.innerWidth;

      // Large screens ≥ 1280px
      if (width >= 1280) {
        newColumns = column; // 2, 4, or 6 (as defined in boardData)
      }
      // Medium screens 768px–1279px
      else if (width >= 768) {
        newColumns = column === 2 ? 2 : 3;
      }
      // Small screens < 768px
      else {
        newColumns = column === 2 ? 1 : 2;
      }

      // Avoid empty columns if fewer images
      newColumns = Math.min(newColumns, images.length);

      setColumns(newColumns);
    };

    adjustColumns();
    window.addEventListener("resize", adjustColumns);
    return () => window.removeEventListener("resize", adjustColumns);
  }, [column, images.length]);


  
  return (
    <div className="relative">
      <div className="flex flex-col items-center sm:pb-24 pb-12">
        <div className="md:py-20 py-10 gap-y-1 flex flex-col">
          <p className="font-title text-center md:text-xl text-base font-bold text-white">
            {name}
          </p>

          <p className="font-sans text-center md:text-3xl sm:text-2xl text-xl font-medium text-white">
            {description}
          </p>

          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-title mt-0.5 text-center text-white/75 underline underline-offset-4 hover:text-white hover:no-underline transition block"
            >
              Try it now
            </a>
          )}
        </div>

        <Masonry
          breakpointCols={columns}
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
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter board data based on selected category
  const filteredBoards =
    selectedCategory === "All"
      ? boardData
      : boardData.filter((item) => item.category === selectedCategory);

  return (
    <main className="overflow-hidden bg-black">
      
      <Container className="bg-white sm:pb-6 pb-6">
        <Navbar />
      </Container>

      {/* Category Filter Buttons */}
      <div className="flex justify-center gap-3 pt-8 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            className={`rounded-full text-base font-sans font-semibold transition h-10 px-4 ${
              selectedCategory === category
                ? "bg-white text-black"
                : "ring-1 ring-inset ring-white/40 text-white/80 hover:bg-white/10"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Display Boards Based on Selected Category */}
      <div className="xl:p-20 sm:p-10 p-6">
        {filteredBoards.map((item) => (
          <Board
            key={item.name}
            name={item.name}
            description={item.description}
            images={item.images}
            column={item.column}
            url={item.url} 
          />
        ))}
      </div>

      <Footer />
    </main>
  );
}