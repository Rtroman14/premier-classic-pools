export const serviceAreas = [
    { name: "Houston", slug: "houston" },
    { name: "Katy", slug: "katy" },
    { name: "Sugar Land", slug: "sugar-land" },
    { name: "Cypress", slug: "cypress" },
    { name: "Spring", slug: "spring" },
    { name: "Richmond", slug: "richmond" },
    { name: "Montgomery", slug: "montgomery" },
    { name: "Rosharon", slug: "rosharon" },
    { name: "Hockley", slug: "hockley" },
    { name: "Waller", slug: "waller" },
];

export const getServiceAreaBySlug = (slug) => {
    return serviceAreas.find((area) => area.slug === slug) || null;
};
