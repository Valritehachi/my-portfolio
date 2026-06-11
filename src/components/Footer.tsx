export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.12)",
        padding: "1.25rem 5%",
        backgroundColor: "#000",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <p style={{ color: "#8eaf8e", fontSize: "0.85em", margin: 0 }}>
        Designed and built by{" "}
        <a
          href="https://github.com/Valritehachi"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#8eaf8e" }}
        >
          Valrite Hamilton
        </a>{" "}
        &copy; {year}
      </p>
    </footer>
  );
}
