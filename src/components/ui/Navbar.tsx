'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle"; //  theme switch button

export default function Navbar() {
  return (
    <header className="w-full fixed top-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-primary dark:text-white">
          Artistly.com
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="/home" className="text-gray-700 hover:text-violet-600 dark:text-gray-300 dark:hover:text-violet-400 transition">
            Home
          </Link>
          <Link href="/artists" className="text-gray-700 hover:text-violet-600 dark:text-gray-300 dark:hover:text-violet-400 transition">
            Browse Artists
          </Link>
          <Link href="/onboard" className="text-gray-700 hover:text-violet-600 dark:text-gray-300 dark:hover:text-violet-400 transition">
            Onboard Artist
          </Link>
          <Link href="/dashboard" className="text-sm font-medium text-muted-foreground">
            Dashboard
          </Link>

        </nav>

        {/* Theme Toggle + Explore CTA */}
        <div className="flex items-center gap-4">
          <Link href="/artists" className="hidden md:block">
            <Button className="bg-orange-700 hover:bg-orange-800 text-white">Explore</Button>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}


