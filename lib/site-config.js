/**
 * Transforms Google Places API data into a standardized site configuration
 * @param {Object} googlePlaceData - Raw data from Google Places API
 * @returns {Object} Standardized site configuration
 */
export const transformPlaceData = (googlePlaceData) => {
    if (!googlePlaceData) {
        return null;
    }

    // Extract city and state from address components
    const addressComponents = googlePlaceData.addressComponents || [];
    const city = addressComponents.find(comp => comp.types.includes('locality'))?.longText || '';
    const state = addressComponents.find(comp => comp.types.includes('administrative_area_level_1'))?.shortText || '';

    // Extract company name
    const companyName = googlePlaceData.displayName?.text || 'Professional Roofing';

    // Extract contact info
    const phoneNumber = googlePlaceData.nationalPhoneNumber || googlePlaceData.internationalPhoneNumber || '';
    const address = googlePlaceData.formattedAddress || '';

    // Extract ratings
    const rating = googlePlaceData.rating || 0;
    const reviewCount = googlePlaceData.userRatingCount || 0;

    // Transform reviews
    const reviews = (googlePlaceData.reviews || []).map(review => ({
        name: review.authorAttribution?.displayName || 'Anonymous',
        body: review.text?.text || review.originalText?.text || '',
        rating: review.rating || 5,
        img: review.authorAttribution?.photoUri || `https://avatar.vercel.sh/${review.authorAttribution?.displayName || 'user'}`,
    }));

    // Generate dynamic hero content
    const heroTitle = city 
        ? `${city}'s Trusted Roofing Experts`
        : `Professional Roofing Services`;

    const heroDescription = rating > 0 && reviewCount > 0
        ? `Rated ${rating.toFixed(1)} stars by ${reviewCount}+ homeowners. Expert roofing solutions built on years of craftsmanship, reliability, and unwavering commitment to quality.`
        : `Expert roofing solutions built on years of craftsmanship, reliability, and unwavering commitment to quality.`;

    // Generate dynamic CTA content
    const ctaTitle = `Ready to protect your ${city ? city : ''} home?`.trim();
    const ctaDescription = `Get your free, no-obligation estimate today. Our experts are ready to answer your questions and provide the perfect roofing solution for your home.`;

    return {
        companyName,
        phoneNumber,
        city,
        state,
        address,
        email: 'ryan@roofera.ai',
        rating,
        reviewCount,
        reviews,
        heroTitle,
        heroDescription,
        ctaTitle,
        ctaDescription,
        websiteUri: googlePlaceData.websiteUri || '',
        googleMapsUri: googlePlaceData.googleMapsUri || '',
    };
};

