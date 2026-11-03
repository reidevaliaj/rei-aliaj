import { ImageResponse } from "next/og";

export const alt = "Rei Aliaj — AI Engineer & Automation Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        background: "#0c1112",
        color: "#f0f3ec",
        padding: "65px 75px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 19,
          color: "#a0acab",
        }}
      >
        <span>REI ALIAJ / AI ENGINEER</span>
        <span>REMOTE</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 88,
          letterSpacing: -5,
          lineHeight: 1.1,
          marginTop: 70,
        }}
      >
        <span>Engineer AI.</span>
        <span style={{ color: "#c5ef83" }}>Automate the work.</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "1px solid #293332",
          paddingTop: 27,
          marginTop: "auto",
          fontSize: 20,
          color: "#a0acab",
        }}
      >
        <span>PYTHON / LLM / RAG / VOICE AI / APIs</span>
        <span>rei-aliaj.com</span>
      </div>
    </div>,
    size,
  );
}
