// app/components/HeroButton.tsx
"use client";

export default function HeroButton() {
  return (
    <a
      href="#booking"
      style={{
        display: "inline-block",
        padding: "14px 28px",
        border: "1px solid #000",
        background: "#000",
        color: "#fff",
        textDecoration: "none",
        fontWeight: 500,
        borderRadius: "4px",
        transition: "background 0.2s, color 0.2s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.background = "#fff";
        (e.currentTarget as HTMLAnchorElement).style.color = "#000";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.background = "#000";
        (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
      }}
    >
      Kostenloses Orientierungsgespräch
    </a>
  );
}
