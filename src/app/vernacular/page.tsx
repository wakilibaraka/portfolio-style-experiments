import Link from 'next/link';
import Image from 'next/image';
import { profile } from '@/data/profile';

export default function VernacularWeb() {
  return (
    <div 
      className="min-h-screen font-serif p-4"
      style={{
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")',
        backgroundColor: '#000080', // Navy 90s blue
        color: '#00FF00', // Classic neon green
      }}
    >
      <div className="max-w-4xl mx-auto border-4 border-double border-yellow-400 p-6 md:p-10 bg-black/85 shadow-[12px_12px_0px_rgba(255,0,0,0.7)]">
        
        {/* Navigation */}
        <div className="mb-4 text-sm font-sans flex justify-between items-center border-b border-yellow-500/40 pb-2">
          <Link href="/" className="text-yellow-300 underline hover:text-white">
            &laquo; [BACK TO STYLE INDEX]
          </Link>
          <span className="text-cyan-300 text-xs">BEST VIEWED IN NETSCAPE NAVIGATOR 4.08 @ 800x600</span>
        </div>

        {/* Header Marquee Container */}
        <header className="text-center mb-8 border-b-2 border-dashed border-red-500 pb-6 overflow-hidden">
          <div className="text-xs text-yellow-300 tracking-widest uppercase mb-1">
            *** WELCOME TO THE OFFICIAL CYBER-PORTFOLIO OF ***
          </div>
          <div className="whitespace-nowrap overflow-hidden">
            <h1 className="text-2xl sm:text-4xl font-black tracking-wider text-yellow-300 drop-shadow-[3px_3px_0_red] inline-block marquee-text">
              ⚖️ ADVOCATE TRAINEE EMMANUEL BARAKA ONGAU &bull; CONSTITUTIONAL LITIGATOR &bull; HUMAN RIGHTS DEFENDER ⚖️
            </h1>
          </div>
          <p className="text-cyan-300 text-sm mt-2 italic">
            &quot;Defending Human Rights &bull; Striking Down Unconstitutional Statutes &bull; Empowering The People&quot;
          </p>
        </header>

        {/* Bio & Portrait Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center border-2 border-green-500 p-4 mb-8 bg-green-950/20">
          <div className="text-center">
            <div className="inline-block p-2 border-4 border-yellow-400 bg-yellow-500/20 shadow-[6px_6px_0_#ff00ff]">
              <Image 
                src={profile.avatar} 
                alt={profile.fullName} 
                width={200} 
                height={260} 
                className="object-cover border-2 border-black"
                priority
              />
            </div>
            <div className="text-xs text-yellow-200 mt-2 font-mono font-bold">
              [COUNSEL ONGAU, ESQ.]
            </div>
          </div>
          
          <div className="md:col-span-2 space-y-3 text-sm md:text-base text-gray-200">
            <h2 className="text-2xl text-cyan-300 font-bold underline decoration-wavy">
              :: ADVOCATE PROFILE &amp; MISSION ::
            </h2>
            <p>
              Greetings! I am <strong>{profile.fullName}</strong>. I am a dedicated constitutional litigator and legal practitioner currently pursuing an <strong>MSc in Security and Human Rights</strong> at the Kenya School of Law.
            </p>
            <p className="text-emerald-300">
              ⚡ <strong>FRONT-LINE ACTIVISM:</strong> Under the mentorship of <strong>Senator Okiya Omtatah</strong> at KeJUDE, I conducted legal research for strategic public-interest litigation and drafted emergency <em>habeas corpus</em> applications for youth detained in the nationwide Gen Z protests.
            </p>
            <div className="text-xs text-yellow-400 pt-2 font-mono">
              STATUS: [ACTIVE IN VITERBO / NAIROBI] &bull; CONTACT: {profile.contact.email}
            </div>
          </div>
        </section>

        {/* Experience Table in 90s Style */}
        <section className="mb-8">
          <h2 className="text-2xl text-fuchsia-400 mb-3 font-bold border-b border-fuchsia-500 pb-1">
            -= LEGAL DOSSIER &amp; EXPERIENCE =-
          </h2>
          <div className="space-y-4">
            {profile.experience.map((exp, idx) => (
              <div key={idx} className="border border-cyan-500 p-3 bg-blue-950/30">
                <div className="flex flex-col sm:flex-row justify-between text-yellow-300 font-bold">
                  <span>► {exp.role}</span>
                  <span className="text-xs text-cyan-300">{exp.period}</span>
                </div>
                <div className="text-xs text-emerald-400 mb-2 italic">
                  {exp.organization} — {exp.location}
                </div>
                <ul className="list-disc list-inside text-xs text-gray-300 space-y-1">
                  {exp.highlights.map((h, hIdx) => (
                    <li key={hIdx}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Qualifications */}
        <section className="mb-8 border-2 border-dashed border-yellow-400 p-4">
          <h2 className="text-xl text-yellow-300 font-bold mb-3">
            📜 CERTIFIED ACADEMIC CREDENTIALS
          </h2>
          <ul className="text-sm space-y-2 text-cyan-200 list-inside list-square">
            {profile.education.map((edu, idx) => (
              <li key={idx}>
                <strong>{edu.degree}</strong> — {edu.institution} <span className="text-xs text-yellow-400">({edu.period})</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Web Badges & 90s Footer */}
        <footer className="mt-10 text-center text-xs text-gray-400 border-t-2 border-gray-600 pt-6 space-y-3">
          <p className="text-emerald-400 font-mono text-sm">
            HITS COUNTER: <strong>[ 0 0 0 4 2 0 6 9 ]</strong>
          </p>
          <p>
            Designed with valid HTML 4.01 &bull; Hosted in CyberSpace &bull; Copyright &copy; 2026 {profile.fullName}
          </p>
          <div className="flex justify-center gap-3 pt-2">
            <span className="border border-gray-500 bg-gray-900 px-2 py-1 text-cyan-300 font-mono text-[10px]">
              MADE WITH NOTEPAD
            </span>
            <span className="border border-gray-500 bg-gray-900 px-2 py-1 text-yellow-300 font-mono text-[10px]">
              NETSCAPE READY
            </span>
            <span className="border border-gray-500 bg-gray-900 px-2 py-1 text-green-300 font-mono text-[10px]">
              NO COOKIES!
            </span>
          </div>
        </footer>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .marquee-text {
          animation: marquee 14s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}} />
    </div>
  );
}
