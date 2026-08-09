# Fasalo SEO — Phase 3: Page-Level SEO, Technical SEO, Schema & Image SEO

**Builds on:** Phase 1 (keyword map) + Phase 2 (content architecture, confirmed URL structure)
**Confirmed:** /crop/[name] URLs | About/Contact/Privacy/Terms = real standalone pages | Domain = PENDING | Price data = demo/static
**This document is a specification for implementation — no code is modified here**

---

## Labeling key

- 🟢 VERIFIED FACT
- 🔵 RESEARCH FINDING
- 🟡 RECOMMENDATION
- 🔴 ASSUMPTION / PENDING / NEEDS VERIFICATION

---

## Section A — Homepage SEO Assets

### A1. Core metadata

| Element | Value | Notes |
|---|---|---|
| **Title tag** | `Fasalo — Find the Best Mandi to Sell Your Crop` | Under 60 characters. Brand first, core value prop second. Do not stuff keywords. |
| **Meta description** | `Compare nearby market prices, estimate transport cost, and get an AI-powered recommendation on where to sell your crop for maximum profit.` | ~145 characters. Matches search intent: farmer wants to sell, not just check prices. |
| **H1** | `Sell Your Crops at the Best Market` | Already close to current on-site H1 ("Sell Your Crops At The Best Market") — retain it. Strong, action-oriented, matches intent. |
| **Canonical** | `https://[FINAL-DOMAIN]/` | 🔴 PENDING final domain. Use staging URL as placeholder during development only. |
| **robots meta** | `index, follow` | Already set correctly on the live site. Retain. |
| **lang attribute** | `<html lang="en">` for English version | Must be set per language page: `lang="hi"` for Hindi, `lang="mr"` for Marathi. |

### A2. Open Graph metadata

| Property | Value |
|---|---|
| `og:title` | `Fasalo — Find the Best Mandi to Sell Your Crop` |
| `og:description` | `Compare nearby mandi prices, estimate transport cost, and get an AI recommendation on where to sell your crop for maximum profit.` |
| `og:image` | `https://[FINAL-DOMAIN]/og-image.png` (already exists on site — verify it is 1200×630px and loads correctly) |
| `og:type` | `website` |
| `og:url` | `https://[FINAL-DOMAIN]/` — 🔴 PENDING |
| `og:site_name` | `Fasalo` |
| `og:locale` | `en_IN` for English (Indian English, more relevant than `en_US`) |

### A3. Twitter/X card

| Property | Value |
|---|---|
| `twitter:card` | `summary_large_image` (already set — retain) |
| `twitter:title` | `Fasalo — Find the Best Mandi to Sell Your Crop` |
| `twitter:description` | `Compare nearby market prices, estimate transport cost, and get an AI recommendation on where to sell your crop for maximum profit.` |
| `twitter:image` | `/og-image.png` |

### A4. Homepage primary keyword mapping

| Role | Keyword |
|---|---|
| Primary | best market to sell crop |
| Secondary | mandi price comparison, nearby mandi, AI mandi recommendation |
| Supporting | crop price today, APMC market |

### A5. Homepage copy guidance (do not redesign — apply to existing sections)

🟡 These are wording adjustments for SEO signal strength within the existing layout, not new sections:

- The sub-headline "Compare. Decide. Sell Better." is strong — retain.
- The three bullet points under H1 ("Government Mandi Data / AI Recommendation / Nearby Markets") are fine as trust signals but currently state features that need data verification before appearing in SEO-indexed copy as factual claims. 🔴 Until price data source is confirmed, consider softening "Government Mandi Data" to "Market Price Data" to avoid an unverifiable claim.
- The "Live Market Intelligence" section with headline stats (₹8,120, 1,300+ markets, 94.7%) must be clearly labeled as demo/sample data if not yet live — these figures are indexed by Google and will appear in snippets. A small disclaimer ("Sample data for demonstration purposes only. Actual prices vary.") is safer than having Google index potentially misleading claims.

