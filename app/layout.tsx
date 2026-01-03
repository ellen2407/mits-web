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
      <body
        style={{
          margin: 0,
          display: "flex",
          minHeight: "100vh",
          scrollBehavior: "smooth", // Smooth scroll beim Klick
        }}
      >
        {/* Sidebar */}
        <aside
          style={{
            width: open ? "220px" : "60px",
            background: "#111",
            color: "#fff",
            padding: "1rem",
            transition: "width 0.2s",
            position: "fixed",
            height: "100vh",
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
                <li style={{ marginBottom: "0.5rem" }}>
                  <a href="#willkommen">Willkommen</a>
                </li>
                <li style={{ marginBottom: "0.5rem" }}>
                  <a href="#ueber-uns">Über uns</a>
                </li>
                <li style={{ marginBottom: "0.5rem" }}>
                  <a href="#angebote">Angebote</a>
                </li>
                <li style={{ marginBottom: "0.5rem" }}>
                  <a href="#termin-buchen">Termin buchen</a>
                </li>
                <li style={{ marginBottom: "0.5rem" }}>
                  <a href="#kontakt">Kontakt</a>
                </li>
              </ul>
            </nav>
          )}
        </aside>

        {/* Content */}
        <main
          style={{
            flex: 1,
            marginLeft: open ? "220px" : "60px",
            padding: "2rem",
          }}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
