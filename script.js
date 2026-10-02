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
      cardLocationLabel: "Where are you located?",
      detectLocationBtn: "Detect My Location",
      useMyLocationBtn: "Use My Location",
      enterLocationPlaceholder: "Enter city, village or area",
      orDividerText: "OR",
      locationNotAllowed: "Location access was not allowed.",
      emptyLocationMsg: "Please enter your location.",
      cardCropLabel: "Select Crop",
      cardQuantityLabel: "How much do you have?",
      cardQuantityPlaceholder: "e.g., 500", // Added for placeholder
      cardDateLabel: "When do you want to sell?",
      findBestMarketBtn: "Find Best Market",
      howItWorksBtn: "How It Works",
      checkMarketBtn: "Find Best Market",
      viewAllCropsBtn: "▾ View All Crops (8 more)",
      showFewerCropsBtn: "▴ Show Fewer Crops",
      dateToday: "Today",
      dateTomorrow: "Tomorrow",
      dateCustom: "Choose Date",

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
      speakLocationBtn: "Speak",
      voiceListening: "Listening...",
      voiceFallbackMsg: "Please enter your location manually.",
      voiceNoSpeech: "No speech detected. Please try again.",
      voiceCommandBtnText: "🎙️ Speak Your Details",
      voiceCommandListening: "🎙️ Listening... Speak naturally",
      voiceCommandHint: "Tap and speak naturally (Location, Crop, Quantity, Date)",
      voiceUnderstoodSuccess: "I understood your details. Please check them once.",
      voiceMissingLocation: "Please enter your location.",
      voiceMissingCrop: "Please select or speak your crop.",
      voiceMissingQty: "Please enter your crop quantity.",
      voicePermissionDeniedMsg: "Voice input isn't available. You can enter the details manually.",
      voiceNoSpeechMsg: "Could not hear clearly. Please try speaking again.",
      modalBestForYou: "BEST MARKET FOR YOU",
      modalForYour: "For your",
      modalFor: "For",
      modalLeftAfterTravelLead: "💰 You may have about",
      modalLeftAfterTravelSublead: "left after travel",
      modalTravelLossLead: "Travel may cost more than your crop value.",
      modalTravelLossSublead: "estimated loss after travel",
      modalGoodOption: "Good option",
      modalNotGoodOption: "Not a good option",
      modalBreakEven: "Break-even",
      modalHowCalculated: "How is this calculated?",
      modalTodayCropValue: "Today's crop value",
      modalTravelCostLabel: "Travel cost",
      modalYouHaveLeftLabel: "You may have left",
      modalOtherMarkets: "Other Good Markets",
      modalCropValueShort: "crop value",
      modalTravelShort: "travel",
      modalAboutLeftShort: "About left",
      modalLossShort: "Loss",
      modalSeeDetails: "See details",
      modalBestOptionBadge: "⭐ Best Option",
      modalGoodOptionBadge: "🟢 Good Option",
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
      modalGoodChoiceTag: "🟢 Good option for your harvest",
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

      // Crop options & visual chips
      cropOptionTomato: "Tomato",
      cropOptionOnion: "Onion",
      cropOptionPotato: "Potato",
      cropOptionCotton: "Cotton",
      cropOptionSoybean: "Soybean",
      cropOptionRice: "Rice",
      cropOptionWheat: "Wheat",
      cropOptionSugarcane: "Sugarcane",
      cropOptionMaize: "Maize",
      cropOptionGroundnut: "Groundnut",
      cropOptionGram: "Gram (Chana)",
      cropOptionTur: "Tur (Arhar)",
      cropOptionChilli: "Chilli",
      cropOptionCabbage: "Cabbage",
      cropOptionCauliflower: "Cauliflower",
      cropOptionOkra: "Okra (Bhindi)",

      cropTomato: "Tomato",
      cropOnion: "Onion",
      cropPotato: "Potato",
      cropWheat: "Wheat",
      cropRice: "Rice",
      cropMaize: "Maize",
      cropSoybean: "Soybean",
      cropCotton: "Cotton",
      cropSugarcane: "Sugarcane",
      cropGroundnut: "Groundnut",
      cropGram: "Gram / Chana",
      cropTur: "Tur / Arhar",
      cropChilli: "Chilli",
      cropCabbage: "Cabbage",
      cropCauliflower: "Cauliflower",
      cropOkra: "Okra (Bhindi)",

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
      footerLinkCropPrices: "Crop Prices",
      footerLinkHowItWorks: "How It Works", // Already correct
      imgAltTomato: "Tomato crop",
      imgAltOnion: "Onion crop",
      imgAltPotato: "Potato crop",
      imgAltCotton: "Cotton crop",
      imgAltSoybean: "Soybean crop",
      imgAltRicePaddy: "Paddy rice crop",
      imgAltWheat: "Wheat crop",
      imgAltSugarcane: "Sugarcane crop",
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
      cardLocationLabel: "आप कहाँ स्थित हैं?",
      detectLocationBtn: "मेरा स्थान पता करें",
      useMyLocationBtn: "मेरी लोकेशन का उपयोग करें",
      enterLocationPlaceholder: "शहर, गांव या इलाका लिखें",
      orDividerText: "या",
      locationNotAllowed: "लोकेशन की अनुमति नहीं मिली।",
      emptyLocationMsg: "कृपया अपनी लोकेशन दर्ज करें।",
      cardCropLabel: "फसल चुनें",
      cardQuantityLabel: "आपके पास कितनी फसल है?",
      cardQuantityPlaceholder: "उदाहरण के लिए, 500",
      cardDateLabel: "कब बेचना है?",
      findBestMarketBtn: "सर्वोत्तम बाजार खोजें",
      howItWorksBtn: "यह कैसे काम करता है",
      checkMarketBtn: "सर्वोत्तम बाजार खोजें",
      viewAllCropsBtn: "▾ सभी फसलें देखें (8 और)",
      showFewerCropsBtn: "▴ कम फसलें देखें",
      dateToday: "आज",
      dateTomorrow: "कल",
      dateCustom: "तारीख चुनें",

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
      speakLocationBtn: "बोलें",
      voiceListening: "सुन रहे हैं...",
      voiceFallbackMsg: "अपनी लोकेशन खुद लिखें।",
      voiceNoSpeech: "आवाज सुनाई नहीं दी। कृपया पुनः प्रयास करें।",
      modalBestForYou: "आपके लिए सबसे अच्छा बाजार",
      modalForYour: "आपके",
      modalFor: "के लिए",
      modalLeftAfterTravelLead: "💰 आने-जाने का खर्च निकालने के बाद लगभग",
      modalLeftAfterTravelSublead: "बचेंगे",
      modalTravelLossLead: "इस बाजार तक जाने में खर्च ज्यादा पड़ सकता है।",
      modalTravelLossSublead: "आने-जाने के बाद अनुमानित घाटा",
      modalGoodOption: "अच्छा विकल्प",
      modalNotGoodOption: "यह अच्छा विकल्प नहीं है",
      modalBreakEven: "लागत बराबर",
      modalHowCalculated: "कैसे निकला?",
      modalTodayCropValue: "आपकी फसल की कीमत",
      modalTravelCostLabel: "आने-जाने का खर्च",
      modalYouHaveLeftLabel: "आपके पास बचेंगे",
      modalOtherMarkets: "अन्य अच्छे बाजार",
      modalCropValueShort: "फसल मूल्य",
      modalTravelShort: "खर्च",
      modalAboutLeftShort: "लगभग बचेंगे",
      modalLossShort: "अनुमानित घाटा",
      modalSeeDetails: "विवरण देखें",
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

      // Crop options & visual chips
      cropOptionTomato: "टमाटर",
      cropOptionOnion: "प्याज",
      cropOptionPotato: "आलू",
      cropOptionCotton: "कपास",
      cropOptionSoybean: "सोयाबीन",
      cropOptionRice: "धान / चावल",
      cropOptionWheat: "गेहूं",
      cropOptionSugarcane: "गन्ना",
      cropOptionMaize: "मक्का",
      cropOptionGroundnut: "मूंगफली",
      cropOptionGram: "चना (हरभरा)",
      cropOptionTur: "अरहर (तूर)",
      cropOptionChilli: "हरी मिर्च",
      cropOptionCabbage: "पत्तागोभी",
      cropOptionCauliflower: "फूलगोभी",
      cropOptionOkra: "भिंडी",

      cropTomato: "टमाटर",
      cropOnion: "प्याज",
      cropPotato: "आलू",
      cropWheat: "गेहूं",
      cropRice: "धान / चावल",
      cropMaize: "मक्का",
      cropSoybean: "सोयाबीन",
      cropCotton: "कपास",
      cropSugarcane: "गन्ना",
      cropGroundnut: "मूंगफली",
      cropGram: "चना",
      cropTur: "अरहर (तूर)",
      cropChilli: "हरी मिर्च",
      cropCabbage: "पत्तागोभी",
      cropCauliflower: "फूलगोभी",
      cropOkra: "भिंडी",

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
      footerLinkCropPrices: "फसल के भाव",
      footerLinkHowItWorks: "यह कैसे काम करता है", // Already correct
      imgAltTomato: "टमाटर की फसल",
      imgAltOnion: "प्याज की फसल",
      imgAltPotato: "आलू की फसल",
      imgAltCotton: "कपास की फसल",
      imgAltSoybean: "सोयाबीन की फसल",
      imgAltRicePaddy: "धान (चावल) की फसल",
      imgAltWheat: "गेहूं की फसल",
      imgAltSugarcane: "गन्ने की फसल",
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
      cardLocationLabel: "तुम्ही कुठे आहात?",
      detectLocationBtn: "माझे स्थान शोधा",
      useMyLocationBtn: "माझे स्थान वापरा",
      enterLocationPlaceholder: "शहर, गाव किंवा परिसर लिहा",
      orDividerText: "किंवा",
      locationNotAllowed: "स्थान वापरण्याची परवानगी मिळाली नाही.",
      emptyLocationMsg: "कृपया तुमचे स्थान लिहा.",
      cardCropLabel: "कोणते पीक विकायचे आहे?",
      cardQuantityLabel: "तुमच्याकडे किती पीक आहे?",
      cardQuantityPlaceholder: "उदा. 500",
      cardDateLabel: "कधी विकायचे आहे?",
      findBestMarketBtn: "सर्वोत्तम बाजार शोधा",
      howItWorksBtn: "हे कसे कार्य करते",
      checkMarketBtn: "सर्वोत्तम बाजार शोधा",
      viewAllCropsBtn: "▾ सर्व पिके पहा (8 अधिक)",
      showFewerCropsBtn: "▴ कमी पिके पहा",
      dateToday: "आज",
      dateTomorrow: "उद्या",
      dateCustom: "तारीख निवडा",

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
      speakLocationBtn: "बोला",
      voiceListening: "ऐकत आहे...",
      voiceFallbackMsg: "तुमचे स्थान स्वतः लिहा.",
      voiceNoSpeech: "आवाज आला नाही. कृपया पुन्हा प्रयत्न करा.",
      voiceCommandBtnText: "🎙️ बोलून सांगा",
      voiceCommandListening: "🎙️ ऐकत आहे... सहज बोला",
      voiceCommandHint: "माइक दाबून बोला (ठिकाण, पीक, प्रमाण, तारीख)",
      voiceUnderstoodSuccess: "तुमची माहिती भरली आहे. एकदा तपासा.",
      voiceMissingLocation: "कृपया आपले स्थान सांगा.",
      voiceMissingCrop: "कृपया आपले पीक निवडा किंवा बोलून सांगा.",
      voiceMissingQty: "कृपया आपले पिकाचे प्रमाण सांगा.",
      voicePermissionDeniedMsg: "व्हॉइस इनपुट उपलब्ध नाही. तुम्ही माहिती स्वतः भरू शकता.",
      voiceNoSpeechMsg: "आवाज स्पष्ट ऐकू आला नाही. कृपया पुन्हा बोला.",
      modalBestForYou: "तुमच्यासाठी सर्वोत्तम बाजार",
      modalForYour: "तुमच्या",
      modalFor: "साठी",
      modalLeftAfterTravelLead: "💰 येण्याजाण्याचा खर्च वजा केल्यानंतर अंदाजे",
      modalLeftAfterTravelSublead: "शिल्लक राहतील",
      modalTravelLossLead: "या बाजारात जाण्याचा खर्च पिकाच्या किमतीपेक्षा जास्त पडू शकतो.",
      modalTravelLossSublead: "वाहतुकीनंतर अंदाजे तोटा",
      modalGoodOption: "चांगला पर्याय",
      modalNotGoodOption: "हा चांगला पर्याय नाही",
      modalBreakEven: "समतोल",
      modalHowCalculated: "हे कसे मोजले?",
      modalTodayCropValue: "पिकाची किंमत",
      modalTravelCostLabel: "येण्याजाण्याचा खर्च",
      modalYouHaveLeftLabel: "तुमच्याकडे शिल्लक राहतील",
      modalOtherMarkets: "इतर चांगले बाजार",
      modalCropValueShort: "पिकाचे मूल्य",
      modalTravelShort: "खर्च",
      modalAboutLeftShort: "अंदाजे शिल्लक",
      modalLossShort: "अंदाजे तोटा",
      modalSeeDetails: "तपशील पहा",
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

      // Crop options & visual chips
      cropOptionTomato: "टोमॅटो",
      cropOptionOnion: "कांदा",
      cropOptionPotato: "बटाटा",
      cropOptionCotton: "कापूस",
      cropOptionSoybean: "सोयाबीन",
      cropOptionRice: "भात / तांदूळ",
      cropOptionWheat: "गहू",
      cropOptionSugarcane: "ऊस",
      cropOptionMaize: "मका",
      cropOptionGroundnut: "भुईमूग",
      cropOptionGram: "हरभरा (चना)",
      cropOptionTur: "तूर (अरहर)",
      cropOptionChilli: "मिरची",
      cropOptionCabbage: "कोबी",
      cropOptionCauliflower: "फ्लॉवर",
      cropOptionOkra: "भेंडी",

      cropTomato: "टोमॅटो",
      cropOnion: "कांदा",
      cropPotato: "बटाटा",
      cropWheat: "गहू",
      cropRice: "भात / तांदूळ",
      cropMaize: "मका",
      cropSoybean: "सोयाबीन",
      cropCotton: "कापूस",
      cropSugarcane: "ऊस",
      cropGroundnut: "भुईमूग",
      cropGram: "हरभरा",
      cropTur: "तूर",
      cropChilli: "मिरची",
      cropCabbage: "कोबी",
      cropCauliflower: "फ्लॉवर",
      cropOkra: "भेंडी",

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
      footerLinkCropPrices: "पिकांचे बाजारभाव",
      footerLinkHowItWorks: "हे कसे कार्य करते", // Already correct
      imgAltTomato: "टोमॅटोचे पीक",
      imgAltOnion: "कांद्याचे पीक",
      imgAltPotato: "बटाट्याचे पीक",
      imgAltCotton: "कापसाचे पीक",
      imgAltSoybean: "सोयाबीनचे पीक",
      imgAltRicePaddy: "भात (तांदूळ) शेती",
      imgAltWheat: "गव्हाचे पीक",
      imgAltSugarcane: "उसाचे पीक",
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
        } else if (el.tagName === 'IMG') {
          el.setAttribute('alt', translations[lang][key]);
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

    // Update crop toggle button text
    document.querySelectorAll(".crop-toggle-btn").forEach((toggleBtn) => {
      const form = toggleBtn.closest("form");
      const extraWrap = form ? form.querySelector(".crop-extra-container") : document.getElementById("extra-crops-wrapper");
      const btnSpan = toggleBtn.querySelector("span") || toggleBtn;
      if (extraWrap && !extraWrap.hidden) {
        btnSpan.textContent = translations[lang]?.showFewerCropsBtn || "▴ Show Fewer Crops";
      } else {
        btnSpan.textContent = translations[lang]?.viewAllCropsBtn || "▾ View All Crops (8 more)";
      }
    });

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
    indore: { lat: 22.7196, lon: 75.8577 },
    washim: { lat: 20.1112, lon: 77.1345 },
    hingoli: { lat: 19.7188, lon: 77.1472 },
    parbhani: { lat: 19.2644, lon: 76.7749 },
    beed: { lat: 18.9891, lon: 75.7601 },
    nandurbar: { lat: 21.3704, lon: 74.2403 },
    panvel: { lat: 18.9894, lon: 73.1175 },
    raigad: { lat: 18.5158, lon: 73.1822 },
    palghar: { lat: 19.6967, lon: 72.7699 },
    gadchiroli: { lat: 20.1849, lon: 79.9948 }
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
    },

    // Maize
    "mze-sangli": {
      hi: { name: "सांगली APMC", location: "सांगली, महाराष्ट्र" },
      mr: { name: "सांगली APMC", location: "सांगली, महाराष्ट्र" }
    },
    "mze-kolhapur": {
      hi: { name: "कोल्हापुर APMC", location: "कोल्हापुर, महाराष्ट्र" },
      mr: { name: "कोल्हापूर APMC", location: "कोल्हापूर, महाराष्ट्र" }
    },
    "mze-aurangabad": {
      hi: { name: "औरंगाबाद APMC", location: "छ. संभाजीनगर, महाराष्ट्र" },
      mr: { name: "औरंगाबाद APMC", location: "छ. संभाजीनगर, महाराष्ट्र" }
    },
    "mze-jalna": {
      hi: { name: "जालना APMC", location: "जालना, महाराष्ट्र" },
      mr: { name: "जालना APMC", location: "जालना, महाराष्ट्र" }
    },
    "mze-dhule": {
      hi: { name: "धुले APMC", location: "धुले, महाराष्ट्र" },
      mr: { name: "धुळे APMC", location: "धुळे, महाराष्ट्र" }
    },
    "mze-malegaon": {
      hi: { name: "मालेगांव APMC", location: "नासिक, महाराष्ट्र" },
      mr: { name: "मालेगाव APMC", location: "नाशिक, महाराष्ट्र" }
    },
    "mze-nashik": {
      hi: { name: "नासिक APMC", location: "नासिक, महाराष्ट्र" },
      mr: { name: "नाशिक APMC", location: "नाशिक, महाराष्ट्र" }
    },
    "mze-pune": {
      hi: { name: "पुणे APMC", location: "पुणे, महाराष्ट्र" },
      mr: { name: "पुणे APMC", location: "पुणे, महाराष्ट्र" }
    },
    "mze-ahmednagar": {
      hi: { name: "अहमदनगर APMC", location: "अहमदनगर, महाराष्ट्र" },
      mr: { name: "अहमदनगर APMC", location: "अहमदनगर, महाराष्ट्र" }
    },

    // Groundnut
    "gnd-dhule": {
      hi: { name: "धुले APMC", location: "धुले, महाराष्ट्र" },
      mr: { name: "धुळे APMC", location: "धुळे, महाराष्ट्र" }
    },
    "gnd-jalgaon": {
      hi: { name: "जलगांव APMC", location: "जलगांव, महाराष्ट्र" },
      mr: { name: "जळगाव APMC", location: "जळगाव, महाराष्ट्र" }
    },
    "gnd-latur": {
      hi: { name: "लातूर APMC", location: "लातूर, महाराष्ट्र" },
      mr: { name: "लातूर APMC", location: "लातूर, महाराष्ट्र" }
    },
    "gnd-solapur": {
      hi: { name: "सोलापुर APMC", location: "सोलापुर, महाराष्ट्र" },
      mr: { name: "सोलापूर APMC", location: "सोलापूर, महाराष्ट्र" }
    },
    "gnd-kolhapur": {
      hi: { name: "कोल्हापुर APMC", location: "कोल्हापुर, महाराष्ट्र" },
      mr: { name: "कोल्हापूर APMC", location: "कोल्हापूर, महाराष्ट्र" }
    },
    "gnd-sangli": {
      hi: { name: "सांगली APMC", location: "सांगली, महाराष्ट्र" },
      mr: { name: "सांगली APMC", location: "सांगली, महाराष्ट्र" }
    },
    "gnd-ahmednagar": {
      hi: { name: "अहमदनगर APMC", location: "अहमदनगर, महाराष्ट्र" },
      mr: { name: "अहमदनगर APMC", location: "अहमदनगर, महाराष्ट्र" }
    },
    "gnd-akola": {
      hi: { name: "अकोला APMC", location: "अकोला, महाराष्ट्र" },
      mr: { name: "अकोला APMC", location: "अकोला, महाराष्ट्र" }
    },

    // Gram / Chickpea
    "grm-latur": {
      hi: { name: "लातूर APMC", location: "लातूर, महाराष्ट्र" },
      mr: { name: "लातूर APMC", location: "लातूर, महाराष्ट्र" }
    },
    "grm-akola": {
      hi: { name: "अकोला APMC", location: "अकोला, महाराष्ट्र" },
      mr: { name: "अकोला APMC", location: "अकोला, महाराष्ट्र" }
    },
    "grm-amravati": {
      hi: { name: "अमरावती APMC", location: "अमरावती, महाराष्ट्र" },
      mr: { name: "अमरावती APMC", location: "अमरावती, महाराष्ट्र" }
    },
    "grm-nanded": {
      hi: { name: "नांदेड़ APMC", location: "नांदेड़, महाराष्ट्र" },
      mr: { name: "नांदेड APMC", location: "नांदेड, महाराष्ट्र" }
    },
    "grm-jalna": {
      hi: { name: "जालना APMC", location: "जालना, महाराष्ट्र" },
      mr: { name: "जालना APMC", location: "जालना, महाराष्ट्र" }
    },
    "grm-washim": {
      hi: { name: "वाशिम APMC", location: "वाशिम, महाराष्ट्र" },
      mr: { name: "वाशीम APMC", location: "वाशीम, महाराष्ट्र" }
    },
    "grm-hingoli": {
      hi: { name: "हिंगोली APMC", location: "हिंगोली, महाराष्ट्र" },
      mr: { name: "हिंगोली APMC", location: "हिंगोली, महाराष्ट्र" }
    },
    "grm-nagpur": {
      hi: { name: "नागपुर APMC", location: "नागपुर, महाराष्ट्र" },
      mr: { name: "नागपूर APMC", location: "नागपूर, महाराष्ट्र" }
    },
    "grm-pune": {
      hi: { name: "पुणे APMC", location: "पुणे, महाराष्ट्र" },
      mr: { name: "पुणे APMC", location: "पुणे, महाराष्ट्र" }
    },

    // Tur / Arhar
    "tur-latur": {
      hi: { name: "लातूर APMC", location: "लातूर, महाराष्ट्र" },
      mr: { name: "लातूर APMC", location: "लातूर, महाराष्ट्र" }
    },
    "tur-akola": {
      hi: { name: "अकोला APMC", location: "अकोला, महाराष्ट्र" },
      mr: { name: "अकोला APMC", location: "अकोला, महाराष्ट्र" }
    },
    "tur-amravati": {
      hi: { name: "अमरावती APMC", location: "अमरावती, महाराष्ट्र" },
      mr: { name: "अमरावती APMC", location: "अमरावती, महाराष्ट्र" }
    },
    "tur-nanded": {
      hi: { name: "नांदेड़ APMC", location: "नांदेड़, महाराष्ट्र" },
      mr: { name: "नांदेड APMC", location: "नांदेड, महाराष्ट्र" }
    },
    "tur-hingoli": {
      hi: { name: "हिंगोली APMC", location: "हिंगोली, महाराष्ट्र" },
      mr: { name: "हिंगोली APMC", location: "हिंगोली, महाराष्ट्र" }
    },
    "tur-yavatmal": {
      hi: { name: "यवतमाल APMC", location: "यवतमाल, महाराष्ट्र" },
      mr: { name: "यवतमाळ APMC", location: "यवतमाळ, महाराष्ट्र" }
    },
    "tur-nagpur": {
      hi: { name: "नागपुर APMC", location: "नागपुर, महाराष्ट्र" },
      mr: { name: "नागपूर APMC", location: "नागपूर, महाराष्ट्र" }
    },
    "tur-jalna": {
      hi: { name: "जालना APMC", location: "जालना, महाराष्ट्र" },
      mr: { name: "जालना APMC", location: "जालना, महाराष्ट्र" }
    },
    "tur-solapur": {
      hi: { name: "सोलापुर APMC", location: "सोलापुर, महाराष्ट्र" },
      mr: { name: "सोलापूर APMC", location: "सोलापूर, महाराष्ट्र" }
    },

    // Chilli
    "chl-nagpur": {
      hi: { name: "नागपुर APMC", location: "नागपुर, महाराष्ट्र" },
      mr: { name: "नागपूर APMC", location: "नागपूर, महाराष्ट्र" }
    },
    "chl-kolhapur": {
      hi: { name: "कोल्हापुर APMC", location: "कोल्हापुर, महाराष्ट्र" },
      mr: { name: "कोल्हापूर APMC", location: "कोल्हापूर, महाराष्ट्र" }
    },
    "chl-solapur": {
      hi: { name: "सोलापुर APMC", location: "सोलापुर, महाराष्ट्र" },
      mr: { name: "सोलापूर APMC", location: "सोलापूर, महाराष्ट्र" }
    },
    "chl-pune": {
      hi: { name: "पुणे APMC", location: "पुणे, महाराष्ट्र" },
      mr: { name: "पुणे APMC", location: "पुणे, महाराष्ट्र" }
    },
    "chl-sangli": {
      hi: { name: "सांगली APMC", location: "सांगली, महाराष्ट्र" },
      mr: { name: "सांगली APMC", location: "सांगली, महाराष्ट्र" }
    },
    "chl-dhule": {
      hi: { name: "धुले APMC", location: "धुले, महाराष्ट्र" },
      mr: { name: "धुळे APMC", location: "धुळे, महाराष्ट्र" }
    },
    "chl-nandurbar": {
      hi: { name: "नंदुरबार APMC", location: "नंदुरबार, महाराष्ट्र" },
      mr: { name: "नंदुरबार APMC", location: "नंदुरबार, महाराष्ट्र" }
    },
    "chl-nashik": {
      hi: { name: "नासिक APMC", location: "नासिक, महाराष्ट्र" },
      mr: { name: "नाशिक APMC", location: "नाशिक, महाराष्ट्र" }
    },

    // Cabbage
    "cab-pune": {
      hi: { name: "पुणे APMC", location: "पुणे, महाराष्ट्र" },
      mr: { name: "पुणे APMC", location: "पुणे, महाराष्ट्र" }
    },
    "cab-vashi": {
      hi: { name: "मुंबई (वाशी) APMC", location: "नवी मुंबई, महाराष्ट्र" },
      mr: { name: "मुंबई (वाशी) APMC", location: "नवी मुंबई, महाराष्ट्र" }
    },
    "cab-nashik": {
      hi: { name: "नासिक APMC", location: "नासिक, महाराष्ट्र" },
      mr: { name: "नाशिक APMC", location: "नाशिक, महाराष्ट्र" }
    },
    "cab-narayangaon": {
      hi: { name: "नारायणगांव APMC", location: "पुणे जिला, महाराष्ट्र" },
      mr: { name: "नारायणगाव APMC", location: "पुणे जिल्हा, महाराष्ट्र" }
    },
    "cab-junnar": {
      hi: { name: "जुन्नर APMC", location: "पुणे जिला, महाराष्ट्र" },
      mr: { name: "जुन्नर APMC", location: "पुणे जिल्हा, महाराष्ट्र" }
    },
    "cab-satara": {
      hi: { name: "सातारा APMC", location: "सातारा, महाराष्ट्र" },
      mr: { name: "सातारा APMC", location: "सातारा, महाराष्ट्र" }
    },
    "cab-kolhapur": {
      hi: { name: "कोल्हापुर APMC", location: "कोल्हापुर, महाराष्ट्र" },
      mr: { name: "कोल्हापूर APMC", location: "कोल्हापूर, महाराष्ट्र" }
    },
    "cab-ahmednagar": {
      hi: { name: "अहमदनगर APMC", location: "अहमदनगर, महाराष्ट्र" },
      mr: { name: "अहमदनगर APMC", location: "अहमदनगर, महाराष्ट्र" }
    },

    // Cauliflower
    "cfl-pune": {
      hi: { name: "पुणे APMC", location: "पुणे, महाराष्ट्र" },
      mr: { name: "पुणे APMC", location: "पुणे, महाराष्ट्र" }
    },
    "cfl-vashi": {
      hi: { name: "मुंबई (वाशी) APMC", location: "नवी मुंबई, महाराष्ट्र" },
      mr: { name: "मुंबई (वाशी) APMC", location: "नवी मुंबई, महाराष्ट्र" }
    },
    "cfl-nashik": {
      hi: { name: "नासिक APMC", location: "नासिक, महाराष्ट्र" },
      mr: { name: "नाशिक APMC", location: "नाशिक, महाराष्ट्र" }
    },
    "cfl-narayangaon": {
      hi: { name: "नारायणगांव APMC", location: "पुणे जिला, महाराष्ट्र" },
      mr: { name: "नारायणगाव APMC", location: "पुणे जिल्हा, महाराष्ट्र" }
    },
    "cfl-junnar": {
      hi: { name: "जुन्नर APMC", location: "पुणे जिला, महाराष्ट्र" },
      mr: { name: "जुन्नर APMC", location: "पुणे जिल्हा, महाराष्ट्र" }
    },
    "cfl-satara": {
      hi: { name: "सातारा APMC", location: "सातारा, महाराष्ट्र" },
      mr: { name: "सातारा APMC", location: "सातारा, महाराष्ट्र" }
    },
    "cfl-kolhapur": {
      hi: { name: "कोल्हापुर APMC", location: "कोल्हापुर, महाराष्ट्र" },
      mr: { name: "कोल्हापूर APMC", location: "कोल्हापूर, महाराष्ट्र" }
    },
    "cfl-ahmednagar": {
      hi: { name: "अहमदनगर APMC", location: "अहमदनगर, महाराष्ट्र" },
      mr: { name: "अहमदनगर APMC", location: "अहमदनगर, महाराष्ट्र" }
    },

    // Okra
    "okr-pune": {
      hi: { name: "पुणे APMC", location: "पुणे, महाराष्ट्र" },
      mr: { name: "पुणे APMC", location: "पुणे, महाराष्ट्र" }
    },
    "okr-vashi": {
      hi: { name: "मुंबई (वाशी) APMC", location: "नवी मुंबई, महाराष्ट्र" },
      mr: { name: "मुंबई (वाशी) APMC", location: "नवी मुंबई, महाराष्ट्र" }
    },
    "okr-nashik": {
      hi: { name: "नासिक APMC", location: "नासिक, महाराष्ट्र" },
      mr: { name: "नाशिक APMC", location: "नाशिक, महाराष्ट्र" }
    },
    "okr-narayangaon": {
      hi: { name: "नारायणगांव APMC", location: "पुणे जिला, महाराष्ट्र" },
      mr: { name: "नारायणगाव APMC", location: "पुणे जिल्हा, महाराष्ट्र" }
    },
    "okr-kolhapur": {
      hi: { name: "कोल्हापुर APMC", location: "कोल्हापुर, महाराष्ट्र" },
      mr: { name: "कोल्हापूर APMC", location: "कोल्हापूर, महाराष्ट्र" }
    },
    "okr-solapur": {
      hi: { name: "सोलापुर APMC", location: "सोलापुर, महाराष्ट्र" },
      mr: { name: "सोलापूर APMC", location: "सोलापूर, महाराष्ट्र" }
    },
    "okr-sangli": {
      hi: { name: "सांगली APMC", location: "सांगली, महाराष्ट्र" },
      mr: { name: "सांगली APMC", location: "सांगली, महाराष्ट्र" }
    },
    "okr-ahmednagar": {
      hi: { name: "अहमदनगर APMC", location: "अहमदनगर, महाराष्ट्र" },
      mr: { name: "अहमदनगर APMC", location: "अहमदनगर, महाराष्ट्र" }
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
    { id: "sug-pandharpur", name: "Pandharpur Sugar Mills", location: "Solapur, Maharashtra", lat: 17.6749, lon: 75.3262, crop: "Sugarcane", basePrice: 324, baseDistance: 60, demand: "Medium", confidence: 91.8, reason: "Dependable harvest reception with computerized weighing slips." },

    // Maize (Corn)
    { id: "mze-sangli", name: "Sangli APMC", location: "Sangli, Maharashtra", lat: 16.8524, lon: 74.5815, crop: "Maize", basePrice: 2280, baseDistance: 45, demand: "High", confidence: 94.5, reason: "Major southern Maharashtra grain trading hub with steady poultry feed demand." },
    { id: "mze-kolhapur", name: "Kolhapur APMC", location: "Kolhapur, Maharashtra", lat: 16.705, lon: 74.2433, crop: "Maize", basePrice: 2260, baseDistance: 55, demand: "High", confidence: 93.8, reason: "Active feed mill procurement with quick cash settlement." },
    { id: "mze-aurangabad", name: "Aurangabad APMC", location: "Chh. Sambhajinagar, Maharashtra", lat: 19.8762, lon: 75.3433, crop: "Maize", basePrice: 2220, baseDistance: 60, demand: "Medium", confidence: 92.5, reason: "Central Marathwada collection center with regular mill auctions." },
    { id: "mze-jalna", name: "Jalna APMC", location: "Jalna, Maharashtra", lat: 19.8347, lon: 75.8816, crop: "Maize", basePrice: 2240, baseDistance: 70, demand: "Medium", confidence: 92.0, reason: "Fast unloading and steady starch manufacturing off-take." },
    { id: "mze-dhule", name: "Dhule APMC", location: "Dhule, Maharashtra", lat: 20.9042, lon: 74.7749, crop: "Maize", basePrice: 2190, baseDistance: 85, demand: "Medium", confidence: 91.2, reason: "Key transit point connecting Khandesh and northern livestock feed belts." },
    { id: "mze-malegaon", name: "Malegaon APMC", location: "Nashik, Maharashtra", lat: 20.5539, lon: 74.5298, crop: "Maize", basePrice: 2210, baseDistance: 65, demand: "Medium", confidence: 91.8, reason: "Direct highway link to major poultry breeding units in Nashik." },
    { id: "mze-nashik", name: "Nashik APMC", location: "Nashik, Maharashtra", lat: 19.9975, lon: 73.7898, crop: "Maize", basePrice: 2250, baseDistance: 50, demand: "High", confidence: 93.0, reason: "High industrial off-take for animal feed and food processing." },
    { id: "mze-pune", name: "Pune APMC", location: "Pune, Maharashtra", lat: 18.5204, lon: 73.8567, crop: "Maize", basePrice: 2320, baseDistance: 30, demand: "High", confidence: 95.0, reason: "Proximity to metropolitan consumption and animal husbandry farms." },
    { id: "mze-ahmednagar", name: "Ahmednagar APMC", location: "Ahmednagar, Maharashtra", lat: 19.0952, lon: 74.7496, crop: "Maize", basePrice: 2200, baseDistance: 75, demand: "Medium", confidence: 90.5, reason: "Broad auction participation from local dairy and feed aggregators." },

    // Groundnut
    { id: "gnd-dhule", name: "Dhule APMC", location: "Dhule, Maharashtra", lat: 20.9042, lon: 74.7749, crop: "Groundnut", basePrice: 6550, baseDistance: 55, demand: "High", confidence: 95.2, reason: "Premier Khandesh groundnut oil extraction and seed processing center." },
    { id: "gnd-jalgaon", name: "Jalgaon APMC", location: "Jalgaon, Maharashtra", lat: 21.0077, lon: 75.5626, crop: "Groundnut", basePrice: 6600, baseDistance: 60, demand: "High", confidence: 95.8, reason: "Major oilseed terminal market with high competitive bidding for bold pods." },
    { id: "gnd-latur", name: "Latur APMC", location: "Latur, Maharashtra", lat: 18.4088, lon: 76.5604, crop: "Groundnut", basePrice: 6500, baseDistance: 50, demand: "High", confidence: 94.6, reason: "Extensive oil mill network and structured auction floor." },
    { id: "gnd-solapur", name: "Solapur APMC", location: "Solapur, Maharashtra", lat: 17.6599, lon: 75.9064, crop: "Groundnut", basePrice: 6420, baseDistance: 80, demand: "Medium", confidence: 92.4, reason: "Active trade with Karnataka oil expellers and confectionery buyers." },
    { id: "gnd-kolhapur", name: "Kolhapur APMC", location: "Kolhapur, Maharashtra", lat: 16.705, lon: 74.2433, crop: "Groundnut", basePrice: 6480, baseDistance: 90, demand: "Medium", confidence: 93.1, reason: "High local edible oil demand and reliable weighbridge." },
    { id: "gnd-sangli", name: "Sangli APMC", location: "Sangli, Maharashtra", lat: 16.8524, lon: 74.5815, crop: "Groundnut", basePrice: 6520, baseDistance: 70, demand: "High", confidence: 94.0, reason: "Specialized oilseed trading yard with minimal deductions." },
    { id: "gnd-ahmednagar", name: "Ahmednagar APMC", location: "Ahmednagar, Maharashtra", lat: 19.0952, lon: 74.7496, crop: "Groundnut", basePrice: 6380, baseDistance: 95, demand: "Medium", confidence: 91.5, reason: "Steady local merchant participation for dry, well-cured harvest." },
    { id: "gnd-akola", name: "Akola APMC", location: "Akola, Maharashtra", lat: 20.7002, lon: 77.0082, crop: "Groundnut", basePrice: 6450, baseDistance: 85, demand: "Medium", confidence: 92.8, reason: "Established oilseed trading center with transparent payment processing." },

    // Gram / Chickpea
    { id: "grm-latur", name: "Latur APMC", location: "Latur, Maharashtra", lat: 18.4088, lon: 76.5604, crop: "Gram", basePrice: 6150, baseDistance: 45, demand: "High", confidence: 96.5, reason: "India's largest pulses trading benchmark with massive dal mill cluster." },
    { id: "grm-akola", name: "Akola APMC", location: "Akola, Maharashtra", lat: 20.7002, lon: 77.0082, crop: "Gram", basePrice: 6080, baseDistance: 65, demand: "High", confidence: 95.2, reason: "Vidarbha pulses exchange with direct institutional procurement." },
    { id: "grm-amravati", name: "Amravati APMC", location: "Amravati, Maharashtra", lat: 20.932, lon: 77.7523, crop: "Gram", basePrice: 6020, baseDistance: 55, demand: "Medium", confidence: 93.8, reason: "High arrival handling capacity and consistent competitive bidding." },
    { id: "grm-nanded", name: "Nanded APMC", location: "Nanded, Maharashtra", lat: 19.1383, lon: 77.321, crop: "Gram", basePrice: 6050, baseDistance: 75, demand: "High", confidence: 94.1, reason: "Key Marathwada trading floor with steady dal processing demand." },
    { id: "grm-jalna", name: "Jalna APMC", location: "Jalna, Maharashtra", lat: 19.8347, lon: 75.8816, crop: "Gram", basePrice: 6000, baseDistance: 80, demand: "Medium", confidence: 92.6, reason: "Major grain and pulse yard with reliable grading standards." },
    { id: "grm-washim", name: "Washim APMC", location: "Washim, Maharashtra", lat: 20.1112, lon: 77.1345, crop: "Gram", basePrice: 5980, baseDistance: 90, demand: "Medium", confidence: 91.8, reason: "Core chickpea cultivation belt with direct buyer-farmer auctions." },
    { id: "grm-hingoli", name: "Hingoli APMC", location: "Hingoli, Maharashtra", lat: 19.7188, lon: 77.1472, crop: "Gram", basePrice: 5950, baseDistance: 95, demand: "Medium", confidence: 91.0, reason: "Fast weighment and dependable clearing for local produce." },
    { id: "grm-nagpur", name: "Nagpur APMC", location: "Nagpur, Maharashtra", lat: 21.1458, lon: 79.0882, crop: "Gram", basePrice: 6120, baseDistance: 50, demand: "High", confidence: 94.8, reason: "Terminal hub connecting central and eastern Indian dal markets." },
    { id: "grm-pune", name: "Pune APMC", location: "Pune, Maharashtra", lat: 18.5204, lon: 73.8567, crop: "Gram", basePrice: 6220, baseDistance: 35, demand: "High", confidence: 95.5, reason: "High consumer consumption and packaged food manufacturer demand." },

    // Tur / Arhar
    { id: "tur-latur", name: "Latur APMC", location: "Latur, Maharashtra", lat: 18.4088, lon: 76.5604, crop: "Tur", basePrice: 10250, baseDistance: 45, demand: "High", confidence: 97.0, reason: "National benchmark pulses market with highest red gram trade volume." },
    { id: "tur-akola", name: "Akola APMC", location: "Akola, Maharashtra", lat: 20.7002, lon: 77.0082, crop: "Tur", basePrice: 10100, baseDistance: 70, demand: "High", confidence: 95.5, reason: "Premier Vidarbha dal processing hub with continuous buyer auctions." },
    { id: "tur-amravati", name: "Amravati APMC", location: "Amravati, Maharashtra", lat: 20.932, lon: 77.7523, crop: "Tur", basePrice: 9980, baseDistance: 60, demand: "High", confidence: 94.5, reason: "Well-established wholesale auction yard with fair tare deduction." },
    { id: "tur-nanded", name: "Nanded APMC", location: "Nanded, Maharashtra", lat: 19.1383, lon: 77.321, crop: "Tur", basePrice: 10050, baseDistance: 75, demand: "High", confidence: 94.8, reason: "Strong inter-state pulse trade connecting Telangana and Marathwada." },
    { id: "tur-hingoli", name: "Hingoli APMC", location: "Hingoli, Maharashtra", lat: 19.7188, lon: 77.1472, crop: "Tur", basePrice: 9920, baseDistance: 85, demand: "Medium", confidence: 92.5, reason: "High-quality local desi tur arrivals with active mill agent bidding." },
    { id: "tur-yavatmal", name: "Yavatmal APMC", location: "Yavatmal, Maharashtra", lat: 20.3888, lon: 78.1204, crop: "Tur", basePrice: 9950, baseDistance: 65, demand: "Medium", confidence: 93.0, reason: "Direct MSP and commercial procurement facilities with prompt pay." },
    { id: "tur-nagpur", name: "Nagpur APMC", location: "Nagpur, Maharashtra", lat: 21.1458, lon: 79.0882, crop: "Tur", basePrice: 10180, baseDistance: 50, demand: "High", confidence: 95.8, reason: "Major transit mandi with strong urban and export procurement." },
    { id: "tur-jalna", name: "Jalna APMC", location: "Jalna, Maharashtra", lat: 19.8347, lon: 75.8816, crop: "Tur", basePrice: 9900, baseDistance: 90, demand: "Medium", confidence: 92.0, reason: "Reliable commercial yard with computerized auction entries." },
    { id: "tur-solapur", name: "Solapur APMC", location: "Solapur, Maharashtra", lat: 17.6599, lon: 75.9064, crop: "Tur", basePrice: 9960, baseDistance: 95, demand: "Medium", confidence: 93.2, reason: "Key southern link to Karnataka and Andhra dal consumption centers." },

    // Chilli
    { id: "chl-nagpur", name: "Nagpur APMC", location: "Nagpur, Maharashtra", lat: 21.1458, lon: 79.0882, crop: "Chilli", basePrice: 7200, baseDistance: 45, demand: "High", confidence: 95.0, reason: "Vidarbha central spice terminal with strong wholesale distribution." },
    { id: "chl-kolhapur", name: "Kolhapur APMC", location: "Kolhapur, Maharashtra", lat: 16.705, lon: 74.2433, crop: "Chilli", basePrice: 7450, baseDistance: 60, demand: "High", confidence: 95.8, reason: "Famous for Lavangi and Sankeshwari chilli varieties with premium prices." },
    { id: "chl-solapur", name: "Solapur APMC", location: "Solapur, Maharashtra", lat: 17.6599, lon: 75.9064, crop: "Chilli", basePrice: 7100, baseDistance: 75, demand: "High", confidence: 93.5, reason: "Major spice trading yard connecting Marathwada and southern markets." },
    { id: "chl-pune", name: "Pune APMC", location: "Pune, Maharashtra", lat: 18.5204, lon: 73.8567, crop: "Chilli", basePrice: 7500, baseDistance: 25, demand: "High", confidence: 96.2, reason: "High metropolitan consumption with premium rates for fresh arrivals." },
    { id: "chl-sangli", name: "Sangli APMC", location: "Sangli, Maharashtra", lat: 16.8524, lon: 74.5815, crop: "Chilli", basePrice: 7300, baseDistance: 50, demand: "High", confidence: 94.5, reason: "Established turmeric and spice trading nexus with competitive bidding." },
    { id: "chl-dhule", name: "Dhule APMC", location: "Dhule, Maharashtra", lat: 20.9042, lon: 74.7749, crop: "Chilli", basePrice: 6950, baseDistance: 80, demand: "Medium", confidence: 91.5, reason: "Gateway to Gujarat spice extractors and powder mills." },
    { id: "chl-nandurbar", name: "Nandurbar APMC", location: "Nandurbar, Maharashtra", lat: 21.3704, lon: 74.2403, crop: "Chilli", basePrice: 7150, baseDistance: 95, demand: "High", confidence: 94.0, reason: "Red chilli heartland with direct masala company procurement." },
    { id: "chl-nashik", name: "Nashik APMC", location: "Nashik, Maharashtra", lat: 19.9975, lon: 73.7898, crop: "Chilli", basePrice: 7250, baseDistance: 55, demand: "High", confidence: 93.8, reason: "Active semi-wholesale and retail export merchant bidding." },

    // Cabbage
    { id: "cab-pune", name: "Pune APMC", location: "Pune, Maharashtra", lat: 18.5204, lon: 73.8567, crop: "Cabbage", basePrice: 1450, baseDistance: 25, demand: "High", confidence: 95.0, reason: "Heavy urban daily demand and fast truck unloading." },
    { id: "cab-vashi", name: "Mumbai (Vashi) APMC", location: "Navi Mumbai, Maharashtra", lat: 19.0771, lon: 72.9986, crop: "Cabbage", basePrice: 1580, baseDistance: 115, demand: "High", confidence: 94.5, reason: "Highest terminal price in the region for fresh, tightly head cabbage." },
    { id: "cab-nashik", name: "Nashik APMC", location: "Nashik, Maharashtra", lat: 19.9975, lon: 73.7898, crop: "Cabbage", basePrice: 1400, baseDistance: 50, demand: "High", confidence: 93.5, reason: "Extensive vegetable belt market with active trade to Gujarat." },
    { id: "cab-narayangaon", name: "Narayangaon APMC", location: "Pune District, Maharashtra", lat: 19.1232, lon: 73.9782, crop: "Cabbage", basePrice: 1380, baseDistance: 45, demand: "Medium", confidence: 92.5, reason: "Key collection point for Pune and Mumbai retail transport." },
    { id: "cab-junnar", name: "Junnar APMC", location: "Pune District, Maharashtra", lat: 19.2081, lon: 73.8763, crop: "Cabbage", basePrice: 1350, baseDistance: 50, demand: "Medium", confidence: 91.8, reason: "Short hauling distance for local vegetable growers." },
    { id: "cab-satara", name: "Satara APMC", location: "Satara, Maharashtra", lat: 17.6805, lon: 73.9935, crop: "Cabbage", basePrice: 1360, baseDistance: 80, demand: "Medium", confidence: 91.2, reason: "Steady local market and easy highway transit." },
    { id: "cab-kolhapur", name: "Kolhapur APMC", location: "Kolhapur, Maharashtra", lat: 16.705, lon: 74.2433, crop: "Cabbage", basePrice: 1420, baseDistance: 90, demand: "Medium", confidence: 92.0, reason: "High consumption from restaurant and hospitality sector." },
    { id: "cab-ahmednagar", name: "Ahmednagar APMC", location: "Ahmednagar, Maharashtra", lat: 19.0952, lon: 74.7496, crop: "Cabbage", basePrice: 1320, baseDistance: 95, demand: "Medium", confidence: 90.5, reason: "Regular daily auction with fair weighing and prompt settlement." },

    // Cauliflower
    { id: "cfl-pune", name: "Pune APMC", location: "Pune, Maharashtra", lat: 18.5204, lon: 73.8567, crop: "Cauliflower", basePrice: 1680, baseDistance: 25, demand: "High", confidence: 95.5, reason: "High daily volume and premium prices for white, compact heads." },
    { id: "cfl-vashi", name: "Mumbai (Vashi) APMC", location: "Navi Mumbai, Maharashtra", lat: 19.0771, lon: 72.9986, crop: "Cauliflower", basePrice: 1820, baseDistance: 115, demand: "High", confidence: 94.8, reason: "Metropolitan premium rates covering long distance transport." },
    { id: "cfl-nashik", name: "Nashik APMC", location: "Nashik, Maharashtra", lat: 19.9975, lon: 73.7898, crop: "Cauliflower", basePrice: 1620, baseDistance: 50, demand: "High", confidence: 94.0, reason: "Premier vegetable trading hub with direct out-of-state dispatches." },
    { id: "cfl-narayangaon", name: "Narayangaon APMC", location: "Pune District, Maharashtra", lat: 19.1232, lon: 73.9782, crop: "Cauliflower", basePrice: 1590, baseDistance: 45, demand: "Medium", confidence: 92.8, reason: "Active vegetable hub offering quick clearance for harvest." },
    { id: "cfl-junnar", name: "Junnar APMC", location: "Pune District, Maharashtra", lat: 19.2081, lon: 73.8763, crop: "Cauliflower", basePrice: 1560, baseDistance: 50, demand: "Medium", confidence: 91.9, reason: "Dependable auction system with minimal grading friction." },
    { id: "cfl-satara", name: "Satara APMC", location: "Satara, Maharashtra", lat: 17.6805, lon: 73.9935, crop: "Cauliflower", basePrice: 1570, baseDistance: 80, demand: "Medium", confidence: 91.4, reason: "Steady regional retail demand along NH4 highway." },
    { id: "cfl-kolhapur", name: "Kolhapur APMC", location: "Kolhapur, Maharashtra", lat: 16.705, lon: 74.2433, crop: "Cauliflower", basePrice: 1650, baseDistance: 90, demand: "Medium", confidence: 92.5, reason: "Strong border trade off-take into Goa and southern districts." },
    { id: "cfl-ahmednagar", name: "Ahmednagar APMC", location: "Ahmednagar, Maharashtra", lat: 19.0952, lon: 74.7496, crop: "Cauliflower", basePrice: 1520, baseDistance: 95, demand: "Medium", confidence: 90.8, reason: "Reliable commercial trade with low loading/unloading delays." },

    // Okra
    { id: "okr-pune", name: "Pune APMC", location: "Pune, Maharashtra", lat: 18.5204, lon: 73.8567, crop: "Okra", basePrice: 3250, baseDistance: 25, demand: "High", confidence: 95.8, reason: "Continuous high daily urban demand for tender green okra." },
    { id: "okr-vashi", name: "Mumbai (Vashi) APMC", location: "Navi Mumbai, Maharashtra", lat: 19.0771, lon: 72.9986, crop: "Okra", basePrice: 3550, baseDistance: 115, demand: "High", confidence: 95.0, reason: "Top terminal price for export and graded supermarket supplies." },
    { id: "okr-nashik", name: "Nashik APMC", location: "Nashik, Maharashtra", lat: 19.9975, lon: 73.7898, crop: "Okra", basePrice: 3180, baseDistance: 50, demand: "High", confidence: 93.8, reason: "Strong wholesale buyer concentration and competitive morning bids." },
    { id: "okr-narayangaon", name: "Narayangaon APMC", location: "Pune District, Maharashtra", lat: 19.1232, lon: 73.9782, crop: "Okra", basePrice: 3120, baseDistance: 45, demand: "Medium", confidence: 92.5, reason: "Established vegetable exchange with direct highway dispatches." },
    { id: "okr-kolhapur", name: "Kolhapur APMC", location: "Kolhapur, Maharashtra", lat: 16.705, lon: 74.2433, crop: "Okra", basePrice: 3200, baseDistance: 90, demand: "Medium", confidence: 93.0, reason: "Active south Maharashtra trade and fast morning auctions." },
    { id: "okr-solapur", name: "Solapur APMC", location: "Solapur, Maharashtra", lat: 17.6599, lon: 75.9064, crop: "Okra", basePrice: 3050, baseDistance: 95, demand: "Medium", confidence: 91.2, reason: "Steady local off-take and reasonable transport accessibility." },
    { id: "okr-sangli", name: "Sangli APMC", location: "Sangli, Maharashtra", lat: 16.8524, lon: 74.5815, crop: "Okra", basePrice: 3140, baseDistance: 70, demand: "Medium", confidence: 92.0, reason: "Fair tare deduction and good participation by local retailers." },
    { id: "okr-ahmednagar", name: "Ahmednagar APMC", location: "Ahmednagar, Maharashtra", lat: 19.0952, lon: 74.7496, crop: "Okra", basePrice: 3080, baseDistance: 85, demand: "Medium", confidence: 90.9, reason: "Regular electronic auctions and consistent cash flow." }
  ];

  function normalizeCropName(cropSelect, form) {
    // 1. Check hidden input, selected crop chip, or form dataset
    if (form) {
      const activeChip = form.querySelector('.crop-card.is-selected, .crop-chip.is-selected');
      const chipId = (activeChip?.getAttribute('data-crop-id') || "").trim().toLowerCase();
      if (chipId) {
        if (chipId === "tomato") return "Tomato";
        if (chipId === "onion") return "Onion";
        if (chipId === "potato") return "Potato";
        if (chipId === "cotton") return "Cotton";
        if (chipId === "soybean") return "Soybean";
        if (chipId === "rice" || chipId === "paddy") return "Rice";
        if (chipId === "wheat") return "Wheat";
        if (chipId === "sugarcane") return "Sugarcane";
        if (chipId === "maize" || chipId === "corn") return "Maize";
        if (chipId === "groundnut" || chipId === "peanut") return "Groundnut";
        if (chipId === "gram" || chipId === "chana") return "Gram";
        if (chipId === "tur" || chipId === "arhar") return "Tur";
        if (chipId === "chilli" || chipId === "mirchi") return "Chilli";
        if (chipId === "cabbage") return "Cabbage";
        if (chipId === "cauliflower") return "Cauliflower";
        if (chipId === "okra" || chipId === "bhindi") return "Okra";
      }

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
        if (val.includes("maize") || val.includes("corn") || val.includes("मक्का") || val.includes("मका")) return "Maize";
        if (val.includes("groundnut") || val.includes("peanut") || val.includes("मूंगफली") || val.includes("भुईमूग")) return "Groundnut";
        if (val.includes("gram") || val.includes("chana") || val.includes("चना") || val.includes("हरभरा")) return "Gram";
        if (val.includes("tur") || val.includes("arhar") || val.includes("तूर") || val.includes("अरहर")) return "Tur";
        if (val.includes("chilli") || val.includes("mirch") || val.includes("मिर्च") || val.includes("मिरची")) return "Chilli";
        if (val.includes("cabbage") || val.includes("पत्तागोभी") || val.includes("कोबी")) return "Cabbage";
        if (val.includes("cauliflower") || val.includes("फूलगोभी") || val.includes("फ्लॉवर")) return "Cauliflower";
        if (val.includes("okra") || val.includes("bhindi") || val.includes("भिंडी") || val.includes("भेंडी")) return "Okra";
      }
    }

    // 2. Check URL search param ?crop=
    const urlCrop = (new URLSearchParams(window.location.search).get("crop") || "").trim().toLowerCase();
    if (urlCrop) {
      if (urlCrop.includes("tomato") || urlCrop.includes("टमाटर") || urlCrop.includes("टोमॅटो")) return "Tomato";
      if (urlCrop.includes("onion") || urlCrop.includes("प्याज") || urlCrop.includes("कांदा")) return "Onion";
      if (urlCrop.includes("potato") || urlCrop.includes("आलू") || urlCrop.includes("बटाटा")) return "Potato";
      if (urlCrop.includes("cotton") || urlCrop.includes("कपास") || urlCrop.includes("कापूस")) return "Cotton";
      if (urlCrop.includes("soybean") || urlCrop.includes("सोयाबीन")) return "Soybean";
      if (urlCrop.includes("rice") || urlCrop.includes("paddy") || urlCrop.includes("चावल") || urlCrop.includes("धान") || urlCrop.includes("तांदूळ") || urlCrop.includes("भात")) return "Rice";
      if (urlCrop.includes("wheat") || urlCrop.includes("गेहूं") || urlCrop.includes("गहू")) return "Wheat";
      if (urlCrop.includes("sugarcane") || urlCrop.includes("गन्ना") || urlCrop.includes("ऊस")) return "Sugarcane";
      if (urlCrop.includes("maize") || urlCrop.includes("corn") || urlCrop.includes("मक्का") || urlCrop.includes("मका")) return "Maize";
      if (urlCrop.includes("groundnut") || urlCrop.includes("peanut") || urlCrop.includes("मूंगफली") || urlCrop.includes("भुईमूग")) return "Groundnut";
      if (urlCrop.includes("gram") || urlCrop.includes("chana") || urlCrop.includes("चना") || urlCrop.includes("हरभरा")) return "Gram";
      if (urlCrop.includes("tur") || urlCrop.includes("arhar") || urlCrop.includes("तूर") || urlCrop.includes("अरहर")) return "Tur";
      if (urlCrop.includes("chilli") || urlCrop.includes("mirch") || urlCrop.includes("मिर्च") || urlCrop.includes("मिरची")) return "Chilli";
      if (urlCrop.includes("cabbage") || urlCrop.includes("पत्तागोभी") || urlCrop.includes("कोबी")) return "Cabbage";
      if (urlCrop.includes("cauliflower") || urlCrop.includes("फूलगोभी") || urlCrop.includes("फ्लॉवर")) return "Cauliflower";
      if (urlCrop.includes("okra") || urlCrop.includes("bhindi") || urlCrop.includes("भिंडी") || urlCrop.includes("भेंडी")) return "Okra";
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
    if (path.includes("maize")) return "Maize";
    if (path.includes("groundnut")) return "Groundnut";
    if (path.includes("gram") || path.includes("chana")) return "Gram";
    if (path.includes("tur") || path.includes("arhar")) return "Tur";
    if (path.includes("chilli")) return "Chilli";
    if (path.includes("cabbage")) return "Cabbage";
    if (path.includes("cauliflower")) return "Cauliflower";
    if (path.includes("okra") || path.includes("bhindi")) return "Okra";

    // 4. Check cropSelect dropdown
    if (cropSelect && cropSelect.selectedIndex >= 0) {
      const selectedOpt = cropSelect.options[cropSelect.selectedIndex];
      if (selectedOpt) {
        const translateKey = (selectedOpt.getAttribute("data-translate-key") || "").toLowerCase();
        if (translateKey.includes("tomato")) return "Tomato";
        if (translateKey.includes("onion")) return "Onion";
        if (translateKey.includes("potato")) return "Potato";
        if (translateKey.includes("cotton")) return "Cotton";
        if (translateKey.includes("soybean")) return "Soybean";
        if (translateKey.includes("rice")) return "Rice";
        if (translateKey.includes("wheat")) return "Wheat";
        if (translateKey.includes("sugarcane")) return "Sugarcane";
        if (translateKey.includes("maize")) return "Maize";
        if (translateKey.includes("groundnut")) return "Groundnut";
        if (translateKey.includes("gram")) return "Gram";
        if (translateKey.includes("tur")) return "Tur";
        if (translateKey.includes("chilli")) return "Chilli";
        if (translateKey.includes("cabbage")) return "Cabbage";
        if (translateKey.includes("cauliflower")) return "Cauliflower";
        if (translateKey.includes("okra")) return "Okra";

        const text = (selectedOpt.textContent || "").trim().toLowerCase();
        if (text.includes("tomato") || text.includes("टमाटर") || text.includes("टोमॅटो")) return "Tomato";
        if (text.includes("onion") || text.includes("प्याज") || text.includes("कांदा")) return "Onion";
        if (text.includes("potato") || text.includes("आलू") || text.includes("बटाटा")) return "Potato";
        if (text.includes("cotton") || text.includes("कपास") || text.includes("कापूस")) return "Cotton";
        if (text.includes("soybean") || text.includes("सोयाबीन")) return "Soybean";
        if (text.includes("rice") || text.includes("paddy") || text.includes("चावल") || text.includes("धान") || text.includes("तांदूळ") || text.includes("भात")) return "Rice";
        if (text.includes("wheat") || text.includes("गेहूं") || text.includes("गहू")) return "Wheat";
        if (text.includes("sugarcane") || text.includes("गन्ना") || text.includes("ऊस")) return "Sugarcane";
        if (text.includes("maize") || text.includes("corn") || text.includes("मक्का") || text.includes("मका")) return "Maize";
        if (text.includes("groundnut") || text.includes("मूंगफली") || text.includes("भुईमूग")) return "Groundnut";
        if (text.includes("gram") || text.includes("chana") || text.includes("चना") || text.includes("हरभरा")) return "Gram";
        if (text.includes("tur") || text.includes("arhar") || text.includes("तूर") || text.includes("अरहर")) return "Tur";
        if (text.includes("chilli") || text.includes("मिर्च") || text.includes("मिरची")) return "Chilli";
        if (text.includes("cabbage") || text.includes("पत्तागोभी") || text.includes("कोबी")) return "Cabbage";
        if (text.includes("cauliflower") || text.includes("फूलगोभी") || text.includes("फ्लॉवर")) return "Cauliflower";
        if (text.includes("okra") || text.includes("भिंडी") || text.includes("भेंडी")) return "Okra";
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

    const BATCH_SIZE = Math.min(8, candidateMarkets.length);
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

  function getLocalizedCropName(cropStr, lang) {
    const norm = (cropStr || "").toLowerCase();
    const t = translations[lang] || translations.en;
    if (norm.includes("tomato") || norm.includes("टमाटर") || norm.includes("टोमॅटो")) return t.cropOptionTomato || "Tomato";
    if (norm.includes("onion") || norm.includes("प्याज") || norm.includes("कांदा")) return t.cropOptionOnion || "Onion";
    if (norm.includes("potato") || norm.includes("आलू") || norm.includes("बटाटा")) return t.cropOptionPotato || "Potato";
    if (norm.includes("cotton") || norm.includes("कपास") || norm.includes("कापूस")) return t.cropOptionCotton || "Cotton";
    if (norm.includes("soybean") || norm.includes("सोयाबीन")) return t.cropOptionSoybean || "Soybean";
    if (norm.includes("rice") || norm.includes("paddy") || norm.includes("चावल") || norm.includes("तांदूळ") || norm.includes("भात") || norm.includes("धान")) return t.cropOptionRice || "Rice";
    if (norm.includes("wheat") || norm.includes("गेहूं") || norm.includes("गहू")) return t.cropOptionWheat || "Wheat";
    if (norm.includes("sugarcane") || norm.includes("गन्ना") || norm.includes("ऊस")) return t.cropOptionSugarcane || "Sugarcane";
    if (norm.includes("maize") || norm.includes("corn") || norm.includes("मक्का") || norm.includes("मका")) return t.cropOptionMaize || "Maize";
    if (norm.includes("groundnut") || norm.includes("peanut") || norm.includes("मूंगफली") || norm.includes("भुईमूग")) return t.cropOptionGroundnut || "Groundnut";
    if (norm.includes("gram") || norm.includes("chana") || norm.includes("चना") || norm.includes("हरभरा")) return t.cropOptionGram || "Gram";
    if (norm.includes("tur") || norm.includes("arhar") || norm.includes("तूर") || norm.includes("अरहर")) return t.cropOptionTur || "Tur";
    if (norm.includes("chilli") || norm.includes("mirch") || norm.includes("मिर्च") || norm.includes("मिरची")) return t.cropOptionChilli || "Chilli";
    if (norm.includes("cabbage") || norm.includes("पत्तागोभी") || norm.includes("कोबी")) return t.cropOptionCabbage || "Cabbage";
    if (norm.includes("cauliflower") || norm.includes("फूलगोभी") || norm.includes("फ्लॉवर")) return t.cropOptionCauliflower || "Cauliflower";
    if (norm.includes("okra") || norm.includes("bhindi") || norm.includes("भिंडी") || norm.includes("भेंडी")) return t.cropOptionOkra || "Okra";
    return cropStr;
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
    const cropNameLocalized = getLocalizedCropName(bestMarket.crop, lang);

    const isLoss = bestMarket.estNet < 0;
    const isBreakEven = bestMarket.estNet === 0;

    // Recommendation badge text
    let bestBadgeText = `🟢 ${t.modalGoodOption || "Good option"}`;
    let bestBadgeClass = "farmer-best-pill farmer-best-pill--good";

    if (isLoss) {
      bestBadgeText = `🔴 ${t.modalNotGoodOption || "Not a good option"}`;
      bestBadgeClass = "farmer-best-pill farmer-best-pill--loss";
    } else if (isBreakEven) {
      bestBadgeText = `🟡 ${t.modalBreakEven || "Break-even"}`;
      bestBadgeClass = "farmer-best-pill farmer-best-pill--neutral";
    }

    // Main Amount display
    let mainResultHtml = "";
    if (isLoss) {
      const lossAmt = formatRupees(bestMarket.estNet);
      let warningText = t.modalTravelLossLead || "Travel may cost more than your crop value.";
      mainResultHtml = `
        <div class="farmer-main-result farmer-main-result--loss">
          <p class="farmer-main-result__warning">⚠️ ${warningText}</p>
          <div class="farmer-main-result__amount-row">
            <span class="farmer-main-result__amount farmer-main-result__amount--loss">${lossAmt}</span>
          </div>
          <p class="farmer-main-result__subtext">${t.modalTravelLossSublead || "estimated loss after travel"}</p>
        </div>
      `;
    } else {
      const netAmt = `₹${bestMarket.estNet.toLocaleString('en-IN')}`;
      const leadPhrase = t.modalLeftAfterTravelLead || "💰 You may have about";
      const subPhrase = t.modalLeftAfterTravelSublead || "left after travel";
      mainResultHtml = `
        <div class="farmer-main-result">
          <p class="farmer-main-result__lead">${leadPhrase}</p>
          <div class="farmer-main-result__amount-row">
            <span class="farmer-main-result__amount">${netAmt}</span>
          </div>
          <p class="farmer-main-result__sublead">${subPhrase}</p>
        </div>
      `;
    }

    // For your quantity line
    let forYourCropText = "";
    if (lang === "hi") {
      forYourCropText = `आपके <strong>${bestMarket.quantityKg} kg ${cropNameLocalized}</strong> के लिए:`;
    } else if (lang === "mr") {
      forYourCropText = `तुमच्या <strong>${bestMarket.quantityKg} kg ${cropNameLocalized}</strong> साठी:`;
    } else {
      forYourCropText = `For your <strong>${bestMarket.quantityKg} kg ${cropNameLocalized}</strong>:`;
    }

    const bestOptionHtml = `
      <article class="farmer-best-card">
        <div class="farmer-best-card__eyebrow">
          <span>🌾 ${t.modalBestForYou || "BEST MARKET FOR YOU"}</span>
        </div>

        <div class="farmer-best-card__header">
          <h3 class="farmer-best-card__title">${locBest.name}</h3>
          <p class="farmer-best-card__meta">
            <span>📍 ${bestMarket.distanceKm} km ${t.modalAway || "away"}</span>
            <span>&bull;</span>
            <span>${locBest.location}</span>
          </p>
        </div>

        <div class="farmer-crop-for-line">
          ${forYourCropText}
        </div>

        ${mainResultHtml}

        <div class="farmer-recommendation-bar">
          <span class="${bestBadgeClass}">${bestBadgeText}</span>
        </div>

        <details class="farmer-calc-accordion">
          <summary class="farmer-calc-toggle">
            <svg class="icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            <span>${t.modalHowCalculated || "How is this calculated?"}</span>
          </summary>
          <div class="farmer-calc-body">
            <div class="farmer-calc-row">
              <span class="farmer-calc-label">${t.modalTodayCropValue || "Today's crop value"}:</span>
              <span class="farmer-calc-val">₹${bestMarket.grossCropValue.toLocaleString('en-IN')} <span class="farmer-calc-sub">(₹${bestMarket.pricePerKg.toFixed(2)}${t.modalPerKg || "/kg"})</span></span>
            </div>
            <div class="farmer-calc-row">
              <span class="farmer-calc-label">${t.modalTravelCostLabel || "Travel cost"}:</span>
              <span class="farmer-calc-val">₹${bestMarket.estTransport.toLocaleString('en-IN')} <span class="farmer-calc-sub">(${bestMarket.distanceKm} km)</span></span>
            </div>
            <div class="farmer-calc-divider"></div>
            <div class="farmer-calc-row farmer-calc-row--net">
              <span class="farmer-calc-label"><strong>${t.modalYouHaveLeftLabel || "You may have left"}:</strong></span>
              <span class="farmer-calc-val ${isLoss ? 'farmer-calc-val--loss' : 'farmer-calc-profit'}"><strong>${formatRupees(bestMarket.estNet)}</strong></span>
            </div>
          </div>
        </details>
      </article>
    `;

    let otherMarketsHtml = "";
    if (remainingMarkets.length > 0) {
      otherMarketsHtml = `
        <div class="other-markets-container">
          <h4 class="other-markets-heading">${t.modalOtherMarkets || "Other Good Markets"}</h4>
          <div class="other-markets-list">
            ${remainingMarkets.map((m) => {
              const locM = getLocalizedMarket(m, lang);
              const mIsLoss = m.estNet < 0;
              const mIsBreakEven = m.estNet === 0;

              let mBadgeText = `🟢 ${t.modalGoodOption || "Good option"}`;
              let mBadgeClass = "farmer-compact-pill farmer-compact-pill--good";

              if (mIsLoss) {
                mBadgeText = `🔴 ${t.modalNotGoodOption || "Not a good option"}`;
                mBadgeClass = "farmer-compact-pill farmer-compact-pill--loss";
              } else if (mIsBreakEven) {
                mBadgeText = `🟡 ${t.modalBreakEven || "Break-even"}`;
                mBadgeClass = "farmer-compact-pill farmer-compact-pill--neutral";
              }

              return `
              <article class="farmer-compact-card">
                <div class="farmer-compact-card__header">
                  <div>
                    <h5 class="farmer-compact-card__title">${locM.name}</h5>
                    <p class="farmer-compact-card__meta">📍 ${m.distanceKm} km ${t.modalAway || "away"} &bull; ${locM.location}</p>
                  </div>
                  <span class="${mBadgeClass}">${mBadgeText}</span>
                </div>

                <div class="farmer-compact-summary-row">
                  <div class="farmer-compact-chip">
                    <span class="farmer-compact-chip__label">🌾 ${t.modalCropValueShort || "Crop value"}</span>
                    <span class="farmer-compact-chip__val">₹${m.grossCropValue.toLocaleString('en-IN')}</span>
                  </div>
                  <div class="farmer-compact-chip">
                    <span class="farmer-compact-chip__label">🚚 ${t.modalTravelShort || "Travel"}</span>
                    <span class="farmer-compact-chip__val">₹${m.estTransport.toLocaleString('en-IN')}</span>
                  </div>
                  <div class="farmer-compact-chip farmer-compact-chip--net ${mIsLoss ? 'farmer-compact-chip--loss' : ''}">
                    <span class="farmer-compact-chip__label">${mIsLoss ? (t.modalLossShort || "Loss") : (t.modalAboutLeftShort || "About left")}</span>
                    <span class="farmer-compact-chip__val ${mIsLoss ? 'farmer-metric-loss' : 'farmer-metric-profit'}">${formatRupees(m.estNet)}</span>
                  </div>
                </div>

                <details class="farmer-compact-calc">
                  <summary class="farmer-compact-calc-toggle">
                    <span>${t.modalSeeDetails || "See details"}</span>
                  </summary>
                  <div class="farmer-compact-calc-body">
                    <div class="farmer-calc-row">
                      <span>${t.modalTodayCropValue || "Today's crop value"}:</span>
                      <span>₹${m.grossCropValue.toLocaleString('en-IN')} (₹${m.pricePerKg.toFixed(2)}${t.modalPerKg || "/kg"})</span>
                    </div>
                    <div class="farmer-calc-row">
                      <span>${t.modalTravelCostLabel || "Travel cost"}:</span>
                      <span>₹${m.estTransport.toLocaleString('en-IN')} (${m.distanceKm} km)</span>
                    </div>
                    <div class="farmer-calc-divider"></div>
                    <div class="farmer-calc-row farmer-calc-row--net">
                      <span><strong>${t.modalYouHaveLeftLabel || "You may have left"}:</strong></span>
                      <strong class="${mIsLoss ? 'farmer-calc-val--loss' : 'farmer-calc-profit'}">${formatRupees(m.estNet)}</strong>
                    </div>
                  </div>
                </details>
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
  var lastFocusedElement = null;

  function openMarketModal(markets, quantityKg) {
    const modal = document.getElementById("market-result-modal");
    const modalBody = document.getElementById("market-modal-body");
    if (!modal || !modalBody) return;

    lastFocusedElement = document.activeElement;
    modalBody.innerHTML = renderFarmerFriendlyModalHtml(markets, currentLang);
    modal.classList.add("is-active");
    modal.removeAttribute("aria-hidden");
    modal.inert = false;
    document.body.classList.add("modal-open");

    requestAnimationFrame(() => {
      const closeBtn = modal.querySelector(".modal-close-button");
      if (closeBtn) closeBtn.focus();
    });
  }

  function closeMarketModal() {
    const modal = document.getElementById("market-result-modal");
    if (!modal) return;

    // Safely restore focus outside modal BEFORE changing aria-hidden/inert attributes
    if (lastFocusedElement && typeof lastFocusedElement.focus === "function" && document.body.contains(lastFocusedElement)) {
      try { lastFocusedElement.focus(); } catch (e) {}
    } else if (document.activeElement && modal.contains(document.activeElement)) {
      try { document.activeElement.blur(); } catch (e) {}
    }

    modal.classList.remove("is-active");
    modal.setAttribute("aria-hidden", "true");
    modal.inert = true;
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

  
  // --- Find Best Market Form UX Upgrade (Visual Crop Selector, Dates, Presets) ---
  
  // --- Full Voice Command & Natural Speech Parser ---
  const KNOWN_VOICE_LOCATIONS = [
    { key: "thane", names: ["thane", "ठाणे", "ठाण्यात", "ठाने", "ठाणे जिल्हा"] },
    { key: "pune", names: ["pune", "पुणे", "पुण्यात", "पुण्यामध्ये", "पुना"] },
    { key: "nashik", names: ["nashik", "नाशिक", "नाशिकमध्ये", "नासिक"] },
    { key: "mumbai", names: ["mumbai", "मुंबई", "vashi", "वाशी", "नवी मुंबई", "navi mumbai", "बॉम्बे"] },
    { key: "palghar", names: ["palghar", "पालघर", "पालघरमध्ये"] },
    { key: "panvel", names: ["panvel", "पनवेल", "पनवेलमध्ये"] },
    { key: "raigad", names: ["raigad", "रायगड", "रायगडमध्ये", "रायगढ"] },
    { key: "nagpur", names: ["nagpur", "नागपूर", "नागपुर"] },
    { key: "latur", names: ["latur", "लातूर", "लातुर"] },
    { key: "nanded", names: ["nanded", "नांदेड"] },
    { key: "akola", names: ["akola", "अकोला"] },
    { key: "amravati", names: ["amravati", "अमरावती"] },
    { key: "kolhapur", names: ["kolhapur", "कोल्हापूर", "कोल्हापुर"] },
    { key: "sangli", names: ["sangli", "सांगली"] },
    { key: "satara", names: ["satara", "सातारा"] },
    { key: "solapur", names: ["solapur", "सोलापूर", "सोलापुर"] },
    { key: "ahmednagar", names: ["ahmednagar", "अहमदनगर", "nagar", "नगर"] },
    { key: "aurangabad", names: ["aurangabad", "औरंगाबाद", "sambhajinagar", "संभाजीनगर", "छत्रपती संभाजीनगर"] },
    { key: "jalna", names: ["jalna", "जालना"] },
    { key: "jalgaon", names: ["jalgaon", "जळगाव", "जलगांव"] },
    { key: "dhule", names: ["dhule", "धुळे", "धुलिया"] },
    { key: "yavatmal", names: ["yavatmal", "यवतमाळ", "यवतमाल"] },
    { key: "wardha", names: ["wardha", "वर्धा"] },
    { key: "chandrapur", names: ["chandrapur", "चंद्रपूर", "चंद्रपुर"] },
    { key: "washim", names: ["washim", "वाशिम"] },
    { key: "hingoli", names: ["hingoli", "हिंगोली"] },
    { key: "parbhani", names: ["parbhani", "परभणी"] },
    { key: "beed", names: ["beed", "बीड"] },
    { key: "nandurbar", names: ["nandurbar", "नंदुरबार"] },
    { key: "indore", names: ["indore", "इंदौर"] },
    { key: "lasalgaon", names: ["lasalgaon", "लासलगाव"] },
    { key: "baramati", names: ["baramati", "बारामती"] },
    { key: "manchar", names: ["manchar", "मंचर"] },
    { key: "khed", names: ["khed", "खेड"] },
    { key: "junnar", names: ["junnar", "जुन्नर"] },
    { key: "narayangaon", names: ["narayangaon", "नारायणगाव"] },
    { key: "yeola", names: ["yeola", "येवला"] },
    { key: "malegaon", names: ["malegaon", "मालेगाव"] },
    { key: "karad", names: ["karad", "कराड"] }
  ];

  const VOICE_CROPS = [
    { id: "tomato", names: ["tomato", "tomatoes", "टमाटर", "टोमॅटो", "टमाटो"] },
    { id: "onion", names: ["onion", "onions", "प्याज", "कांदा", "कांदे", "कांद्याची"] },
    { id: "potato", names: ["potato", "potatoes", "आलू", "बटाटा", "बटाटे", "बटाट्याची"] },
    { id: "cotton", names: ["cotton", "कपास", "कापूस"] },
    { id: "soybean", names: ["soybean", "soya", "सोयाबीन"] },
    { id: "rice", names: ["rice", "paddy", "चावल", "धान", "तांदूळ", "भात"] },
    { id: "wheat", names: ["wheat", "गेहूं", "गहू", "गेहू"] },
    { id: "sugarcane", names: ["sugarcane", "sugar cane", "गन्ना", "ऊस"] },
    { id: "maize", names: ["maize", "corn", "मक्का", "मका"] },
    { id: "groundnut", names: ["groundnut", "peanut", "मूंगफली", "भुईमूग", "शेंगदाणे", "मुंगफली"] },
    { id: "gram", names: ["gram", "chana", "चना", "हरभरा"] },
    { id: "tur", names: ["tur", "arhar", "तूर", "अरहर", "तुरीची"] },
    { id: "chilli", names: ["chilli", "chili", "chillies", "मिर्च", "मिरची", "मिरच्या", "लाल मिर्च", "हिरवी मिरची"] },
    { id: "cabbage", names: ["cabbage", "पत्तागोभी", "कोबी", "पत्ता गोभी"] },
    { id: "cauliflower", names: ["cauliflower", "फूलगोभी", "फ्लॉवर", "फुलगोभी"] },
    { id: "okra", names: ["okra", "bhindi", "ladyfinger", "भिंडी", "भेंडी"] }
  ];

  const VOICE_NUMBER_WORDS = {
    "सौ": 100, "sau": 100, "one hundred": 100, "शंभर": 100,
    "दो सौ": 200, "two hundred": 200, "दोनशे": 200,
    "तीन सौ": 300, "three hundred": 300, "तीनशे": 300,
    "चार सौ": 400, "four hundred": 400, "चारशे": 400,
    "पांच सौ": 500, "पाँच सौ": 500, "five hundred": 500, "पाचशे": 500,
    "छह सौ": 600, "सहाशे": 600,
    "सात सौ": 700, "सातशे": 700,
    "आठ सौ": 800, "आठशे": 800,
    "नौ सौ": 900, "नऊशे": 900,
    "हजार": 1000, "एक हजार": 1000, "one thousand": 1000,
    "दो हजार": 2000, "two thousand": 2000, "दोन हजार": 2000,
    "डेढ़ सौ": 150, "दीडशे": 150,
    "ढाई सौ": 250, "अडीचशे": 250,
    "पचास": 50, "fifty": 50, "पन्नास": 50
  };

  function parseVoiceCommand(text) {
    if (!text || typeof text !== "string") return null;
    const lower = text.toLowerCase().trim();

    let detectedLocation = null;
    let detectedCrop = null;
    let detectedQuantity = null;
    let detectedDate = null;

    // 1. Detect Location
    for (const loc of KNOWN_VOICE_LOCATIONS) {
      for (const name of loc.names) {
        if (lower.includes(name)) {
          detectedLocation = loc.key.charAt(0).toUpperCase() + loc.key.slice(1);
          break;
        }
      }
      if (detectedLocation) break;
    }

    if (!detectedLocation) {
      const locPatterns = [
        /(?:i am in|i live in|in)\s+([a-zA-Z]+)/i,
        /(?:मैं|मै)\s+([^\s]+)\s+(?:में|मे)/u,
        /(?:मी)\s+([^\s]+)\s+(?:मध्ये|त|तच)/u,
        /(?:गाव|गांव)\s+([^\s]+)/u
      ];
      for (const pat of locPatterns) {
        const match = lower.match(pat);
        if (match && match[1]) {
          const candidate = match[1].replace(/[.,!?;:]/g, '').trim();
          if (candidate.length >= 3 && !['रहता', 'आहे', 'आहोत', 'हूँ', 'पास', 'माझ्याकडे'].includes(candidate)) {
            detectedLocation = candidate.charAt(0).toUpperCase() + candidate.slice(1);
            break;
          }
        }
      }
    }

    // 2. Detect Crop
    for (const c of VOICE_CROPS) {
      for (const name of c.names) {
        if (lower.includes(name)) {
          detectedCrop = c.id;
          break;
        }
      }
      if (detectedCrop) break;
    }

    // 3. Detect Quantity
    for (const [word, val] of Object.entries(VOICE_NUMBER_WORDS)) {
      if (lower.includes(word)) {
        detectedQuantity = val;
        break;
      }
    }

    if (!detectedQuantity) {
      const digitMatch = lower.match(/(\d+(?:\.\d+)?)\s*(?:kilo|kilos|kg|kgs|किलो|किलोग्राम|क्विंटल|quintal|ton|टन)?/i);
      if (digitMatch && digitMatch[1]) {
        let num = parseFloat(digitMatch[1]);
        if (lower.includes("quintal") || lower.includes("क्विंटल")) {
          num = num * 100;
        } else if (lower.includes("ton") || lower.includes("टन")) {
          num = num * 1000;
        }
        if (num > 0 && isFinite(num)) {
          detectedQuantity = Math.round(num);
        }
      }
    }

    // 4. Detect Date
    if (lower.includes("today") || lower.includes("आज") || lower.includes("आजच") || lower.includes("आज ही")) {
      detectedDate = "today";
    } else if (lower.includes("tomorrow") || lower.includes("कल") || lower.includes("उद्या") || lower.includes("उद्याच")) {
      detectedDate = "tomorrow";
    } else if (lower.includes("परसों") || lower.includes("परवा") || lower.includes("day after tomorrow")) {
      detectedDate = "custom";
    }

    return {
      location: detectedLocation,
      crop: detectedCrop,
      quantity: detectedQuantity,
      date: detectedDate
    };
  }

  function setupVoiceLocation() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    document.querySelectorAll(".action-card, .action-card__form").forEach((card) => {
      const form = card.matches("form") ? card : card.querySelector("form");
      if (!form) return;

      const mainVoiceBtn = card.querySelector(".voice-command-btn");
      const mainStatusEl = card.querySelector(".voice-command-status");
      const locVoiceBtn = form.querySelector(".voice-location-btn");
      const locFeedbackEl = form.querySelector(".voice-status-feedback");
      const locInput = form.querySelector('input[name="location"]');
      const qtyInput = form.querySelector('input[type="number"], input[name="quantity"]');

      // A. Setup Main Multi-Field Voice Command Button
      if (mainVoiceBtn && !mainVoiceBtn._hasVoiceCommand) {
        mainVoiceBtn._hasVoiceCommand = true;
        const btnText = mainVoiceBtn.querySelector(".voice-command-btn__text") || mainVoiceBtn;

        function resetMainBtn() {
          mainVoiceBtn.classList.remove("is-listening");
          mainVoiceBtn.disabled = false;
          if (btnText) {
            btnText.textContent = translations[currentLang]?.voiceCommandBtnText || "🎙️ Speak Your Details";
          }
        }

        mainVoiceBtn.addEventListener("click", (e) => {
          e.preventDefault();

          if (!SpeechRecognition) {
            if (mainStatusEl) {
              mainStatusEl.innerHTML = `<span class="voice-command-status__missing">⚠️ ${translations[currentLang]?.voicePermissionDeniedMsg || "Voice input isn't available. You can enter the details manually."}</span>`;
              mainStatusEl.classList.add("is-error");
              mainStatusEl.hidden = false;
            }
            return;
          }

          if (mainVoiceBtn.classList.contains("is-listening") && mainVoiceBtn._recognition) {
            try { mainVoiceBtn._recognition.stop(); } catch (err) {}
            resetMainBtn();
            return;
          }

          try {
            const recognition = new SpeechRecognition();
            mainVoiceBtn._recognition = recognition;

            let recogLang = "en-IN";
            if (currentLang === "hi") recogLang = "hi-IN";
            else if (currentLang === "mr") recogLang = "mr-IN";

            recognition.lang = recogLang;
            recognition.continuous = false;
            recognition.interimResults = false;
            recognition.maxAlternatives = 1;

            recognition.onstart = () => {
              mainVoiceBtn.classList.add("is-listening");
              if (btnText) {
                btnText.textContent = translations[currentLang]?.voiceCommandListening || "🎙️ Listening... Speak naturally";
              }
              if (mainStatusEl) {
                mainStatusEl.innerHTML = `<span class="voice-command-status__msg">🎙️ ${translations[currentLang]?.voiceCommandListening || "Listening..."}</span>`;
                mainStatusEl.classList.remove("is-error");
                mainStatusEl.hidden = false;
              }
            };

            recognition.onresult = (event) => {
              if (event.results && event.results.length > 0) {
                const transcript = event.results[0][0].transcript || "";
                const parsed = parseVoiceCommand(transcript);

                if (parsed) {
                  // 1. Fill Location
                  if (parsed.location && locInput) {
                    locInput.value = parsed.location;
                    locInput.dispatchEvent(new Event("input", { bubbles: true }));
                    locInput.dispatchEvent(new Event("change", { bubbles: true }));
                  }

                  // 2. Select Crop
                  if (parsed.crop) {
                    const cropCard = form.querySelector(`.crop-card[data-crop-id="${parsed.crop}"]`);
                    if (cropCard) {
                      cropCard.click();
                      const extraWrap = form.querySelector(".crop-extra-container, #extra-crops-wrapper");
                      if (extraWrap && extraWrap.contains(cropCard)) {
                        extraWrap.hidden = false;
                      }
                    }
                  }

                  // 3. Fill Quantity
                  if (parsed.quantity && qtyInput) {
                    qtyInput.value = parsed.quantity;
                    qtyInput.dispatchEvent(new Event("input", { bubbles: true }));
                    qtyInput.dispatchEvent(new Event("change", { bubbles: true }));
                  }

                  // 4. Select Date
                  if (parsed.date) {
                    const dateBtn = form.querySelector(`.date-option-btn[data-date-type="${parsed.date}"]`);
                    if (dateBtn) dateBtn.click();
                  }

                  // 5. Show What Was Understood & Confirmation Note
                  if (mainStatusEl) {
                    const t = translations[currentLang] || translations.en;
                    const cropName = parsed.crop ? getLocalizedCropName(parsed.crop, currentLang) : null;
                    const dateLabel = parsed.date === "today" ? (t.dateToday || "Today") : (parsed.date === "tomorrow" ? (t.dateTomorrow || "Tomorrow") : null);

                    let chipsHtml = '<div class="voice-command-status__chips">';
                    if (parsed.location) chipsHtml += `<span class="voice-chip-tag">📍 ${parsed.location}</span>`;
                    if (cropName) chipsHtml += `<span class="voice-chip-tag">🌱 ${cropName}</span>`;
                    if (parsed.quantity) chipsHtml += `<span class="voice-chip-tag">⚖️ ${parsed.quantity} KG</span>`;
                    if (dateLabel) chipsHtml += `<span class="voice-chip-tag">📅 ${dateLabel}</span>`;
                    chipsHtml += '</div>';

                    let missingNotes = [];
                    if (!parsed.location) missingNotes.push(t.voiceMissingLocation || "Please enter your location.");
                    if (!parsed.crop) missingNotes.push(t.voiceMissingCrop || "Please select your crop.");
                    if (!parsed.quantity) missingNotes.push(t.voiceMissingQty || "Please enter quantity.");

                    let missingHtml = missingNotes.length > 0
                      ? `<p class="voice-command-status__missing">ℹ️ ${missingNotes.join(" ")}</p>`
                      : "";

                    mainStatusEl.innerHTML = `
                      <span class="voice-command-status__msg">✅ ${t.voiceUnderstoodSuccess || "I understood your details. Please check them once."}</span>
                      ${chipsHtml}
                      ${missingHtml}
                    `;
                    mainStatusEl.classList.remove("is-error");
                    mainStatusEl.hidden = false;
                  }
                }
              }
            };

            recognition.onerror = (event) => {
              resetMainBtn();
              if (mainStatusEl) {
                const t = translations[currentLang] || translations.en;
                const errText = (event.error === "not-allowed" || event.error === "service-not-allowed")
                  ? (t.voicePermissionDeniedMsg || "Voice input isn't available. You can enter the details manually.")
                  : (t.voiceNoSpeechMsg || "Could not hear clearly. Please try speaking again.");
                mainStatusEl.innerHTML = `<span class="voice-command-status__missing">⚠️ ${errText}</span>`;
                mainStatusEl.classList.add("is-error");
                mainStatusEl.hidden = false;
              }
            };

            recognition.onend = () => {
              resetMainBtn();
              mainVoiceBtn._recognition = null;
            };

            recognition.start();
          } catch (err) {
            resetMainBtn();
            if (mainStatusEl) {
              mainStatusEl.innerHTML = `<span class="voice-command-status__missing">⚠️ ${translations[currentLang]?.voicePermissionDeniedMsg || "Voice input isn't available. You can enter the details manually."}</span>`;
              mainStatusEl.classList.add("is-error");
              mainStatusEl.hidden = false;
            }
          }
        });
      }

      // B. Setup Location-Specific Mic Button
      if (locVoiceBtn && !locVoiceBtn._hasVoiceHandler) {
        locVoiceBtn._hasVoiceHandler = true;
        const btnSpan = locVoiceBtn.querySelector(".voice-btn-text") || locVoiceBtn;

        function showLocFeedback(msg, isError = false) {
          if (!locFeedbackEl) return;
          locFeedbackEl.textContent = msg;
          locFeedbackEl.hidden = false;
          if (isError) locFeedbackEl.classList.add("is-error");
          else locFeedbackEl.classList.remove("is-error");
          clearTimeout(locFeedbackEl._timer);
          locFeedbackEl._timer = setTimeout(() => { locFeedbackEl.hidden = true; }, 4000);
        }

        function resetLocBtn() {
          locVoiceBtn.classList.remove("is-listening");
          locVoiceBtn.disabled = false;
          if (btnSpan) btnSpan.textContent = translations[currentLang]?.speakLocationBtn || "Speak";
        }

        locVoiceBtn.addEventListener("click", (e) => {
          e.preventDefault();
          if (!SpeechRecognition) {
            showLocFeedback(translations[currentLang]?.voiceFallbackMsg || "Please enter your location manually.", true);
            if (locInput) locInput.focus();
            return;
          }

          if (locVoiceBtn.classList.contains("is-listening") && locVoiceBtn._activeRecognition) {
            try { locVoiceBtn._activeRecognition.stop(); } catch (err) {}
            resetLocBtn();
            return;
          }

          try {
            const recognition = new SpeechRecognition();
            locVoiceBtn._activeRecognition = recognition;

            let recogLang = "en-IN";
            if (currentLang === "hi") recogLang = "hi-IN";
            else if (currentLang === "mr") recogLang = "mr-IN";

            recognition.lang = recogLang;
            recognition.continuous = false;
            recognition.interimResults = false;
            recognition.maxAlternatives = 1;

            recognition.onstart = () => {
              locVoiceBtn.classList.add("is-listening");
              if (btnSpan) btnSpan.textContent = translations[currentLang]?.voiceListening || "Listening...";
              showLocFeedback(translations[currentLang]?.voiceListening || "Listening...", false);
            };

            recognition.onresult = (event) => {
              if (event.results && event.results.length > 0) {
                let spokenText = event.results[0][0].transcript || "";
                const parsed = parseVoiceCommand(spokenText);
                const resolvedLoc = (parsed && parsed.location) ? parsed.location : spokenText.trim().replace(/[.,!?;:]+$/, "");
                if (resolvedLoc && locInput) {
                  locInput.value = resolvedLoc;
                  locInput.dispatchEvent(new Event("input", { bubbles: true }));
                  locInput.dispatchEvent(new Event("change", { bubbles: true }));
                  showLocFeedback(`📍 ${resolvedLoc}`, false);
                }
              }
            };

            recognition.onerror = (event) => {
              resetLocBtn();
              if (event.error === "not-allowed" || event.error === "service-not-allowed") {
                showLocFeedback(translations[currentLang]?.voiceFallbackMsg || "Please enter your location manually.", true);
              } else if (event.error === "no-speech") {
                showLocFeedback(translations[currentLang]?.voiceNoSpeech || "No speech detected. Please try again.", true);
              }
            };

            recognition.onend = () => {
              resetLocBtn();
              locVoiceBtn._activeRecognition = null;
            };

            recognition.start();
          } catch (err) {
            resetLocBtn();
            showLocFeedback(translations[currentLang]?.voiceFallbackMsg || "Please enter your location manually.", true);
          }
        });
      }
    });
  }

  function setupFindBestMarketForms() {
    const forms = document.querySelectorAll(".action-card__form");
    if (!forms.length) return;

    const todayDate = new Date();
    const todayStr = todayDate.toISOString().split("T")[0];
    const tomorrowDate = new Date();
    tomorrowDate.setDate(tomorrowDate.getDate() + 1);
    const tomorrowStr = tomorrowDate.toISOString().split("T")[0];

    forms.forEach((form) => {
      // A. Setup Date Inputs & Quick Buttons
      const dateInput = form.querySelector('input[type="date"]');
      const dateButtons = form.querySelectorAll(".date-option-btn");
      const customDateWrap = form.querySelector(".date-custom-container");

      if (dateInput && !dateInput.value) {
        dateInput.value = todayStr;
      }

      dateButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
          const type = btn.getAttribute("data-date-type");
          dateButtons.forEach((b) => {
            b.classList.remove("is-selected");
            b.setAttribute("aria-checked", "false");
          });
          btn.classList.add("is-selected");
          btn.setAttribute("aria-checked", "true");

          if (type === "today") {
            if (dateInput) dateInput.value = todayStr;
            if (customDateWrap) customDateWrap.hidden = true;
          } else if (type === "tomorrow") {
            if (dateInput) dateInput.value = tomorrowStr;
            if (customDateWrap) customDateWrap.hidden = true;
          } else if (type === "custom") {
            if (customDateWrap) {
              customDateWrap.hidden = false;
              if (dateInput) {
                dateInput.focus();
                try {
                  if (typeof dateInput.showPicker === "function") {
                    dateInput.showPicker();
                  }
                } catch (e) {}
              }
            }
          }
        });
      });

      if (dateInput) {
        dateInput.addEventListener("change", () => {
          const val = dateInput.value;
          dateButtons.forEach((b) => {
            b.classList.remove("is-selected");
            b.setAttribute("aria-checked", "false");
          });
          if (val === todayStr) {
            const todayBtn = form.querySelector('.date-option-btn[data-date-type="today"]');
            if (todayBtn) {
              todayBtn.classList.add("is-selected");
              todayBtn.setAttribute("aria-checked", "true");
            }
            if (customDateWrap) customDateWrap.hidden = true;
          } else if (val === tomorrowStr) {
            const tomorrowBtn = form.querySelector('.date-option-btn[data-date-type="tomorrow"]');
            if (tomorrowBtn) {
              tomorrowBtn.classList.add("is-selected");
              tomorrowBtn.setAttribute("aria-checked", "true");
            }
            if (customDateWrap) customDateWrap.hidden = true;
          } else {
            const customBtn = form.querySelector('.date-option-btn[data-date-type="custom"]');
            if (customBtn) {
              customBtn.classList.add("is-selected");
              customBtn.setAttribute("aria-checked", "true");
            }
            if (customDateWrap) customDateWrap.hidden = false;
          }
        });
      }

      // B. Visual Crop Selection
      const cropCards = form.querySelectorAll(".crop-card");
      const hiddenCropInput = form.querySelector('input[name="crop"]');
      const select = form.querySelector("select");

      cropCards.forEach((card) => {
        card.addEventListener("click", () => {
          const cropId = card.getAttribute("data-crop-id");
          cropCards.forEach((c) => {
            c.classList.remove("is-selected");
            c.setAttribute("aria-checked", "false");
          });
          card.classList.add("is-selected");
          card.setAttribute("aria-checked", "true");

          if (hiddenCropInput) {
            hiddenCropInput.value = cropId;
          }

          if (select) {
            for (let i = 0; i < select.options.length; i++) {
              const opt = select.options[i];
              const key = (opt.getAttribute("data-translate-key") || "").toLowerCase();
              const txt = (opt.textContent || "").toLowerCase();
              if (key.includes(cropId) || txt.includes(cropId)) {
                select.selectedIndex = i;
                break;
              }
            }
          }
        });
      });

      // C. View All Crops Toggle
      const toggleCropsBtn = form.querySelector(".crop-toggle-btn, #toggle-all-crops-btn");
      const extraCropsWrap = form.querySelector(".crop-extra-container, #extra-crops-wrapper");

      if (toggleCropsBtn && extraCropsWrap) {
        toggleCropsBtn.addEventListener("click", () => {
          const isHidden = extraCropsWrap.hidden;
          extraCropsWrap.hidden = !isHidden;
          toggleCropsBtn.setAttribute("aria-expanded", String(isHidden));
          const btnSpan = toggleCropsBtn.querySelector("span") || toggleCropsBtn;
          if (isHidden) {
            btnSpan.textContent = translations[currentLang]?.showFewerCropsBtn || "▴ Show Fewer Crops";
          } else {
            btnSpan.textContent = translations[currentLang]?.viewAllCropsBtn || "▾ View All Crops (8 more)";
          }
        });
      }

      // D. Quantity Presets
      const qtyInput = form.querySelector('input[name="quantity"], input[type="number"]');
      const presetChips = form.querySelectorAll(".preset-chip");

      presetChips.forEach((chip) => {
        chip.addEventListener("click", () => {
          const qtyVal = chip.getAttribute("data-qty");
          if (qtyInput && qtyVal) {
            qtyInput.value = qtyVal;
            presetChips.forEach((c) => c.classList.remove("is-active"));
            chip.classList.add("is-active");
          }
        });
      });

      if (qtyInput) {
        qtyInput.addEventListener("input", () => {
          const val = qtyInput.value.trim();
          presetChips.forEach((chip) => {
            if (chip.getAttribute("data-qty") === val) {
              chip.classList.add("is-active");
            } else {
              chip.classList.remove("is-active");
            }
          });
        });
      }

      // E. Geolocation Button
      const locBtn = form.querySelector(".location-button");
      const locInput = form.querySelector('input[name="location"]');
      if (locBtn) {
        locBtn.addEventListener("click", () => {
          const btnSpan = locBtn.querySelector("span");
          if (!navigator.geolocation) {
            if (btnSpan) btnSpan.textContent = translations[currentLang]?.geoNotSupported || "Geolocation is not supported by your browser";
            return;
          }
          if (btnSpan) btnSpan.textContent = translations[currentLang]?.detectingLocation || "Detecting...";
          locBtn.disabled = true;

          navigator.geolocation.getCurrentPosition(
            async (pos) => {
              const { latitude, longitude } = pos.coords;
              try {
                const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
                if (!res.ok) throw new Error("Network error");
                const data = await res.json();
                if (data && data.address) {
                  const city = data.address.city || data.address.town || data.address.village || data.address.county || "Nearby";
                  const state = data.address.state || "Maharashtra";
                  const locStr = `${city}, ${state}`;
                  if (btnSpan) btnSpan.textContent = `📍 ${locStr}`;
                  if (locInput) locInput.value = locStr;
                  locBtn.classList.remove("is-denied");
                } else {
                  throw new Error("Invalid address format");
                }
              } catch (err) {
                if (btnSpan) btnSpan.textContent = translations[currentLang]?.unableToDetectLocation || "Unable to detect location";
                locBtn.classList.add("is-denied");
              } finally {
                locBtn.disabled = false;
              }
            },
            (err) => {
              if (btnSpan) {
                btnSpan.textContent = err.code === err.PERMISSION_DENIED
                  ? (translations[currentLang]?.locationNotAllowed || "Location access was not allowed.")
                  : (translations[currentLang]?.unableToDetectLocation || "Unable to detect location");
              }
              locBtn.classList.add("is-denied");
              locBtn.disabled = false;
            }
          );
        });
      }
    });

    // F. Prepopulate from URL Search Params
    const urlParams = new URLSearchParams(window.location.search);
    const queryCrop = (urlParams.get("crop") || "").trim().toLowerCase();
    const queryQty = urlParams.get("quantity");
    const queryLoc = urlParams.get("location");

    if (queryCrop) {
      forms.forEach((form) => {
        const cards = form.querySelectorAll(".crop-card");
        let matchedCard = null;
        cards.forEach((card) => {
          const cid = (card.getAttribute("data-crop-id") || "").toLowerCase();
          if (cid === queryCrop || queryCrop.includes(cid) || cid.includes(queryCrop)) {
            matchedCard = card;
          }
        });

        if (matchedCard) {
          cards.forEach((c) => {
            c.classList.remove("is-selected");
            c.setAttribute("aria-checked", "false");
          });
          matchedCard.classList.add("is-selected");
          matchedCard.setAttribute("aria-checked", "true");
          const hiddenInput = form.querySelector('input[name="crop"]');
          if (hiddenInput) hiddenInput.value = matchedCard.getAttribute("data-crop-id");

          // If matched card is inside extra crops container, expand it
          const extraWrap = form.querySelector(".crop-extra-container, #extra-crops-wrapper");
          if (extraWrap && extraWrap.contains(matchedCard)) {
            extraWrap.hidden = false;
            const toggleBtn = form.querySelector(".crop-toggle-btn, #toggle-all-crops-btn");
            if (toggleBtn) {
              toggleBtn.setAttribute("aria-expanded", "true");
              const btnSpan = toggleBtn.querySelector("span") || toggleBtn;
              btnSpan.textContent = translations[currentLang]?.showFewerCropsBtn || "▴ Show Fewer Crops";
            }
          }
        }

        if (queryQty) {
          const qtyInput = form.querySelector('input[name="quantity"], input[type="number"]');
          if (qtyInput) {
            qtyInput.value = queryQty;
            form.querySelectorAll(".preset-chip").forEach((chip) => {
              if (chip.getAttribute("data-qty") === queryQty) chip.classList.add("is-active");
              else chip.classList.remove("is-active");
            });
          }
        }

        if (queryLoc) {
          const locInput = form.querySelector('input[name="location"]');
          if (locInput) locInput.value = queryLoc;
        }
      });
    }
  }

  // Initialize form interactions immediately
  setupFindBestMarketForms();
  setupVoiceLocation();

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