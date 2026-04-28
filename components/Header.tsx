import Link from 'next/link';
import { navItems } from '@/data/siteContent';

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container-base flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold text-primary-700">
          남구생활제안소
        </Link>
        <nav className="hidden gap-4 text-sm lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-slate-700 transition hover:text-primary-700">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
