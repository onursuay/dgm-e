"use client";

const benefits = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    metric: "+7 min",
    title: "Critical Time Advantage",
    desc: "DNF extends the window between ignition and critical fire behavior — giving people, systems and responders measurable additional minutes to act effectively.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    metric: "up to 3×",
    title: "Fire Spread Reduction",
    desc: "On treated surfaces, fire propagation slows up to 3× compared to untreated materials under equivalent conditions — independently verified.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    metric: "↑80%",
    title: "Safer Evacuation",
    desc: "Evacuation corridors stay open longer. Stairwells and exit pathways remain viable. The human cost of fire events is measurably reduced.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    metric: "−56%",
    title: "Radiant Heat Reduction",
    desc: "Radiant heat reaching adjacent untreated structures is reduced by up to 56%, limiting secondary ignitions and collateral structural damage.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    metric: "0",
    title: "Toxic Residue",
    desc: "DNF leaves zero toxic residue. The formula is biodegradable, non-accumulative and certified safe for soil, water and ecological contact zones.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    metric: "60–80%",
    title: "Asset Exposure Risk",
    desc: "Buildings, critical infrastructure, cultural heritage sites and industrial facilities maintain structural integrity significantly longer under fire threat.",
  },
];

export default function KeyBenefits() {
  return (
    <section
      id="sustainability"
      className="relative py-10 overflow-hidden"
      style={{ background: "#06040e" }}
    >
      {/* Subtle left border accent */}
      <div
        className="absolute left-0 top-0 bottom-0 w-px"
        style={{
          background:
            "linear-gradient(180deg, transparent, rgba(124,58,237,0.3) 30%, rgba(124,58,237,0.3) 70%, transparent)",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-[#a78bfa] mb-4">
            Why DNF
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#f0ecff] leading-tight mb-4">
            Measurable Impact.<br />
            <span className="text-ice-gradient">No Trade-Offs.</span>
          </h2>
          <p className="text-[#6a5880] text-lg max-w-lg leading-relaxed">
            Every metric is backed by independent laboratory testing and field demonstration data.
          </p>
        </div>

        {/* 3-column icon cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="rounded-2xl p-7 flex flex-col items-center text-center transition-all duration-200 group"
              style={{
                background: "#0a0614",
                border: "1px solid rgba(124,58,237,0.12)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(124,58,237,0.45)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(124,58,237,0.12)";
              }}
            >
              {/* Icon circle */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                style={{
                  background: "rgba(124,58,237,0.12)",
                  border: "1px solid rgba(124,58,237,0.25)",
                  color: "#a78bfa",
                }}
              >
                {b.icon}
              </div>

              {/* Metric */}
              <div className="text-4xl font-black text-ice-gradient mb-2">
                {b.metric}
              </div>

              {/* Title */}
              <h3
                className="text-sm font-bold mb-3"
                style={{ color: "#f0ecff" }}
              >
                {b.title}
              </h3>

              {/* Desc */}
              <p
                className="text-xs leading-relaxed"
                style={{ color: "#6a5880" }}
              >
                {b.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA row */}
        <div
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-5 py-6 border-t"
          style={{ borderColor: "rgba(124,58,237,0.12)" }}
        >
          <p className="text-sm text-[#6a5880]">
            Independent laboratory data available on request. Field demonstrations scheduled monthly.
          </p>
          <a href="#demonstrations" className="btn-ice px-6 py-3 rounded-full text-sm shrink-0">
            View Test Reports
          </a>
        </div>
      </div>
    </section>
  );
}
