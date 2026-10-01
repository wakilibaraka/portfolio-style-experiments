import Link from 'next/link';
import Image from 'next/image';
import { profile } from '@/data/profile';

export default function Home() {
  const styles = [
    { 
      id: 'vernacular', 
      name: 'Vernacular Web (GeoCities)', 
      status: 'Ready',
      vibe: 'Chaotic 90s Web',
      desc: 'Tiled backgrounds, marquee tags, animated GIFs, hit counters, and FrontPage aesthetic.' 
    },
    { 
      id: 'brutalism', 
      name: 'Web Brutalism', 
      status: 'Ready',
      vibe: 'Unadorned Raw HTML',
      desc: 'Browser-default materials, Times New Roman, raw tables, unstyled borders, and zero decorative CSS.' 
    },
    { 
      id: 'scrapbook', 
      name: 'Scrapbook / Mixed Media', 
      status: 'Ready',
      vibe: 'Tactile Collage & Activism',
      desc: 'Torn legal paper, washi tape, stamped notices, polaroids, typewriter notes, and street-advocacy texture.' 
    },
    { 
      id: 'neobrutalism', 
      name: 'Neobrutalism', 
      status: 'Ready',
      vibe: 'Bold High-Contrast Pop',
      desc: 'Thick black 4px outlines, saturated yellow/cyan blocks, hard offset shadows, high-energy typography.' 
    },
    { 
      id: 'y2k', 
      name: 'Y2K Digital Aesthetic', 
      status: 'Ready',
      vibe: 'Cyber-Chrome Millennial',
      desc: 'Liquid chrome textures, metallic sheen, glossy translucent buttons, iridescent blue-silver matrix.' 
    },
    { 
      id: 'aero', 
      name: 'Frutiger Aero / Aqua', 
      status: 'Ready',
      vibe: 'Glossy Skeuo-Futurism',
      desc: 'Aqua bubbles, sky-blue gradients, glossy glass sheen, nature-meets-tech aesthetic of early 2000s OSes.' 
    },
    { 
      id: 'skeuomorphism', 
      name: 'Skeuomorphism', 
      status: 'Queued',
      vibe: 'Physical Law Office Metaphor',
      desc: 'Leather-bound case files, polished mahogany desk, brass paperclips, physical stamped seals, warm lamps.' 
    },
    { 
      id: 'claymorphism', 
      name: 'Claymorphism', 
      status: 'Queued',
      vibe: 'Puffy 3D Play-Doh UI',
      desc: 'Double inner shadows, exaggerated border radii, floating soft-pill buttons, pastel depth.' 
    },
    { 
      id: 'neumorphism', 
      name: 'Neumorphism', 
      status: 'Queued',
      vibe: 'Soft Extruded Surface',
      desc: 'Continuous tactile surface with paired soft highlights and drop-shadows; inset pressed states.' 
    },
    { 
      id: 'glassmorphism', 
      name: 'Glassmorphism / Liquid Glass', 
      status: 'Queued',
      vibe: 'Frosted Refraction & Modern Apple',
      desc: 'Multi-layered blurred backdrops, refractive edge highlights, ambient lighting, translucent depth.' 
    },
    { 
      id: 'flat', 
      name: 'Flat Design 2.0', 
      status: 'Queued',
      vibe: 'Swiss Precision Grid',
      desc: 'Solid bold colors, crisp mathematical typography, zero artificial depth, pure communicative clarity.' 
    },
    { 
      id: 'minimal', 
      name: 'Minimalism', 
      status: 'Queued',
      vibe: 'Monochrome Negative Space',
      desc: 'Expansive white/dark voids, whisper-quiet typography, high editorial discipline, single accent element.' 
    },
    { 
      id: 'wabi-sabi', 
      name: 'Wabi-Sabi', 
      status: 'Queued',
      vibe: 'Imperfect Organic Elegance',
      desc: 'Natural earth pigments, handmade Japanese washi textures, asymmetrical balance, weathered organic warmth.' 
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F0] text-neutral-900 font-sans p-6 md:p-14">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header Profile Card */}
        <header className="bg-white border-2 border-neutral-900 p-8 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row items-center gap-8">
          <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-xl overflow-hidden border-2 border-neutral-900 shrink-0 shadow-md">
            <Image 
              src={profile.avatar} 
              alt={profile.fullName} 
              fill 
              className="object-cover object-top"
              priority
            />
          </div>
          <div className="space-y-3 text-center md:text-left flex-1">
            <div className="inline-block px-3 py-1 bg-amber-100 border border-amber-800 text-amber-900 text-xs font-bold uppercase tracking-wider rounded-full">
              Legal Practitioner • Human Rights & Constitutional Litigator
            </div>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight">{profile.fullName}</h1>
            <p className="text-sm md:text-base text-neutral-700 font-medium leading-relaxed max-w-2xl">
              {profile.summary}
            </p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start text-xs font-semibold text-neutral-600 pt-1">
              <span className="bg-neutral-100 px-3 py-1 rounded-md border border-neutral-300">📍 {profile.contact.location}</span>
              <span className="bg-neutral-100 px-3 py-1 rounded-md border border-neutral-300">⚖️ Kenya School of Law (MSc / ATP)</span>
              <span className="bg-neutral-100 px-3 py-1 rounded-md border border-neutral-300">🛡️ Public Interest Advocacy</span>
            </div>
          </div>
        </header>

        {/* Experiment Laboratory Description */}
        <section className="space-y-3">
          <div className="flex items-center justify-between border-b-2 border-neutral-900 pb-3">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">Style Laboratory</h2>
            <span className="text-xs font-bold bg-neutral-900 text-white px-3 py-1 rounded-full">
              6 of 13 Styles Live &amp; Ready
            </span>
          </div>
          <p className="text-neutral-600 text-sm md:text-base">
            Each route represents a completely distinct visual philosophy—from raw chaotic retro experiments to high-craft tactile collage and serene minimalist architecture. Click any ready experiment below to view Emmanuel&apos;s portfolio in that vibe:
          </p>
        </section>

        {/* Styles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {styles.map((style, idx) => {
            const isReady = style.status === 'Ready';
            return (
              <Link 
                key={style.id} 
                href={isReady ? `/${style.id}` : '#'}
                className={`group block p-6 rounded-xl border-2 transition-all duration-200 ${
                  isReady 
                    ? 'bg-white border-neutral-900 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 cursor-pointer' 
                    : 'bg-neutral-100/70 border-neutral-300 opacity-60 cursor-not-allowed'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-bold mb-3">
                  <span className="text-neutral-400">#{idx + 1}</span>
                  <span className={`px-2 py-0.5 rounded-full ${
                    isReady ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' : 'bg-neutral-200 text-neutral-600'
                  }`}>
                    {style.status}
                  </span>
                </div>
                <h3 className={`text-xl font-bold mb-1 ${isReady ? 'group-hover:text-blue-700' : 'text-neutral-700'}`}>
                  {style.name}
                </h3>
                <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
                  {style.vibe}
                </div>
                <p className="text-sm text-neutral-600 leading-snug">
                  {style.desc}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
