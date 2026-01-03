"use client";

import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(true);

  const SIDEBAR_OPEN = 180;   // px
  const SIDEBAR_CLOSED = 60; // px
  const CONTENT_GAP = 16;    // ≈ 2 cm Abstand zur Sidebar

  const sidebarWidth = open ? SIDEBAR_OPEN : SIDEBAR_CLOSED;

  return (
    <html lang="de" style={{ scrollBehavior: "smooth" }}>
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          background: "#fff",
        }}
      >
        {/* Sidebar */}
        <aside
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: sidebarWidth,
            height: "100vh",
            padding: "24px 16px",
            boxSizing: "border-box",
            background: "#fff",
            borderRight: "1px solid #e5e5e5",
          }}
        >
          <button
            onClick={() => setOpen(!open)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "20px",
              marginBottom: "24px",
            }}
          >
            ☰
          </button>

          {open && (
            <nav>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  lineHeight: "2",
                }}
              >
                <li><a href="#hero" style={linkStyle}>Start</a></li>
                <li><a href="#about" style={linkStyle}>Über mich</a></li>
                <li><a href="#offer" style={linkStyle}>Angebot</a></li>
                <li><a href="#booking" style={linkStyle}>Termin buchen</a></li>
              </ul>
            </nav>
          )}
        </aside>

        {/* Content */}
        <main
          style={{
            marginLeft: sidebarWidth + CONTENT_GAP,
            padding: "64px 48px",
            boxSizing: "border-box",
          }}
        >
          {children}
        </main>
      </body>
    </html>
  );
}

const linkStyle: React.CSSProperties = {
  textDecoration: "none",
  color: "#000",
  display: "block",
};
