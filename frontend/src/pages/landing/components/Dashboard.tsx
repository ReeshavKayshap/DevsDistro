import { PanelLeft, ChevronRight, Ellipsis } from "lucide-react";

function Dashboard() {
  return (
    <div
      className="h-screen w-full bg-white/30 backdrop-blur-md max-w-[90rem] mx-auto
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
            <button className="text-neutral-300/80 text-sm font-sans">
              Log out
            </button>
            <Ellipsis size={16} className="text-neutral-600" />
          </span>
        </div>

        <span className="flex h-full w-full">
          <div className="h-full w-[35%] border-r border-neutral-600/20">
            <div className="p-6">
              <span>For sellers</span>
              <h1 className="text-2xl py-2">Turn your code into income</h1>
              <p className="text-sm ">
                List your repositories, track sales, and get paid — all from one
                dashboard.
              </p>
            </div>
            {/* <div>hi</div> */}
          </div>
          <div className="h-full w-[65%] "></div>
        </span>
      </div>
    </div>
  );
}

export default Dashboard;
