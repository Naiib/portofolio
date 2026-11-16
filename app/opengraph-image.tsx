import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Muhammad Naqib Muhtadi — UI/UX and Graphic Design Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex", flexDirection: "column", justifyContent: "space-between",
          width: "100%", height: "100%", padding: 64, color: "#eaeaea",
          background: "#0d1117", fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, color: "#14b8a6", fontSize: 18 }}>
          <span style={{ width: 10, height: 10, borderRadius: 10, background: "#14b8a6" }} />
          UI/UX &amp; GRAPHIC DESIGN
        </div>
        <div>
          <p style={{ margin: "0 0 16px", color: "#a2abb7", fontSize: 24 }}>Muhammad Naqib Muhtadi</p>
          <h1 style={{ margin: 0, color: "#eaeaea", fontSize: 72, lineHeight: 1.05, letterSpacing: "-0.05em" }}>
            Designing clear,<br />human digital experiences.
          </h1>
          <p style={{ margin: "24px 0 0", color: "#a2abb7", fontSize: 24 }}>Jakarta, Indonesia</p>
        </div>
        <div style={{ display: "flex", gap: 12, color: "#a2abb7", fontSize: 18 }}>
          {["UI/UX Design", "Visual Design", "UIN Jakarta"].map((item) => (
            <span key={item} style={{ padding: "10px 16px", border: "1px solid #29323d", borderRadius: 12 }}>
              {item}
            </span>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
