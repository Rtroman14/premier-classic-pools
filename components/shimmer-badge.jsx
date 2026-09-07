import { SparklesIcon } from "@heroicons/react/24/solid";
import { AnimatedShinyText } from "@/components/animated-shiny-text";
import { cn } from "@/lib/utils";

export default function ShimmerBadge({
    icon = <SparklesIcon className="mr-[2px] -mt-1 inline-flex h-[16px] w-[16px] text-brand/90" />,
    children,
}) {
    return (
        <div
            className={cn(
                "group rounded-full border text-base text-white transition-all ease-in border-brand-500/40 bg-brand-500/10 hover:bg-brand-500/50 shadow-inner dark:shadow-brand-500/70"
            )}
        >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 dark:hover:text-neutral-400 text-sm">
                <span>
                    {icon} {children}
                </span>
            </AnimatedShinyText>
        </div>
    );
}
