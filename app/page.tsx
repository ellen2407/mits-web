export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        id="hero"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          borderBottom: "1px solid #eee",
        }}
      >
        <div style={{ maxWidth: "900px" }}>
          <h1 style={{ fontSize: "48px", marginBottom: "24px" }}>
            Unternehmensnachfolge mit Weitblick.
          </h1>

          <p style={{ fontSize: "20px", lineHeight: "1.6", marginBottom: "40px" }}>
            Wir begleiten Inhaber kleiner und mittelständischer Unternehmen
            dabei, ihr Lebenswerk geordnet zu übergeben – mit Klarheit,
            Struktur und Respekt vor dem, was aufgebaut wurde.
          </p>
        </div>
      </section>

      {/* ÜBER MICH */}
      <section
        id="about"
        style={{
          paddingTop: "120px",
          paddingBottom: "120px",
          maxWidth: "900px",
        }}
      >
        <h2>Über mich</h2>
        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
          Hier kommt deine persönliche Geschichte hinein – Haltung,
          Erfahrung und warum dir dieses Thema wichtig ist.
        </p>
      </section>

      {/* ANGEBOT */}
      <section
        id="offer"
        style={{
          paddingTop: "120px",
          paddingBottom: "120px",
          maxWidth: "900px",
        }}
      >
        <h2>Angebot</h2>
        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
          Beschreibung deiner Begleitung und der Phasen der
          Unternehmensnachfolge.
        </p>
      </section>

      {/* TERMIN */}
      <section
        id="booking"
        style={{
          paddingTop: "120px",
          paddingBottom: "120px",
          maxWidth: "900px",
        }}
      >
        <h2>Termin buchen</h2>
        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
          Hier wird im nächsten Schritt Calendly eingebunden.
        </p>
      </section>
    </>
  );
}