### A6. Homepage image alt text recommendations

| Image / element | Recommended alt text |
|---|---|
| Hero graphic / illustration | `Farmer using Fasalo to compare mandi prices on mobile` |
| Logo | `Fasalo logo` (brief, not keyword-stuffed) |
| Crop icons in price table | Already has e.g. "Icon representing Cotton crop." — this pattern is good, retain |
| OG image | Not visible on-page, but ensure the file itself is descriptive (`fasalo-mandi-price-comparison.png` not `og-image.png`) |

---

## Section B — On-Page SEO Checklist (applies to every page)

This is a universal checklist. Apply it when building any page in the Fasalo site.

### B1. Per-page metadata checklist

```
□ Title tag
  - Under 60 characters (ideally 50–58)
  - Primary keyword near the front
  - Brand at end: "| Fasalo" (optional for inner pages)
  - Unique across the entire site — no two pages share a title

□ Meta description
  - 130–155 characters
  - Contains primary keyword naturally
  - Describes what the user gets, not just what the page is about
  - Has a soft call-to-action ("Find your best mandi", "Compare prices")
  - Unique across the entire site

□ Canonical tag
  - Present on every page
  - Points to itself (not to the homepage or a parent page)
  - Uses the final production domain once confirmed 🔴 PENDING
  - Language pages each canonical to themselves, not to the English version

□ hreflang tags (once multilingual pages exist)
  - Three tags per page: en, hi, mr + x-default → en
  - Tags are reciprocal (every language version references all others)
  - URLs use the correct /hi/ and /mr/ subdirectory

□ robots meta
  - index, follow on all public content pages
  - noindex on: thank-you pages, admin URLs, duplicate filter pages
  - Never noindex a page that has valuable content
```

### B2. Heading structure checklist

```
□ H1
  - Exactly one H1 per page
  - Contains primary keyword
  - Not the same as the title tag (can overlap but should differ slightly)
  - Descriptive, not just a category label

□ H2
  - One per major section
  - Contains secondary keywords naturally — not forced
  - Reads as a section heading a human would write

□ H3
  - Sub-points within H2 sections
  - No keyword stuffing — only used when structure genuinely needs it

□ Never skip heading levels (H1 → H3 without H2 is wrong)
```

### B3. URL checklist

```
□ All lowercase
□ Hyphens to separate words (not underscores, not spaces)
□ No trailing slash inconsistency (pick one style and enforce it sitewide with 301s)
□ No query strings in canonical URLs
□ Crop pages: /crop/[cropname] — confirmed
□ Location pages: /maharashtra, /maharashtra/nagpur etc.
□ Blog: /blog/[slug]
□ Legal/trust: /about, /contact, /privacy-policy, /terms
```

### B4. Content quality checklist

```
□ Each page answers a specific search intent (not a generic overview)
□ Minimum useful content: 600 words for blog/pillar, 400 words for crop/location pages
□ No duplicate content across pages (each crop page has unique intro, unique mandi context, unique seasonal info)
□ No keyword stuffing — keyword appears naturally, not repeatedly in every sentence
□ No unverified claims presented as fact
□ Data disclaimer present on any page showing price data: 
  "Prices shown are for reference and comparison. Verify current rates at your chosen mandi before transporting your produce."
□ Internal links present: minimum 2–3 contextual links per page to related pages
□ External links: only to authoritative sources (government portals, official bodies) where relevant
□ CTA present: every page has one clear next action ("Find Best Market", "Compare Prices", etc.)
```

### B5. Crop page specific checklist

```
□ Unique H1 per crop (not "Crop Price Today" on all 8 pages)
□ Crop-specific mandi names mentioned (research-backed, not invented)
□ MSP noted where applicable (Cotton, Soybean, Rice/Paddy, Wheat) with note that actual mandi price may differ
□ Sugarcane page: no "Find Best Market" CTA until functionality confirmed 🔴
□ Hindi and Marathi keyword variants used naturally in Hindi/Marathi versions
□ FAQ section with 4–6 genuinely useful questions
□ Internal links to: /crop-prices hub, /find-best-market, /maharashtra, 2–3 related crop pages
```

