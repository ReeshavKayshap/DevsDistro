import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import LogoIcon from "@/assets/icons/LogoIcon";
import { HeaderProps } from "../utils/types";
import { useTheme } from "@/components/providers/ThemeProvider";
// import { landingPrimaryButtonChrome } from "./landingButtonStyles";
// import ButtonComponent from "./Button";

export default function Header({
  handleAuthNavigate,
  isMenuOpen,
  setIsMenuOpen,
}: HeaderProps) {
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const handleScroll = (id: string) => {
    if (isHome) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className="fixed top-0 z-50 w-full bg-background dark:bg-[#080808] border-b border-neutral-200  dark:border-neutral-800/60
     transition-colors duration-300 "
    >
      <nav className="flex justify-between items-center px-3 py-2 md:py-4 mx-auto max-w-[82rem]">
        <Link
          to="/"
          className="flex items-center gap-1 "
          aria-label="Go to DevsDistro home page"
        >
          <LogoIcon className="size-5 mb-0.5" />
          <span className="text-[18px] font-bold tracking-wider text-neutral-800 dark:text-white uppercase ">
            DevsDistro
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-5 lg:gap-8">
          {["Revelation", "Mechanics", "Validations", "FAQS"].map((item) => {
            const id = item.toLowerCase().replace(" ", "-");
            return (
              <Link
                key={item}
                to={isHome ? `#${id}` : `/#${id}`}
                onClick={() => handleScroll(id)}
                className="hover:text-neutral-800 dark:hover:text-neutral-100 tracking-wide font-semibold 
                  relative group text-xs md:text-[14px] dark:text-neutral-300/80 text-neutral-600 font-geist transition-all duration-200 ease-out "
              >
                <span>{item}</span>
                {/* <span className="absolute -bottom-2 left-0 h-[2px] w-full origin-center scale-x-0 rounded-full bg-red-500 opacity-0 transition-[transform,opacity] duration-500 ease-premium group-hover:scale-x-100 group-hover:opacity-100 group-focus-visible:scale-x-100 group-focus-visible:opacity-100 motion-reduce:transition-none" /> */}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="text-gray-600 dark:text-gray-400 hover:text-neutral-800 dark:hover:text-white transition-colors"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 dark:bg-white
           border-[3px] border-neutral-800 text-white dark:text-black font-bold px-4 py-1.5 text-[12px]"
            onClick={handleAuthNavigate}
          >
            Access Now
          </button>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="text-gray-600 dark:text-gray-400 hover:text-neutral-800 dark:hover:text-white
             transition-colors"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button
            className="text-neutral-800 dark:text-white hover:text-red-500 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
