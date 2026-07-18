import { ImageResponse } from "next/og";

export const alt = "Alivio Search Partners — Executive search and talent advisory for the Americas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0c1b2a",
          padding: "72px 80px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(250,248,244,0.25)",
            paddingTop: 18,
            color: "#a9b2ba",
            fontSize: 22,
            letterSpacing: 5,
            textTransform: "uppercase",
          }}
        >
          <span>Retained Executive Search</span>
          <span>New York · Miami · Bogotá</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#faf8f4", fontSize: 110, fontWeight: 600, letterSpacing: 2 }}>
            ALIVIO
          </div>
          <div
            style={{
              color: "#d29a82",
              fontSize: 34,
              letterSpacing: 12,
              textTransform: "uppercase",
              marginTop: 8,
            }}
          >
            Search Partners
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(250,248,244,0.25)",
            paddingTop: 18,
            color: "#a9b2ba",
            fontSize: 22,
            letterSpacing: 3,
          }}
        >
          <span>Healthcare & Life Sciences · Technology · Nearshore LATAM</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