### B6. Location page specific checklist

```
□ Names real, researched mandis — no invented market names
□ States which crops are primarily traded there (research-backed)
□ Seasonal arrival patterns included
□ Data disclaimer present
□ Links to relevant crop pages for crops grown in that region
□ "How to use Fasalo from this location" section with tool CTA
□ Does NOT copy-paste the same content from another location page with only the city name changed
```

---

## Section C — Technical SEO Checklist

This section is a specification for the development team. Implement before or at launch.

### C1. Crawlability & indexing

```
□ robots.txt
  - File must exist at /robots.txt
  - Must NOT accidentally block Googlebot from crawling /crop/, /blog/, /maharashtra/, 
    or any other content pages
  - Should block: /admin/, any internal dev/preview routes, /api/ endpoints not meant for indexing
  - Recommended minimum:
      User-agent: *
      Disallow: /api/
      Sitemap: https://[FINAL-DOMAIN]/sitemap.xml   🔴 PENDING domain

□ sitemap.xml
  - Must exist at /sitemap.xml
  - Include: homepage, all crop pages, all location pages, all pillar pages, all blog articles,
    /about, /contact, /privacy-policy, /terms
  - Exclude: /api/ routes, filter/query-string URLs, noindex pages
  - For multilingual: include all /hi/ and /mr/ equivalents
  - <lastmod> date should reflect actual last-modified date, not today's date always
  - Submit to Google Search Console after launch 🔴 PENDING

□ Canonical tags
  - Present on every indexable page (see B1 above)
  - Self-referencing canonicals on all pages

□ Pagination
  - If any list pages (blog index, crop index) paginate, use rel="next"/"prev" 
    OR a "Load More" pattern — do not create /page/2 URLs without proper canonical handling

□ Duplicate URL prevention
  - Enforce: https:// only (HTTP → HTTPS redirect)
  - Enforce: one www preference (www or non-www, 301 the other — not both accessible)
  - Enforce: trailing slash consistency (pick one, 301 the other)
  - Tool widget: if URL parameters are added when the form is submitted 
    (e.g. ?crop=tomato&location=pune), these must either be canonicalized back to the base URL 
    or excluded from indexing via robots.txt — parameter URLs should NOT be indexed as 
    separate pages
```

### C2. HTTPS & security

```
□ HTTPS enforced sitewide (Vercel provides this — confirm it is active)
□ All internal links use HTTPS (no mixed-content http:// references)
□ HSTS header recommended (HTTP Strict Transport Security)
□ No mixed content warnings in browser console
```

### C3. Mobile performance (critical for Indian agricultural users)

🔵 Context: The primary Fasalo user is a farmer in rural/semi-urban Maharashtra, likely on a mid-range Android device on 4G or occasionally 3G. This is a mobile-first user base in the truest sense. Performance is not a nice-to-have — it is a functional requirement.

