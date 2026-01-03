export default function Home() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      
      {/* Sidebar */}
      <aside
        style={{
          width: "240px",
          position: "fixed",
          left: 0,
          top: 0,
          height: "100vh",
          padding: "24px",
          borderRight: "1px solid #ddd",
          background: "#fff"
        }}
      >
        <nav>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
            <li><a href="#hero">Start</a></li>
            <li><a href="#about">Über mich</a></li>
            <li><a href="#offer">Angebot</a></li>
            <li><a href="#booking">Termin buchen</a></li>
          </ul>
        </nav>
      </aside>

      {/* Content */}
      <main
        style={{
          marginLeft: "240px",
          padding: "80px 64px",
          width: "100%"
        }}
      >

        {/* Hero */}
        <section
          id="hero"
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center"
          }}
        >
          <div style={{ maxWidth: "900px" }}>
            <h1 style={{ fontSize: "48px", marginBottom: "24px" }}>
              Unternehmensnachfolge mit Weitblick.
            </h1>

            <p style={{ fontSize: "20px", lineHeight: "1.6", marginBottom: "40px" }}>
              Ich begleite Inhaber kleiner und mittelständischer Unternehmen
              dabei, ihr Lebenswerk geordnet zu übergeben – mit Klarheit,
              Struktur und Respekt vor dem, was aufgebaut wurde.
            </p>

            <a
              href="#booking"
              style={{
                display: "inline-block",
                padding: "14px 28px",
                border: "1px solid #000",
                textDecoration: "none",
                color: "#000",
                fontWeight: 500
              }}
            >
              Erstgespräch vereinbaren
            </a>
          </div>
        </section>

        {/* Über mich */}
        <section id="about" style={{ minHeight: "100vh", paddingTop: "120px" }}>
          <h2>Über mich</h2>
          <p>
            Hier kommt deine persönliche Geschichte hinein: Haltung, Erfahrung
            und warum dir dieses Thema wichtig ist.
          </p>
        </section>

        {/* Angebot */}
        <section id="offer" style={{ minHeight: "100vh", paddingTop: "120px" }}>
          <h2>Angebot</h2>
          <p>
            Beschreibung deiner Begleitung, der einzelnen Phasen der
            Unternehmensnachfolge und der Sicherheit für alle Beteiligten.
          </p>
        </section>

        {/* Termin buchen */}
        <section id="booking" style={{ minHeight: "100vh", paddingTop: "120px" }}>
          <h2>Termin buchen</h2>
          <p>
            Hier wird im nächsten Schritt Calendly eingebunden.
          </p>
        </section>

      </main>
    </div>
  );
}
