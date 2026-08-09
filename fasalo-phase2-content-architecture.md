# Fasalo SEO — Phase 2: Content Architecture

**Builds on:** Phase 1 keyword map (confirmed locked)
**Confirmed inputs:** Maharashtra = initial location focus | Rice + Paddy/Dhan both targeted | Price data = demo/static, no live/gov claims
**Domain:** Current staging URL treated as working reference; canonical/final-domain steps marked 🔴 PENDING

---

## Labeling key

- 🟢 VERIFIED FACT — from live site or official government source
- 🔵 RESEARCH FINDING — from web research
- 🟡 RECOMMENDATION — strategic suggestion
- 🔴 ASSUMPTION / NEEDS VERIFICATION or PENDING

---

## Section A — Content Cluster Architecture

Fasalo needs topical authority across three interconnected topic areas. The architecture below is built around what the live site *actually does* (market-selection, transport-aware recommendation, 8 confirmed crops), not what it might do in future.

### The three authority domains

```
DOMAIN 1: Mandi Intelligence
  ↳ What is a mandi? How APMC markets work
  ↳ How to compare mandis
  ↳ Transport cost and its effect on profit
  ↳ Maharashtra APMC network
  ↳ Government data sources (Agmarknet, eNAM) — educational, not claiming Fasalo pulls from them

DOMAIN 2: Crop Selling Decisions
  ↳ One page per supported crop (8 total currently)
  ↳ Sell Now vs Wait — what drives the decision
  ↳ Quantity and seasonal timing
  ↳ MSP context per crop

DOMAIN 3: AI-Powered Market Tools
  ↳ How Fasalo's recommendation works
  ↳ What "AI market analysis" means in plain farmer language
  ↳ Difference between a raw price portal and a decision tool
  ↳ Data transparency (what Fasalo shows and what it does not claim)
```

---

### Cluster 1 — Mandi Prices (Pillar)

**Pillar page:** `/mandi-prices` — "Mandi Prices in India: What Farmers Need to Know"
**Target primary keyword:** mandi price, mandi bhav
**Intent:** Informational → Commercial bridge

| Page | Type | Primary Keyword | Relationship to pillar |
|---|---|---|---|
| Mandi prices in India (pillar) | Pillar | mandi price today | Anchor |
| Maharashtra mandi prices | Location page | Maharashtra mandi bhav | Child |
| Nagpur mandi price | Location sub-page | Nagpur mandi rate | Child |
| Pune APMC price | Location sub-page | Pune mandi bhav | Child |
| How to read a mandi price table | Blog | how to check mandi bhav | Supporting |
| Mandi price vs retail price | Blog | mandi rate vs retail price | Supporting |

**Internal linking rule:** Every crop page links back to this pillar under anchor "check mandi prices."

---

### Cluster 2 — Mandi Comparison & Best Market (Pillar)

**Pillar page:** `/find-best-market` — "How to Find the Best Market to Sell Your Crop"
**Primary keyword:** best market to sell crop, mandi price comparison
**Intent:** Commercial/Transactional

This is Fasalo's core product page. The pillar is simultaneously the tool entry point and the educational anchor.

| Page | Type | Primary Keyword | Relationship to pillar |
|---|---|---|---|
| How to compare mandis (pillar) | Pillar + Tool | mandi price comparison | Anchor |
| Transport cost calculator explanation | Blog/Feature | transport cost mandi | Child |
| What is APMC market? | Blog | APMC market meaning | Supporting |
| Nearest mandi — how to find | Blog | nearest mandi | Supporting |
| How to choose mandi for cotton | Blog | best mandi for cotton Maharashtra | Supporting |

---

### Cluster 3 — Crop Prices (8-crop pillar cluster)

**Pillar page:** `/crop-prices` — "Today's Crop Prices: Compare Rates Before You Sell"
**Primary keyword:** crop price today India
**Intent:** Informational → Transactional

Each of the 8 supported crops becomes a child page. Cluster 3 is a hub:

