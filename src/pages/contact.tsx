import React from 'react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

export const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

export const item: Variants = {
  hidden: { y: '100%' },
  show: { y: '0%', transition: { duration: 0.5 } },
};

export default function contact() {
  return (
    <motion.main
      initial={{ y: '100%', height: '100vh' }}
      animate={{ y: '0%', height: '100vh' }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
      className="text-gray-900 absolute top-0 left-0 w-full h-full bg-red-400 lg:px-48 px-16"
    >
      <div className="my-72 p-1">
        <h1 className="text-6xl text-center lg:text-right lg:text-9xl">
          Let&apos;s Talk
        </h1>
      </div>

      <div className="flex gap-40">
        <div className="lg:text-2xl text-base">
          <h4>Find me:</h4>
        </div>
        <div className="font-latoBold  lg:text-6xl text-2xl underline">
          <motion.ul variants={container} initial="hidden" animate="show">
            <div className="overflow-hidden">
              <motion.li variants={item} className="pb-2">
                <Link href="https://twitter.com">Twitter </Link>
              </motion.li>
            </div>
            <div className="overflow-hidden">
              <motion.li variants={item} className="pb-2">
                <Link href="https://instagram.com">Instagram</Link>
              </motion.li>
            </div>
            <div className="overflow-hidden">
              <motion.li variants={item} className="pb-2">
                <Link href="https://dribbble.com"> Dribbble</Link>
              </motion.li>
            </div>
            <div className="overflow-hidden">
              <motion.li variants={item} className="pb-2">
                <Link href="https://gmail.com"> Email</Link>
              </motion.li>
            </div>
          </motion.ul>
        </div>
      </div>
    </motion.main>
  );
}
