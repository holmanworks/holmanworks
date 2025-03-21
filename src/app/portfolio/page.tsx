"use client";

import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { GradientBackground } from "@/components/gradient";
import { Button } from "@/components/button";
import { Navbar } from "@/components/navbar";
import Masonry from "react-masonry-css";
import { useState, useEffect } from "react";

const categories = ["All", "Web app", "Mobile app", "Design system", "Print", "Exhibition"];

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
      "/screenshots/makesheets/1.png",
      "/screenshots/makesheets/2.png",
      "/screenshots/makesheets/3.png",
      "/screenshots/makesheets/4.png",
      "/screenshots/makesheets/5.png",
    ],
    name: "Makesheets",
    description: "Personalize your child's learning",
    category: "Web app",
    column: 4,
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
    description: "AI-powered automotive bulb finder",
    category: "Web app",
    column: 7,
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
      "/screenshots/oursong/create3.png",
      "/screenshots/oursong/create4.png",
      "/screenshots/oursong/create5.png",
      "/screenshots/oursong/complete.png",
    ],
    name: "OurSong",
    description: "Blockchain-based social NFT platform",
    category: "Mobile app",
    column: 7,
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
      "/screenshots/ft-widget/configuration.png",
    ],
    name: "Forethought Solve",
    description: "Build automated workflows for customer service",
    category: "Web app",
    column: 4,
  },
  {
    images: [
      "/screenshots/ft-discover/dashboard.png",
      "/screenshots/ft-discover/impact.png",
      "/screenshots/ft-discover/details.png",
      "/screenshots/ft-discover/article.png",
      "/screenshots/ft-discover/table.png",
      "/screenshots/ft-discover/filter1.png",
      "/screenshots/ft-discover/filter2.png",
    ],
    name: "Forethought Discover",
    description: "AI-powered customer support insights",
    category: "Web app",
    column: 4,
  },
  {
    images: [
      "/screenshots/ft-playground/signup.png",
      "/screenshots/ft-playground/sample.png",
      "/screenshots/ft-playground/playground.png",
    ],
    name: "Forethought SupportGPT",
    description: "A sandbox lets companies test GenAI bots with their data",
    category: "Web app",
    column: 4,
  },
  {
    images: [
      "/screenshots/ft-assist/click.png",
      "/screenshots/ft-assist/writing.png",
      "/screenshots/ft-assist/preview.png",
      "/screenshots/ft-assist/dropdown.png",
      "/screenshots/ft-assist/extension.png",
      "/screenshots/ft-assist/modal.png",
    ],
    name: "Forethought Assist",
    description: "Provides agents with AI-guided responses",
    category: "Web app",
    column: 4,
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
    category: "Web app",
    column: 7,
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
    category: "Design system",
    column: 4,
  },
  {
    images: [
      "/screenshots/penyo/signin.png",
      "/screenshots/penyo/gender.png",
      "/screenshots/penyo/name.png",
      "/screenshots/penyo/age.png",
      "/screenshots/penyo/trial.png",
      "/screenshots/penyo/home.png",
      "/screenshots/penyo/configuration.png",
      "/screenshots/penyo/setting.png",
      "/screenshots/penyo/logo.png",
      "/screenshots/penyo/colors.png",
      "/screenshots/penyo/component.png",
      "/screenshots/penyo/landing.png",
    ],
    name: "Penyo",
    description: "AI-powered companion for elderly",
    category: "Web app",
    column: 4,
  },
];

function Board({
  name,
  description,
  images,
  column,
}: {
  name: string;
  description: string;
  images: string[];
  column: number;
}) {
  const [columns, setColumns] = useState(column);

  useEffect(() => {
    const adjustColumns = () => {
      let newColumns = column;

      if (window.innerWidth < 480) {
        newColumns = column === 7 ? 2 : 1;
      } else if (window.innerWidth >= 480 && window.innerWidth < 768) {
        newColumns = column === 7 ? 3 : 2;
      } else if (window.innerWidth >= 768 && window.innerWidth < 1280) {
        newColumns = column === 7 ? 5 : 3;
      } else if (window.innerWidth >= 1280 && window.innerWidth < 1440) {
        newColumns = column === 7 ? 6 : 4;
      } else {
        newColumns = column;
      }

      // ✅ Prevent empty columns when images are fewer than columns
      newColumns = Math.min(newColumns, images.length);

      setColumns(newColumns);
    };

    adjustColumns();
    window.addEventListener("resize", adjustColumns);
    return () => window.removeEventListener("resize", adjustColumns);
  }, [column]);

  return (
    <div className="relative">
      <div className="flex flex-col items-center sm:pb-24 pb-12">
        <div className="md:py-20 py-10 max-w-[700px] gap-y-1 flex flex-col">
          <p className="font-sans text-center lg:text-6xl md:text-5xl text-3xl font-bold sm:tracking-tighter text-white">
            {name}
          </p>
          <p className="font-mono text-center md:text-2xl sm:text-lg text-base font-regular sm:tracking-tighter text-white">
            {description}
          </p>
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
      <GradientBackground />

      <Container className="bg-white sm:pb-6 pb-6">
        <Navbar />
      </Container>

      {/* Category Filter Buttons */}
      <div className="flex justify-center gap-3 pt-8 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            className={`rounded-full text-base font-mono font-semibold transition h-10 px-4 ${
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
        {filteredBoards.map((item, index) => (
          <Board
            key={index}
            name={item.name}
            description={item.description}
            images={item.images}
            column={item.column}
          />
        ))}
      </div>

      <Footer />
    </main>
  );
}