```
/crop-prices (hub)
  ├── /crop/tomato
  ├── /crop/onion
  ├── /crop/potato
  ├── /crop/cotton
  ├── /crop/soybean
  ├── /crop/rice-paddy
  ├── /crop/wheat
  └── /crop/sugarcane
```

See Section B for the detailed crop-page framework.

---

### Cluster 4 — Sell Now or Wait (Decision Support)

**Pillar page:** `/sell-now-or-wait` — "Sell Now or Wait? How to Decide the Right Time to Sell Your Crop"
**Primary keyword:** best time to sell crop, sell crop now or wait
**Intent:** Informational → Commercial
**Differentiator:** This is Fasalo's *actual* unique angle — the decision layer on top of price data. No other cluster establishes this ownership as clearly.

| Page | Type | Primary Keyword |
|---|---|---|
| Sell now or wait (pillar) | Pillar | best time to sell crop |
| How AI recommends best mandi | Blog | AI mandi recommendation |
| Understanding demand signals in mandi | Blog | mandi demand meaning |
| Price trends — what they mean for farmers | Blog | mandi price trend |
| Why prices vary between nearby mandis | Blog | why mandi prices are different |

---

### Cluster 5 — APMC & Government Markets

**Pillar page:** `/apmc-markets` — "What is an APMC Market? A Farmer's Guide"
**Primary keyword:** APMC market, APMC mandi
**Intent:** Informational/Educational
**Purpose:** E-E-A-T and trust-building; references Agmarknet and eNAM as educational context (does not claim Fasalo integrates with them until confirmed)

| Page | Type | Primary Keyword |
|---|---|---|
| What is APMC (pillar) | Pillar | APMC market meaning |
| Agmarknet explained for farmers | Blog | what is Agmarknet |
| eNAM portal guide | Blog | what is eNAM |
| MSP vs mandi price — difference | Blog | MSP vs mandi rate |
| How APMC auction works | Blog | APMC auction process |

---

### Cluster 6 — Maharashtra Agriculture (Location Cluster)

**Pillar page:** `/maharashtra` — "Maharashtra Mandi Prices: Find Best Markets in Your State"
**Primary keyword:** Maharashtra mandi price, Maharashtra mandi bhav
**Intent:** Local/Transactional
**Scope:** Maharashtra-first, per confirmed strategy; other states added as Fasalo's confirmed coverage expands

