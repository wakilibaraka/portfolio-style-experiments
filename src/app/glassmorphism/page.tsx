import Link from "next/link";
import Image from "next/image";
import { profile } from "@/data/profile";

export default function Glassmorphism() {
  return (
    <div 
      className="min-h-screen text-white p-4 sm:p-10 font-sans relative selection:bg-fuchsia-500 selection:text-white overflow-hidden"
      style={{
        background: "radial-gradient(circle at 10% 20%, #4c1d95 0%, #1e1b4b 40%, #09090b 100%)",
      }}
    >
      {/* Vibrant Ambient Glow Blobs underneath glass */}
      <div className="absolute top-10 left-1/4 w-96 h-96 rounded-full bg-fuchsia-600/30 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 rounded-full bg-cyan-500/25 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-indigo-500/30 blur-[140px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto space-y-10 z-10">
        
        {/* Navigation Bar */}
        <nav className="flex justify-between items-center p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
          <Link 
            href="/"
            className="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-white/90 bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md transition-all shadow-sm active:scale-95"
          >
            &larr; Style Lab
          </Link>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
            <span className="text-xs font-medium text-white/80">
              Style 10 &bull; Liquid Glassmorphism
            </span>
          </div>
        </nav>

        {/* Hero Glass Card */}
        <header className="p-8 sm:p-12 rounded-3xl bg-white/[0.08] backdrop-blur-2xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
          {/* Subtle Top Specular Edge */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Portrait Glass Capsule */}
            <div className="md:col-span-5 flex justify-center">
              <div className="p-2.5 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/30 shadow-[0_15px_35px_rgba(0,0,0,0.4)]">
                <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl overflow-hidden border border-white/20">
                  <Image 
                    src={profile.avatar}
                    alt={profile.fullName}
                    fill
                    className="object-cover object-top filter brightness-105"
                    priority
                  />
                  {/* Glass Sheen Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/20 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Information */}
            <div className="md:col-span-7 space-y-4">
              <div className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-fuchsia-500/20 text-fuchsia-200 border border-fuchsia-400/30 backdrop-blur-md shadow-sm">
                ⚖️ Constitutional Defense &bull; Human Rights
              </div>

              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white drop-shadow-md">
                {profile.fullName}
              </h1>

              <div className="p-5 rounded-2xl bg-white/[0.06] backdrop-blur-xl border border-white/15 text-sm sm:text-base text-white/90 leading-relaxed shadow-inner">
                {profile.summary}
              </div>

              {/* Frosted Badges */}
              <div className="flex flex-wrap gap-2 pt-2 text-xs font-medium text-white/90">
                <span className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md">
                  📍 {profile.contact.location}
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md">
                  📞 {profile.contact.phone}
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md">
                  ✉️ {profile.contact.email}
                </span>
              </div>
            </div>

          </div>
        </header>

        {/* Career Manifesto Glass Ribbon */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.07] backdrop-blur-xl border border-white/20 shadow-lg">
          <div className="text-xs font-bold uppercase tracking-wider text-cyan-300 mb-1">
            Core Career Objective
          </div>
          <p className="text-base sm:text-lg font-medium text-white/95 italic leading-relaxed">
            &ldquo;{profile.careerObjective}&rdquo;
          </p>
        </div>

        {/* Experience Cards */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-white/90 px-2 flex items-center gap-2">
            <span>🛡️</span> High-Impact Litigation &amp; Casework
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {profile.experience.map((exp, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white/[0.06] hover:bg-white/[0.09] transition-all backdrop-blur-xl border border-white/15 shadow-md space-y-3"
              >
                <div className="flex justify-between items-baseline gap-2">
                  <h3 className="font-bold text-base text-white">
                    {exp.role}
                  </h3>
                  <span className="text-[11px] font-bold text-cyan-300 px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 shrink-0">
                    {exp.period}
                  </span>
                </div>

                <div className="text-xs font-semibold text-fuchsia-300">
                  {exp.organization} &bull; {exp.location}
                </div>

                <ul className="text-xs space-y-1.5 text-white/80 leading-relaxed list-disc list-inside">
                  {exp.highlights.map((h, hIdx) => (
                    <li key={hIdx}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Capabilities Split */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white/[0.06] backdrop-blur-xl border border-white/15 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-300 border-b border-white/10 pb-2">
              Academic Degrees &amp; Postgrad
            </h3>
            <div className="space-y-3">
              {profile.education.map((edu, idx) => (
                <div key={idx} className="border-l-2 border-fuchsia-400/60 pl-3">
                  <div className="text-xs font-bold text-white">{edu.degree}</div>
                  <div className="text-[11px] text-white/70">{edu.institution} &bull; {edu.period}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.06] backdrop-blur-xl border border-white/15 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-300 border-b border-white/10 pb-2">
              Legal Capabilities &amp; Advocacy
            </h3>
            <div className="flex flex-wrap gap-2 pt-1">
              {profile.skills.legal.map((s, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-white/10 border border-white/20 text-white/90"
                >
                  ⚖️ {s}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center pt-8 border-t border-white/10 text-xs text-white/50">
          Liquid Glassmorphism Spec &bull; Emmanuel Baraka Ongau &bull; 2026
        </footer>

      </div>
    </div>
  );
}
