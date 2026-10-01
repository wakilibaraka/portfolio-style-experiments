import Link from "next/link";
import Image from "next/image";
import { profile } from "@/data/profile";

export default function Claymorphism() {
  // Clay card shadow generator style
  const clayCard = {
    backgroundColor: "#ffffff",
    borderRadius: "32px",
    boxShadow: `
      16px 16px 32px rgba(180, 190, 210, 0.45),
      -12px -12px 24px rgba(255, 255, 255, 0.9),
      inset 4px 4px 8px rgba(255, 255, 255, 0.9),
      inset -4px -4px 8px rgba(170, 185, 210, 0.3)
    `,
  };

  const clayButton = {
    backgroundColor: "#6366f1",
    borderRadius: "24px",
    boxShadow: `
      8px 8px 16px rgba(99, 102, 241, 0.35),
      -4px -4px 12px rgba(255, 255, 255, 0.7),
      inset 3px 3px 6px rgba(255, 255, 255, 0.4),
      inset -3px -3px 6px rgba(49, 46, 129, 0.4)
    `,
  };

  const clayPill = {
    backgroundColor: "#f1f5f9",
    borderRadius: "9999px",
    boxShadow: `
      6px 6px 12px rgba(180, 195, 215, 0.35),
      -4px -4px 10px rgba(255, 255, 255, 0.9),
      inset 2px 2px 4px rgba(255, 255, 255, 0.9),
      inset -2px -2px 4px rgba(180, 195, 215, 0.25)
    `,
  };

  return (
    <div 
      className="min-h-screen text-slate-800 p-4 sm:p-10 font-sans selection:bg-indigo-300"
      style={{
        backgroundColor: "#e8edf5",
      }}
    >
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Navigation Bar */}
        <nav className="flex justify-between items-center p-4" style={clayCard}>
          <Link 
            href="/"
            className="px-5 py-2.5 text-xs font-black uppercase text-white tracking-wider active:scale-95 transition-transform"
            style={clayButton}
          >
            &larr; Style Lab
          </Link>
          <div className="flex items-center gap-2 px-4 py-2" style={clayPill}>
            <span className="w-3 h-3 rounded-full bg-emerald-400 shadow-sm" />
            <span className="text-xs font-bold text-slate-600">
              Style 08 &bull; Claymorphism
            </span>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="p-8 sm:p-12 relative overflow-hidden" style={clayCard}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Puffy 3D Portrait */}
            <div className="md:col-span-5 flex justify-center">
              <div 
                className="p-3 relative"
                style={{
                  ...clayCard,
                  borderRadius: "40px",
                }}
              >
                <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-[32px] overflow-hidden shadow-inner">
                  <Image 
                    src={profile.avatar}
                    alt={profile.fullName}
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-7 space-y-4">
              <div 
                className="inline-block px-4 py-1.5 text-xs font-black text-indigo-700 uppercase"
                style={clayPill}
              >
                ⚖️ Public Interest &bull; Constitutional Law
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
                {profile.fullName}
              </h1>

              <div 
                className="p-6 text-sm sm:text-base font-medium text-slate-700 leading-relaxed"
                style={{
                  ...clayCard,
                  backgroundColor: "#f8fafc",
                }}
              >
                {profile.summary}
              </div>

              {/* Contact Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3.5 py-1.5 text-xs font-bold text-slate-700" style={clayPill}>
                  📍 {profile.contact.location}
                </span>
                <span className="px-3.5 py-1.5 text-xs font-bold text-slate-700" style={clayPill}>
                  📞 {profile.contact.phone}
                </span>
                <span className="px-3.5 py-1.5 text-xs font-bold text-slate-700" style={clayPill}>
                  ✉️ {profile.contact.email}
                </span>
              </div>
            </div>

          </div>
        </header>

        {/* Mission Statement */}
        <div 
          className="p-8 text-center sm:text-left"
          style={{
            ...clayCard,
            backgroundColor: "#fdf4ff",
          }}
        >
          <div className="text-xs font-black uppercase text-fuchsia-700 tracking-wider mb-2">
            The Purpose
          </div>
          <p className="text-lg sm:text-xl font-bold text-slate-900 italic">
            &ldquo;{profile.careerObjective}&rdquo;
          </p>
        </div>

        {/* Experience Cards */}
        <section className="space-y-4">
          <h2 className="text-2xl font-black text-slate-900 px-2">
            Litigation &amp; Casework
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profile.experience.map((exp, idx) => (
              <div 
                key={idx}
                className="p-6 space-y-3 flex flex-col justify-between"
                style={clayCard}
              >
                <div>
                  <div className="flex justify-between items-start gap-2 mb-1">
                    <h3 className="font-black text-base text-slate-900">
                      {exp.role}
                    </h3>
                    <span 
                      className="px-2.5 py-1 text-[11px] font-bold text-indigo-700 shrink-0"
                      style={clayPill}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <div className="text-xs font-bold text-indigo-600 mb-3">
                    {exp.organization} &bull; {exp.location}
                  </div>

                  <ul className="text-xs space-y-1.5 text-slate-600 leading-relaxed list-disc list-inside">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Credentials & Skills */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 space-y-3" style={clayCard}>
            <h3 className="text-base font-black text-slate-900 border-b border-slate-200 pb-2">
              Education &amp; Qualifications
            </h3>
            <div className="space-y-3">
              {profile.education.map((edu, idx) => (
                <div key={idx} className="p-3" style={clayPill}>
                  <div className="font-bold text-xs text-slate-900">{edu.degree}</div>
                  <div className="text-[11px] text-slate-500">{edu.institution} &bull; {edu.period}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 space-y-3" style={clayCard}>
            <h3 className="text-base font-black text-slate-900 border-b border-slate-200 pb-2">
              Legal Advocacy Skills
            </h3>
            <div className="flex flex-wrap gap-2 pt-2">
              {profile.skills.legal.map((s, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1.5 text-xs font-bold text-slate-800"
                  style={clayPill}
                >
                  🛡️ {s}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center p-6 text-xs font-bold text-slate-500" style={clayCard}>
          Claymorphic Portfolio &bull; Emmanuel Baraka Ongau &bull; 2026
        </footer>

      </div>
    </div>
  );
}
