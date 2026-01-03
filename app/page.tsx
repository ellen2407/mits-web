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
          background: "#fff",
        }}
      >
        <nav>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
            <li><a href="#hero">Start</a></li>
            <li><a href="#about">Über uns</a></li>
            <li><a href="#offer">Angebot</a></li>
            <li><a href="#booking">Termin buchen</a></li>
          </ul>
        </nav>
      </aside>

      {/* Content */}
      <main style={{ marginLeft: "240px", padding: "40px", width: "100%" }}>
        
        {/* HERO */}
        <section
          id="hero"
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              maxWidth: "900px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "48px",
              width: "100%",
            }}
          >
            <div>
              <h1>Hero Headline</h1>
              <p>Kurze Erklärung, worum es hier geht.</p>
              <button>Termin buchen</button>
            </div>

            <div
              style={{
                background: "#eee",
                height: "300px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Bild / Visual
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" style={{ minHeight: "100vh" }}>
          <h2>Über uns</h2>
          <p>Persönliche Story.</p>
        </section>

        {/* OFFER */}
        <section id="offer" style={{ minHeight: "100vh" }}>
          <h2>Angebot</h2>
          <p>Was du konkret anbietest.</p>
        </section>

        {/* BOOKING */}
        <section id="booking" style={{ minHeight: "100vh" }}>
          <h2>Termin buchen</h2>
          <p>Hier kommt später Calendly rein.</p>
        </section>

      </main>
    </div>
  );
}
