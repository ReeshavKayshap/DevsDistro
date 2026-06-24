import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Github, PackageCheck, Archive, ScrollText } from "lucide-react";
import LogoIcon from "@/assets/icons/LogoIcon";

const GithubOAuth = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    let t1: ReturnType<typeof setTimeout>;
    let startDelay: ReturnType<typeof setTimeout>;
    let master: ReturnType<typeof setInterval>;

    const run = () => {
      setActiveStep(0);
      t1 = setTimeout(() => setActiveStep(1), 2500); // slowed from 1500 → 2500
    };

    // First time: wait 8 seconds
    startDelay = setTimeout(() => {
      run();
      // After first run, repeat every 5s (2s break + 3s... wait actually:
      // pipe duration is now 5s, so cycle = 5s + 2s break = 7s
      master = setInterval(run, 7000); // 5s animation + 2s break
    }, 8000);

    return () => {
      clearTimeout(startDelay);
      clearTimeout(t1);
      clearInterval(master);
    };
  }, []);

  const steps = [
    "Repository successfully encrypted and listed.",
    "Authenticating via GitHub OAuth 2.0...",
  ];

  return (
    <div className="mt-2 border border-neutral-800/60 rounded-xl bg-[#141414] max-w-2xl w-full">
      <h1 className="border-b border-neutral-600/20 py-2 flex items-center justify-between gap-2 px-3 text-sm font-sans font-medium">
        Authentication Pipeline
      </h1>

      <div className="w-full flex items-center px-8 py-4">
        <span className="z-10 border px-6 py-4 bg-[#141414] border-neutral-800/80 rounded-xl relative">
          <Github className="size-5" />
        </span>

        <div className="w-full h-4 relative">
          <svg
            className="absolute w-full h-full overflow-visible"
            preserveAspectRatio="none"
          >
            {/* Base Line */}
            <line
              x1="0"
              y1="50%"
              x2="100%"
              y2="50%"
              stroke="#262626"
              strokeWidth="2"
            />
            {/* Moving Packet */}
            <motion.line
              x1="-60"
              y1="50%"
              x2="100%"
              y2="50%"
              stroke="#525252"
              strokeWidth="2"
              strokeDasharray="40 1000"
              animate={{ strokeDashoffset: [-40, -1000] }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 5, // slowed from 3 → 5
                delay: 0,
              }}
            />
          </svg>
        </div>

        {/* Node 2 */}
        <span className="z-10 border border-neutral-800/80 px-6 py-4 bg-[#141414] rounded-xl relative">
          <LogoIcon className="size-5" />
        </span>

        <div className="w-full h-4 relative">
          <svg
            className="absolute w-full h-full overflow-visible"
            preserveAspectRatio="none"
          >
            {/* Base Line */}
            <line
              x1="0"
              y1="50%"
              x2="100%"
              y2="50%"
              stroke="#262626"
              strokeWidth="2"
            />
            {/* Moving Packet */}
            <motion.line
              x1="-60"
              y1="50%"
              x2="120%"
              y2="50%"
              stroke="#525252"
              strokeWidth="2"
              strokeDasharray="40 1000"
              animate={{ strokeDashoffset: [-40, -1000] }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 5, // slowed from 3 → 5
                delay: 2.5, // slowed from 1.5 → 2.5
              }}
            />
          </svg>
        </div>

        {/* Node 3 */}
        <span className="border border-neutral-800/80 px-6 py-4 bg-[#141414] rounded-xl relative">
          <ScrollText className="size-5" />
        </span>
      </div>

      <span className="border-t border-neutral-600/20 py-3 flex flex-col gap-1.5 px-3">
        <h1 className="text-xs font-sans font-medium text-neutral-500 uppercase tracking-wider">
          Status
        </h1>
        <div className="text-sm font-mono h-5 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeStep}
              initial={{ opacity: 0, filter: "blur(6px)", y: 6 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              exit={{ opacity: 0, filter: "blur(6px)", y: -6 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute inset-0 text-neutral-200"
            >
              <span className="text-neutral-500 mr-1">&gt;</span>
              {steps[activeStep]}
            </motion.p>
          </AnimatePresence>
        </div>
      </span>
    </div>
  );
};

const events = [
  {
    label: "The Repository",
    time: "4 min ago",
    desc: "DevsDistro allows sellers to easily integrate and monetize the private repositories they already own on GitHub.",
  },
  {
    label: "GitHub OAuth Connecting...",
    time: "4 min ago",
    icon: <Github className="size-3.5 " />,
  },
  {
    label: "Investigating",
    time: "2 min ago",
    desc: "Connect via standard GitHub OAuth and our native App Integration. This securely fetches your selected repositories so you can instantly list them.",
    preview: <GithubOAuth />,
    // icon: <Github className="size-3 text-blue-400" strokeWidth={1.5} />,
  },
  {
    label: "Solana Settlement",
    time: "3 min ago",
    desc: "The buyer connects their Phantom or Solflare wallet and executes the purchase on-chain. Settled instantly in USDC or native SOL.",
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
    icon: <PackageCheck className="size-3 text-green-400" strokeWidth={1.5} />,
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
}: {
  event: any;
  index: number;
  isLast: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="flex  gap-4">
      <div className="flex flex-col items-center w-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{
            delay: index * 0.6,
            duration: 0.4,
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
            <span className="size-1 rounded-full bg-neutral-700 block mt-1.5" />
          )}
        </motion.div>
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{
              delay: index * 0.6 + 0.5,
              duration: 0.4,
              ease: "easeOut",
            }}
            className="w-[0.5px] flex-1 bg-neutral-700/80 my-2 origin-top"
          />
        )}
      </div>

      <div className="pb-6 flex-1">
        <motion.p
          initial={{ opacity: 0, y: 2, filter: "blur(3.5px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{
            delay: index * 0.6,
            duration: 0.5,
            ease: "easeOut",
          }}
          className="text-xs font-medium text-neutral-500 mb-0.5 tracking-wide"
        >
          <span className="text-neutral-300/80"> {event.label}</span>
          <span className="mx-1">·</span> {event.time}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 2, filter: "blur(4px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{
            delay: index * 0.6,
            duration: 0.5,
            ease: "easeOut",
          }}
          className="text-sm text-neutral-100 leading-relaxed"
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
    <div className="flex flex-col items-center justify-center px-6 pt-6 pb-0 md:px-4 font-sans antialiased">
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
