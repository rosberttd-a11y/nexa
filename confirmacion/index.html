import { useEffect, useState } from "react";

// ─── CONSTANTS ──────────────────────────────────────────────────────
const WHATSAPP_NUMBER = "584220430323";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola! Soy inscrito de Nexa Origen y quiero enviar mi comprobante de pago 📱")}`;

const PAYMENT_DATA = {
  banco: "Banesco (0134)",
  telefono: "0412-8814813",
  cedula: "V-30.144.520",
};

const PLANS = [
  { name: "Nexa Base", price: "50" },
  { name: "Nexa Control", price: "75" },
  { name: "Nexa Proceso", price: "95" },
];

function CopyRow({ label, value, copyValue, icon }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(copyValue);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Fallback for older browsers
      const el = document.createElement("textarea");
      el.value = copyValue;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }
  };

  return (
    <div
      onClick={handleCopy}
      style={{
        display: "flex", alignItems: "center", gap: 14,
        padding: "12px 16px", borderRadius: 10,
        background: copied ? "rgba(53,96,231,0.1)" : "rgba(255,255,255,0.03)",
        border: copied ? "1px solid rgba(53,96,231,0.3)" : "1px solid rgba(145,175,239,0.06)",
        cursor: "pointer",
        transition: "all 0.25s ease",
        userSelect: "none",
      }}
    >
      <span style={{ fontSize: 18 }}>{icon}</span>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, marginBottom: 2 }}>
          {label}
        </div>
        <div style={{ fontSize: 15, color: "white", fontWeight: 600 }}>
          {value}
        </div>
      </div>
      <div style={{
        display: "flex", alignItems: "center", gap: 4,
        fontSize: 11, fontWeight: 600, color: copied ? "#91afef" : "rgba(255,255,255,0.25)",
        transition: "color 0.25s ease",
        flexShrink: 0,
      }}>
        {copied ? (
          <>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Copiado
          </>
        ) : (
          <>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
            Copiar
          </>
        )}
      </div>
    </div>
  );
}

