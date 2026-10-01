import Link from "next/link";
import Image from "next/image";
import { profile } from "@/data/profile";

export default function Neobrutalism() {
  return (
    <div className="min-h-screen bg-[#FFFDF0] text-black p-4 sm:p-10 font-sans selection:bg-[#FFE600] selection:text-black">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Top Navbar */}
        <nav className="flex flex-wrap items-center justify-between gap-4 border-4 border-black bg-white p-4 shadow-[6px_6px_0px_0px_#000]">
          <Link 
            href="/"
            className="font-black text-sm uppercase bg-[#FFE600] border-2 border-black px-4 py-2 hover:bg-black hover:text-[#FFE600] transition-colors shadow-[3px_3px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5"
          >
            &larr; Back to Lab
          </Link>
          <div className="flex gap-2">
            <span className="bg-[#00F0FF] border-2 border-black font-black text-xs uppercase px-3 py-1 shadow-[3px_3px_0px_0px_#000]">
              Style 04 // Neobrutalism
            </span>
            <span className="bg-[#FF5D8F] text-white border-2 border-black font-black text-xs uppercase px-3 py-1 shadow-[3px_3px_0px_0px_#000]">
              Active Advocate
            </span>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-4 border-black bg-[#A3E635] p-6 sm:p-10 shadow-[8px_8px_0px_0px_#000]">
          {/* Photo */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm aspect-[4/5] border-4 border-black bg-white shadow-[8px_8px_0px_0px_#000] overflow-hidden">
              <Image 
                src={profile.avatar}
                alt={profile.fullName}
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute bottom-3 left-3 bg-[#FFE600] border-2 border-black px-3 py-1 font-black text-xs uppercase shadow-[3px_3px_0px_0px_#000]">
                Kenya School of Law
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-7 space-y-4">
            <div className="inline-block bg-white border-3 border-black px-4 py-1 font-black text-xs sm:text-sm uppercase shadow-[4px_4px_0px_0px_#000]">
              Constitutional &amp; Strategic Litigator
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight leading-none">
              {profile.fullName}
            </h1>

            <p className="bg-white border-3 border-black p-4 text-sm sm:text-base font-bold leading-relaxed shadow-[5px_5px_0px_0px_#000]">
              {profile.summary}
            </p>

            <div className="flex flex-wrap gap-3 pt-2 font-black text-xs">
              <span className="bg-[#00F0FF] border-2 border-black px-3 py-2 shadow-[3px_3px_0px_0px_#000]">
                📍 {profile.contact.location}
              </span>
              <span className="bg-[#FFE600] border-2 border-black px-3 py-2 shadow-[3px_3px_0px_0px_#000]">
                📞 {profile.contact.phone}
              </span>
              <span className="bg-[#FF5D8F] text-white border-2 border-black px-3 py-2 shadow-[3px_3px_0px_0px_#000]">
                ✉️ {profile.contact.email}
              </span>
            </div>
          </div>
        </header>

        {/* Career Objective Marquee-like Block */}
        <div className="border-4 border-black bg-[#FFE600] p-6 shadow-[8px_8px_0px_0px_#000]">
          <div className="text-xs font-black uppercase tracking-widest text-black/70 mb-1">
            CORE LEGAL MANIFESTO //
          </div>
          <h2 className="text-xl sm:text-2xl font-black italic">
            &ldquo;{profile.careerObjective}&rdquo;
          </h2>
        </div>

        {/* Experience Grid */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <h2 className="text-3xl font-black uppercase border-b-4 border-black pb-1">
              Field Action &amp; Casework
            </h2>
            <span className="bg-[#00F0FF] border-2 border-black font-black text-xs px-2 py-1 shadow-[2px_2px_0px_0px_#000]">
              Proven Track Record
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profile.experience.map((exp, idx) => {
              const bgColors = ["bg-white", "bg-[#FFE600]", "bg-[#00F0FF]", "bg-[#FFC6FF]", "bg-white"];
              const bg = bgColors[idx % bgColors.length];
              return (
                <div 
                  key={idx}
                  className={`border-4 border-black p-6 ${bg} shadow-[6px_6px_0px_0px_#000] flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <h3 className="font-black text-xl uppercase leading-tight">
                        {exp.role}
                      </h3>
                      <span className="bg-black text-white text-[11px] font-black uppercase px-2 py-0.5 shrink-0">
                        {exp.period}
                      </span>
                    </div>

                    <div className="font-bold text-xs uppercase mb-4 text-black/80">
                      {exp.organization} &bull; {exp.location}
                    </div>

                    <ul className="space-y-2 text-xs sm:text-sm font-semibold">
                      {exp.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <span className="font-black text-black">►</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Education & Skills Split */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Education */}
          <div className="md:col-span-7 border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_#000] space-y-4">
            <h3 className="text-2xl font-black uppercase border-b-4 border-black pb-2">
              Education &amp; Credentials
            </h3>
            <div className="space-y-4">
              {profile.education.map((edu, idx) => (
                <div key={idx} className="border-2 border-black p-3 bg-[#FFFDF0]">
                  <div className="flex justify-between items-baseline font-black text-sm">
                    <h4>{edu.degree}</h4>
                    <span className="text-xs bg-black text-white px-1.5 py-0.5">{edu.period}</span>
                  </div>
                  <div className="text-xs font-bold text-black/70 mt-1">{edu.institution}</div>
                  {edu.notes && (
                    <div className="text-xs font-medium text-black/60 mt-1 italic">{edu.notes}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Legal Skills */}
          <div className="md:col-span-5 border-4 border-black bg-[#FF5D8F] text-white p-6 shadow-[8px_8px_0px_0px_#000] space-y-4">
            <h3 className="text-2xl font-black uppercase border-b-4 border-black pb-2 text-black bg-[#FFE600] p-2 text-center shadow-[3px_3px_0px_0px_#000]">
              Litigation Toolkit
            </h3>
            <div className="space-y-2 font-black text-xs sm:text-sm text-black">
              {profile.skills.legal.map((s, idx) => (
                <div key={idx} className="bg-white border-2 border-black p-2.5 shadow-[3px_3px_0px_0px_#000]">
                  ⚖️ {s}
                </div>
              ))}
            </div>

            <div className="pt-2 text-black">
              <h4 className="font-black text-xs uppercase bg-[#00F0FF] border-2 border-black p-1 text-center mb-2">
                Languages &amp; Roots
              </h4>
              <div className="flex flex-wrap gap-2 text-xs font-bold">
                {profile.contact.languages.map((lang, lIdx) => (
                  <span key={lIdx} className="bg-white border-2 border-black px-2 py-1">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-4 border-black bg-black text-white p-6 text-center font-black text-xs uppercase tracking-widest shadow-[6px_6px_0px_0px_#FFE600]">
          NEOBRUTALISM EDITION &bull; EMMANUEL BARAKA ONGAU &bull; 2026
        </footer>

      </div>
    </div>
  );
}
