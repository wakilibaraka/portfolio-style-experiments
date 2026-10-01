import Link from "next/link";
import Image from "next/image";
import { profile } from "@/data/profile";

export default function FlatDesign() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] p-4 sm:p-10 font-sans">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Navigation Bar (Pure Flat 2D) */}
        <nav className="flex justify-between items-center bg-[#0F172A] text-white p-4">
          <Link 
            href="/"
            className="text-xs font-bold uppercase tracking-widest bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-4 py-2 transition-colors"
          >
            &larr; Style Lab
          </Link>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
            <span className="w-2.5 h-2.5 bg-[#10B981]" />
            <span>Style 11 &bull; Flat Design 2.0</span>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="grid grid-cols-1 md:grid-cols-12 bg-white border-l-8 border-[#2563EB]">
          {/* Portrait Container */}
          <div className="md:col-span-5 bg-[#E2E8F0] p-6 flex justify-center items-center">
            <div className="relative w-60 h-76 sm:w-68 sm:h-88 overflow-hidden bg-[#CBD5E1]">
              <Image 
                src={profile.avatar}
                alt={profile.fullName}
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-7 p-6 sm:p-10 space-y-4 flex flex-col justify-center">
            <div className="inline-block bg-[#EFF6FF] text-[#1D4ED8] font-bold text-xs uppercase tracking-wider px-3 py-1 w-max">
              Human Rights Advocate &bull; Constitutional Litigator
            </div>

            <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#0F172A]">
              {profile.fullName}
            </h1>

            <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
              {profile.summary}
            </p>

            <div className="flex flex-wrap gap-2 pt-2 text-xs font-bold">
              <span className="bg-[#F1F5F9] text-[#475569] px-3 py-1.5">
                📍 {profile.contact.location}
              </span>
              <span className="bg-[#F1F5F9] text-[#475569] px-3 py-1.5">
                📞 {profile.contact.phone}
              </span>
              <span className="bg-[#F1F5F9] text-[#475569] px-3 py-1.5">
                ✉️ {profile.contact.email}
              </span>
            </div>
          </div>
        </header>

        {/* Career Objective Banner */}
        <div className="bg-[#2563EB] text-white p-6 sm:p-8">
          <div className="text-xs font-bold uppercase tracking-widest text-[#93C5FD] mb-2">
            Mission Objective
          </div>
          <p className="text-base sm:text-xl font-bold leading-relaxed">
            &ldquo;{profile.careerObjective}&rdquo;
          </p>
        </div>

        {/* Casework Grid */}
        <section className="space-y-4">
          <div className="border-b-2 border-[#0F172A] pb-2">
            <h2 className="text-xl font-black uppercase tracking-wider text-[#0F172A]">
              Strategic Casework &amp; Practice Record
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {profile.experience.map((exp, idx) => (
              <div 
                key={idx}
                className="bg-white p-6 border-t-4 border-[#0F172A] space-y-3"
              >
                <div className="flex justify-between items-start gap-2">
                  <h3 className="font-bold text-base text-[#0F172A]">
                    {exp.role}
                  </h3>
                  <span className="text-[11px] font-bold bg-[#F1F5F9] text-[#475569] px-2 py-0.5 shrink-0">
                    {exp.period}
                  </span>
                </div>

                <div className="text-xs font-bold text-[#2563EB]">
                  {exp.organization} &bull; {exp.location}
                </div>

                <ul className="text-xs space-y-1.5 text-[#334155] list-disc list-inside leading-relaxed">
                  {exp.highlights.map((h, hIdx) => (
                    <li key={hIdx}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Skills Split */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 border-t-4 border-[#10B981] space-y-4">
            <h3 className="text-sm font-black uppercase tracking-wider text-[#0F172A]">
              Academic Credentials
            </h3>
            <div className="space-y-3">
              {profile.education.map((edu, idx) => (
                <div key={idx} className="border-l-4 border-[#10B981] pl-3">
                  <div className="text-xs font-bold text-[#0F172A]">{edu.degree}</div>
                  <div className="text-[11px] text-[#64748B]">{edu.institution} &bull; {edu.period}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 border-t-4 border-[#F59E0B] space-y-4">
            <h3 className="text-sm font-black uppercase tracking-wider text-[#0F172A]">
              Advocacy Competencies
            </h3>
            <div className="flex flex-wrap gap-2">
              {profile.skills.legal.map((s, idx) => (
                <span 
                  key={idx}
                  className="bg-[#FEF3C7] text-[#92400E] font-bold text-xs px-3 py-1.5"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#0F172A] text-white/60 p-6 text-center text-xs font-bold uppercase tracking-widest">
          Flat Design 2.0 &bull; Emmanuel Baraka Ongau &bull; 2026
        </footer>

      </div>
    </div>
  );
}
