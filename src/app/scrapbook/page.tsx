import Link from "next/link";
import Image from "next/image";
import { profile } from "@/data/profile";

export default function ScrapbookMixedMedia() {
  return (
    <div 
      className="min-h-screen p-4 sm:p-10 font-sans text-neutral-800"
      style={{
        backgroundColor: "#EBE5D8",
        backgroundImage: `radial-gradient(#D3CBB8 1.5px, transparent 1.5px), radial-gradient(#D3CBB8 1.5px, #EBE5D8 1.5px)`,
        backgroundSize: "30px 30px",
        backgroundPosition: "0 0, 15px 15px",
      }}
    >
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Top Ribbon & Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/"
            className="inline-block bg-[#FAF6EE] border border-[#C5BBAA] px-4 py-2 text-xs font-mono tracking-wider shadow-sm hover:shadow transition-transform hover:-rotate-1"
            style={{ transform: "rotate(-1deg)" }}
          >
            &larr; &nbsp;Back to Style Archive
          </Link>

          <div 
            className="bg-red-800 text-white text-[11px] font-mono tracking-widest px-3 py-1 uppercase shadow-md rotate-2"
            style={{ letterSpacing: "2px" }}
          >
            Docket: Case Files &amp; Activism
          </div>
        </div>

        {/* Hero Collage: Polaroid + Tape + Newspaper Clipping */}
        <div className="relative pt-6 pb-4">
          {/* Main Title Stamp */}
          <div className="text-center md:text-left mb-6">
            <span className="inline-block bg-[#F4ECD8] border border-stone-400 px-4 py-1 text-xs font-mono uppercase tracking-widest text-stone-700 shadow-sm -rotate-1 mb-2">
              FIELD JOURNAL &bull; LEGAL ADVOCACY
            </span>
            <h1 
              className="text-4xl sm:text-6xl font-black tracking-tight text-neutral-900"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {profile.fullName}
            </h1>
            <p className="font-mono text-xs sm:text-sm text-stone-600 mt-1 max-w-xl">
              Constitutional Litigation &bull; Human Rights Defense &bull; High-Impact Advocacy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Left: Polaroid Photo with Washi Tape */}
            <div className="md:col-span-5 relative flex justify-center">
              {/* Washi Tape Strip */}
              <div 
                className="absolute -top-4 z-20 w-32 h-8 bg-amber-200/80 backdrop-blur-xs border-y border-amber-300 shadow-xs"
                style={{
                  transform: "rotate(-4deg)",
                  clipPath: "polygon(0 0, 95% 2%, 100% 100%, 5% 98%)",
                }}
              />

              {/* Polaroid Frame */}
              <div 
                className="bg-white p-4 pb-7 shadow-xl border border-stone-200 w-full max-w-xs transition-transform hover:rotate-0 duration-300"
                style={{ transform: "rotate(-2deg)" }}
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-stone-100 border border-stone-200">
                  <Image 
                    src={profile.avatar} 
                    alt={profile.fullName} 
                    fill 
                    className="object-cover object-top filter sepia-[0.15] contrast-[1.05]"
                    priority
                  />
                </div>
                <div 
                  className="mt-3 text-center text-xs text-stone-700 tracking-wide"
                  style={{ fontFamily: "'Courier New', Courier, monospace" }}
                >
                  &quot;Outside the Law School &bull; Viterbo / Nairobi&quot;
                </div>
              </div>

              {/* Rubber Stamp Badge */}
              <div 
                className="absolute -bottom-4 -right-2 md:right-4 z-10 border-2 border-red-700 text-red-700 font-mono text-xs font-black px-3 py-1 uppercase rounded-xs tracking-widest shadow-sm bg-white/90"
                style={{ transform: "rotate(12deg)" }}
              >
                ADVOCATE TRAINEE
              </div>
            </div>

            {/* Right: Clipped Notebook Page with Objective & Mission */}
            <div className="md:col-span-7 space-y-6">
              {/* Yellow Lined Note Paper */}
              <div 
                className="relative bg-[#FFFDF0] border border-[#E5DEC7] p-6 sm:p-8 shadow-md rounded-xs"
                style={{
                  transform: "rotate(1deg)",
                  backgroundImage: "linear-gradient(to bottom, transparent 27px, #E8E2D0 28px)",
                  backgroundSize: "100% 28px",
                  lineHeight: "28px",
                }}
              >
                {/* Paperclip graphic placeholder */}
                <div className="absolute -top-3 left-8 w-4 h-9 border-2 border-stone-500 rounded-full bg-stone-300/60 shadow-xs" />

                <h2 className="text-xl font-bold font-mono tracking-tight text-neutral-900 border-b border-stone-300 pb-1 mb-3">
                  // MISSION MANIFESTO
                </h2>
                
                <p className="text-sm sm:text-base font-serif text-stone-800 leading-relaxed italic">
                  &ldquo;{profile.careerObjective}&rdquo;
                </p>

                <div className="mt-4 pt-3 border-t border-dashed border-stone-300 text-xs font-mono text-stone-600">
                  <span className="bg-yellow-200 px-2 py-0.5 text-neutral-900 font-bold">
                    KEY COMMITMENT:
                  </span>{" "}
                  Relentless constitutional research, frontline habeas corpus intervention, and systemic litigation.
                </div>
              </div>

              {/* Quick Contact Tag */}
              <div 
                className="bg-[#FAF7EE] border border-stone-300 p-4 shadow-xs flex flex-wrap justify-between items-center gap-2 text-xs font-mono"
                style={{ transform: "rotate(-1deg)" }}
              >
                <span>📍 {profile.contact.location}</span>
                <span>📞 {profile.contact.phone}</span>
                <span className="text-stone-900 font-bold underline">{profile.contact.email}</span>
              </div>
            </div>

          </div>
        </div>

        {/* Section 2: Case Files & Work Dossier (Scrapbook Cards) */}
        <section className="space-y-6 pt-4">
          <div className="flex items-center gap-3">
            <span className="bg-stone-900 text-white font-mono text-xs px-2 py-1">DOSSIER #01</span>
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900" style={{ fontFamily: "Georgia, serif" }}>
              Field Experience &amp; Strategic Litigation
            </h2>
            <div className="flex-1 border-b border-dashed border-stone-400" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profile.experience.map((exp, idx) => {
              const rotations = ["rotate-1", "-rotate-1", "rotate-0.5", "-rotate-0.5"];
              const rot = rotations[idx % rotations.length];
              return (
                <div 
                  key={idx}
                  className={`relative bg-[#FAF6EE] border border-stone-300 p-6 shadow-md rounded-xs ${rot} hover:rotate-0 transition-transform duration-200`}
                >
                  {/* Pushpin indicator */}
                  <div className="absolute -top-2 right-6 w-3 h-3 rounded-full bg-red-600 shadow-xs border border-white" />

                  <div className="flex justify-between items-baseline mb-2 border-b border-stone-200 pb-2">
                    <h3 className="font-bold text-neutral-900 font-serif text-lg">
                      {exp.role}
                    </h3>
                    <span className="text-[11px] font-mono text-stone-500 bg-stone-200/60 px-2 py-0.5 rounded-xs">
                      {exp.period}
                    </span>
                  </div>

                  <div className="text-xs font-mono font-semibold text-red-900 mb-3">
                    {exp.organization} &bull; {exp.location}
                  </div>

                  <ul className="text-xs space-y-2 text-stone-700 leading-relaxed font-sans">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex gap-2 items-start">
                        <span className="text-stone-400 font-mono select-none">&bull;</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 3: Education & Certifications (Index Cards) */}
        <section className="space-y-6 pt-4">
          <div className="flex items-center gap-3">
            <span className="bg-stone-900 text-white font-mono text-xs px-2 py-1">DOSSIER #02</span>
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900" style={{ fontFamily: "Georgia, serif" }}>
              Academic Degrees &amp; Credentials
            </h2>
            <div className="flex-1 border-b border-dashed border-stone-400" />
          </div>

          <div className="bg-[#FFFDF8] border-2 border-[#D9D1BF] p-6 shadow-lg rounded-xs relative">
            {/* Stamp */}
            <div 
              className="absolute top-4 right-4 border border-emerald-800 text-emerald-800 font-mono text-[10px] font-bold px-2 py-1 uppercase rotate-6 bg-emerald-50/80"
            >
              VERIFIED RECORD
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {profile.education.map((edu, idx) => (
                <div key={idx} className="border-l-2 border-stone-400 pl-4 space-y-1">
                  <div className="text-xs font-mono text-stone-500">{edu.period}</div>
                  <h4 className="font-bold text-sm text-neutral-900 font-serif">{edu.degree}</h4>
                  <div className="text-xs text-stone-600">{edu.institution}</div>
                  {edu.notes && (
                    <div className="text-[11px] text-stone-500 italic mt-1">{edu.notes}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Skills & Activism Notes */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {/* Legal Skills Sticky Note */}
          <div 
            className="bg-[#FEF9C3] border border-amber-300 p-6 shadow-md rounded-xs -rotate-1"
          >
            <h3 className="font-mono text-xs uppercase tracking-widest text-amber-900 font-bold mb-3 border-b border-amber-300 pb-1">
              ⚡ LEGAL TOOLKIT &amp; SPECIALIZATIONS
            </h3>
            <ul className="text-xs space-y-2 text-stone-800 font-mono">
              {profile.skills.legal.map((s, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-amber-700">&#10003;</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Community & Leadership Sticky Note */}
          <div 
            className="bg-[#E0F2FE] border border-sky-300 p-6 shadow-md rounded-xs rotate-1"
          >
            <h3 className="font-mono text-xs uppercase tracking-widest text-sky-900 font-bold mb-3 border-b border-sky-300 pb-1">
              🤝 LEADERSHIP &amp; COMMUNITY ROOTS
            </h3>
            <ul className="text-xs space-y-2 text-stone-800 font-mono">
              {profile.leadership.map((l, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-sky-700">&bull;</span>
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center pt-8 pb-12 border-t border-stone-300 text-xs font-mono text-stone-500">
          <p>
            SCRAPBOOK / MIXED MEDIA EXPERIMENT &bull; CURATED FOR {profile.fullName.toUpperCase()} &bull; 2026
          </p>
          <div className="mt-2">
            <Link href="/" className="underline hover:text-neutral-900">
              Return to Style Laboratory
            </Link>
          </div>
        </footer>

      </div>
    </div>
  );
}
