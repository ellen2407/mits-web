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
          padding: "2rem",
        }}
      >
        <div style={{ maxWidth: "900px" }}>
          <h1 style={{ fontSize: "48px", marginBottom: "24px" }}>
            Ihr Lebenswerk verdient eine glänzende Zukunft.
          </h1>
          <p style={{ fontSize: "20px", lineHeight: "1.6", marginBottom: "32px" }}>
            Wir begleiten Sie Schritt für Schritt bei der Übergabe, sodass Ihre Arbeit langfristig Wirkung zeigt.
          </p>
          <a
            href="#booking"
            style={{
              display: "inline-block",
              padding: "14px 28px",
              border: "1px solid #000",
              textDecoration: "none",
              color: "#000",
              fontWeight: 500,
            }}
          >
            Kostenloses Orientierungsgespräch
          </a>
        </div>
      </section>

      {/* ÜBER UNS */}
      <section
        id="about"
        style={{
          paddingTop: "120px",
          paddingBottom: "120px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2 style={{ marginBottom: "24px" }}>Über uns</h2>

        <p style={{ marginBottom: "16px" }}>
          Wir sind ein Familienunternehmen aus Bayern, gegründet 2022, mit aktuell 3 Mitarbeitern. 
          Unsere Mission: Inhaber bei der geordneten Unternehmensnachfolge begleiten und langfristig Wirkung sichern.
        </p>

        <h3 style={{ marginTop: "32px", marginBottom: "16px" }}>Firmenhistorie & Zertifikate</h3>
        <ul style={{ marginBottom: "32px" }}>
          <li>IHK-zertifizierte Berater für Unternehmensnachfolge</li>
          <li>Testmanagement ISTQB Certified Advanced Level Testmanager</li>
          <li>Testkoordinator ISTQB CTFL Agile Extension</li>
          <li>Softwaretestautomatisierung Certified Professional TOSCA</li>
          <li>Projektleitung/Projektmanagement klassisch, Scrum, Kanban, hybrid, agile</li>
          <li>Process Analyst/Manager/Automation UIPath Certified Professional RPA Developer</li>
        </ul>

        <h3 style={{ marginBottom: "24px" }}>Unser Team</h3>
        <div
          style={{
            display: "flex",
            gap: "32px",
            flexWrap: "wrap",
          }}
        >
          {/* Mitarbeiter 1 */}
          <div style={{ flex: "1 1 250px", textAlign: "center" }}>
            <div
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                background: "#eee",
                margin: "0 auto 16px",
              }}
            >
              {/* Platz für Bild Ellen */}
            </div>
            <h4>Ellen Häfele</h4>
            <p>B.A. Sozialwirtschaft, Beraterin für Unternehmensnachfolge</p>
          </div>

          {/* Mitarbeiter 2 */}
          <div style={{ flex: "1 1 250px", textAlign: "center" }}>
            <div
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                background: "#eee",
                margin: "0 auto 16px",
              }}
            >
              {/* Platz für Bild Maximilian */}
            </div>
            <h4>Maximilian</h4>
            <p>Projektmanager & Softwaretester, B.Sc. Wirtschaftsinformatik</p>
          </div>

          {/* Mitarbeiter 3 */}
          <div style={{ flex: "1 1 250px", textAlign: "center" }}>
            <div
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                background: "#eee",
                margin: "0 auto 16px",
              }}
            >
              {/* Platz für Bild Heinz */}
            </div>
            <h4>Heinz Rabauer</h4>
            <p>Berater Unternehmensnachfolge & Finanzexperte, M.Sc. Betriebswirtschaft</p>
          </div>
        </div>
      </section>

      {/* Angebot */}
      <section
        id="offer"
        style={{
          paddingTop: "120px",
          paddingBottom: "120px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h2>Angebot</h2>
        <p>
          Beschreibung deiner Begleitung und der Phasen der Unternehmensnachfolge.
        </p>
      </section>

      {/* Termin buchen */}
      <section
        id="booking"
        style={{
          paddingTop: "120px",
          paddingBottom: "120px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h2>Termin buchen</h2>
        <p>
          Hier wird im nächsten Schritt Calendly eingebunden.
        </p>
      </section>
    </>
  );
}
