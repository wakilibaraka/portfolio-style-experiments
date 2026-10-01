export default function VernacularWeb() {
  return (
    <div 
      className="min-h-screen font-serif"
      style={{
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")',
        backgroundColor: '#000080', // Navy blue
        color: '#00FF00', // Neon green text
      }}
    >
      <div className="max-w-3xl mx-auto border-4 border-double border-yellow-400 p-8 bg-black/80 mt-10 shadow-[10px_10px_0px_rgba(255,0,0,0.5)]">
        <header className="text-center mb-8 border-b-2 border-dashed border-red-500 pb-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://media.giphy.com/media/11KzOet1ElBDz2/giphy.gif" alt="Flames" className="mx-auto mb-4 h-16" />
          <h1 className="text-5xl font-black tracking-widest text-yellow-300 drop-shadow-[2px_2px_0_red]">
            <marquee scrollamount="8">WELCOME TO MY CYBER PORTFOLIO</marquee>
          </h1>
        </header>

        <main className="space-y-8 text-lg">
          <section className="border-2 border-green-500 p-4 relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://media.giphy.com/media/TGWvissTjeviMAVsqo/giphy.gif" alt="Under Construction" className="absolute -top-6 -right-6 h-12" />
            <h2 className="text-2xl text-cyan-300 mb-4 underline decoration-wavy">:: About Me ::</h2>
            <p>
              Hi, I am <strong>Baraka</strong>! Im a webmaster and cyber-explorer. 
              Currently updating this page with Microsoft FrontPage 98. 
              Best viewed in Netscape Navigator!
            </p>
          </section>

          <section className="text-center">
            <h2 className="text-2xl text-fuchsia-400 mb-4 blink-animation">-= Cool Links =-</h2>
            <ul className="list-inside list-disc text-left inline-block space-y-2 text-cyan-200">
              <li><a href="#" className="hover:text-yellow-400 hover:underline">My Guestbook</a></li>
              <li><a href="#" className="hover:text-yellow-400 hover:underline">Webring of Fire</a></li>
              <li><a href="#" className="hover:text-yellow-400 hover:underline">Download my Resume.doc</a></li>
            </ul>
          </section>
        </main>

        <footer className="mt-12 text-center text-sm text-gray-400 border-t-2 border-gray-600 pt-4">
          <p>You are visitor number: <strong>00042069</strong></p>
          <div className="flex justify-center gap-2 mt-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://cyber.dabamos.de/88x31/netscape4.gif" alt="Netscape" className="pixelated" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://cyber.dabamos.de/88x31/html40.gif" alt="HTML 4.0" className="pixelated" />
          </div>
        </footer>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .blink-animation {
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}} />
    </div>
  );
}
