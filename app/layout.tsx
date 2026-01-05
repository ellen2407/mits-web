import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "MITS Web",
  description: "Unternehmensnachfolge",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body style={{
        display: "flex",
        minHeight: "100vh",
        margin: 0,
        backgroundColor: "#fff",
        color: "#000",
        fontFamily: "Arial, sans-serif"
      }}>
        {/* Sidebar */}
        <nav
          style={{
            width: "200px",
            backgroundColor: "#fff",
            borderRight: "1px solid #eee",
            padding: "20px",
            boxSizing: "border-box",
            position: "fixed",
            top: 0,
            left: 0,
            height: "100vh",
          }}
        >
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li style={{ marginBottom: "16px" }}><Link href="/#hero">Home</Link></li>
            <li style={{ marginBottom: "16px" }}><Link href="/#about">Über uns</Link></li>
            <li style={{ marginBottom: "16px" }}><Link href="/#team">Team</Link></li>
            <li style={{ marginBottom: "16px" }}><Link href="/#offer">Angebot</Link></li>
            <li style={{ marginBottom: "16px" }}><Link href="/#booking">Termin</Link></li>
          </ul>
        </nav>

        {/* Main Content */}
        <main style={{ marginLeft: "200px", flex: 1, padding: "20px", boxSizing: "border-box" }}>
          {children}
        </main>
      </body>
    </html>
  );
}
