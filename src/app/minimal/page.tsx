import Link from "next/link";
import Image from "next/image";
import { profile } from "@/data/profile";

export default function Minimalism() {
  return (
    <div className="min-h-screen bg-[#FAFAF9] text-[#1C1917] p-6 sm:p-16 font-serif selection:bg-[#E7E5E4] selection:text-black">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Whisper-quiet Top Navigation */}
        <nav className="flex justify-between items-center text-xs font-sans tracking-widest uppercase border-b border-[#E7E5E4] pb-4">
          <Link href="/" className="text-neutral-500 hover:text-black transition-colors">
            &larr; Index
          </Link>
          <span className="text-neutral-400">
            Emmanuel Baraka &bull; 012 / Minimal
          </span>
        </nav>

        {/* Hero Section */}
        <header className="space-y-10">
          <div className="space-y-3">
            <div className="text-xs font-sans uppercase tracking-[0.25em] text-neutral-400">
              Constitutional Litigator &bull; Advocate Trainee
            </div>
            <h1 className="text-4xl sm:text-6xl font-normal tracking-tight text-neutral-900 leading-tight">
              {profile.fullName}
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-start pt-4 border-t border-[#E7E5E4]">
            {/* Portrait with Quiet Isolation */}
            <div className="sm:col-span-5">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100 grayscale hover:grayscale-0 transition-all duration-700">
                <Image 
                  src={profile.avatar}
                  alt={profile.fullName}
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div className="text-[10px] font-sans tracking-widest text-neutral-400 uppercase mt-2">
                Nairobi / Viterbo
              </div>
            </div>

            {/* Concise Bio */}
            <div className="sm:col-span-7 space-y-6">
              <p className="text-lg sm:text-xl font-light text-neutral-800 leading-relaxed italic">
                &ldquo;{profile.careerObjective}&rdquo;
              </p>

              <p className="text-sm font-sans font-light text-neutral-600 leading-relaxed">
                {profile.summary}
              </p>

              <div className="pt-4 border-t border-[#E7E5E4] text-xs font-sans space-y-1 text-neutral-500">
                <div>{profile.contact.location}</div>
                <div>{profile.contact.phone}</div>
                <div>{profile.contact.email}</div>
              </div>
            </div>
          </div>
        </header>

        {/* Selected Casework (Editorial Layout) */}
        <section className="space-y-8 pt-8 border-t border-[#E7E5E4]">
          <h2 className="text-xs font-sans uppercase tracking-[0.25em] text-neutral-400">
            Selected Casework &bull; KeJUDE &amp; Law Firms
          </h2>

          <div className="divide-y divide-[#E7E5E4]">
            {profile.experience.map((exp, idx) => (
              <div key={idx} className="py-6 grid grid-cols-1 sm:grid-cols-12 gap-4">
                <div className="sm:col-span-4 text-xs font-sans text-neutral-400">
                  {exp.period}
                </div>
                <div className="sm:col-span-8 space-y-2">
                  <h3 className="text-base font-normal text-neutral-900">
                    {exp.role}
                  </h3>
                  <div className="text-xs font-sans text-neutral-500">
                    {exp.organization} &bull; {exp.location}
                  </div>
                  <ul className="text-xs font-sans text-neutral-600 space-y-1.5 pt-1">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="leading-relaxed">&mdash; {h}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Record */}
        <section className="space-y-6 pt-8 border-t border-[#E7E5E4]">
          <h2 className="text-xs font-sans uppercase tracking-[0.25em] text-neutral-400">
            Academic Credentials
          </h2>

          <div className="space-y-4">
            {profile.education.map((edu, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 text-sm">
                <div>
                  <span className="font-normal text-neutral-900">{edu.degree}</span>
                  <span className="text-neutral-500 text-xs font-sans block sm:inline sm:ml-2">
                    {edu.institution}
                  </span>
                </div>
                <span className="text-xs font-sans text-neutral-400 shrink-0">
                  {edu.period}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-12 pb-8 border-t border-[#E7E5E4] text-center text-xs font-sans tracking-widest uppercase text-neutral-400">
          Emmanuel Baraka Ongau &bull; 2026
        </footer>

      </div>
    </div>
  );
}
