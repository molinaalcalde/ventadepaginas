import { ImageResponse } from "next/og";
import { getPostBySlug, getAllPosts } from "@/lib/blog";

export const alt = "KINETIC Blog";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function OGImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const title = post?.title ?? "Blog KINETIC";
  const category = post?.category ?? "Blog";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #1A1A2E 0%, #2D2D3F 100%)",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Category badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "32px",
            }}
          >
            <div
              style={{
                backgroundColor: "#0F766E",
                color: "white",
                padding: "6px 16px",
                borderRadius: "999px",
                fontSize: "16px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              {category}
            </div>
          </div>

          {/* Title */}
          <div
            style={{
              color: "white",
              fontSize: "52px",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              maxWidth: "900px",
            }}
          >
            {title}
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                backgroundColor: "#E8422A",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "20px",
                fontWeight: 800,
              }}
            >
              K
            </div>
            <span
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: "20px",
                fontWeight: 600,
              }}
            >
              KINETIC Cloud &amp; Web
            </span>
          </div>
          <span
            style={{
              color: "rgba(255,255,255,0.4)",
              fontSize: "16px",
            }}
          >
            ventadepaginas.vercel.app/blog
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
