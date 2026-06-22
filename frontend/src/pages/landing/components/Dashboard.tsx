import {
  PanelLeft,
  ChevronRight,
  Ellipsis,
  TrendingUp,
  LogOut,
} from "lucide-react";
import DashboardAnimation from "./Dashboard-Animation";

function Dashboard() {
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
                    <stop offset="0.08" stop-color="#9945FF" />
                    <stop offset="0.3" stop-color="#8752F3" />
                    <stop offset="0.5" stop-color="#5497D5" />
                    <stop offset="0.6" stop-color="#43B4CA" />
                    <stop offset="0.72" stop-color="#28E0B9" />
                    <stop offset="0.97" stop-color="#19FB9B" />
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
        { label: "Purchases", value: "5 repos" },
        { label: "Sales", value: "+12 sales" },
        { label: "Overview", value: "↗ $3.8k" },
        { label: "My Projects", value: "3 active" },
      ],
    },
  ];
  return (
    <div
      className="w-full bg-white/30 backdrop-blur-md max-w-[90rem] mx-auto
     rounded-2xl mt-10 flex p-1"
    >
      <div className="h-full w-[3%] "></div>
      <div className="h-full w-[97%] bg-[#0B0B0B] rounded-2xl ">
        <div className=" border-b border-neutral-600/20 py-2 flex items-center justify-between gap-2 px-3">
          <span className="flex items-center gap-2">
            <PanelLeft size={16} className="text-neutral-600" />
            <span className="text-neutral-300/80 text-sm font-sans">
              Dashboard
            </span>
            <ChevronRight
              size={16}
              className="mt-[1.6px] text-neutral-700/80 "
            />
            <span className="text-neutral-100 text-sm font-sans">
              DevsDistro Architecture
            </span>
          </span>

          <span className="flex items-center gap-2">
            <button
              className="text-neutral-300/90 hover:text-neutral-100 active:scale-[97%] duration-200 ease-out bg-neutral-700/20 px-4 py-1 rounded-md 
            ring-1 ring-neutral-800/80 flex items-center gap-1 cursor-pointer"
            >
              <LogOut size={14} className=" mt-px" />
              <h1 className="text-[13px] font-sans font-semibold ">LogOut</h1>
            </button>
            <span className="bg-neutral-700/20 p-1 rounded-sm ring-1 ring-neutral-800/80 active:scale-[97%] cursor-pointer">
              <Ellipsis size={16} className="text-neutral-300" />
            </span>
          </span>
        </div>

        <span className="flex h-full w-full">
          <div className="h-full w-[35%] border-r border-neutral-600/20 divide-y divide-neutral-600/20">
            <div className="p-6">
              <span className="text-xs font-semibold text-blue-800 bg-blue-400 p-1 rounded-md ">
                For sellers
              </span>

              <h1 className="text-2xl font-sans font-medium py-2.5">
                Turn your code into income
              </h1>
              <p className="text-sm text-neutral-300/85 font-sans">
                List your repositories, track sales, and get paid all <br />
                from one dashboard.
              </p>

              <div className="mt-10 max-w-xs">
                {sellerSections.map((section) => (
                  <span key={section.heading}>
                    <span className="text-sm font-medium font-geist py-1 flex gap-24">
                      <h1 className="text-neutral-300/85 w-24">
                        {section.heading}
                      </h1>
                      <h1>{section.valueHeading}</h1>
                    </span>
                    {section.items.map((item) => (
                      <span
                        key={item.label}
                        className="text-sm py-2 flex gap-24 font-medium font-geist"
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
              <span className="text-xs font-semibold text-green-800 bg-green-400 p-1 rounded-md">
                For buyers
              </span>
              <h1 className="text-2xl font-sans font-medium py-2.5">
                Find & launch the perfect repo
              </h1>
              <p className="text-sm text-neutral-400 font-sans">
                Browse thousands of ready-made repositories and ship your
                product faster.
              </p>

              <div className="mt-10 max-w-xs">
                {buyerSections.map((section) => (
                  <span key={section.heading}>
                    <span className="text-sm font-medium font-geist py-1 flex gap-24">
                      <h1 className="text-neutral-300/85 w-24">
                        {section.heading}
                      </h1>
                      <h1>{section.valueHeading}</h1>
                    </span>
                    {section.items.map((item) => (
                      <span
                        key={item.label}
                        className="text-sm py-2 flex gap-24 font-medium font-geist"
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
          <div className="h-full w-[65%] ">
            <div className=" border-b border-neutral-600/20 py-2  px-3">
              <h1>DevsDistro Pipeline</h1>
            </div>
            <DashboardAnimation />
          </div>
        </span>
      </div>
    </div>
  );
}

export default Dashboard;
