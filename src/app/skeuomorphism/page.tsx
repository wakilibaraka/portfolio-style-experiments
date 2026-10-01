import Link from "next/link";
import Image from "next/image";
import { profile } from "@/data/profile";

export default function Skeuomorphism() {
  return (
    <div 
      className="min-h-screen text-[#2b1f14] p-4 sm:p-10 font-serif relative"
      style={{
        backgroundColor: "#2c1d11",
        backgroundImage: `
          radial-gradient(circle at 50% 20%, rgba(255, 230, 180, 0.15) 0%, transparent 60%),
          linear-gradient(180deg, #1f140a 0%, #2e1c10 40%, #1a0f07 100%)
        `,
      }}
    >
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Top Mahogany Desk Header */}
        <div 
          className="flex flex-wrap justify-between items-center gap-4 p-4 rounded-xl border-t border-[#6d4c30] border-b-2 border-black/80 shadow-[0_8px_16px_rgba(0,0,0,0.6)]"
          style={{
            background: "linear-gradient(180deg, #442a17 0%, #2b1a0d 100%)",
          }}
        >
          <Link 
            href="/"
            className="text-xs uppercase tracking-widest px-4 py-2 rounded-md border border-[#8b6540] text-[#e6cfb3] font-sans font-bold shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_3px_6px_rgba(0,0,0,0.5)] active:translate-y-0.5"
            style={{
              background: "linear-gradient(180deg, #5c391d 0%, #3a2210 100%)",
              textShadow: "0 -1px 1px #000",
            }}
          >
            &larr; Exit Chambers
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#d4af37] border border-[#7a6015] shadow-[0_0_6px_#ffd700]" />
            <span 
              className="text-xs font-bold uppercase tracking-widest text-[#d4af37]"
              style={{ textShadow: "0 1px 2px #000" }}
            >
              The Senior Counsel Docket &bull; Skeuomorphic Edition
            </span>
          </div>
        </div>

        {/* Main Leather Binder Portfolio */}
        <div 
          className="relative p-6 sm:p-12 rounded-2xl border-4 border-[#1a0e06] shadow-[0_25px_50px_rgba(0,0,0,0.8),inset_0_1px_2px_rgba(255,255,255,0.2)]"
          style={{
            background: "radial-gradient(circle at 30% 30%, #4a2815 0%, #30170a 70%, #1c0c05 100%)",
            boxShadow: "0 25px 60px rgba(0,0,0,0.9), inset 0 0 15px rgba(0,0,0,0.8)",
          }}
        >
          {/* Stitched Edge Effect */}
          <div className="absolute inset-2 sm:inset-3 border-2 border-dashed border-[#b8860b]/40 rounded-xl pointer-events-none" />

          {/* Parchment Paper Insert */}
          <div 
            className="relative p-6 sm:p-12 rounded-lg border border-[#c9b48f] shadow-[0_10px_30px_rgba(0,0,0,0.7)] text-[#2d1e12]"
            style={{
              backgroundColor: "#f4ecd8",
              backgroundImage: `radial-gradient(#e5dac0 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.6), inset 0 0 40px rgba(180,150,110,0.3)",
            }}
          >
            {/* Brass Grommet / Paperclip on top-right */}
            <div className="absolute top-4 right-6 w-5 h-5 rounded-full border-2 border-[#8c733e] bg-gradient-to-br from-[#d4af37] via-[#aa8222] to-[#594310] shadow-[0_2px_5px_rgba(0,0,0,0.4)]" />

            {/* Header: Engraved Brass Nameplate */}
            <div className="text-center pb-8 border-b-2 border-[#b89f78] mb-8">
              <div 
                className="inline-block px-8 py-3 rounded-md border-2 border-[#7a5c1e] shadow-[inset_0_1px_2px_rgba(255,255,255,0.6),0_4px_10px_rgba(0,0,0,0.3)] mb-4"
                style={{
                  background: "linear-gradient(180deg, #f3db98 0%, #c99e42 50%, #8a651a 100%)",
                }}
              >
                <h1 
                  className="text-2xl sm:text-4xl font-black uppercase tracking-wider text-[#2e1d08]"
                  style={{
                    textShadow: "0 1px 0 rgba(255,255,255,0.7), 0 -1px 0 rgba(0,0,0,0.3)",
                    fontFamily: "Georgia, serif",
                  }}
                >
                  {profile.fullName}
                </h1>
              </div>

              <div className="text-xs sm:text-sm uppercase tracking-widest font-sans font-bold text-[#684824]">
                {profile.title} &bull; KeJUDE &bull; Kenya School of Law
              </div>
            </div>

            {/* Grid: Framed Portrait & Career Mission */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-10">
              
              {/* Picture Frame with Walnut Bevel */}
              <div className="md:col-span-5 flex justify-center">
                <div 
                  className="p-3 rounded-lg border-4 border-[#3d2411] shadow-[0_15px_30px_rgba(0,0,0,0.5),inset_0_2px_4px_rgba(255,255,255,0.3)]"
                  style={{
                    background: "linear-gradient(135deg, #63391b 0%, #301a0a 100%)",
                  }}
                >
                  <div className="relative w-56 h-72 sm:w-64 sm:h-80 rounded-sm overflow-hidden border-2 border-[#c2aa7f] shadow-inner">
                    <Image 
                      src={profile.avatar}
                      alt={profile.fullName}
                      fill
                      className="object-cover object-top filter sepia-[0.1]"
                      priority
                    />
                  </div>
                  <div className="text-center font-mono text-[11px] text-[#e6cfb3] mt-2 font-bold tracking-widest">
                    EMMANUEL BARAKA ONGAU
                  </div>
                </div>
              </div>

              {/* Legal Manifesto on Pressed Ivory Card */}
              <div className="md:col-span-7 space-y-4">
                <div 
                  className="p-6 rounded-md border border-[#c4ae87] shadow-[inset_0_2px_6px_rgba(0,0,0,0.06),0_4px_12px_rgba(0,0,0,0.08)] bg-[#faf4e6]"
                >
                  <div className="text-xs uppercase font-sans font-bold tracking-wider text-[#8b6528] mb-1">
                    Certified Professional Statement
                  </div>
                  <p className="text-sm sm:text-base leading-relaxed italic text-[#3d2b1b]">
                    &ldquo;{profile.careerObjective}&rdquo;
                  </p>
                </div>

                <p className="text-sm text-[#423121] leading-relaxed">
                  {profile.summary}
                </p>

                {/* Wax Seal Badge */}
                <div className="flex items-center gap-4 pt-2">
                  <div 
                    className="w-14 h-14 rounded-full border-2 border-[#681010] flex items-center justify-center text-white font-serif font-black text-xs uppercase shadow-[0_4px_8px_rgba(0,0,0,0.4),inset_0_2px_4px_rgba(255,255,255,0.4)]"
                    style={{
                      background: "radial-gradient(circle at 35% 35%, #a82020 0%, #7a1010 70%, #4a0808 100%)",
                      transform: "rotate(-8deg)",
                    }}
                  >
                    LEX &bull; 2026
                  </div>
                  <div className="text-xs font-sans text-[#5c4021]">
                    <div className="font-bold">Constitutional Defense Docket</div>
                    <div>Habeas Corpus &bull; Public Interest Law</div>
                  </div>
                </div>
              </div>

            </div>

            {/* Strategic Litigation Records */}
            <div className="space-y-6 pt-4 border-t-2 border-[#b89f78]">
              <div className="flex items-center gap-3">
                <span className="text-xl">📜</span>
                <h2 className="text-2xl font-bold tracking-tight text-[#2d1e12]">
                  Chronicle of Practice &amp; Strategic Litigation
                </h2>
              </div>

              <div className="space-y-4">
                {profile.experience.map((exp, idx) => (
                  <div 
                    key={idx}
                    className="p-5 rounded-md border border-[#c9b48f] shadow-[0_3px_8px_rgba(0,0,0,0.05)] bg-[#faf4e6]/90"
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-1">
                      <h3 className="font-bold text-base text-[#24170a]">
                        {exp.role}
                      </h3>
                      <span className="text-xs font-sans font-bold text-[#7c5b2c]">
                        {exp.period}
                      </span>
                    </div>

                    <div className="text-xs font-sans font-semibold text-[#8b6528] mb-3">
                      {exp.organization} &bull; {exp.location}
                    </div>

                    <ul className="text-xs space-y-1.5 text-[#3b2a1a] list-disc list-inside leading-relaxed">
                      {exp.highlights.map((h, hIdx) => (
                        <li key={hIdx}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Parchments & Inscriptions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
              <div className="p-5 rounded-md border border-[#c9b48f] bg-[#faf4e6]/90 shadow-sm">
                <h3 className="font-bold text-base text-[#2d1e12] border-b border-[#c9b48f] pb-2 mb-3">
                  Academic Degrees &amp; Inscriptions
                </h3>
                <div className="space-y-3">
                  {profile.education.map((edu, idx) => (
                    <div key={idx} className="border-l-2 border-[#8b6528] pl-3">
                      <div className="font-bold text-xs text-[#2b1b0e]">{edu.degree}</div>
                      <div className="text-[11px] text-[#6d512a] font-sans">{edu.institution} &bull; {edu.period}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-md border border-[#c9b48f] bg-[#faf4e6]/90 shadow-sm">
                <h3 className="font-bold text-base text-[#2d1e12] border-b border-[#c9b48f] pb-2 mb-3">
                  Counsel Capabilities &amp; Skills
                </h3>
                <div className="space-y-2 font-sans text-xs">
                  {profile.skills.legal.map((s, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[#3b2a1a]">
                      <span className="text-[#8b6528] font-bold">&sect;</span>
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Registry Footer */}
            <footer className="mt-10 pt-4 border-t border-[#b89f78] text-center font-sans text-xs text-[#7c5b2c]">
              SEALED &amp; FILED UNDER SENIOR COUNSEL RECORD &bull; EMMANUEL BARAKA ONGAU &bull; VITERBO &bull; NAIROBI
            </footer>

          </div>
        </div>

      </div>
    </div>
  );
}
