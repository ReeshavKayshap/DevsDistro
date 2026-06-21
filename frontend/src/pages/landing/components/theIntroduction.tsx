import { ArrowRight, Code2 } from "lucide-react";
import githubLockupBlackUrl from "@/assets/brand/github-lockup-black.svg?url";
import solanaLogoUrl from "@/assets/brand/solana-logo.svg?url";

import { landingPrimaryButtonClassName } from "./landingButtonStyles";
import Dashboard from "./Dashboard";

interface PrologueProps {
  handleAuthNavigate: () => void;
}

export default function Prologue({ handleAuthNavigate }: PrologueProps) {
  return (
    <section className=" pt-44 " id="the-introduction">
      <div className="max-w-[82rem] mx-auto w-full h-full px-3 relative ">
        <div className="flex justify-between">
          <span
            className="text-5xl md:text-7xl lg:text-[55px]
            font-sans font-semibold flex flex-col justify-end gap-2.5"
          >
            <h1>Marketplace To </h1>
            <h1>Buy & Sell Repositories</h1>
          </span>

          <div
            className="relative z-30 mt-12 flex flex-col gap-4  items-end
           pointer-events-auto"
          >
            <p className="text-end">
              Open marketplace where creators sell repositories <br /> priced in
              USD, settled on Solana, delivered instantly.
            </p>
            <button
              onClick={handleAuthNavigate}
              className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 dark:bg-white
               border-[3px] border-neutral-800 text-white dark:text-black font-bold px-4 py-1.5 text-[12px]"
            >
              Get Started
              <Code2 size={18} />
            </button>
            {/* <a
            href="#the-mechanics"
            className="inline-flex items-center gap-2 border-[3px] border-neutral-800/35 bg-neutral-200/90 px-8 py-4 font-space font-bold uppercase tracking-widest text-neutral-800 shadow-[inset_0_0_0_2px_rgba(255,255,255,0.9),inset_0_0_22px_rgba(255,255,255,0.18),0_10px_22px_-18px_rgba(38,38,38,0.34)] transition-all duration-200 hover:bg-neutral-800 hover:text-neutral-200 hover:shadow-[inset_0_0_0_2px_rgba(255,255,255,0.08),0_10px_22px_-18px_rgba(38,38,38,0.44)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/30 dark:border-white/35 dark:bg-[#151515]/95 dark:text-white dark:shadow-[inset_0_0_0_2px_rgba(255,255,255,0.14),inset_0_0_22px_rgba(255,255,255,0.08),0_10px_24px_-18px_rgba(38,38,38,0.72)] dark:hover:bg-white dark:hover:text-[#151515] dark:hover:shadow-[inset_0_0_0_2px_rgba(0,0,0,0.06),0_10px_24px_-18px_rgba(38,38,38,0.72)]"
          >
            View Flow <ArrowRight size={18} />
          </a> */}
          </div>
        </div>

        {/* <div className="mt-20 md:mt-24 flex flex-col items-center justify-center w-full pointer-events-auto">
          <div className="text-center font-space text-[15px] font-medium text-neutral-900 dark:text-white mb-6">
            DevsDistro is powered by
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub repositories"
              className="flex items-center gap-3 cursor-pointer"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[8px] border-[3px] border-neutral-300 bg-white p-[2px] shadow-[0_4px_12px_rgba(38,38,38,0.06)] dark:border-neutral-700 dark:bg-[#050505] dark:shadow-[0_4px_12px_rgba(38,38,38,0.5)]">
                <div className="flex h-full w-full items-center justify-center rounded-[4px] bg-neutral-200 dark:bg-neutral-700">
                  <div className="h-[25px] w-[25.5px] overflow-hidden relative">
                    <img
                      src={githubLockupBlackUrl}
                      alt=""
                      className="absolute top-0 left-0 h-[25px] w-auto max-w-none dark:invert dark:opacity-[0.85]"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start font-space leading-tight">
                <span className="text-[15px] font-semibold text-neutral-900 dark:text-neutral-100">
                  GitHub
                </span>
                <span className="mt-0.5 text-[13px] font-medium text-neutral-400 dark:text-neutral-500">
                  Repositories
                </span>
              </div>
            </a>

            <a
              href="https://solana.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Solana settlements"
              className="flex items-center gap-3 cursor-pointer"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[8px] border-[3px] border-neutral-300 bg-white p-[2px] shadow-[0_4px_12px_rgba(38,38,38,0.06)] dark:border-neutral-700 dark:bg-[#050505] dark:shadow-[0_4px_12px_rgba(38,38,38,0.5)]">
                <div className="flex h-full w-full items-center justify-center rounded-[4px] bg-neutral-200 dark:bg-neutral-700">
                  <div
                    className="h-[20px] w-[23px] bg-neutral-800 dark:bg-neutral-200"
                    style={{
                      maskImage: `url(${solanaLogoUrl})`,
                      maskSize: "auto 100%",
                      maskPosition: "left center",
                      maskRepeat: "no-repeat",
                      WebkitMaskImage: `url(${solanaLogoUrl})`,
                      WebkitMaskSize: "auto 100%",
                      WebkitMaskPosition: "left center",
                      WebkitMaskRepeat: "no-repeat",
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col items-start font-space leading-tight">
                <span className="text-[15px] font-semibold text-neutral-900 dark:text-neutral-100">
                  Solana
                </span>
                <span className="mt-0.5 text-[13px] font-medium text-neutral-400 dark:text-neutral-500">
                  Settlement
                </span>
              </div>
            </a>
          </div>
        </div> */}
      </div>

      <Dashboard />
    </section>
  );
}
