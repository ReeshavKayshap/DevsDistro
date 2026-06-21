import React from "react";
import { Settings, Trash2, ChevronRight, Mail } from "lucide-react";
import clsx from "clsx";

// ============================================================================
// BUTTON COMPONENT
// ============================================================================

// 🎨 GLOBAL TAILWIND STYLES
// Modulized here so you can easily change the default look of all buttons globally.
const buttonVariants = {
  base: "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  variant: {
    // Change this string to alter the default look globally
    default: "bg-slate-900 text-white hover:bg-slate-800 shadow-md",
    destructive: "bg-red-500 text-white hover:bg-red-600 shadow-sm",
    outline:
      "border-2 border-slate-300 bg-transparent hover:bg-slate-100 hover:text-slate-900",
    secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200",
    ghost: "hover:bg-slate-100 hover:text-slate-900 text-slate-600",
    link: "text-indigo-600 underline-offset-4 hover:underline",
  },
  size: {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3 text-xs",
    lg: "h-12 rounded-lg px-8 text-base font-semibold",
    icon: "h-10 w-10",
  },
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants.variant;
  size?: keyof typeof buttonVariants.size;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          buttonVariants.base,
          buttonVariants.variant[variant],
          buttonVariants.size[size],
          className // Allows overriding with custom tailwind classes via props
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

// ============================================================================
// APP COMPONENT (DEMO)
// ============================================================================

export default function ButtonComponent() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-100 p-4 font-sans text-slate-900">
      <div className="mb-8 text-center">
        <h2 className="mb-2 text-xl font-bold">Modular Overrides</h2>
        <p className="max-w-sm text-sm text-slate-500">
          Because of the <code>clsx</code> utility, you can inject new Tailwind
          classes directly into the component to override the defaults.
        </p>
      </div>

      {/* 🛠️ LOCAL TAILWIND OVERRIDE */}
      {/* Passing custom Tailwind classes to change this specific button on the fly */}
      <Button
        size="lg"
        className="bg-gradient-to-r from-blue-500 to-violet-500 text-white rounded-full border-none px-10 shadow-[0_10px_40px_-10px_rgba(99,102,241,0.8)] hover:scale-105 hover:shadow-[0_10px_40px_-5px_rgba(99,102,241,1)]"
      >
        Custom Tailwind Override
      </Button>
    </div>
  );
}
