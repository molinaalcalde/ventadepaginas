import { ImageResponse } from "next/og";

export const alt =
  "KINETIC | Diseno Web Profesional con CRM y WhatsApp Integrado";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #1A1A2E 0%, #0F766E 100%)",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Logo badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              backgroundColor: "#E8422A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "24px",
              fontWeight: 800,
            }}
          >
            K
          </div>
          <span
            style={{
              color: "white",
              fontSize: "28px",
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            KINETIC
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            color: "white",
            fontSize: "56px",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.04em",
            maxWidth: "800px",
            marginBottom: "24px",
          }}
        >
          Tu web profesional con CRM y WhatsApp integrado
        </div>

        {/* Subtitle */}
        <div
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "24px",
            lineHeight: 1.5,
            maxWidth: "600px",
            marginBottom: "40px",
          }}
        >
          Lista en 14 dias. Santo Domingo, RD.
        </div>

        {/* Tags */}
        <div style={{ display: "flex", gap: "12px" }}>
          {["Web Premium", "CRM Integrado", "WhatsApp Business", "14 Dias"].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  backgroundColor: "rgba(255,255,255,0.15)",
                  color: "white",
                  padding: "8px 20px",
                  borderRadius: "999px",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                {tag}
              </div>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
