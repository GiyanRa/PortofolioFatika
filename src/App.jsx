import { useState, useEffect } from "react";
const photo1 = "/main.jpg";
const photo2 = "/about-1.jpg";
const photo3 = "/about-2.jpg";
const photo4 = "/about-3.jpg";

const C_SAGE = "#2A835F";
const C_SAGE_DARK = "#1E6047";
const C_NAVY = "#12281E";
const C_CREAM = "#F8EDE3";
const C_GOLD = "#C49040";
const C_GOLD_LIGHT = "#E8B96A";
const C_WHITE_SOFT = "#F2FAF6";
const C_SAGE_RGB = "42,131,95";
const C_NAVY_RGB = "18,40,30";

const NAV_LINKS = [
  { label: "Profile", id: "profil" },
  { label: "About", id: "tentang" },
  { label: "Education", id: "pendidikan" },
  { label: "Internship", id: "pengalaman" },
  { label: "Work", id: "kerja" },
  { label: "Organizations", id: "organisasi" },
  { label: "Achievements", id: "prestasi" },
  { label: "Certifications", id: "sertifikasi" },
  { label: "Skills", id: "keahlian" },
  { label: "Contact", id: "kontak" },
];

const EXPERIENCES = [
  {
    role: "HSSE - Health Intern",
    company: "PT. Kilang Pertamina Internasional RU V Balikpapan",
    period: "Sept - Oct 2025",
    location: "Balikpapan, East Kalimantan",
    points: [
      "Conducted Job Safety Observation (JSO) to identify hazards, unsafe acts & compliance with OHS procedures among field workers.",
      "Operated 7 types of industrial hygiene measurement instruments (Sound Level Meter, Noise Dosimeter, Lux Meter, WBGT/ISBB Meter, Vibration Meter, Gas Detector, HVDS/Dust Sampler) for workplace environment measurement, including confined space measurement supervised by an Industrial Hygiene Officer (IH Man).",
      "Participated in Toolbox Meetings (TBM) with field supervisors and safety officers to reinforce procedures & conduct pre-work safety evaluations.",
      "Facilitating the \"Healthy Port\" socialization event as the Master of Ceremonies, in collaboration with the Balikpapan City Health Quarantine Office (BKK) & participated in preparations for the annual \"SEBUSE\" Health event alongside the HSSE team.",
      "Conducted direct measurements in confined spaces using a gas detector, performed by a designated officer (IH Man) from the Health Department (HSSE).",
      "Updated the chemical hazard location mapping for the operational area of PT. KPI RU V Balikpapan.",
      "Classified & organized documentation of chemical product usage across operations, supporting departmental reporting compliance.",
    ],
  },
];

const WORK_PROJECTS = [
  {
    role: "Participant",
    org: "AMM Goes to Campus (National OHS Month)",
    period: "Feb 2026",
    points: [
      "Assisting with the documentation of activities during the event.",
    ],
    file: "/AMM.pdf",
  },
  {
    role: "Documentation Contributor",
    org: "Grand Opening of K3 Month - PT Jembayan MuaraBara",
    period: "Feb 2025",
    points: [
      "Helping to facilitate communication between PT Jembayan MuaraBara and FKM UNMUL for the OHS Grand Opening event.",
      "Capturing photos and videos to provide live updates on Instagram throughout the event.",
    ],
    file: "/Jembayan.jpeg",
  },
  {
    role: "Master of Ceremony",
    org: "Mini Bootcamp First AID Balai K3 Samarinda X FKM UNMUL",
    period: "Des 2025",
    points: [
      "Hosting the event as the master of ceremonies.",
      "Assisting in preparing all event requirements ranging from talent selection, decoration, and layout to structuring the event sequence.",
    ],
    file: "/Mini.jpeg",
  },
  {
    role: "Social Media & Creative",
    org: "House of Dondang Caffee",
    period: "Des 2025 - Mei 2026",
    points: [
      "Fully responsible for concepts, creative ideas, and Instagram and TikTok accounts, ranging from graphic design to social media content & developed content plans and generated monthly content reports.",
      "Served as the Samarinda branch supervisor, overseeing nearly all branch operational needs.",
      "Managed external partnerships and collaborations.",
      "Provided weekly reports on the caffee condition.",
      "Successfully increased the Instagram account's follower count from over 2,000+ to more than 5,000+.",
    ],
    file: "/House.jpg",
    video: "/HouseVid.mp4",
  },
];

const SKILL_GROUPS = [
  {
    category: "OHS / HSE",
    color: C_SAGE,
    textColor: C_WHITE_SOFT,
    items: [
      "Safety Induction", "Safety Talk", "Job Safety Observation (JSO)",
      "Toolbox Meeting (TBM)", "Risk Identification", "Hazard Mapping",
      "Gas Detector", "Sound/Noise/Lux/Vibration/WBGT Meter", "HVDS (Dust Sampler)",
    ],
  },
  {
    category: "Technical Tools",
    color: C_NAVY,
    textColor: C_WHITE_SOFT,
    items: [
      "Microsoft Word", "IBM SPSS", "Canva", "CapCut", "Notion",
      "Google Calendar", "Microsoft Excel", "Google Sheets",
    ],
  },
  {
    category: "Soft Skills",
    color: C_GOLD,
    textColor: "#12281E",
    items: [
      "Public Speaking", "Leadership", "Problem Solving",
      "Budget Management", "Cross-functional Communication",
      "Communication", "Time Management", "Organizational Skills",
      "Analytical Skills", "Teamwork", "Adaptability Skills", "Discipline",
    ],
  },
  {
    category: "Languages",
    color: "#F8EDE3",
    textColor: C_NAVY,
    items: [
      "Indonesian - Native",
      "English - Elementary",
      "MU-EPT UNMUL: 573",
    ],
  },
  {
    category: "Interest & Focus",
    color: C_SAGE_DARK,
    textColor: C_WHITE_SOFT,
    items: [
      "EHS Management",
      "Occupational Health",
      "Industrial Hygiene",
      "Root Cause Analysis",
      "Public Health Promotion",
      "Risk Management & Risk Analysis",
      "Risk Based Decision-Making Analysis",
    ],
  },
];

