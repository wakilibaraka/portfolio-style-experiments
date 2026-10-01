import Link from 'next/link';

export default function Home() {
  const styles = [
    { id: 'vernacular', name: 'Vernacular Web (GeoCities)', desc: 'Tiled backgrounds, marquee tags, animated GIFs.' },
    { id: 'brutalism', name: 'Web Brutalism', desc: 'Raw HTML, browser-default styling, exposed structure.' },
    { id: 'scrapbook', name: 'Scrapbook / Mixed Media', desc: 'Collage, tape, torn edges, chaotic layout.' },
    { id: 'neobrutalism', name: 'Neobrutalism', desc: 'Thick black outlines, bright colors, hard shadows.' },
    { id: 'y2k', name: 'Y2K Digital Aesthetic', desc: 'Liquid chrome, gel, iridescent blue-silver.' },
    { id: 'aero', name: 'Frutiger Aero', desc: 'Glossy bubbles, glass surfaces, aqua/green palette.' },
    { id: 'skeuomorphism', name: 'Skeuomorphism', desc: 'Simulated real materials, physical lighting.' },
    { id: 'claymorphism', name: 'Claymorphism', desc: 'Puffy 3D buttons, Play-doh aesthetic.' },
    { id: 'neumorphism', name: 'Neumorphism', desc: 'Soft buttons pushed out of background.' },
    { id: 'glassmorphism', name: 'Glassmorphism', desc: 'Frosted translucent panels, vivid backdrops.' },
    { id: 'flat', name: 'Flat Design', desc: 'Solid 2D colors, no simulated depth.' },
    { id: 'minimal', name: 'Minimalism', desc: 'Extreme negative space, monochrome palette.' },
    { id: 'wabi-sabi', name: 'Wabi-Sabi', desc: 'Organic, asymmetrical layouts, earthy tones.' },
  ];

  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-900 font-sans p-8 md:p-16">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 border-b-4 border-black pb-8">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">Style Experiments</h1>
          <p className="text-xl text-neutral-600 font-medium max-w-2xl">
            A laboratory for testing different visual and animated aesthetics for the portfolio. 
            Ordered from the most chaotic & retro to the most refined & minimal.
          </p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {styles.map((style, index) => (
            <Link 
              key={style.id} 
              href={`/${style.id}`}
              className="group block p-6 bg-white border-2 border-transparent hover:border-black rounded-xl shadow-sm hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <div className="text-sm font-bold text-neutral-400 mb-2">Style {index + 1}</div>
              <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-600">{style.name}</h2>
              <p className="text-neutral-600">{style.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
