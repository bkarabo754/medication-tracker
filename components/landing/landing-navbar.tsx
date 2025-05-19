'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Pill } from 'lucide-react';
import { motion } from 'framer-motion';
import { ModeToggle } from '../theme-toggle';

export function LandingNavbar() {
  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <Pill className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">MedTrack</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/#features"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          >
            Features
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          >
            About
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Link href="/login">
            <Button variant="outline" size="sm" className="cursor-pointer">
              Login
            </Button>
          </Link>
          <Link href="/register">
            <Button size="sm" className="cursor-pointer">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
