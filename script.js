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
      heroBadge: '<svg class="icon" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></svg> Powered by Government Market Data',
      heroTitle: 'Sell Your Crops At The <span class="highlight">Best Market.</span>',
      heroSubtitle: "Compare. Decide. Sell Better.", // Updated to match HTML content
      trustGov: 'Government Mandi Data', // Updated to match HTML content
      trustAI: 'AI Recommendation', // Updated to match HTML content
      trustLocation: 'Nearby Markets',
      langEnglish: "English",
      langHindi: "Hindi",
      langMarathi: "Marathi",

      // --- Nav ---
      navHome: "Home",
      navFindMarket: "Find Market",
      navAbout: "About",
      navContact: "Contact",

      // --- Hero & Action Card ---
      cardTitle: "Find Best Market",
      cardLocationLabel: "Your Location",
      detectLocationBtn: "Detect My Location",
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
      recommendationReady: "Recommendation ready: Nashik APMC is leading today.",
      languageComingSoonPlaceholder: "(Coming Soon)", // Added for language selector

      // Crop options
      cropTomato: "Tomato",
      cropOnion: "Onion",
      cropPotato: "Potato",
      cropCotton: "Cotton",
      cropSoybean: "Soybean",
      cropRice: "Rice",
      cropWheat: "Wheat",
      cropSugarcane: "Sugarcane",

      // State options
      stateMaharashtra: "Maharashtra",
      statePunjab: "Punjab",
      stateMadhyaPradesh: "Madhya Pradesh",

      // Market options
      marketAll: "All Markets",
      marketPune: "Pune",
      marketNagpur: "Nagpur",

      // --- Quick Actions ---
      quickActionsTitle: "How can Fasalo help you today?",
      quickAction1Title: "Find Best Market",
      quickAction1Desc: "Compare nearby mandi prices and maximize profit.",
      quickAction2Title: "Compare Prices",
      quickAction2Desc: "Compare multiple markets for your selected crop.",
      quickAction3Title: "Nearby Mandis",
      quickAction3Desc: "Discover markets around your current location.",
      quickAction4Title: "Weather Forecast",
      quickAction4Desc: "Future integration.",

      // --- Why Fasalo ---
      whyBetterEyebrow: "Why Fasalo",
      whyBetterTitle: "Why Fasalo Gives Better Results",
      whyBetterSubtitle: "Every recommendation is based on verified government market prices, intelligent analysis and transport optimization.",
      whyBetterCard1Title: "Government Mandi Data",
      whyBetterCard1Desc: "Uses official mandi prices.",
      whyBetterCard2Title: "AI Market Analysis",
      whyBetterCard2Desc: "Analyzes historical and current trends.",
      whyBetterCard3Title: "Smart Transport Estimation",
      whyBetterCard3Desc: "Estimates travel cost before recommending markets.",
      whyBetterCard4Title: "Maximum Profit Recommendation",
      whyBetterCard4Desc: "Suggests the market with the highest expected profit.",

      // --- Market Preview ---
      marketIntelEyebrow: "Live Market Intelligence",
      marketIntelTitle: "Live Market Intelligence",
      marketIntelSubtitle: "Real-time mandi price comparison powered by Government Mandi Data and AI analysis.",
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
      ctaTitle: "Ready to Find the Best Market?",
      ctaSubtitle: "Get AI-powered market recommendations based on your location, crop and quantity.",
      ctaLearnMoreBtn: "Learn More",
      ctaNewTitle: "Make Smarter Crop-Selling Decisions with Fasalo",
      ctaNewDescription: "Fasalo helps farmers compare mandi prices, estimate transportation costs, and identify markets where their crops can potentially earn better returns. Using government market data and intelligent analysis, Fasalo makes it easier to compare nearby markets before selling.",
      benefit1Title: "Compare Mandi Prices",
      benefit1Desc: "Compare crop prices across nearby markets before deciding where to sell.",
      benefit2Title: "Find Better Markets",
      benefit2Desc: "Use your location and crop information to discover suitable nearby mandis.",
      benefit3Title: "Understand Potential Profit",
      benefit3Desc: "Consider market prices and transport costs to make a more informed selling decision.",
      ctaExploreHowWorksBtn: "Explore How Fasalo Works",
      ctaExploreMandiIntelBtn: "Explore Mandi Intelligence",

      // --- Footer ---
      footerTagline: "Every Harvest Deserves the Best Market.",
      footerMobileTagline: "Helping farmers make smarter selling decisions with AI-powered market intelligence.",
      footerSlogan: "Empowering farmers with technology.",
      footerHeadingQuickLinks: "Quick Links",
      footerHeadingResources: "Resources",
      footerLinkFeatures: "Features",
      footerLinkMarketInsights: "Market Insights",
      footerLinkHowItWorks: "How It Works",
      footerHeadingLegal: "Legal",
      footerLinkPrivacy: "Privacy Policy",
      footerLinkTerms: "Terms of Service",
      footerTrustGov: "Government Mandi Data ✓",
      footerTrustAI: "AI Recommendation ✓",
      footerMadeIn: "Made with ❤️ in India 🇮🇳",
      footerCopyright: "&copy; 2025 Fasalo. All Rights Reserved.",
      footerCopyrightMobile: "&copy; 2025 Fasalo. All Rights Reserved.",
    },
    hi: {
      heroBadge: '<svg class="icon" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></svg> सरकारी मंडी डेटा द्वारा संचालित',
      heroTitle: 'अपनी फसलें <span class="highlight">सर्वोत्तम बाजार</span> में बेचें।',
      heroSubtitle: "तुलना करें। निर्णय लें। बेहतर बेचें।",
      trustGov: 'सरकारी मंडी डेटा',
      trustAI: 'एआई सिफारिश',
      trustLocation: 'आस-पास के बाजार',
      trustLang: 'कई भाषाएँ',
      langEnglish: "अंग्रेज़ी",
      langHindi: "हिन्दी",
      langMarathi: "मराठी",

      // Nav
      navHome: "होम",
      navFindMarket: "बाजार खोजें",
      navAbout: "हमारे बारे में",
      navContact: "संपर्क करें",

      // Hero Action Card
      cardTitle: "सर्वोत्तम बाजार खोजें",
      cardLocationLabel: "आपका स्थान",
      detectLocationBtn: "मेरा स्थान पता करें",
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
      recommendationReady: "सिफारिश तैयार है: नासिक एपीएमसी आज आगे है।",
      languageComingSoonPlaceholder: "(जल्द आ रहा है)",

      // Crop options
      cropTomato: "टमाटर",
      cropOnion: "प्याज",
      cropPotato: "आलू",
      cropCotton: "कपास",
      cropSoybean: "सोयाबीन",
      cropRice: "चावल",
      cropWheat: "गेहूं",
      cropSugarcane: "गन्ना",

      // State options
      stateMaharashtra: "महाराष्ट्र",
      statePunjab: "पंजाब",
      stateMadhyaPradesh: "मध्य प्रदेश",

      // Market options
      marketAll: "सभी बाजार",
      marketPune: "पुणे",
      marketNagpur: "नागपुर",

      // Quick Actions
      quickActionsTitle: "आज फसालो आपकी मदद कैसे कर सकता है?",
      quickAction1Title: "सर्वोत्तम बाजार खोजें",
      quickAction1Desc: "आस-पास की मंडी की कीमतों की तुलना करें और मुनाफा बढ़ाएं।",
      quickAction2Title: "कीमतों की तुलना करें",
      quickAction2Desc: "अपनी चुनी हुई फसल के लिए कई बाजारों की तुलना करें।",
      quickAction3Title: "आस-पास की मंडियां",
      quickAction3Desc: "अपने वर्तमान स्थान के आसपास के बाजारों की खोज करें।",
      quickAction4Title: "मौसम का पूर्वानुमान",
      quickAction4Desc: "भविष्य में एकीकरण।",

      // Why Fasalo
      whyBetterEyebrow: "फसालो ही क्यों",
      whyBetterTitle: "फसालो बेहतर परिणाम क्यों देता है",
      whyBetterSubtitle: "हर सिफारिश सत्यापित सरकारी बाजार कीमतों, बुद्धिमान विश्लेषण और परिवहन अनुकूलन पर आधारित है।",
      whyBetterCard1Title: "सरकारी मंडी डेटा",
      whyBetterCard1Desc: "आधिकारिक मंडी कीमतों का उपयोग करता है।",
      whyBetterCard2Title: "एआई बाजार विश्लेषण",
      whyBetterCard2Desc: "ऐतिहासिक और वर्तमान रुझानों का विश्लेषण करता है।",
      whyBetterCard3Title: "स्मार्ट परिवहन अनुमान",
      whyBetterCard3Desc: "बाजारों की सिफारिश करने से पहले यात्रा लागत का अनुमान लगाता है।",
      whyBetterCard4Title: "अधिकतम लाभ की सिफारिश",
      whyBetterCard4Desc: "उच्चतम अपेक्षित लाभ वाले बाजार का सुझाव देता है।",

      // Market Preview
      marketIntelEyebrow: "लाइव मार्केट इंटेलिजेंस",
      marketIntelTitle: "लाइव मार्केट इंटेलिजेंस",
      marketIntelSubtitle: "सरकारी मंडी डेटा और एआई विश्लेषण द्वारा संचालित वास्तविक समय की मंडी मूल्य तुलना।",
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
      intelThToday: "आज का मूल्य",
      intelThYesterday: "कल का मूल्य",
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
      ctaTitle: "सर्वोत्तम बाजार खोजने के लिए तैयार हैं?",
      ctaSubtitle: "अपने स्थान, फसल और मात्रा के आधार पर एआई-संचालित बाजार सिफारिशें प्राप्त करें।",
      ctaLearnMoreBtn: "और जानें",
      ctaNewTitle: "फसालो के साथ फसल बेचने के बेहतर निर्णय लें",
      ctaNewDescription: "फसालो किसानों को मंडी की कीमतों की तुलना करने, परिवहन लागत का अनुमान लगाने और उन बाजारों की पहचान करने में मदद करता है जहां उनकी फसलों से संभावित रूप से बेहतर रिटर्न मिल सकता है। सरकारी बाजार डेटा और बुद्धिमान विश्लेषण का उपयोग करके, फसालो बेचने से पहले आस-पास के बाजारों की तुलना करना आसान बनाता है।",
      benefit1Title: "मंडी कीमतों की तुलना करें",
      benefit1Desc: "बेचने का निर्णय लेने से पहले आस-पास के बाजारों में फसल की कीमतों की तुलना करें।",
      benefit2Title: "बेहतर बाजार खोजें",
      benefit2Desc: "उपयुक्त आस-पास की मंडियों को खोजने के लिए अपने स्थान और फसल की जानकारी का उपयोग करें।",
      benefit3Title: "संभावित लाभ को समझें",
      benefit3Desc: "अधिक सूचित बिक्री निर्णय लेने के लिए बाजार की कीमतों और परिवहन लागत पर विचार करें।",
      ctaExploreHowWorksBtn: "जानें फसालो कैसे काम करता है",
      ctaExploreMandiIntelBtn: "मंडी इंटेलिजेंस एक्सप्लोर करें",

      // Footer
      footerTagline: "हर फसल सर्वोत्तम बाज़ार की हक़दार है।",
      footerMobileTagline: "एआई-संचालित बाजार इंटेलिजेंस के साथ किसानों को बेहतर बिक्री निर्णय लेने में मदद करना।",
      footerSlogan: "किसानों को प्रौद्योगिकी के साथ सशक्त बनाना।",
      footerHeadingQuickLinks: "त्वरित लिंक",
      footerHeadingResources: "संसाधन",
      footerLinkFeatures: "विशेषताएँ",
      footerLinkMarketInsights: "बाजार अंतर्दृष्टि",
      footerLinkHowItWorks: "यह कैसे काम करता है",
      footerHeadingLegal: "कानूनी",
      footerLinkPrivacy: "गोपनीयता नीति",
      footerLinkTerms: "सेवा की शर्तें",
      footerTrustGov: "सरकारी मंडी डेटा ✓",
      footerTrustAI: "एआई सिफारिश ✓",
      footerMadeIn: "❤️ भारत में निर्मित 🇮🇳",
      footerCopyright: "&copy; 2025 फसालो। सर्वाधिकार सुरक्षित।",
      footerCopyrightMobile: "&copy; 2025 फसालो। सर्वाधिकार सुरक्षित।",
    },
    mr: {
      heroBadge: '<svg class="icon" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></svg> सरकारी बाजार डेटाद्वारे समर्थित',
      heroTitle: 'तुमची पिके <span class="highlight">सर्वोत्तम बाजारात</span> विका.',
      heroSubtitle: "तुलना करा. निर्णय घ्या. चांगले विका.",
      trustGov: 'सरकारी मंडई डेटा',
      trustAI: 'एआय शिफारस',
      trustLocation: 'जवळच्या मंडई',
      trustLang: 'अनेक भाषा',
      langEnglish: "इंग्रजी",
      langHindi: "हिंदी",
      langMarathi: "मराठी",

      // Nav
      navHome: "होम",
      navFindMarket: "बाजार शोधा",
      navAbout: "आमच्याबद्दल",
      navContact: "संपर्क",

      // Hero Action Card
      cardTitle: "सर्वोत्तम बाजार शोधा",
      cardLocationLabel: "तुमचे स्थान",
      detectLocationBtn: "माझे स्थान शोधा",
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
      recommendationReady: "शिफारस तयार आहे: नाशिक एपीएमसी आज आघाडीवर आहे.",
      languageComingSoonPlaceholder: "(लवकरच येत आहे)",

      // Crop options
      cropTomato: "टोमॅटो",
      cropOnion: "कांदा",
      cropPotato: "बटाटा",
      cropCotton: "कापूस",
      cropSoybean: "सोयाबीन",
      cropRice: "तांदूळ",
      cropWheat: "गहू",
      cropSugarcane: "ऊस",

      // State options
      stateMaharashtra: "महाराष्ट्र",
      statePunjab: "पंजाब",
      stateMadhyaPradesh: "मध्य प्रदेश",

      // Market options
      marketAll: "सर्व बाजारपेठा",
      marketPune: "पुणे",
      marketNagpur: "नागपूर",

      // Quick Actions
      quickActionsTitle: "आज फसालो तुम्हाला कशी मदत करू शकतो?",
      quickAction1Title: "सर्वोत्तम बाजार शोधा",
      quickAction1Desc: "जवळच्या मंडईच्या किमतींची तुलना करा आणि नफा वाढवा.",
      quickAction2Title: "किमतींची तुलना करा",
      quickAction2Desc: "तुमच्या निवडलेल्या पिकासाठी अनेक बाजारांची तुलना करा.",
      quickAction3Title: "जवळच्या मंडई",
      quickAction3Desc: "तुमच्या वर्तमान स्थानाजवळील बाजारपेठा शोधा.",
      quickAction4Title: "हवामानाचा अंदाज",
      quickAction4Desc: "भविष्यात एकत्रीकरण.",

      // Why Fasalo
      whyBetterEyebrow: "फसालो का",
      whyBetterTitle: "फसालो चांगले परिणाम का देतो",
      whyBetterSubtitle: "प्रत्येक शिफारस सत्यापित सरकारी बाजार किमती, बुद्धिमान विश्लेषण आणि वाहतूक अनुकूलनावर आधारित आहे.",
      whyBetterCard1Title: "सरकारी मंडई डेटा",
      whyBetterCard1Desc: "अधिकृत मंडई किमती वापरतो.",
      whyBetterCard2Title: "एआय बाजार विश्लेषण",
      whyBetterCard2Desc: "ऐतिहासिक आणि वर्तमान ट्रेंडचे विश्लेषण करतो.",
      whyBetterCard3Title: "स्मार्ट वाहतूक अंदाज",
      whyBetterCard3Desc: "बाजारपेठांची शिफारस करण्यापूर्वी प्रवासाच्या खर्चाचा अंदाज लावतो.",
      whyBetterCard4Title: "जास्तीत जास्त नफ्याची शिफारस",
      whyBetterCard4Desc: "सर्वाधिक अपेक्षित नफा असलेल्या बाजारपेठेची शिफारस करतो.",

      // Market Preview
      marketIntelEyebrow: "थेट बाजार बुद्धिमत्ता",
      marketIntelTitle: "थेट बाजार बुद्धिमत्ता",
      marketIntelSubtitle: "सरकारी मंडी डेटा आणि एआय विश्लेषणाद्वारे समर्थित रिअल-टाइम मंडी किंमत तुलना.",
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
      intelThToday: "आजची किंमत",
      intelThYesterday: "कालची किंमत",
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
      ctaTitle: "सर्वोत्तम बाजार शोधण्यासाठी तयार आहात?",
      ctaSubtitle: "तुमचे स्थान, पीक आणि प्रमाण यावर आधारित एआय-समर्थित बाजार शिफारसी मिळवा.",
      ctaLearnMoreBtn: "अधिक जाणून घ्या",
      ctaNewTitle: "फसालोसह पीक विक्रीचे अधिक स्मार्ट निर्णय घ्या",
      ctaNewDescription: "फसालो शेतकऱ्यांना मंडईच्या किमतींची तुलना करण्यास, वाहतूक खर्चाचा अंदाज घेण्यास आणि त्यांच्या पिकांना संभाव्यतः चांगले उत्पन्न मिळू शकणाऱ्या बाजारपेठा ओळखण्यास मदत करते. सरकारी बाजार डेटा आणि बुद्धिमान विश्लेषण वापरून, फसालो विक्री करण्यापूर्वी जवळच्या बाजारपेठांची तुलना करणे सोपे करते.",
      benefit1Title: "मंडईच्या किमतींची तुलना करा",
      benefit1Desc: "विक्रीचा निर्णय घेण्यापूर्वी जवळच्या बाजारपेठांमधील पिकांच्या किमतींची तुलना करा.",
      benefit2Title: "चांगल्या बाजारपेठा शोधा",
      benefit2Desc: "जवळच्या योग्य मंडई शोधण्यासाठी तुमचे स्थान आणि पिकाची माहिती वापरा.",
      benefit3Title: "संभाव्य नफा समजून घ्या",
      benefit3Desc: "अधिक माहितीपूर्ण विक्री निर्णय घेण्यासाठी बाजारभाव आणि वाहतूक खर्चाचा विचार करा.",
      ctaExploreHowWorksBtn: "फसालो कसे कार्य करते ते एक्सप्लोर करा",
      ctaExploreMandiIntelBtn: "मंडई इंटेलिजन्स एक्सप्लोर करा",

      // Footer
      footerTagline: "प्रत्येक पिकाला सर्वोत्तम बाजारपेठ मिळायला हवी.",
      footerMobileTagline: "एआय-समर्थित मार्केट इंटेलिजन्ससह शेतकऱ्यांना हुशार विक्री निर्णय घेण्यास मदत करणे.",
      footerSlogan: "तंत्रज्ञानाने शेतकऱ्यांना सक्षम करणे.",
      footerHeadingQuickLinks: "त्वरित दुवे",
      footerHeadingResources: "संसाधने",
      footerLinkFeatures: "वैशिष्ट्ये",
      footerLinkMarketInsights: "बाजार अंतर्दृष्टी",
      footerLinkHowItWorks: "हे कसे कार्य करते",
      footerHeadingLegal: "कायदेशीर",
      footerLinkPrivacy: "गोपनीयता धोरण",
      footerLinkTerms: "सेवा अटी",
      footerTrustGov: "सरकारी मंडई डेटा ✓",
      footerTrustAI: "एआय शिफारस ✓",
      footerMadeIn: "❤️ भारतात बनवलेले 🇮🇳",
      footerCopyright: "&copy; 2025 फसालो. सर्व हक्क राखीव.",
      footerCopyrightMobile: "&copy; 2025 फसालो. सर्व हक्क राखीव.",
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
  };

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
        detectLocationBtn.querySelector("span").textContent = "Geolocation is not supported by your browser";
        return;
      }

      const buttonSpan = detectLocationBtn.querySelector("span");
      buttonSpan.textContent = "Detecting...";
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
          buttonSpan.textContent = "Unable to detect location";
          detectLocationBtn.classList.add("is-denied");
        } finally {
          detectLocationBtn.disabled = false;
        }
      };

      const handleError = (error) => {
        if (error.code === error.PERMISSION_DENIED) {
          buttonSpan.textContent = "Location permission denied. Please enter manually.";
        } else {
          buttonSpan.textContent = "Unable to detect location";
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

  if (heroForm && heroStatus) {
    const submitButton = heroForm.querySelector('button[type="submit"]');

    heroForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!submitButton || submitButton.disabled) return;

      const buttonText = submitButton.querySelector(".button__text");
      // Original text should be retrieved from translations based on currentLang
      const originalTextKey = buttonText?.getAttribute('data-translate-key') || 'checkMarketBtn';
      const originalText = translations[currentLang][originalTextKey];
      const steps = [
        translations[currentLang].findingMarkets,
        translations[currentLang].comparingPrices,
        translations[currentLang].calculatingTransport,
        translations[currentLang].preparingRecommendation,
      ];

      submitButton.disabled = true;
      submitButton.classList.add("is-loading");
      heroPanel?.classList.remove("is-revealed");

      steps.forEach((step, index) => {
        window.setTimeout(() => {
          heroStatus.textContent = step;
        }, index * 650);
      });

      window.setTimeout(() => {
        heroStatus.textContent = translations[currentLang].recommendationReady;
        heroPanel?.classList.add("is-revealed");
        submitButton.disabled = false;

        // Animate result section and its cards
        if (resultSection) {
          resultSection.classList.add("is-visible");
          resultSection.scrollIntoView({ behavior: "smooth", block: "start" });

          const resultCards = resultSection.querySelectorAll('.result-card > *'); // Target direct children for stagger
          resultCards.forEach((card, index) => {
            card.style.transitionDelay = `${index * 100}ms`; // Stagger delay for result cards
            card.classList.add('is-visible'); // Trigger fade-in/translate-up
          });
        }

        submitButton.classList.remove("is-loading");
        if (buttonText) buttonText.textContent = originalText;
      }, steps.length * 650 + 100);
    });
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