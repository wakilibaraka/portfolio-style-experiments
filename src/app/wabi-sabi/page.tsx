import Link from "next/link";
import Image from "next/image";
import { profile } from "@/data/profile";

export default function WabiSabi() {
  return (
    <div 
      className="min-h-screen text-[#262320] p-6 sm:p-14 font-serif selection:bg-[#D5C7B4] selection:text-[#1A1816]"
      style={{
        backgroundColor: "#F2ECE1",
        backgroundImage: `
          radial-gradient(#E2D9CB 1px, transparent 1px),
          linear-gradient(180deg, #F5EFE6 0%, #EFE7DA 100%)
        `,
        backgroundSize: "24px 24px, 100% 100%",
      }}
    >
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Organic Navigation */}
        <nav className="flex justify-between items-center text-xs font-sans tracking-[0.2em] uppercase border-b border-[#D8CFC0] pb-4">
          <Link href="/" className="text-[#7A7165] hover:text-[#262320] transition-colors flex items-center gap-2">
            <span>&larr;</span> Return to Atlas
          </Link>
          <div className="flex items-center gap-2 text-[#7A7165]">
            <span className="font-serif text-sm italic">侘寂</span>
            <span>Style 13 &bull; Wabi-Sabi</span>
          </div>
        </nav>

        {/* Hero: Asymmetrical Organic Harmony */}
        <header className="space-y-12">
          
          <div className="space-y-3">
            <div className="text-xs font-sans uppercase tracking-[0.3em] text-[#8C8171]">
              Advocate Trainee &bull; Constitutional Defense &bull; Natural Justice
            </div>
            <h1 className="text-4xl sm:text-6xl font-normal tracking-tight text-[#1E1B18] leading-[1.1]">
              {profile.fullName}
            </h1>
            <p className="font-sans text-xs tracking-widest text-[#9C8F7E] uppercase pt-1">
              Honesty &bull; Community Service &bull; Transformative Human Rights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            
            {/* Organic Asymmetrical Portrait */}
            <div className="md:col-span-5 relative">
              <div 
                className="relative aspect-[3/4] w-full overflow-hidden bg-[#E2D8C9] border border-[#D5CABB]"
                style={{
                  borderRadius: "140px 140px 16px 16px",
                  boxShadow: "0 15px 35px rgba(80, 70, 60, 0.08)",
                }}
              >
                <Image 
                  src={profile.avatar}
                  alt={profile.fullName}
                  fill
                  className="object-cover object-top filter sepia-[0.2] contrast-[0.98]"
                  priority
                />
              </div>
              <div className="text-[11px] font-sans text-center text-[#8C8171] tracking-widest uppercase mt-3 italic">
                &ldquo;Outside the Law School &bull; Viterbo / Nairobi&rdquo;
              </div>
            </div>

            {/* Poetic Narrative & Objective */}
            <div className="md:col-span-7 space-y-6 pt-2">
              <div className="border-l-2 border-[#B8AA96] pl-6 space-y-4">
                <div className="text-xs font-sans tracking-widest uppercase text-[#8C8171]">
                  The Purpose &amp; Calling
                </div>
                <p className="text-lg sm:text-xl font-normal leading-relaxed text-[#2B2723] italic">
                  &ldquo;{profile.careerObjective}&rdquo;
                </p>
              </div>

              <p className="font-sans text-sm text-[#5C5346] leading-relaxed pt-2">
                {profile.summary}
              </p>

              {/* Natural Details */}
              <div className="pt-4 border-t border-[#D8CFC0] font-sans text-xs space-y-1.5 text-[#6E6354]">
                <div><span className="text-[#998A77]">Dwell:</span> {profile.contact.location}</div>
                <div><span className="text-[#998A77]">Dial:</span> {profile.contact.phone}</div>
                <div><span className="text-[#998A77]">Commune:</span> {profile.contact.email}</div>
                <div className="pt-1 text-[#8C7B65] italic">
                  Dialects: {profile.contact.languages.join(" &bull; ")}
                </div>
              </div>
            </div>

          </div>
        </header>

        {/* Selected Casework (Earthen Timeline) */}
        <section className="space-y-8 pt-6 border-t border-[#D8CFC0]">
          <div className="flex justify-between items-baseline">
            <h2 className="text-2xl font-normal tracking-tight text-[#1E1B18]">
              The Work &amp; Casework Record
            </h2>
            <span className="font-sans text-xs text-[#8C8171] uppercase tracking-wider">
              KeJUDE &bull; Public Interest
            </span>
          </div>

          <div className="space-y-8">
            {profile.experience.map((exp, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-sm border border-[#D5CABB] bg-[#FAF5EB]/60 space-y-3"
                style={{
                  boxShadow: "0 4px 15px rgba(80, 70, 60, 0.03)",
                }}
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                  <h3 className="text-lg font-normal text-[#1E1B18]">
                    {exp.role}
                  </h3>
                  <span className="font-sans text-xs text-[#8C8171]">
                    {exp.period}
                  </span>
                </div>

                <div className="font-sans text-xs text-[#7A6A55] uppercase tracking-wider">
                  {exp.organization} &bull; {exp.location}
                </div>

                <ul className="font-sans text-xs space-y-2 text-[#574E42] leading-relaxed">
                  {exp.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex gap-2 items-start">
                      <span className="text-[#A3927D] select-none">&bull;</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Natural Roots */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-[#D8CFC0]">
          <div className="space-y-4">
            <h3 className="text-lg font-normal text-[#1E1B18]">
              Education &amp; Qualifications
            </h3>
            <div className="space-y-3">
              {profile.education.map((edu, idx) => (
                <div key={idx} className="border-l border-[#B8AA96] pl-4">
                  <div className="text-sm font-normal text-[#1E1B18]">{edu.degree}</div>
                  <div className="font-sans text-xs text-[#7A6A55]">{edu.institution} &bull; {edu.period}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-normal text-[#1E1B18]">
              Skills &amp; Community Roots
            </h3>
            <div className="space-y-3">
              <div className="font-sans text-xs text-[#574E42] leading-relaxed">
                <strong>Legal Craft:</strong> {profile.skills.legal.join(", ")}
              </div>
              <div className="font-sans text-xs text-[#574E42] leading-relaxed pt-2">
                <strong>Community Roots:</strong> {profile.leadership.join(" &bull; ")}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-12 pb-8 border-t border-[#D8CFC0] text-center font-sans text-xs tracking-[0.25em] uppercase text-[#8C8171]">
          侘寂 &bull; Wabi-Sabi Aesthetics &bull; Emmanuel Baraka Ongau &bull; 2026
        </footer>

      </div>
    </div>
  );
}
