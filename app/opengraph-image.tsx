import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Muhammad Naqib Muhtadi — Data Analyst Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#0a0f1e",
          fontFamily: "sans-serif",
          padding: "60px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid dots bg */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(45,90,255,0.2) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Gradient glow */}
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -200,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(45,90,255,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Content */}
        <div style={{ position: "relative", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
          {/* Top: status */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#34d399" }} />
            <span style={{ color: "#34d399", fontSize: 16, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Available for Data Analyst Roles
            </span>
          </div>

          {/* Middle: name + headline */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 20 }}>
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: 18,
                  background: "linear-gradient(135deg, #1a3ef5, #14b8a6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 36,
                  fontWeight: 900,
                  color: "white",
                }}
              >
                N
              </div>
              <div>
                <div style={{ color: "#94a3b8", fontSize: 18, marginBottom: 4 }}>Muhammad Naqib Muhtadi</div>
              </div>
            </div>

            <h1
              style={{
                fontSize: 64,
                fontWeight: 900,
                color: "white",
                lineHeight: 1.05,
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              Data Analyst
            </h1>
            <p
              style={{
                fontSize: 28,
                color: "#64748b",
                marginTop: 12,
                fontWeight: 400,
                lineHeight: 1.4,
              }}
            >
              Transforming Raw Data into Strategic Business Insights
            </p>
          </div>

          {/* Bottom: KPI badges + tools */}
          <div style={{ display: "flex", gap: 16, alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", gap: 12 }}>
              {[
                { n: "95K+", label: "Customers" },
                { n: "R$15.8M", label: "Revenue" },
                { n: "99K", label: "Orders" },
              ].map((s) => (
                <div
                  key={s.n}
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 12,
                    padding: "12px 20px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <span style={{ color: "white", fontSize: 22, fontWeight: 800 }}>{s.n}</span>
                  <span style={{ color: "#64748b", fontSize: 13 }}>{s.label}</span>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              {["Python", "SQL", "Power BI"].map((t) => (
                <span
                  key={t}
                  style={{
                    background: "rgba(26,62,245,0.2)",
                    border: "1px solid rgba(45,90,255,0.3)",
                    borderRadius: 8,
                    padding: "8px 16px",
                    color: "#93afff",
                    fontSize: 14,
                    fontWeight: 600,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
