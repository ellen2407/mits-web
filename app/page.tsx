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
            <li><a href="#about">Über uns</a></li>
            <li><a href="#offer">Angebot</a></li>
            <li><a href="#booking">Termin buchen</a></li>
          </ul>
        </nav>
      </aside>

      {/* Content */}
      <main style={{ marginLeft: "240px", padding: "40px", width: "100%" }}>
        
        <section id="hero" style={{ minHeight: "100vh" }}>
          <h1>Hero Section</h1>
          <p>Hier kommt der erste Eindruck rein.</p>
        </section>

        <section id="about" style={{ minHeight: "100vh" }}>
          <h2>Über uns</h2>
          <p>Persönliche Story.</p>
        </section>

        <section id="offer" style={{ minHeight: "100vh" }}>
          <h2>Angebot</h2>
          <p>Was du konkret anbietest.</p>
        </section>

        <section id="booking" style={{ minHeight: "100vh" }}>
          <h2>Termin buchen</h2>
          <p>Hier kommt später Calendly rein.</p>
        </section>

      </main>
    </div>
  );
}
