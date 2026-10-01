import Link from "next/link";

export default function WebBrutalism() {
  return (
    <div className="min-h-screen bg-white text-black p-4" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
      <nav className="mb-8 pb-4 border-b-2 border-black">
        <Link href="/" className="text-[blue] underline text-lg">← Back to Index</Link>
      </nav>

      <header className="mb-8">
        <h1 className="text-4xl sm:text-6xl font-bold mb-2">BARAKA'S PORTFOLIO</h1>
        <hr className="border-black border-t-2" />
        <p className="mt-2 text-lg">Welcome to the raw, unstyled version of my portfolio.</p>
      </header>

      <main className="flex flex-col md:flex-row gap-8">
        {/* Left Column */}
        <section className="flex-1">
          <h2 className="text-2xl font-bold mb-4 bg-black text-white inline-block p-1">Index of /about</h2>
          <ul className="list-disc list-inside mb-6 space-y-2 text-lg">
            <li><strong>Name:</strong> Baraka</li>
            <li><strong>Role:</strong> Full-Stack Engineer & Webmaster</li>
            <li><strong>Location:</strong> Nairobi, Kenya</li>
            <li>
              <strong>Status:</strong> <span className="bg-yellow-300">Available for work</span>
            </li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 border-b border-black">Projects</h2>
          <table className="w-full text-left border-collapse border border-black mb-8">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-black p-2">Project Name</th>
                <th className="border border-black p-2">Tech Stack</th>
                <th className="border border-black p-2">Link</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-black p-2">The Blessed Bible</td>
                <td className="border border-black p-2">Flutter, SQLite, Python</td>
                <td className="border border-black p-2"><a href="#" className="text-[blue] underline">/view</a></td>
              </tr>
              <tr>
                <td className="border border-black p-2">Interactive Office</td>
                <td className="border border-black p-2">Next.js, Three.js, Tailwind</td>
                <td className="border border-black p-2"><a href="#" className="text-[blue] underline">/view</a></td>
              </tr>
              <tr>
                <td className="border border-black p-2">AI Agent Swarm</td>
                <td className="border border-black p-2">Python, OpenAI, GCP</td>
                <td className="border border-black p-2"><a href="#" className="text-[blue] underline">/view</a></td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Right Column */}
        <aside className="w-full md:w-1/3 border-4 border-black p-4 bg-gray-100">
          <h3 className="text-xl font-bold mb-4 underline">SYSTEM_LOG</h3>
          <blockquote className="border-l-4 border-gray-500 pl-4 italic text-gray-700 font-mono text-sm mb-4">
            "Design is not just what it looks like and feels like. Design is how it works... but sometimes it doesn't need to look like anything at all."
          </blockquote>
          
          <form className="mt-8">
            <fieldset className="border border-black p-4">
              <legend className="font-bold px-2">Contact</legend>
              <div className="mb-2">
                <label className="block mb-1">Email:</label>
                <input type="email" className="border border-black p-1 w-full" defaultValue="hello@barakalines.com" />
              </div>
              <button type="button" className="border-2 border-black bg-gray-300 px-4 py-1 active:bg-gray-400">
                Submit_Query
              </button>
            </fieldset>
          </form>
        </aside>
      </main>

      <footer className="mt-16 pt-4 border-t-2 border-black text-sm text-center">
        <p>rendered via RAW_HTML. Copyright (c) Baraka.</p>
      </footer>
    </div>
  );
}
