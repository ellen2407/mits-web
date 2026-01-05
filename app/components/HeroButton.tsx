import Link from "next/link";

export default function HeroButton() {
  return (
    <Link href="/quiz">
      <button
        style={{
          display: "inline-block",
          padding: "14px 28px",
          border: "1px solid #000",
          borderRadius: "6px",
          fontWeight: 500,
          cursor: "pointer",
        }}
      >
        Finde in 3 Fragen heraus, ob du mit uns zusammenarbeiten kannst
      </button>
    </Link>
  );
}
