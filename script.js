/* Fasalo UI foundation: progressive enhancement only. */
(function initialiseFasaloUI() {
  "use strict";

  const root = document.documentElement;
  // Global UI element selectors, defined once to prevent ReferenceErrors.
  const navbar = document.querySelector(".navbar");
  const mainContent = document.querySelector("main#app");
  const languageSelector = document.querySelector(".language-selector");
  const navbarToggle = document.querySelector(".navbar__toggle");
  const sections = document.querySelectorAll("main section[id], footer[id]");

  // Hero section specific elements
  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const heroSection = document.querySelector(".hero-section");
  const heroForm = heroSection?.querySelector(".action-card__form");
  const heroPanel = heroSection?.querySelector(".market-intelligence-panel");
  const heroContent = heroSection?.querySelector(".hero-content"); // Get hero content for initial animation
  const resultSection = document.getElementById("result-section");
  const heroStatus = heroSection?.querySelector(".hero-form-status");

  // Nav links are also global
  const navLinks = document.querySelectorAll(".nav__list .nav__link"); // More specific selector

  root.classList.add("js");

  // --- Global Page Load Animation ---
  const handlePageLoad = () => {
    root.classList.remove("is-loading");
    navbar.classList.add("is-visible"); // Ensure navbar animates in on load with fade/slide (already present)
  };

  // Use a timeout to ensure assets are ready and prevent flash of unstyled content
  window.setTimeout(handlePageLoad, 200);

  // --- Language Translation Logic ---
  // Centralized translations object
  const translations = {
    en: {
      heroBadge: 'Data-Driven Insights',
      heroTitle: 'Sell Your Crops At The <span class="highlight">Best Market.</span>',
      heroSubtitle: "Compare. Decide. Sell Better.", // Updated to match HTML content
      trustGov: 'Market Price Data', // Updated to match HTML content
      trustAI: 'AI Recommendation', // Updated to match HTML content
      trustLocation: 'Nearby Markets',
      langEnglish: "English",
      langHindi: "Hindi",
      langMarathi: "Marathi",

      // --- Nav ---
      navHome: "Home",
      navFindMarket: "Find Best Market", // Restored
      navAbout: "About Us", // Restored
      navContact: "Contact Us", // Restored

      // --- Hero & Action Card ---
      cardTitle: "Find Best Market",
      cardLocationLabel: "Location",
      detectLocationBtn: "Detect My Location",
      useMyLocationBtn: "Use My Location",
      enterLocationPlaceholder: "Enter city, village or area",
      locationNotAllowed: "Location access was not allowed.",
      emptyLocationMsg: "Please enter your location.",
      cardCropLabel: "Select Crop",
      cardQuantityLabel: "Quantity (KG)",
      cardQuantityPlaceholder: "e.g., 500", // Added for placeholder
      cardDateLabel: "Selling Date",
      findBestMarketBtn: "Find Best Market",
      howItWorksBtn: "How It Works",
      checkMarketBtn: "Find Best Market",

      // Dynamic form messages
      geoNotSupported: "Geolocation is not supported by your browser",
      detectingLocation: "Detecting...",
      locationCityState: "📍 {city}, {state}", // Placeholder for dynamic values
      couldNotDetermineLocation: "Could not determine city and state from response.",
      invalidApiResponse: "Invalid API response format.",
      locationPermissionDenied: "Location permission denied. Please enter manually.",
      unableToDetectLocation: "Unable to detect location",
      findingMarkets: "Finding nearby markets...",
      comparingPrices: "Comparing prices...",
      calculatingTransport: "Calculating transport...",
      preparingRecommendation: "Preparing recommendation...",
      recommendationReady: "Recommendation ready: Multiple markets compared.",
      resultsEyebrow: "Market Recommendations",
      resultsTitle: "Recommended Markets for Your Crop",
      resultsSubtitle: "Multiple relevant markets ranked by estimated net profit after transport.",
      resultsEmptyTitle: "No Suitable Markets Found",
      resultsEmpty: "No suitable markets found for this search. Try changing the location, crop, quantity, or selling date.",
      modalEyebrow: "🌾 Best Markets For You",
      modalTitle: "Recommended Markets for Your Crop",
      modalSubtitle: "Based on your crop, location and quantity",
      modalClose: "Close",
      modalSearchAgain: "Search Again",
      modalBestOptionBadge: "⭐ Best Option",
      modalGoodOptionBadge: "🟢 Good Choice",
      modalAlternativeBadge: "Alternative Option",
      modalBreakEvenBadge: "🟡 Break-Even",
      modalNotProfitableBadge: "🔴 Not Profitable",
      modalTodaysPrice: "Today's Price",
      modalCropValue: "Your Crop Value",
      modalTravelCost: "Travel Cost",
      modalYouGet: "Estimated Amount After Travel",
      modalApprox: "Approx.",
      modalPerQtl: " / Quintal",
      modalPerKg: " / kg",
      modalAway: "away",
      modalOtherMarkets: "Other Good Markets",
      modalGoodChoiceTag: "🟢 Good choice for your harvest",
      modalAlternativeTag: "🟢 Viable alternative market",
      modalBreakEvenTag: "🟡 Break-even / No gain after travel",
      modalNotProfitableTag: "🔴 Not profitable after travel",
      modalEmptyTitle: "No Suitable Markets Found",
      modalEmpty: "No suitable markets found for this search. Try changing the location, crop, quantity, or selling date.",
      invalidQuantityMsg: "Please enter a valid crop quantity (greater than 0 kg).",
      emptyLocationMsg: "Please enter or detect your location.",
      estRevenueLabel: "Est. Revenue",
      estTransportLabel: "Est. Transport",
      estNetProfitLabel: "Est. Net Profit",
      mandiPriceLabel: "Mandi Price",
      distanceLabel: "Distance",
      confidenceLabel: "Confidence",
      topRecommendation: "Top Recommendation",
      highProfitBadge: "High Profit Potential",
      goodAlternative: "Good Choice",
      viableMarket: "Viable Market",
      sellNowBadge: "Recommended Market",
      languageComingSoonPlaceholder: "(Coming Soon)", // Added for language selector

      // Crop options (used in select dropdowns)
      cropOptionTomato: "Tomato",
      cropOptionOnion: "Onion",
      cropOptionPotato: "Potato",
      cropOptionCotton: "Cotton",
      cropOptionSoybean: "Soybean",
      cropOptionRice: "Rice",
      cropOptionWheat: "Wheat",
      cropOptionSugarcane: "Sugarcane",

      // State options
      stateMaharashtra: "Maharashtra", // Already correct
      statePunjab: "Punjab",
      stateMadhyaPradesh: "Madhya Pradesh",

      // Market options
      marketAll: "All Markets",
      marketPune: "Pune",
      marketNagpur: "Nagpur",

      // --- Quick Actions ---
      quickActionsTitle: "How can Fasalo help you today?",
      quickAction1Title: "Find Best Market", // Already correct
      quickAction1Desc: "Compare nearby mandi prices and maximize profit.", // Already correct
      quickAction2Title: "Compare Prices", // Already correct
      quickAction2Desc: "Compare multiple markets for your selected crop.", // Already correct
      quickAction3Title: "Nearby Mandis", // Already correct
      quickAction3Desc: "Discover markets around your current location.", // Already correct
      quickAction4Title: "Weather Forecast", // Already correct
      quickAction4Desc: "Check local conditions.", // Changed from Future integration
      
      // Weather Forecast
      weatherTitle: "Local Weather Forecast",
      weatherDesc: "Plan your farming activities based on upcoming conditions.",

      // --- Why Fasalo ---
      whyBetterEyebrow: "Why Fasalo",
      whyBetterTitle: "Why Fasalo Gives Better Results",
      whyBetterSubtitle: "Fasalo combines market price information, intelligent analysis and transport considerations to help farmers make smarter selling decisions.",
      whyBetterCard1Title: "Market Price Data", // Changed from "Government Mandi Data"
      whyBetterCard1Desc: "Uses available market prices.", // Changed from "Uses official mandi prices."
      whyBetterCard2Title: "AI Market Analysis",
      whyBetterCard2Desc: "Analyzes historical and current trends.",
      whyBetterCard3Title: "Smart Transport Estimation",
      whyBetterCard3Desc: "Estimates travel cost before recommending markets.",
      whyBetterCard4Title: "Maximum Profit Recommendation",
      whyBetterCard4Desc: "Suggests the market with the highest expected profit.",

      // --- Market Preview ---
      marketIntelEyebrow: "Live Market Intelligence", // Restored
      marketIntelTitle: "Live Market Intelligence", // Restored
      marketIntelSubtitle: "Real-time mandi price comparison powered by Government Mandi Data and AI analysis.", // Restored
      marketIntelDisclaimer: "Sample data for demonstration purposes only. Actual prices vary.",
      analyticsCard1Title: "Today's Highest Price",
      analyticsCard1Subtitle: "Cotton, Nagpur",
      analyticsCard2Title: "Average Price",
      analyticsCard2Subtitle: "Across all crops",
      analyticsCard3Title: "Markets Covered",
      analyticsCard3Subtitle: "Across 15 states",
      analyticsCard4Title: "AI Confidence",
      analyticsCard4Subtitle: "Prediction accuracy",
      toolbarSearchPlaceholder: "Search Crop (e.g. Wheat)",
      toolbarSortBtn: "Sort By Price",
      toolbarUpdatedToday: "Updated Today",
      toolbarRefreshData: "Refresh data", // Added for aria-label
      intelThCrop: "Crop",
      intelThVariety: "Variety",
      intelThMarket: "Market",
      intelThToday: "Today's Price",
      intelThYesterday: "Yesterday",
      intelThChange: "Change",
      intelThDemand: "Demand",
      intelThRec: "Recommendation",
      demandHigh: "High",
      demandMedium: "Medium",
      demandLow: "Low",
      recSell: "Sell Now",
      recWait: "Wait",
      recGood: "Good Choice",

      // --- CTA Section ---
      ctaTitle: "Ready to Find the Best Market?", // Restored
      ctaSubtitle: "Get AI-powered market recommendations based on your location, crop and quantity.", // Restored
      ctaLearnMoreBtn: "Learn More", // Restored
      footerLinkFindMarket: "Find Best Market", // Restored
      
      // --- Footer ---
      footerTagline: "Every Harvest Deserves the Best Market.",
      footerMobileTagline: "Helping farmers make smarter selling decisions with AI-powered market intelligence.",
      footerSlogan: "Empowering farmers with technology.", // Restored
      footerHeadingResources: "Resources",
      footerLinkFeatures: "Features", // This will link to /how-it-works.html
      footerLinkMarketInsights: "Market Insights", // This will link to /mandi-prices.html
      footerLinkHowItWorks: "How It Works", // Already correct
      footerHeadingLegal: "Legal",
      footerLinkPrivacy: "Privacy Policy", // Already correct
      footerLinkTerms: "Terms of Service", // Already correct
      footerMadeIn: "Made with ❤️ in India 🇮🇳",
      footerCopyright: "&copy; 2026 Fasalo — Avishkar Project. All rights reserved.",
      footerCopyrightMobile: "&copy; 2026 Fasalo — Avishkar Project. All rights reserved.",

      // Team Section
      teamFasaloTitle: "Team Fasalo",
      avishkarProjectSubtitle: "Avishkar Project • 2026",
      teamIntro: "Fasalo is a collaborative student project created as part of the Avishkar Project, focused on helping farmers make smarter crop-selling and market decisions.",
      rajkamalName: "Rajkamal S. Mandrai",
      rajkamalRole: "Website Design & Development",
      gargiName: "Gargi Singh",
      iramName: "Iram Dalvi",
      radhikaName: "Radhika Paliwal",
      amitName: "Amit Pal",
      prasadName: "Prasad Devkate",
      omName: "Om Nerkar",
      teamMemberRole: "Team Member — Avishkar Project",
      footerLinkTeam: "Team Fasalo",

      // Live Table Rows
      tableCottonSub: "High trade volume in Vidarbha",
      tableCottonVariety: "Long Staple",
      tableNagpurMarket: "Nagpur APMC",
      tableTomatoSub: "Strong local retail demand",
      tableTomatoVariety: "Hybrid",
      tablePuneMarket: "Pune APMC",
      tableWheatSub: "Steady grain auction demand",
      tableWheatVariety: "Lokwan",
      tableIndoreMarket: "Indore Mandi",

      // Find Best Market Page
      fbmHeaderTitle: "Find Best Market",
      fbmHeaderSubtitle: "Find the most profitable market for your harvest based on price, transport cost, and distance.",
      fbmActionCardTitle: "Find Best Market",
      fbmHowTitle: "How Fasalo Finds Your Best Market",
      fbmHowSubtitle: "Our intelligent algorithm calculates net profit after transport costs so you take home more money.",
      fbmCard1Title: "Mandi Prices",
      fbmCard1Desc: "Real-time wholesale prices across major agricultural markets in Maharashtra and nearby states.",
      fbmCard2Title: "Transport Costs",
      fbmCard2Desc: "Estimated travel and vehicle freight calculated specifically for your crop volume and location.",
      fbmCard3Title: "Net In-Hand Profit",
      fbmCard3Desc: "Transparent comparison showing which market leaves you with the highest payout after all expenses.",
      fbmExploreTitle: "Explore Crops & Mandis",
      fbmExploreSubtitle: "Select your crop above or browse live market intelligence on the home page.",
      fbmViewAllCrops: "View Live Market Intelligence",
      searchErrorMsg: "Error calculating recommendations. Please try again.",
    },
    hi: {
      heroBadge: 'डेटा-संचालित अंतर्दृष्टि',
      heroTitle: 'अपनी फसलें <span class="highlight">सर्वोत्तम बाजार</span> में बेचें।',
      heroSubtitle: "तुलना करें। निर्णय लें। बेहतर बेचें।",
      trustGov: 'बाजार मूल्य डेटा',
      trustAI: 'एआई सिफारिश',
      trustLocation: 'आस-पास के बाजार',
      trustLang: 'कई भाषाएँ',
      langEnglish: "अंग्रेज़ी",
      langHindi: "हिन्दी",
      langMarathi: "मराठी",

      // Nav
      navHome: "होम",
      navFindMarket: "सर्वोत्तम बाजार खोजें", // Restored
      navAbout: "हमारे बारे में", // Restored
      navContact: "संपर्क करें", // Restored

      // Hero Action Card
      cardTitle: "सर्वोत्तम बाजार खोजें",
      cardLocationLabel: "स्थान",
      detectLocationBtn: "मेरा स्थान पता करें",
      useMyLocationBtn: "मेरी लोकेशन इस्तेमाल करें",
      enterLocationPlaceholder: "शहर, गांव या इलाका लिखें",
      locationNotAllowed: "लोकेशन की अनुमति नहीं मिली।",
      emptyLocationMsg: "कृपया अपनी लोकेशन दर्ज करें।",
      cardCropLabel: "फसल चुनें",
      cardQuantityLabel: "मात्रा (किलो)",
      cardQuantityPlaceholder: "उदाहरण के लिए, 500",
      cardDateLabel: "बिक्री की तारीख",
      findBestMarketBtn: "सर्वोत्तम बाजार खोजें",
      howItWorksBtn: "यह कैसे काम करता है",
      checkMarketBtn: "सर्वोत्तम बाजार खोजें",

      // Dynamic form messages
      geoNotSupported: "आपके ब्राउज़र द्वारा जियोलोकेशन समर्थित नहीं है",
      detectingLocation: "पता लगाया जा रहा है...",
      locationCityState: "📍 {city}, {state}",
      couldNotDetermineLocation: "प्रतिक्रिया से शहर और राज्य निर्धारित नहीं किया जा सका।",
      invalidApiResponse: "अमान्य एपीआई प्रतिक्रिया प्रारूप।",
      locationPermissionDenied: "स्थान की अनुमति अस्वीकृत। कृपया मैन्युअल रूप से दर्ज करें।",
      unableToDetectLocation: "स्थान का पता लगाने में असमर्थ",
      findingMarkets: "आस-पास के बाजार खोजे जा रहे हैं...",
      comparingPrices: "कीमतों की तुलना की जा रही है...",
      calculatingTransport: "परिवहन की गणना की जा रही है...",
      preparingRecommendation: "सिफारिश तैयार की जा रही है...",
      recommendationReady: "सिफारिश तैयार है: विभिन्न बाजारों की तुलना की गई।",
      resultsEyebrow: "बाजार सिफारिशें",
      resultsTitle: "आपकी फसल के लिए सर्वोत्तम बाजार",
      resultsSubtitle: "परिवहन लागत के बाद अनुमानित शुद्ध लाभ के आधार पर क्रमबद्ध बाजार।",
      resultsEmptyTitle: "कोई उपयुक्त बाजार नहीं मिला",
      resultsEmpty: "इस खोज के लिए कोई उपयुक्त बाजार नहीं मिला। स्थान, फसल, मात्रा या बिक्री की तारीख बदलने का प्रयास करें।",
      modalEyebrow: "🌾 आपके लिए सबसे अच्छे बाजार",
      modalTitle: "आपकी फसल के लिए सर्वोत्तम बाजार",
      modalSubtitle: "आपकी फसल, स्थान और मात्रा के आधार पर",
      modalClose: "बंद करें",
      modalSearchAgain: "फिर से खोजें",
      modalBestOptionBadge: "⭐ सबसे अच्छा विकल्प",
      modalGoodOptionBadge: "🟢 अच्छा विकल्प",
      modalAlternativeBadge: "दूसरा विकल्प",
      modalBreakEvenBadge: "🟡 लागत बराबर",
      modalNotProfitableBadge: "🔴 फायदेमंद नहीं",
      modalTodaysPrice: "आज का भाव",
      modalCropValue: "आपकी फसल की कीमत",
      modalTravelCost: "ले जाने का खर्च",
      modalYouGet: "ले जाने के खर्च निकालने के बाद अनुमानित रकम",
      modalApprox: "लगभग",
      modalPerQtl: " / क्विंटल",
      modalPerKg: " / किलो",
      modalAway: "दूर",
      modalOtherMarkets: "अन्य अच्छे बाजार",
      modalGoodChoiceTag: "🟢 आपकी फसल के लिए अच्छा विकल्प",
      modalAlternativeTag: "🟢 बेचने के लिए दूसरा अच्छा बाजार",
      modalBreakEvenTag: "🟡 लागत बराबर / ले जाने के बाद कोई बचत नहीं",
      modalNotProfitableTag: "🔴 ले जाने के खर्च के बाद फायदे का विकल्प नहीं",
      modalEmptyTitle: "कोई उपयुक्त बाजार नहीं मिला",
      modalEmpty: "इस खोज के लिए कोई उपयुक्त बाजार नहीं मिला। स्थान, फसल, मात्रा या बिक्री की तारीख बदलने का प्रयास करें।",
      invalidQuantityMsg: "कृपया फसल की सही मात्रा दर्ज करें (0 किलो से अधिक)।",
      emptyLocationMsg: "कृपया अपना स्थान दर्ज करें या चुनें।",
      estRevenueLabel: "अनुमानित आय",
      estTransportLabel: "परिवहन खर्च",
      estNetProfitLabel: "अनुमानित शुद्ध लाभ",
      mandiPriceLabel: "मंडी भाव",
      distanceLabel: "दूरी",
      confidenceLabel: "विश्वसनीयता",
      topRecommendation: "शीर्ष सिफारिश",
      highProfitBadge: "उच्च लाभ संभावना",
      goodAlternative: "अच्छा विकल्प",
      viableMarket: "सक्षम बाजार",
      sellNowBadge: "अनुशंसित बाजार",
      languageComingSoonPlaceholder: "(जल्द आ रहा है)",

      // Crop options (used in select dropdowns)
      cropOptionTomato: "टमाटर",
      cropOptionOnion: "प्याज",
      cropOptionPotato: "आलू",
      cropOptionCotton: "कपास",
      cropOptionSoybean: "सोयाबीन",
      cropOptionRice: "चावल",
      cropOptionWheat: "गेहूं",
      cropOptionSugarcane: "गन्ना",

      // State options
      stateMaharashtra: "महाराष्ट्र", // Already correct
      statePunjab: "पंजाब",
      stateMadhyaPradesh: "मध्य प्रदेश",

      // Market options
      marketAll: "सभी बाजार",
      marketPune: "पुणे",
      marketNagpur: "नागपुर",

      // Quick Actions
      quickActionsTitle: "आज फसालो आपकी मदद कैसे कर सकता है?", // Restored
      quickAction1Title: "सर्वोत्तम बाजार खोजें", // Restored
      quickAction1Desc: "आस-पास की मंडी की कीमतों की तुलना करें और मुनाफा बढ़ाएं।", // Restored
      quickAction2Title: "कीमतों की तुलना करें", // Restored
      quickAction2Desc: "अपनी चुनी हुई फसल के लिए कई बाजारों की तुलना करें।", // Restored
      quickAction3Title: "आस-पास की मंडियां", // Restored
      quickAction3Desc: "अपने वर्तमान स्थान के आसपास के बाजारों की खोज करें।", // Restored
      quickAction4Title: "मौसम का पूर्वानुमान", // Restored
      quickAction4Desc: "स्थानीय मौसम की जाँच करें।",
      
      // Weather Forecast
      weatherTitle: "स्थानीय मौसम का पूर्वानुमान",
      weatherDesc: "आने वाले मौसम के आधार पर अपनी खेती की योजना बनाएं।",

      // Why Fasalo
      whyBetterEyebrow: "फसालो ही क्यों",
      whyBetterTitle: "फसालो बेहतर परिणाम क्यों देता है",
      whyBetterSubtitle: "हर सिफारिश सत्यापित सरकारी बाजार कीमतों, बुद्धिमान विश्लेषण और परिवहन अनुकूलन पर आधारित है।", // Restored
      whyBetterCard1Title: "सरकारी मंडी डेटा", // Restored
      whyBetterCard1Desc: "आधिकारिक मंडी कीमतों का उपयोग करता है।", // Restored
      whyBetterCard2Title: "एआई बाजार विश्लेषण",
      whyBetterCard2Desc: "ऐतिहासिक और वर्तमान रुझानों का विश्लेषण करता है।",
      whyBetterCard3Title: "स्मार्ट परिवहन अनुमान",
      whyBetterCard3Desc: "बाजारों की सिफारिश करने से पहले यात्रा लागत का अनुमान लगाता है।",
      whyBetterCard4Title: "अधिकतम लाभ की सिफारिश",
      whyBetterCard4Desc: "उच्चतम अपेक्षित लाभ वाले बाजार का सुझाव देता है।",

      // Market Preview
      marketIntelEyebrow: "लाइव मार्केट इंटेलिजेंस", // Restored
      marketIntelTitle: "लाइव मार्केट इंटेलिजेंस", // Restored
      marketIntelSubtitle: "रियल-टाइम मंडी मूल्य तुलना सरकारी मंडी डेटा और एआई विश्लेषण द्वारा संचालित।", // Restored
      marketIntelDisclaimer: "केवल प्रदर्शन उद्देश्यों के लिए नमूना डेटा। वास्तविक कीमतें भिन्न हो सकती हैं।",
      analyticsCard1Title: "आज की उच्चतम कीमत",
      analyticsCard1Subtitle: "कपास, नागपुर",
      analyticsCard2Title: "औसत मूल्य",
      analyticsCard2Subtitle: "सभी फसलों में",
      analyticsCard3Title: "शामिल बाजार",
      analyticsCard3Subtitle: "15 राज्यों में",
      analyticsCard4Title: "एआई आत्मविश्वास",
      analyticsCard4Subtitle: "भविष्यवाणी सटीकता",
      toolbarSearchPlaceholder: "फसल खोजें (जैसे गेहूं)",
      toolbarSortBtn: "कीमत के अनुसार छाँटें",
      toolbarUpdatedToday: "आज अपडेट किया गया",
      toolbarRefreshData: "डेटा रीफ्रेश करें",
      intelThCrop: "फसल",
      intelThVariety: "किस्म",
      intelThMarket: "बाजार",
      intelThToday: "आज का भाव",
      intelThYesterday: "कल का भाव",
      intelThChange: "बदलाव",
      intelThDemand: "मांग",
      intelThRec: "सिफारिश",
      demandHigh: "उच्च",
      demandMedium: "मध्यम",
      demandLow: "कम",
      recSell: "अभी बेचें",
      recWait: "प्रतीक्षा करें",
      recGood: "अच्छा विकल्प",

      // --- CTA Section ---
      ctaTitle: "सर्वोत्तम बाजार खोजने के लिए तैयार हैं?", // Restored
      ctaSubtitle: "अपने स्थान, फसल और मात्रा के आधार पर एआई-संचालित बाजार सिफारिशें प्राप्त करें।", // Restored
      ctaLearnMoreBtn: "और जानें", // Restored
      footerLinkFindMarket: "सर्वोत्तम बाजार खोजें", // Restored
      
      // Footer
      footerTagline: "हर फसल सर्वोत्तम बाज़ार की हक़दार है।",
      footerMobileTagline: "एआई-संचालित बाजार इंटेलिजेंस के साथ किसानों को बेहतर बिक्री निर्णय लेने में मदद करना।",
      footerSlogan: "किसानों को प्रौद्योगिकी के साथ सशक्त बनाना।", // Restored
      footerHeadingResources: "संसाधन",
      footerLinkFeatures: "विशेषताएँ",
      footerLinkMarketInsights: "बाजार अंतर्दृष्टि",
      footerLinkHowItWorks: "यह कैसे काम करता है", // Already correct
      footerHeadingLegal: "कानूनी",
      footerLinkPrivacy: "गोपनीयता नीति", // Already correct
      footerLinkTerms: "सेवा की शर्तें", // Already correct
      footerMadeIn: "❤️ भारत में निर्मित 🇮🇳",
      footerCopyright: "&copy; 2026 फसालो — अविष्कार प्रोजेक्ट। सर्वाधिकार सुरक्षित।",
      footerCopyrightMobile: "&copy; 2026 फसालो — अविष्कार प्रोजेक्ट। सर्वाधिकार सुरक्षित।",

      // Team Section
      teamFasaloTitle: "टीम फसालो",
      avishkarProjectSubtitle: "अविष्कार प्रोजेक्ट • 2026",
      teamIntro: "फसालो अविष्कार प्रोजेक्ट के हिस्से के रूप में बनाया गया एक सहयोगी छात्र प्रोजेक्ट है, जिसका उद्देश्य किसानों को फसल बेचने और बाजार के बेहतर निर्णय लेने में मदद करना है।",
      rajkamalName: "राजकमल एस. मंदराई",
      rajkamalRole: "वेबसाइट डिजाइन और विकास",
      gargiName: "गार्गी सिंह",
      iramName: "इरम दलवी",
      radhikaName: "राधिका पालीवाल",
      amitName: "अमित पाल",
      prasadName: "प्रसाद देवकाते",
      omName: "ओम नेरकर",
      teamMemberRole: "टीम सदस्य — अविष्कार प्रोजेक्ट",
      footerLinkTeam: "टीम फसालो",

      // Live Table Rows
      tableCottonSub: "विदर्भ में उच्च व्यापार मात्रा",
      tableCottonVariety: "लंबा रेशा",
      tableNagpurMarket: "नागपुर APMC",
      tableTomatoSub: "मजबूत स्थानीय खुदरा मांग",
      tableTomatoVariety: "हाइब्रिड",
      tablePuneMarket: "पुणे APMC",
      tableWheatSub: "स्थिर अनाज नीलामी मांग",
      tableWheatVariety: "लोकवन",
      tableIndoreMarket: "इंदौर मंडी",

      // Find Best Market Page
      fbmHeaderTitle: "सर्वोत्तम बाजार खोजें",
      fbmHeaderSubtitle: "मूल्य, परिवहन खर्च और दूरी के आधार पर अपनी फसल के लिए सबसे अधिक लाभदायक बाजार खोजें।",
      fbmActionCardTitle: "सर्वोत्तम बाजार खोजें",
      fbmHowTitle: "फसालो आपके लिए सर्वोत्तम बाजार कैसे खोजता है",
      fbmHowSubtitle: "हमारा एल्गोरिदम परिवहन खर्च के बाद शुद्ध लाभ की गणना करता है ताकि आप अधिक मुनाफा कमा सकें।",
      fbmCard1Title: "मंडी भाव",
      fbmCard1Desc: "महाराष्ट्र और पड़ोसी राज्यों के प्रमुख कृषि बाजारों में वास्तविक समय के थोक भाव।",
      fbmCard2Title: "परिवहन खर्च",
      fbmCard2Desc: "आपकी फसल की मात्रा और स्थान के अनुसार अनुमानित यात्रा और वाहन भाड़ा।",
      fbmCard3Title: "हाथ में शुद्ध मुनाफा",
      fbmCard3Desc: "पारदर्शी तुलना जो बताती है कि सभी खर्चों के बाद कौन सा बाजार आपको सबसे अधिक मुनाफा देता है।",
      fbmExploreTitle: "फसलें और मंडियां देखें",
      fbmExploreSubtitle: "ऊपर अपनी फसल चुनें या मुख्य पृष्ठ पर लाइव बाजार भाव देखें।",
      fbmViewAllCrops: "लाइव बाजार भाव देखें",
      searchErrorMsg: "सिफारिशों की गणना करने में त्रुटि। कृपया पुनः प्रयास करें।",
    },
    mr: {
      heroBadge: 'डेटा-आधारित अंतर्दृष्टी',
      heroTitle: 'तुमची पिके <span class="highlight">सर्वोत्तम बाजारात</span> विका.',
      heroSubtitle: "तुलना करा. निर्णय घ्या. चांगले विका.",
      trustGov: 'बाजार मूल्य डेटा',
      trustAI: 'एआय शिफारस',
      trustLocation: 'जवळच्या मंडई',
      trustLang: 'अनेक भाषा',
      langEnglish: "इंग्रजी",
      langHindi: "हिंदी",
      langMarathi: "मराठी",

      // Nav
      navHome: "होम",
      navFindMarket: "सर्वोत्तम बाजार शोधा", // Restored
      navAbout: "आमच्याबद्दल", // Restored
      navContact: "संपर्क", // Restored

      // Hero Action Card
      cardTitle: "सर्वोत्तम बाजार शोधा",
      cardLocationLabel: "स्थान",
      detectLocationBtn: "माझे स्थान शोधा",
      useMyLocationBtn: "माझे स्थान वापरा",
      enterLocationPlaceholder: "शहर, गाव किंवा परिसर लिहा",
      locationNotAllowed: "स्थान वापरण्याची परवानगी मिळाली नाही.",
      emptyLocationMsg: "कृपया तुमचे स्थान लिहा.",
      cardCropLabel: "पीक निवडा",
      cardQuantityLabel: "प्रमाण (किलो)",
      cardQuantityPlaceholder: "उदा. 500",
      cardDateLabel: "विक्रीची तारीख",
      findBestMarketBtn: "सर्वोत्तम बाजार शोधा",
      howItWorksBtn: "हे कसे कार्य करते",
      checkMarketBtn: "सर्वोत्तम बाजार शोधा",

      // Dynamic form messages
      geoNotSupported: "तुमच्या ब्राउझरद्वारे भौगोलिक स्थान समर्थित नाही",
      detectingLocation: "शोधत आहे...",
      locationCityState: "📍 {city}, {state}",
      couldNotDetermineLocation: "प्रतिसादातून शहर आणि राज्य निश्चित करता आले नाही.",
      invalidApiResponse: "अवैध एपीआय प्रतिसाद स्वरूप.",
      locationPermissionDenied: "स्थान परवानगी नाकारली. कृपया व्यक्तिचलितपणे प्रविष्ट करा.",
      unableToDetectLocation: "स्थान शोधण्यात अक्षम",
      findingMarkets: "जवळच्या बाजारपेठा शोधत आहे...",
      comparingPrices: "किमतींची तुलना करत आहे...",
      calculatingTransport: "वाहतुकीची गणना करत आहे...",
      preparingRecommendation: "शिफारस तयार करत आहे...",
      recommendationReady: "शिफारस तयार आहे: विविध बाजारपेठांची तुलना केली.",
      resultsEyebrow: "बाजार शिफारशी",
      resultsTitle: "तुमच्या पिकासाठी सर्वोत्तम बाजारपेठा",
      resultsSubtitle: "वाहतूक खर्चानंतर अंदाजे निव्वळ नफ्यानुसार क्रमवारी लावलेल्या बाजारपेठा.",
      resultsEmptyTitle: "कोणतीही योग्य बाजारपेठ आढळली नाही",
      resultsEmpty: "या शोधासाठी कोणतीही योग्य बाजारपेठ आढळली नाही. कृपया स्थान, पीक, प्रमाण किंवा विक्रीची तारीख बदलून पहा.",
      modalEyebrow: "🌾 तुमच्यासाठी सर्वोत्तम बाजार",
      modalTitle: "तुमच्या पिकासाठी सर्वोत्तम बाजारपेठा",
      modalSubtitle: "तुमचे पीक, ठिकाण आणि प्रमाणानुसार",
      modalClose: "बंद करा",
      modalSearchAgain: "पुन्हा शोधा",
      modalBestOptionBadge: "⭐ सर्वोत्तम पर्याय",
      modalGoodOptionBadge: "🟢 चांगला पर्याय",
      modalAlternativeBadge: "दुसरा पर्याय",
      modalBreakEvenBadge: "🟡 समतोल",
      modalNotProfitableBadge: "🔴 फायदेशीर नाही",
      modalTodaysPrice: "आजचा भाव",
      modalCropValue: "तुमच्या पिकाची किंमत",
      modalTravelCost: "वाहतूक खर्च",
      modalYouGet: "वाहतूक खर्च वजा केल्यानंतर अंदाजे रक्कम",
      modalApprox: "साधारण",
      modalPerQtl: " / क्विंटल",
      modalPerKg: " / किलो",
      modalAway: "लांब",
      modalOtherMarkets: "इतर चांगले बाजार",
      modalGoodChoiceTag: "🟢 तुमच्या पिकासाठी चांगला पर्याय",
      modalAlternativeTag: "🟢 विक्रीसाठी दुसरा पर्याय",
      modalBreakEvenTag: "🟡 समतोल / वाहतूक खर्चानंतर फायदा नाही",
      modalNotProfitableTag: "🔴 वाहतूक खर्चानंतर फायदेशीर पर्याय नाही",
      modalEmptyTitle: "कोणतीही योग्य बाजारपेठ आढळली नाही",
      modalEmpty: "या शोधासाठी कोणतीही योग्य बाजारपेठ आढळली नाही. कृपया स्थान, पीक, प्रमाण किंवा विक्रीची तारीख बदलून पहा.",
      invalidQuantityMsg: "कृपया पिकाचे योग्य प्रमाण टाका (0 किलो पेक्षा जास्त).",
      emptyLocationMsg: "कृपया आपले स्थान टाका किंवा निवडा.",
      estRevenueLabel: "अंदाजे उत्पन्न",
      estTransportLabel: "वाहतूक खर्च",
      estNetProfitLabel: "अंदाजे निव्वळ नफा",
      mandiPriceLabel: "बाजारभाव",
      distanceLabel: "अंतर",
      confidenceLabel: "अचूकता",
      topRecommendation: "सर्वोत्तम शिफारस",
      highProfitBadge: "जास्त नफा क्षमता",
      goodAlternative: "चांगला पर्याय",
      viableMarket: "योग्य बाजार",
      sellNowBadge: "शिफारस केलेली बाजारपेठ",
      languageComingSoonPlaceholder: "(लवकरच येत आहे)",

      // Crop options (used in select dropdowns)
      cropOptionTomato: "टोमॅटो",
      cropOptionOnion: "कांदा",
      cropOptionPotato: "बटाटा",
      cropOptionCotton: "कापूस",
      cropOptionSoybean: "सोयाबीन",
      cropOptionRice: "तांदूळ",
      cropOptionWheat: "गहू",
      cropOptionSugarcane: "ऊस",

      // State options
      stateMaharashtra: "महाराष्ट्र", // Already correct
      statePunjab: "पंजाब",
      stateMadhyaPradesh: "मध्य प्रदेश",

      // Market options
      marketAll: "सर्व बाजारपेठा",
      marketPune: "पुणे",
      marketNagpur: "नागपूर",

      // Quick Actions
      quickActionsTitle: "आज फसालो तुम्हाला कशी मदत करू शकतो?", // Restored
      quickAction1Title: "सर्वोत्तम बाजार शोधा", // Restored
      quickAction1Desc: "जवळच्या मंडईच्या किमतींची तुलना करा आणि नफा वाढवा.", // Restored
      quickAction2Title: "किमतींची तुलना करा", // Restored
      quickAction2Desc: "तुमच्या निवडलेल्या पिकासाठी अनेक बाजारांची तुलना करा.", // Restored
      quickAction3Title: "जवळच्या मंडई", // Restored
      quickAction3Desc: "तुमच्या वर्तमान स्थानाजवळील बाजारपेठा शोधा.", // Restored
      quickAction4Title: "हवामानाचा अंदाज", // Restored
      quickAction4Desc: "स्थानिक हवामान तपासा.",
      
      // Weather Forecast
      weatherTitle: "स्थानिक हवामानाचा अंदाज",
      weatherDesc: "येणाऱ्या हवामानानुसार तुमच्या शेतीचे नियोजन करा.",

      // Why Fasalo
      whyBetterEyebrow: "फसालो का",
      whyBetterTitle: "फसालो चांगले परिणाम का देतो",
      whyBetterSubtitle: "प्रत्येक शिफारस सत्यापित सरकारी बाजार किमती, बुद्धिमान विश्लेषण आणि वाहतूक अनुकूलनावर आधारित आहे.", // Restored
      whyBetterCard1Title: "सरकारी मंडई डेटा", // Restored
      whyBetterCard1Desc: "अधिकृत मंडई किमती वापरतो.", // Restored
      whyBetterCard2Title: "एआय बाजार विश्लेषण",
      whyBetterCard2Desc: "ऐतिहासिक आणि वर्तमान ट्रेंडचे विश्लेषण करतो.",
      whyBetterCard3Title: "स्मार्ट वाहतूक अंदाज",
      whyBetterCard3Desc: "बाजारपेठांची शिफारस करण्यापूर्वी प्रवासाच्या खर्चाचा अंदाज लावतो.",
      whyBetterCard4Title: "जास्तीत जास्त नफ्याची शिफारस",
      whyBetterCard4Desc: "सर्वाधिक अपेक्षित नफा असलेल्या बाजारपेठेची शिफारस करतो.",

      // Market Preview
      marketIntelEyebrow: "थेट बाजार बुद्धिमत्ता", // Restored
      marketIntelTitle: "थेट बाजार बुद्धिमत्ता", // Restored
      marketIntelSubtitle: "सरकारी मंडई डेटा आणि एआय विश्लेषणाद्वारे समर्थित रिअल-टाइम मंडई किंमत तुलना.", // Restored
      marketIntelDisclaimer: "केवळ प्रात्यक्षिक उद्देशांसाठी नमुना डेटा. वास्तविक किमती भिन्न असू शकतात.",
      analyticsCard1Title: "आजची सर्वोच्च किंमत",
      analyticsCard1Subtitle: "कापूस, नागपूर",
      analyticsCard2Title: "सरासरी किंमत",
      analyticsCard2Subtitle: "सर्व पिकांमध्ये",
      analyticsCard3Title: "समाविष्ट बाजारपेठा",
      analyticsCard3Subtitle: "15 राज्यांमध्ये",
      analyticsCard4Title: "एआय आत्मविश्वास",
      analyticsCard4Subtitle: "अंदाजाची अचूकता",
      toolbarSearchPlaceholder: "पीक शोधा (उदा. गहू)",
      toolbarSortBtn: "किमतीनुसार लावा",
      toolbarUpdatedToday: "आज अद्यतनित",
      toolbarRefreshData: "डेटा रीफ्रेश करा",
      intelThCrop: "पीक",
      intelThVariety: "प्रकार",
      intelThMarket: "बाजारपेठ",
      intelThToday: "आजचा भाव",
      intelThYesterday: "कालचा भाव",
      intelThChange: "बदल",
      intelThDemand: "मागणी",
      intelThRec: "शिफारस",
      demandHigh: "उच्च",
      demandMedium: "मध्यम",
      demandLow: "कमी",
      recSell: "आता विका",
      recWait: "थांबा",
      recGood: "चांगली निवड",

      // --- CTA Section ---
      ctaTitle: "सर्वोत्तम बाजार शोधण्यासाठी तयार आहात?", // Restored
      ctaSubtitle: "तुमचे स्थान, पीक आणि प्रमाण यावर आधारित एआय-समर्थित बाजार शिफारसी मिळवा.", // Restored
      ctaLearnMoreBtn: "अधिक जाणून घ्या", // Restored
      footerLinkFindMarket: "सर्वोत्तम बाजार शोधा", // Restored
      
      // Footer
      footerTagline: "प्रत्येक पिकाला सर्वोत्तम बाजारपेठ मिळायला हवी.",
      footerMobileTagline: "एआय-समर्थित मार्केट इंटेलिजन्ससह शेतकऱ्यांना हुशार विक्री निर्णय घेण्यास मदत करणे.",
      footerSlogan: "तंत्रज्ञानाने शेतकऱ्यांना सक्षम करणे.", // Restored
      footerHeadingResources: "संसाधने",
      footerLinkFeatures: "वैशिष्ट्ये",
      footerLinkMarketInsights: "बाजार अंतर्दृष्टी",
      footerLinkHowItWorks: "हे कसे कार्य करते", // Already correct
      footerHeadingLegal: "कायदेशीर",
      footerLinkPrivacy: "गोपनीयता धोरण", // Already correct
      footerLinkTerms: "सेवा अटी", // Already correct
      footerMadeIn: "❤️ भारतात बनवलेले 🇮🇳",
      footerCopyright: "&copy; 2026 फसालो — अविष्कार प्रकल्प. सर्व हक्क राखीव.",
      footerCopyrightMobile: "&copy; 2026 फसालो — अविष्कार प्रकल्प. सर्व हक्क राखीव.",

      // Team Section
      teamFasaloTitle: "टीम फसालो",
      avishkarProjectSubtitle: "अविष्कार प्रकल्प • 2026",
      teamIntro: "फसालो हा अविष्कार प्रकल्पाचा एक सहयोगी विद्यार्थी प्रकल्प आहे, जो शेतकऱ्यांना पीक विक्री आणि बाजाराचे अधिक स्मार्ट निर्णय घेण्यास मदत करण्यावर लक्ष केंद्रित करतो.",
      rajkamalName: "राजकमल एस. मंदराई",
      rajkamalRole: "वेबसाइट डिझाइन आणि विकास",
      gargiName: "गार्गी सिंग",
      iramName: "इरम दळवी",
      radhikaName: "राधिका पालिवाल",
      amitName: "अमित पाल",
      prasadName: "प्रसाद देवकाते",
      omName: "ओम नेरकर",
      teamMemberRole: "टीम सदस्य — अविष्कार प्रकल्प",
      footerLinkTeam: "टीम फसालो",

      // Live Table Rows
      tableCottonSub: "विदर्भात उच्च व्यापार प्रमाण",
      tableCottonVariety: "लांब धागा",
      tableNagpurMarket: "नागपूर APMC",
      tableTomatoSub: "मजबूत स्थानिक किरकोळ मागणी",
      tableTomatoVariety: "हायब्रिड",
      tablePuneMarket: "पुणे APMC",
      tableWheatSub: "स्थिर धान्य लिलाव मागणी",
      tableWheatVariety: "लोकवन",
      tableIndoreMarket: "इंदूर बाजार",

      // Find Best Market Page
      fbmHeaderTitle: "सर्वोत्तम बाजार शोधा",
      fbmHeaderSubtitle: "किंमत, वाहतूक खर्च आणि अंतराच्या आधारे तुमच्या पिकासाठी सर्वाधिक नफा देणारा बाजार शोधा.",
      fbmActionCardTitle: "सर्वोत्तम बाजार शोधा",
      fbmHowTitle: "फसालो तुमच्यासाठी सर्वोत्तम बाजार कसा शोधतो",
      fbmHowSubtitle: "आमचा अल्गोरिदम वाहतूक खर्चानंतर निव्वळ नफ्याची गणना करतो जेणेकरून तुम्हाला जास्तीत जास्त फायदा मिळेल.",
      fbmCard1Title: "बाजारभाव",
      fbmCard1Desc: "महाराष्ट्र आणि शेजारील राज्यांमधील प्रमुख कृषी बाजारांमधील ताजे घाऊक भाव.",
      fbmCard2Title: "वाहतूक खर्च",
      fbmCard2Desc: "तुमच्या पिकाचे प्रमाण आणि स्थानानुसार अंदाजे प्रवास व वाहन वाहतूक खर्च.",
      fbmCard3Title: "हातात येणारा निव्वळ नफा",
      fbmCard3Desc: "सर्व खर्चानंतर कोणता बाजार तुम्हाला सर्वाधिक पैसे मिळवून देईल याची स्पष्ट तुलना.",
      fbmExploreTitle: "पिके आणि बाजारपेठा पहा",
      fbmExploreSubtitle: "वर तुमचे पीक निवडा किंवा मुख्य पृष्ठावर थेट बाजारभाव तपासा.",
      fbmViewAllCrops: "थेट बाजारभाव पहा",
      searchErrorMsg: "शिफारशींची गणना करताना त्रुटी आली. कृपया पुन्हा प्रयत्न करा.",
    },
  };

  let currentLang = localStorage.getItem('selectedLanguage') || 'en'; // Default to English

  const applyTranslations = (lang) => {
    currentLang = lang;
    document.querySelectorAll("[data-translate-key]").forEach(el => {
      const key = el.getAttribute("data-translate-key");
      if (translations[lang] && translations[lang][key]) {
        // Special handling for elements that might contain HTML (like heroBadge)
        // or need specific attribute updates (like placeholders)
        if (el.tagName === 'INPUT' && el.hasAttribute('placeholder')) {
          el.setAttribute('placeholder', translations[lang][key]);
        } else if (el.tagName === 'OPTION') {
          el.textContent = translations[lang][key];
        } else {
          el.innerHTML = translations[lang][key];
        }
      }
    });

    // Update language selector summary text
    const langToggleSpan = languageSelector?.querySelector(".language-selector__toggle span"); // Target the span directly
    if (langToggleSpan) {
      // Find the correct language name from the translations object itself
      const newLangName = translations[lang][`lang${lang.charAt(0).toUpperCase() + lang.slice(1)}`];
      if (newLangName) {
        langToggleSpan.textContent = newLangName;
      }
    }
    document.documentElement.lang = lang;
    localStorage.setItem('selectedLanguage', lang); // Persist selection

    if (typeof refreshActiveSearchResults === 'function') {
      refreshActiveSearchResults();
    }
  };

  // Run initial translations immediately so stored language is applied seamlessly
  applyTranslations(currentLang);

  // --- Number Counting Animation Function ---
  const animateNumber = (element, targetValue, duration = 1500) => {
    if (motionQuery.matches) { // Respect prefers-reduced-motion
      // When reduced motion, just set the final translated text
      const key = element.getAttribute('data-translate-key');
      if (key && translations[currentLang] && translations[currentLang][key]) {
        element.innerHTML = translations[currentLang][key];
      } else {
        element.textContent = targetValue.toLocaleString(currentLang + '-IN'); // Fallback for numbers without specific keys
      }
      return;
    }

    const startValue = 0;
    let startTime = null;

    // Extract prefix and suffix based on original text
    // Get the current translated text to extract prefix/suffix
    const currentTranslatedText = element.innerHTML; // Use innerHTML as some translations might have SVG/HTML
    const prefixMatch = currentTranslatedText.match(/^([^0-9.,]*)/);
    const suffixMatch = currentTranslatedText.match(/([^0-9.,]*)$/);
    const prefix = prefixMatch ? prefixMatch[1] : '';
    const suffix = suffixMatch ? suffixMatch[1] : '';

    const step = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const currentValue = startValue + (targetValue - startValue) * progress;

      let formattedValue;
      if (targetValue % 1 === 0) {
        formattedValue = Math.floor(currentValue).toLocaleString(currentLang + '-IN');
      } else {
        formattedValue = currentValue.toFixed(1).toLocaleString(currentLang + '-IN');
      }

      element.textContent = prefix + formattedValue + suffix;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        // Ensure final exact text is set, using the translated value
        const key = element.getAttribute('data-translate-key');
        if (key && translations[currentLang] && translations[currentLang][key]) {
          element.innerHTML = translations[currentLang][key];
        } else {
          element.textContent = prefix + targetValue.toLocaleString(currentLang + '-IN') + suffix;
        }
      }
    };
    requestAnimationFrame(step);
  };

  // Adjusts main content padding to prevent overlap from the fixed navbar.
  const adjustMainPaddingForNavbar = () => {
    if (!navbar || !mainContent) return;
    // Wrapped in rAF for performance and to prevent layout thrashing
    // if called frequently (e.g., during resize).
    requestAnimationFrame(() => { // Wrapped in rAF for performance
      mainContent.style.paddingTop = `${navbar.offsetHeight}px`;
    });
  };

  window.addEventListener('load', adjustMainPaddingForNavbar);
  window.addEventListener('resize', adjustMainPaddingForNavbar);

  // Sticky navbar on scroll
  const handleScroll = () => {
    // The 'is-scrolled' class is only added if the menu is not open
    // Use a threshold of 1px to ensure it applies immediately after scrolling starts.
    if (window.scrollY > 1 && !document.body.classList.contains('is-menu-open')) {
      navbar.classList.add("is-scrolled");
    } else {
      navbar.classList.remove("is-scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });

  // --- Mobile Navigation Logic ---
  const mobileNavOverlay = document.createElement('div'); // This was already present
  mobileNavOverlay.className = 'mobile-nav-overlay';
  document.body.appendChild(mobileNavOverlay);

  const toggleMobileMenu = (forceClose = false) => {
    const isExpanded = document.body.classList.contains('is-menu-open');
    if (forceClose && !isExpanded) return;
    const shouldOpen = !isExpanded && !forceClose;

    if (navbarToggle) navbarToggle.setAttribute("aria-expanded", String(shouldOpen));
    document.body.classList.toggle("is-menu-open", shouldOpen);
    mobileNavOverlay.classList.toggle("is-visible", shouldOpen);

    // Prevent scrolled style from appearing when menu is open
    if (shouldOpen) {
      navbar.classList.remove("is-scrolled");
    } else {
      handleScroll(); // Re-check scroll position on close
    }
  };

  if (navbarToggle) { // This was already present
    navbarToggle.addEventListener("click", () => toggleMobileMenu());
  }

  const mobileMenuCloseBtn = document.querySelector(".mobile-menu__close-btn");
  if (mobileMenuCloseBtn) {
    mobileMenuCloseBtn.addEventListener("click", () => toggleMobileMenu(true));
  }

  mobileNavOverlay.addEventListener('click', () => toggleMobileMenu(true));

  navLinks.forEach((link) => { // This was already present
    link.addEventListener("click", () => {
      if (document.body.classList.contains("is-menu-open")) {
        toggleMobileMenu(true);
      }
    });
  });

  // Active navigation link highlighting on scroll
  if (sections.length && navLinks.length) {
    // Corrected order of section IDs to match the actual document flow for observation
    // and the desired active highlighting mapping. (User specified actual section order)
    const navSectionIds = ["app", "why-better", "market-preview", "footer"];
    const navSections = navSectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    let activeSectionId = "";
    let ticking = false;
  
    const setActiveNavLink = (id) => {
      if (id === activeSectionId) return;

      activeSectionId = id;
      navLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
      });
    };

    // Activation line: a fixed horizontal line in the viewport (below the navbar).
    // The active section is the one whose vertical bounds contain this line.
    const getActivationLine = () => {
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      // Place the line at 40% of the viewport height, but at least below the navbar
      return Math.max(navbarHeight + 1, window.innerHeight * 0.4);
    };

    const updateActiveNavLink = () => {
      ticking = false;

      if (window.scrollY <= 2) {
        setActiveNavLink("app");
        return;
      }

      const activationLine = getActivationLine();
      let nextActiveSectionId = activeSectionId;
      let bestDistance = Infinity;

      navSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        let top = rect.top;
        let bottom = rect.bottom;

        // For #app (the main element), cap its effective bottom at the top of
        // the next section so it only represents the hero area.
        if (section.id === "app") { // Corrected next section for #app
          const nextSection = navSections.find((s) => s.id === "why-better");
          if (nextSection && nextSection.getBoundingClientRect) { // Added check for getBoundingClientRect
            bottom = Math.min(bottom, nextSection.getBoundingClientRect().top); // Ensure it's a DOM element
          }
        }

        if (activationLine >= top && activationLine <= bottom) {
          // The activation line is inside this section
          nextActiveSectionId = section.id;
          bestDistance = 0;
        } else {
          // Distance from the activation line to the section's nearest edge
          const distance = activationLine < top ? top - activationLine : activationLine - bottom;
          if (distance < bestDistance) {
            bestDistance = distance;
            nextActiveSectionId = section.id;
          }
        }
      });

      setActiveNavLink(nextActiveSectionId);
    };

    const requestActiveNavUpdate = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateActiveNavLink);
    };

    // Set active immediately on nav link click to avoid flicker during smooth scroll
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        const href = link.getAttribute("href");
        if (href && href.startsWith("#")) {
          setActiveNavLink(href.slice(1));
        }
      });
    });

    setActiveNavLink("app");
    window.addEventListener("load", updateActiveNavLink);
    window.addEventListener("resize", requestActiveNavUpdate);
    window.addEventListener("scroll", requestActiveNavUpdate, { passive: true });
  }

  // --- Language Selector Logic ---
  if (languageSelector) {
    const langToggle = languageSelector.querySelector(".language-selector__toggle [data-translate-key='langEnglish']");
    const details = languageSelector.querySelector("details");
    const langOptions = languageSelector.querySelectorAll(".language-selector__option");

    langOptions.forEach(option => {
      option.addEventListener("click", () => {
        const lang = option.getAttribute("data-lang");
        if (translations[lang]) {
          applyTranslations(lang);
        } else {
          alert("Language support for " + option.textContent + " is coming soon!");
        }
        details.removeAttribute("open");
      });
    });

    // Polish: Add "click outside to close" functionality for the language dropdown.
    document.addEventListener('click', (event) => {
      if (!details) return;
      // If the details menu is open and the click was outside the language selector component
      if (details.hasAttribute('open') && !languageSelector.contains(event.target)) {
        details.removeAttribute('open');
      }
    });
  }

  // --- Hero Section Logic ---
  const detectLocationBtn = document.getElementById("detect-location-btn");

  // This logic is now for the form inside the Hero section
  if (detectLocationBtn) {
    detectLocationBtn.addEventListener("click", () => {
      if (!navigator.geolocation) {
        detectLocationBtn.querySelector("span").textContent = translations[currentLang]?.geoNotSupported || "Geolocation is not supported by your browser";
        return;
      }

      const buttonSpan = detectLocationBtn.querySelector("span");
      buttonSpan.textContent = translations[currentLang]?.detectingLocation || "Detecting...";
      detectLocationBtn.disabled = true;

      const handleSuccess = async (position) => {
        const { latitude, longitude } = position.coords;
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
          }
          const data = await response.json();

          if (data && data.address) {
            const { address } = data;
            // Fallback logic: city -> town -> village -> county (district)
            const city = address.city || address.town || address.village || address.county;
            const { state } = address;

            if (city && state) {
              buttonSpan.textContent = `📍 ${city}, ${state}`;
              detectLocationBtn.classList.remove("is-denied");
            } else {
              throw new Error("Could not determine city and state from response.");
            }
          } else {
            throw new Error("Invalid API response format.");
          }
        } catch (error) {
          console.error("Reverse geocoding failed:", error);
          buttonSpan.textContent = translations[currentLang]?.unableToDetectLocation || "Unable to detect location";
          detectLocationBtn.classList.add("is-denied");
        } finally {
          detectLocationBtn.disabled = false;
        }
      };

      const handleError = (error) => {
        if (error.code === error.PERMISSION_DENIED) {
          buttonSpan.textContent = translations[currentLang]?.locationNotAllowed || "Location access was not allowed.";
        } else {
          buttonSpan.textContent = translations[currentLang]?.unableToDetectLocation || "Unable to detect location";
        }
        detectLocationBtn.classList.add("is-denied");
        detectLocationBtn.disabled = false;
      };

      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    });
  }

  // --- Existing Animation & UI Logic ---
  const setMotionPreference = (event) => {
    root.dataset.motion = event.matches ? "reduced" : "full";
  };

  setMotionPreference(motionQuery);
  motionQuery.addEventListener?.("change", setMotionPreference);

  // --- Fasalo Market Intelligence Search Engine ---
  const CITY_COORDINATES = {
    mumbai: { lat: 19.076, lon: 72.8777 },
    "navi mumbai": { lat: 19.033, lon: 73.0297 },
    vashi: { lat: 19.0771, lon: 72.9986 },
    thane: { lat: 19.2183, lon: 72.9781 },
    pune: { lat: 18.5204, lon: 73.8567 },
    nashik: { lat: 19.9975, lon: 73.7898 },
    lasalgaon: { lat: 20.1472, lon: 74.2267 },
    nagpur: { lat: 21.1458, lon: 79.0882 },
    latur: { lat: 18.4088, lon: 76.5604 },
    nanded: { lat: 19.1383, lon: 77.321 },
    akola: { lat: 20.7002, lon: 77.0082 },
    amravati: { lat: 20.932, lon: 77.7523 },
    kolhapur: { lat: 16.705, lon: 74.2433 },
    sangli: { lat: 16.8524, lon: 74.5815 },
    satara: { lat: 17.6805, lon: 73.9935 },
    solapur: { lat: 17.6599, lon: 75.9064 },
    ahmednagar: { lat: 19.0952, lon: 74.7496 },
    aurangabad: { lat: 19.8762, lon: 75.3433 },
    sambhajinagar: { lat: 19.8762, lon: 75.3433 },
    jalna: { lat: 19.8347, lon: 75.8816 },
    jalgaon: { lat: 21.0077, lon: 75.5626 },
    dhule: { lat: 20.9042, lon: 74.7749 },
    yavatmal: { lat: 20.3888, lon: 78.1204 },
    wardha: { lat: 20.7453, lon: 78.6022 },
    chandrapur: { lat: 19.9615, lon: 79.2961 },
    gondia: { lat: 21.4554, lon: 80.1961 },
    bhandara: { lat: 21.1667, lon: 79.65 },
    indore: { lat: 22.7196, lon: 75.8577 }
  };

  const MARKET_LOCALIZATION = {
    // Tomato
    "tom-pune": {
      hi: { name: "पुणे APMC", location: "पुणे, महाराष्ट्र" },
      mr: { name: "पुणे APMC", location: "पुणे, महाराष्ट्र" }
    },
    "tom-nashik": {
      hi: { name: "नासिक APMC", location: "नासिक, महाराष्ट्र" },
      mr: { name: "नाशिक APMC", location: "नाशिक, महाराष्ट्र" }
    },
    "tom-narayangaon": {
      hi: { name: "नारायणगांव APMC", location: "पुणे जिला, महाराष्ट्र" },
      mr: { name: "नारायणगाव APMC", location: "पुणे जिल्हा, महाराष्ट्र" }
    },
    "tom-vashi": {
      hi: { name: "मुंबई (वाशी) APMC", location: "नवी मुंबई, महाराष्ट्र" },
      mr: { name: "मुंबई (वाशी) APMC", location: "नवी मुंबई, महाराष्ट्र" }
    },
    "tom-khed": {
      hi: { name: "खेड APMC", location: "पुणे जिला, महाराष्ट्र" },
      mr: { name: "खेड APMC", location: "पुणे जिल्हा, महाराष्ट्र" }
    },
    "tom-junnar": {
      hi: { name: "जुन्नर APMC", location: "पुणे जिला, महाराष्ट्र" },
      mr: { name: "जुन्नर APMC", location: "पुणे जिल्हा, महाराष्ट्र" }
    },
    "tom-sangamner": {
      hi: { name: "संगमनेर APMC", location: "अहमदनगर, महाराष्ट्र" },
      mr: { name: "संगमनेर APMC", location: "अहमदनगर, महाराष्ट्र" }
    },
    "tom-ahmednagar": {
      hi: { name: "अहमदनगर APMC", location: "अहमदनगर, महाराष्ट्र" },
      mr: { name: "अहमदनगर APMC", location: "अहमदनगर, महाराष्ट्र" }
    },
    "tom-satara": {
      hi: { name: "सातारा APMC", location: "सातारा, महाराष्ट्र" },
      mr: { name: "सातारा APMC", location: "सातारा, महाराष्ट्र" }
    },
    "tom-kolhapur": {
      hi: { name: "कोल्हापुर APMC", location: "कोल्हापुर, महाराष्ट्र" },
      mr: { name: "कोल्हापूर APMC", location: "कोल्हापूर, महाराष्ट्र" }
    },
    "tom-solapur": {
      hi: { name: "सोलापुर APMC", location: "सोलापुर, महाराष्ट्र" },
      mr: { name: "सोलापूर APMC", location: "सोलापूर, महाराष्ट्र" }
    },
    "tom-baramati": {
      hi: { name: "बारामती APMC", location: "पुणे जिला, महाराष्ट्र" },
      mr: { name: "बारामती APMC", location: "पुणे जिल्हा, महाराष्ट्र" }
    },

    // Onion
    "oni-lasalgaon": {
      hi: { name: "लासलगांव APMC", location: "नासिक, महाराष्ट्र" },
      mr: { name: "लासलगाव APMC", location: "नाशिक, महाराष्ट्र" }
    },
    "oni-pimpalgaon": {
      hi: { name: "पिंपलगांव APMC", location: "नासिक, महाराष्ट्र" },
      mr: { name: "पिंपळगाव APMC", location: "नाशिक, महाराष्ट्र" }
    },
    "oni-nashik": {
      hi: { name: "नासिक APMC", location: "नासिक, महाराष्ट्र" },
      mr: { name: "नाशिक APMC", location: "नाशिक, महाराष्ट्र" }
    },
    "oni-pune": {
      hi: { name: "पुणे APMC", location: "पुणे, महाराष्ट्र" },
      mr: { name: "पुणे APMC", location: "पुणे, महाराष्ट्र" }
    },
    "oni-yeola": {
      hi: { name: "येवला APMC", location: "नासिक, महाराष्ट्र" },
      mr: { name: "येवला APMC", location: "नाशिक, महाराष्ट्र" }
    },
    "oni-nandgaon": {
      hi: { name: "नांदगांव APMC", location: "नासिक, महाराष्ट्र" },
      mr: { name: "नांदगाव APMC", location: "नाशिक, महाराष्ट्र" }
    },
    "oni-manmad": {
      hi: { name: "मनमाड APMC", location: "नासिक, महाराष्ट्र" },
      mr: { name: "मनमाड APMC", location: "नाशिक, महाराष्ट्र" }
    },
    "oni-kalwan": {
      hi: { name: "कलवण APMC", location: "नासिक, महाराष्ट्र" },
      mr: { name: "कळवण APMC", location: "नाशिक, महाराष्ट्र" }
    },
    "oni-dindori": {
      hi: { name: "दिंडोरी APMC", location: "नासिक, महाराष्ट्र" },
      mr: { name: "दिंडोरी APMC", location: "नाशिक, महाराष्ट्र" }
    },
    "oni-ahmednagar": {
      hi: { name: "अहमदनगर APMC", location: "अहमदनगर, महाराष्ट्र" },
      mr: { name: "अहमदनगर APMC", location: "अहमदनगर, महाराष्ट्र" }
    },
    "oni-solapur": {
      hi: { name: "सोलापुर APMC", location: "सोलापुर, महाराष्ट्र" },
      mr: { name: "सोलापूर APMC", location: "सोलापूर, महाराष्ट्र" }
    },
    "oni-malegaon": {
      hi: { name: "मालेगांव APMC", location: "नासिक, महाराष्ट्र" },
      mr: { name: "मालेगाव APMC", location: "नाशिक, महाराष्ट्र" }
    },

    // Potato
    "pot-pune": {
      hi: { name: "पुणे APMC", location: "पुणे, महाराष्ट्र" },
      mr: { name: "पुणे APMC", location: "पुणे, महाराष्ट्र" }
    },
    "pot-vashi": {
      hi: { name: "मुंबई (वाशी) APMC", location: "नवी मुंबई, महाराष्ट्र" },
      mr: { name: "मुंबई (वाशी) APMC", location: "नवी मुंबई, महाराष्ट्र" }
    },
    "pot-nashik": {
      hi: { name: "नासिक APMC", location: "नासिक, महाराष्ट्र" },
      mr: { name: "नाशिक APMC", location: "नाशिक, महाराष्ट्र" }
    },
    "pot-manchar": {
      hi: { name: "मंचर APMC", location: "पुणे जिला, महाराष्ट्र" },
      mr: { name: "मंचर APMC", location: "पुणे जिल्हा, महाराष्ट्र" }
    },
    "pot-khed": {
      hi: { name: "खेड APMC", location: "पुणे जिला, महाराष्ट्र" },
      mr: { name: "खेड APMC", location: "पुणे जिल्हा, महाराष्ट्र" }
    },
    "pot-satara": {
      hi: { name: "सातारा APMC", location: "सातारा, महाराष्ट्र" },
      mr: { name: "सातारा APMC", location: "सातारा, महाराष्ट्र" }
    },
    "pot-kolhapur": {
      hi: { name: "कोल्हापुर APMC", location: "कोल्हापुर, महाराष्ट्र" },
      mr: { name: "कोल्हापूर APMC", location: "कोल्हापूर, महाराष्ट्र" }
    },
    "pot-sangli": {
      hi: { name: "सांगली APMC", location: "सांगली, महाराष्ट्र" },
      mr: { name: "सांगली APMC", location: "सांगली, महाराष्ट्र" }
    },
    "pot-karad": {
      hi: { name: "कराड APMC", location: "सातारा जिला, महाराष्ट्र" },
      mr: { name: "कराड APMC", location: "सातारा जिल्हा, महाराष्ट्र" }
    },
    "pot-solapur": {
      hi: { name: "सोलापुर APMC", location: "सोलापुर, महाराष्ट्र" },
      mr: { name: "सोलापूर APMC", location: "सोलापूर, महाराष्ट्र" }
    },
    "pot-indore": {
      hi: { name: "इंदौर मंडी", location: "इंदौर, मध्य प्रदेश" },
      mr: { name: "इंदूर बाजार", location: "इंदूर, मध्य प्रदेश" }
    },

    // Cotton
    "cot-nagpur": {
      hi: { name: "नागपुर APMC", location: "नागपुर, महाराष्ट्र" },
      mr: { name: "नागपूर APMC", location: "नागपूर, महाराष्ट्र" }
    },
    "cot-yavatmal": {
      hi: { name: "यवतमाल APMC", location: "यवतमाल, महाराष्ट्र" },
      mr: { name: "यवतमाळ APMC", location: "यवतमाळ, महाराष्ट्र" }
    },
    "cot-akola": {
      hi: { name: "अकोला APMC", location: "अकोला, महाराष्ट्र" },
      mr: { name: "अकोला APMC", location: "अकोला, महाराष्ट्र" }
    },
    "cot-amravati": {
      hi: { name: "अमरावती APMC", location: "अमरावती, महाराष्ट्र" },
      mr: { name: "अमरावती APMC", location: "अमरावती, महाराष्ट्र" }
    },
    "cot-hinganghat": {
      hi: { name: "हिंगणघाट APMC", location: "वर्धा, महाराष्ट्र" },
      mr: { name: "हिंगणघाट APMC", location: "वर्धा, महाराष्ट्र" }
    },
    "cot-wardha": {
      hi: { name: "वर्धा APMC", location: "वर्धा, महाराष्ट्र" },
      mr: { name: "वर्धा APMC", location: "वर्धा, महाराष्ट्र" }
    },
    "cot-jalgaon": {
      hi: { name: "जलगांव APMC", location: "जलगांव, महाराष्ट्र" },
      mr: { name: "जळगाव APMC", location: "जळगाव, महाराष्ट्र" }
    },
    "cot-dhule": {
      hi: { name: "धुले APMC", location: "धुले, महाराष्ट्र" },
      mr: { name: "धुळे APMC", location: "धुळे, महाराष्ट्र" }
    },
    "cot-aurangabad": {
      hi: { name: "औरंगाबाद APMC", location: "छ. संभाजीनगर, महाराष्ट्र" },
      mr: { name: "औरंगाबाद APMC", location: "छ. संभाजीनगर, महाराष्ट्र" }
    },
    "cot-nanded": {
      hi: { name: "नांदेड़ APMC", location: "नांदेड़, महाराष्ट्र" },
      mr: { name: "नांदेड APMC", location: "नांदेड, महाराष्ट्र" }
    },
    "cot-chandrapur": {
      hi: { name: "चंद्रपुर APMC", location: "चंद्रपुर, महाराष्ट्र" },
      mr: { name: "चंद्रपूर APMC", location: "चंद्रपूर, महाराष्ट्र" }
    },

    // Soybean
    "soy-latur": {
      hi: { name: "लातूर APMC", location: "लातूर, महाराष्ट्र" },
      mr: { name: "लातूर APMC", location: "लातूर, महाराष्ट्र" }
    },
    "soy-nanded": {
      hi: { name: "नांदेड़ APMC", location: "नांदेड़, महाराष्ट्र" },
      mr: { name: "नांदेड APMC", location: "नांदेड, महाराष्ट्र" }
    },
    "soy-akola": {
      hi: { name: "अकोला APMC", location: "अकोला, महाराष्ट्र" },
      mr: { name: "अकोला APMC", location: "अकोला, महाराष्ट्र" }
    },
    "soy-amravati": {
      hi: { name: "अमरावती APMC", location: "अमरावती, महाराष्ट्र" },
      mr: { name: "अमरावती APMC", location: "अमरावती, महाराष्ट्र" }
    },
    "soy-washim": {
      hi: { name: "वाशिम APMC", location: "वाशिम, महाराष्ट्र" },
      mr: { name: "वाशीम APMC", location: "वाशीम, महाराष्ट्र" }
    },
    "soy-yavatmal": {
      hi: { name: "यवतमाल APMC", location: "यवतमाल, महाराष्ट्र" },
      mr: { name: "यवतमाळ APMC", location: "यवतमाळ, महाराष्ट्र" }
    },
    "soy-hingoli": {
      hi: { name: "हिंगोली APMC", location: "हिंगोली, महाराष्ट्र" },
      mr: { name: "हिंगोली APMC", location: "हिंगोली, महाराष्ट्र" }
    },
    "soy-jalna": {
      hi: { name: "जालना APMC", location: "जालना, महाराष्ट्र" },
      mr: { name: "जालना APMC", location: "जालना, महाराष्ट्र" }
    },
    "soy-parbhani": {
      hi: { name: "परभणी APMC", location: "परभणी, महाराष्ट्र" },
      mr: { name: "परभणी APMC", location: "परभणी, महाराष्ट्र" }
    },
    "soy-beed": {
      hi: { name: "बीड APMC", location: "बीड, महाराष्ट्र" },
      mr: { name: "बीड APMC", location: "बीड, महाराष्ट्र" }
    },
    "soy-indore": {
      hi: { name: "इंदौर मंडी", location: "इंदौर, मध्य प्रदेश" },
      mr: { name: "इंदूर बाजार", location: "इंदूर, मध्य प्रदेश" }
    },

    // Rice
    "ric-gondia": {
      hi: { name: "गोंदिया APMC", location: "गोंदिया, महाराष्ट्र" },
      mr: { name: "गोंदिया APMC", location: "गोंदिया, महाराष्ट्र" }
    },
    "ric-bhandara": {
      hi: { name: "भंडारा APMC", location: "भंडारा, महाराष्ट्र" },
      mr: { name: "भंडारा APMC", location: "भंडारा, महाराष्ट्र" }
    },
    "ric-nagpur": {
      hi: { name: "नागपुर APMC", location: "नागपुर, महाराष्ट्र" },
      mr: { name: "नागपूर APMC", location: "नागपूर, महाराष्ट्र" }
    },
    "ric-chandrapur": {
      hi: { name: "चंद्रपुर APMC", location: "चंद्रपुर, महाराष्ट्र" },
      mr: { name: "चंद्रपूर APMC", location: "चंद्रपूर, महाराष्ट्र" }
    },
    "ric-gadchiroli": {
      hi: { name: "गडचिरोली APMC", location: "गडचिरोली, महाराष्ट्र" },
      mr: { name: "गडचिरोली APMC", location: "गडचिरोली, महाराष्ट्र" }
    },
    "ric-wardha": {
      hi: { name: "वर्धा APMC", location: "वर्धा, महाराष्ट्र" },
      mr: { name: "वर्धा APMC", location: "वर्धा, महाराष्ट्र" }
    },
    "ric-panvel": {
      hi: { name: "रायगढ़ (पनवेल) APMC", location: "रायगढ़, महाराष्ट्र" },
      mr: { name: "रायगड (पनवेल) APMC", location: "रायगड, महाराष्ट्र" }
    },
    "ric-thane": {
      hi: { name: "ठाणे APMC", location: "ठाणे, महाराष्ट्र" },
      mr: { name: "ठाणे APMC", location: "ठाणे, महाराष्ट्र" }
    },
    "ric-palghar": {
      hi: { name: "पालघर APMC", location: "पालघर, महाराष्ट्र" },
      mr: { name: "पालघर APMC", location: "पालघर, महाराष्ट्र" }
    },
    "ric-kolhapur": {
      hi: { name: "कोल्हापुर APMC", location: "कोल्हापुर, महाराष्ट्र" },
      mr: { name: "कोल्हापूर APMC", location: "कोल्हापूर, महाराष्ट्र" }
    },

    // Wheat
    "whe-latur": {
      hi: { name: "लातूर APMC", location: "लातूर, महाराष्ट्र" },
      mr: { name: "लातूर APMC", location: "लातूर, महाराष्ट्र" }
    },
    "whe-nanded": {
      hi: { name: "नांदेड़ APMC", location: "नांदेड़, महाराष्ट्र" },
      mr: { name: "नांदेड APMC", location: "नांदेड, महाराष्ट्र" }
    },
    "whe-aurangabad": {
      hi: { name: "औरंगाबाद APMC", location: "छ. संभाजीनगर, महाराष्ट्र" },
      mr: { name: "औरंगाबाद APMC", location: "छ. संभाजीनगर, महाराष्ट्र" }
    },
    "whe-jalna": {
      hi: { name: "जालना APMC", location: "जालना, महाराष्ट्र" },
      mr: { name: "जालना APMC", location: "जालना, महाराष्ट्र" }
    },
    "whe-amravati": {
      hi: { name: "अमरावती APMC", location: "अमरावती, महाराष्ट्र" },
      mr: { name: "अमरावती APMC", location: "अमरावती, महाराष्ट्र" }
    },
    "whe-akola": {
      hi: { name: "अकोला APMC", location: "अकोला, महाराष्ट्र" },
      mr: { name: "अकोला APMC", location: "अकोला, महाराष्ट्र" }
    },
    "whe-nagpur": {
      hi: { name: "नागपुर APMC", location: "नागपुर, महाराष्ट्र" },
      mr: { name: "नागपूर APMC", location: "नागपूर, महाराष्ट्र" }
    },
    "whe-pune": {
      hi: { name: "पुणे APMC", location: "पुणे, महाराष्ट्र" },
      mr: { name: "पुणे APMC", location: "पुणे, महाराष्ट्र" }
    },
    "whe-nashik": {
      hi: { name: "नासिक APMC", location: "नासिक, महाराष्ट्र" },
      mr: { name: "नाशिक APMC", location: "नाशिक, महाराष्ट्र" }
    },
    "whe-indore": {
      hi: { name: "इंदौर मंडी", location: "इंदौर, मध्य प्रदेश" },
      mr: { name: "इंदूर बाजार", location: "इंदूर, मध्य प्रदेश" }
    },

    // Sugarcane
    "sug-kolhapur": {
      hi: { name: "कोल्हापुर शुगर मिल क्लस्टर", location: "कोल्हापुर, महाराष्ट्र" },
      mr: { name: "कोल्हापूर साखर कारखाना गट", location: "कोल्हापूर, महाराष्ट्र" }
    },
    "sug-sangli": {
      hi: { name: "सांगली शुगर मिल क्लस्टर", location: "सांगली, महाराष्ट्र" },
      mr: { name: "सांगली साखर कारखाना गट", location: "सांगली, महाराष्ट्र" }
    },
    "sug-satara": {
      hi: { name: "सातारा शुगर मिल क्लस्टर", location: "सातारा, महाराष्ट्र" },
      mr: { name: "सातारा साखर कारखाना गट", location: "सातारा, महाराष्ट्र" }
    },
    "sug-pune": {
      hi: { name: "पुणे (बारामती) शुगर मिल्स", location: "पुणे जिला, महाराष्ट्र" },
      mr: { name: "पुणे (बारामती) साखर कारखाने", location: "पुणे जिल्हा, महाराष्ट्र" }
    },
    "sug-solapur": {
      hi: { name: "सोलापुर शुगर मिल क्लस्टर", location: "सोलापुर, महाराष्ट्र" },
      mr: { name: "सोलापूर साखर कारखाना गट", location: "सोलापूर, महाराष्ट्र" }
    },
    "sug-ahmednagar": {
      hi: { name: "अहमदनगर शुगर मिल्स", location: "अहमदनगर, महाराष्ट्र" },
      mr: { name: "अहमदनगर साखर कारखाने", location: "अहमदनगर, महाराष्ट्र" }
    },
    "sug-malegaon": {
      hi: { name: "मालेगांव सहकारी शुगर मिल", location: "नासिक, महाराष्ट्र" },
      mr: { name: "मालेगाव सहकारी साखर कारखाना", location: "नाशिक, महाराष्ट्र" }
    },
    "sug-karad": {
      hi: { name: "कराड शुगर मिल कॉम्प्लेक्स", location: "सातारा जिला, महाराष्ट्र" },
      mr: { name: "कराड साखर कारखाना संकुल", location: "सातारा जिल्हा, महाराष्ट्र" }
    },
    "sug-pandharpur": {
      hi: { name: "पंढरपुर शुगर मिल्स", location: "सोलापुर, महाराष्ट्र" },
      mr: { name: "पंढरपूर साखर कारखाने", location: "सोलापूर, महाराष्ट्र" }
    }
  };

  function getLocalizedMarket(market, lang) {
    if (!market) return { name: "", location: "" };
    if (lang === 'en') return { name: market.name, location: market.location };
    const loc = MARKET_LOCALIZATION[market.id];
    if (loc && loc[lang]) {
      return {
        name: loc[lang].name || market.name,
        location: loc[lang].location || market.location
      };
    }
    return { name: market.name, location: market.location };
  }

  const MARKET_DATA = [
    // Tomato
    { id: "tom-pune", name: "Pune APMC", location: "Pune, Maharashtra", lat: 18.5204, lon: 73.8567, crop: "Tomato", basePrice: 2450, baseDistance: 28, demand: "High", confidence: 95.2, reason: "Consistent high daily volume and strong wholesale buyer demand." },
    { id: "tom-nashik", name: "Nashik APMC", location: "Nashik, Maharashtra", lat: 19.9975, lon: 73.7898, crop: "Tomato", basePrice: 2520, baseDistance: 65, demand: "High", confidence: 96.1, reason: "Major northern Maharashtra transit hub offering premium rates for fresh arrivals." },
    { id: "tom-narayangaon", name: "Narayangaon APMC", location: "Pune District, Maharashtra", lat: 19.1232, lon: 73.9782, crop: "Tomato", basePrice: 2480, baseDistance: 45, demand: "High", confidence: 94.8, reason: "Renowned tomato trading centre with direct routes to inter-state buyers." },
    { id: "tom-vashi", name: "Mumbai (Vashi) APMC", location: "Navi Mumbai, Maharashtra", lat: 19.0771, lon: 72.9986, crop: "Tomato", basePrice: 2600, baseDistance: 120, demand: "High", confidence: 93.7, reason: "Highest consumption demand with premium prices offsetting transport cost." },
    { id: "tom-khed", name: "Khed APMC", location: "Pune District, Maharashtra", lat: 18.8472, lon: 73.9015, crop: "Tomato", basePrice: 2380, baseDistance: 32, demand: "Medium", confidence: 91.5, reason: "Quick turn-around and low unloading waiting time for local farmers." },
    { id: "tom-junnar", name: "Junnar APMC", location: "Pune District, Maharashtra", lat: 19.2081, lon: 73.8763, crop: "Tomato", basePrice: 2420, baseDistance: 50, demand: "Medium", confidence: 92.0, reason: "Established vegetable market with stable auction bidding." },
    { id: "tom-sangamner", name: "Sangamner APMC", location: "Ahmednagar, Maharashtra", lat: 19.5761, lon: 74.2096, crop: "Tomato", basePrice: 2390, baseDistance: 88, demand: "Medium", confidence: 90.8, reason: "Active regional trading with dependable cash settlements." },
    { id: "tom-ahmednagar", name: "Ahmednagar APMC", location: "Ahmednagar, Maharashtra", lat: 19.0952, lon: 74.7496, crop: "Tomato", basePrice: 2360, baseDistance: 110, demand: "Medium", confidence: 89.9, reason: "Broad auction participation from Marathwada and Western Maharashtra." },
    { id: "tom-satara", name: "Satara APMC", location: "Satara, Maharashtra", lat: 17.6805, lon: 73.9935, crop: "Tomato", basePrice: 2410, baseDistance: 95, demand: "Medium", confidence: 91.2, reason: "Steady local retail and semi-wholesale buyer network." },
    { id: "tom-kolhapur", name: "Kolhapur APMC", location: "Kolhapur, Maharashtra", lat: 16.705, lon: 74.2433, crop: "Tomato", basePrice: 2460, baseDistance: 180, demand: "High", confidence: 92.4, reason: "Strong border trade demand from southern Maharashtra and Karnataka." },
    { id: "tom-solapur", name: "Solapur APMC", location: "Solapur, Maharashtra", lat: 17.6599, lon: 75.9064, crop: "Tomato", basePrice: 2340, baseDistance: 195, demand: "Medium", confidence: 88.6, reason: "Accessible eastern market with dependable commodity turnover." },
    { id: "tom-baramati", name: "Baramati APMC", location: "Pune District, Maharashtra", lat: 18.1517, lon: 74.5772, crop: "Tomato", basePrice: 2400, baseDistance: 70, demand: "Medium", confidence: 90.5, reason: "Modern APMC infrastructure with prompt weighing and payment processing." },

    // Onion
    { id: "oni-lasalgaon", name: "Lasalgaon APMC", location: "Nashik, Maharashtra", lat: 20.1472, lon: 74.2267, crop: "Onion", basePrice: 2750, baseDistance: 78, demand: "High", confidence: 96.8, reason: "Asia's largest onion market benchmark with highest trade liquidity." },
    { id: "oni-pimpalgaon", name: "Pimpalgaon APMC", location: "Nashik, Maharashtra", lat: 20.1704, lon: 73.9858, crop: "Onion", basePrice: 2710, baseDistance: 62, demand: "High", confidence: 95.4, reason: "Premier export-quality sorting and active inter-state buyer auctions." },
    { id: "oni-nashik", name: "Nashik APMC", location: "Nashik, Maharashtra", lat: 19.9975, lon: 73.7898, crop: "Onion", basePrice: 2680, baseDistance: 55, demand: "High", confidence: 94.9, reason: "Major district headquarters mandi with steady competitive bidding." },
    { id: "oni-pune", name: "Pune APMC", location: "Pune, Maharashtra", lat: 18.5204, lon: 73.8567, crop: "Onion", basePrice: 2620, baseDistance: 25, demand: "High", confidence: 94.0, reason: "High metropolitan daily consumption and short local transport." },
    { id: "oni-yeola", name: "Yeola APMC", location: "Nashik, Maharashtra", lat: 20.0422, lon: 74.4883, crop: "Onion", basePrice: 2650, baseDistance: 85, demand: "Medium", confidence: 92.8, reason: "Trusted regional hub for summer onion storage and trading." },
    { id: "oni-nandgaon", name: "Nandgaon APMC", location: "Nashik, Maharashtra", lat: 20.3128, lon: 74.6582, crop: "Onion", basePrice: 2590, baseDistance: 92, demand: "Medium", confidence: 91.0, reason: "Fast clearance and direct highway access for bulk vehicle loading." },
    { id: "oni-manmad", name: "Manmad APMC", location: "Nashik, Maharashtra", lat: 20.2524, lon: 74.4373, crop: "Onion", basePrice: 2610, baseDistance: 88, demand: "Medium", confidence: 91.6, reason: "Key railway junction mandi facilitating long-distance transport dispatch." },
    { id: "oni-kalwan", name: "Kalwan APMC", location: "Nashik, Maharashtra", lat: 20.4851, lon: 73.9682, crop: "Onion", basePrice: 2580, baseDistance: 96, demand: "Medium", confidence: 90.2, reason: "Strong farmer participation and fair electronic weighbridge recording." },
    { id: "oni-dindori", name: "Dindori APMC", location: "Nashik, Maharashtra", lat: 20.2033, lon: 73.8344, crop: "Onion", basePrice: 2600, baseDistance: 70, demand: "Medium", confidence: 91.1, reason: "Growing trading activity with active Nashik-belt commission agents." },
    { id: "oni-ahmednagar", name: "Ahmednagar APMC", location: "Ahmednagar, Maharashtra", lat: 19.0952, lon: 74.7496, crop: "Onion", basePrice: 2560, baseDistance: 115, demand: "Medium", confidence: 90.0, reason: "Central Maharashtra distribution point connecting western and eastern traders." },
    { id: "oni-solapur", name: "Solapur APMC", location: "Solapur, Maharashtra", lat: 17.6599, lon: 75.9064, crop: "Onion", basePrice: 2530, baseDistance: 190, demand: "Medium", confidence: 89.4, reason: "Major outlet for Red Onion varieties into southern states." },
    { id: "oni-malegaon", name: "Malegaon APMC", location: "Nashik, Maharashtra", lat: 20.5539, lon: 74.5298, crop: "Onion", basePrice: 2630, baseDistance: 105, demand: "Medium", confidence: 91.8, reason: "High volume auctions connecting northern Maharashtra to Khandesh." },

    // Potato
    { id: "pot-pune", name: "Pune APMC", location: "Pune, Maharashtra", lat: 18.5204, lon: 73.8567, crop: "Potato", basePrice: 1950, baseDistance: 25, demand: "High", confidence: 95.0, reason: "Massive urban consumption ensuring rapid stock absorption at stable rates." },
    { id: "pot-vashi", name: "Mumbai (Vashi) APMC", location: "Navi Mumbai, Maharashtra", lat: 19.0771, lon: 72.9986, crop: "Potato", basePrice: 2080, baseDistance: 125, demand: "High", confidence: 94.5, reason: "Premier terminal market commanding premium prices for graded produce." },
    { id: "pot-nashik", name: "Nashik APMC", location: "Nashik, Maharashtra", lat: 19.9975, lon: 73.7898, crop: "Potato", basePrice: 1900, baseDistance: 60, demand: "Medium", confidence: 92.1, reason: "Good cold-chain connectivity and reliable processing-grade buyers." },
    { id: "pot-manchar", name: "Manchar APMC", location: "Pune District, Maharashtra", lat: 19.0064, lon: 73.9431, crop: "Potato", basePrice: 1920, baseDistance: 40, demand: "High", confidence: 93.6, reason: "Core potato cultivation belt mandi with direct factory procurement agents." },
    { id: "pot-khed", name: "Khed APMC", location: "Pune District, Maharashtra", lat: 18.8472, lon: 73.9015, crop: "Potato", basePrice: 1880, baseDistance: 30, demand: "Medium", confidence: 91.0, reason: "Short travel distance for local farmers and minimal handling wastage." },
    { id: "pot-satara", name: "Satara APMC", location: "Satara, Maharashtra", lat: 17.6805, lon: 73.9935, crop: "Potato", basePrice: 1890, baseDistance: 95, demand: "Medium", confidence: 90.4, reason: "Substantial cold storage access and steady regional demand." },
    { id: "pot-kolhapur", name: "Kolhapur APMC", location: "Kolhapur, Maharashtra", lat: 16.705, lon: 74.2433, crop: "Potato", basePrice: 1960, baseDistance: 180, demand: "Medium", confidence: 91.8, reason: "Active hospitality and regional consumer trade across South Maharashtra." },
    { id: "pot-sangli", name: "Sangli APMC", location: "Sangli, Maharashtra", lat: 16.8524, lon: 74.5815, crop: "Potato", basePrice: 1910, baseDistance: 190, demand: "Medium", confidence: 89.8, reason: "Comprehensive trading yard with efficient auction and clearance systems." },
    { id: "pot-karad", name: "Karad APMC", location: "Satara District, Maharashtra", lat: 17.2885, lon: 74.1843, crop: "Potato", basePrice: 1870, baseDistance: 130, demand: "Medium", confidence: 89.1, reason: "Convenient NH4 highway logistics reducing turnaround time." },
    { id: "pot-solapur", name: "Solapur APMC", location: "Solapur, Maharashtra", lat: 17.6599, lon: 75.9064, crop: "Potato", basePrice: 1850, baseDistance: 200, demand: "Low", confidence: 88.0, reason: "Steady bulk buying for regional consumer markets." },
    { id: "pot-indore", name: "Indore Mandi", location: "Indore, Madhya Pradesh", lat: 22.7196, lon: 75.8577, crop: "Potato", basePrice: 2020, baseDistance: 320, demand: "High", confidence: 92.5, reason: "Major central India potato processing hub with chip-grade premiums." },

    // Cotton
    { id: "cot-nagpur", name: "Nagpur APMC", location: "Nagpur, Maharashtra", lat: 21.1458, lon: 79.0882, crop: "Cotton", basePrice: 8120, baseDistance: 45, demand: "High", confidence: 96.5, reason: "Vidarbha's flagship cotton market with active ginning mill buyers." },
    { id: "cot-yavatmal", name: "Yavatmal APMC", location: "Yavatmal, Maharashtra", lat: 20.3888, lon: 78.1204, crop: "Cotton", basePrice: 8080, baseDistance: 75, demand: "High", confidence: 95.0, reason: "Core cotton heartland mandi offering competitive prices for FAQ grade." },
    { id: "cot-akola", name: "Akola APMC", location: "Akola, Maharashtra", lat: 20.7002, lon: 77.0082, crop: "Cotton", basePrice: 8050, baseDistance: 95, demand: "High", confidence: 94.2, reason: "Major commercial hub with extensive cotton pressing and export linkages." },
    { id: "cot-amravati", name: "Amravati APMC", location: "Amravati, Maharashtra", lat: 20.932, lon: 77.7523, crop: "Cotton", basePrice: 8020, baseDistance: 65, demand: "Medium", confidence: 93.8, reason: "Established trading network with consistent MSP compliance." },
    { id: "cot-hinganghat", name: "Hinganghat APMC", location: "Wardha, Maharashtra", lat: 20.55, lon: 78.8333, crop: "Cotton", basePrice: 8140, baseDistance: 50, demand: "High", confidence: 95.8, reason: "Historic textile-grade cotton auction with top bidding mills." },
    { id: "cot-wardha", name: "Wardha APMC", location: "Wardha, Maharashtra", lat: 20.7453, lon: 78.6022, crop: "Cotton", basePrice: 7980, baseDistance: 40, demand: "Medium", confidence: 92.4, reason: "Proximity to major spinning units providing low-friction unloading." },
    { id: "cot-jalgaon", name: "Jalgaon APMC", location: "Jalgaon, Maharashtra", lat: 21.0077, lon: 75.5626, crop: "Cotton", basePrice: 8060, baseDistance: 130, demand: "High", confidence: 93.5, reason: "Khandesh trading nexus with strong demand for long-staple varieties." },
    { id: "cot-dhule", name: "Dhule APMC", location: "Dhule, Maharashtra", lat: 20.9042, lon: 74.7749, crop: "Cotton", basePrice: 7950, baseDistance: 145, demand: "Medium", confidence: 91.2, reason: "Highway connectivity to Gujarat textile manufacturing clusters." },
    { id: "cot-aurangabad", name: "Aurangabad APMC", location: "Chh. Sambhajinagar, Maharashtra", lat: 19.8762, lon: 75.3433, crop: "Cotton", basePrice: 7990, baseDistance: 160, demand: "Medium", confidence: 92.0, reason: "Marathwada regional market with transparent electronic auction facilities." },
    { id: "cot-nanded", name: "Nanded APMC", location: "Nanded, Maharashtra", lat: 19.1383, lon: 77.321, crop: "Cotton", basePrice: 8010, baseDistance: 175, demand: "Medium", confidence: 91.7, reason: "Active procurement centre connecting Telangana and Maharashtra border belts." },
    { id: "cot-chandrapur", name: "Chandrapur APMC", location: "Chandrapur, Maharashtra", lat: 19.9615, lon: 79.2961, crop: "Cotton", basePrice: 7930, baseDistance: 85, demand: "Low", confidence: 89.5, reason: "Reliable local trade support for small-holder farmers." },

    // Soybean
    { id: "soy-latur", name: "Latur APMC", location: "Latur, Maharashtra", lat: 18.4088, lon: 76.5604, crop: "Soybean", basePrice: 4680, baseDistance: 50, demand: "High", confidence: 96.2, reason: "India's premier soybean benchmark market with dense solvent extraction plants." },
    { id: "soy-nanded", name: "Nanded APMC", location: "Nanded, Maharashtra", lat: 19.1383, lon: 77.321, crop: "Soybean", basePrice: 4590, baseDistance: 80, demand: "High", confidence: 94.6, reason: "Strong corporate oil mill procurement driving competitive spot rates." },
    { id: "soy-akola", name: "Akola APMC", location: "Akola, Maharashtra", lat: 20.7002, lon: 77.0082, crop: "Soybean", basePrice: 4620, baseDistance: 95, demand: "High", confidence: 94.8, reason: "Established oilseed exchange with reliable grading and swift settlement." },
    { id: "soy-amravati", name: "Amravati APMC", location: "Amravati, Maharashtra", lat: 20.932, lon: 77.7523, crop: "Soybean", basePrice: 4560, baseDistance: 65, demand: "Medium", confidence: 93.1, reason: "Regular daily arrivals with active local crushing unit representation." },
    { id: "soy-washim", name: "Washim APMC", location: "Washim, Maharashtra", lat: 20.1112, lon: 77.1345, crop: "Soybean", basePrice: 4540, baseDistance: 110, demand: "Medium", confidence: 91.9, reason: "Prominent Vidarbha soybean belt mandi with quick electronic payments." },
    { id: "soy-yavatmal", name: "Yavatmal APMC", location: "Yavatmal, Maharashtra", lat: 20.3888, lon: 78.1204, crop: "Soybean", basePrice: 4520, baseDistance: 75, demand: "Medium", confidence: 91.5, reason: "Steady local crusher demand and fair tare weight measurement." },
    { id: "soy-hingoli", name: "Hingoli APMC", location: "Hingoli, Maharashtra", lat: 19.7188, lon: 77.1472, crop: "Soybean", basePrice: 4500, baseDistance: 105, demand: "Medium", confidence: 90.7, reason: "Competitive local merchant bidding for clean, dry harvest lots." },
    { id: "soy-jalna", name: "Jalna APMC", location: "Jalna, Maharashtra", lat: 19.8347, lon: 75.8816, crop: "Soybean", basePrice: 4580, baseDistance: 140, demand: "High", confidence: 93.4, reason: "Central commercial market with direct linkages to major edible oil brands." },
    { id: "soy-parbhani", name: "Parbhani APMC", location: "Parbhani, Maharashtra", lat: 19.2644, lon: 76.7749, crop: "Soybean", basePrice: 4510, baseDistance: 90, demand: "Medium", confidence: 91.0, reason: "Proximity to feed manufacturing and extraction plants." },
    { id: "soy-beed", name: "Beed APMC", location: "Beed, Maharashtra", lat: 18.9891, lon: 75.7601, crop: "Soybean", basePrice: 4480, baseDistance: 120, demand: "Medium", confidence: 90.2, reason: "Consistent volume handling and prompt farmer queue clearing." },
    { id: "soy-indore", name: "Indore Mandi", location: "Indore, Madhya Pradesh", lat: 22.7196, lon: 75.8577, crop: "Soybean", basePrice: 4720, baseDistance: 310, demand: "High", confidence: 95.5, reason: "National soybean trading headquarters with highest base procurement price." },

    // Rice / Paddy
    { id: "ric-gondia", name: "Gondia APMC", location: "Gondia, Maharashtra", lat: 21.4554, lon: 80.1961, crop: "Rice", basePrice: 2550, baseDistance: 45, demand: "High", confidence: 95.8, reason: "Rice bowl of Maharashtra with over 100 functional modern rice mills." },
    { id: "ric-bhandara", name: "Bhandara APMC", location: "Bhandara, Maharashtra", lat: 21.1667, lon: 79.65, crop: "Rice", basePrice: 2510, baseDistance: 55, demand: "High", confidence: 94.4, reason: "Premier paddy auction center with strong government and private procurement." },
    { id: "ric-nagpur", name: "Nagpur APMC", location: "Nagpur, Maharashtra", lat: 21.1458, lon: 79.0882, crop: "Rice", basePrice: 2580, baseDistance: 40, demand: "High", confidence: 95.0, reason: "Terminal urban demand ensuring continuous off-take for fine varieties." },
    { id: "ric-chandrapur", name: "Chandrapur APMC", location: "Chandrapur, Maharashtra", lat: 19.9615, lon: 79.2961, crop: "Rice", basePrice: 2470, baseDistance: 85, demand: "Medium", confidence: 92.0, reason: "Reliable procurement center for coarse and medium raw paddy." },
    { id: "ric-gadchiroli", name: "Gadchiroli APMC", location: "Gadchiroli, Maharashtra", lat: 20.1849, lon: 79.9948, crop: "Rice", basePrice: 2430, baseDistance: 110, demand: "Medium", confidence: 90.5, reason: "MSP procurement operations providing guaranteed minimum safety net." },
    { id: "ric-wardha", name: "Wardha APMC", location: "Wardha, Maharashtra", lat: 20.7453, lon: 78.6022, crop: "Rice", basePrice: 2480, baseDistance: 60, demand: "Medium", confidence: 91.8, reason: "Fast logistics to central processing centers." },
    { id: "ric-panvel", name: "Raigad (Panvel) APMC", location: "Raigad, Maharashtra", lat: 18.9894, lon: 73.1175, crop: "Rice", basePrice: 2620, baseDistance: 120, demand: "High", confidence: 93.9, reason: "Direct access to Mumbai metropolitan consumer retail distributors." },
    { id: "ric-thane", name: "Thane APMC", location: "Thane, Maharashtra", lat: 19.2183, lon: 72.9781, crop: "Rice", basePrice: 2600, baseDistance: 130, demand: "High", confidence: 93.2, reason: "High value market for aromatic and local Wada Kolam paddy types." },
    { id: "ric-palghar", name: "Palghar APMC", location: "Palghar, Maharashtra", lat: 19.6967, lon: 72.7699, crop: "Rice", basePrice: 2540, baseDistance: 145, demand: "Medium", confidence: 91.4, reason: "Established coastal rice trading network with competitive miller auctions." },
    { id: "ric-kolhapur", name: "Kolhapur APMC", location: "Kolhapur, Maharashtra", lat: 16.705, lon: 74.2433, crop: "Rice", basePrice: 2570, baseDistance: 180, demand: "Medium", confidence: 92.3, reason: "Active South Maharashtra consumer hub with steady mill off-take." },

    // Wheat
    { id: "whe-latur", name: "Latur APMC", location: "Latur, Maharashtra", lat: 18.4088, lon: 76.5604, crop: "Wheat", basePrice: 2320, baseDistance: 50, demand: "High", confidence: 94.5, reason: "Leading Marathwada grain hub with strong flour mill and consumer demand." },
    { id: "whe-nanded", name: "Nanded APMC", location: "Nanded, Maharashtra", lat: 19.1383, lon: 77.321, crop: "Wheat", basePrice: 2280, baseDistance: 80, demand: "Medium", confidence: 92.8, reason: "Active procurement yard with good rail and road cargo links." },
    { id: "whe-aurangabad", name: "Aurangabad APMC", location: "Chh. Sambhajinagar, Maharashtra", lat: 19.8762, lon: 75.3433, crop: "Wheat", basePrice: 2340, baseDistance: 135, demand: "High", confidence: 93.7, reason: "High urban consumption supporting premium rates for Sharbati and Lokwan." },
    { id: "whe-jalna", name: "Jalna APMC", location: "Jalna, Maharashtra", lat: 19.8347, lon: 75.8816, crop: "Wheat", basePrice: 2290, baseDistance: 125, demand: "Medium", confidence: 91.9, reason: "Major grain depot with regular commercial auctions." },
    { id: "whe-amravati", name: "Amravati APMC", location: "Amravati, Maharashtra", lat: 20.932, lon: 77.7523, crop: "Wheat", basePrice: 2260, baseDistance: 65, demand: "Medium", confidence: 91.2, reason: "Dependable local flour miller bidding with low moisture deductions." },
    { id: "whe-akola", name: "Akola APMC", location: "Akola, Maharashtra", lat: 20.7002, lon: 77.0082, crop: "Wheat", basePrice: 2270, baseDistance: 95, demand: "Medium", confidence: 91.6, reason: "Well-regulated grain trade yard with standardized weighing." },
    { id: "whe-nagpur", name: "Nagpur APMC", location: "Nagpur, Maharashtra", lat: 21.1458, lon: 79.0882, crop: "Wheat", basePrice: 2360, baseDistance: 40, demand: "High", confidence: 94.8, reason: "Central India transit hub commanding above-average retail prices." },
    { id: "whe-pune", name: "Pune APMC", location: "Pune, Maharashtra", lat: 18.5204, lon: 73.8567, crop: "Wheat", basePrice: 2420, baseDistance: 30, demand: "High", confidence: 95.6, reason: "Top metropolitan market with premium prices for polished Lokwan wheat." },
    { id: "whe-nashik", name: "Nashik APMC", location: "Nashik, Maharashtra", lat: 19.9975, lon: 73.7898, crop: "Wheat", basePrice: 2310, baseDistance: 60, demand: "Medium", confidence: 92.4, reason: "Steady local wholesale demand and rapid truck turnaround." },
    { id: "whe-indore", name: "Indore Mandi", location: "Indore, Madhya Pradesh", lat: 22.7196, lon: 75.8577, crop: "Wheat", basePrice: 2450, baseDistance: 290, demand: "High", confidence: 96.0, reason: "Renowned benchmark for MP Sharbati & Lokwan wheat with highest trade interest." },

    // Sugarcane
    { id: "sug-kolhapur", name: "Kolhapur Sugar Mill Cluster", location: "Kolhapur, Maharashtra", lat: 16.705, lon: 74.2433, crop: "Sugarcane", basePrice: 345, baseDistance: 35, demand: "High", confidence: 96.0, reason: "Highest sugar recovery zone in Maharashtra ensuring top FRP payouts." },
    { id: "sug-sangli", name: "Sangli Sugar Mill Cluster", location: "Sangli, Maharashtra", lat: 16.8524, lon: 74.5815, crop: "Sugarcane", basePrice: 338, baseDistance: 45, demand: "High", confidence: 95.2, reason: "Efficient cooperative processing with reliable harvesting and cutting schedules." },
    { id: "sug-satara", name: "Satara Sugar Mill Cluster", location: "Satara, Maharashtra", lat: 17.6805, lon: 73.9935, crop: "Sugarcane", basePrice: 335, baseDistance: 50, demand: "High", confidence: 94.6, reason: "Prompt gate weighing and structured state-backed installment payments." },
    { id: "sug-pune", name: "Pune (Baramati) Sugar Mills", location: "Pune District, Maharashtra", lat: 18.1517, lon: 74.5772, crop: "Sugarcane", basePrice: 332, baseDistance: 40, demand: "High", confidence: 94.0, reason: "Modern co-generation plants with reduced mill yard holding delays." },
    { id: "sug-solapur", name: "Solapur Sugar Mill Cluster", location: "Solapur, Maharashtra", lat: 17.6599, lon: 75.9064, crop: "Sugarcane", basePrice: 320, baseDistance: 65, demand: "Medium", confidence: 91.5, reason: "Extensive crushing capacity accommodating high-volume harvest transport." },
    { id: "sug-ahmednagar", name: "Ahmednagar Sugar Mills", location: "Ahmednagar, Maharashtra", lat: 19.0952, lon: 74.7496, crop: "Sugarcane", basePrice: 325, baseDistance: 55, demand: "Medium", confidence: 92.4, reason: "Historic cooperative belt with transparent brix-sugar recovery testing." },
    { id: "sug-malegaon", name: "Malegaon Co-op Sugar Mill", location: "Nashik, Maharashtra", lat: 20.5539, lon: 74.5298, crop: "Sugarcane", basePrice: 322, baseDistance: 70, demand: "Medium", confidence: 91.0, reason: "Organized vehicle transit passes and transparent recovery calculations." },
    { id: "sug-karad", name: "Karad Sugar Mill Complex", location: "Satara District, Maharashtra", lat: 17.2885, lon: 74.1843, crop: "Sugarcane", basePrice: 336, baseDistance: 48, demand: "High", confidence: 94.2, reason: "High-efficiency crushing line ensuring minimal transit weight loss." },
    { id: "sug-pandharpur", name: "Pandharpur Sugar Mills", location: "Solapur, Maharashtra", lat: 17.6749, lon: 75.3262, crop: "Sugarcane", basePrice: 324, baseDistance: 60, demand: "Medium", confidence: 91.8, reason: "Dependable harvest reception with computerized weighing slips." }
  ];

  function normalizeCropName(cropSelect, form) {
    // 1. Check hidden input or form dataset
    if (form) {
      const hiddenInput = form.querySelector('input[name="crop"]');
      const val = (hiddenInput?.value || form.dataset?.crop || "").trim().toLowerCase();
      if (val) {
        if (val.includes("tomato") || val.includes("टमाटर") || val.includes("टोमॅटो")) return "Tomato";
        if (val.includes("onion") || val.includes("प्याज") || val.includes("कांदा")) return "Onion";
        if (val.includes("potato") || val.includes("आलू") || val.includes("बटाटा")) return "Potato";
        if (val.includes("cotton") || val.includes("कपास") || val.includes("कापूस")) return "Cotton";
        if (val.includes("soybean") || val.includes("सोयाबीन")) return "Soybean";
        if (val.includes("rice") || val.includes("paddy") || val.includes("चावल") || val.includes("धान") || val.includes("तांदूळ") || val.includes("भात")) return "Rice";
        if (val.includes("wheat") || val.includes("गेहूं") || val.includes("गहू")) return "Wheat";
        if (val.includes("sugarcane") || val.includes("गन्ना") || val.includes("ऊस")) return "Sugarcane";
      }
    }

    // 2. Check URL search param ?crop=
    const urlCrop = (new URLSearchParams(window.location.search).get("crop") || "").trim().toLowerCase();
    if (urlCrop) {
      if (urlCrop.includes("tomato")) return "Tomato";
      if (urlCrop.includes("onion")) return "Onion";
      if (urlCrop.includes("potato")) return "Potato";
      if (urlCrop.includes("cotton")) return "Cotton";
      if (urlCrop.includes("soybean")) return "Soybean";
      if (urlCrop.includes("rice") || urlCrop.includes("paddy")) return "Rice";
      if (urlCrop.includes("wheat")) return "Wheat";
      if (urlCrop.includes("sugarcane")) return "Sugarcane";
    }

    // 3. Check page pathname
    const path = (window.location.pathname || "").toLowerCase();
    if (path.includes("tomato")) return "Tomato";
    if (path.includes("onion")) return "Onion";
    if (path.includes("potato")) return "Potato";
    if (path.includes("cotton")) return "Cotton";
    if (path.includes("soybean")) return "Soybean";
    if (path.includes("rice") || path.includes("paddy")) return "Rice";
    if (path.includes("wheat")) return "Wheat";
    if (path.includes("sugarcane")) return "Sugarcane";

    // 4. Check cropSelect dropdown
    if (cropSelect && cropSelect.selectedIndex >= 0) {
      const selectedOpt = cropSelect.options[cropSelect.selectedIndex];
      if (selectedOpt) {
        const translateKey = selectedOpt.getAttribute("data-translate-key") || "";
        if (translateKey.includes("Tomato")) return "Tomato";
        if (translateKey.includes("Onion")) return "Onion";
        if (translateKey.includes("Potato")) return "Potato";
        if (translateKey.includes("Cotton")) return "Cotton";
        if (translateKey.includes("Soybean")) return "Soybean";
        if (translateKey.includes("Rice")) return "Rice";
        if (translateKey.includes("Wheat")) return "Wheat";
        if (translateKey.includes("Sugarcane")) return "Sugarcane";

        const text = (selectedOpt.textContent || "").trim().toLowerCase();
        if (text.includes("tomato") || text.includes("टमाटर") || text.includes("टोमॅटो")) return "Tomato";
        if (text.includes("onion") || text.includes("प्याज") || text.includes("कांदा")) return "Onion";
        if (text.includes("potato") || text.includes("आलू") || text.includes("बटाटा")) return "Potato";
        if (text.includes("cotton") || text.includes("कपास") || text.includes("कापूस")) return "Cotton";
        if (text.includes("soybean") || text.includes("सोयाबीन")) return "Soybean";
        if (text.includes("rice") || text.includes("paddy") || text.includes("चावल") || text.includes("धान") || text.includes("तांदूळ") || text.includes("भात")) return "Rice";
        if (text.includes("wheat") || text.includes("गेहूं") || text.includes("गहू")) return "Wheat";
        if (text.includes("sugarcane") || text.includes("गन्ना") || text.includes("ऊस")) return "Sugarcane";
      }
    }

    return "Tomato";
  }

  function extractUserLocation(form) {
    const locInput = form.querySelector('input[name="location"], input[placeholder*="Location"], input[placeholder*="स्थान"]');
    if (locInput && locInput.value.trim()) {
      return locInput.value.trim();
    }
    const locBtn = form.querySelector(".location-button") || document.getElementById("detect-location-btn");
    const btnSpan = locBtn?.querySelector("span");
    const text = btnSpan?.textContent || "";
    if (text && !text.includes("Detect") && !text.includes("पता") && !text.includes("शोध") && !text.includes("Use My") && !text.includes("मेरी लोकेशन") && !text.includes("माझे स्थान") && !text.includes("Location access") && !text.includes("अनुमति") && !text.includes("परवानगी")) {
      return text.replace("📍", "").trim();
    }
    const urlParams = new URLSearchParams(window.location.search);
    const urlLoc = urlParams.get("location");
    if (urlLoc) return urlLoc.trim();

    return "";
  }

  function getMarketDistanceKm(userLocationStr, market) {
    if (!userLocationStr) return market.baseDistance;
    const lowerLoc = userLocationStr.toLowerCase();
    let userCoords = null;
    for (const [cityName, coords] of Object.entries(CITY_COORDINATES)) {
      if (lowerLoc.includes(cityName)) {
        userCoords = coords;
        break;
      }
    }
    if (!userCoords || !market.lat || !market.lon) {
      return market.baseDistance;
    }

    const R = 6371; // Earth radius in km
    const dLat = (market.lat - userCoords.lat) * (Math.PI / 180);
    const dLon = (market.lon - userCoords.lon) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(userCoords.lat * (Math.PI / 180)) *
        Math.cos(market.lat * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const crowFly = R * c;
    return Math.max(12, Math.round(crowFly * 1.25));
  }
 
  const TRANSPORT_RATE_PER_KM = 3.5;

  function formatRupees(amount) {
    if (amount < 0) {
      return `-₹${Math.abs(amount).toLocaleString('en-IN')}`;
    }
    return `₹${amount.toLocaleString('en-IN')}`;
  }

  function calculateMarketEconomics(market, quantityKg, userLocationStr, sellingDateStr) {
    const qty = (typeof quantityKg === 'number' && !isNaN(quantityKg) && isFinite(quantityKg) && quantityKg > 0)
      ? quantityKg
      : 500;
    const distanceKm = getMarketDistanceKm(userLocationStr, market);

    let dateMultiplier = 1;
    if (sellingDateStr) {
      const dateObj = new Date(sellingDateStr);
      if (!isNaN(dateObj.getTime())) {
        const day = dateObj.getDate();
        dateMultiplier = 1 + Math.sin(day * 0.4) * 0.015;
      }
    }

    // 1. Market Price per quintal (1 quintal = 100 kg)
    const pricePerQtl = Math.round(market.basePrice * dateMultiplier);
    // 2. Market Price per kg
    const pricePerKg = pricePerQtl / 100;
    // 3. Gross Crop Value = PricePerQtl * (QuantityKg / 100)
    const grossCropValue = Math.round((pricePerQtl * qty) / 100);
    // 4. Transport Cost = DistanceKm * RatePerKm
    const estTransport = Math.round(distanceKm * TRANSPORT_RATE_PER_KM);
    // 5. Estimated Net Amount = Gross Crop Value - Transport Cost (never clamped to 0)
    const estNet = grossCropValue - estTransport;

    return {
      ...market,
      distanceKm,
      pricePerQtl,
      pricePerKg,
      grossCropValue,
      estRevenue: grossCropValue, // Backward compatibility alias
      estTransport,
      estNet,
      quantityKg: qty
    };
  }

  const SHOWN_STORAGE_KEY = "fasalo_shown_markets";

  function getSessionShownIds(crop) {
    try {
      const raw = sessionStorage.getItem(SHOWN_STORAGE_KEY);
      if (!raw) return [];
      const obj = JSON.parse(raw);
      return Array.isArray(obj[crop]) ? obj[crop] : [];
    } catch (e) {
      return [];
    }
  }

  function saveSessionShownIds(crop, ids) {
    try {
      const raw = sessionStorage.getItem(SHOWN_STORAGE_KEY);
      const obj = raw ? JSON.parse(raw) : {};
      obj[crop] = ids;
      sessionStorage.setItem(SHOWN_STORAGE_KEY, JSON.stringify(obj));
    } catch (e) {
      // Ignore quota error
    }
  }

  function selectMarketsForQuery(crop, quantityKg, userLocationStr, sellingDateStr) {
    const cropMarkets = MARKET_DATA.filter((m) => m.crop.toLowerCase() === crop.toLowerCase());
    if (!cropMarkets.length) return [];

    const candidateMarkets = cropMarkets.map((m) =>
      calculateMarketEconomics(m, quantityKg, userLocationStr, sellingDateStr)
    );

    candidateMarkets.sort((a, b) => b.estNet - a.estNet);

    const BATCH_SIZE = Math.min(5, candidateMarkets.length);
    const shownIds = getSessionShownIds(crop);
    const unseen = candidateMarkets.filter((m) => !shownIds.includes(m.id));

    let selected = [];

    if (unseen.length >= BATCH_SIZE) {
      selected = unseen.slice(0, BATCH_SIZE);
      const updatedShown = [...shownIds, ...selected.map((m) => m.id)];
      saveSessionShownIds(crop, updatedShown);
    } else {
      selected = [...unseen];
      const needed = BATCH_SIZE - selected.length;
      const selectedIds = new Set(selected.map((m) => m.id));
      const availableToReuse = candidateMarkets.filter((m) => !selectedIds.has(m.id));
      selected.push(...availableToReuse.slice(0, needed));
      saveSessionShownIds(crop, selected.map((m) => m.id));
    }

    const uniqueResults = [];
    const seenInCurrent = new Set();
    for (const market of selected) {
      if (!seenInCurrent.has(market.id)) {
        seenInCurrent.add(market.id);
        uniqueResults.push(market);
      }
    }

    return uniqueResults;
  }

  function renderFarmerFriendlyModalHtml(markets, lang) {
    const t = translations[lang] || translations.en;
    if (!markets || !markets.length) {
      const emptyTitle = t.modalEmptyTitle || t.resultsEmptyTitle || "No Suitable Markets Found";
      const emptyDesc = t.modalEmpty || t.resultsEmpty || "No suitable markets found for this search. Try changing the location, crop, quantity, or selling date.";
      return `
        <div style="padding: var(--space-8) var(--space-4); text-align: center;">
          <span class="icon-tile" style="margin-inline: auto; margin-bottom: var(--space-4);" aria-hidden="true">
            <svg class="icon" viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" stroke-width="2" fill="none"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          </span>
          <h3 class="heading-3" style="margin-bottom: var(--space-2); color: var(--forest-950);">${emptyTitle}</h3>
          <p class="body-copy" style="max-width: 46ch; margin-inline: auto; color: var(--color-text-muted);">${emptyDesc}</p>
        </div>
      `;
    }

    const bestMarket = markets[0];
    const remainingMarkets = markets.slice(1);
    const locBest = getLocalizedMarket(bestMarket, lang);

    // Dynamic state styling and badges for positive / neutral / loss outcomes
    let bestBadgeText = t.modalBestOptionBadge || "⭐ Best Option";
    let bestBadgeClass = "farmer-best-badge";
    let bestBoxClass = "farmer-metric-box--highlight";
    let bestNetValClass = "farmer-metric-value--profit";
    let bestTagText = t.modalGoodChoiceTag || "🟢 Good choice for your harvest";
    let bestTagClass = "farmer-recommendation-tag";

    if (bestMarket.estNet < 0) {
      bestBadgeText = t.modalNotProfitableBadge || "🔴 Not Profitable";
      bestBadgeClass = "farmer-best-badge farmer-best-badge--loss";
      bestBoxClass = "farmer-metric-box--loss";
      bestNetValClass = "farmer-metric-value--loss";
      bestTagText = t.modalNotProfitableTag || "🔴 Not profitable after travel";
      bestTagClass = "farmer-recommendation-tag farmer-recommendation-tag--loss";
    } else if (bestMarket.estNet === 0) {
      bestBadgeText = t.modalBreakEvenBadge || "🟡 Break-Even";
      bestBadgeClass = "farmer-best-badge farmer-best-badge--neutral";
      bestBoxClass = "";
      bestNetValClass = "";
      bestTagText = t.modalBreakEvenTag || "🟡 Break-even / No gain after travel";
      bestTagClass = "farmer-recommendation-tag farmer-recommendation-tag--neutral";
    }

    const bestOptionHtml = `
      <article class="farmer-best-card">
        <div class="farmer-best-card__header">
          <div>
            <span class="${bestBadgeClass}">${bestBadgeText}</span>
            <h3 class="farmer-best-card__title">${locBest.name}</h3>
            <p class="farmer-best-card__meta">
              <span>📍 ${locBest.location}</span>
              <span>&bull;</span>
              <span>📏 ${bestMarket.distanceKm} km ${t.modalAway || "away"}</span>
            </p>
          </div>
        </div>

        <div class="farmer-metrics-grid">
          <div class="farmer-metric-box">
            <span class="farmer-metric-label">${t.modalTodaysPrice || "Today's Price"}</span>
            <p class="farmer-metric-value">₹${bestMarket.pricePerQtl.toLocaleString('en-IN')}<span class="farmer-metric-subtext">${t.modalPerQtl || " / Quintal"}</span></p>
            <span class="farmer-metric-subtext">(₹${bestMarket.pricePerKg.toFixed(2)}${t.modalPerKg || "/kg"})</span>
          </div>

          <div class="farmer-metric-box">
            <span class="farmer-metric-label">${t.modalTravelCost || "Travel Cost"}</span>
            <p class="farmer-metric-value">₹${bestMarket.estTransport.toLocaleString('en-IN')}</p>
            <span class="farmer-metric-subtext">${bestMarket.distanceKm} km</span>
          </div>

          <div class="farmer-metric-box ${bestBoxClass}">
            <span class="farmer-metric-label">${t.modalYouGet || "Estimated Net Amount"}</span>
            <p class="farmer-metric-value ${bestNetValClass}">${formatRupees(bestMarket.estNet)}</p>
            <span class="farmer-metric-subtext">${t.modalCropValue || "Crop Value"}: ₹${bestMarket.grossCropValue.toLocaleString('en-IN')} (${bestMarket.quantityKg} kg)</span>
          </div>
        </div>

        <div class="${bestTagClass}">
          <span>${bestTagText}</span>
        </div>
      </article>
    `;

    let otherMarketsHtml = "";
    if (remainingMarkets.length > 0) {
      otherMarketsHtml = `
        <div class="other-markets-container">
          <h4 class="other-markets-heading">${t.modalOtherMarkets || "Other Good Markets"}</h4>
          <div class="other-markets-list">
            ${remainingMarkets.map((m, idx) => {
              const locM = getLocalizedMarket(m, lang);
              let tagText = idx === 0 ? (t.modalGoodOptionBadge || "🟢 Good Choice") : (t.modalAlternativeBadge || "Alternative Option");
              let tagClass = "farmer-compact-tag";
              let netValClass = "farmer-compact-metric-val farmer-compact-metric-val--net";

              if (m.estNet < 0) {
                tagText = t.modalNotProfitableBadge || "🔴 Not Profitable";
                tagClass = "farmer-compact-tag farmer-compact-tag--loss";
                netValClass = "farmer-compact-metric-val farmer-compact-metric-val--loss";
              } else if (m.estNet === 0) {
                tagText = t.modalBreakEvenBadge || "🟡 Break-Even";
                tagClass = "farmer-compact-tag farmer-compact-tag--neutral";
                netValClass = "farmer-compact-metric-val";
              }

              return `
              <article class="farmer-compact-card">
                <div class="farmer-compact-card__header">
                  <div>
                    <h5 class="farmer-compact-card__title">${locM.name}</h5>
                    <p class="farmer-compact-card__meta">📍 ${locM.location} &bull; 📏 ${m.distanceKm} km ${t.modalAway || "away"}</p>
                  </div>
                  <span class="${tagClass}">${tagText}</span>
                </div>
                <div class="farmer-compact-metrics">
                  <div class="farmer-compact-metric-item">
                    <span class="farmer-compact-metric-label">${t.modalTodaysPrice || "Today's Price"}</span>
                    <span class="farmer-compact-metric-val">₹${m.pricePerQtl.toLocaleString('en-IN')}${t.modalPerQtl || "/Qtl"}</span>
                  </div>
                  <div class="farmer-compact-metric-item">
                    <span class="farmer-compact-metric-label">${t.modalTravelCost || "Travel Cost"}</span>
                    <span class="farmer-compact-metric-val">₹${m.estTransport.toLocaleString('en-IN')}</span>
                  </div>
                  <div class="farmer-compact-metric-item">
                    <span class="farmer-compact-metric-label">${t.modalYouGet || "Estimated Net"}</span>
                    <span class="${netValClass}">${formatRupees(m.estNet)}</span>
                  </div>
                </div>
              </article>
            `;}).join("")}
          </div>
        </div>
      `;
    }

    return bestOptionHtml + otherMarketsHtml;
  }

  var lastSearchResults = null;
  var lastSearchQuantity = 500;
  var lastSearchForm = null;

  function openMarketModal(markets, quantityKg) {
    const modal = document.getElementById("market-result-modal");
    const modalBody = document.getElementById("market-modal-body");
    if (!modal || !modalBody) return;

    modalBody.innerHTML = renderFarmerFriendlyModalHtml(markets, currentLang);
    modal.classList.add("is-active");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  }

  function closeMarketModal() {
    const modal = document.getElementById("market-result-modal");
    if (!modal) return;

    modal.classList.remove("is-active");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  }

  function refreshActiveSearchResults() {
    const modal = document.getElementById("market-result-modal");
    const modalBody = document.getElementById("market-modal-body");
    if (modal && modalBody && lastSearchResults && lastSearchResults.length) {
      modalBody.innerHTML = renderFarmerFriendlyModalHtml(lastSearchResults, currentLang);
    }
  }

  // Bind modal close buttons and keyboard handler
  const modalCloseBtn = document.getElementById("modal-close-btn");
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeMarketModal);
  }

  const modalBackdrop = document.getElementById("modal-backdrop");
  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", closeMarketModal);
  }

  const modalSearchAgainBtn = document.getElementById("modal-search-again-btn");
  if (modalSearchAgainBtn) {
    modalSearchAgainBtn.addEventListener("click", () => {
      closeMarketModal();
      if (lastSearchForm) {
        const cropSelect = lastSearchForm.querySelector("select");
        if (cropSelect) cropSelect.focus();
      }
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const modal = document.getElementById("market-result-modal");
      if (modal && modal.classList.contains("is-active")) {
        closeMarketModal();
      }
    }
  });

  function runMarketSearch(form) {
    const submitButton = form.querySelector('button[type="submit"]');
    if (submitButton && submitButton.disabled) return;

    const statusEl = form.parentElement.querySelector(".hero-form-status");

    const cropSelect = form.querySelector("select");
    const crop = normalizeCropName(cropSelect, form);

    const qtyInput = form.querySelector('input[type="number"]');
    const rawQty = qtyInput ? qtyInput.value.trim() : "";
    const parsedQty = parseFloat(rawQty);

    // Strict validation: Reject empty, non-numeric, 0, negative, NaN or Infinity
    if (!rawQty || isNaN(parsedQty) || !isFinite(parsedQty) || parsedQty <= 0) {
      if (statusEl) {
        statusEl.textContent = translations[currentLang]?.invalidQuantityMsg || "Please enter a valid crop quantity (greater than 0 kg).";
      }
      if (qtyInput) qtyInput.focus();
      return;
    }
    const quantityKg = parsedQty;

    const dateInput = form.querySelector('input[type="date"]');
    const sellingDateStr = dateInput?.value || "";

    const userLocationStr = extractUserLocation(form);

    // Strict validation: Reject empty location
    if (!userLocationStr) {
      if (statusEl) {
        statusEl.textContent = translations[currentLang]?.emptyLocationMsg || "Please enter your location.";
      }
      const locInput = form.querySelector('input[name="location"], input[placeholder*="Location"], input[placeholder*="स्थान"]');
      if (locInput) locInput.focus();
      return;
    }

    lastSearchForm = form;

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.classList.add("is-loading");
    }

    if (statusEl) {
      statusEl.textContent = translations[currentLang]?.findingMarkets || "Finding nearby markets...";
    }

    window.setTimeout(() => {
      try {
        const results = selectMarketsForQuery(crop, quantityKg, userLocationStr, sellingDateStr);
        lastSearchResults = results;
        lastSearchQuantity = quantityKg;

        // Open modal with farmer-friendly results (NO page auto-scroll)
        openMarketModal(results, quantityKg);

        if (statusEl) {
          statusEl.textContent = translations[currentLang]?.recommendationReady || "Recommendation ready: Multiple markets compared.";
        }
      } catch (err) {
        console.error("Fasalo market search error:", err);
        if (statusEl) {
          statusEl.textContent = translations[currentLang]?.searchErrorMsg || "Error calculating recommendations. Please try again.";
        }
      } finally {
        if (submitButton) {
          submitButton.classList.remove("is-loading");
          submitButton.disabled = false;
        }
      }
    }, 280);
  }

  // Attach search handler to all action-card forms
  document.querySelectorAll(".action-card__form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      runMarketSearch(form);
    });
  });

  // Query parameter pre-population
  const urlSearch = new URLSearchParams(window.location.search);
  const queryCropParam = (urlSearch.get("crop") || "").trim().toLowerCase();
  const queryQtyParam = urlSearch.get("quantity");
  const queryLocParam = urlSearch.get("location");

  if (queryCropParam) {
    document.querySelectorAll(".action-card__form").forEach((form) => {
      const select = form.querySelector("select");
      if (select) {
        for (let i = 0; i < select.options.length; i++) {
          const opt = select.options[i];
          const key = (opt.getAttribute("data-translate-key") || "").toLowerCase();
          const txt = (opt.textContent || "").toLowerCase();

          let match = false;
          if (queryCropParam.includes("tomato") && (key.includes("tomato") || txt.includes("tomato") || txt.includes("टमाटर") || txt.includes("टोमॅटो"))) match = true;
          else if (queryCropParam.includes("onion") && (key.includes("onion") || txt.includes("onion") || txt.includes("प्याज") || txt.includes("कांदा"))) match = true;
          else if (queryCropParam.includes("potato") && (key.includes("potato") || txt.includes("potato") || txt.includes("आलू") || txt.includes("बटाटा"))) match = true;
          else if (queryCropParam.includes("cotton") && (key.includes("cotton") || txt.includes("cotton") || txt.includes("कपास") || txt.includes("कापूस"))) match = true;
          else if (queryCropParam.includes("soybean") && (key.includes("soybean") || txt.includes("soybean") || txt.includes("सोयाबीन"))) match = true;
          else if ((queryCropParam.includes("rice") || queryCropParam.includes("paddy")) && (key.includes("rice") || txt.includes("rice") || txt.includes("paddy") || txt.includes("चावल") || txt.includes("तांदूळ") || txt.includes("भात") || txt.includes("धान"))) match = true;
          else if (queryCropParam.includes("wheat") && (key.includes("wheat") || txt.includes("wheat") || txt.includes("गेहूं") || txt.includes("गहू"))) match = true;
          else if (queryCropParam.includes("sugarcane") && (key.includes("sugarcane") || txt.includes("sugarcane") || txt.includes("गन्ना") || txt.includes("ऊस"))) match = true;
          else if (key.includes(queryCropParam) || txt.includes(queryCropParam)) match = true;

          if (match) {
            select.selectedIndex = i;
            break;
          }
        }
      }
      if (queryQtyParam) {
        const qtyInput = form.querySelector('input[type="number"]');
        if (qtyInput) qtyInput.value = queryQtyParam;
      }
      if (queryLocParam) {
        const locInput = form.querySelector('input[name="location"], input[placeholder*="Location"], input[placeholder*="स्थान"]');
        if (locInput) locInput.value = queryLocParam;
      }
    });

    if (window.location.pathname.includes("find-best-market")) {
      const targetForm = document.querySelector(".action-card__form");
      // Only auto-run if location and quantity are both supplied in the URL
      if (targetForm && queryLocParam && queryQtyParam) {
        window.setTimeout(() => runMarketSearch(targetForm), 100);
      }
    }
  }

  const animatedElements = document.querySelectorAll("[data-animate]");
  if ("IntersectionObserver" in window && !motionQuery.matches) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;

          el.classList.add("is-visible"); // Trigger reveal for the container itself (already present)

          // Handle staggered children if the element has data-stagger-children
          if (el.hasAttribute('data-stagger-children')) {
            // Target direct children that are marked for staggering or are common card/list items
            const staggeredChildren = el.querySelectorAll(':scope > [data-stagger-item="true"], :scope > .card, :scope > li'); // Target specific staggered items
            staggeredChildren.forEach((child, index) => {
              child.style.transitionDelay = `${index * 100}ms`; // Stagger delay (already present)
              child.classList.add('is-visible'); // Trigger reveal for child
            });
          }

          // Animate numbers in analytics cards after their own reveal animation starts
          if (el.classList.contains('card') && el.closest('.analytics-grid')) {
            const displayElement = el.querySelector('.display');
            if (displayElement && displayElement.dataset.targetValue) {
              const target = parseFloat(displayElement.dataset.targetValue);
              if (!isNaN(target)) {
                // Delay number animation slightly after card reveal
                setTimeout(() => {
                  animateNumber(displayElement, target, 1000);
                }, 300); // 300ms after card starts appearing (removed stagger delay from number animation)
              }
            }
          }
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.1 }
    );

    animatedElements.forEach((element) => revealObserver.observe(element)); // Observe all elements with data-animate as containers
  } else {
    // Fallback for no JS or reduced motion: make everything visible instantly
    animatedElements.forEach((element) => {
      element.classList.add("is-visible"); // Make container visible (already present)
      if (element.hasAttribute('data-stagger-children')) {
        const staggeredChildren = element.querySelectorAll(':scope > [data-stagger-item="true"], :scope > .card, :scope > li'); // Target specific staggered items
        staggeredChildren.forEach((child) => {
          child.classList.add('is-visible');
        });
      }
      // Also trigger number animation for analytics cards in fallback
      if (element.classList.contains('card') && element.closest('.analytics-grid')) {
        const displayElement = element.querySelector('.display');
        if (displayElement && displayElement.dataset.targetValue) {
          const target = parseFloat(displayElement.dataset.targetValue);
          if (!isNaN(target)) {
            animateNumber(displayElement, target, 0); // Instant animation for reduced motion/no JS
          }
        }
      }
    });
  }

  if (heroPanel && !motionQuery.matches) { // Parallax for hero form container (corrected variable name)
    const resetPanelParallax = () => {
      heroPanel.style.setProperty("--panel-x", "0px");
      heroPanel.style.setProperty("--panel-y", "0px");
    };

    heroPanel.addEventListener("pointermove", (event) => {
      const bounds = heroPanel.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 5;
      const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 5;
      heroPanel.style.setProperty("--panel-x", `${x.toFixed(2)}px`);
      heroPanel.style.setProperty("--panel-y", `${y.toFixed(2)}px`);
    });

    heroPanel.addEventListener("pointerleave", resetPanelParallax);
    motionQuery.addEventListener?.("change", (event) => {
      if (event.matches) resetPanelParallax();
    });
  }

  document.querySelectorAll("form[novalidate]").forEach((form) => {
    form.addEventListener("submit", (event) => event.preventDefault());
  });

  // --- Ripple Effect for Buttons ---
  document.querySelectorAll(".button").forEach((button) => {
    button.addEventListener("click", (e) => {
      if (button.disabled) return;
      const ripple = document.createElement("span");
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.className = "ripple";

      // Ensure only one ripple is active
      const existingRipple = button.querySelector(".ripple");
      if (existingRipple) {
        existingRipple.remove();
      }

      button.appendChild(ripple);
      ripple.addEventListener("animationend", () => ripple.remove());
    });
  });

  /**
   * Shared field helpers for future forms. They keep visual state and ARIA
   * state aligned without duplicating validation code across pages.
   */
  window.FasaloUI = {
    setFieldError(field, message = "Please review this field.") {
      const fieldElement =
        typeof field === "string" ? document.querySelector(field) : field;
      if (!fieldElement) return;

      const control = fieldElement.querySelector("input, select, textarea");
      const error = fieldElement.querySelector(".field__error");

      fieldElement.classList.add("field--error");
      if (control) control.setAttribute("aria-invalid", "true");
      if (error) error.textContent = message;
    },

    clearFieldError(field) {
      const fieldElement =
        typeof field === "string" ? document.querySelector(field) : field;
      if (!fieldElement) return;

      const control = fieldElement.querySelector("input, select, textarea");
      fieldElement.classList.remove("field--error");
      if (control) control.removeAttribute("aria-invalid");
    },
  };
})();