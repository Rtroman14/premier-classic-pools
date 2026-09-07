# Dynamic Demo System - Implementation Summary

## Overview

Successfully implemented a dynamic demo system that allows roofing contractors to view personalized websites based on their Google Places data. The system maintains both a static marketing template and a dynamic demo version.

## What Was Built

### 1. Configuration System

**Files Created:**

-   `lib/site-config.js` - Transforms Google Places API data into standardized site configuration
-   `lib/default-config.js` - Default configuration for static marketing site

**Key Features:**

-   Extracts company name, phone number, address, city, state from Google Places data
-   Transforms Google reviews into component-ready format
-   Generates dynamic hero titles like "Memphis's Trusted Roofing Experts"
-   Creates personalized descriptions using rating and review count
-   Provides fallback defaults for all fields

### 2. Server Action for Data Fetching

**File Created:**

-   `lib/actions/fetch-place-data.js` - Server action that fetches and transforms Google Places data

**Features:**

-   Marked with `"use server"` for Next.js server-side execution
-   Fetches from Google Places API using `GOOGLE_MAPS_API_KEY`
-   Includes 1-hour caching (`revalidate: 3600`)
-   Comprehensive error handling
-   Returns null if place not found (graceful degradation)

### 3. Updated Components

**All components now accept dynamic props with fallback defaults:**

-   **`components/reviews.jsx`**

    -   Accepts `reviews` prop (array of review objects)
    -   Maps Google reviews format to display format
    -   Defaults to placeholder reviews from `defaultConfig`

-   **`components/cta.jsx`**

    -   Accepts `phoneNumber` prop
    -   Updates call button to use dynamic phone number
    -   Strips non-numeric characters for `tel:` link

-   **`components/navbar.jsx`**

    -   Accepts `phoneNumber` prop
    -   Passes to both Desktop and Mobile navbar variants

-   **`components/desktop-navbar.jsx`**

    -   Accepts `phoneNumber` prop
    -   Updates phone button with dynamic number

-   **`components/mobile-navbar.jsx`**

    -   Accepts `phoneNumber` prop
    -   Updates phone button with dynamic number
    -   Fixed "Get a Quote" link to `/contact` (was `/login`)

-   **`components/footer.jsx`**
    -   Accepts `companyName` prop
    -   Updates copyright text with dynamic company name

### 4. Marketing Pages Integration

**Files Modified:**

-   `app/(marketing)/page.jsx` - Now accepts `config` prop with default value
-   `app/(marketing)/layout.jsx` - Passes config to Navbar and Footer

**Dynamic Content:**

-   Hero title and description from config
-   Reviews from config
-   CTA title, description, and phone number from config
-   Phone numbers throughout navbar

### 5. Demo Pages

**Files Created/Modified:**

-   `app/(demo)/[placeId]/layout.jsx` - Fetches place data and wraps demo pages
-   `app/(demo)/[placeId]/page.jsx` - Renders personalized home page with fetched data

**Features:**

-   Fetches Google Places data server-side using place ID from URL
-   Falls back to default config if place not found
-   Renders complete home page with all dynamic content
-   Shares components with marketing template (DRY principle)

## How It Works

### Static Marketing Site

```
User visits /
  → app/(marketing)/layout.jsx (uses defaultConfig)
  → app/(marketing)/page.jsx (uses defaultConfig)
  → Components render with default/template data
```

### Dynamic Demo Site

```
User visits /ChIJkxOehaqFf4gR8gHBWFF8mqU
  → app/(demo)/[placeId]/layout.jsx
  → fetchPlaceData(placeId) - Server Action
  → Google Places API call
  → transformPlaceData() - Convert to site config
  → app/(demo)/[placeId]/page.jsx (uses fetched config)
  → Components render with personalized data
```

## Example Usage

### Send Demo Link to Contractor

```
https://yoursite.com/ChIJkxOehaqFf4gR8gHBWFF8mqU
```

This will:

1. Fetch their Google Places data
2. Show their company name in footer
3. Display their phone number in navbar and CTAs
4. Show their actual Google reviews
5. Generate personalized hero text like "Memphis's Trusted Roofing Experts"
6. Include their rating in the description

## Environment Setup

Ensure `.env.local` contains:

```
GOOGLE_MAPS_API_KEY=your_api_key_here
```

## Data Transformation Example

Google Places data transforms to:

```javascript
{
  companyName: "Ameripride Roofing USA",
  phoneNumber: "(901) 256-6298",
  city: "Memphis",
  state: "TN",
  heroTitle: "Memphis's Trusted Roofing Experts",
  heroDescription: "Rated 5.0 stars by 15+ homeowners. Expert roofing solutions...",
  reviews: [
    {
      name: "Elisabeth Clay",
      body: "Ameripride Roofing USA did an incredible job...",
      rating: 5,
      img: "https://lh3.googleusercontent.com/..."
    }
  ],
  ctaTitle: "Ready to protect your Memphis home?",
  ctaDescription: "Get your free, no-obligation estimate today...",
  // ... more fields
}
```

## Key Benefits

1. **DRY (Don't Repeat Yourself)**: Marketing and demo pages share the same components
2. **Type Safety**: All components have prop defaults for graceful fallbacks
3. **Performance**: Server-side rendering with 1-hour caching
4. **Maintainability**: Single source of truth for data transformation in `site-config.js`
5. **Flexibility**: Easy to customize transformations for each contractor
6. **SEO Friendly**: Server-side rendering ensures search engines see personalized content

## Testing

Test with the example Place ID:

```
http://localhost:3000/ChIJkxOehaqFf4gR8gHBWFF8mqU
```

This should show "Ameripride Roofing USA" data from Memphis, TN.

## Next Steps (Optional Enhancements)

1. Add metadata generation for SEO (title, description per place)
2. Create error page for invalid place IDs
3. Add loading states for better UX
4. Implement per-place customization overrides
5. Add analytics tracking for demo page views
6. Create admin interface to manage custom overrides
