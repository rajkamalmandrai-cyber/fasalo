/* KrishiMitra UI foundation: progressive enhancement only. */
(function initialiseKrishiMitraUI() {
  "use strict";

  const root = document.documentElement;
  root.classList.add("js");

  // --- Global Page Load Animation ---
  const handlePageLoad = () => {
    root.classList.remove("is-loading");
    navbar.classList.add("is-visible"); // Add this line
  };

  // Use a timeout to ensure assets are ready and prevent flash of unstyled content
  window.setTimeout(handlePageLoad, 200);

  // --- Number Counting Animation Function ---
  const animateNumber = (element, targetValue, duration = 1500) => {
    if (motionQuery.matches) { // Respect prefers-reduced-motion
      element.textContent = element.dataset.originalText || targetValue;
      return;
    }

    const startValue = 0;
    let startTime = null;

    // Store original text content to restore after animation
    // This handles prefixes, suffixes, and specific formatting like '1,300+'
    const originalText = element.textContent;
    element.dataset.originalText = originalText;

    // Extract prefix and suffix based on original text
    const prefixMatch = originalText.match(/^([^0-9.]*)/);
    const suffixMatch = originalText.match(/([^0-9.]*)$/);
    const prefix = prefixMatch ? prefixMatch[1] : '';
    const suffix = suffixMatch ? suffixMatch[1] : '';

    const step = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const currentValue = startValue + (targetValue - startValue) * progress;

      let formattedValue;
      if (targetValue % 1 === 0) { // Integer
        formattedValue = Math.floor(currentValue).toLocaleString('en-IN');
      } else { // Float (e.g., percentage)
        formattedValue = currentValue.toFixed(1).toLocaleString('en-IN');
      }

      element.textContent = prefix + formattedValue + suffix;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        element.textContent = originalText; // Ensure final exact text is set
      }
    };
    requestAnimationFrame(step);
  };

  // --- Navbar Logic ---
  const navbar = document.querySelector(".navbar");
  const navbarToggle = document.querySelector(".navbar__toggle");
  const navLinks = document.querySelectorAll(".nav__list .nav__link"); // More specific selector
  const sections = document.querySelectorAll("main section[id], footer[id]");

  // Sticky navbar on scroll
  const handleScroll = () => {
    if (window.scrollY > 20) {
      navbar.classList.add("is-scrolled");
    } else {
      navbar.classList.remove("is-scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });

  // Hamburger menu toggle
  if (navbarToggle) {
    navbarToggle.addEventListener("click", () => {
      const isExpanded = navbarToggle.getAttribute("aria-expanded") === "true";
      navbar.classList.toggle("is-open");
      navbarToggle.setAttribute("aria-expanded", !isExpanded);
    });
  }

  // Close mobile menu when a link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navbar.classList.contains("is-open")) {
        navbar.classList.remove("is-open");
        navbarToggle.setAttribute("aria-expanded", "false");
      }
    });
  });

  // Active navigation link highlighting on scroll
  if (sections.length && navLinks.length) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            const activeLink = document.querySelector(`.nav__link[href="#${id}"]`);

            navLinks.forEach((link) => link.classList.remove("is-active"));
            if (activeLink) {
              activeLink.classList.add("is-active");
            }
          }
        });
      },
      { rootMargin: "-40% 0px -60% 0px" }
    );

    sections.forEach((section) => {
      sectionObserver.observe(section);
    });
  }

  // --- Language Translation Logic ---
  const translations = { // This object should ideally be loaded from a JSON file for better maintainability
    en: {
      heroBadge: '<svg class="icon" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></svg> Powered by Government Market Data',
      heroTitle: 'Sell Your Crops At The <span class="highlight">Best Market.</span>',
      heroSubtitle: "Compare nearby mandis, estimate transport cost, and discover where you can earn the highest profit.",
      trustGov: '<svg class="icon" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> Government Mandi Data',
      trustAI: '<svg class="icon" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> AI Recommendation',
      trustLang: '<svg class="icon" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> Multiple Languages',
      langEnglish: "English",

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
      cardDateLabel: "Selling Date",
      findBestMarketBtn: "Find Best Market",
      howItWorksBtn: "How It Works",
      checkMarketBtn: "Find Best Market",

      // --- Quick Actions ---
      quickActionsTitle: "How can KrishiMitra help you today?",
      quickAction1Title: "Find Best Market",
      quickAction1Desc: "Compare nearby mandi prices and maximize profit.",
      quickAction2Title: "Compare Prices",
      quickAction2Desc: "Compare multiple markets for your selected crop.",
      quickAction3Title: "Nearby Mandis",
      quickAction3Desc: "Discover markets around your current location.",
      quickAction4Title: "Weather Forecast",
      quickAction4Desc: "Future integration.",

      // --- Why KrishiMitra ---
      whyBetterEyebrow: "Why KrishiMitra",
      whyBetterTitle: "Why KrishiMitra Gives Better Results",
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
      analyticsCard2Title: "Average Price",
      analyticsCard3Title: "Markets Covered",
      analyticsCard4Title: "AI Confidence",
      toolbarSearchPlaceholder: "Search Crop (e.g. Wheat)",
      toolbarSortBtn: "Sort By Price",
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

      // --- Footer ---
      footerTagline: "Smarter Farming.<br>Better Profits.",
      footerSlogan: "Empowering farmers with technology.",
      footerHeadingProduct: "Product",
      footerLinkFeatures: "Features",
      footerLinkHowItWorks: "How It Works",
      footerLinkTestimonials: "Testimonials",
      footerLinkFAQ: "FAQ",
      footerHeadingCompany: "Company",
      footerLinkAbout: "About Us",
      footerLinkContact: "Contact",
      footerLinkCareers: "Careers",
      footerHeadingLegal: "Legal",
      footerLinkPrivacy: "Privacy Policy",
      footerLinkTerms: "Terms of Service",
      footerCopyright: "&copy; 2024 KrishiMitra. All rights reserved.",
    },
    hi: {
      heroBadge: '<svg class="icon" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></svg> सरकारी मंडी डेटा से संचालित',
      heroTitle: 'अपनी फसलें <span class="highlight">सर्वोत्तम बाजार</span> में बेचें।',
      heroSubtitle: "आस-पास की मंडियों की तुलना करें, परिवहन लागत का अनुमान लगाएं, और जानें कि आप कहां सबसे ज्यादा मुनाफा कमा सकते हैं।",
      trustGov: '<svg class="icon" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> सरकारी मंडी डेटा',
      trustAI: '<svg class="icon" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> एआई सिफारिश',
      trustLang: '<svg class="icon" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> अनेक भाषाएं',
      langEnglish: "अंग्रेज़ी",

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
      cardDateLabel: "बिक्री की तारीख",
      // Buttons
      findBestMarketBtn: "सर्वोत्तम बाजार खोजें",
      howItWorksBtn: "यह कैसे काम करता है",
      checkMarketBtn: "सर्वोत्तम बाजार जांचें",

      // Quick Actions
      quickActionsTitle: "आज कृषि मित्र आपकी मदद कैसे कर सकता है?",
      quickAction1Title: "सर्वोत्तम बाजार खोजें",
      quickAction1Desc: "आस-पास की मंडी की कीमतों की तुलना करें और मुनाफा बढ़ाएं।",
      quickAction2Title: "कीमतों की तुलना करें",
      quickAction2Desc: "अपनी चुनी हुई फसल के लिए कई बाजारों की तुलना करें।",
      quickAction3Title: "आस-पास की मंडियां",
      quickAction3Desc: "अपने वर्तमान स्थान के आसपास के बाजारों की खोज करें।",
      quickAction4Title: "मौसम का पूर्वानुमान",
      quickAction4Desc: "जल्द ही उपलब्ध होगा।",

      // Why KrishiMitra
      whyEyebrow: "कृषि मित्र ही क्यों?",
      whyTitle: "किसान कृषि मित्र पर भरोसा क्यों करते हैं",
      whyCard1Title: "आस-पास की मंडी खोजें",
      whyCard1Desc: "स्वचालित रूप से आस-पास की मंडियों को ढूंढता है।",
      whyCard2Title: "एआई से कीमतों का अनुमान",
      whyCard2Desc: "ऐतिहासिक डेटा का उपयोग करके बाजार की कीमतों का अनुमान लगाता है।",
      whyCard3Title: "ट्रांसपोर्ट खर्च का हिसाब",
      whyCard3Desc: "बेचने से पहले यात्रा खर्च का अनुमान लगाता है।",
      whyCard4Title: "मुनाफे की तुलना",
      whyCard4Desc: "ट्रांसपोर्ट लागत के बाद अपेक्षित लाभ दिखाता है।",
      whyCard5Title: "कई भाषाओं में उपलब्ध",
      whyCard5Desc: "आसान अंग्रेजी, हिंदी और मराठी।",
      whyCard6Title: "सरकारी मंडी का डेटा",
      whyCard6Desc: "आधिकारिक मंडी मूल्य जानकारी का उपयोग करके बनाया गया है।",

      // How It Works
      howEyebrow: "यह कैसे काम करता है",
      howTitle: "स्मार्ट खेती के लिए सरल कदम",
      howStep1Title: "लोकेशन की अनुमति दें",
      howStep1Desc: "अपना वर्तमान स्थान पता करें।",
      howStep2Title: "अपनी फसल चुनें",
      howStep2Desc: "अपनी फसल का चयन करें।",
      howStep3Title: "मात्रा दर्ज करें",
      howStep3Desc: "फसल की मात्रा दर्ज करें।",
      howStep4Title: "बाजारों की तुलना करें",
      howStep4Desc: "आस-पास की मंडी की कीमतों की तुलना करें।",
      howStep5Title: "सबसे अच्छी सलाह पाएं",
      howStep5Desc: "देखें कि कौन सा बाजार अधिकतम लाभ देता है।",

      // Market Preview
      marketIntelEyebrow: "लाइव मार्केट इंटेलिजेंस",
      marketIntelTitle: "लाइव मार्केट इंटेलिजेंस",
      marketIntelSubtitle: "सरकारी मंडी डेटा और एआई विश्लेषण द्वारा संचालित वास्तविक समय की मंडी मूल्य तुलना।",
      analyticsCard1Title: "आज की उच्चतम कीमत",
      analyticsCard2Title: "औसत मूल्य",
      analyticsCard3Title: "शामिल बाजार",
      analyticsCard4Title: "एआई आत्मविश्वास",
      toolbarSearchPlaceholder: "फसल खोजें (जैसे गेहूं)",
      toolbarSortBtn: "कीमत के अनुसार छाँटें",
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

      // Footer
      footerTagline: "स्मार्ट खेती। बेहतर मुनाफा।",
      footerSlogan: "किसानों को प्रौद्योगिकी के साथ सशक्त बनाना।",
      footerHeadingProduct: "उत्पाद",
      footerLinkFeatures: "विशेषताएँ",
      footerLinkHowItWorks: "यह कैसे काम करता है",
      footerLinkTestimonials: "प्रशंसापत्र",
      footerLinkFAQ: "सामान्य प्रश्न",
      footerHeadingCompany: "कंपनी",
      footerLinkAbout: "हमारे बारे में",
      footerLinkContact: "संपर्क करें",
      footerLinkCareers: "करियर",
      footerHeadingLegal: "कानूनी",
      footerLinkPrivacy: "गोपनीयता नीति",
      footerLinkTerms: "सेवा की शर्तें",
      footerCopyright: "&copy; 2024 कृषि मित्र। सर्वाधिकार सुरक्षित।",
    },
    mr: {
      heroBadge: '<svg class="icon" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></svg> सरकारी बाजार डेटाद्वारे समर्थित',
      heroTitle: 'तुमची पिके <span class="highlight">सर्वोत्तम बाजारात</span> विका.',
      heroSubtitle: "जवळच्या मंडईंची तुलना करा, वाहतूक खर्चाचा अंदाज घ्या आणि तुम्ही सर्वाधिक नफा कुठे मिळवू शकता ते शोधा.",
      trustGov: '<svg class="icon" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> सरकारी मंडी डेटा',
      trustAI: '<svg class="icon" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> एआय शिफारस',
      trustLang: '<svg class="icon" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> अनेक भाषा',
      langEnglish: "इंग्रजी",

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
      cardDateLabel: "विक्रीची तारीख",

      // Buttons
      findBestMarketBtn: "सर्वोत्तम बाजार शोधा",
      howItWorksBtn: "हे कसे कार्य करते",
      checkMarketBtn: "सर्वोत्तम बाजार तपासा",

      // Quick Actions
      quickActionsTitle: "आज कृषी मित्र तुमची कशी मदत करू शकतो?",
      quickAction1Title: "सर्वोत्तम बाजार शोधा",
      quickAction1Desc: "जवळच्या मंडईच्या किमतींची तुलना करा आणि नफा वाढवा.",
      quickAction2Title: "किंमतींची तुलना करा",
      quickAction2Desc: "तुमच्या निवडलेल्या पिकासाठी अनेक बाजारांची तुलना करा.",
      quickAction3Title: "जवळच्या मंडई",
      quickAction3Desc: "तुमच्या वर्तमान स्थानाजवळील बाजारपेठा शोधा.",
      quickAction4Title: "हवामानाचा अंदाज",
      quickAction4Desc: "लवकरच उपलब्ध होईल.",

      // Why KrishiMitra
      whyEyebrow: "कृषी मित्र का?",
      whyTitle: "शेतकरी कृषी मित्रावर विश्वास का ठेवतात",
      whyCard1Title: "जवळची मंडई शोधा",
      whyCard1Desc: "जवळच्या मंडई आपोआप शोधते.",
      whyCard2Title: "एआय द्वारे किमतीचा अंदाज",
      whyCard2Desc: "ऐतिहासिक डेटा वापरून बाजाराच्या किमतींचा अंदाज लावते.",
      whyCard3Title: "वाहतूक खर्चाची गणना",
      whyCard3Desc: "विक्रीपूर्वी प्रवास खर्चाचा अंदाज लावते.",
      whyCard4Title: "नफ्याची तुलना",
      whyCard4Desc: "वाहतूक खर्चानंतर अपेक्षित नफा दर्शवते.",
      whyCard5Title: "अनेक भाषांमध्ये उपलब्ध",
      whyCard5Desc: "सोपे इंग्रजी, हिंदी आणि मराठी.",
      whyCard6Title: "सरकारी मंडईचा डेटा",
      whyCard6Desc: "अधिकृत मंडईच्या किमतीच्या माहितीनुसार तयार केलेले.",

      // How It Works
      howEyebrow: "हे कसे कार्य करते",
      howTitle: "स्मार्ट शेतीसाठी सोप्या पायऱ्या",
      howStep1Title: "लोकेशनला परवानगी द्या",
      howStep1Desc: "तुमचे वर्तमान स्थान शोधा.",
      howStep2Title: "पीक निवडा",
      howStep2Desc: "तुमचे पीक निवडा.",
      howStep3Title: "प्रमाण प्रविष्ट करा",
      howStep3Desc: "पिकाचे प्रमाण प्रविष्ट करा.",
      howStep4Title: "बाजारांची तुलना करा",
      howStep4Desc: "जवळच्या मंडईच्या किमतींची तुलना करा.",
      howStep5Title: "सर्वोत्तम शिफारस मिळवा",
      howStep5Desc: "कोणता बाजार सर्वाधिक नफा देतो ते पहा.",

      // Market Preview
      marketIntelEyebrow: "थेट बाजार बुद्धिमत्ता",
      marketIntelTitle: "थेट बाजार बुद्धिमत्ता",
      marketIntelSubtitle: "सरकारी मंडी डेटा आणि एआय विश्लेषणाद्वारे समर्थित रिअल-टाइम मंडी किंमत तुलना.",
      analyticsCard1Title: "आजची सर्वोच्च किंमत",
      analyticsCard2Title: "सरासरी किंमत",
      analyticsCard3Title: "समाविष्ट बाजारपेठा",
      analyticsCard4Title: "एआय आत्मविश्वास",
      toolbarSearchPlaceholder: "पीक शोधा (उदा. गहू)",
      toolbarSortBtn: "किमतीनुसार लावा",
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

      // Footer
      footerTagline: "स्मार्ट शेती. उत्तम नफा.",
      footerSlogan: "तंत्रज्ञानाने शेतकऱ्यांना सक्षम करणे.",
      footerHeadingProduct: "उत्पादन",
      footerLinkFeatures: "वैशिष्ट्ये",
      footerLinkHowItWorks: "हे कसे कार्य करते",
      footerLinkTestimonials: "अभिप्राय",
      footerLinkFAQ: "FAQ",
      footerHeadingCompany: "कंपनी",
      footerLinkAbout: "आमच्याबद्दल",
      footerLinkContact: "संपर्क",
      footerLinkCareers: "करिअर",
      footerHeadingLegal: "कायदेशीर",
      footerLinkPrivacy: "गोपनीयता धोरण",
      footerLinkTerms: "सेवा अटी",
      footerCopyright: "&copy; 2024 कृषी मित्र. सर्व हक्क राखीव.",
    },
  };

  const languageSelector = document.querySelector(".language-selector");
  if (languageSelector) {
    const langToggle = languageSelector.querySelector(".language-selector__toggle [data-translate-key='langEnglish']");
    const langOptions = languageSelector.querySelectorAll(".language-selector__option");

    langOptions.forEach(option => {
      option.addEventListener("click", () => {
        const lang = option.getAttribute("data-lang");
        if (translations[lang]) {
          document.querySelectorAll("[data-translate-key]").forEach(el => {
            const key = el.getAttribute("data-translate-key");
            if (translations[lang][key]) {
              el.innerHTML = translations[lang][key];
            }
          });
          if (langToggle) {
            // Update only the text part of the toggle, preserving the icon
            const newLangName = translations[lang]['langEnglish'] || option.textContent.replace(/\(Coming Soon\)/, '').trim();
            langToggle.textContent = newLangName;
          }
          document.documentElement.lang = lang;
        } else {
          alert("Language support for " + option.textContent + " is coming soon!");
        }
        languageSelector.querySelector("details").removeAttribute("open");
      });
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

  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const setMotionPreference = (event) => {
    root.dataset.motion = event.matches ? "reduced" : "full";
  };

  setMotionPreference(motionQuery);
  motionQuery.addEventListener?.("change", setMotionPreference);

  const heroSection = document.querySelector(".hero-section");
  const heroForm = heroSection?.querySelector(".action-card__form");
  const heroPanel = heroSection?.querySelector(".market-intelligence-panel");
  const heroContent = heroSection?.querySelector(".hero-content"); // Get hero content for initial animation
  const resultSection = document.getElementById("result-section");
  const heroStatus = heroSection?.querySelector(".hero-form-status");

  if (heroForm && heroStatus) {
    const submitButton = heroForm.querySelector('button[type="submit"]');

    heroForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!submitButton || submitButton.disabled) return;

      const buttonText = submitButton.querySelector(".button__text");
      const originalText = buttonText?.textContent || "Find Best Market";
      const steps = [
        "Finding nearby markets...",
        "Comparing prices...",
        "Calculating transport...",
        "Preparing recommendation...",
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
        heroStatus.textContent = "Recommendation ready: Nashik APMC is leading today.";
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

  if (heroPanel && !motionQuery.matches) {
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

  const animatedElements = document.querySelectorAll("[data-animate]");
  if ("IntersectionObserver" in window && !motionQuery.matches) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;

          // Determine stagger delay if part of a staggered group
          let delay = 0;
          const parentStagger = el.closest('[data-stagger-children]');
          if (parentStagger) {
            const siblings = Array.from(parentStagger.querySelectorAll('[data-animate]'));
            const index = siblings.indexOf(el);
            if (index !== -1) {
              delay = index * 80; // 80ms delay between cards
            }
          }
          el.style.transitionDelay = `${delay}ms`; // Apply stagger delay

          el.classList.add("is-visible");

          // Animate numbers in analytics cards after their own reveal animation starts
          if (el.classList.contains('card') && el.closest('.analytics-grid')) {
            const displayElement = el.querySelector('.display');
            if (displayElement && displayElement.dataset.targetValue) {
              const target = parseFloat(displayElement.dataset.targetValue);
              if (!isNaN(target)) {
                // Delay number animation slightly after card reveal
                setTimeout(() => {
                  animateNumber(displayElement, target, 1000);
                }, delay + 300); // 300ms after card starts appearing
              }
            }
          }
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.1 }
    );

    animatedElements.forEach((element) => revealObserver.observe(element)); // Observe all elements with data-animate
  } else {
    animatedElements.forEach((element) => element.classList.add("is-visible"));
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
  }

  document.querySelectorAll("form[novalidate]").forEach((form) => {
    form.addEventListener("submit", (event) => event.preventDefault());
  });

  // --- FAQ Accordion Animation ---
  document.querySelectorAll('.faq-item').forEach(faqItem => {
    faqItem.addEventListener('toggle', () => {
      const answer = faqItem.querySelector('.faq-item__answer');
      if (faqItem.open) {
        answer.style.gridTemplateRows = '1fr'; // Expand
      } else {
        answer.style.gridTemplateRows = '0fr'; // Collapse
      }
    });
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
  window.KrishiMitraUI = {
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
