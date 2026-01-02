"use client";

import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(true);

  return (
    <html lang="de">
      <body style={{ margin: 0, display: "flex", minHeight: "100vh" }}>
        {/* Sidebar */}
        <aside
          style={{
            width: open ? "220px" : "60px",
            background: "#111",
            color: "#fff",
            padding: "1rem",
            transition: "width 0.2s",
          }}
        >
          <button
            onClick={() => setOpen(!open)}
            style={{
              background: "none",
              color: "#fff",
              border: "none",
              fontSize: "1.2rem",
              cursor: "pointer",
              marginBottom: "1rem",
            }}
          >
            ☰
          </button>

          {open && (
            <nav>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li><a href="/willkommen">Willkommen</a></li>
                <li><a href="/ueber-uns">Über uns</a></li>
                <li><a href="/angebote">Angebote</a></li>
                <li><a href="/termin-buchen">Termin buchen</a></li>
                <li><a href="/kontakt">Kontakt</a></li>
              </ul>
            </nav>
          )}
        </aside>

        {/* Content */}
        <main style={{ flex: 1, padding: "2rem" }}>
          {children}
        </main>
      </body>
    </html>
  );
}