```
□ Responsive design: already present (confirmed from live site)
□ Touch targets: all buttons and links at least 48×48px (farmhands / outdoor use)
□ Font size: minimum 16px body text (small text is unusable outdoors in sunlight)
□ No horizontal scrolling on any viewport below 380px width

□ Core Web Vitals targets (2026 confirmed thresholds):
  - LCP (Largest Contentful Paint): under 2.5 seconds ✓ Good | 2.5–4.0s Needs work | >4.0s Poor
  - INP (Interaction to Next Paint): under 200ms ✓ Good | 200–500ms Needs work | >500ms Poor
  - CLS (Cumulative Layout Shift): under 0.1 ✓ Good | 0.1–0.25 Needs work | >0.25 Poor
  Note: INP replaced FID in March 2024. Any tool/guide still referencing FID is outdated.
  Measurement: use Chrome User Experience Report (CrUX) field data, not just Lighthouse.

□ LCP optimization priorities:
  - Hero text renders immediately (no font-swap flash that delays LCP)
  - If hero contains an image, preload it: <link rel="preload" as="image">
  - Server response time (TTFB) under 600ms — Vercel CDN should handle this

□ INP optimization priorities:
  - The "Find Best Market" form submit is the most likely INP culprit (user taps → response lag)
  - Avoid heavy JavaScript execution on main thread during form interaction
  - Debounce any real-time inputs in the tool

□ CLS optimization priorities:
  - Set explicit width and height on all images (prevents layout shift as images load)
  - Avoid inserting content above existing content after page load
  - If the price table loads asynchronously, reserve its space with a skeleton/placeholder
    to prevent content shifting when data arrives
```

### C4. Image optimization

```
□ Format: Use WebP as the primary format (better compression than PNG/JPG)
  - Fallback: provide JPEG/PNG for browsers that don't support WebP (though coverage is >95% in 2026)
□ Compression: compress all images before upload — target <100KB for UI images, <200KB for hero
□ Dimensions: serve images at the size they are displayed — do not serve 2000px wide images
  displayed at 400px
□ Lazy loading: apply loading="lazy" to all below-the-fold images
□ Preload: apply <link rel="preload"> to the hero/LCP image only
□ Alt text: required on all non-decorative images (see Section E below)
□ Filename: descriptive filenames (fasalo-mandi-comparison-tool.webp, not image-001.webp)
□ No text inside images for SEO-important content (text in images is not indexed)
```

### C5. JavaScript & rendering

```
□ Core content (H1, meta, key copy) must be server-side rendered or in the initial HTML
  — not rendered only via JavaScript after page load
  Reason: Although Googlebot can execute JavaScript, delays in JS rendering reduce crawl budget
  and can cause indexing lag. The main crop name, price data context, and CTAs should be in 
  the HTML source.

□ The "Find Best Market" tool widget can be JavaScript-powered — that is appropriate for 
  an interactive tool. But the surrounding page content (H1, intro text, FAQ, internal links) 
  must be in server-rendered HTML.

□ Third-party scripts (analytics, chat, etc.) should be deferred or loaded asynchronously —
  do not block page rendering.

□ Check: view the page source (Ctrl+U) and confirm that H1, title, meta description, 
  and key body copy appear in the raw HTML source, not only after JS execution.
```

### C6. Structured data / schema implementation

See Section D for the full schema specification.

### C7. Additional technical items

```
□ Favicon: present (confirmed on live site — retain)
□ 404 page: must exist, must be user-friendly, must return HTTP 404 status code 
  (not 200 for a "not found" page — a "soft 404" is a technical SEO error)
□ Redirects: if any URLs change during development, implement 301 redirects 
  from old URL to new URL — never leave broken links
□ Language attribute: <html lang="en"> on EN pages, <html lang="hi"> on HI, 
  <html lang="mr"> on MR (see Phase 2 multilingual plan)
□ Breadcrumbs: recommended on crop pages and location pages 
  (e.g., Home > Crops > Tomato) — both visible to users and in schema (see Section D)
```

---

## Section D — Schema / Structured Data Strategy

### D1. Important 2026 context on FAQPage schema

🔵 **Confirmed by research:** Google removed FAQ rich results for most websites in May 2026. FAQPage schema no longer produces the accordion-style search result appearance for standard websites.

🟡 **Recommendation:** Still implement FAQPage schema on crop pages and pillar pages where genuine FAQ sections exist, because:
- The schema helps Google understand the page's topic and question-answer structure
- It may contribute to AI Overview/SGE citations (unconfirmed but plausible)
- It does not harm rankings or cause errors
- Future rich result reinstatement is possible