const CERTS = [
  {
    name: "Competency Education & Training: General Occupational Safety and Health Expert",
    issuer: "Nagan Training",
    year: "2025",
    tag: "Competency",
    file: "/Nagan Training.pdf",
  },
  {
    name: "Fundamentals of General Occupational Health and Safety (OHS)",
    issuer: "PT. Indevina Safety Consulting",
    year: "2026",
    tag: "Training",
    file: "/IDSC.pdf",
  },
  {
    name: "Food Safety: GMP, HACCP, ISO 22000, FSSC 22000",
    issuer: "Makin Ahli",
    year: "2026",
    tag: "Training",
  },
  {
    name: "Safety Officer & K3 Awareness",
    issuer: "PT Micasa Edukasi Indonesia",
    year: "2026",
    tag: "Training",
    file: "/Micasa.pdf",
  },
  {
    name: "Microsoft Excel Training",
    issuer: "Training Provider",
    year: "2026",
    tag: "Training",
    file: "/Excel.pdf",
  },
  {
    name: "Safety and Management Training",
    issuer: "PT. Indo Training",
    year: "2025",
    tag: "Training",
  },
  {
    name: "Oil and Gas OHS Supervisor Training",
    issuer: "HECCONS",
    year: "2024",
    tag: "Training",
  },
  {
    name: "Mini Course: Intro to Digital Marketing",
    issuer: "RevoU",
    year: "2023",
    tag: "Mini Course",
    file: "/RevoU.pdf",
  },
];

const EDUCATION = {
  degree: "S1 Public Health (OHS Specialization)",
  school: "Mulawarman University",
  faculty: "Faculty of Public Health",
  period: "Jun 2022 - Jul 2026",
  gpa: "GPA 3.95 / 4.00",
  highlights: [
    "Ex PT. Kilang Pertamina Internasional RU V Balikpapan Intern",
    "Safety Induction Video Talent (Mulawarman University Profile)",
    "Deputy Chairperson of Dewan Perwakilan Mahasiswa (DPM), 2023/2024 term",
    "General Treasurer of Dewan Perwakilan Mahasiswa (DPM), 2022/2023 term",
  ],
  coursework: [
    "Occupational Health & Safety Fundamentals",
    "Ergonomics",
    "Environmental Quality Analysis",
    "Basic Environmental Health",
    "Basic Epidemiology",
    "Health Law & Regulations",
  ],
};

const ACHIEVEMENTS = [
  {
    title: "Best Participant",
    detail: "Group 9 of PBL II FKM UNMUL",
    year: "2025",
    file: "/Pbl.pdf",
  },
  {
    title: "Most Active Member of BPH/BPI",
    detail: "DPM FKM UNMUL",
    year: "2024",
    file: "/Dpm.pdf",
  },
  {
    title: "Top 25 Finalist",
    detail: "The 3rd Indonesian Public Health Olympiad (IPHO)",
    year: "2024",
  },
  {
    title: "KALTIM TUNTAS Scholarship Recipient",
    detail: "East Kalimantan Provincial Government",
    year: "2022",
  },
];

const LEADERSHIP = [
  {
    role: "Vice Chairman General",
    org: "Dewan Perwakilan Mahasiswa (DPM) FKM UNMUL",
    period: "Des 2023 - Des 2024",
    points: [
      "Entrusted with a 3-year career progression within the faculty's largest student legislative body, advancing from intern to Vice Chairman General.",
      "Managed transparent budget planning and financial reporting for the organization across 1 term as Treasurer.",
      "Monitored and enforced regulations across 3 student election periods (PEMIRA 2022, 2024) as Head of the Supervisory Agency, independently handling dispute resolution and violation reporting.",
      "Led Work Meetings and Upgrading programs as Chief Committee/Program Work Coordinator, structuring division jobdesks and ensuring accountability across all members.",
      "Enforced rules throughout the planning and execution of organizational activities, and handled dispute/complaint resolution regarding member performance.",
    ],
    file: "/Dewan.pdf",
  },
  {
    role: "Public & Documentation Division",
    org: "Badan Eksekutif Mahasiswa (BEM) FKM UNMUL",
    period: "Okt 2023",
    points: [
      "Designed stage backdrops and ID cards for 70+ participants of the Public Health Festival 2023.",
      "Conducted live reporting for the entire series of events at the Public Health Festival 2023 Grand Closing.",
      "Organized all files belonging to the Publication and Documentation division from the pre-event phase through to the conclusion of the event.",
      "Mentored and ensured understanding of code of conduct among all incoming students of FKM UNMUL during orientation.",
    ],
    file: "/BEM.pdf",
  },
  {
    role: "Public Relation & HR Development Member",
    org: "Insan Cendekia Preventia (ICP)",
    period: "Jan 2023 - Des 2024",
    points: [
      "Coordinated program communications with internal and external parties via WhatsApp, Email, and Instagram.",
      "Conducting interviews as part of the recruitment process for prospective student activity unit members to explore the students' personal potential.",
    ],
    file: "/Icp.pdf",
  },
];

const STATS = [
  { value: "4", label: "Achievements" },
  { value: "1", label: "Certification" },
  { value: "7", label: "Training" },
];

