import Link from "next/link";
import Image from "next/image";
import { profile } from "@/data/profile";

export default function WebBrutalism() {
  return (
    <div className="min-h-screen bg-white text-black p-4 sm:p-8" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
      <nav className="mb-6 pb-2 border-b-2 border-black flex justify-between items-center text-sm">
        <Link href="/" className="text-[blue] underline">
          &larr; Return to Style Index
        </Link>
        <span className="font-mono text-xs">DOC_REF: CV_LEGAL_2026_BARAKA</span>
      </nav>

      {/* Main Header */}
      <header className="mb-8">
        <h1 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight mb-2">
          {profile.fullName}
        </h1>
        <div className="bg-black text-white p-1 inline-block font-mono text-xs sm:text-sm uppercase mb-3">
          {profile.title}
        </div>
        <hr className="border-black border-t-2" />
        <div className="mt-2 text-sm font-mono flex flex-wrap gap-x-6 gap-y-1">
          <span>LOC: {profile.contact.location}</span>
          <span>TEL: {profile.contact.phone}</span>
          <span>EMAIL: {profile.contact.email}</span>
        </div>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column: Profile Photo & Core Profile */}
        <section className="md:col-span-1 space-y-6">
          <div className="border-2 border-black p-2 bg-gray-100">
            <div className="relative w-full aspect-[4/5] border border-black overflow-hidden bg-black">
              <Image 
                src={profile.avatar} 
                alt={profile.fullName} 
                fill 
                className="object-cover grayscale contrast-125"
                priority
              />
            </div>
            <div className="text-xs font-mono mt-2 text-center">
              FIG 1.0: EMMANUEL BARAKA ONGAU (ADVOCATE TRAINEE)
            </div>
          </div>

          <div className="border border-black p-4">
            <h2 className="text-xl font-bold border-b border-black pb-1 mb-2">CAREER OBJECTIVE</h2>
            <p className="text-sm leading-relaxed text-justify">
              {profile.careerObjective}
            </p>
          </div>

          <div className="border border-black p-4">
            <h2 className="text-xl font-bold border-b border-black pb-1 mb-2">CORE COMPETENCIES</h2>
            <ul className="list-disc list-inside text-sm space-y-1">
              {profile.skills.legal.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Right Columns: Deep Legal Work & Track Record */}
        <section className="md:col-span-2 space-y-8">
          {/* Executive Summary */}
          <div className="border border-black p-4 bg-gray-50">
            <h2 className="text-lg font-bold font-mono uppercase bg-black text-white p-1 inline-block mb-2">
              EXECUTIVE_SUMMARY.TXT
            </h2>
            <p className="text-sm leading-relaxed">
              {profile.summary}
            </p>
          </div>

          {/* Work History Table */}
          <div>
            <h2 className="text-2xl font-bold mb-3 border-b-2 border-black">RECORD OF LEGAL PRACTICE</h2>
            <table className="w-full text-left border-collapse border border-black text-xs sm:text-sm">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-black p-2">Period</th>
                  <th className="border border-black p-2">Role &amp; Entity</th>
                  <th className="border border-black p-2">Casework &amp; Impact</th>
                </tr>
              </thead>
              <tbody>
                {profile.experience.map((exp, idx) => (
                  <tr key={idx} className={idx % 2 === 1 ? "bg-gray-50" : ""}>
                    <td className="border border-black p-2 align-top font-mono whitespace-nowrap">
                      {exp.period}
                    </td>
                    <td className="border border-black p-2 align-top">
                      <strong>{exp.role}</strong>
                      <div className="text-xs text-gray-700">{exp.organization} ({exp.location})</div>
                    </td>
                    <td className="border border-black p-2 align-top">
                      <ul className="list-disc list-inside space-y-1 text-xs">
                        {exp.highlights.map((h, hIdx) => (
                          <li key={hIdx}>{h}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Academic Records */}
          <div>
            <h2 className="text-xl font-bold mb-2 border-b border-black">ACADEMIC &amp; PROFESSIONAL QUALIFICATIONS</h2>
            <ul className="divide-y divide-black border border-black text-xs sm:text-sm">
              {profile.education.map((edu, idx) => (
                <li key={idx} className="p-2 flex justify-between items-baseline gap-4">
                  <div>
                    <strong>{edu.degree}</strong>
                    <div className="text-xs text-gray-600">{edu.institution}</div>
                  </div>
                  <span className="font-mono text-xs whitespace-nowrap">{edu.period}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* References & Formal Contact */}
          <div className="border-4 border-black p-4 bg-gray-100">
            <h3 className="font-bold text-lg mb-2">FORMAL INQUIRIES &amp; CHAMBERS CONTACT</h3>
            <p className="text-xs mb-3 font-mono">
              Direct all litigation briefs and communication to:
            </p>
            <div className="bg-white border border-black p-3 font-mono text-xs space-y-1">
              <div>EMAIL: {profile.contact.email}</div>
              <div>PHONE: {profile.contact.phone}</div>
              <div>LOCATION: {profile.contact.location}</div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-12 pt-4 border-t-2 border-black text-xs font-mono text-center">
        DOCUMENT GENERATED AUTOMATICALLY VIA RAW WEB BRUTALISM PROTOCOL • {profile.fullName}
      </footer>
    </div>
  );
}