But do not build FAQ content primarily to chase a rich result — build it because the questions are genuinely useful to farmers.

---

### D2. Schema types recommended for Fasalo

Only schema types genuinely appropriate to what Fasalo is and does. No invented reviews, ratings, prices, certifications, or affiliations.

---

#### Organization schema
**Where:** Homepage `<head>` or in a `<script type="application/ld+json">` block
**Purpose:** Establishes Fasalo as a known entity in Google's knowledge graph

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Fasalo",
  "url": "https://[FINAL-DOMAIN]/",
  "logo": "https://[FINAL-DOMAIN]/logo.png",
  "description": "AI-powered market intelligence platform helping Indian farmers find the best market to sell their crops.",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer support",
    "url": "https://[FINAL-DOMAIN]/contact"
  },
  "sameAs": []
}
```
🔴 Replace [FINAL-DOMAIN] throughout. Add social media profile URLs to "sameAs" once those exist.
🔴 Do NOT add awards, certifications, partnerships, or government affiliations unless factually verifiable.

---

#### WebSite schema with SearchAction
**Where:** Homepage
**Purpose:** Enables a Google Sitelinks Search Box (if Google chooses to show it)

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Fasalo",
  "url": "https://[FINAL-DOMAIN]/",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://[FINAL-DOMAIN]/find-best-market?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
```
🟡 Only implement the SearchAction if the site has a working search or find-by-crop feature at a stable URL. Skip if the tool doesn't support URL-based querying.

---

#### WebPage schema
**Where:** Every major page (homepage, pillar pages, crop pages, location pages)
**Purpose:** Clarifies page type and primary topic for Google

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Tomato Mandi Price — Find Best Market to Sell Your Tomatoes",
  "description": "Compare tomato mandi prices across nearby markets. Fasalo helps you estimate transport cost and find the best APMC to sell your tomatoes for maximum profit.",
  "url": "https://[FINAL-DOMAIN]/crop/tomato",
  "inLanguage": "en",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Fasalo",
    "url": "https://[FINAL-DOMAIN]/"
  }
}
```
Adjust `@type` to `AboutPage` for /about, `ContactPage` for /contact.

---

#### BreadcrumbList schema
**Where:** All crop pages, location pages, blog articles
**Purpose:** Enables breadcrumb display in search results; helps Google understand site structure

Example for `/crop/tomato`:
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://[FINAL-DOMAIN]/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Crop Prices",
      "item": "https://[FINAL-DOMAIN]/crop-prices"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Tomato",
      "item": "https://[FINAL-DOMAIN]/crop/tomato"
    }
  ]
}
```

---

#### Article schema
**Where:** All blog articles
**Purpose:** Signals content type, enables article-style rich results, supports E-E-A-T signals

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Why the Nearest Mandi Is Not Always the Best Mandi",
  "description": "Farmers often assume the closest market is the best choice. Here is why transport cost, demand, and arrivals can change that calculation.",
  "image": "https://[FINAL-DOMAIN]/images/blog/nearest-mandi-vs-best-mandi.webp",
  "author": {
    "@type": "Organization",
    "name": "Fasalo"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Fasalo",
    "logo": {
      "@type": "ImageObject",
      "url": "https://[FINAL-DOMAIN]/logo.png"
    }
  },
  "datePublished": "YYYY-MM-DD",
  "dateModified": "YYYY-MM-DD",
  "inLanguage": "en",
  "url": "https://[FINAL-DOMAIN]/blog/nearest-mandi-vs-best-mandi"
}
```

---

#### FAQPage schema
**Where:** Crop pages (where FAQ sections exist), pillar pages with genuine Q&A sections
**Purpose:** Structural signal to Google; potential AI Overview citation source

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I find the best mandi to sell my tomatoes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enter your location, the quantity of tomatoes you want to sell, and your planned selling date in Fasalo. The tool compares nearby mandi prices and estimates your transport cost to recommend the market where you will earn the most after all costs."
      }
    },
    {
      "@type": "Question",
      "name": "Why do tomato prices vary between different mandis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tomato prices differ between mandis based on how much produce arrives that day (arrivals), local buyer demand, cold storage availability, and distance from major production areas. A mandi with fewer arrivals and strong buyer demand will typically offer a higher price."
      }
    }
  ]
}
```

