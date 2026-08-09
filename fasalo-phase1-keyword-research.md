# Fasalo SEO — Phase 1: Site Audit, Research Findings & Keyword Map

**Status:** Draft for review. Nothing in Phase 2+ (content clusters, pages, blogs) starts until this is signed off.
**Live site audited:** https://fasalo-etv5.vercel.app/ (confirmed staging/current live deployment, not final domain)

---

## 1. Labeling key (used throughout)

- 🟢 **VERIFIED FACT** — confirmed directly from the live Fasalo site or an official government source
- 🔵 **RESEARCH FINDING** — confirmed from web research (competitors, search results, third-party sources)
- 🟡 **RECOMMENDATION** — my strategic suggestion, not a fact
- 🔴 **ASSUMPTION / NEEDS VERIFICATION** — flagged, unconfirmed, do not treat as true

---

## 2. Site audit recap (locked from your confirmations)

🟢 Fasalo is a market-selection tool: farmer enters location, crop, quantity, selling date → gets a recommended mandi with a Sell Now / Good Choice / Wait style verdict.
🟢 Supported crops (only these 8 — treated as the current set, not expandable without confirmation): Tomato, Onion, Potato, Cotton, Soybean, Rice, Wheat, Sugarcane.
🟢 Stated pillars on-site: Government Mandi Data, AI Market Analysis, Smart Transport Estimation, Maximum Profit Recommendation.
🟢 Live languages: English, Hindi, Marathi. Coming soon: Gujarati, Tamil, Telugu, Kannada, Bengali, Punjabi.
🔴 Price data, "1,300+ markets across 15 states," and "94.7% AI Confidence" are **treated as UI/demo placeholders**, not verified facts, per your instruction — none of this will be used as a claim in SEO copy until you confirm the data source.
🔴 Weather Forecast is explicitly "Future integration" — excluded from current-state SEO scope.
🔴 `fasalo-etv5.vercel.app` is the current live URL but not confirmed as the permanent domain — all canonical/technical-domain recommendations in later phases will be marked pending final domain.
🔴 About / Privacy Policy / Terms / Contact are treated as sections/anchors, not confirmed as complete standalone pages, until verified.

---

## 3. Authoritative source landscape (for E-E-A-T later, verified now)

🟢 Agmarknet Portal (Government of India, under Ministry of Agriculture) links **4,367 mandis** nationwide and displays real-time price data; upgraded to "Agmarknet 2.0" in November 2025. Source: PIB press release, Dec 2025.
🟢 e-NAM (National Agriculture Market) has onboarded **1,522 mandis** and covers real-time prices for 247 notified commodities, with online bidding and e-payments. Source: same PIB release; corroborated by enam.gov.in.

This matters directly: Fasalo's on-site "1,300+ markets across 15 states" is *plausible in scale* next to Agmarknet/e-NAM's real numbers, but until Fasalo can show its actual data pipeline (e.g., "we pull from Agmarknet's public API"), no claim of "government-verified" or "real-time" should appear in metadata, headlines, or schema. This becomes a concrete to-do in the E-E-A-T phase — either wire up a real Agmarknet/e-NAM data source and disclose it, or reword the site/SEO copy to avoid overclaiming.

---

## 4. Competitive landscape (real, currently-ranking players)

🔵 Direct or adjacent competitors found ranking for mandi-price intent, with their apparent positioning:

| Site | Positioning | Notable pattern |
|---|---|---|
| commodityonline.com | "Today's Mandi Prices" — 200+ commodities, 2000+ markets | State + crop URL structure (e.g. `/mandiprices/onion/maharashtra`) |
| kisandeals.com | Live rates + "AI-driven price predictor," market comparison | Crop + specific-mandi long-tail pages at huge scale |
| mandipulse.com | Daily "highest/lowest price" news angle per mandi | News-style articles per price-spike event (fresh content engine) |
| mandibhav.in | "400 crops, 4000 mandis, AI Sell vs Wait predictions," route optimizer | Directly comparable to Fasalo's "Sell Now/Wait" framing; explicitly states it sources from Agmarknet + weather + an ML model — i.e., they disclose their data pipeline |
| farmer.in | Hindi+English state mandi bhav pages, MSP comparison indicator | Marks prices "at/above MSP ⚠️ below MSP," cites "Real Agmarknet rates. Source: Govt of India" directly on-page |
| ugaai.in | Hindi-first "आज का मंडी भाव" hub, per-crop and per-state | Bilingual crop names shown together (गेहूं/Wheat) — a pattern worth mirroring |

