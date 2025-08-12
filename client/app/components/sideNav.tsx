'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

/// I'm worried this will need a type
const nav = [
  { href: '/policyExplorer', label: 'Policy Explorer' },
  { href: '/about', label: 'About' },
  { href: '/quiz', label: 'Quiz' }
];

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

export default function SideNav() {
  const pathname = usePathname();

  return (
    <aside className="h-screen w-64 bg-[#a1bfa0] text-slate-900 border-r border-grey-900">
      <div className="px-5 py-4 border-b border-grey-900">
        <Link href="/" className="group inline-flex items-center gap-2">
        {/*
          <span className="inline-block h-3 w-3 rounded-full bg-[#f0b953]" />
          <span className="inline-block h-3 w-3 rounded-full bg-[#86c1f0]" />
          <span className="inline-block h-3 w-3 rounded-full bg-[#7580ae]" />
        */}
          <span className="ml-2 text-xl font-semibold group-hover:text-[#454545] transition">
            Legible
          </span>
        </Link>
      </div>

      <nav className="mt-4 px-2">
        {nav.map(({ href, label }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={[
                'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition',
                active
                  ? 'bg-[#212121] text-white shadow-sm'
                  : 'text-slate-900 hover:bg-[#212121] hover:text-white'
              ].join(' ')}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#a1bfa0]" />
              {label}
            </Link>
          );
        })}
      </nav>
    {/*}
      <div className="absolute bottom-3 left-0 w-full px-5 text-xs text-slate-500">
        © {new Date().getFullYear()} Legible
      </div>}*/}
    </aside>
  );
}
