import { useState, useEffect, useRef } from "react";

const NEXA_LOGO_WHITE = "data:image/png;base64,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";
const NEXA_LOGO_BLUE = "data:image/png;base64,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";


const FORM_URL = "https://tally.so/r/WONe2J";
const WA_URL = "https://wa.me/584220430323";
const WA_URL_PLANS = `${WA_URL}?text=${encodeURIComponent("Hola! Me interesa conocer más sobre los planes de Nexa.")}`;
const WA_URL_FISIO = `${WA_URL}?text=${encodeURIComponent("Hola! Me interesa una sesión de fisioterapia / recovery en Nexa.")}`;
const MAPS_URL = "https://maps.app.goo.gl/Sv1kWtonHkFWcBnr7?g_st=iw";

const SPRING = "cubic-bezier(0.22, 1.2, 0.36, 1)";
const SPRING_POP = "cubic-bezier(0.34, 1.4, 0.64, 1)";

// ─── GLOBAL STYLES ──────────────────────────────────────────────────
const GlobalStyles = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const style = document.createElement("style");
    style.textContent = `
      :root {
        --navy: #0b1c60;
        --blue: #3560e7;
        --blue-mid: #91afef;
        --blue-light: #d9e3fa;
        --off-white: #f4f7fd;
        --white: #ffffff;
        --gray-50: #f8faff;
        --gray-100: #e8edf8;
        --gray-400: #7b8bb5;
        --gray-600: #4a5578;
        --gray-800: #1e2a4a;
      }
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      html { scroll-behavior: smooth; }
      body { font-family: 'Plus Jakarta Sans', sans-serif; color: var(--navy); background: var(--white); overflow-x: hidden; }
      .font-display { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.02em; }

      @keyframes fadeUp {
        0% { opacity: 0; transform: translateY(20px); }
        60% { opacity: 1; transform: translateY(-3px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      @keyframes fadeScale {
        0% { opacity: 0; transform: scale(0.92) translateY(14px); }
        60% { opacity: 1; transform: scale(1.015) translateY(-2px); }
        100% { opacity: 1; transform: scale(1) translateY(0); }
      }
      @keyframes slideInLeft {
        0% { opacity: 0; transform: translateX(-36px); }
        60% { opacity: 1; transform: translateX(4px); }
        100% { opacity: 1; transform: translateX(0); }
      }
      @keyframes slideInRight {
        0% { opacity: 0; transform: translateX(36px); }
        60% { opacity: 1; transform: translateX(-4px); }
        100% { opacity: 1; transform: translateX(0); }
      }
      @keyframes clipRevealUp {
        0% { clip-path: inset(100% 0 0 0); opacity: 0; transform: translateY(12px); }
        100% { clip-path: inset(0 0 0 0); opacity: 1; transform: translateY(0); }
      }
      @keyframes growLine {
        0% { width: 0; opacity: 0; }
        70% { width: 52px; opacity: 1; }
        100% { width: 48px; opacity: 1; }
      }
      @keyframes pulseGlow {
        0%, 100% { box-shadow: 0 0 16px rgba(37,211,102,0.2); }
        50% { box-shadow: 0 0 28px rgba(37,211,102,0.45); }
      }

      .gradient-text {
        background: linear-gradient(135deg, var(--navy) 0%, var(--blue) 100%);
        -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
      }
      .section-divider { width: 0; height: 3px; background: linear-gradient(90deg, var(--blue), var(--blue-mid)); border-radius: 2px; }
      .section-divider.visible { animation: growLine 0.6s cubic-bezier(0.4,0,0.2,1) forwards; }
      .nav-blur { background: rgba(255,255,255,0.85); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); }
      .glass-card { background: rgba(255,255,255,0.7); backdrop-filter: blur(20px); border: 1px solid rgba(145,175,239,0.2); }
      .btn-primary {
        background: linear-gradient(135deg, var(--navy) 0%, var(--blue) 100%);
        color: white; border: none; padding: 14px 36px; border-radius: 8px;
        font-weight: 600; font-size: 15px; cursor: pointer; transition: all 0.3s ease;
        font-family: 'Plus Jakarta Sans', sans-serif; letter-spacing: 0.01em; text-decoration: none; display: inline-block;
      }
      .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(53,96,231,0.3); }
      .btn-outline {
        background: transparent; color: var(--navy); border: 1.5px solid var(--blue-mid);
        padding: 13px 34px; border-radius: 8px; font-weight: 600; font-size: 15px;
        cursor: pointer; transition: all 0.3s ease; font-family: 'Plus Jakarta Sans', sans-serif; text-decoration: none; display: inline-block;
      }
      .btn-outline:hover { border-color: var(--blue); background: var(--blue-light); }
      .plan-card { transition: all 0.35s cubic-bezier(0.4,0,0.2,1); }
      .plan-card:hover { transform: translateY(-4px); box-shadow: 0 20px 60px rgba(11,28,96,0.1); }
      .faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.4s cubic-bezier(0.4,0,0.2,1), padding 0.3s ease; }
      .faq-answer.open { max-height: 300px; padding-bottom: 20px; }
      .wa-float {
        position: fixed; bottom: 24px; right: 24px; z-index: 1000;
        width: 56px; height: 56px; border-radius: 50%; background: #25D366;
        display: flex; align-items: center; justify-content: center;
        box-shadow: 0 4px 20px rgba(37,211,102,0.3); cursor: pointer;
        transition: all 0.3s ease; animation: pulseGlow 2.5s ease-in-out infinite;
        text-decoration: none;
      }
      .wa-float:hover { transform: scale(1.1); box-shadow: 0 8px 30px rgba(37,211,102,0.5); }
      .quiz-option {
        padding: 14px 20px; border-radius: 10px; cursor: pointer;
        border: 1.5px solid var(--gray-100); background: white;
        transition: all 0.25s ease; font-size: 14px; font-weight: 500; text-align: left; width: 100%;
        font-family: 'Plus Jakarta Sans', sans-serif; color: var(--navy);
      }
      .quiz-option:hover { border-color: var(--blue-mid); background: var(--blue-light); }
      .quiz-option.selected { border-color: var(--blue); background: var(--blue-light); font-weight: 600; }

      @media (max-width: 768px) {
        .hero-title { font-size: 48px !important; line-height: 1.05 !important; }
        .section-title { font-size: 36px !important; }
        .nav-links { display: none !important; }
        .grid-2 { grid-template-columns: 1fr !important; }
        .grid-3 { grid-template-columns: 1fr !important; }
        .grid-4 { grid-template-columns: 1fr 1fr !important; }
        .hero-ctas { flex-direction: column !important; }
        .px-resp { padding-left: 20px !important; padding-right: 20px !important; }
        .plans-grid { grid-template-columns: 1fr !important; }
        .wa-float { bottom: 16px; right: 16px; }
      }
    `;
    document.head.appendChild(style);
    return () => { document.head.removeChild(link); document.head.removeChild(style); };
  }, []);
  return null;
};

