import Link from "next/link";
import Image from "next/image";
import { profile } from "@/data/profile";

export default function FrutigerAero() {
  return (
    <div 
      className="min-h-screen text-slate-800 p-4 sm:p-10 font-sans relative selection:bg-sky-400 selection:text-white overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #38a4ea 0%, #76c5f0 35%, #a6e3e9 60%, #c4ebd0 85%, #88d49e 100%)",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Floating Aero Bubbles in background */}
      <div className="absolute top-12 left-10 w-32 h-32 rounded-full pointer-events-none opacity-40 bg-gradient-to-tr from-white/80 via-white/20 to-transparent shadow-[inset_-8px_-8px_16px_rgba(255,255,255,0.8),0_10px_20px_rgba(0,0,0,0.1)] backdrop-blur-xs" />
      <div className="absolute top-64 right-16 w-48 h-48 rounded-full pointer-events-none opacity-30 bg-gradient-to-tr from-white/70 via-white/10 to-transparent shadow-[inset_-12px_-12px_24px_rgba(255,255,255,0.8),0_15px_30px_rgba(0,0,0,0.1)] backdrop-blur-xs" />

      <div className="relative max-w-5xl mx-auto space-y-10 z-10">
        
        {/* Top Aero Navigation Bar */}
        <nav 
          className="flex justify-between items-center p-3 sm:p-4 rounded-2xl border border-white/70 shadow-[0_8px_32px_rgba(31,38,135,0.15)] backdrop-blur-md"
          style={{
            background: "linear-gradient(180deg, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.15) 51%, rgba(255,255,255,0.4) 100%)",
          }}
        >
          <Link 
            href="/"
            className="px-4 py-2 rounded-xl text-xs font-bold text-sky-950 border border-white/80 shadow-[0_4px_10px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.9)] hover:scale-105 active:scale-95 transition-transform flex items-center gap-1.5"
            style={{
              background: "linear-gradient(180deg, #e3f5ff 0%, #b8e2f8 50%, #90d0f5 51%, #c9ebfc 100%)",
            }}
          >
            <span>&larr;</span> Return to Style Lab
          </Link>

          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-400 border border-white shadow-[0_0_8px_#34d399]" />
            <span className="text-xs font-extrabold text-sky-950 tracking-wide">
              Frutiger Aero Edition
            </span>
          </div>
        </nav>

        {/* Hero Glass Card */}
        <header 
          className="relative p-6 sm:p-10 rounded-3xl border border-white/80 shadow-[0_20px_50px_rgba(0,50,120,0.18)] backdrop-blur-lg overflow-hidden"
          style={{
            background: "linear-gradient(180deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.35) 48%, rgba(255,255,255,0.1) 49%, rgba(255,255,255,0.3) 100%)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Glossy Portrait Capsule */}
            <div className="md:col-span-5 flex justify-center">
              <div 
                className="relative p-2.5 rounded-3xl border-2 border-white/90 shadow-[0_15px_35px_rgba(0,0,0,0.2),inset_0_2px_4px_rgba(255,255,255,0.8)] backdrop-blur-md"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.2) 100%)",
                }}
              >
                <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl overflow-hidden border border-white/60 shadow-inner">
                  <Image 
                    src={profile.avatar}
                    alt={profile.fullName}
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  {/* Glass Gloss Sheen diagonal overlay */}
                  <div 
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 45%, rgba(255,255,255,0.2) 100%)",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Content Information */}
            <div className="md:col-span-7 space-y-4">
              <div 
                className="inline-block px-3.5 py-1 rounded-full text-xs font-black uppercase text-sky-900 border border-white shadow-[0_2px_6px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.8)]"
                style={{
                  background: "linear-gradient(180deg, #dcfce7 0%, #bbf7d0 50%, #86efac 51%, #bbf7d0 100%)",
                }}
              >
                🌱 Sustainable Positive Change &bull; Human Rights
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-sky-950 tracking-tight drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)]">
                {profile.fullName}
              </h1>

              <div 
                className="p-5 rounded-2xl border border-white/90 shadow-[0_6px_20px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.9)] text-sm sm:text-base font-medium text-slate-800 leading-relaxed"
                style={{
                  background: "linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.5) 100%)",
                }}
              >
                {profile.summary}
              </div>

              {/* Aqua Gel Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span 
                  className="px-3 py-1.5 rounded-full text-xs font-bold text-sky-900 border border-white shadow-sm"
                  style={{
                    background: "linear-gradient(180deg, #ffffff 0%, #e0f2fe 100%)",
                  }}
                >
                  📍 {profile.contact.location}
                </span>
                <span 
                  className="px-3 py-1.5 rounded-full text-xs font-bold text-sky-900 border border-white shadow-sm"
                  style={{
                    background: "linear-gradient(180deg, #ffffff 0%, #e0f2fe 100%)",
                  }}
                >
                  📞 {profile.contact.phone}
                </span>
                <span 
                  className="px-3 py-1.5 rounded-full text-xs font-bold text-sky-900 border border-white shadow-sm"
                  style={{
                    background: "linear-gradient(180deg, #ffffff 0%, #e0f2fe 100%)",
                  }}
                >
                  ✉️ {profile.contact.email}
                </span>
              </div>
            </div>

          </div>
        </header>

        {/* Career Objective Ribbon */}
        <div 
          className="p-6 rounded-2xl border border-white/80 shadow-[0_10px_25px_rgba(0,0,0,0.08)] backdrop-blur-md"
          style={{
            background: "linear-gradient(180deg, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.4) 100%)",
          }}
        >
          <div className="text-xs font-black uppercase tracking-wider text-sky-800 mb-1">
            Vision &amp; Aspirations
          </div>
          <p className="text-base sm:text-lg font-bold text-sky-950 italic">
            &ldquo;{profile.careerObjective}&rdquo;
          </p>
        </div>

        {/* Experience Casework - Aero Glass Cards */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-lg">🌊</span>
            <h2 className="text-2xl font-black text-sky-950 tracking-tight drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]">
              Strategic Public Interest Advocacy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {profile.experience.map((exp, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl border border-white/80 shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur-md space-y-3 hover:translate-y-[-2px] transition-transform duration-200"
                style={{
                  background: "linear-gradient(180deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.3) 100%)",
                }}
              >
                <div className="flex justify-between items-baseline">
                  <h3 className="font-extrabold text-base text-sky-950">
                    {exp.role}
                  </h3>
                  <span 
                    className="text-[11px] font-bold text-sky-900 px-2.5 py-0.5 rounded-full border border-white shadow-xs"
                    style={{
                      background: "linear-gradient(180deg, #e0f2fe 0%, #bae6fd 100%)",
                    }}
                  >
                    {exp.period}
                  </span>
                </div>

                <div className="text-xs font-bold text-emerald-800">
                  {exp.organization} &bull; {exp.location}
                </div>

                <ul className="text-xs space-y-1.5 text-slate-700 leading-relaxed list-disc list-inside">
                  {exp.highlights.map((h, hIdx) => (
                    <li key={hIdx}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Skills Pods */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Education Pod */}
          <div 
            className="p-6 rounded-2xl border border-white/80 shadow-[0_10px_25px_rgba(0,0,0,0.08)] backdrop-blur-md space-y-3"
            style={{
              background: "linear-gradient(180deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.35) 100%)",
            }}
          >
            <h3 className="text-base font-black text-sky-950 border-b border-sky-200/60 pb-2">
              Academic Degrees &amp; Postgrad Studies
            </h3>
            <div className="space-y-3">
              {profile.education.map((edu, idx) => (
                <div key={idx} className="border-l-3 border-sky-400 pl-3">
                  <div className="text-xs font-extrabold text-sky-950">{edu.degree}</div>
                  <div className="text-[11px] text-slate-600 font-medium">{edu.institution} &bull; {edu.period}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Legal Skills Gel Pod */}
          <div 
            className="p-6 rounded-2xl border border-white/80 shadow-[0_10px_25px_rgba(0,0,0,0.08)] backdrop-blur-md space-y-3"
            style={{
              background: "linear-gradient(180deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.35) 100%)",
            }}
          >
            <h3 className="text-base font-black text-sky-950 border-b border-sky-200/60 pb-2">
              Legal Capabilities &amp; Litigation Skills
            </h3>
            <div className="flex flex-wrap gap-2 pt-1">
              {profile.skills.legal.map((s, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 rounded-xl text-xs font-bold text-sky-900 border border-white shadow-xs"
                  style={{
                    background: "linear-gradient(180deg, #ffffff 0%, #e0f2fe 100%)",
                  }}
                >
                  ⚖️ {s}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center pt-8 border-t border-white/50 text-xs font-bold text-sky-950">
          Frutiger Aero Interface &bull; Designed for {profile.fullName} &bull; 2026
        </footer>

      </div>
    </div>
  );
}
