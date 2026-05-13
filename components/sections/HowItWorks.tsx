"use client";
import { useState } from "react";

const steps = [
  {
    phase: "01",
    title: "Apply",
    sub: "Surface Treatment",
    desc: "DNF is applied to vulnerable surfaces — wood, vegetation, fabric, building facades — via spray, brush, or integrated sprinkler systems. Quick, scalable, compatible with standard equipment.",
  },
  {
    phase: "02",
    title: "Activate",
    sub: "Thermal Trigger",
    desc: "When heat or flame contacts DNF-treated surfaces, the formula activates. A thermal barrier layer forms instantly, interrupting the heat transfer process that enables fire to spread.",
  },
  {
    phase: "03",
    title: "Slow Spread",
    sub: "Propagation Reduction",
    desc: "Fire propagation speed is dramatically reduced on treated surfaces. The fire cannot spread at its natural rate — buying measurable minutes of protected time.",
  },
  {
    phase: "04",
    title: "Reduce Heat",
    sub: "Thermal Attenuation",
    desc: "Radiant heat reaching untreated adjacent materials drops by up to 56%, limiting secondary ignitions and structural damage from heat alone.",
  },
  {
    phase: "05",
    title: "Support Response",
    sub: "Emergency Window",
    desc: "Fire departments gain 5–10 extra minutes to arrive, establish perimeters, and begin targeted suppression under more controlled conditions.",
  },
  {
    phase: "06",
    title: "Protect Assets",
    sub: "Structural & Life Safety",
    desc: "People evacuate safely. Buildings hold. Nature survives. Cultural heritage preserved. Industrial continuity maintained. DNF buys time to act effectively.",
  },
];

export default function HowItWorks() {
  const [open, setOpen] = useState(0);

  return (
    <section
      className="relative py-10 overflow-hidden"
      style={{ background: "#06040e" }}
    >
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-[#a78bfa] mb-4">
            How DNF Works
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#f0ecff] leading-tight">
            Six Steps.<br />
            <span className="text-ice-gradient">One Mission.</span>
          </h2>
        </div>

        {/* Accordion steps */}
        <div className="max-w-2xl">
          {steps.map((step, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="transition-colors"
                style={{
                  borderBottom: "1px solid rgba(124,58,237,0.15)",
                  borderLeft: isOpen ? "2px solid #7c3aed" : "2px solid transparent",
                  background: isOpen ? "rgba(124,58,237,0.05)" : "transparent",
                  paddingLeft: isOpen ? "1rem" : "0",
                  transition: "background 0.2s, border-color 0.2s, padding 0.2s",
                }}
              >
                {/* Clickable header row */}
                <button
                  className="w-full flex items-center gap-4 py-5 text-left"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  {/* Number */}
                  <span
                    className="text-sm font-black w-12 shrink-0"
                    style={{ color: "#a78bfa" }}
                  >
                    {step.phase}
                  </span>

                  {/* Title */}
                  <span
                    className="text-base font-bold flex-1"
                    style={{ color: "#f0ecff" }}
                  >
                    {step.title}
                  </span>

                  {/* Toggle icon */}
                  <span
                    className="text-xl font-bold shrink-0 leading-none"
                    style={{ color: "#7c3aed" }}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Expandable content */}
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isOpen ? "24rem" : "0" }}
                >
                  <div className="pb-5 pl-16 pr-4">
                    <div
                      className="text-xs font-bold tracking-[0.25em] uppercase mb-2 opacity-70"
                      style={{ color: "#a78bfa" }}
                    >
                      {step.sub}
                    </div>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "#6a5880" }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
