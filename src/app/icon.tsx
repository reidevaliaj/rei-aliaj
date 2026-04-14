import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at 30% 25%, rgba(228,232,241,0.3), transparent 45%), linear-gradient(180deg, #1c1d25 0%, #111218 100%)",
          borderRadius: "18px",
          color: "#f5f1e8",
          fontSize: 36,
          fontWeight: 700,
          letterSpacing: "-0.08em",
        }}
      >
        R
      </div>
    ),
    size,
  );
}
