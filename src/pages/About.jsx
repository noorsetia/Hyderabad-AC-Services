import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useAppPreferences } from "../context/AppPreferencesContext";
import { getLocalizedSiteContent } from "../data/localizedSiteContent";
import "../styles/About.css";

const copy = {
  en: {
    /* Hero */
    aboutTag: "ABOUT US",
    heroTitle: "Built for modern",
    heroTitle2: "HVAC solutions",
    heroSub: "Strong businesses depend on reliable cooling infrastructure. Hyderabad AC Services delivers complete heating, ventilation, and air conditioning solutions for homes and commercial spaces across Hyderabad.",
    heroBadge: "1000+ Projects",
    heroMission: 'Our mission is to help homes and businesses achieve <strong>lasting comfort</strong> through smarter, more <strong>efficient cooling</strong> systems across Hyderabad.',
    stats: [
      { val: "10+", lbl: "Years of Experience" },
      { val: "500+", lbl: "Satisfied Clients" },
      { val: "1000+", lbl: "Projects Completed" },
      { val: "24/7", lbl: "Support Available" },
    ],

    /* Who We Are */
    whoTag: "WHO WE ARE",
    whoTitle: "Certified Engineers. Proven Systems. Trusted Results.",
    whoTitleWithSpan: "Certified Engineers. Proven Systems. <span>Trusted Results.</span>",
    whoParagraphs: [
      "Hyderabad AC Services is a full-spectrum HVAC company built on certified engineers, skilled field technicians, and a commitment to measurable results. From split and window ACs to centralized ducting, VRF, and VRV systems, we design solutions around each client's environment.",
      "We support residential homes, corporate offices, restaurants, hospitals, retail showrooms, warehouses, and industrial facilities with strict safety practices, energy-efficiency standards, and long-term system reliability.",
      "Whether you need a new installation, an infrastructure upgrade, seasonal servicing, or a dedicated annual maintenance plan, our team provides structured support that keeps your HVAC systems running efficiently all year."
    ],

    /* Why Choose Us */
    whyTag: "WHY CHOOSE US",
    whyTitle: "Six reasons clients trust Hyderabad AC Services.",
    whyItems: [
      { id: "01", title: "Certified Experts", desc: "Professionally certified HVAC engineers trained across residential, commercial, and industrial cooling systems." },
      { id: "02", title: "City-Wide Coverage", desc: "From Banjara Hills to HiTech City, Gachibowli to Secunderabad, we reach every corner of Hyderabad." },
      { id: "03", title: "Transparent Pricing", desc: "Clear, upfront quotations before any work begins. No hidden fees, no last-minute surprises." },
      { id: "04", title: "Same-Day Response", desc: "Rapid-response teams deployed for same-day service across most locations, minimizing downtime." },
      { id: "05", title: "Eco-Friendly Practice", desc: "Responsible refrigerant handling, compliant disposal, and energy-conscious service standards." },
      { id: "06", title: "Satisfaction First", desc: "Every job closes only after thorough quality checks and full client sign-off on results." },
    ],

    /* Solution 1 */
    sol1Tag: "OUR EXPERTISE",
    sol1Title: "Delivering Certainty",
    sol1Text: "Our certified HVAC engineers ensure that every installation, repair, and maintenance project is completed with precision. We help residential and commercial clients solve critical cooling challenges with dependable results.",
    sol1Features: [
      { icon: "precision", label: "Precise Solutions", desc: "Real-time diagnostics and expert troubleshooting for every AC system and configuration." },
      { icon: "growth", label: "Sustainable Comfort", desc: "Supporting long-term cooling efficiency, energy savings, and system durability." },
    ],
    sol1Stat1: "10x",
    sol1Stat1Label: "Faster response time",
    sol1Stat2: "98%",
    sol1Stat2Label: "Customer satisfaction",
    sol1CardEyebrow: "Performance snapshot",
    sol1CardTitle: "Fast response, proven results",
    sol1CardSub: "A quick look at how speed and reliability show up in every job we handle.",

    /* Solution 2 */
    sol2Tag: "OUR PROMISE",
    sol2Title: "Unparalleled Experience",
    sol2Text: "Backed by a decade of experience delivering premium cooling solutions across Hyderabad, we bring precision, reliability, and measurable outcomes to every project.",
    sol2Quote: "Hyderabad AC Services brings quality, expertise, and accountability to every installation and service engagement.",
    sol2Checks: [
      { title: "Deep Industry Expertise", desc: "End-to-end HVAC support from certified engineers across all major AC brands and system types." },
      { title: "Consistent Performance Outcomes", desc: "Delivered by skilled teams with clear targets and 100% project accountability." },
    ],

    /* Team */
    teamTag: "OUR TEAM",
    teamTitle: "Meet the experts behind",
    teamTitle2: "Hyderabad AC Services",
    teamSub: "We deliver reliable cooling solutions designed for long-term comfort and performance.",
    teamMembers: [
      { name: "Rajesh Kumar", role: "Founder & CEO", initials: "RK" },
      { name: "Anil Reddy", role: "Head of Operations", initials: "AR" },
      { name: "Suresh Babu", role: "Lead HVAC Engineer", initials: "SB" },
      { name: "Priya Sharma", role: "Operations Manager", initials: "PS" },
      { name: "Vikram Singh", role: "Project Manager", initials: "VS" },
      { name: "Kavitha Rao", role: "Client Relations", initials: "KR" },
    ],

    ctaBtn: "Book Free Consultation",
    ctaCall: "Call",
  },
  hi: {
    aboutTag: "हमारे बारे में",
    heroTitle: "आधुनिक HVAC",
    heroTitle2: "समाधान के लिए बनाया",
    heroSub: "व्यापार की सफलता विश्वसनीय कूलिंग पर निर्भर करती है। हैदराबाद एसी सर्विसेज सम्पूर्ण HVAC समाधान प्रदान करती है।",
    heroBadge: "1000+ प्रोजेक्ट",
    heroMission: 'हम घरों और व्यवसायों को <strong>इष्टतम आराम</strong> और <strong>कुशल कूलिंग</strong> सिस्टम के माध्यम से बेहतर बनाने के मिशन पर हैं।',
    stats: [
      { val: "10+", lbl: "साल का अनुभव" },
      { val: "500+", lbl: "संतुष्ट ग्राहक" },
      { val: "1000+", lbl: "पूर्ण प्रोजेक्ट" },
      { val: "24/7", lbl: "सपोर्ट उपलब्ध" },
    ],
    whoTag: "हम कौन हैं",
    whoTitle: "प्रमाणित इंजीनियर। सिद्ध सिस्टम। भरोसेमंद परिणाम।",
    whoTitleWithSpan: "प्रमाणित इंजीनियर। सिद्ध सिस्टम। <span>भरोसेमंद परिणाम।</span>",
    whoParagraphs: [
      "हैदराबाद एसी सर्विसेज प्रमाणित HVAC इंजीनियरों और अनुभवी तकनीशियनों की टीम है जो उच्च गुणवत्ता वाले कूलिंग समाधान प्रदान करती है।",
      "घर, ऑफिस, रेस्टोरेंट, हॉस्पिटल या इंडस्ट्रियल सुविधा — हर प्रोजेक्ट में सटीकता, सुरक्षा और दक्षता सुनिश्चित।",
      "नया सिस्टम, अपग्रेड या मेंटेनेंस — हम हमेशा आपके साथ हैं।",
    ],
    whyTag: "हमें क्यों चुनें",
    whyTitle: "ग्राहक हम पर भरोसा करने के छह कारण।",
    whyItems: [
      { id: "01", title: "प्रमाणित विशेषज्ञ", desc: "रिहायशी और कमर्शियल HVAC के लिए प्रशिक्षित टीम।" },
      { id: "02", title: "पूरे शहर में सेवा", desc: "बंजारा हिल्स से हाईटेक सिटी तक हर क्षेत्र कवर।" },
      { id: "03", title: "पारदर्शी मूल्य", desc: "काम शुरू होने से पहले स्पष्ट कोटेशन।" },
      { id: "04", title: "उसी दिन सेवा", desc: "इमरजेंसी में तेज़ प्रतिक्रिया की प्राथमिकता।" },
      { id: "05", title: "पर्यावरण-अनुकूल", desc: "सुरक्षित रेफ्रिजरेंट हैंडलिंग और मानकों का पालन।" },
      { id: "06", title: "संतुष्टि सर्वोपरि", desc: "जब तक पूर्ण संतुष्टि न हो, काम पूरा नहीं।" },
    ],
    sol1Tag: "हमारी विशेषज्ञता",
    sol1Title: "निश्चितता प्रदान करना",
    sol1Text: "हमारे प्रमाणित HVAC इंजीनियर हर इंस्टॉलेशन, रिपेयर और मेंटेनेंस प्रोजेक्ट को बेजोड़ सटीकता से पूरा करते हैं।",
    sol1Features: [
      { icon: "precision", label: "सटीक समाधान", desc: "हर AC सिस्टम के लिए रियल-टाइम डायग्नोस्टिक्स।" },
      { icon: "growth", label: "टिकाऊ आराम", desc: "दीर्घकालिक कूलिंग दक्षता और ऊर्जा बचत।" },
    ],
    sol1Stat1: "10x", sol1Stat1Label: "तेज़ प्रतिक्रिया",
    sol1Stat2: "98%", sol1Stat2Label: "ग्राहक संतुष्टि",
    sol1CardEyebrow: "परफॉर्मेंस स्नैपशॉट",
    sol1CardTitle: "तेज़ प्रतिक्रिया, भरोसेमंद परिणाम",
    sol1CardSub: "हर काम में हमारी speed aur reliability ka quick look.",
    sol2Tag: "हमारा वादा",
    sol2Title: "बेजोड़ अनुभव",
    sol2Text: "एक दशक से हैदराबाद में प्रीमियम कूलिंग समाधान प्रदान कर रहे हैं।",
    sol2Quote: "हैदराबाद एसी सर्विसेज हर इंस्टॉलेशन में गुणवत्ता और जवाबदेही लाती है।",
    sol2Checks: [
      { title: "गहन उद्योग विशेषज्ञता", desc: "सभी प्रमुख AC ब्रांड्स के लिए प्रमाणित इंजीनियरों द्वारा सपोर्ट।" },
      { title: "सुसंगत प्रदर्शन परिणाम", desc: "कुशल टीमों द्वारा 100% प्रोजेक्ट जवाबदेही।" },
    ],
    teamTag: "हमारी टीम",
    teamTitle: "हैदराबाद एसी सर्विसेज",
    teamTitle2: "के विशेषज्ञों से मिलें",
    teamSub: "हम आरामदायक भविष्य के लिए विश्वसनीय कूलिंग समाधान प्रदान करते हैं।",
    teamMembers: [
      { name: "राजेश कुमार", role: "संस्थापक और CEO", initials: "RK" },
      { name: "अनिल रेड्डी", role: "ऑपरेशंस हेड", initials: "AR" },
      { name: "सुरेश बाबू", role: "लीड HVAC इंजीनियर", initials: "SB" },
      { name: "प्रिया शर्मा", role: "ऑपरेशंस मैनेजर", initials: "PS" },
      { name: "विक्रम सिंह", role: "प्रोजेक्ट मैनेजर", initials: "VS" },
      { name: "कविता राव", role: "क्लाइंट रिलेशंस", initials: "KR" },
    ],
    ctaBtn: "फ्री कंसल्टेशन बुक करें",
    ctaCall: "कॉल",
  },
  te: {
    aboutTag: "Maa Gurinchi",
    heroTitle: "Modern HVAC",
    heroTitle2: "solutions kosam built",
    heroSub: "Business success reliable cooling meeda depend avuthundi. Hyderabad AC Services complete HVAC solutions andistundi.",
    heroBadge: "1000+ Projects",
    heroMission: 'Memu homes mariyu businesses ki <strong>optimal comfort</strong> mariyu <strong>efficient cooling</strong> systems andinchadam maa mission.',
    stats: [
      { val: "10+", lbl: "Years Experience" },
      { val: "500+", lbl: "Happy Clients" },
      { val: "1000+", lbl: "Projects Done" },
      { val: "24/7", lbl: "Support" },
    ],
    whoTag: "MEMU EVARAM",
    whoTitle: "Certified Engineers. Proven Systems. Trusted Results.",
    whoTitleWithSpan: "Certified Engineers. Proven Systems. <span>Trusted Results.</span>",
    whoParagraphs: [
      "Hyderabad AC Services certified HVAC engineers mariyu skilled technicians team, high-quality cooling solutions andistundi.",
      "Home, office, restaurant, hospital leda industrial facility — prathi project precision, safety mariyu efficiency tho.",
      "Kotha system, upgrade leda maintenance — memu meetho untamu.",
    ],
    whyTag: "MAMMALNI ENDUKU ENCHUKOVALI",
    whyTitle: "Trust ki 6 reasons.",
    whyItems: [
      { id: "01", title: "Certified Experts", desc: "Residential mariyu commercial HVAC kosam trained team." },
      { id: "02", title: "City-Wide Coverage", desc: "Banjara Hills nundi HiTech City varaku cover." },
      { id: "03", title: "Transparent Pricing", desc: "Work ki mundu clear pricing." },
      { id: "04", title: "Same-Day Response", desc: "Emergency lo same-day service priority." },
      { id: "05", title: "Eco-Friendly", desc: "Responsible refrigerant handling." },
      { id: "06", title: "Satisfaction First", desc: "Full satisfaction varaku work complete avadu." },
    ],
    sol1Tag: "MAA EXPERTISE",
    sol1Title: "Certainty Deliver Chestamu",
    sol1Text: "Maa certified HVAC engineers prathi project ni unmatched precision tho complete chestaru.",
    sol1Features: [
      { icon: "precision", label: "Precise Solutions", desc: "Real-time diagnostics mariyu expert troubleshooting." },
      { icon: "growth", label: "Sustainable Comfort", desc: "Long-term efficiency mariyu energy savings." },
    ],
    sol1Stat1: "10x", sol1Stat1Label: "Faster response",
    sol1Stat2: "98%", sol1Stat2Label: "Customer satisfaction",
    sol1CardEyebrow: "Performance snapshot",
    sol1CardTitle: "Fast response, proven results",
    sol1CardSub: "A quick look at the speed and reliability behind every job we handle.",
    sol2Tag: "MAA PROMISE",
    sol2Title: "Unparalleled Experience",
    sol2Text: "Decade ga Hyderabad lo premium cooling solutions deliver chestunna anubhavam.",
    sol2Quote: "Hyderabad AC Services prathi installation lo quality mariyu accountability teskostundi.",
    sol2Checks: [
      { title: "Deep Industry Expertise", desc: "All major AC brands kosam certified engineers support." },
      { title: "Consistent Performance", desc: "Skilled teams tho 100% project accountability." },
    ],
    teamTag: "MAA TEAM",
    teamTitle: "Hyderabad AC Services",
    teamTitle2: "experts ni kalavandi",
    teamSub: "Comfortable future kosam reliable cooling solutions.",
    teamMembers: [
      { name: "Rajesh Kumar", role: "Founder & CEO", initials: "RK" },
      { name: "Anil Reddy", role: "Head of Operations", initials: "AR" },
      { name: "Suresh Babu", role: "Lead HVAC Engineer", initials: "SB" },
      { name: "Priya Sharma", role: "Operations Manager", initials: "PS" },
      { name: "Vikram Singh", role: "Project Manager", initials: "VS" },
      { name: "Kavitha Rao", role: "Client Relations", initials: "KR" },
    ],
    ctaBtn: "Free Consultation Book Cheyyandi",
    ctaCall: "Call",
  },
};