🟡 Rules for FAQPage schema implementation:
- Questions and answers must be visible on the page — do not add schema for hidden content
- Each answer must be complete and useful, not a vague redirect to "contact us"
- Do not add fake questions just to have schema — minimum 3 questions, maximum ~8 per page
- Separate JSON-LD blocks needed per language page

---

#### SoftwareApplication schema
**Where:** Homepage or /find-best-market (the tool page)
**Purpose:** Communicates that Fasalo is a software tool, not just an editorial website

🟡 Use with care — only include properties that are genuinely true:

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Fasalo",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "INR"
  },
  "description": "AI-powered market selection tool for Indian farmers. Compare nearby mandi prices, estimate transport cost, and get a recommendation on where to sell your crop for maximum profit."
}
```

🔴 Do NOT add:
- `aggregateRating` — no verified reviews or ratings exist
- `downloadUrl` — no app download exists currently
- Any government affiliation or certification not factually confirmed

---

### D3. Schema implementation rules

```
□ All schema in JSON-LD format inside <script type="application/ld+json"> tags
□ Place in <head> or at end of <body> — both are acceptable to Google
□ One JSON-LD block per schema type per page (can combine into one block if needed)
□ Validate every schema using Google's Rich Results Test after implementation
□ Do not duplicate: if Organization schema is on homepage, do not repeat it identically on every page
□ Schema must match visible on-page content — do not mark up information not shown to users
□ Language pages need their own schema blocks with localized text
```

---

## Section E — Image SEO Guidelines

### E1. Naming conventions

| Page type | Example filename |
|---|---|
| Homepage hero | `fasalo-mandi-price-comparison-tool.webp` |
| Crop — Tomato | `tomato-mandi-price-maharashtra.webp` |
| Crop — Cotton | `cotton-mandi-price-nagpur.webp` |
| Blog hero | `nearest-mandi-vs-best-mandi-farmer.webp` |
| Location — Nashik | `nashik-apmc-mandi-onion-price.webp` |
| About page | `fasalo-team-agricultural-market-intelligence.webp` |
| Logo | `fasalo-logo.svg` (SVG preferred for logos) |

Rules:
- Lowercase, words separated by hyphens
- Descriptive — describes the image subject, not the page
- Includes a keyword where it fits naturally — not forced
- Never: `image001.jpg`, `IMG_20240901.png`, `screenshot.png`

### E2. Alt text guidelines per page type

| Page | Image | Alt text |
|---|---|---|
| Homepage | Hero illustration | `Farmer checking mandi prices on mobile with Fasalo` |
| Homepage | Tool UI screenshot | `Fasalo tool showing mandi price comparison for cotton in Nagpur` |
| /crop/tomato | Tomato photo | `Tomato harvest ready for mandi sale in Maharashtra` |
| /crop/onion | Onion photo | `Onion farmer comparing prices at Lasalgaon APMC mandi` |
| /crop/cotton | Cotton photo | `Cotton crop harvest in Vidarbha awaiting transport to mandi` |
| /maharashtra | Map or mandi image | `APMC mandi market yard in Maharashtra` |
| Blog | Article hero | Describe what is in the image specifically — not the article title |
| Logo | Logo | `Fasalo logo` — brief, not keyword-stuffed |
| Decorative icons | Small UI icons | `alt=""` (empty alt, not missing — empty means "decorative, skip") |

Alt text rules:
- Describes what the image actually shows — not a keyword list
- Under 125 characters
- No "image of" or "picture of" — just describe the subject
- Decorative images (background patterns, dividers): `alt=""` (explicitly empty, not absent)
- Never repeat the exact same alt text on multiple images

### E3. Format & compression targets

| Image type | Format | Target file size |
|---|---|---|
| Hero / banner | WebP | < 150KB |
| Crop photos | WebP | < 100KB |
| Blog article hero | WebP | < 120KB |
| Icons / small UI | SVG (if vector) or WebP | < 20KB |
| Logo | SVG | < 10KB |
| OG image (og:image) | PNG or JPG | < 200KB, exactly 1200×630px |

Tools for compression: Squoosh (free, browser-based), ImageOptim, or build-step optimization (Sharp for Node.js environments). Vercel supports image optimization via `next/image` if the project is Next.js.

---

## Section F — About / Contact / Privacy Policy / Terms — SEO & Trust Requirements

These four pages are confirmed as real standalone pages. Specifications:

### /about

```
Title: About Fasalo — AI-Powered Market Intelligence for Farmers
Meta description: Learn how Fasalo helps Indian farmers find the best mandi to sell their 
  crops using market price comparison and transport cost estimation.