// ─── INTERSECTION OBSERVER ──────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

// ─── ICONS ──────────────────────────────────────────────────────────
const Icon = ({ name, size = 24, color = "currentColor" }) => {
  const icons = {
    shield: <path d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" fill="none" stroke={color} strokeWidth="2"/>,
    target: <><circle cx="12" cy="12" r="10" fill="none" stroke={color} strokeWidth="2"/><circle cx="12" cy="12" r="6" fill="none" stroke={color} strokeWidth="2"/><circle cx="12" cy="12" r="2" fill={color}/></>,
    zap: <path d="M13 2L3 14h9l-1 10 10-12h-9l1-10z" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>,
    heart: <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="none" stroke={color} strokeWidth="2"/>,
    users: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" fill="none" stroke={color} strokeWidth="2"/><circle cx="9" cy="7" r="4" fill="none" stroke={color} strokeWidth="2"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" fill="none" stroke={color} strokeWidth="2"/></>,
    activity: <path d="M22 12h-4l-3 9L9 3l-3 9H2" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>,
    check: <path d="M20 6L9 17l-5-5" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>,
    chevron: <path d="M6 9l6 6 6-6" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>,
    arrow: <><line x1="5" y1="12" x2="19" y2="12" stroke={color} strokeWidth="2" strokeLinecap="round"/><polyline points="12 5 19 12 12 19" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></>,
    menu: <><line x1="3" y1="6" x2="21" y2="6" stroke={color} strokeWidth="2" strokeLinecap="round"/><line x1="3" y1="12" x2="21" y2="12" stroke={color} strokeWidth="2" strokeLinecap="round"/><line x1="3" y1="18" x2="21" y2="18" stroke={color} strokeWidth="2" strokeLinecap="round"/></>,
    x: <><line x1="18" y1="6" x2="6" y2="18" stroke={color} strokeWidth="2" strokeLinecap="round"/><line x1="6" y1="6" x2="18" y2="18" stroke={color} strokeWidth="2" strokeLinecap="round"/></>,
    trending: <><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><polyline points="17 6 23 6 23 12" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></>,
    clipboard: <><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" fill="none" stroke={color} strokeWidth="2"/><rect x="8" y="2" width="8" height="4" rx="1" fill="none" stroke={color} strokeWidth="2"/></>,
    star: <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round"/>,
    tool: <><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" fill="none" stroke={color} strokeWidth="2"/></>,
    calendar: <><rect x="3" y="4" width="18" height="18" rx="2" fill="none" stroke={color} strokeWidth="2"/><line x1="16" y1="2" x2="16" y2="6" stroke={color} strokeWidth="2"/><line x1="8" y1="2" x2="8" y2="6" stroke={color} strokeWidth="2"/><line x1="3" y1="10" x2="21" y2="10" stroke={color} strokeWidth="2"/></>,
    send: <><line x1="22" y1="2" x2="11" y2="13" stroke={color} strokeWidth="2"/><polygon points="22 2 15 22 11 13 2 9 22 2" fill="none" stroke={color} strokeWidth="2"/></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">{icons[name]}</svg>;
};

// ─── NAVBAR ─────────────────────────────────────────────────────────
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h); return () => window.removeEventListener("scroll", h);
  }, []);

  const links = [
    { label: "Cómo trabajamos", href: "#metodo" },
    { label: "Planes", href: "#planes" },
    { label: "Servicios", href: "#servicios" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="nav-blur" style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: scrolled ? "12px 32px" : "18px 32px",
      borderBottom: scrolled ? "1px solid var(--gray-100)" : "1px solid transparent",
      transition: "all 0.3s ease",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <a href="#" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img src={scrolled ? NEXA_LOGO_BLUE : NEXA_LOGO_BLUE} alt="Nexa" style={{ height: 36, width: "auto", objectFit: "contain", transition: "all 0.3s" }} />
        </a>

        <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {links.map(l => (
            <a key={l.label} href={l.href} style={{
              fontSize: 14, fontWeight: 500, color: "var(--gray-600)", textDecoration: "none", transition: "color 0.2s",
            }}>{l.label}</a>
          ))}
          <a href={WA_URL_PLANS} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "10px 24px", fontSize: 14, textDecoration: "none" }}>
            Contáctanos
          </a>
        </div>

        {/* Mobile menu button */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: "none", background: "none", border: "none", cursor: "pointer" }}
          className="mobile-menu-btn">
          <Icon name={menuOpen ? "x" : "menu"} size={24} color="var(--navy)" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: "absolute", top: "100%", left: 0, right: 0,
          background: "white", borderBottom: "1px solid var(--gray-100)",
          padding: "16px 32px", display: "flex", flexDirection: "column", gap: 16,
        }}>
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)} style={{
              fontSize: 15, fontWeight: 500, color: "var(--navy)", textDecoration: "none", padding: "8px 0",
            }}>{l.label}</a>
          ))}
          <a href={WA_URL_PLANS} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: 8, textDecoration: "none", textAlign: "center" }}>Contáctanos</a>
        </div>
      )}

      <style>{`@media (max-width: 768px) { .mobile-menu-btn { display: block !important; } }`}</style>
    </nav>
  );
};


