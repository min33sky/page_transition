import Head from 'next/head';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      initial={{ y: '100%', height: '100vh' }}
      animate={{ y: '0%', height: '100vh' }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
      className="text-gray-900 absolute top-0 left-0 w-full h-full bg-orange-100 lg:px-48 px-16 "
    >
      <Head>
        <title>Page Transition</title>
      </Head>

      <main>
        <div className="my-72 p-1 overflow-hidden">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-6xl text-center lg:text-right lg:text-9xl"
          >
            Happy Pickle
          </motion.h1>
        </div>
        <div className="flex justify-between">
          <div>
            <h2>Design</h2>
            <h2>Company</h2>
            <h2>2022</h2>
          </div>
          <div>
            <h3>This pickle gonna make you smile.</h3>
            <h3>Scottish designs to make you happy.</h3>
            <h3>Click contac t for cool transition.</h3>
          </div>
        </div>
      </main>
    </motion.div>
  );
}
