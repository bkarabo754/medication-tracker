import Link from 'next/link';
import { Pill } from 'lucide-react';

export function LandingFooter() {
  return (
    <footer className="border-t py-6 md:py-10">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2">
          <Pill className="h-5 w-5 text-primary" />
          <span className="font-semibold">MedTrack</span>
        </div>
        <div className="flex gap-4 text-sm text-muted-foreground">
          <Link href="/terms" className="hover:text-foreground">
            Terms
          </Link>
          <Link href="/privacy" className="hover:text-foreground">
            Privacy
          </Link>
          <Link href="/about" className="hover:text-foreground">
            About
          </Link>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} MedTrack. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
