import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const events = [
  {
    label: "The Repository",
    time: "4 min ago",
    desc: "DevsDistro allows sellers to easily integrate and monetize the private repositories they already own on GitHub.",
  },
  {
    label: "Auth Connecting...",
    time: "4 min ago",
  },
  {
    label: "Investigating",
    time: "4 min ago",
    desc: "Connect via standard GitHub Auth and our native App Integration. This securely fetches your selected repositories so you can instantly list them.",
  },
  {
    label: "Finding",
    time: "3 min ago",
    desc: "Recent change in auth/reset.ts may cause invalid token validation.",
  },
  {
    label: "Resolved",
    time: "1 min ago",
    desc: "Fix deployed successfully.",
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
    <div ref={ref} className="flex gap-4">
      <div className="flex flex-col items-center pt-1">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{
            delay: index * 0.6,
            duration: 0.4,
            type: "spring",
            stiffness: 300,
          }}
          className={`size-1.5 rounded-full bg-neutral-700 shrink-0 `}
        />
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{
              delay: index * 0.6 + 0.5,
              duration: 0.4,
              ease: "easeOut",
            }}
            className="w-[0.5px] flex-1 bg-neutral-700/80 my-1  origin-top"
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
          {event.label} <span className="mx-1">·</span> {event.time}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 2, filter: "blur(4px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{
            delay: index * 0.6,
            duration: 0.5,
            ease: "easeOut",
          }}
          className="text-sm text-neutral-300 leading-relaxed"
        >
          {event.desc}
        </motion.p>
      </div>
    </div>
  );
}

export default function DashboardAnimation() {
  return (
    <div className="flex flex-col items-center justify-center p-6 md:p-8 font-sans antialiased">
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
