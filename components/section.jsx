import { cn } from "@/lib/utils";

export const Section = ({ children, className }) => {
    // return <section className={cn("max-w-7xl mx-auto px-4", className)}>{children}</section>;
    return <section className={cn("mx-auto px-4", className)}>{children}</section>;
};
