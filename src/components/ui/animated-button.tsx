import { cn } from "@/lib/utils";

interface AnimatedButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const AnimatedButton = ({ text, onClick, className }: AnimatedButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "animated-cta-button group relative cursor-pointer border-none bg-transparent p-0 m-0 h-auto",
        className
      )}
    >
      <span className="actual-text font-sans text-sm tracking-wider uppercase text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.6)] lg:[-webkit-text-stroke:1px_hsl(var(--foreground)/0.6)]">
        &nbsp;{text}&nbsp;
      </span>
      <span
        aria-hidden="true"
        className="hover-text absolute inset-0 w-0 overflow-hidden border-r-[4px] border-primary text-primary [-webkit-text-stroke:1px_hsl(var(--primary))] transition-all duration-500 ease-out group-hover:w-full group-hover:drop-shadow-[0_0_23px_hsl(var(--primary))]"
      >
        <span className="font-sans text-sm tracking-wider uppercase">
          &nbsp;{text}&nbsp;
        </span>
      </span>
    </button>
  );
};

export default AnimatedButton;
