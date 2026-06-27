import { useRef } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Archive,
  Ellipsis,
  Key,
  Loader2,
  GripHorizontal,
} from "lucide-react";
import LogoIcon from "@/assets/icons/LogoIcon";
import img1 from "@/assets/img1.png";

const GithubOAuth = () => (
  <>
    <div
      className="border border-neutral-200 dark:border-neutral-800/60 border-b-0 rounded-2xl rounded-b-none shadow-2xl
     p-1 mask-bottom max-w-2xl mt-4"
    >
      <div
        className="dark:bg-[#121212] bg-neutral-50 border border-b-0 border-neutral-200 dark:border-neutral-800/80 rounded-b-none 
      rounded-xl px-5 py-3 mask-bottom flex flex-col  "
      >
        <div className="flex items-center justify-between">
          <span className="text-neutral-600 dark:text-neutral-400 font-geist text-xs font-medium tracking-wider">
            DevsDistro
          </span>
          <div className="size-6 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 flex items-center justify-center">
            <Ellipsis className="size-3 text-neutral-400" />
          </div>
        </div>

        <div className="flex items-center gap-2.5 pt-4">
          <Key className="size-4 text-neutral-500" />
          <h2 className="text-neutral-600 dark:text-neutral-300 text-sm font-semibold">
            GitHub OAuth Connecting...
          </h2>
        </div>

        <div className="py-6 flex items-center w-full ">
          <div
            className="w-14 h-14 rounded-[14px] border border-neutral-300/80 dark:border-neutral-700/80 bg-neutral-50 dark:bg-[#111111] flex items-center
           justify-center shrink-0 z-10 shadow-md"
          >
            <Github className="size-5 " />
          </div>

          <div className="flex-1 relative h-[2px] flex items-center">
            <div className="absolute w-full h-[2px] bg-neutral-200 dark:bg-neutral-800/80" />

            <div className="absolute w-full h-full overflow-hidden">
              <motion.div
                className="absolute h-[1.9px] w-20 bg-gradient-to-r from-transparent via-red-500 to-transparent blur-[1px]"
                initial={{ left: "-40%" }}
                animate={{ left: "120%" }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "linear",
                  repeatDelay: 3, // wait for pipe 2 to finish (1.5s) + gap (1.5s)
                  delay: 0,
                }}
              />
            </div>
          </div>

          <div className="px-4 py-2 rounded-lg border border-neutral-300/80 dark:border-neutral-700/80 bg-neutral-50 dark:bg-[#111111] flex items-center justify-center shrink-0 z-10 shadow-md">
            <span className="text-neutral-600 dark:text-neutral-300 text-xs font-medium">
              Authentication
            </span>
          </div>

          <div className="flex-1 relative h-[2px] flex items-center">
            <div className="absolute w-full h-[2px] bg-neutral-200 dark:bg-neutral-800/80" />

            <div className="absolute w-full h-full overflow-hidden">
              <motion.div
                className="absolute h-[1.9px] w-20 bg-gradient-to-r from-transparent via-green-500 to-transparent blur-[1px]"
                initial={{ left: "-40%" }}
                animate={{ left: "120%" }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "linear",
                  repeatDelay: 3, // wait for pipe 1 to finish (1.5s) + gap (1.5s)
                  delay: 1.5, // start exactly when pipe 1 ends
                }}
              />
            </div>
          </div>

          <div
            className="w-14 h-14 rounded-[14px] border border-neutral-300/80 dark:border-neutral-700/80 bg-neutral-50 dark:bg-[#111111] flex items-center
           justify-center shrink-0 z-10 shadow-md"
          >
            <LogoIcon className="size-5" />
          </div>
        </div>

        <div className="flex items-center gap-2 pb-6">
          <div
            className="flex items-center gap-1.5 px-2.5 py-1.5 bg-neutral-50 dark:bg-[#141414] border border-neutral-300/80
           dark:border-neutral-700/80 rounded-lg shadow-sm"
          >
            <Loader2 className="size-3 text-neutral-600 dark:text-neutral-100 animate-spin" />
            <span className="text-neutral-600 dark:text-neutral-100 text-xs font-medium ">
              Analyzing...
            </span>
          </div>
          <div
            className="flex items-center gap-1.5 px-2.5 py-1.5 bg-neutral-50 dark:bg-[#141414] border border-neutral-300/80
           dark:border-neutral-700/80 rounded-lg shadow-sm"
          >
            <GripHorizontal className="size-3 text-neutral-600 dark:text-neutral-100" />
            <span className="text-neutral-600 dark:text-neutral-100 text-xs font-medium ">
              Connecting
            </span>
          </div>
        </div>
      </div>
    </div>

    {/* <div className="flex flex-col px-2">
      <span className="text-neutral-100 font-geist-mono text-xs font-semibold tracking-wide">
        01
      </span>
      <span className="flex flex-col gap-1 pt-2">
        <h1 className="text-white text-[16px] font-semibold tracking-tight">
          Integration
        </h1>
        <p className="text-neutral-400 text-sm leading-relaxed max-w-[95%]">
          Connect via standard GitHub OAuth and our native App Integration. This
          securely fetches your selected repositories so you can instantly list
          them.
        </p>
      </span>
    </div> */}
  </>
);