H1: About Fasalo
Content must include:
  - What Fasalo does (honest, no overclaiming)
  - Who built it and why (genuine story builds E-E-A-T)
  - How the recommendation logic works at a high level
  - Honest statement about data: what Fasalo shows and what it does not currently claim
    (🔴 this section updates when real data pipeline is confirmed)
  - Contact information or link to /contact
Schema: Organization (same as homepage) + AboutPage WebPage type
```

### /contact

```
Title: Contact Fasalo
Meta description: Get in touch with the Fasalo team for questions, feedback, or support.
H1: Contact Us
Content: Working contact form OR email address (at least one must be real)
  — An empty /contact page is worse than no /contact page from a trust perspective
Schema: ContactPage WebPage type
Note: Google's privacy policy guidelines require a real contact method for sites 
  that collect user location data (which Fasalo does via "Detect My Location")
```

### /privacy-policy

```
Title: Privacy Policy — Fasalo
Meta description: (can be brief — this page is rarely searched for directly)
H1: Privacy Policy
Content: Must cover (at minimum):
  - What data is collected (location, crop selections, usage data)
  - How it is used
  - Whether it is shared with third parties
  - User rights
  - Contact for privacy concerns
Note: 🔴 REQUIRED — Fasalo's "Detect My Location" feature collects geolocation data.
  A real privacy policy is legally required in India under the Digital Personal Data 
  Protection Act 2023 (DPDPA), and required by Google's own policies for indexed sites
  that collect personal data. This is not optional.
robots: index, follow (privacy pages should be indexable — hiding them looks suspicious)
```

### /terms

```
Title: Terms of Service — Fasalo
Meta description: (brief)
H1: Terms of Service
Content: Must cover (at minimum):
  - Nature of the service (market information tool, not financial advice)
  - Disclaimer: prices shown are for reference; Fasalo is not liable for selling decisions
    made based on this information
  - User responsibilities
  - Intellectual property
Note: The disclaimer about prices is especially important given that the current 
  price data is demo/static — users should not make real financial selling decisions 
  based on demo data. The Terms page is where this is legally documented.
```

---

## Phase 3 → Phase 4 handoff

Phase 3 is complete. Everything above is a dev-ready specification.

**Phase 4** covers:
- Blog topic list (prioritized)
- Full-length priority blog articles (written in full — English first)
- FAQ bank (all 8 crops + mandi intelligence + tool questions)

One question before Phase 4: How many full-length blog articles do you want written in Phase 4?

Options:
- **3 articles** (highest priority only — recommended for first pass)
- **5 articles** (solid content foundation)
- **All priority articles** (more comprehensive, more output per session)

Each article will be 800–1,200 words, fully written (not outlined), with proper H2/H3 structure, natural CTAs, and FAQ section. Hindi/Marathi versions are part of Phase 6's compiled document.