export default function Gracias() {
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
        --gray-400: #7b8bb5;
        --gray-600: #4a5578;
      }
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      html { scroll-behavior: smooth; }
      body {
        font-family: 'Plus Jakarta Sans', sans-serif;
        color: var(--navy);
        background: linear-gradient(180deg, #060e2e 0%, #0b1c60 40%, #0f2050 100%);
        min-height: 100vh;
        overflow-x: hidden;
      }
      .font-display { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.02em; }

      @keyframes fadeUp {
        0% { opacity: 0; transform: translateY(20px); }
        60% { opacity: 1; transform: translateY(-3px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      @keyframes fadeScale {
        0% { opacity: 0; transform: scale(0.92) translateY(14px); }
        60% { opacity: 1; transform: scale(1.015) translateY(-2px); }
        100% { opacity: 1; transform: scale(1) translateY(0); }
      }
      @keyframes clipRevealUp {
        0% { clip-path: inset(100% 0 0 0); opacity: 0; transform: translateY(12px); }
        100% { clip-path: inset(0 0 0 0); opacity: 1; transform: translateY(0); }
      }
      @keyframes pulse-glow {
        0%, 100% { box-shadow: 0 0 20px rgba(37, 211, 102, 0.2); }
        50% { box-shadow: 0 0 35px rgba(37, 211, 102, 0.4); }
      }

      .whatsapp-btn {
        display: inline-flex; align-items: center; gap: 10px;
        background: #25D366; color: white;
        padding: 16px 36px; border-radius: 12px;
        font-size: 16px; font-weight: 700;
        text-decoration: none;
        font-family: 'Plus Jakarta Sans', sans-serif;
        transition: all 0.3s cubic-bezier(0.22, 1.2, 0.36, 1);
        animation: pulse-glow 2.5s ease-in-out infinite;
      }
      .whatsapp-btn:hover {
        transform: translateY(-3px) scale(1.02);
        box-shadow: 0 8px 30px rgba(37, 211, 102, 0.4);
      }

      @media (max-width: 768px) {
        .gracias-container { padding: 40px 20px !important; }
        .gracias-title { font-size: 40px !important; }
        .gracias-card { padding: 28px 24px !important; }
        .plans-row { flex-direction: column !important; }
      }
    `;
    document.head.appendChild(style);

    document.title = "¡Inscripción recibida! — Nexa Origen";

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(style);
    };
  }, []);

  const spring = "cubic-bezier(0.22, 1.2, 0.36, 1)";

  return (
    <div className="gracias-container" style={{
      minHeight: "100vh",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      padding: "60px 32px",
      position: "relative",
    }}>
      {/* Decorative background elements */}
      <div style={{
        position: "absolute", top: "10%", right: "10%",
        width: 300, height: 300, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(53,96,231,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "15%", left: "5%",
        width: 200, height: 200, borderRadius: "50%",
        border: "1px solid rgba(145,175,239,0.06)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 580, width: "100%", textAlign: "center", position: "relative" }}>

        {/* Checkmark icon */}
        <div style={{
          width: 72, height: 72, borderRadius: "50%",
          background: "linear-gradient(135deg, rgba(53,96,231,0.25), rgba(145,175,239,0.12))",
          border: "2px solid rgba(145,175,239,0.2)",
          display: "flex", alignItems: "center", justifyContent: "center",
          margin: "0 auto 28px",
          opacity: 0, animation: `fadeScale 0.8s ${spring} 0.1s forwards`,
        }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#91afef" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        {/* Title */}
        <h1 className="font-display gracias-title" style={{
          fontSize: 52, color: "white", lineHeight: 1.05, marginBottom: 12,
          opacity: 0, animation: `clipRevealUp 1s ${spring} 0.25s forwards`,
        }}>
          ¡INSCRIPCIÓN RECIBIDA!
        </h1>

        <p style={{
          fontSize: 17, color: "rgba(255,255,255,0.5)", lineHeight: 1.7,
          marginBottom: 40,
          opacity: 0, animation: `fadeUp 0.8s ${spring} 0.45s forwards`,
        }}>
          Ya estás un paso más cerca de ser parte de <strong style={{ color: "var(--blue-mid)" }}>Nexa Origen</strong>. 
          Para confirmar tu cupo, realiza el pago y envíanos el comprobante.
        </p>

        {/* Payment card */}
        <div className="gracias-card" style={{
          background: "rgba(255,255,255,0.04)",
          backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(145,175,239,0.12)",
          borderRadius: 20, padding: "36px 32px",
          textAlign: "left", marginBottom: 24,
          opacity: 0, animation: `fadeScale 0.8s ${spring} 0.6s forwards`,
        }}>
          <h2 style={{
            fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2,
            color: "var(--blue-mid)", marginBottom: 24, textAlign: "center",
          }}>
            Datos para Pago Móvil
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 28 }}>
            {[
              { label: "Banco", value: PAYMENT_DATA.banco, copyValue: "0134", icon: "🏦" },
              { label: "Teléfono", value: PAYMENT_DATA.telefono, copyValue: "04128814813", icon: "📱" },
              { label: "Cédula", value: PAYMENT_DATA.cedula, copyValue: "30144520", icon: "🪪" },
            ].map((item, i) => (
              <CopyRow key={i} {...item} />
            ))}
          </div>

          {/* Plan prices */}
          <div style={{
            padding: "16px 0", borderTop: "1px solid rgba(145,175,239,0.08)",
          }}>
            <p style={{
              fontSize: 12, color: "rgba(255,255,255,0.35)", fontWeight: 600,
              textTransform: "uppercase", letterSpacing: 1, marginBottom: 14, textAlign: "center",
            }}>
              Monto según tu plan (tasa BCV)
            </p>
            <div className="plans-row" style={{ display: "flex", gap: 12, justifyContent: "center" }}>
              {PLANS.map((p, i) => (
                <div key={i} style={{
                  flex: 1, textAlign: "center", padding: "12px 8px",
                  borderRadius: 10,
                  background: i === 1 ? "rgba(53,96,231,0.15)" : "rgba(255,255,255,0.02)",
                  border: i === 1 ? "1px solid rgba(53,96,231,0.3)" : "1px solid rgba(145,175,239,0.06)",
                }}>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", fontWeight: 600, marginBottom: 4 }}>
                    {p.name}
                  </div>
                  <div className="font-display" style={{ fontSize: 28, color: "white" }}>
                    ${p.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div style={{
          opacity: 0, animation: `fadeUp 0.8s ${spring} 0.8s forwards`,
          marginBottom: 20,
        }}>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Enviar comprobante por WhatsApp
          </a>
        </div>

        {/* Fisioterapia / Recovery note */}
        <div style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(145,175,239,0.08)",
          borderRadius: 14, padding: "20px 24px",
          marginBottom: 24, textAlign: "center",
          opacity: 0, animation: `fadeUp 0.8s ${spring} 0.9s forwards`,
        }}>
          <p style={{
            fontSize: 14, color: "rgba(255,255,255,0.45)", lineHeight: 1.7,
          }}>
            <strong style={{ color: "rgba(255,255,255,0.65)" }}>¿Te interesa una sesión de fisioterapia o Nexa Recovery?</strong><br />
            Escríbenos directamente por WhatsApp para que podamos conocer tu caso y coordinar la atención que necesitas.
          </p>
          <a href="https://wa.me/584220430323?text=Hola!%20Me%20interesa%20una%20sesión%20de%20fisioterapia%20%2F%20recovery%20en%20Nexa.%20Me%20gustaría%20recibir%20más%20información."
            target="_blank" rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              marginTop: 12, fontSize: 13, fontWeight: 600,
              color: "var(--blue-mid)", textDecoration: "none",
              transition: "opacity 0.3s",
            }}
            onMouseEnter={(e) => e.target.style.opacity = 0.7}
            onMouseLeave={(e) => e.target.style.opacity = 1}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Consultar por fisioterapia o recovery →
          </a>
        </div>

        <p style={{
          fontSize: 13, color: "rgba(255,255,255,0.3)", lineHeight: 1.6,
          opacity: 0, animation: `fadeUp 0.7s ${spring} 1.05s forwards`,
        }}>
          Te confirmamos en menos de 24 horas.<br />
          ¡Nos vemos el <strong style={{ color: "var(--blue-mid)" }}>7 de marzo</strong> en la inauguración!
        </p>

        {/* Back to landing link */}
        <div style={{
          marginTop: 40,
          opacity: 0, animation: `fadeUp 0.7s ${spring} 1.2s forwards`,
        }}>
          <a href="/" style={{
            fontSize: 13, color: "rgba(145,175,239,0.5)", textDecoration: "none",
            transition: "color 0.3s",
          }}
          onMouseEnter={(e) => e.target.style.color = "var(--blue-mid)"}
          onMouseLeave={(e) => e.target.style.color = "rgba(145,175,239,0.5)"}
          >
            ← Volver a Nexa
          </a>
        </div>
      </div>
    </div>
  );
}
