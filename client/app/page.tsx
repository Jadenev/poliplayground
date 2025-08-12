import Link from 'next/link';
/*

Our colors
#86c1f0
#f9b5ba
#a1bfa0
#f0b953
#7580ae

Recommended template style
bg-gray-900
text-white
text-amber-300
text-gray-300 / text-gray-900

*/
export default function Home() {
  return (
    <main className="min-h-screen bg-[#a1bfa0] text-gray-900 flex flex-col items-center justify-center px-6">
      <header className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Legible
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-900 max-w-2xl">
          Making complex policies easy to understand — because democracy works
          best when everyone&apos;s on the same page.
        </p>
      </header>

      <div className="mt-8 flex gap-4">
        <Link href="/about"><button className="bg-[#f0b953] text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-[#f0b953]/70 transition border-2 border-gray-900"> Learn More </button></Link>
      </div>

      <footer className="mt-16 text-sm text-gray-900">
        © {new Date().getFullYear()} Legible. All rights reserved.
      </footer>
    </main>
  );
}
