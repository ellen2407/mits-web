import Image from "next/image";

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
          justifyContent: "center",
          backgroundColor: "#f5f5f5",
          borderBottom: "1px solid #eee",
          padding: "0 2rem",
        }}
      >
        <div style={{ maxWidth: "900px", textAlign: "center" }}>
          <h1 style={{ fontSize: "48px", marginBottom: "24px" }}>
            Ihr Lebenswerk verdient eine glänzende Zukunft.
          </h1>
          <p style={{ fontSize: "20px", lineHeight: 1.6, marginBottom: "40px" }}>
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
              borderRadius: "6px",
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
          padding: "40px 2rem 20px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h2 style={{ marginBottom: "16px" }}>Über uns</h2>
        <p style={{ marginBottom: "16px" }}>
          Wir sind ein Familienunternehmen aus Bayern, gegründet 2022. Unser Team besteht aktuell aus drei Experten, die gemeinsam für eine erfolgreiche Unternehmensnachfolge stehen:
        </p>
        <ul style={{ marginLeft: "20px", lineHeight: 1.6 }}>
          <li>IHK-zertifizierte Berater für Unternehmensnachfolge</li>
          <li>ISTQB Certified Advanced Level Testmanager</li>
          <li>Certified Professional TOSCA</li>
          <li>Projektmanagement klassisch, agil & hybrid</li>
          <li>UIPath certified RPA Developer</li>
        </ul>
      </section>

      {/* TEAM */}
      <section
        id="team"
        style={{
          padding: "20px 2rem 80px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2 style={{ marginBottom: "40px", textAlign: "center" }}>
          Unser Team
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            gap: "40px",
          }}
        >
          {/* Heinz */}
          <div style={{ textAlign: "center", maxWidth: "220px" }}>
            <Image
              src="/images/heinz_webseite.jpg"
              alt="Heinz Rabauer"
              width={180}
              height={180}
              style={{
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: "16px",
              }}
            />
            <h3 style={{ marginBottom: "8px" }}>Heinz Rabauer</h3>
            <p style={{ margin: 0 }}>
              M.Sc. Betriebswirtschaftslehre<br />
              Berater für Unternehmensnachfolge & Finanzexperte
            </p>
          </div>

          {/* Ellen */}
          <div style={{ textAlign: "center", maxWidth: "220px" }}>
            <Image
              src="/images/ellen_webseite.jpg"
              alt="Ellen Häfele"
              width={180}
              height={180}
              style={{
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: "16px",
              }}
            />
            <h3 style={{ marginBottom: "8px" }}>Ellen Häfele</h3>
            <p style={{ margin: 0 }}>
              B.A. Sozialwirtschaft<br />
              Berater für Unternehmensnachfolge
            </p>
          </div>

          {/* Max */}
          <div style={{ textAlign: "center", maxWidth: "220px" }}>
            <Image
              src="/images/max_webseite.jpg"
              alt="Maximilian"
              width={180}
              height={180}
              style={{
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: "16px",
              }}
            />
            <h3 style={{ marginBottom: "8px" }}>Maximilian</h3>
            <p style={{ margin: 0 }}>
              B.Sc. Wirtschaftsinformatik<br />
              Projektmanager & Softwaretester
            </p>
          </div>
        </div>
      </section>

      {/* ANGEBOT */}
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

      {/* TERMIN */}
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
        <p>Hier wird im nächsten Schritt Calendly eingebunden.</p>
      </section>
    </>
  );
}
