export default function HeroSection() {
  const stats = [
    { value: "3×", label: "Slower Spread" },
    { value: "+7 min", label: "Response Window" },
    { value: "−69%", label: "Burn Rate" },
    { value: "0 Toxins", label: "Eco Certified" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: "#06040e" }}
    >
      {/* Background orbs */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          top: "25%",
          left: "25%",
          width: "500px",
          height: "500px",
          background: "rgba(124,58,237,0.08)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          bottom: "33%",
          right: "25%",
          width: "400px",
          height: "400px",
          background: "rgba(167,139,250,0.05)",
          filter: "blur(80px)",
        }}
      />

      {/* Main content — centered, with pb-32 to leave room for pinned bar */}
      <div className="flex-1 flex flex-col items-center justify-center text-center max-w-3xl mx-auto px-6 pt-20 pb-32 relative z-10 w-full">
        {/* Headline */}
        <h1 className="font-black leading-[1.0] tracking-tight mb-8">
          <span
            className="block text-5xl sm:text-6xl lg:text-8xl text-[#f0ecff] animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            FIRE SPREADS
          </span>
          <span
            className="block text-5xl sm:text-6xl lg:text-8xl text-[#f0ecff] animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            IN SECONDS.
          </span>
          <span
            className="block text-4xl sm:text-5xl lg:text-6xl mt-3 text-ice-gradient animate-fade-in-up"
            style={{ animationDelay: "0.35s" }}
          >
            DNF BUYS TIME.
          </span>
        </h1>

        {/* Sub */}
        <p
          className="text-base mb-10 leading-relaxed max-w-md animate-fade-in-up"
          style={{ color: "#7a6880", animationDelay: "0.5s" }}
        >
          Germany-engineered proactive fire spread retardant — eco-certified, scalable, proven.
        </p>

        {/* CTAs centered */}
        <div
          className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-in-up"
          style={{ animationDelay: "0.65s" }}
        >
          <a href="#technology" className="btn-ice px-8 py-4 rounded-full text-sm font-bold">
            Explore Technology
          </a>
          <a href="#demonstrations" className="btn-outline-ice px-8 py-4 rounded-full text-sm">
            Watch Live Demo
          </a>
        </div>
      </div>

      {/* Pinned bottom stats bar */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10 grid grid-cols-2 md:grid-cols-4"
        style={{
          background: "rgba(8,4,18,0.9)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(124,58,237,0.2)",
        }}
      >
        {stats.map((s, i) => (
          <div
            key={s.label}
            className="py-5 px-6 text-center"
            style={{
              borderRight: i < stats.length - 1 ? "1px solid rgba(124,58,237,0.15)" : "none",
            }}
          >
            <div className="text-2xl font-black text-ice-gradient">{s.value}</div>
            <div className="text-xs mt-0.5" style={{ color: "#6a5880" }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
