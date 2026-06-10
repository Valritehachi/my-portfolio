export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen"
      style={{ paddingTop: "15%", paddingLeft: "6%", paddingRight: "4%" }}
    >
      {/* "Hi, I'm Valrite" + waving hand */}
      <div className="flex items-start bg-black relative z-10">
        <h1
          className="text-white font-bold m-0"
          style={{ fontSize: "4em", lineHeight: 1.15 }}
        >
          Hi, I&apos;m Valrite
        </h1>
        <span
          style={{
            fontSize: "3em",
            display: "inline-block",
            animation: "wave 3s linear 0.5s infinite",
            transformOrigin: "70% 70%",
            paddingLeft: "14px",
            lineHeight: 1.3,
          }}
        >
          👋
        </span>
      </div>

      {/* "A QA Automation Engineer." — drops in with green colour */}
      <p
        className="hero-drop font-bold m-0"
        style={{ fontSize: "4em", lineHeight: 1.2 }}
      >
        A QA Automation Engineer.
      </p>

      {/* Small subtitle */}
      <p
        className="font-bold"
        style={{ color: "#8eaf8e", fontSize: "1em", paddingTop: "20px" }}
      >
        I build intelligent testing platforms and automated test suites.
      </p>
    </section>
  );
}