🟡 **Recommendation:** Fasalo's differentiator shouldn't be "we also show mandi prices" — that space is crowded and some competitors (mandibhav.in, farmer.in) already disclose real government data sourcing, which Fasalo currently cannot claim. Fasalo's actual differentiator per the live site is the **decision layer**: transport-cost-aware, quantity-aware, date-aware "best market for *your* harvest" recommendation — not just a price lookup. SEO content should lean into that decision-support angle rather than competing head-on for generic "today's mandi price" volume, where entrenched, data-verified competitors already dominate.

---

## 5. Real search-behavior findings

🔵 The dominant vernacular search pattern is **"[crop] bhav" / "[crop] price today" / "[crop] mandi rate,"** almost always combined with a state or mandi name (e.g., "Onion mandi price today in Maharashtra," "Haryana Mandi Bhav Today"). This is consistent across every competitor found.
🔵 Hindi-first hubs display bilingual crop names together (गेहूं का भाव / Wheat) rather than running separate English/Hindi silos — this is a real pattern, not a guess.
🔵 "Sell Now vs Wait" / AI price prediction framing is already an established category (mandibhav.in uses this almost verbatim), confirming genuine search and product-market interest in decision-support content, not just raw price tables.
🔵 News-style "price spike/drop today at [mandi]" content (mandipulse.com) is a distinct, high-frequency content pattern separate from static crop pages — useful for a blog/news content type later, not a core page type.

🔴 **No reliable public search-volume, keyword-difficulty, or CPC data was available to me.** I have not fabricated any numbers below. "Priority" and "difficulty" columns are directional judgments based on (a) how many established competitors already rank for the term, and (b) how directly the term matches something Fasalo's current 8-crop, mandi-selection product actually does — not a keyword-tool score.

---

## 6. Keyword map (Phase 1 deliverable)

### 6.1 Core / brand & homepage intent

| Keyword | Intent | Directional competition | Priority | Recommended page | Content type | Reason |
|---|---|---|---|---|---|---|
| best market to sell crop | Commercial | Medium — few dedicated pages, mostly generic listicles | High | Homepage | On-page copy + H1 support | Directly matches Fasalo's core action, low direct competition for this exact phrase |
| mandi price comparison | Commercial | Medium — commodityonline/mandibhav partially cover this | High | Homepage / "Find Best Market" tool page | Landing page | Matches "Compare Prices" feature already on-site |
| AI mandi price prediction | Commercial/Informational | Medium — mandibhav.in owns this closely | Medium | "How It Works" page | Explainer page | Category already validated by a competitor; Fasalo needs a genuinely distinct explanation of its own method once transport-cost logic is confirmed |
| nearby mandi | Local/Navigational | High — many apps and gov portals rank here | Medium | "Find Best Market" tool / Location pages | Landing page | High-volume vernacular term (🔴 volume not verifiable) but very crowded; realistic as a secondary, not primary, target |
| government mandi data | Informational/Trust | Medium | Medium | About / trust page | Trust content | 🔴 Only usable once Fasalo's actual data source is confirmed — otherwise reword to avoid implying direct Agmarknet/e-NAM integration |

### 6.2 Crop-specific (limited to the 8 confirmed crops only)

For each crop, the same three query shapes recur in research and should each map to one crop page, not three separate pages:
1. "[crop] mandi price / bhav today"
2. "[crop] price [state]" (e.g., "onion price Maharashtra")
3. "best market to sell [crop]"