🔵 Confirmed context from research: Maharashtra has 295 APMCs, 446 APMC markets tracked on Agmarknet. Major mandis include Lasalgaon (Asia's largest onion market), Pune APMC, Nagpur APMC, Nashik, Akola.

| Page | Type | Primary Keyword |
|---|---|---|
| Maharashtra mandi prices (pillar) | Pillar | Maharashtra mandi bhav |
| Nashik mandi price | Location child | Nashik mandi rate |
| Nagpur mandi price | Location child | Nagpur mandi bhav |
| Pune APMC price | Location child | Pune APMC rate |
| Vidarbha cotton market guide | Blog | cotton market Vidarbha |
| Onion market Lasalgaon | Blog | Lasalgaon onion price |

🟡 **Location page rule (from Phase 1 brief):** Each location page must provide genuinely useful information — actual districts, crop specializations, major mandi names — not just a city-name swap on a template. Minimum viable content per location page:
- Which crops are primarily traded at that location
- Key mandi/APMC names in that area
- Seasonal arrival patterns
- How to use Fasalo to find the best nearby market from that location
- **No fabricated prices, no unverified "live data" claims**

---

### Cluster 7 — AI for Farmers (Trust + Product)

**Pillar page:** `/how-it-works` — "How Fasalo Works: AI-Powered Market Recommendations Explained"
**Primary keyword:** AI mandi price prediction, AI farming tool India
**Intent:** Informational/Trust

🟡 **Important framing note:** Until Fasalo's data pipeline is confirmed, the "How It Works" page should describe the *logic* and *process* clearly — enter location + crop + quantity + date → system analyzes available market price data + estimates transport cost → recommends best net-profit market — without implying real-time government data feed or a trained ML model unless these are confirmed real implementations. Honest transparency here is itself an SEO and trust asset.

---

### Cluster 8 — Farmer Selling Decisions (Educational Hub)

**Pillar:** `/selling-guide` — "A Farmer's Guide to Selling Crops at the Right Price"
**Primary keyword:** how to sell crop at best price
**Intent:** Informational
**Role:** Long-tail magnet; captures research-phase farmers who don't yet know Fasalo exists

| Page | Type |
|---|---|
| How to negotiate price at mandi | Blog |
| What is modal price vs minimum price | Blog |
| How mandi commission (arhat) works | Blog |
| When to hold stock and when to sell | Blog |
| What factors affect crop price at mandi | Blog |

---

### Cluster Summary Table

| # | Cluster Name | Pillar URL | Core Intent | Priority |
|---|---|---|---|---|
| 1 | Mandi Prices | /mandi-prices | Informational | High |
| 2 | Best Market / Comparison | /find-best-market | Commercial | High — core product |
| 3 | Crop Prices | /crop-prices | Transactional | High |
| 4 | Sell Now or Wait | /sell-now-or-wait | Commercial/Decision | High — differentiator |
| 5 | APMC & Gov Markets | /apmc-markets | Informational/Trust | Medium |
| 6 | Maharashtra | /maharashtra | Local | High — initial geo |
| 7 | AI for Farmers | /how-it-works | Trust/Product | Medium |
| 8 | Farmer Selling Guide | /selling-guide | Educational | Medium |

---

## Section B — Crop Page Framework (8 confirmed crops)

### Standard template (applies to 7 of 8 crops)

Each crop page at `/crop/[crop-name]` uses this framework. Sugarcane has a modified template (see below).

**URL pattern:** `/crop/tomato`, `/crop/onion`, `/crop/wheat` etc.

**Page structure:**

```
<title> [Crop] Mandi Price Today | Best Market to Sell [Crop] | Fasalo</title>
<meta description> Check today's [crop] mandi prices across nearby markets. 
  Fasalo helps you compare rates, estimate transport cost, and find the 
  best APMC to sell your [crop] for maximum profit.
</meta description>

H1: [Crop] Mandi Price — Find the Best Market to Sell Your Harvest

Intro paragraph (3–4 sentences):
  — What drives [crop] prices (supply, season, demand)
  — Why price varies between mandis
  — Natural CTA to use the Fasalo tool

[Fasalo tool widget embedded / linked]

H2: Today's [Crop] Price Overview
  — Honest statement about data: "Prices shown are for comparison guidance. 
    Always verify the actual rate at your chosen mandi before transporting."
  — 🔴 NO LIVE PRICE CLAIMS until real data source is confirmed

H2: Why [Crop] Prices Differ Between Mandis
  — Arrivals and supply at that market
  — Local demand and buyer presence
  — Transport infrastructure
  — Storage and cold-chain availability

H2: How to Choose the Best Mandi to Sell Your [Crop]
  — Net profit = mandi price minus transport cost
  — Fasalo's approach: compare nearby markets, factor in distance
  — Step-by-step for using the tool

H2: [Crop] Price Trends in Maharashtra
  — Seasonal patterns (kharif/rabi/zaid where relevant)
  — Which districts/mandis are primary markets for this crop
  — 🔴 No specific historical price figures without verified source

H2: Frequently Asked Questions
  — 4–6 FAQs (see FAQ bank in Phase 5)

H2: Nearby Mandis for [Crop] in Maharashtra
  — Named mandis relevant to that crop (research-confirmed, not invented)
  — CTA to Fasalo tool

Footer internal links:
  — → /crop-prices (hub)
  — → /find-best-market
  — → /maharashtra
  — → Other related crop pages
```

---

### Crop-by-crop specifications

#### Tomato (`/crop/tomato`)

| Field | Value |
|---|---|
| Primary keyword | tomato mandi price today |
| Secondary keywords | tamatar bhav, tomato price Maharashtra, best mandi to sell tomato, tamatar ka bhav aaj |
| Hindi variants | टमाटर का भाव आज, टमाटर मंडी रेट |
| Marathi variants | टोमॅटो आजचा भाव, टोमॅटो बाजार भाव |
| H1 | Tomato Mandi Price — Find Best Market to Sell Your Tomatoes |
| Key seasonal context | 🔵 High volatility crop — research confirms prices swing sharply due to seasonal gluts and supply shocks. Major supply centres include Nashik (Maharashtra), Narayangaon (Pune district) |
| Primary mandis (Maharashtra) | Pune APMC, Nashik, Narayangaon |
| MSP | None — horticultural crop, no government MSP |
| Special note | Tomato's extreme price volatility (can swing ₹10–₹60/kg in weeks per research findings) makes it ideal for the "Sell Now or Wait" angle — use this in intro |

#### Onion (`/crop/onion`)

| Field | Value |
|---|---|
| Primary keyword | onion mandi price today |
| Secondary keywords | pyaaz ka bhav, kanda bhaav, Lasalgaon onion price, onion rate Maharashtra |
| Hindi variants | प्याज का भाव आज, प्याज मंडी रेट |
| Marathi variants | कांदा आजचा भाव, कांदा बाजारभाव |
| H1 | Onion Mandi Price — Find the Best Market to Sell Your Onions |
| Key seasonal context | 🔵 Politically sensitive crop with national price impact. Lasalgaon (Nashik) is Asia's largest onion market and sets the national price trend. Two seasons: Kharif onion (Oct–Nov) and Rabi onion (Mar–Jun, the main season) |
| Primary mandis (Maharashtra) | Lasalgaon APMC (Nashik), Pimpalgaon, Nandgaon, Manmad, Pune APMC |
| MSP | None — horticultural crop |
| Special note | High news/informational search volume around price spikes. A seasonal news blog type ("Onion prices rising — when to sell?") is valuable for this crop specifically |

#### Potato (`/crop/potato`)

| Field | Value |
|---|---|
| Primary keyword | potato mandi price today |
| Secondary keywords | aloo ka bhav, batata bhaav, potato rate today |
| Hindi variants | आलू का भाव आज, आलू मंडी रेट |
| Marathi variants | बटाटा आजचा भाव |
| H1 | Potato Mandi Price — Find Best Market for Your Potato Harvest |
| Key seasonal context | 🔵 Rabi crop; major harvest February–April. Cold storage plays a significant role — farmers who can store often get better prices in lean months |
| Primary mandis (Maharashtra) | Pune APMC, Nashik, Mumbai (Vashi) |
| MSP | None — horticultural crop |

#### Cotton (`/crop/cotton`)

| Field | Value |
|---|---|
| Primary keyword | cotton mandi price today |
| Secondary keywords | kapas bhav, cotton rate today Maharashtra, cotton mandi Nagpur, BT cotton price |
| Hindi variants | कपास का भाव आज |
| Marathi variants | कापूस आजचा भाव, कापूस मंडी भाव |
| H1 | Cotton Mandi Price — Best Market to Sell Your Cotton |
| Key seasonal context | 🔵 Kharif crop; harvest Oct–Feb. Major crop in Vidarbha (Nagpur, Yavatmal, Akola, Amravati). MSP announced annually by Government of India |
| Primary mandis (Maharashtra) | Nagpur APMC, Yavatmal, Akola, Amravati, Hinganghat |
| MSP | 🟢 Yes — Cotton has government MSP (Fair Average Quality grade); actual mandi price may be above or below MSP depending on season and demand. Always note the distinction |
| Special note | This crop is on Fasalo's own homepage (Cotton, Nagpur, ₹8,120 in demo). Natural anchor crop for Maharashtra-first positioning |

#### Soybean (`/crop/soybean`)

| Field | Value |
|---|---|
| Primary keyword | soybean mandi price today |
| Secondary keywords | soya bhav, soyabean rate today, soybean price Maharashtra MP |
| Hindi variants | सोयाबीन का भाव आज |
| Marathi variants | सोयाबीन आजचा भाव |
| H1 | Soybean Mandi Price — Find Best Market to Sell Your Soybean |
| Key seasonal context | 🔵 Kharif crop; harvest October–November. Maharashtra and Madhya Pradesh are the two largest producers. Price sensitive to edible oil import policy and international prices |
| Primary mandis (Maharashtra) | Latur APMC, Nanded, Akola, Amravati |
| MSP | 🟢 Yes — Soybean has government MSP |

#### Rice / Paddy (`/crop/rice-paddy`)

| Field | Value |
|---|---|
| URL | /crop/rice-paddy (single page targeting both terms) |
| Primary keyword | paddy mandi price today |
| Secondary keywords | dhan bhav, rice mandi rate, paddy price today, dhan mandi rate |
| Hindi variants | धान का भाव आज, धान मंडी रेट |
| Marathi variants | भात आजचा भाव, धान बाजारभाव |
| H1 | Paddy (Rice) Mandi Price — Find Best Market to Sell Your Harvest |
| Key seasonal context | 🔵 Kharif crop; harvest Oct–Dec. The farmer sells "paddy" (raw/unmilled); consumer buys "rice" (milled). SEO must use both terms — farmer search is "dhan bhav" / "paddy price," not "rice price" |
| Primary mandis (Maharashtra) | Gondia, Bhandara, Nagpur, Chandrapur |
| MSP | 🟢 Yes — Paddy has government MSP (Common and Grade A) |
| Special note | 🟡 H1 should say "Paddy (Rice)" — acknowledges both the farmer's word and the consumer's word in one natural phrase |

#### Wheat (`/crop/wheat`)

| Field | Value |
|---|---|
| Primary keyword | wheat mandi price today |
| Secondary keywords | gehu bhav, wheat rate today, gehu mandi rate, wheat price Maharashtra |
| Hindi variants | गेहूं का भाव आज, गेहूं मंडी रेट |
| Marathi variants | गहू आजचा भाव |
| H1 | Wheat Mandi Price — Find Best Market to Sell Your Wheat |
| Key seasonal context | 🔵 Rabi crop; harvest March–May. Primarily grown in MP, Punjab, Haryana — Maharashtra is not a large producer, but some Vidarbha and Marathwada farmers grow it. MSP is one of the most closely watched in Indian agriculture |
| Primary mandis (Maharashtra) | Latur, Nanded, Aurangabad |
| MSP | 🟢 Yes — Wheat has government MSP; FCI procures directly at MSP in major states |
| Special note | 🟡 Wheat may see lower Fasalo tool engagement from Maharashtra farmers compared to cotton/soybean/onion, but high national keyword volume makes it worth targeting. Frame page around MSP awareness + comparison for non-MSP procurement mandis |

---

#### Sugarcane — Modified Template (`/crop/sugarcane`)

🟡 **Why this crop is different — and why the page must reflect it:**

🔵 Confirmed by research: Sugarcane in Maharashtra is primarily sold to sugar mills, not at open APMC auction. The government sets the **FRP (Fair and Remunerative Price)** each season — the mandatory minimum that mills must pay farmers. Mills pay in instalments. This is structurally different from all other 7 crops where the farmer chooses *which mandi* to sell at. A Fasalo tool that says "Find Best Market to Sell Sugarcane" could mislead sugarcane farmers if the feature isn't actually designed for this crop.

**Recommended approach:**

Option A (🟡 Preferred if Fasalo supports it): The sugarcane page honestly explains FRP + mill-based selling AND shows how Fasalo can help a sugarcane farmer understand *when* the price is above FRP and whether any APMC market (for direct sale) is better than mill price.

Option B (safe minimum): The page is informational — "Sugarcane Price and FRP Guide for Maharashtra Farmers" — without a "Find Best Market" CTA, since the tool may not be calibrated for mill-based selling. Add a note: "Looking for the best market for cotton or soybean instead? [link]"

**Confirm with Fasalo team:** Does the current tool actually provide a meaningful mandi-comparison recommendation for sugarcane, or is the crop listed as a UI placeholder? 🔴

| Field | Value |
|---|---|
| URL | /crop/sugarcane |
| Primary keyword | sugarcane price today, ganna bhav, FRP sugarcane |
| H1 | Sugarcane Price in Maharashtra — FRP, Mill Rates & Selling Guide |
| Key context | 🔵 Maharashtra has 183 cooperative and private sugar mills; FRP set centrally by government; mills pay in instalments |
| Special note | Do NOT use the same "Find Best Market" CTA as other crops until the product's sugarcane behavior is confirmed |

---

## Section C — Mandi / Market SEO Strategy

### URL structure for market pages

```
/maharashtra                        ← State pillar
  /maharashtra/nashik               ← District
  /maharashtra/nagpur               ← District
  /maharashtra/pune                 ← District
  /maharashtra/nashik/lasalgaon     ← Specific mandi (only if Fasalo covers it)
```

🟡 **Do not build district or specific-mandi pages until Fasalo can confirm those markets are actually in the tool's recommendation set.** An empty location page that doesn't resolve to a working tool result destroys trust and is a thin-content signal to Google.

### Minimum viable content for each location page

Every location page must contain:
1. Which crops are primarily traded in that location (research-backed, not invented)
2. Key APMC market names (verified, not invented)
3. Seasonal arrival calendar for that region
4. How to use Fasalo to compare nearby markets from that area
5. Honest data disclaimer: "Prices shown are for guidance. Verify at your mandi before transporting."
6. Internal links to relevant crop pages

### The transport-cost SEO angle

🟡 This is Fasalo's single most defensible keyword angle because no competitor reviewed in Phase 1 explicitly owns "transport cost + mandi price" as a content cluster.

Target keywords:
- transport cost mandi calculation
- nearest mandi profit calculation
- which mandi is best after transport cost
- mandi distance profit comparison

Content to create:
- Blog: "Why the Nearest Mandi Is Not Always the Best Mandi"
- Blog: "How to Calculate Real Profit After Transport Cost"
- Feature explainer page: "How Fasalo Estimates Transport Cost"

---

## Section D — Multilingual SEO Plan (EN / HI / MR)

### Architecture recommendation

**Recommended URL structure:**

```
/                          ← English (canonical)
/hi/                       ← Hindi
/mr/                       ← Marathi
```

So: `/crop/tomato` in English → `/hi/crop/tomato` in Hindi → `/mr/crop/tomato` in Marathi.

🟡 Alternative is subdomains (`hi.fasalo.com`), but subdirectory is simpler for a product at this stage and keeps SEO authority consolidated on one domain. Decide before final domain is set. 🔴 PENDING final domain.

### hreflang implementation

Every page must include `hreflang` tags in `<head>`:

```html
<link rel="alternate" hreflang="en" href="https://[domain]/crop/tomato" />
<link rel="alternate" hreflang="hi" href="https://[domain]/hi/crop/tomato" />
<link rel="alternate" hreflang="mr" href="https://[domain]/mr/crop/tomato" />
<link rel="alternate" hreflang="x-default" href="https://[domain]/crop/tomato" />
```

`x-default` should point to the English version (the language-selector is already on the homepage).

### Language-specific content rules

These are not translations. They are localizations.

**Hindi — simple, everyday farmers' Hindi:**
- Use "भाव" (bhav) not "मूल्य" (mulya) — "bhav" is what farmers actually say
- Use "मंडी" not "बाजार" for the trading market context
- Use "किसान" not "कृषक" — "kisan" is the everyday word
- Use "फसल" for crop (common), "पैदावार" for harvest
- Avoid Sanskritized constructions — "उचित प्रतिफल" (uCHit pratifal) → use "अच्छा दाम" (achcha daam) for "fair price"
- Sample H1 in Hindi: "टमाटर का आज का मंडी भाव — सबसे अच्छी मंडी ढूंढें" (not: "टमाटर के वर्तमान बाजार मूल्य की जानकारी")

**Marathi — simple, everyday Marathi:**
- Use "भाव" for price (same as Hindi, farmers use this)
- "मंडी" or "बाजार" — both are used in Maharashtra farming contexts; "बाजार" is also natural in Marathi
- Use "शेतकरी" for farmer (not "कृषक")
- Use "पीक" for crop (common Marathi word)
- Avoid overly formal written Marathi; mirror how farmers in Nashik or Vidarbha actually speak
- Sample H1 in Marathi: "टोमॅटो आजचा मंडी भाव — सर्वोत्तम बाजार शोधा"

### What must be translated (minimum viable)

| Content | EN | HI | MR | Priority |
|---|---|---|---|---|
| Title tags | ✅ | ✅ | ✅ | Critical |
| Meta descriptions | ✅ | ✅ | ✅ | Critical |
| H1 and H2 headings | ✅ | ✅ | ✅ | Critical |
| FAQs | ✅ | ✅ | ✅ | High |
| Tool UI labels | ✅ | ✅ | ✅ | High |
| Crop page body copy | ✅ | ✅ | ✅ | High |
| Blog articles | ✅ | Priority blogs only | Priority blogs only | Medium |
| Schema (FAQPage) | ✅ | Separate schema per language | Separate schema per language | Medium |

### Duplicate-content prevention

- English, Hindi, Marathi pages are **separate URLs** with hreflang tags — Google treats them as distinct, correctly associated language versions. This is correct and safe.
- Do NOT use a single URL with JavaScript language-switching that returns the same URL for all languages — that creates duplicate-content and indexing problems.
- Each language page must have its own `<link rel="canonical">` pointing to itself (not to the English version).
- Sitemaps: submit a separate XML sitemap per language OR a combined sitemap with all three URL sets, clearly structured.

---

## Section E — URL Architecture (Full Site Map Recommendation)

```
/                              Homepage (EN)
/find-best-market              Tool / core CTA page
/crop-prices                   Crop price hub
  /crop/tomato
  /crop/onion
  /crop/potato
  /crop/cotton
  /crop/soybean
  /crop/rice-paddy
  /crop/wheat
  /crop/sugarcane
/mandi-prices                  Mandi price pillar
/maharashtra                   Location pillar
  /maharashtra/nashik
  /maharashtra/nagpur
  /maharashtra/pune
/sell-now-or-wait              Decision pillar
/apmc-markets                  APMC education pillar
/how-it-works                  Product / AI explainer
/selling-guide                 Farmer selling guide hub
/blog                          Blog index
  /blog/[slug]
/about                         🔴 Currently anchor only — needs full page
/privacy-policy                🔴 Currently anchor only — needs full page
/terms                         🔴 Currently anchor only — needs full page
/contact                       🔴 Currently anchor only — needs full page
/sitemap.xml                   Technical requirement
/robots.txt                    Technical requirement

Hindi:
/hi/                           All above replicated under /hi/

Marathi:
/mr/                           All above replicated under /mr/
```

🔴 Pages marked "needs full page" (About, Privacy Policy, Terms, Contact) are currently anchors on the homepage. These are NOT optional for SEO or E-E-A-T — Google uses these as trust signals, and Privacy Policy + Terms are required for Google's own policies on tools that handle location data.

---

## Section F — Phase 2 Open Items (carry forward to Phase 3)

🔴 **Needs Fasalo team confirmation before Phase 3 page-level SEO:**

1. **Sugarcane tool behavior:** Does the "Find Best Market" tool actually generate a meaningful mandi recommendation for sugarcane, or is the crop a placeholder? Answer determines page CTA and framing.
2. **About, Privacy Policy, Terms, Contact:** Are these planned as real pages? They are required before launch from both a trust/SEO standpoint and a Google policy standpoint (location data collection requires a privacy policy).
3. **Final domain:** What will the permanent domain be? All canonical, hreflang, OG, and sitemap recommendations require it. 🔴 Mark as PENDING until confirmed.
4. **Crop page URLs:** Confirm `/crop/[name]` format is acceptable for the dev team before Phase 3 page-level spec is written.

---

## Phase 2 → Phase 3 handoff

Phase 3 will cover:
- Homepage SEO assets (title, meta, H1, OG, schema)
- On-page SEO checklist (applied to each page type)
- Technical SEO checklist
- Schema / structured data plan
- Image SEO guidelines

Ready to proceed on your confirmation of the Phase 2 open items above — or say "proceed with best judgment" and I'll document assumptions clearly and move forward.
