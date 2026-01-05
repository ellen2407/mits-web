import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        id="hero"
        style={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
          padding: "2rem",
          textAlign: "center",
          flexDirection: "column",
        }}
      >
        <div style={{ maxWidth: "900px", width: "100%" }}>
          <h1 style={{
            fontSize: "clamp(32px, 6vw, 48px)",
            marginBottom: "24px",
            color: "#000"
          }}>
            Ihr Lebenswerk verdient eine glänzende Zukunft.
          </h1>
          <p style={{
            fontSize: "clamp(16px, 2.5vw, 20px)",
            lineHeight: 1.6,
            marginBottom: "40px",
            color: "#000"
          }}>
            Wir begleiten Sie Schritt für Schritt bei der Übergabe, sodass Ihre Arbeit langfristig Wirkung zeigt.
          </p>
          <Link href="#booking">
            <button style={{
              padding: "12px 24px",
              fontSize: "clamp(14px, 2vw, 18px)",
              backgroundColor: "#000",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer"
            }}>
              Jetzt Orientierungsgespräch vereinbaren
            </button>
          </Link>
        </div>
      </section>

      {/* ÜBER UNS */}
      <section
        id="about"
        style={{ padding: "40px 2rem", maxWidth: "900px", margin: "0 auto" }}
      >
        <h2 style={{ marginBottom: "16px", fontSize: "clamp(24px, 4vw, 28px)", fontWeight: "bold" }}>Über uns</h2>
        <p style={{ marginBottom: "16px" }}>
          Wir sind ein Familienunternehmen aus Bayern, gegründet 2022. Unser Team besteht aktuell aus drei Experten, die gemeinsam für eine erfolgreiche Unternehmensnachfolge stehen:
        </p>
        <ul style={{ marginLeft: "20px", lineHeight: 1.6, listStyleType: "disc" }}>
          <li>IHK-zertifizierte Berater für Unternehmensnachfolge</li>
          <li>Projektmanagement klassisch, agil & hybrid</li>
          <li>Prozessanalyse & -automatisierung: UIPath certified RPA Developer</li>
          <li>ISTQB Certified Advanced Level Testmanager</li>
        </ul>
      </section>

      {/* TEAM */}
      <section
        id="team"
        style={{ padding: "40px 2rem", maxWidth: "1200px", margin: "0 auto" }}
      >
        <h2 style={{ marginBottom: "40px", textAlign: "center", fontSize: "clamp(24px, 4vw, 28px)", fontWeight: "bold" }}>Team</h2>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "40px"
        }}>
          {[
            {
              name: "Heinz Rabauer",
              title: "M.Sc. Betriebswirtschaftslehre\nBerater für Unternehmensnachfolge & Finanzexperte",
              img: "/images/heinz_webseite.jpg",
            },
            {
              name: "Ellen Häfele",
              title: "B.A. Sozialwirtschaft\nBerater für Unternehmensnachfolge",
              img: "/images/ellen_webseite.jpg",
            },
            {
              name: "Maximilian",
              title: "B.Sc. Wirtschaftsinformatik\nProjektmanager & Softwaretester",
              img: "/images/max_webseite.jpg",
            },
          ].map((person) => (
            <div key={person.name} style={{
              textAlign: "center",
              width: "180px",
              flex: "1 1 180px", // macht die Breite flexibel auf kleinen Bildschirmen
              maxWidth: "220px"
            }}>
              <div style={{
                width: "180px",
                height: "180px",
                borderRadius: "50%",
                overflow: "hidden",
                margin: "0 auto 16px auto",
                position: "relative"
              }}>
                <Image
                  src={person.img}
                  alt={person.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h3>{person.name}</h3>
              <p style={{ whiteSpace: "pre-line" }}>{person.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ANGEBOT */}
      <section
        id="offer"
        style={{ padding: "80px 2rem", maxWidth: "900px", margin: "0 auto" }}
      >
        <h2 style={{ fontSize: "clamp(24px, 4vw, 28px)", fontWeight: "bold", marginBottom: "16px" }}>Angebot</h2>
        <p>
          Beschreibung deiner Begleitung und der Phasen der Unternehmensnachfolge.
        </p>
      </section>

      {/* TERMIN */}
      <section
        id="booking"
        style={{ padding: "80px 2rem", maxWidth: "900px", margin: "0 auto" }}
      >
        <h2 style={{ fontSize: "clamp(24px, 4vw, 28px)", fontWeight: "bold", marginBottom: "16px" }}>Termin buchen</h2>
        <p>Hier wird im nächsten Schritt Calendly eingebunden.</p>
      </section>
    </>
  );
}