| Crop | Primary keyword | Secondary keywords | Intent | Priority | Recommended page | Reason |
|---|---|---|---|---|---|---|
| Tomato | tomato mandi price today | tomato bhav, best market to sell tomato, tomato price Maharashtra | Transactional/Local | High | /crop/tomato | High price-volatility crop (confirmed by news search results), strong recurring search behavior |
| Onion | onion mandi price today | onion bhav, Lasalgaon onion price, best market to sell onion | Transactional/Local | High | /crop/onion | Politically/economically high-interest crop with frequent price-spike news coverage — strong content-freshness opportunity |
| Potato | potato mandi price today | potato bhav, potato price today, best market to sell potato | Transactional/Local | Medium | /crop/potato | Steady vernacular demand, less volatile news cycle than onion/tomato |
| Cotton | cotton mandi price today | cotton bhav, cotton rate Nagpur, best market to sell cotton | Transactional/Local | High | /crop/cotton | Matches Fasalo's own homepage example (Cotton, Nagpur); Maharashtra-relevant cash crop |
| Soybean | soybean mandi price today | soybean bhav, soyabean rate, best market to sell soybean | Transactional/Local | High | /crop/soybean | Major Maharashtra/MP oilseed with consistent competitor coverage |
| Rice | rice mandi price today | paddy price, dhan bhav, rice mandi rate | Transactional/Local | Medium | /crop/rice | 🔴 Note: many farmers search "paddy"/"dhan" rather than "rice" — needs local-language confirmation before finalizing H1s |
| Wheat | wheat mandi price today | gehu bhav, wheat rate, best market to sell wheat | Transactional/Local | High | /crop/wheat | Very high competitor coverage confirms strong demand; also matches Fasalo's own sample table |
| Sugarcane | sugarcane price today | ganna bhav, sugarcane rate, FRP sugarcane price | Transactional/Local | Medium | /crop/sugarcane | Distinct from other crops — sugarcane is usually sold to mills at government-set FRP, not open mandi auction; page framing needs to reflect this correctly rather than copying the other 7 crop templates |

🟡 **Recommendation:** Sugarcane needs a different content template from the other 7 (FRP/mill-based selling vs. open mandi auction) — flagging this now so Phase 2's crop framework doesn't force-fit it into the same structure.

### 6.3 Location / mandi intent

| Keyword | Intent | Priority | Recommended page | Reason |
|---|---|---|---|---|
| Maharashtra mandi price | Local | High | /location/maharashtra (or similar) | Maharashtra is the state shown in Fasalo's own homepage examples (Nagpur, Pune) — logical first location focus |
| APMC market near me | Local/Navigational | Medium | "Find Best Market" tool | Matches the location-detection feature already built |
| Nagpur mandi price | Local | Medium | /location/nagpur or crop×location combo | Directly matches homepage sample data (Cotton, Nagpur) |
| Pune mandi price | Local | Medium | /location/pune or crop×location combo | Directly matches homepage sample data (Tomato, Pune) |

🟡 **Recommendation:** Do not build one page per Indian state/district up front. Start with Maharashtra (matches current sample data and likely initial market focus) and expand only as real mandi coverage is confirmed — this avoids the thin/doorway-page problem your brief explicitly warned against.

### 6.4 Informational / trust / how-it-works

| Keyword | Intent | Priority | Recommended page | Reason |
|---|---|---|---|---|
| how does Fasalo work | Informational/Branded | Medium | How It Works | Already an anchor section on-site; needs to become a real page |
| how to choose best mandi to sell crop | Informational | Medium | Blog / pillar | Matches farmer decision-making intent seen across competitor content |
| mandi price vs transport cost | Informational | Medium | Blog | Unique to Fasalo's stated "Smart Transport Estimation" feature — no competitor found owns this angle explicitly |
| Agmarknet vs Fasalo / what is Agmarknet | Informational | Low-Medium | Blog / trust page | Useful for E-E-A-T once data sourcing is clarified; educates users on the difference between a raw data portal and a decision tool |

---

## 7. Open items before Phase 2

🔴 Needs your input:
1. Can you confirm (even roughly) where Fasalo's price data currently comes from? This single fact changes how big a role "government-verified real-time data" can play across the entire keyword map and trust strategy.
2. Should Maharashtra be the confirmed initial location focus, or is there a different target state/region?
3. Is "rice" or "paddy/dhan" the preferred terminology for that crop page, given real farmer search behavior leans toward the latter?

Once you weigh in (or say "proceed with your best judgment"), Phase 2 will build: content clusters, the crop-page framework (including the sugarcane exception), mandi/market SEO strategy, and the multilingual (EN/HI/MR) approach — all built on this keyword map.
