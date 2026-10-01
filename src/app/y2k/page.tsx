import Link from "next/link";
import Image from "next/image";
import { profile } from "@/data/profile";

export default function Y2KDigital() {
  return (
    <div 
      className="min-h-screen text-slate-100 p-4 sm:p-10 font-mono relative overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at top, #112240 0%, #0a1128 60%, #030712 100%)",
      }}
    >
      {/* Background Cyber Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: "linear-gradient(to right, #38bdf8 1px, transparent 1px), linear-gradient(to bottom, #38bdf8 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-5xl mx-auto space-y-10 z-10">
        
        {/* Top Cyber Ribbon */}
        <div className="flex flex-wrap justify-between items-center gap-4 border border-cyan-400/40 bg-slate-900/80 backdrop-blur-md p-3 rounded-2xl shadow-[0_0_20px_rgba(56,189,248,0.2)]">
          <Link 
            href="/"
            className="text-xs font-bold text-cyan-300 hover:text-white px-3 py-1.5 rounded-full border border-cyan-500/50 bg-cyan-950/40 hover:bg-cyan-800/40 transition-all flex items-center gap-1.5 shadow-[0_0_10px_rgba(6,182,212,0.3)]"
          >
            <span>&laquo;</span> [RETURN_TO_BASE]
          </Link>
          <div className="flex items-center gap-2 text-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#38bdf8]" />
            <span className="text-cyan-200 tracking-widest text-[11px]">SYS: Y2K_MILLENNIUM // ONLINE</span>
          </div>
        </div>

        {/* Hero Section: Chrome & Liquid Sheen */}
        <header className="relative border border-cyan-400/50 bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-blue-950/90 p-6 sm:p-10 rounded-3xl backdrop-blur-xl shadow-[0_0_35px_rgba(56,189,248,0.25)]">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Cyber Portrait with Iridescent Holographic Border */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative p-1.5 rounded-3xl bg-gradient-to-tr from-cyan-400 via-indigo-400 to-pink-400 shadow-[0_0_25px_rgba(99,102,241,0.5)]">
                <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-[22px] overflow-hidden bg-slate-950 border border-white/20">
                  <Image 
                    src={profile.avatar}
                    alt={profile.fullName}
                    fill
                    className="object-cover object-top filter brightness-105 contrast-110"
                    priority
                  />
                  {/* Hologram Scanlines Overlay */}
                  <div 
                    className="absolute inset-0 pointer-events-none opacity-30"
                    style={{
                      background: "repeating-linear-gradient(0deg, rgba(56,189,248,0.15), rgba(56,189,248,0.15) 1px, transparent 1px, transparent 2px)",
                    }}
                  />
                  <div className="absolute bottom-2 inset-x-2 bg-slate-950/80 backdrop-blur-md border border-cyan-400/40 p-2 rounded-xl text-center text-[10px] text-cyan-300 tracking-widest">
                    CORE: COUNSEL_BARAKA_2000
                  </div>
                </div>
              </div>
            </div>

            {/* Cyber Bio & Chrome Text */}
            <div className="md:col-span-7 space-y-4">
              <div className="inline-block px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase border border-cyan-400/40 bg-cyan-950/60 text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.4)]">
                ⚡ HUMAN RIGHTS &bull; CONSTITUTIONAL MATRIX
              </div>

              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-indigo-300 drop-shadow-[0_2px_10px_rgba(255,255,255,0.3)]">
                {profile.fullName}
              </h1>

              <div className="p-4 rounded-2xl border border-cyan-500/30 bg-slate-950/60 backdrop-blur-md text-xs sm:text-sm text-cyan-100/90 leading-relaxed shadow-inner">
                {profile.summary}
              </div>

              {/* Coordinates / Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 text-[11px]">
                <div className="p-2 rounded-xl border border-slate-700 bg-slate-900/60 text-center">
                  <span className="text-cyan-400 block text-[9px]">LOC_COORDS</span>
                  {profile.contact.location}
                </div>
                <div className="p-2 rounded-xl border border-slate-700 bg-slate-900/60 text-center">
                  <span className="text-cyan-400 block text-[9px]">COMM_LINK</span>
                  {profile.contact.phone}
                </div>
                <div className="p-2 rounded-xl border border-slate-700 bg-slate-900/60 text-center truncate">
                  <span className="text-cyan-400 block text-[9px]">DIRECT_PULSE</span>
                  {profile.contact.email}
                </div>
              </div>
            </div>

          </div>
        </header>

        {/* Mission Directive */}
        <div className="border border-indigo-400/40 bg-gradient-to-r from-indigo-950/70 via-slate-900/70 to-cyan-950/70 p-6 rounded-2xl shadow-[0_0_20px_rgba(99,102,241,0.2)]">
          <div className="text-[10px] text-indigo-300 tracking-widest uppercase mb-1">
            // STRATEGIC_DIRECTIVE
          </div>
          <p className="text-sm sm:text-base text-slate-200 italic leading-relaxed">
            &ldquo;{profile.careerObjective}&rdquo;
          </p>
        </div>

        {/* Experience Casework: Cyber Pods */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 border-b border-cyan-500/30 pb-2">
            <span className="text-cyan-400 text-sm">&#9658;</span>
            <h2 className="text-xl font-bold tracking-widest text-cyan-200 uppercase">
              HIGH_IMPACT_LITIGATION_LOG
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {profile.experience.map((exp, idx) => (
              <div 
                key={idx}
                className="border border-slate-700/80 hover:border-cyan-400/80 transition-all p-5 rounded-2xl bg-slate-900/70 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)] space-y-3 group"
              >
                <div className="flex justify-between items-start gap-2">
                  <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {exp.role}
                  </h3>
                  <span className="text-[10px] px-2 py-0.5 rounded-full border border-cyan-500/40 bg-cyan-950/50 text-cyan-300 shrink-0">
                    {exp.period}
                  </span>
                </div>

                <div className="text-xs text-indigo-300 font-medium">
                  {exp.organization} &bull; {exp.location}
                </div>

                <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                  {exp.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="leading-snug">{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Dual Modules: Education & Skills */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Education Pod */}
          <div className="border border-slate-700/80 p-5 rounded-2xl bg-slate-900/60 backdrop-blur-md space-y-3">
            <h3 className="text-sm font-bold text-cyan-300 uppercase tracking-widest border-b border-slate-800 pb-2 flex items-center gap-2">
              <span>🎓</span> ACADEMIC_REGISTRY
            </h3>
            <div className="space-y-3">
              {profile.education.map((edu, idx) => (
                <div key={idx} className="border-l-2 border-indigo-400/60 pl-3">
                  <div className="text-xs font-bold text-white">{edu.degree}</div>
                  <div className="text-[11px] text-cyan-200">{edu.institution} &bull; {edu.period}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Legal Skills Gel Pod */}
          <div className="border border-cyan-500/40 p-5 rounded-2xl bg-gradient-to-b from-cyan-950/40 to-slate-900/70 backdrop-blur-md space-y-3 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
            <h3 className="text-sm font-bold text-cyan-300 uppercase tracking-widest border-b border-cyan-500/30 pb-2 flex items-center gap-2">
              <span>⚖️</span> LITIGATION_SUBSYSTEMS
            </h3>
            <div className="flex flex-wrap gap-2 pt-1">
              {profile.skills.legal.map((s, idx) => (
                <span 
                  key={idx}
                  className="text-xs px-2.5 py-1 rounded-lg border border-cyan-400/40 bg-slate-950/70 text-cyan-100"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center pt-8 border-t border-slate-800 text-[11px] text-slate-500">
          CYBER_EDITION 2000 // EMMANUEL BARAKA ONGAU // ALL_RIGHTS_RESERVED
        </footer>

      </div>
    </div>
  );
}