// ─── HERO ───────────────────────────────────────────────────────────
const Hero = () => {
  const [ref, inView] = useInView(0.1);
  return (
    <section ref={ref} style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      padding: "120px 32px 80px", position: "relative",
      background: "radial-gradient(ellipse 80% 60% at 70% 20%, rgba(53,96,231,0.08) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 20% 80%, rgba(145,175,239,0.06) 0%, transparent 50%), var(--white)",
    }} className="px-resp">
      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
        {/* Badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "var(--blue-light)", borderRadius: 100, padding: "8px 20px",
          fontSize: 12, fontWeight: 700, color: "var(--navy)", marginBottom: 28,
          textTransform: "uppercase", letterSpacing: 1.5,
          opacity: inView ? 1 : 0, animation: inView ? `fadeUp 0.6s ${SPRING} forwards` : "none",
        }}>
          <Icon name="shield" size={14} color="var(--blue)" />
          Centro de entrenamiento & rehabilitación
        </div>

        {/* Title */}
        <h1 className="font-display hero-title" style={{
          fontSize: 72, lineHeight: 1.02, color: "var(--navy)", marginBottom: 24, maxWidth: 750, margin: "0 auto 24px",
        }}>
          <span style={{ display: "block", overflow: "hidden" }}>
            <span style={{
              display: "block", opacity: inView ? 1 : 0,
              animation: inView ? `clipRevealUp 0.9s ${SPRING} 0.15s forwards` : "none",
            }}>ENTRENA CON CRITERIO.</span>
          </span>
          <span style={{ display: "block", overflow: "hidden" }}>
            <span className="gradient-text" style={{
              display: "block", opacity: inView ? 1 : 0,
              animation: inView ? `clipRevealUp 0.9s ${SPRING} 0.35s forwards` : "none",
            }}>PROGRESA CON ESTRUCTURA.</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: 18, color: "var(--gray-600)", lineHeight: 1.7, maxWidth: 560, margin: "0 auto 36px",
          opacity: inView ? 1 : 0, animation: inView ? `fadeUp 0.8s ${SPRING} 0.5s forwards` : "none",
        }}>
          Entrenamiento guiado por fisioterapeutas. Evaluación, seguimiento y prevención integrados en tu proceso — sin improvisar.
        </p>

        {/* CTAs */}
        <div className="hero-ctas" style={{
          display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap",
          opacity: inView ? 1 : 0, animation: inView ? `fadeUp 0.8s ${SPRING} 0.65s forwards` : "none",
        }}>
          <a href="#quiz" className="btn-primary" style={{ textDecoration: "none" }}>
            Encuentra tu plan ideal
          </a>
          <a href={WA_URL_PLANS} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ textDecoration: "none" }}>
            Escríbenos por WhatsApp
          </a>
        </div>

        {/* 3 quick pillars */}
        <div style={{
          display: "flex", justifyContent: "center", gap: 40, marginTop: 56, flexWrap: "wrap",
          opacity: inView ? 1 : 0, animation: inView ? `fadeUp 0.7s ${SPRING} 0.85s forwards` : "none",
        }}>
          {[
            { icon: "activity", text: "Entrenamiento estructurado" },
            { icon: "shield", text: "Evaluación profesional" },
            { icon: "heart", text: "Prevención integrada" },
          ].map((p, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <Icon name={p.icon} size={18} color="var(--blue)" />
              <span style={{ fontSize: 13, fontWeight: 600, color: "var(--gray-600)" }}>{p.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── HOW WE WORK ────────────────────────────────────────────────────
const HowWeWork = () => {
  const [ref, inView] = useInView();
  const [active, setActive] = useState(0);

  const tabs = [
    {
      icon: "trending",
      label: "Entrenamiento",
      title: "Entrenamiento con criterio",
      desc: "Tu programa no es una rutina genérica. Está diseñado por fisioterapeutas con base en cómo se mueve tu cuerpo, qué necesita y hacia dónde vas.",
      points: [
        "Programas diseñados con criterio profesional",
        "Se ajusta y evoluciona según tus avances",
        "Cada ejercicio tiene un porqué claro",
      ],
    },
    {
      icon: "clipboard",
      label: "Evaluación",
      title: "Tu cuerpo da las respuestas",
      desc: "No adivinamos: medimos, interpretamos y tomamos decisiones con datos reales. Seguimiento periódico para que tu plan siempre esté actualizado.",
      points: [
        "Evaluación de fuerza y medidas corporales",
        "Análisis funcional del movimiento",
        "Seguimiento periódico con ajustes basados en datos",
      ],
    },
    {
      icon: "heart",
      label: "Prevención",
      title: "Prevención antes que reparación",
      desc: "Fisioterapia y recovery integrados en tu proceso. No esperamos a que algo duela — trabajamos para que no pase. Y si ya pasó, te acompañamos de vuelta.",
      points: [
        "Recovery preventiva integrada al entrenamiento",
        "Fisioterapia disponible cuando se necesita",
        "Transición segura entre rehabilitación y entrenamiento",
      ],
    },
  ];

  const current = tabs[active];

  return (
    <section id="metodo" ref={ref} style={{ padding: "100px 32px", background: "var(--off-white)" }} className="px-resp">
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 48px" }}>
          <div className={`section-divider ${inView ? "visible" : ""}`} style={{ margin: "0 auto 20px" }} />
          <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "var(--blue)", marginBottom: 12 }}>
            Cómo trabajamos
          </p>
          <h2 className="font-display section-title" style={{
            fontSize: 44, color: "var(--navy)", lineHeight: 1.05, marginBottom: 16,
            opacity: inView ? 1 : 0, animation: inView ? `clipRevealUp 1s ${SPRING} 0.1s forwards` : "none",
          }}>
            NO ES UN GYM. ES UN SISTEMA.
          </h2>
          <p style={{
            fontSize: 16, color: "var(--gray-600)", lineHeight: 1.7,
            opacity: inView ? 1 : 0, animation: inView ? `fadeUp 0.7s ${SPRING} 0.2s forwards` : "none",
          }}>
            Todo está conectado. Entrenamiento, evaluación y prevención se alimentan entre sí para que tu progreso sea real y sostenible.
          </p>
        </div>

        {/* Tab bar */}
        <div style={{
          display: "flex", gap: 6, marginBottom: 0, borderRadius: "16px 16px 0 0", overflow: "hidden",
          background: "rgba(145,175,239,0.1)", padding: 6,
          opacity: inView ? 1 : 0, animation: inView ? `fadeUp 0.7s ${SPRING} 0.3s forwards` : "none",
        }}>
          {tabs.map((tab, i) => (
            <button key={i} onClick={() => setActive(i)} style={{
              flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
              padding: "14px 16px", border: "none", borderRadius: 12,
              background: active === i ? "white" : "transparent",
              boxShadow: active === i ? "0 2px 12px rgba(11,28,96,0.08)" : "none",
              cursor: "pointer", transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 14, fontWeight: active === i ? 700 : 500,
              color: active === i ? "var(--navy)" : "var(--gray-400)",
            }}>
              <Icon name={tab.icon} size={18} color={active === i ? "var(--blue)" : "var(--gray-400)"} />
              <span className="tab-label">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div style={{
          background: "white", borderRadius: "0 0 20px 20px",
          border: "1px solid var(--gray-100)", borderTop: "none",
          padding: "40px 36px",
          boxShadow: "0 8px 32px rgba(11,28,96,0.04)",
          opacity: inView ? 1 : 0, animation: inView ? `fadeUp 0.7s ${SPRING} 0.35s forwards` : "none",
        }}>
          {/* Animated number */}
          <div key={active} style={{ animation: `fadeUp 0.5s ${SPRING} forwards` }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 20, marginBottom: 24 }}>
              <span className="font-display" style={{
                fontSize: 64, lineHeight: 0.85, color: "var(--blue-light)",
                flexShrink: 0, userSelect: "none",
              }}>
                0{active + 1}
              </span>
              <div>
                <h3 style={{ fontSize: 22, fontWeight: 700, color: "var(--navy)", marginBottom: 10, lineHeight: 1.3 }}>
                  {current.title}
                </h3>
                <p style={{ fontSize: 15, color: "var(--gray-600)", lineHeight: 1.7 }}>
                  {current.desc}
                </p>
              </div>
            </div>

            {/* Points */}
            <div style={{
              display: "flex", flexDirection: "column", gap: 12,
              paddingLeft: 84,
            }}>
              {current.points.map((point, pi) => (
                <div key={pi} style={{
                  display: "flex", alignItems: "center", gap: 12,
                  animation: `fadeUp 0.4s ${SPRING} ${0.1 + pi * 0.08}s both`,
                }}>
                  <div style={{
                    width: 6, height: 6, borderRadius: "50%", flexShrink: 0,
                    background: "linear-gradient(135deg, var(--blue), var(--blue-mid))",
                  }} />
                  <span style={{ fontSize: 14, color: "var(--gray-600)", lineHeight: 1.5 }}>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`@media (max-width: 768px) {
          .tab-label { display: none; }
        }`}</style>
      </div>
    </section>
  );
};


// ─── FOR WHO ────────────────────────────────────────────────────────
const ForWho = () => {
  const [ref, inView] = useInView();
  const profiles = [
    {
      icon: "users",
      title: "Quiero entrenar bien pero no sé por dónde empezar",
      plan: "Base",
      desc: "Recibe un programa con criterio profesional desde el día uno, sin necesitar experiencia previa.",
    },
    {
      icon: "activity",
      title: "Entreno pero tengo molestias recurrentes",
      plan: "Control",
      desc: "Evaluamos tu movimiento, identificamos el origen y ajustamos tu entrenamiento para que dejes de compensar.",
    },
    {
      icon: "heart",
      title: "Vengo de fisioterapia y quiero retomar",
      plan: "Control",
      desc: "Transición segura entre rehabilitación y entrenamiento con fisioterapeutas que entienden tu proceso.",
    },
    {
      icon: "trending",
      title: "Quiero llevar mi rendimiento al siguiente nivel",
      plan: "Proceso",
      desc: "Programa totalmente personalizado, seguimiento continuo, plan nutricional y recuperación integral.",
    },
  ];

  return (
    <section ref={ref} style={{ padding: "100px 32px", background: "var(--white)" }} className="px-resp">
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 64px" }}>
          <div className={`section-divider ${inView ? "visible" : ""}`} style={{ margin: "0 auto 20px" }} />
          <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "var(--blue)", marginBottom: 12 }}>
            ¿Es Nexa para ti?
          </p>
          <h2 className="font-display section-title" style={{
            fontSize: 44, color: "var(--navy)", lineHeight: 1.05,
            opacity: inView ? 1 : 0, animation: inView ? `clipRevealUp 1s ${SPRING} 0.1s forwards` : "none",
          }}>
            ENCUENTRA TU CAMINO
          </h2>
        </div>

        <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
          {profiles.map((p, i) => (
            <div key={i} style={{
              borderRadius: 16, padding: "28px 24px", border: "1px solid var(--gray-100)",
              background: "white", transition: "all 0.3s ease",
              opacity: inView ? 1 : 0,
              animation: inView ? `fadeScale 0.65s ${SPRING_POP} ${0.2 + i * 0.1}s forwards` : "none",
            }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                  background: "linear-gradient(135deg, rgba(53,96,231,0.08), rgba(145,175,239,0.12))",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Icon name={p.icon} size={20} color="var(--blue)" />
                </div>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--navy)", marginBottom: 8, lineHeight: 1.4 }}>
                    "{p.title}"
                  </h3>
                  <p style={{ fontSize: 13, color: "var(--gray-600)", lineHeight: 1.6, marginBottom: 10 }}>{p.desc}</p>
                  <span style={{
                    fontSize: 12, fontWeight: 700, color: "var(--blue)",
                    background: "var(--blue-light)", padding: "4px 12px", borderRadius: 100,
                  }}>
                    Recomendado: Nexa {p.plan}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── PLAN QUIZ ──────────────────────────────────────────────────────
const quizQuestions = [
  {
    q: "¿Has entrenado antes de forma regular?",
    options: [
      { text: "No, sería mi primera vez", score: { base: 3, control: 1, proceso: 0 } },
      { text: "Sí, pero hace tiempo que no", score: { base: 2, control: 3, proceso: 1 } },
      { text: "Sí, actualmente entreno", score: { base: 0, control: 2, proceso: 3 } },
    ],
  },
  {
    q: "¿Cuántos días a la semana puedes dedicar al entrenamiento?",
    options: [
      { text: "1 a 2 días", score: { base: 3, control: 1, proceso: 0 } },
      { text: "3 días", score: { base: 1, control: 3, proceso: 1 } },
      { text: "4 a 5 días", score: { base: 0, control: 1, proceso: 3 } },
    ],
  },
  {
    q: "¿Tienes alguna molestia, lesión o condición actual?",
    options: [
      { text: "No, estoy bien", score: { base: 2, control: 1, proceso: 1 } },
      { text: "Sí, algo menor o recurrente", score: { base: 0, control: 3, proceso: 2 } },
      { text: "Sí, vengo de un proceso de rehabilitación", score: { base: 0, control: 3, proceso: 3 } },
    ],
  },
  {
    q: "¿Qué nivel de acompañamiento buscas?",
    options: [
      { text: "Estructura básica — quiero un buen programa", score: { base: 3, control: 0, proceso: 0 } },
      { text: "Seguimiento profesional — que me guíen de cerca", score: { base: 0, control: 3, proceso: 1 } },
      { text: "Optimización total — programa, nutrición y recovery", score: { base: 0, control: 0, proceso: 3 } },
    ],
  },
];

const planResults = {
  base: { name: "Nexa Base", price: "50", tagline: "Estructura y criterio profesional", color: "var(--navy)" },
  control: { name: "Nexa Control", price: "75", tagline: "Seguimiento que marca la diferencia", color: "var(--blue)" },
  proceso: { name: "Nexa Proceso", price: "95", tagline: "Tu rendimiento, optimizado al máximo", color: "#3560e7" },
};

const PlanQuiz = () => {
  const [ref, inView] = useInView();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const handleAnswer = (option) => {
    const newAnswers = [...answers, option.score];
    setAnswers(newAnswers);

    if (step < quizQuestions.length - 1) {
      setStep(step + 1);
    } else {
      // Calculate result
      const totals = newAnswers.reduce((acc, s) => ({
        base: acc.base + s.base,
        control: acc.control + s.control,
        proceso: acc.proceso + s.proceso,
      }), { base: 0, control: 0, proceso: 0 });

      const winner = Object.entries(totals).sort((a, b) => b[1] - a[1])[0][0];
      setResult(winner);
    }
  };

  const reset = () => { setStep(0); setAnswers([]); setResult(null); };

  return (
    <section id="quiz" ref={ref} style={{
      padding: "100px 32px",
      background: "linear-gradient(180deg, var(--white) 0%, var(--blue-light) 50%, var(--white) 100%)",
    }} className="px-resp">
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div className={`section-divider ${inView ? "visible" : ""}`} style={{ margin: "0 auto 20px" }} />
          <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "var(--blue)", marginBottom: 12 }}>
            Test rápido
          </p>
          <h2 className="font-display section-title" style={{
            fontSize: 44, color: "var(--navy)", lineHeight: 1.05,
            opacity: inView ? 1 : 0, animation: inView ? `clipRevealUp 1s ${SPRING} 0.1s forwards` : "none",
          }}>
            ¿CUÁL PLAN ES PARA TI?
          </h2>
          <p style={{
            fontSize: 15, color: "var(--gray-600)", lineHeight: 1.6, marginTop: 12,
            opacity: inView ? 1 : 0, animation: inView ? `fadeUp 0.7s ${SPRING} 0.2s forwards` : "none",
          }}>
            Responde 4 preguntas y te recomendamos el plan ideal.
          </p>
        </div>

        {!result ? (
          <div style={{
            background: "white", borderRadius: 20, padding: "36px 32px",
            boxShadow: "0 8px 40px rgba(11,28,96,0.06)", border: "1px solid var(--gray-100)",
          }}>
            {/* Progress */}
            <div style={{ display: "flex", gap: 6, marginBottom: 28 }}>
              {quizQuestions.map((_, i) => (
                <div key={i} style={{
                  flex: 1, height: 4, borderRadius: 2,
                  background: i <= step ? "var(--blue)" : "var(--gray-100)",
                  transition: "background 0.3s ease",
                }} />
              ))}
            </div>

            <p style={{ fontSize: 12, color: "var(--gray-400)", marginBottom: 8, fontWeight: 600 }}>
              Pregunta {step + 1} de {quizQuestions.length}
            </p>
            <h3 style={{ fontSize: 17, fontWeight: 700, color: "var(--navy)", marginBottom: 24, lineHeight: 1.4 }}>
              {quizQuestions[step].q}
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {quizQuestions[step].options.map((opt, i) => (
                <button key={i} className="quiz-option" onClick={() => handleAnswer(opt)}>
                  {opt.text}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div style={{
            background: "white", borderRadius: 20, padding: "40px 32px",
            boxShadow: "0 8px 40px rgba(11,28,96,0.06)", border: "1px solid var(--gray-100)",
            textAlign: "center",
            animation: `fadeScale 0.6s ${SPRING_POP} forwards`,
          }}>
            <div style={{
              width: 56, height: 56, borderRadius: "50%", margin: "0 auto 20px",
              background: "linear-gradient(135deg, rgba(53,96,231,0.15), rgba(145,175,239,0.1))",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <Icon name="check" size={28} color="var(--blue)" />
            </div>
            <p style={{ fontSize: 13, color: "var(--gray-400)", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>
              Tu plan recomendado
            </p>
            <h3 className="font-display" style={{ fontSize: 40, color: planResults[result].color, marginBottom: 8 }}>
              {planResults[result].name}
            </h3>
            <p style={{ fontSize: 15, color: "var(--gray-600)", marginBottom: 4 }}>{planResults[result].tagline}</p>
            <p className="font-display" style={{ fontSize: 36, color: "var(--navy)", margin: "12px 0 24px" }}>
              ${planResults[result].price}<span style={{ fontSize: 16, color: "var(--gray-400)" }}>/mes</span>
            </p>

            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href={WA_URL_PLANS} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ textDecoration: "none" }}>
                Inscribirme por WhatsApp
              </a>
              <button onClick={reset} className="btn-outline" style={{ cursor: "pointer" }}>
                Repetir test
              </button>
            </div>

            <a href="#planes" style={{
              display: "inline-block", marginTop: 20,
              fontSize: 13, color: "var(--blue)", textDecoration: "none", fontWeight: 600,
            }}>
              Ver todos los planes en detalle →
            </a>
          </div>
        )}
      </div>
    </section>
  );
};


// ─── PLANS ──────────────────────────────────────────────────────────
const Plans = () => {
  const [ref, inView] = useInView();

  const plans = [
    {
      name: "Nexa Base",
      price: "50",
      tagline: "Tu entrada al entrenamiento con criterio",
      isAccent: false,
      badge: null,
      features: [
        "Frecuencia libre",
        "Programa seleccionado por fisioterapeuta",
        "Evaluación de fuerza inicial",
        "Medidas corporales",
        "Corrección técnica puntual",
        "Ajuste mensual del programa",
        "Acceso completo al espacio",
      ],
      ideal: "Para quien quiere estructura profesional sin necesitar seguimiento cercano.",
    },
    {
      name: "Nexa Control",
      price: "75",
      tagline: "Seguimiento que marca la diferencia",
      isAccent: true,
      badge: "El más elegido",
      features: [
        "3 días por semana",
        "Programa ajustado a tus objetivos",
        "Evaluación de fuerza específica",
        "Evaluación funcional",
        "Medidas corporales",
        "Corrección técnica activa en cada sesión",
        "Seguimiento mensual estructurado",
        "Recovery según necesidad",
        "Acceso completo al espacio",
      ],
      ideal: "Para quien entrena serio, tiene molestias recurrentes o quiere resultados sostenibles.",
      includesBase: true,
    },
    {
      name: "Nexa Proceso",
      price: "95",
      tagline: "Tu rendimiento, optimizado al máximo",
      isAccent: false,
      badge: null,
      features: [
        "5 días por semana",
        "Programa totalmente personalizado",
        "Evaluación de fuerza específica",
        "Evaluación funcional",
        "Medidas corporales",
        "Corrección técnica activa continua",
        "Seguimiento continuo con ajustes frecuentes",
        "Nexa Recovery completa integrada",
        "Plan nutricional",
        "Acceso completo al espacio",
      ],
      ideal: "Para quien busca alto rendimiento, metas exigentes u optimización integral.",
      includesControl: true,
    },
  ];

  return (
    <section id="planes" ref={ref} style={{ padding: "100px 32px", background: "var(--white)" }} className="px-resp">
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 20px" }}>
          <div className={`section-divider ${inView ? "visible" : ""}`} style={{ margin: "0 auto 20px" }} />
          <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "var(--blue)", marginBottom: 12 }}>
            Planes
          </p>
          <h2 className="font-display section-title" style={{
            fontSize: 44, color: "var(--navy)", lineHeight: 1.05, marginBottom: 16,
            opacity: inView ? 1 : 0, animation: inView ? `clipRevealUp 1s ${SPRING} 0.1s forwards` : "none",
          }}>
            EL PLAN QUE SE ADAPTA A TI
          </h2>
          <p style={{
            fontSize: 16, color: "var(--gray-600)", lineHeight: 1.7,
            opacity: inView ? 1 : 0, animation: inView ? `fadeUp 0.7s ${SPRING} 0.2s forwards` : "none",
          }}>
            Los planes se diferencian por el nivel de acompañamiento, no por acceso. Todos entrenan en el mismo espacio con la misma calidad.
          </p>
        </div>

        {/* Key differentiator message */}
        <div style={{
          textAlign: "center", marginBottom: 48,
          opacity: inView ? 1 : 0, animation: inView ? `fadeUp 0.7s ${SPRING} 0.3s forwards` : "none",
        }}>
          <p style={{
            display: "inline-block", fontSize: 13, fontWeight: 700, color: "var(--navy)",
            background: "var(--blue-light)", padding: "10px 24px", borderRadius: 100,
          }}>
            Base te da estructura · Control te da seguimiento · Proceso te da optimización integral
          </p>
        </div>

        <div className="plans-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, alignItems: "start" }}>
          {plans.map((plan, i) => (
            <div key={i} className="plan-card" style={{
              borderRadius: 20, padding: plan.isAccent ? "3px" : 0,
              background: plan.isAccent ? "linear-gradient(135deg, var(--navy), var(--blue))" : "transparent",
              opacity: inView ? 1 : 0,
              animation: inView ? `fadeScale 0.7s ${SPRING_POP} ${0.3 + i * 0.12}s forwards` : "none",
            }}>
              <div style={{
                borderRadius: plan.isAccent ? 18 : 20,
                padding: "32px 24px",
                background: plan.isAccent ? "var(--navy)" : "white",
                border: plan.isAccent ? "none" : "1px solid var(--gray-100)",
                color: plan.isAccent ? "white" : "var(--navy)",
                position: "relative", minHeight: 520,
                display: "flex", flexDirection: "column",
              }}>
                {plan.badge && (
                  <div style={{
                    position: "absolute", top: -1, left: "50%", transform: "translateX(-50%)",
                    background: "var(--blue)", color: "white", fontSize: 11, fontWeight: 700,
                    padding: "5px 16px", borderRadius: "0 0 8px 8px", textTransform: "uppercase", letterSpacing: 1,
                  }}>{plan.badge}</div>
                )}

                <p style={{
                  fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5,
                  color: plan.isAccent ? "var(--blue-mid)" : "var(--blue)", marginBottom: 8, marginTop: plan.badge ? 16 : 0,
                }}>{plan.name}</p>

                <div className="font-display" style={{ fontSize: 52, lineHeight: 1, marginBottom: 4 }}>
                  ${plan.price}
                </div>
                <p style={{ fontSize: 11.5, color: plan.isAccent ? "rgba(145,175,239,0.6)" : "var(--blue-mid)", marginBottom: 16 }}>
                  /mes · Tasa BCV
                </p>

                <p style={{
                  fontSize: 14, fontWeight: 600, marginBottom: 20, lineHeight: 1.4,
                  color: plan.isAccent ? "rgba(255,255,255,0.8)" : "var(--gray-600)",
                }}>{plan.tagline}</p>

                <div style={{ flex: 1, marginBottom: 20 }}>
                  {plan.features.map((f, fi) => (
                    <div key={fi} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10 }}>
                      <Icon name="check" size={16} color={plan.isAccent ? "var(--blue-mid)" : "var(--blue)"} />
                      <span style={{
                        fontSize: 13, lineHeight: 1.4,
                        color: plan.isAccent ? "rgba(255,255,255,0.75)" : "var(--gray-600)",
                      }}>{f}</span>
                    </div>
                  ))}
                </div>

                <p style={{
                  fontSize: 12, fontStyle: "italic", marginBottom: 20,
                  color: plan.isAccent ? "rgba(255,255,255,0.5)" : "var(--gray-400)", lineHeight: 1.5,
                }}>
                  {plan.ideal}
                </p>

                <a href={WA_URL_PLANS} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: "block", textAlign: "center", padding: "14px", borderRadius: 10,
                    fontSize: 14, fontWeight: 700, textDecoration: "none", transition: "all 0.3s",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    background: plan.isAccent ? "white" : "linear-gradient(135deg, var(--navy), var(--blue))",
                    color: plan.isAccent ? "var(--navy)" : "white",
                  }}>
                  Inscribirme en {plan.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── SERVICES ───────────────────────────────────────────────────────
const Services = () => {
  const [ref, inView] = useInView();
  const services = [
    {
      icon: "tool",
      title: "Fisioterapia",
      price: "$20 / sesión",
      desc: "Sesión individual de 60 min mínimo. Para lesión, patología o dolor agudo/recurrente. Evaluación y tratamiento personalizado.",
    },
    {
      icon: "heart",
      title: "Nexa Recovery",
      price: "$20 / sesión",
      desc: "Recuperación preventiva: descarga muscular y movilidad asistida. No es terapia clínica — es mantenimiento del cuerpo para seguir entrenando bien.",
    },
    {
      icon: "activity",
      title: "Pilates Mat",
      price: "Desde $8 / clase",
      desc: "Sábados, máximo 7 personas. Control, movilidad y fuerza del core. Complemento ideal para tu entrenamiento. Pack 4: $28 · Pack 8: $52.",
    },
  ];

  return (
    <section id="servicios" ref={ref} style={{
      padding: "100px 32px",
      background: "linear-gradient(180deg, var(--off-white) 0%, var(--white) 100%)",
    }} className="px-resp">
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 64px" }}>
          <div className={`section-divider ${inView ? "visible" : ""}`} style={{ margin: "0 auto 20px" }} />
          <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "var(--blue)", marginBottom: 12 }}>
            Servicios complementarios
          </p>
          <h2 className="font-display section-title" style={{
            fontSize: 44, color: "var(--navy)", lineHeight: 1.05,
            opacity: inView ? 1 : 0, animation: inView ? `clipRevealUp 1s ${SPRING} 0.1s forwards` : "none",
          }}>
            ATENCIÓN ESPECÍFICA, CUANDO LA NECESITAS
          </h2>
        </div>

        <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {services.map((s, i) => (
            <div key={i} style={{
              borderRadius: 16, padding: "32px 24px", border: "1px solid var(--gray-100)", background: "white",
              opacity: inView ? 1 : 0,
              animation: inView ? `fadeScale 0.65s ${SPRING_POP} ${0.2 + i * 0.12}s forwards` : "none",
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: "linear-gradient(135deg, rgba(53,96,231,0.08), rgba(145,175,239,0.12))",
                display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16,
              }}>
                <Icon name={s.icon} size={20} color="var(--blue)" />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--navy)", marginBottom: 6 }}>{s.title}</h3>
              <p className="font-display" style={{ fontSize: 22, color: "var(--blue)", marginBottom: 14 }}>{s.price}</p>
              <p style={{ fontSize: 13, color: "var(--gray-600)", lineHeight: 1.7, marginBottom: 16 }}>{s.desc}</p>
              <a href={WA_URL_FISIO} target="_blank" rel="noopener noreferrer" style={{
                fontSize: 13, fontWeight: 600, color: "var(--blue)", textDecoration: "none",
              }}>
                Consultar disponibilidad →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


// ─── HOW TO START ───────────────────────────────────────────────────
const HowToStart = () => {
  const [ref, inView] = useInView();
  const steps = [
    { num: "01", icon: "send", title: "Escríbenos", desc: "Contáctanos por WhatsApp. Te preguntamos sobre tus objetivos, experiencia y disponibilidad." },
    { num: "02", icon: "clipboard", title: "Evaluación inicial", desc: "Conocemos tu cuerpo, tu historial y tus objetivos. Evaluación de fuerza, medidas y análisis funcional según tu plan." },
    { num: "03", icon: "trending", title: "Empieza a entrenar", desc: "Recibe tu programa y comienza con estructura desde el primer día. Tu fisioterapeuta te acompaña en cada paso." },
  ];

  return (
    <section ref={ref} style={{ padding: "100px 32px", background: "var(--white)" }} className="px-resp">
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className={`section-divider ${inView ? "visible" : ""}`} style={{ margin: "0 auto 20px" }} />
          <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "var(--blue)", marginBottom: 12 }}>
            Cómo empezar
          </p>
          <h2 className="font-display section-title" style={{
            fontSize: 44, color: "var(--navy)", lineHeight: 1.05,
            opacity: inView ? 1 : 0, animation: inView ? `clipRevealUp 1s ${SPRING} 0.1s forwards` : "none",
          }}>
            TU PROCESO EN NEXA
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {steps.map((s, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "flex-start", gap: 24,
              opacity: inView ? 1 : 0,
              animation: inView ? `slideInLeft 0.6s ${SPRING_POP} ${0.2 + i * 0.12}s forwards` : "none",
            }}>
              <div style={{
                width: 52, height: 52, borderRadius: 14, flexShrink: 0,
                background: "linear-gradient(135deg, var(--navy), var(--blue))",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Icon name={s.icon} size={22} color="white" />
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                  <span className="font-display" style={{ fontSize: 28, color: "var(--blue-mid)" }}>{s.num}</span>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: "var(--navy)" }}>{s.title}</h3>
                </div>
                <p style={{ fontSize: 14, color: "var(--gray-600)", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <a href={WA_URL_PLANS} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ textDecoration: "none" }}>
            Empezar ahora por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

// ─── FAQ ─────────────────────────────────────────────────────────────
const FAQ = () => {
  const [ref, inView] = useInView();
  const [open, setOpen] = useState(null);

  const faqs = [
    { q: "¿Nexa es un gimnasio?", a: "No. Nexa es un espacio de entrenamiento profesional con acompañamiento de fisioterapeutas. Aquí no se entrena al azar — todo tiene estructura, criterio y seguimiento." },
    { q: "¿Necesito tener experiencia entrenando?", a: "No necesitas experiencia previa. Nos adaptamos a tu nivel, desde personas que inician hasta deportistas de alto rendimiento." },
    { q: "¿En qué se diferencian los planes?", a: "Los planes se diferencian por el nivel de acompañamiento, no por acceso al espacio. Base te da estructura; Control te da seguimiento profesional 3 días/semana; Proceso te da optimización integral 5 días/semana con nutrición y recovery." },
    { q: "¿Qué pasa si tengo una lesión o molestia?", a: "El entrenamiento se ajusta a tu realidad. Si necesitas intervención terapéutica, contamos con fisioterapeutas que trabajan de forma integrada con tu proceso de entrenamiento." },
    { q: "¿Puedo entrenar si vengo de un proceso de fisioterapia?", a: "Sí, de hecho es uno de los escenarios más comunes. Te ayudamos a retomar el entrenamiento con seguridad y continuidad profesional." },
    { q: "¿Cómo elijo el plan adecuado?", a: "Puedes hacer nuestro test rápido arriba en la página o escribirnos por WhatsApp. En tu evaluación inicial analizamos tu perfil y te recomendamos el plan que mejor se adapta." },
    { q: "¿La fisioterapia y el recovery están incluidos?", a: "En Nexa Control, el recovery se incluye según necesidad. En Nexa Proceso, la recovery completa está integrada. Las sesiones de fisioterapia individual ($20) y Nexa Recovery ($20) también están disponibles como servicios aparte." },
    { q: "¿Dónde están ubicados?", a: <>Estamos en la Av. Constitución. Puedes ver nuestra <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" style={{ color: "var(--blue)", fontWeight: 600, textDecoration: "underline" }}>ubicación exacta en Google Maps</a>.</> },
  ];

  return (
    <section id="faq" ref={ref} style={{ padding: "100px 32px", background: "var(--off-white)" }} className="px-resp">
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className={`section-divider ${inView ? "visible" : ""}`} style={{ margin: "0 auto 20px" }} />
          <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "var(--blue)", marginBottom: 12 }}>
            Preguntas frecuentes
          </p>
          <h2 className="font-display section-title" style={{
            fontSize: 44, color: "var(--navy)", lineHeight: 1.05,
            opacity: inView ? 1 : 0, animation: inView ? `clipRevealUp 1s ${SPRING} 0.1s forwards` : "none",
          }}>
            RESOLVEMOS TUS DUDAS
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{
              borderBottom: "1px solid var(--gray-100)",
              opacity: inView ? 1 : 0,
              animation: inView ? `fadeUp 0.5s ${SPRING_POP} ${0.05 + i * 0.07}s forwards` : "none",
            }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%", padding: "24px 0", display: "flex", justifyContent: "space-between",
                  alignItems: "center", background: "none", border: "none", cursor: "pointer",
                  textAlign: "left", fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}>
                <span style={{ fontSize: 16, fontWeight: 600, color: "var(--navy)", paddingRight: 16 }}>{faq.q}</span>
                <div style={{ transition: "transform 0.3s ease", flexShrink: 0, transform: open === i ? "rotate(180deg)" : "rotate(0deg)" }}>
                  <Icon name="chevron" size={20} color="var(--blue)" />
                </div>
              </button>
              <div className={`faq-answer ${open === i ? "open" : ""}`}>
                <p style={{ fontSize: 15, color: "var(--gray-600)", lineHeight: 1.7, paddingRight: 40 }}>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── FINAL CTA ──────────────────────────────────────────────────────
const FinalCTA = () => {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} style={{ padding: "0 32px 100px" }} className="px-resp">
      <div style={{
        maxWidth: 1200, margin: "0 auto", borderRadius: 24, overflow: "hidden",
        background: "linear-gradient(135deg, #0b1c60 0%, #1a2d7a 50%, #3560e7 100%)",
        padding: "80px 60px", textAlign: "center", position: "relative",
        opacity: inView ? 1 : 0, animation: inView ? `fadeScale 0.8s ${SPRING_POP} forwards` : "none",
      }}>
        <div style={{
          position: "absolute", top: -60, right: -60, width: 240, height: 240,
          borderRadius: "50%", border: "1px solid rgba(145,175,239,0.12)",
        }} />
        <div style={{
          position: "absolute", bottom: -40, left: -40, width: 180, height: 180,
          borderRadius: "50%", border: "1px solid rgba(145,175,239,0.08)",
        }} />

        <h2 className="font-display" style={{
          fontSize: 52, color: "white", lineHeight: 1.05, marginBottom: 20, position: "relative",
          opacity: inView ? 1 : 0, animation: inView ? `clipRevealUp 1s ${SPRING} 0.15s forwards` : "none",
        }}>
          ENTRENA CON{" "}
          <span style={{ color: "var(--blue-mid)" }}>CRITERIO</span>
        </h2>
        <p style={{
          fontSize: 17, color: "rgba(255,255,255,0.65)", lineHeight: 1.7,
          maxWidth: 520, margin: "0 auto 32px", position: "relative",
        }}>
          Escríbenos para conocer tu caso, resolver tus dudas y encontrar el plan ideal para ti. Sin compromiso.
        </p>
        <div style={{ position: "relative", display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
          <a href={WA_URL_PLANS} target="_blank" rel="noopener noreferrer" style={{
            display: "inline-block",
            background: "white", color: "var(--navy)", border: "none",
            padding: "16px 40px", borderRadius: 10, fontSize: 15, fontWeight: 700,
            cursor: "pointer", transition: "all 0.3s",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            boxShadow: "0 4px 20px rgba(0,0,0,0.15)", textDecoration: "none",
          }}>
            Escríbenos por WhatsApp
          </a>
          <a href="#quiz" style={{
            display: "inline-block",
            background: "transparent", color: "white", border: "1.5px solid rgba(255,255,255,0.3)",
            padding: "15px 36px", borderRadius: 10, fontSize: 15, fontWeight: 700,
            cursor: "pointer", transition: "all 0.3s",
            fontFamily: "'Plus Jakarta Sans', sans-serif", textDecoration: "none",
          }}>
            Hacer el test de plan
          </a>
        </div>
      </div>
    </section>
  );
};

// ─── FLOATING WHATSAPP ──────────────────────────────────────────────
const FloatingWhatsApp = () => (
  <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="wa-float" aria-label="WhatsApp">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  </a>
);

// ─── FOOTER ─────────────────────────────────────────────────────────
const Footer = () => (
  <footer style={{ padding: "48px 32px", borderTop: "1px solid var(--gray-100)", background: "var(--white)" }} className="px-resp">
    <div style={{
      maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between",
      alignItems: "center", flexWrap: "wrap", gap: 16,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <img src={NEXA_LOGO_BLUE} alt="Nexa" style={{ height: 32, width: "auto", objectFit: "contain" }} />
      </div>
      <p style={{ fontSize: 13, color: "var(--gray-400)" }}>
        © 2026 Nexa — Entrenamiento, prevención y recuperación.
      </p>
    </div>
  </footer>
);

// ─── APP ────────────────────────────────────────────────────────────
export default function NexaLanding() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <HowWeWork />
      <ForWho />
      <PlanQuiz />
      <Plans />
      <Services />
      <HowToStart />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
