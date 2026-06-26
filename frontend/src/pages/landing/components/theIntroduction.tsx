import { Code2, Github } from "lucide-react";
import { motion } from "framer-motion";
import Dashboard from "./Dashboard";

interface PrologueProps {
  handleAuthNavigate: () => void;
}

export default function Prologue({ handleAuthNavigate }: PrologueProps) {
  return (
    <motion.section className=" pt-52 " id="the-introduction">
      <div className="max-w-[82rem] mx-auto w-full h-full px-3 relative pb-5">
        <div className="flex justify-between">
          <span className="text-5xl md:text-7xl lg:text-[55px] font-sans font-semibold flex flex-col justify-end gap-2.5">
            <motion.span
              initial={{ opacity: 0, filter: "blur(10px)", y: 5 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.7 }}
            >
              Marketplace To
            </motion.span>
            <motion.span
              initial={{ opacity: 0, filter: "blur(8px)", y: 2 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut", delay: 0.9 }}
            >
              Buy & Sell Repositories
            </motion.span>
          </span>

          <div className="relative z-30 flex flex-col gap-4 items-end justify-end pointer-events-auto">
            <motion.p
              initial={{ opacity: 0, filter: "blur(10px)", y: 5 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.7 }}
              className="text-end"
            >
              Open marketplace where creators sell repositories <br /> priced in
              USD, settled on Solana, delivered instantly.
            </motion.p>
            <motion.span
              initial={{ opacity: 0, filter: "blur(8px)", y: 2 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut", delay: 0.9 }}
              className="flex gap-8"
            >
              <button
                onClick={handleAuthNavigate}
                className="flex items-center gap-2 rounded-xl dark:bg-neutral-900 bg-white hover:bg-neutral-200 hover:dark:bg-neutral-800/80 transition-all duration-200 ease-out
     border dark:border-neutral-800 border-neutral-300 text-black dark:text-white font-semibold px-3 py-2 text-[13px]"
              >
                Open Source
                <Github size={18} />
              </button>
              <button
                onClick={handleAuthNavigate}
                className="flex items-center gap-2 rounded-xl bg-neutral-900 dark:bg-white hover:dark:bg-neutral-200 hover:bg-neutral-800/80 transition-all duration-200 ease-out
     border border-neutral-800 dark:border-neutral-800 text-white dark:text-black font-semibold px-3 py-2 text-[13px]"
              >
                Get Started
                <Code2 size={18} />
              </button>
            </motion.span>
          </div>
        </div>
      </div>

      <Dashboard />
    </motion.section>
  );
}