function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(248,237,227,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? `1px solid rgba(${C_NAVY_RGB},0.12)` : "1px solid transparent",
        boxShadow: scrolled ? `0 2px 24px rgba(${C_NAVY_RGB},0.08)` : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <span className="font-display text-xl tracking-tight hidden md:inline-block">
          <span style={{ color: C_GOLD }}>F</span>
          <span style={{ color: C_NAVY }}>R</span>
        </span>
        <span className="font-display text-xl tracking-tight md:hidden inline-block italic font-bold">
          <span style={{ color: scrolled ? C_GOLD : C_WHITE_SOFT }}>F</span>
          <span style={{ color: scrolled ? C_NAVY : C_WHITE_SOFT }}>R</span>
        </span>
        <div className="hidden lg:flex items-center gap-0.5">
          {NAV_LINKS.slice(0, -1).map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200"
              style={{ color: C_NAVY }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = `rgba(${C_SAGE_RGB},0.15)`;
                e.currentTarget.style.color = C_SAGE;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = C_NAVY;
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontak"
            className="ml-2 px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 shadow-sm"
            style={{
              background: scrolled ? C_SAGE : C_CREAM,
              color: scrolled ? C_WHITE_SOFT : C_SAGE
            }}
          >
            Contact
          </a>
        </div>
        <button className="lg:hidden p-2 rounded-lg" style={{ color: scrolled ? C_NAVY : C_WHITE_SOFT }} onClick={() => setOpen(!open)}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="lg:hidden px-6 pb-4 flex flex-col gap-1 border-t"
          style={{ background: C_CREAM, borderColor: `rgba(${C_NAVY_RGB},0.1)` }}>
          {NAV_LINKS.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)}
              className="px-4 py-2.5 text-sm font-medium rounded-lg"
              style={{ color: C_NAVY }}>{l.label}</a>
          ))}
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section id="profil" className="relative min-h-screen flex flex-col md:flex-row md:items-center overflow-hidden md:bg-[#F8EDE3] bg-[#0A0708]">
      <div className="absolute right-0 top-0 h-full w-1/2 rounded-l-[80px] hidden md:block" style={{ background: C_SAGE }} />
      <div className="absolute right-[18%] top-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border-[32px] hidden md:block"
        style={{ borderColor: "rgba(242,250,246,0.18)" }} />

      {/* MOBILE HERO LAYOUT (Reference Image Style + Stats) */}
      <div className="flex md:hidden flex-col w-full min-h-screen z-10">
        <div className="relative w-full flex-grow flex flex-col">
          <div className="absolute inset-0">
            <img src={photo1} alt="Fatika Rahmanisa" className="w-full h-full object-cover opacity-80" style={{ objectPosition: "center 20%" }} />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0708]/60 to-[#0A0708]"></div>
          </div>
          <div className="relative mt-auto flex flex-col justify-end px-6 pt-[60vh] pb-12">
            <p className="text-[9px] font-bold tracking-[2px] mb-2" style={{ color: C_GOLD, fontFamily: "monospace" }}>
              Bachelor of Public Health
            </p>
            <h1 className="font-display text-[3.25rem] leading-[1.05] mb-4 text-[#F2FAF6]" style={{ textShadow: `0.5px 1px 0px ${C_GOLD}, -0.5px -0.5px 0 ${C_GOLD_LIGHT}` }}>
              Fatika<br />Rahmanisa
            </h1>
            <p className="text-sm font-medium mb-6 ml-11" style={{ color: "rgba(255, 255, 255, 0.65)" }}>Mulawarman University · OHS Specialization</p>
            <p className="italic text-sm mb-6" style={{ color: C_GOLD, fontFamily: 'Georgia, serif' }}>
              Public Health graduate specializing in Occupational Health & Safety (K3), with field experience in hazard identification, industrial hygiene measurement, and OHS compliance monitoring.
            </p>
            <p className="text-xs text-gray-500 font-medium">
              Samarinda, Indonesia
            </p>
          </div>
        </div>

        <div className="relative w-full px-6 py-8" style={{ background: C_SAGE }}>
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap shadow-lg z-20"
            style={{ background: C_NAVY, color: C_GOLD_LIGHT }}>
            Ex Intern PT KPI RU V BALIKPAPAN
          </div>

          <div className="flex flex-wrap justify-center gap-3 w-full mt-4 relative z-10">
            {STATS.map((s) => (
              <div key={s.label} className="rounded-xl px-4 py-2.5 text-center min-w-[100px]"
                style={{ background: "rgba(242,250,246,0.18)", border: "1px solid rgba(242,250,246,0.25)", backdropFilter: "blur(8px)" }}>
                <div className="font-display text-2xl" style={{ color: C_GOLD_LIGHT }}>{s.value}</div>
                <div className="text-[10px] font-semibold leading-tight mt-1" style={{ color: C_WHITE_SOFT }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DESKTOP HERO LAYOUT */}
      <div className="hidden md:grid relative max-w-6xl mx-auto px-6 pt-24 pb-16 md:grid-cols-2 gap-12 items-center w-full">
        {/* Left: text on cream */}
        <div>
          <h1 className="font-display leading-[1.1] mb-4" style={{ fontSize: "clamp(3rem,6vw,4.5rem)", color: C_NAVY }}>
            Fatika<br />
            <span style={{ color: C_GOLD }}>Rahmanisa</span>
          </h1>

          <div className="flex items-center gap-3 mb-2">
            <div className="h-px w-8" style={{ background: C_GOLD }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: C_GOLD }}>
              Bachelor of Public Health
            </span>
          </div>
          <p className="text-sm font-medium mb-6 ml-11" style={{ color: `rgba(${C_NAVY_RGB},0.65)` }}>
            Mulawarman University · OHS Specialization
          </p>

          <p className="text-base leading-relaxed mb-8 max-w-md" style={{ color: `rgba(${C_NAVY_RGB},0.82)` }}>
            Public Health graduate specializing in Occupational Health &amp; Safety (K3),
            with field experience in hazard identification, industrial hygiene measurement,
            and OHS compliance monitoring.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <a href="#kontak"
              className="px-7 py-3 font-semibold rounded-full text-sm transition-all duration-200"
              style={{ background: C_SAGE, color: C_WHITE_SOFT, boxShadow: `0 8px 24px rgba(${C_SAGE_RGB},0.35)` }}>
              Contact Me
            </a>
            <a href="#pengalaman"
              className="px-7 py-3 font-semibold rounded-full text-sm border-2 transition-all duration-200"
              style={{ borderColor: C_NAVY, color: C_NAVY, background: "transparent" }}>
              View Experience
            </a>
          </div>

          <div className="flex flex-wrap gap-5">
            {["Samarinda, Indonesia", "fatikarhmnsa@gmail.com"].map((text) => (
              <span key={text} className="text-sm font-medium" style={{ color: `rgba(${C_NAVY_RGB},0.7)` }}>
                {text}
              </span>
            ))}
          </div>
        </div>

        {/* Right: portrait photo + stats on emerald panel */}
        <div className="flex flex-col items-center gap-6 relative">
          <div className="relative">
            {/* Non-circular portrait frame — larger to show face clearly */}
            <div className="overflow-hidden rounded-3xl"
              style={{
                width: "260px",
                height: "340px",
                boxShadow: `0 0 0 4px ${C_GOLD}, 0 20px 60px rgba(${C_NAVY_RGB},0.35)`,
              }}>
              <img
                src={photo1}
                alt="Fatika Rahmanisa"
                className="w-full h-full object-cover"
                style={{ objectPosition: "60% 15%", transform: "scale(1.15)", transformOrigin: "60% 15%" }}
              />
            </div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap shadow-lg"
              style={{ background: C_NAVY, color: C_GOLD_LIGHT }}>
              Ex Intern PT KPI RU V BALIKPAPAN
            </div>
          </div>

          {/* Stats — Flex */}
          <div className="flex flex-wrap justify-center gap-3 w-full mt-4">
            {STATS.map((s) => (
              <div key={s.label} className="rounded-2xl px-5 py-3 text-center min-w-[110px]"
                style={{ background: "rgba(242,250,246,0.18)", border: "1px solid rgba(242,250,246,0.25)", backdropFilter: "blur(8px)" }}>
                <div className="font-display text-2xl" style={{ color: C_GOLD_LIGHT }}>{s.value}</div>
                <div className="text-[10px] font-semibold leading-tight mt-0.5" style={{ color: C_WHITE_SOFT }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 30 Q360 60 720 30 Q1080 0 1440 30 V60 H0Z" fill={C_SAGE} />
        </svg>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="tentang" className="py-24 relative" style={{ background: C_SAGE }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Ubah items-start menjadi items-center di bawah ini */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left: center-large, sides-small photo layout */}
          <div className="flex gap-3 items-center justify-center">
            {/* Left — small */}
            <div
              className="flex-none rounded-2xl overflow-hidden w-24 md:w-[120px] h-[160px] md:h-[230px]"
              style={{ boxShadow: `0 12px 36px rgba(${C_NAVY_RGB},0.28)` }}
            >
              <img
                src={photo3}
                alt="Fatika at PT KPI"
                className="w-full h-full object-cover"
                style={{ objectPosition: "center top" }}
              />
            </div>

            {/* Center — large & prominent */}
            <div
              className="flex-none rounded-3xl overflow-hidden w-36 md:w-[190px] h-[240px] md:h-[360px]"
              style={{ boxShadow: `0 20px 56px rgba(${C_NAVY_RGB},0.4), 0 0 0 3px ${C_GOLD}` }}
            >
              <img
                src={photo2}
                alt="Fatika at PT KPI"
                className="w-full h-full object-cover"
                style={{ objectPosition: "center top" }}
              />
            </div>

            {/* Right — small */}
            <div
              className="flex-none rounded-2xl overflow-hidden w-24 md:w-[120px] h-[160px] md:h-[230px]"
              style={{ boxShadow: `0 12px 36px rgba(${C_NAVY_RGB},0.28)` }}
            >
              <img
                src={photo4}
                alt="Fatika at PT KPI"
                className="w-full h-full object-cover"
                style={{ objectPosition: "center top" }}
              />
            </div>
          </div>

          {/* Right: text */}
          <div className="md:pt-6">
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "rgba(242,250,246,0.7)" }}>Profile</span>
            <h2 className="font-display text-4xl mt-1 mb-2" style={{ color: C_WHITE_SOFT }}>
              Hi, I'm <span style={{ color: C_GOLD_LIGHT }}>Fatika</span>
            </h2>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-0.5 w-10" style={{ background: C_GOLD_LIGHT }} />
              <div className="h-0.5 w-3" style={{ background: "rgba(232,185,106,0.4)" }} />
            </div>

            <div className="flex flex-col gap-4 text-sm leading-relaxed" style={{ color: "rgba(242,250,246,0.88)" }}>
              <p>
                Public Health graduate specializing in{" "}
                <span className="font-semibold" style={{ color: C_WHITE_SOFT }}>Occupational Health and Safety (K3)</span>,
                with hands-on experience in hazard identification, risk assessment, and compliance monitoring of OHS
                procedures through field activities such as Job Safety Observation (JSO), Toolbox Meetings (TBM),
                industrial hygiene measurement, and chemical hazard location mapping.
              </p>
              <p>
                Gained direct field experience at{" "}
                <span className="font-semibold" style={{ color: C_GOLD_LIGHT }}>PT. Kilang Pertamina Internasional RU V Balikpapan</span>{" "}
                and trained as a{" "}
                <span className="font-semibold" style={{ color: C_WHITE_SOFT }}>General Occupational Safety and Health Expert</span>{" "}
                by Nagan Training.
              </p>
              <p>
                Skilled in translating field observations into structured, risk-based OHS reports and recommendations.
                Seeking to contribute to occupational health and safety functions in the workplace through direct work experience.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-7">
              {["Public Health Graduate", "OHS/K3 Specialization", "Oil & Gas Industry Experience", "Chemical Hazard Mapping", "Risk-Based OHS Reporting", "JSO & TBM Facilitation"].map((tag) => (
                <span key={tag} className="px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{ background: "rgba(242,250,246,0.15)", color: C_WHITE_SOFT, border: "1.5px solid rgba(242,250,246,0.25)" }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 30 Q360 0 720 30 Q1080 60 1440 30 V60 H0Z" fill={C_CREAM} />
        </svg>
      </div>
    </section>
  );
}
function Education() {
  return (
    <section id="pendidikan" className="py-24 relative" style={{ background: C_CREAM }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: C_SAGE }}>Background</span>
          <h2 className="font-display text-4xl mt-1" style={{ color: C_NAVY }}>Education</h2>
          <div className="mt-3 flex items-center gap-2">
            <div className="h-0.5 w-10" style={{ background: C_GOLD }} />
            <div className="h-0.5 w-3" style={{ background: "rgba(196,144,64,0.4)" }} />
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden"
          style={{ background: C_SAGE, boxShadow: `0 8px 40px rgba(${C_NAVY_RGB},0.18)` }}>
          <div className="grid md:grid-cols-[1fr_260px]">
            <div className="p-8">
              <div className="flex items-center flex-wrap gap-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{ background: C_NAVY, color: C_GOLD_LIGHT }}>{EDUCATION.period}</span>
                <span className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ background: C_CREAM, color: C_NAVY }}>{EDUCATION.gpa}</span>
                <span className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ background: "rgba(196,144,64,0.25)", color: C_GOLD_LIGHT }}>{EDUCATION.note}</span>
              </div>
              <h3 className="font-display text-2xl mb-1" style={{ color: C_WHITE_SOFT }}>{EDUCATION.degree}</h3>
              <p className="text-sm font-semibold mb-1" style={{ color: C_GOLD_LIGHT }}>{EDUCATION.school}</p>
              <p className="text-xs mb-6" style={{ color: "rgba(242,250,246,0.65)" }}>{EDUCATION.faculty}</p>

              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "rgba(242,250,246,0.6)" }}>
                Activities & Highlights
              </p>
              <ul className="flex flex-col gap-2">
                {EDUCATION.highlights.map((h, i) => (
                  <li key={i} className="flex gap-3 text-sm" style={{ color: "rgba(242,250,246,0.88)" }}>
                    <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5"
                      style={{ background: "rgba(242,250,246,0.18)", color: C_WHITE_SOFT }}>{i + 1}</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 flex flex-col justify-between" style={{ background: C_SAGE_DARK }}>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "rgba(242,250,246,0.6)" }}>
                  Relevant Coursework
                </p>
                <div className="flex flex-col gap-2">
                  {EDUCATION.coursework.map((c) => (
                    <span key={c} className="text-xs px-3 py-1.5 rounded-lg font-medium"
                      style={{ background: "rgba(242,250,246,0.1)", color: C_WHITE_SOFT }}>
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 30 Q360 60 720 30 Q1080 0 1440 30 V60 H0Z" fill={C_SAGE} />
        </svg>
      </div>
    </section>
  );
}

function Experience() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section id="pengalaman" className="py-24 relative" style={{ background: C_SAGE }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-14">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "rgba(242,250,246,0.7)" }}>Career</span>
            <h2 className="font-display text-4xl mt-1" style={{ color: C_WHITE_SOFT }}>Internship Experience</h2>
            <div className="mt-3 flex items-center gap-2">
              <div className="h-0.5 w-10" style={{ background: C_GOLD_LIGHT }} />
              <div className="h-0.5 w-3" style={{ background: "rgba(232,185,106,0.4)" }} />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsVideoOpen(true)}
              className="text-sm font-semibold px-4 py-2 rounded-full transition-all hover:scale-105 flex items-center gap-2 shadow-lg"
              style={{ background: C_GOLD, color: C_WHITE_SOFT }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 5v10l7-5-7-5z" />
              </svg>
              Watch Video
            </button>
            <span className="text-sm font-semibold px-4 py-2 rounded-full"
              style={{ background: C_CREAM, color: C_NAVY }}>Sept - Oct 2025</span>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {EXPERIENCES.map((exp, i) => (
            <div key={i} className="rounded-3xl overflow-hidden grid md:grid-cols-[220px_1fr]"
              style={{ background: C_CREAM, boxShadow: `0 4px 32px rgba(${C_NAVY_RGB},0.18)` }}>
              <div className="p-6 flex flex-col justify-between" style={{ background: C_NAVY }}>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: C_GOLD_LIGHT, opacity: 0.8 }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="font-display text-lg leading-snug" style={{ color: C_WHITE_SOFT }}>{exp.role}</p>
                  <p className="text-sm mt-1 font-semibold" style={{ color: C_GOLD_LIGHT }}>{exp.company}</p>
                </div>
                <div className="mt-6">
                  <span className="inline-block text-xs px-3 py-1 rounded-full font-medium"
                    style={{ background: `rgba(${C_SAGE_RGB},0.25)`, color: C_WHITE_SOFT }}>
                    {exp.period}
                  </span>
                  <p className="text-xs mt-2" style={{ color: "rgba(242,250,246,0.6)" }}>{exp.location}</p>
                </div>
              </div>
              <div className="p-6">
                <ul className="flex flex-col gap-3">
                  {exp.points.map((p, j) => (
                    <li key={j} className="flex gap-3 text-sm leading-relaxed" style={{ color: `rgba(${C_NAVY_RGB},0.88)` }}>
                      <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold"
                        style={{ background: `rgba(${C_SAGE_RGB},0.18)`, color: C_SAGE }}>{j + 1}</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 30 Q360 0 720 30 Q1080 60 1440 30 V60 H0Z" fill={C_CREAM} />
        </svg>
      </div>

      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setIsVideoOpen(false)}>
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <div className="w-full h-full flex items-center justify-center bg-black">
              <video
                src="/Pertamina.MOV"
                className="w-full h-full outline-none"
                controls
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function WorkProjects() {
  const [selectedMedia, setSelectedMedia] = useState(null);

  return (
    <section id="kerja" className="py-24 relative" style={{ background: C_CREAM }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: C_SAGE }}>Experience</span>
          <h2 className="font-display text-4xl mt-1" style={{ color: C_NAVY }}>Work & Project Experience</h2>
          <div className="mt-3 flex items-center gap-2">
            <div className="h-0.5 w-10" style={{ background: C_GOLD }} />
            <div className="h-0.5 w-3" style={{ background: "rgba(196,144,64,0.4)" }} />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {WORK_PROJECTS.map((item, i) => (
            <div key={i} className="rounded-3xl overflow-hidden grid md:grid-cols-[200px_1fr]"
              style={{ background: "#fff", boxShadow: `0 4px 24px rgba(${C_NAVY_RGB},0.1)`, border: `1px solid rgba(${C_NAVY_RGB},0.06)` }}>
              <div className="p-6 flex flex-col justify-between"
                style={{ background: i % 2 === 0 ? C_SAGE : C_NAVY }}>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest mb-2"
                    style={{ color: "rgba(232,185,106,0.8)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="font-display text-base leading-snug mb-1" style={{ color: C_WHITE_SOFT }}>
                    {item.role}
                  </p>
                  <p className="text-xs font-semibold leading-relaxed" style={{ color: C_GOLD_LIGHT }}>
                    {item.org}
                  </p>
                </div>
                <div className="mt-6">
                  <span className="inline-block text-xs px-3 py-1.5 rounded-full font-medium"
                    style={{ background: "rgba(242,250,246,0.18)", color: C_WHITE_SOFT }}>
                    {item.period}
                  </span>
                  {(item.file || item.video) && (
                    <button
                      onClick={() => setSelectedMedia(item)}
                      className="mt-4 text-xs font-semibold px-3 py-1.5 rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-1.5 w-max shadow-sm"
                      style={{ background: C_GOLD, color: C_WHITE_SOFT }}
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                      View Gallery
                    </button>
                  )}
                </div>
              </div>
              <div className="p-6">
                <ul className="flex flex-col gap-2.5">
                  {item.points.map((p, j) => (
                    <li key={j} className="flex gap-3 text-sm leading-relaxed"
                      style={{ color: `rgba(${C_NAVY_RGB},0.85)` }}>
                      <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold"
                        style={{ background: `rgba(${C_SAGE_RGB},0.15)`, color: C_SAGE }}>
                        {j + 1}
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 30 Q360 60 720 30 Q1080 0 1440 30 V60 H0Z" fill={C_SAGE} />
        </svg>
      </div>

      {selectedMedia && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm" onClick={() => setSelectedMedia(null)}>
          <div className="relative w-full max-w-4xl max-h-[85vh] bg-transparent rounded-2xl flex flex-col items-center justify-center" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute -top-12 right-0 md:top-4 md:-right-12 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <div className="w-full h-full overflow-y-auto flex flex-col items-center justify-start gap-8 py-4" style={{ WebkitOverflowScrolling: 'touch' }}>
              {selectedMedia.file && (
                selectedMedia.file.toLowerCase().endsWith('.pdf') ? (
                  <iframe
                    src={selectedMedia.file}
                    title={selectedMedia.role}
                    className="w-full h-[85vh] rounded-xl shadow-2xl shrink-0 border-0"
                  />
                ) : (
                  <img
                    src={selectedMedia.file}
                    alt={selectedMedia.role}
                    className="max-w-full h-auto max-h-[85vh] object-contain rounded-xl shadow-2xl shrink-0"
                  />
                )
              )}
              {selectedMedia.video && (
                <video
                  src={selectedMedia.video}
                  className="max-w-full h-auto max-h-[85vh] rounded-xl shadow-2xl outline-none shrink-0"
                  controls
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function Leadership() {
  const [selectedLeadership, setSelectedLeadership] = useState(null);

  return (
    <section id="organisasi" className="py-24 relative" style={{ background: C_SAGE }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "rgba(242,250,246,0.7)" }}>
            Leadership
          </span>
          <h2 className="font-display text-4xl mt-1" style={{ color: C_WHITE_SOFT }}>
            Leadership & Organizational Experience
          </h2>
          <div className="mt-3 flex items-center gap-2">
            <div className="h-0.5 w-10" style={{ background: C_GOLD_LIGHT }} />
            <div className="h-0.5 w-3" style={{ background: "rgba(232,185,106,0.4)" }} />
          </div>
        </div>

        <div className="flex flex-col gap-7">
          {LEADERSHIP.map((item, i) => (
            <div key={i} className="rounded-3xl overflow-hidden grid md:grid-cols-[200px_1fr]"
              style={{ background: C_CREAM, boxShadow: `0 4px 32px rgba(${C_NAVY_RGB},0.18)` }}>
              <div className="p-6 flex flex-col justify-between" style={{ background: C_NAVY }}>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest mb-3"
                    style={{ color: "rgba(232,185,106,0.7)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="font-display text-base leading-snug mb-2" style={{ color: C_WHITE_SOFT }}>
                    {item.role}
                  </p>
                  <p className="text-xs font-semibold leading-relaxed" style={{ color: C_GOLD_LIGHT }}>
                    {item.org}
                  </p>
                </div>
                <div className="mt-6">
                  <span className="inline-block text-xs px-3 py-1.5 rounded-full font-medium"
                    style={{ background: `rgba(${C_SAGE_RGB},0.25)`, color: C_WHITE_SOFT }}>
                    {item.period}
                  </span>
                  {item.file && (
                    <button
                      onClick={() => setSelectedLeadership(item)}
                      className="mt-4 text-xs font-semibold px-3 py-1.5 rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-1.5 w-max shadow-sm"
                      style={{ background: C_GOLD, color: C_WHITE_SOFT }}
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                      View
                    </button>
                  )}
                </div>
              </div>
              <div className="p-6">
                <ul className="flex flex-col gap-2.5">
                  {item.points.map((p, j) => (
                    <li key={j} className="flex gap-3 text-sm leading-relaxed"
                      style={{ color: `rgba(${C_NAVY_RGB},0.88)` }}>
                      <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold"
                        style={{ background: `rgba(${C_SAGE_RGB},0.15)`, color: C_SAGE }}>
                        {j + 1}
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 30 Q360 0 720 30 Q1080 60 1440 30 V60 H0Z" fill={C_CREAM} />
        </svg>
      </div>

      {selectedLeadership && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedLeadership(null)}>
          <div className="relative w-full max-w-4xl h-[85vh] bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setSelectedLeadership(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <div className="w-full h-full overflow-y-auto bg-white rounded-2xl" style={{ WebkitOverflowScrolling: 'touch' }}>
              <iframe
                src={selectedLeadership.file}
                className="w-full h-[150vh] md:h-full block border-0"
                title={selectedLeadership.role}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function Achievements() {
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  return (
    <section id="prestasi" className="py-24 relative" style={{ background: C_CREAM }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: C_SAGE }}>Awards</span>
          <h2 className="font-display text-4xl mt-1" style={{ color: C_NAVY }}>Achievements</h2>
          <div className="mt-3 flex items-center gap-2">
            <div className="h-0.5 w-10" style={{ background: C_GOLD }} />
            <div className="h-0.5 w-3" style={{ background: "rgba(196,144,64,0.4)" }} />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {ACHIEVEMENTS.map((a, i) => (
            <div key={i}
              className="rounded-2xl p-6 flex items-start gap-5 hover:-translate-y-0.5 transition-all duration-200"
              style={{
                background: i % 2 === 0 ? "#fff" : C_NAVY,
                boxShadow: `0 4px 20px rgba(${C_NAVY_RGB},0.1)`,
                border: i % 2 === 0 ? `1.5px solid rgba(${C_NAVY_RGB},0.07)` : "none",
              }}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 font-display text-xl"
                style={{
                  background: i % 2 === 0 ? `rgba(${C_SAGE_RGB},0.12)` : `rgba(${C_SAGE_RGB},0.3)`,
                  color: i % 2 === 0 ? C_SAGE : C_WHITE_SOFT,
                }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                  <h3 className="font-semibold text-base"
                    style={{ color: i % 2 === 0 ? C_NAVY : C_WHITE_SOFT }}>
                    {a.title}
                  </h3>
                  <span className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{
                      background: i % 2 === 0 ? "rgba(196,144,64,0.12)" : "rgba(232,185,106,0.18)",
                      color: i % 2 === 0 ? C_GOLD : C_GOLD_LIGHT,
                    }}>
                    {a.year}
                  </span>
                </div>
                <p className="text-sm" style={{ color: i % 2 === 0 ? `rgba(${C_NAVY_RGB},0.65)` : "rgba(242,250,246,0.72)" }}>
                  {a.detail}
                </p>
                {a.file && (
                  <button
                    onClick={() => setSelectedAchievement(a)}
                    className="mt-3 text-xs font-semibold px-3 py-1.5 rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-1.5 w-max shadow-sm"
                    style={{ background: i % 2 === 0 ? C_NAVY : C_CREAM, color: i % 2 === 0 ? C_WHITE_SOFT : C_NAVY }}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    View
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 30 Q360 60 720 30 Q1080 0 1440 30 V60 H0Z" fill={C_SAGE} />
        </svg>
      </div>

      {selectedAchievement && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedAchievement(null)}>
          <div className="relative w-full max-w-4xl h-[85vh] bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setSelectedAchievement(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <div className="w-full h-full overflow-y-auto bg-white rounded-2xl" style={{ WebkitOverflowScrolling: 'touch' }}>
              <iframe
                src={selectedAchievement.file}
                className="w-full h-[150vh] md:h-full block border-0"
                title={selectedAchievement.title}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="sertifikasi" className="py-24 relative" style={{ background: C_SAGE }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "rgba(242,250,246,0.7)" }}>Licenses & Certificates</span>
          <h2 className="font-display text-4xl mt-1" style={{ color: C_WHITE_SOFT }}>Certifications & Training</h2>
          <div className="flex justify-center mt-3 gap-2">
            <div className="h-0.5 w-10" style={{ background: C_GOLD_LIGHT }} />
            <div className="h-0.5 w-3" style={{ background: "rgba(232,185,106,0.4)" }} />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {CERTS.map((c, i) => (
            <div key={c.name}
              className="group rounded-3xl p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-default"
              style={{
                background: i % 2 === 0 ? C_CREAM : C_NAVY,
                boxShadow: `0 4px 20px rgba(${C_NAVY_RGB},0.2)`,
              }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold"
                style={{ background: i % 2 === 0 ? `rgba(${C_SAGE_RGB},0.15)` : `rgba(${C_SAGE_RGB},0.3)`, color: i % 2 === 0 ? C_SAGE : C_WHITE_SOFT }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-base leading-snug mb-1"
                  style={{ color: i % 2 === 0 ? C_NAVY : C_WHITE_SOFT }}>
                  {c.name}
                </h3>
                <p className="text-sm" style={{ color: i % 2 === 0 ? `rgba(${C_NAVY_RGB},0.68)` : "rgba(242,250,246,0.72)" }}>
                  {c.issuer}
                </p>
              </div>
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{
                    background: i % 2 === 0 ? `rgba(${C_SAGE_RGB},0.12)` : `rgba(${C_SAGE_RGB},0.35)`,
                    color: i % 2 === 0 ? C_SAGE : C_WHITE_SOFT,
                  }}>
                  {c.year}
                </span>
                <div className="flex items-center gap-2">
                  {c.file && (
                    <button
                      onClick={() => setSelectedCert(c)}
                      className="text-xs font-semibold px-3 py-1 rounded-full hover:scale-105 transition-transform flex items-center gap-1 shadow-sm"
                      style={{
                        background: i % 2 === 0 ? C_NAVY : C_CREAM,
                        color: i % 2 === 0 ? C_WHITE_SOFT : C_NAVY,
                      }}
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                      View
                    </button>
                  )}
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{
                      background: i % 2 === 0 ? "rgba(196,144,64,0.12)" : "rgba(232,185,106,0.18)",
                      color: i % 2 === 0 ? C_GOLD : C_GOLD_LIGHT,
                    }}>
                    {c.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 30 Q360 0 720 30 Q1080 60 1440 30 V60 H0Z" fill={C_CREAM} />
        </svg>
      </div>

      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedCert(null)}>
          <div className="relative w-full max-w-4xl h-[85vh] bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <div className="w-full h-full overflow-y-auto bg-white rounded-2xl" style={{ WebkitOverflowScrolling: 'touch' }}>
              {selectedCert.file ? (
                <iframe
                  src={selectedCert.file}
                  className="w-full h-[150vh] md:h-full block border-0"
                  title={selectedCert.name}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-black/50 p-6 text-center bg-black rounded-2xl">
                  <svg className="w-16 h-16 mb-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                  <p className="text-xl font-semibold text-white/80 mb-2">{selectedCert.name}</p>
                  <p className="text-sm font-medium text-white/50 mb-4">{selectedCert.issuer}</p>
                  <p className="text-lg text-white/50">Foto sertifikat akan ditambahkan nanti</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function Skills() {
  return (
    <section id="keahlian" className="py-24 relative" style={{ background: C_CREAM }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: C_SAGE }}>Competencies</span>
          <h2 className="font-display text-4xl mt-1" style={{ color: C_NAVY }}>Skills</h2>
          <div className="flex items-center gap-2 mt-3">
            <div className="h-0.5 w-10" style={{ background: C_GOLD }} />
            <div className="h-0.5 w-3" style={{ background: "rgba(196,144,64,0.4)" }} />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          {SKILL_GROUPS.map((group) => (
            <div key={group.category} className="rounded-2xl overflow-hidden grid md:grid-cols-[200px_1fr]"
              style={{ boxShadow: `0 2px 16px rgba(${C_NAVY_RGB},0.08)` }}>
              <div className="flex items-center gap-3 px-6 py-5"
                style={{ background: group.color }}>
                <span className="font-display text-base font-normal leading-tight"
                  style={{ color: group.textColor }}>
                  {group.category}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2 px-6 py-5"
                style={{ background: "#fff", border: `1px solid rgba(${C_NAVY_RGB},0.06)` }}>
                {group.items.map((item) => (
                  <span key={item}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold cursor-default"
                    style={{ background: `rgba(${C_SAGE_RGB},0.1)`, color: C_NAVY, border: `1px solid rgba(${C_SAGE_RGB},0.2)` }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 30 Q360 60 720 30 Q1080 0 1440 30 V60 H0Z" fill={C_NAVY} />
        </svg>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="kontak" className="py-24 relative" style={{ background: C_NAVY }}>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: C_SAGE }} />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: C_CREAM }} />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: `rgba(${C_SAGE_RGB},0.8)` }}>Let's Connect</span>
          <h2 className="font-display text-4xl mt-1 mb-3" style={{ color: C_WHITE_SOFT }}>Ready to Collaborate</h2>
          <div className="flex justify-center gap-2 mb-5">
            <div className="h-0.5 w-10" style={{ background: C_GOLD }} />
            <div className="h-0.5 w-3" style={{ background: "rgba(196,144,64,0.4)" }} />
          </div>
          <p className="max-w-lg mx-auto text-sm leading-relaxed" style={{ color: "rgba(242,250,246,0.78)" }}>
            Open to full-time opportunities, internships, or simply connecting with like-minded professionals in K3/HSE.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="flex flex-col gap-4">
            {[
              { label: "Email", value: "fatikarhmnsa@gmail.com", href: "https://mail.google.com/mail/?view=cm&fs=1&to=fatikarhmnsa@gmail.com" },
              { label: "Location", value: "Samarinda, East Kalimantan" },
              { label: "LinkedIn", value: "Fatika Rahmanisa", href: "https://www.linkedin.com/in/fatika-rahmanisa-a1a30a431" },
              { label: "Instagram", value: "@_____fatikaa", href: "https://www.instagram.com/_____fatikaa/" },
              { label: "Documents", value: "Google Drive", href: "https://drive.google.com/drive/folders/1f8OIaqx-LnEibIEPJeMr3xV60qiMd4jB?usp=sharing" },
            ].map((item) => {
              const content = (
                <>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold flex-shrink-0"
                    style={{ background: `rgba(${C_SAGE_RGB},0.3)`, color: C_WHITE_SOFT }}>
                    {item.label.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: `rgba(${C_SAGE_RGB},0.85)` }}>{item.label}</p>
                    <p className="text-sm font-medium mt-0.5" style={{ color: C_WHITE_SOFT }}>{item.value}</p>
                  </div>
                </>
              );

              return item.href ? (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{ background: `rgba(${C_SAGE_RGB},0.12)`, border: `1px solid rgba(${C_SAGE_RGB},0.25)` }}>
                  {content}
                </a>
              ) : (
                <div key={item.label} className="flex items-center gap-4 p-5 rounded-2xl"
                  style={{ background: `rgba(${C_SAGE_RGB},0.12)`, border: `1px solid rgba(${C_SAGE_RGB},0.25)` }}>
                  {content}
                </div>
              );
            })}

            <blockquote className="mt-2 p-5 rounded-2xl italic font-display text-base"
              style={{ background: `rgba(${C_SAGE_RGB},0.1)`, borderLeft: `3px solid ${C_GOLD}`, color: C_GOLD_LIGHT }}>
              "Safety is not a choice, but a commitment to be upheld every day."
            </blockquote>
          </div>

          {sent ? (
            <div className="rounded-3xl p-12 text-center"
              style={{ background: `rgba(${C_SAGE_RGB},0.12)`, border: `1px solid rgba(${C_SAGE_RGB},0.25)` }}>
              <h3 className="font-display text-2xl mb-2" style={{ color: C_WHITE_SOFT }}>Message Sent!</h3>
              <p style={{ color: "rgba(242,250,246,0.78)" }}>Thank you. I will reply as soon as possible.</p>
            </div>
          ) : (
            <form className="flex flex-col gap-4 rounded-3xl p-8"
              style={{ background: C_CREAM }}
              onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                formData.append("access_key", "d093ae33-d772-4d2e-8e83-b4cf4d55ad02");
                
                try {
                  const res = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    body: formData
                  });
                  if (res.ok) {
                    setSent(true);
                  } else {
                    alert("Failed to send message. Please try again later.");
                  }
                } catch (err) {
                  alert("An error occurred while sending your message.");
                }
              }}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Name", placeholder: "Your Name", required: true },
                  { label: "Company", placeholder: "Company Name", required: false },
                ].map((f) => (
                  <div key={f.label}>
                    <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: C_NAVY }}>{f.label}</label>
                    <input type="text" name={f.label.toLowerCase()} required={f.required} placeholder={f.placeholder}
                      className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none"
                      style={{ background: `rgba(${C_SAGE_RGB},0.12)`, border: `1.5px solid rgba(${C_SAGE_RGB},0.2)`, color: C_NAVY }}
                      onFocus={(e) => { e.target.style.border = `1.5px solid ${C_SAGE}`; }}
                      onBlur={(e) => { e.target.style.border = `1.5px solid rgba(${C_SAGE_RGB},0.2)`; }} />
                  </div>
                ))}
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: C_NAVY }}>Email</label>
                <input type="email" name="email" required placeholder="email@company.com"
                  className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none"
                  style={{ background: `rgba(${C_SAGE_RGB},0.12)`, border: `1.5px solid rgba(${C_SAGE_RGB},0.2)`, color: C_NAVY }}
                  onFocus={(e) => { e.target.style.border = `1.5px solid ${C_SAGE}`; }}
                  onBlur={(e) => { e.target.style.border = `1.5px solid rgba(${C_SAGE_RGB},0.2)`; }} />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: C_NAVY }}>Message</label>
                <textarea name="message" required rows={4} placeholder="Tell me about your needs..."
                  className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none resize-none"
                  style={{ background: `rgba(${C_SAGE_RGB},0.12)`, border: `1.5px solid rgba(${C_SAGE_RGB},0.2)`, color: C_NAVY }}
                  onFocus={(e) => { e.target.style.border = `1.5px solid ${C_SAGE}`; }}
                  onBlur={(e) => { e.target.style.border = `1.5px solid rgba(${C_SAGE_RGB},0.2)`; }} />
              </div>
              <button type="submit"
                className="w-full py-3.5 font-bold rounded-xl text-sm transition-all duration-200 hover:opacity-90"
                style={{ background: C_SAGE, color: C_WHITE_SOFT }}>
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: C_NAVY, borderTop: `1px solid rgba(${C_SAGE_RGB},0.18)` }}>
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <span className="text-sm" style={{ color: "rgba(242,250,246,0.45)" }}>
          © 2026 Fatika Rahmanisa. Samarinda.
        </span>
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/fatika-rahmanisa-a1a30a431"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-80"
            style={{ color: C_GOLD_LIGHT }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            Fatika Rahmanisa
          </a>
          <a
            href="https://www.instagram.com/_____fatikaa/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-80"
            style={{ color: C_GOLD_LIGHT }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            @_____fatikaa
          </a>
        </div>
      </div>
    </footer>
  );
}
export default function App() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <WorkProjects />
      <Leadership />
      <Achievements />
      <Certifications />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
