import { serviceAreas } from "@/lib/service-areas";

const BASE_URL = "https://premierclassicpools.com";

export default function sitemap() {
    const staticPages = [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${BASE_URL}/about-us`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/gallery`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/get-a-quote`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/service-areas`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
    ];

    const servicePages = [
        "pool-design-build",
        "outdoor-living",
        "turf-installation",
        "pool-renovation",
        "equipment-upgrades",
        "standby-generators",
    ].map((slug) => ({
        url: `${BASE_URL}/services/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.9,
    }));

    const cityPages = serviceAreas.map((area) => ({
        url: `${BASE_URL}/service-areas/${area.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
    }));

    return [...staticPages, ...servicePages, ...cityPages];
}
