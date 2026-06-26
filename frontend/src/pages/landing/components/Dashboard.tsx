import {
  PanelLeft,
  ChevronRight,
  Ellipsis,
  TrendingUp,
  LogOut,
} from "lucide-react";

import DashboardAnimation from "@/pages/landing/components/Dashboard-Animation";

export default function App() {
  const sellerSections = [
    {
      heading: "Dashboard",
      valueHeading: "Status",
      items: [
        {
          label: "Wallet",
          value: (
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
                    <stop offset="0.08" stopColor="#9945FF" />
                    <stop offset="0.3" stopColor="#8752F3" />
                    <stop offset="0.5" stopColor="#5497D5" />
                    <stop offset="0.6" stopColor="#43B4CA" />
                    <stop offset="0.72" stopColor="#28E0B9" />
                    <stop offset="0.97" stopColor="#19FB9B" />
                  </linearGradient>
                </defs>
              </svg>
              Connect
            </span>
          ),
        },
        {
          label: "Sales",
          value: (
            <span className="flex items-center gap-1 ">
              <h1 className="text-green-300">📈</h1>
              <h1>+12 sales</h1>
            </span>
          ),
        },
        {
          label: "Overview",
          value: (
            <span className="flex items-center gap-1 ">
              <h1 className="text-green-300">💰 </h1>
              <div className="flex items-center gap-1">
                <TrendingUp size={15} className="mt-0.5" />
                <h1> $3.8k</h1>
              </div>
            </span>
          ),
        },
        {
          label: "My Projects",
          value: (
            <span className="flex items-center gap-1 ">
              <h1 className="text-blue-300">🗂️</h1>
              <h1>3 active</h1>
            </span>
          ),
        },
      ],
    },
  ];
  const buyerSections = [
    {
      heading: "My Space",
      valueHeading: "Status",
      items: [
        { label: "Buyer", value: "Alex" },
        { label: "Marketplace", value: "5 repos" },
        { label: "Wishlist", value: "+12 sales" },
        { label: "Purchases", value: "↗ $3.8k" },
      ],
    },
  ];
  return (
    <>
      <div className="relative isolate flex shrink-0 lg:mb-16 2xl:justify-center mt-10">
        <div
          className="-z-10 pointer-events-none absolute top-1/2 -left-24 h-[40rem] w-[93.5rem]
           -translate-y-1/2 rounded-[300px] blur-[50px] will-change-transform md:left-1/2 md:h-[53.5rem] md:-translate-x-1/2"
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 30, 30, 0.38) 0%, rgba(255, 30, 30, 0.09) 30%, rgba(255, 30, 30, 0.06) 60%, rgba(255, 30, 30, 0.06) 100%, transparent 70%)",
            opacity: 1,
          }}
        ></div>

        <div
          className="relative z-10 w-full bg-white/5 border border-white/10 backdrop-blur-md max-w-[90rem] mx-auto
       rounded-2xl flex p-1 shadow-2xl"
        >
          <div className="h-full w-[3%] hidden md:block"></div>
          <div className="h-full w-full md:w-[97%] bg-[#0B0B0B] rounded-xl overflow-hidden">
            <div className=" border-b border-neutral-600/20 py-2 flex flex-wrap items-center justify-between gap-2 px-3">
              <span className="flex items-center gap-2">
                <PanelLeft size={16} className="text-neutral-600" />
                <span className="text-neutral-400 text-sm font-sans hidden sm:block">
                  Dashboard
                </span>
                <ChevronRight
                  size={16}
                  className="mt-[1.6px] text-neutral-700/80 hidden sm:block"
                />
                <span className="text-neutral-100 text-sm font-sans font-medium">
                  DevsDistro Architecture
                </span>
              </span>

              <span className="flex items-center gap-2">
                <button
                  className="text-neutral-300/90 hover:text-neutral-100 active:scale-[97%] duration-200 ease-out bg-neutral-700/20 px-4 py-1.5 rounded-md 
             ring-1 ring-neutral-800/80 flex items-center gap-2 cursor-pointer transition-colors hover:bg-neutral-700/40"
                >
                  <LogOut size={14} className=" mt-px" />
                  <span className="text-[13px] font-sans font-semibold ">
                    LogOut
                  </span>
                </button>
                <span className="bg-neutral-700/20 p-1.5 rounded-md ring-1 ring-neutral-800/80 active:scale-[97%] cursor-pointer hover:bg-neutral-700/40 transition-colors">
                  <Ellipsis size={16} className="text-neutral-300" />
                </span>
              </span>
            </div>

            <div className="flex flex-col lg:flex-row h-full w-full">
              <div className="w-full lg:w-[35%] border-b lg:border-b-0 lg:border-r border-neutral-600/20 divide-y divide-neutral-600/20">
                <div className="p-6">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-blue-400 bg-blue-500/10 px-2 py-1 rounded-md ">
                    For sellers
                  </span>

                  <h1 className="text-2xl font-sans font-medium py-3 text-white">
                    Turn your code into income
                  </h1>
                  <p className="text-sm text-neutral-400 font-sans leading-relaxed">
                    List your repositories, track sales, and get paid all{" "}
                    <br className="hidden xl:block" />
                    from one dashboard.
                  </p>

                  <div className="mt-10 max-w-xs">
                    {sellerSections.map((section) => (
                      <span key={section.heading}>
                        <span className="text-[13.5px] font-medium font-geist flex gap-24 pb-2">
                          <h1 className="text-neutral-300/85 w-24">
                            {section.heading}
                          </h1>
                          <h1>{section.valueHeading}</h1>
                        </span>
                        {section.items.map((item) => (
                          <span
                            key={item.label}
                            className="text-[13.5px] py-1.5 flex gap-24 font-medium font-geist"
                          >
                            <h1 className="text-neutral-300/85 w-24">
                              {item.label}
                            </h1>
                            {item.value && <h1>{item.value}</h1>}
                          </span>
                        ))}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-green-400 bg-green-500/10 px-2 py-1 rounded-md">
                    For buyers
                  </span>
                  <h1 className="text-2xl font-sans font-medium py-3 text-white">
                    Find & launch the perfect repo
                  </h1>
                  <p className="text-sm text-neutral-400 font-sans leading-relaxed">
                    Browse thousands of ready-made repositories and ship your
                    product faster.
                  </p>

                  <div className="mt-10 max-w-xs">
                    {buyerSections.map((section) => (
                      <span key={section.heading}>
                        <span className="text-[13.5px] font-medium font-geist flex gap-24 pb-2">
                          <h1 className="text-neutral-300/85 w-24 ">
                            {section.heading}
                          </h1>
                          <h1>{section.valueHeading}</h1>
                        </span>
                        {section.items.map((item) => (
                          <span
                            key={item.label}
                            className="text-[13.5px] py-[5px] flex gap-24 font-medium font-geist"
                          >
                            <h1 className="text-neutral-300/85 w-24">
                              {item.label}
                            </h1>
                            {item.value && <h1>{item.value}</h1>}
                          </span>
                        ))}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-[65%]">
                <div className="border-b border-neutral-600/20 py-3 px-6">
                  <h1 className="text-sm font-medium text-neutral-200">
                    DevsDistro Pipeline
                  </h1>
                </div>
                <div className="p-2">
                  <DashboardAnimation />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
