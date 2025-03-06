'use client';

import { clsx } from 'clsx';
import { motion } from 'framer-motion';

export function BentoCard({
  dark = false,
  className = '',
  graphic,
  title,
  description,
  hoverGraphic,
}: {
  dark?: boolean;
  className?: string;
  title: React.ReactNode;
  description: React.ReactNode;
  graphic: React.ReactNode; // Default image/graphic
  hoverGraphic: React.ReactNode; // Image/graphic to show on hover
}) {
  return (
    <motion.div
      data-dark={dark ? 'true' : undefined}
      className={clsx(
        className,
        'group relative flex flex-col overflow-hidden rounded-[8px] ring-1 ring-inset ring-black/0',
      )}
    >
      {/* Graphic container */}
      <div className="relative h-[400px] shrink-0">
        {/* Default graphic */}
        <motion.div
          initial="visible"
          animate="visible"
          whileHover="hidden"
          variants={{
            visible: { opacity: 1, transition: { duration: 0.2 } },
            hidden: { opacity: 0, transition: { duration: 0.2 } },
          }}
          className="absolute inset-0 p-7"
        >
          {graphic}
        </motion.div>

        {/* Hover graphic */}
        <motion.div
          initial="hidden"
          animate="hidden"
          whileHover="visible"
          variants={{
            visible: { opacity: 1, transition: { duration: 0.2 } },
            hidden: { opacity: 0, transition: { duration: 0.2 } },
          }}
          className="absolute inset-0 p-7"
        >
          {/* <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#222222]/25 from-[calc(0*100%)] to-transparent to-[calc(1/5*100%)]"
          />

          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="text-lg font-mono font-medium text-gray-950 text-white">{title}</p>
          </div> */}

          {hoverGraphic}
        </motion.div>
      </div>

      {/* Wordings */}
      {/* <div className="relative p-10">
        <h3 className="text-xl font-bold">{eyebrow}</h3>
        <p className="mt-1 text-2xl font-medium text-gray-950 group-data-[dark]:text-white">
          {title}
        </p>
        <p className="mt-2 text-sm text-gray-600 group-data-[dark]:text-gray-400">
          {description}
        </p>
      </div> */}
    </motion.div>
  );
}