function About() {
  const { language } = useAppPreferences();
  const site = getLocalizedSiteContent(language);
  const t = copy[language] ?? copy.en;

  return (
    <div className="abt">
      {/* ═══ HERO ═══ */}
      <section className="abt-hero" id="about-hero">
        <div className="abt-w abt-hero__wrap">
          <span className="abt-tag abt-tag--hero">{t.aboutTag}</span>
          <h1 className="abt-hero__h1">
            <span className="abt-hero__h1-line abt-hero__h1-line--top">{t.heroTitle}</span>
            <span className="abt-hero__h1-line abt-hero__h1-line--bottom">{t.heroTitle2}</span>
          </h1>
          <p className="abt-hero__sub">{t.heroSub}</p>

          <div className="abt-hero__images">
            <div className="abt-hero__img">
              <img src="/images/about-hero-1.png" alt="HVAC Installation" loading="eager" />
            </div>
            <div className="abt-hero__img abt-hero__img--center">
              <img src="/images/about-hero-2.png" alt="HVAC Ducting Systems" loading="eager" />
              <span className="abt-hero__badge">{t.heroBadge}</span>
            </div>
            <div className="abt-hero__img">
              <img src="/images/about-hero-3.png" alt="HVAC Repair" loading="eager" />
            </div>
          </div>

          <p className="abt-hero__mission" dangerouslySetInnerHTML={{ __html: t.heroMission }} />

          <div className="abt-stats">
            {t.stats.map((s) => (
              <div className="abt-stats__item" key={s.lbl}>
                <strong>{s.val}</strong>
                <span>{s.lbl}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHO WE ARE ═══ */}
      <section className="abt-who" id="about-who">
        <div className="abt-w">
          <span className="abt-tag">{t.whoTag}</span>
          <div className="abt-who__split">
            <div className="abt-who__text">
              <h2 className="abt-who__title" dangerouslySetInnerHTML={{ __html: t.whoTitleWithSpan || t.whoTitle }} />
              <div className="abt-who__body">
                {t.whoParagraphs.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
            <div className="abt-who__visual">
              <div className="abt-who__img-wrap">
                <img src="/images/about-who.png" alt="Our Professional HVAC Team" />
              </div>
              <div className="abt-who__stats-row">
                <div className="abt-who__stat-box">
                  <strong>10+</strong>
                  <span>Years of Excellence</span>
                </div>
                <div className="abt-who__stat-box">
                  <strong>4.9/5</strong>
                  <span>Avg Customer Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <section className="abt-whyus" id="about-why">
        <div className="abt-w">
          <div className="abt-whyus__head">
            <span className="abt-tag">{t.whyTag}</span>
            <h2 className="abt-whyus__title">{t.whyTitle}</h2>
          </div>
          <div className="abt-whyus__grid">
            {t.whyItems.map((item) => (
              <div className="abt-whyus__item" key={item.id}>
                <span className="abt-whyus__num">{item.id}</span>
                <div>
                  <h3 className="abt-whyus__item-title">{item.title}</h3>
                  <p className="abt-whyus__item-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SOLUTION 1 — Left text, Right visual ═══ */}
      <section className="abt-sol" id="about-expertise">
        <div className="abt-w abt-sol__inner">
          <div className="abt-sol__text">
            <span className="abt-tag">{t.sol1Tag}</span>
            <h2 className="abt-sol__title abt-sol__title--single">{t.sol1Title}</h2>
            <p className="abt-sol__desc">{t.sol1Text}</p>
            <div className="abt-sol__features">
              {t.sol1Features.map((f) => (
                <div className="abt-feature" key={f.label}>
                  <div className="abt-feature__icon">
                    {f.icon === "precision" ? (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    )}
                  </div>
                  <div>
                    <h4 className="abt-feature__label">{f.label}</h4>
                    <p className="abt-feature__desc">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="abt-sol__visual">
            <div className="abt-sol__card">
              <div className="abt-sol__card-head">
                <span className="abt-sol__card-eyebrow">{t.sol1CardEyebrow}</span>
                <h3 className="abt-sol__card-title">{t.sol1CardTitle}</h3>
                <p className="abt-sol__card-sub">{t.sol1CardSub}</p>
              </div>
              <div className="abt-sol__stat-big">
                <strong>{t.sol1Stat1}</strong>
                <span>{t.sol1Stat1Label}</span>
              </div>
              <div className="abt-sol__stat-bar">
                <div className="abt-sol__bar-fill" style={{ width: "98%" }} />
              </div>
              <div className="abt-sol__stat-row">
                <strong>{t.sol1Stat2}</strong>
                <span>{t.sol1Stat2Label}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SOLUTION 2 — Left visual, Right text ═══ */}
      <section className="abt-sol" id="about-promise">
        <div className="abt-w abt-sol__inner">
          <div className="abt-sol__visual">
            <div className="abt-sol__quote-card">
              <div className="abt-sol__brand">
                <img src={site.logoUrl} alt={site.businessName} className="abt-sol__logo" />
              </div>
              <p>{t.sol2Quote}</p>
            </div>
          </div>
          <div className="abt-sol__text">
            <span className="abt-tag">{t.sol2Tag}</span>
            <h2 className="abt-sol__title">{t.sol2Title}</h2>
            <p className="abt-sol__desc">{t.sol2Text}</p>
            <div className="abt-sol__checks">
              {t.sol2Checks.map((c) => (
                <div className="abt-check" key={c.title}>
                  <svg className="abt-check__icon" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <div>
                    <h4>{c.title}</h4>
                    <p>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TEAM ═══ */}
      <section className="abt-team" id="about-team">
        <div className="abt-w">
          <div className="abt-team__head">
            <span className="abt-tag">{t.teamTag}</span>
            <h2 className="abt-team__title">{t.teamTitle}<br />{t.teamTitle2}</h2>
            <p className="abt-team__sub">{t.teamSub}</p>
          </div>
          <div className="abt-team__grid">
            {t.teamMembers.map((m) => (
              <div className="abt-member" key={m.initials}>
                <div className="abt-member__avatar">
                  <span>{m.initials}</span>
                </div>
                <h4 className="abt-member__name">{m.name}</h4>
                <p className="abt-member__role">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="abt-cta" id="about-cta">
        <div className="abt-w abt-cta__inner">
          <h2 className="abt-cta__h2">Ready for a better cooling experience?</h2>
          <p className="abt-cta__sub">For new installations, system upgrades, preventive maintenance, or emergency HVAC support, connect with our team today.</p>
          <div className="abt-cta__actions">
            <Link to="/contact" className="abt-btn--cta-filled">{t.ctaBtn}</Link>
            <a href={site.phoneLink} className="abt-btn--cta-outline">{t.ctaCall} {site.phoneDisplay}</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;
