import { ImageResponse } from "next/og";

export const alt = "Vigimoy — Muhamad Rizqi Akbar, Front-end Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", padding: "68px 80px", background: "linear-gradient(135deg, #073d46, #030607 80%)", color: "white" }}>
        <div style={{ display: "flex", fontSize: 32, color: "#80e9f6" }}>Vigimoy</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 68, fontWeight: 700 }}>Front-end Developer</div>
          <div style={{ fontSize: 32, color: "#c3d5d8" }}>Muhamad Rizqi Akbar</div>
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#80e9f6" }}>React · Next.js · TypeScript</div>
      </div>
    ),
    size,
  );
}
