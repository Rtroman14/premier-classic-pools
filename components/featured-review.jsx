import { StarIcon } from "@heroicons/react/24/solid";
import { defaultConfig } from "@/lib/default-config";

export function FeaturedReview({
    review = defaultConfig.reviews[0],
}) {
    if (!review) return null;

    return (
        <div className="max-w-4xl mx-auto text-center space-y-8">
            <div>
                <h2 className="text-3xl md:text-5xl font-semibold text-balance">
                    What Our Customers Say
                </h2>
                <p className="mt-3 text-muted-foreground">
                    Hear from homeowners who trusted us with their backyard.
                </p>
            </div>

            <div className="relative bg-card border rounded-2xl p-8 md:p-12 shadow-sm">
                <div className="flex justify-center gap-1 mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                        <StarIcon key={i} className="size-6 text-yellow-500" />
                    ))}
                </div>

                <blockquote className="text-lg md:text-xl leading-relaxed text-foreground italic">
                    &ldquo;{review.body}&rdquo;
                </blockquote>

                <div className="mt-6 font-semibold text-foreground">
                    {review.name}
                </div>
            </div>
        </div>
    );
}
