import Link from "next/link";
import Image from "next/image";
import { profile } from "@/data/profile";

export default function Neumorphism() {
  const baseBg = "#e0e5ec";

  // Neumorphic raised / extruded shadow
  const neuFlat = {
    backgroundColor: baseBg,
    borderRadius: "20px",
    boxShadow: "9px 9px 18px #bec3c9, -9px -9px 18px #ffffff",
  };

  // Neumorphic inset / recessed shadow
  const neuInset = {
    backgroundColor: baseBg,
    borderRadius: "16px",
    boxShadow: "inset 6px 6px 12px #bec3c9, inset -6px -6px 12px #ffffff",
  };

  const neuButton = {
    backgroundColor: baseBg,
    borderRadius: "14px",
    boxShadow: "6px 6px 12px #bec3c9, -6px -6px 12px #ffffff",
  };

  return (
    <div 
      className="min-h-screen text-slate-700 p-4 sm:p-10 font-sans selection:bg-slate-300"
      style={{
        backgroundColor: baseBg,
      }}
    >
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Navigation Bar */}
        <nav className="flex justify-between items-center p-4" style={neuFlat}>
          <Link 
            href="/"
            className="px-5 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 active:shadow-[inset_4px_4px_8px_#bec3c9,inset_-4px_-4px_8px_#ffffff] transition-all"
            style={neuButton}
          >
            &larr; Style Lab
          </Link>
          <div className="px-4 py-2 text-xs font-bold text-slate-500 uppercase tracking-widest" style={neuInset}>
            Style 09 &bull; Neumorphism
          </div>
        </nav>

        {/* Hero Section */}
        <header className="p-8 sm:p-12" style={neuFlat}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Soft Recessed Portrait Frame */}
            <div className="md:col-span-5 flex justify-center">
              <div className="p-4" style={neuInset}>
                <div className="relative w-60 h-76 sm:w-68 sm:h-88 rounded-2xl overflow-hidden">
                  <Image 
                    src={profile.avatar}
                    alt={profile.fullName}
                    fill
                    className="object-cover object-top filter grayscale-[0.25]"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="md:col-span-7 space-y-4">
              <div className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-slate-600" style={neuButton}>
                Constitutional &bull; Human Rights Litigator
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-800">
                {profile.fullName}
              </h1>

              <div className="p-6 text-sm sm:text-base leading-relaxed text-slate-600" style={neuInset}>
                {profile.summary}
              </div>

              {/* Status Badges */}
              <div className="flex flex-wrap gap-2 pt-2 text-xs font-bold text-slate-600">
                <span className="px-3.5 py-1.5" style={neuButton}>
                  📍 {profile.contact.location}
                </span>
                <span className="px-3.5 py-1.5" style={neuButton}>
                  📞 {profile.contact.phone}
                </span>
                <span className="px-3.5 py-1.5" style={neuButton}>
                  ✉️ {profile.contact.email}
                </span>
              </div>
            </div>

          </div>
        </header>

        {/* Career Objective */}
        <div className="p-6 sm:p-8" style={neuFlat}>
          <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
            The Purpose
          </div>
          <p className="text-base sm:text-lg font-medium text-slate-800 italic leading-relaxed p-5" style={neuInset}>
            &ldquo;{profile.careerObjective}&rdquo;
          </p>
        </div>

        {/* Casework & Experience */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold uppercase tracking-wider text-slate-600 px-2">
            Legal Casework Dossier
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profile.experience.map((exp, idx) => (
              <div key={idx} className="p-6 space-y-3" style={neuFlat}>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-base text-slate-800">
                    {exp.role}
                  </h3>
                  <span className="text-[11px] font-bold text-slate-500 px-2.5 py-1" style={neuInset}>
                    {exp.period}
                  </span>
                </div>

                <div className="text-xs font-bold text-slate-500">
                  {exp.organization} &bull; {exp.location}
                </div>

                <ul className="text-xs space-y-1.5 text-slate-600 leading-relaxed list-disc list-inside">
                  {exp.highlights.map((h, hIdx) => (
                    <li key={hIdx}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Toolkit Split */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 space-y-4" style={neuFlat}>
            <h3 className="text-base font-bold uppercase tracking-wider text-slate-700">
              Education &amp; Studies
            </h3>
            <div className="space-y-3">
              {profile.education.map((edu, idx) => (
                <div key={idx} className="p-3" style={neuInset}>
                  <div className="font-bold text-xs text-slate-800">{edu.degree}</div>
                  <div className="text-[11px] text-slate-500">{edu.institution} &bull; {edu.period}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 space-y-4" style={neuFlat}>
            <h3 className="text-base font-bold uppercase tracking-wider text-slate-700">
              Litigation Practice Areas
            </h3>
            <div className="flex flex-wrap gap-2 pt-1">
              {profile.skills.legal.map((s, idx) => (
                <span key={idx} className="px-3 py-1.5 text-xs font-bold text-slate-700" style={neuButton}>
                  ⚖️ {s}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center p-6 text-xs font-bold text-slate-500 uppercase tracking-widest" style={neuFlat}>
          Neumorphism Design Spec &bull; Emmanuel Baraka Ongau &bull; 2026
        </footer>

      </div>
    </div>
  );
}