const events = [
  {
    label: "The Repository",
    time: "4 min ago",
    desc: "DevsDistro allows sellers to easily integrate and monetize the private repositories they already own on GitHub.",
  },
  {
    label: "GitHub OAuth Connecting...",
    time: "4 min ago",
    icon: <Github className="size-4 " />,
  },
  {
    label: "GitHub Connect",
    time: "2 min ago",
    desc: "Connect with GitHub OAuth to securely fetch and instantly list your repositories.",
    preview: <GithubOAuth />,
  },
  {
    label: "Buy repos. Pay on-chain.",
    time: "3 min ago",
    desc: "Connect your Phantom or Solflare wallet and purchase instantly — settled in USDC or SOL",
    icon: (
      <img
        src={img1}
        alt="solana"
        className="size-4 rounded-full object-cover"
      />
    ),
  },
  {
    label: "Solana Connecting...",
    time: "3 min ago",
    icon: (
      <span className="flex items-center gap-1.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="12"
          fill="none"
          viewBox="0 0 54 48"
        >
          <path
            fill="url(#sol_gradient)"
            d="m54.27 37.84-8.86 9.51a2.1 2.1 0 0 1-1.51.65h-42a1 1 0 0 1-.75-1.73l8.85-9.5a2.07 2.07 0 0 1 1.51-.66h42a1 1 0 0 1 .76 1.73m-8.86-19.13a2.06 2.06 0 0 0-1.51-.65h-42a1 1 0 0 0-.75 1.73l8.85 9.5a2.06 2.06 0 0 0 1.51.65h42a1 1 0 0 0 .76-1.73zM1.9 11.89h42a2.07 2.07 0 0 0 1.51-.66l8.86-9.5A1 1 0 0 0 53.51 0h-42A2.1 2.1 0 0 0 10 .65l-8.85 9.51a1 1 0 0 0 .75 1.73"
          />
          <defs>
            <linearGradient
              id="sol_gradient"
              x1="5.4"
              x2="49.45"
              y1="49.14"
              y2="-0.51"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.08" stop-color="#9945FF" />
              <stop offset="0.3" stop-color="#8752F3" />
              <stop offset="0.5" stop-color="#5497D5" />
              <stop offset="0.6" stop-color="#43B4CA" />
              <stop offset="0.72" stop-color="#28E0B9" />
              <stop offset="0.97" stop-color="#19FB9B" />
            </linearGradient>
          </defs>
        </svg>
      </span>
    ),
  },
  {
    label: "Purchase Complete",
    time: "3 min ago",
    desc: "The repository is now transferred to the buyer, and the seller receives their earnings instantly. ",
    // icon: <PackageCheck className="size-3 text-green-400" strokeWidth={1.5} />,
  },
  {
    label: "Archive Delivery",
    time: "3 min ago",
    desc: "The instant the Solana transaction is validated on-chain, DevsDistro orchestrates the secure downloading and compiling of your repository into a downloadable ZIP file, immediately served to the buyer. No manual labor required.",
    icon: <Archive className="size-3 text-purple-400 " strokeWidth={1.5} />,
  },
];

function TimelineItem({
  event,
  index,
  isLast,
  delay = 2.5,
}: {
  event: any;
  index: number;
  isLast: boolean;
  delay?: number;
}) {
  const ref = useRef(null);

  return (
    <div ref={ref} className="flex  gap-4">
      <div className="flex flex-col items-center w-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: delay + index * 0.6,
            duration: 0.3,
            type: "spring",
            stiffness: 300,
          }}
          className="shrink-0 flex items-center justify-center"
        >
          {event.icon ? (
            <span className="flex items-center justify-center mt-0.5">
              {event.icon}
            </span>
          ) : (
            <span className="size-1 rounded-full bg-neutral-400 dark:bg-neutral-700 block mt-1.5" />
          )}
        </motion.div>
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{
              delay: delay + index * 0.6 + 0.4,
              duration: 0.3,
              ease: "easeOut",
            }}
            className="w-[0.5px] flex-1 dark:bg-neutral-700/80 bg-neutral-300 my-2 origin-top"
          />
        )}
      </div>

      <div className="pb-6 flex-1">
        <motion.p
          initial={{ opacity: 0, y: 4, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            delay: delay + index * 0.6,
            duration: 0.4,
            ease: "easeOut",
          }}
          className="text-xs font-medium text-neutral-500 mb-0.5 tracking-wide"
        >
          <span className="text-neutral-600 dark:text-neutral-300/85">
            {" "}
            {event.label}
          </span>
          <span className="mx-1">·</span> {event.time}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 4, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            delay: delay + index * 0.6,
            duration: 0.4,
            ease: "easeOut",
          }}
          className="text-[13px] text-neutral-900 dark:text-neutral-100 leading-relaxed"
        >
          {event.desc}
          {event.preview ? event.preview : ""}
        </motion.p>
      </div>
    </div>
  );
}

export default function DashboardAnimation() {
  return (
    <div className="flex flex-col items-center justify-center px-6 pt-6 pb-0 md:p-8 font-sans antialiased">
      <div className="w-full ">
        {events.map((event, i) => (
          <TimelineItem
            key={i}
            event={event}
            index={i}
            isLast={i === events.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
