'use client';

import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { Pill, Menu, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/theme-toggle';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { DashboardNav } from './dashboard-nav';
import { DialogTitle } from '../ui/dialog';
import { Badge } from '@/components/ui/badge'; // Ensure Badge component exists

interface DashboardHeaderProps {
  user: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
}

export function DashboardHeader({ user }: DashboardHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-4 flex flex-col gap-4">
              <DialogTitle className="text-xl font-semibold">
                Navigation Menu
              </DialogTitle>
              <Link href="/" className="flex items-center gap-2">
                <Pill className="h-5 w-5" />
                <span className="text-lg font-bold">MedTrack</span>
              </Link>
              <div className="flex flex-col">
                <DashboardNav setIsOpen={setIsOpen} />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Pill className="h-6 w-6 md:h-8 md:w-8" />
          <span className="text-lg font-bold md:text-xl">MedTrack</span>
        </Link>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <Badge variant="outline" className="hidden md:inline-flex">
            Beta
          </Badge>
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full cursor-pointer"
              >
                <User className="h-6 w-6" />
                <span className="sr-only">User menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium">{user.name || 'User'}</p>
                  <p className="text-xs text-muted-foreground">{user.email}</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/dashboard/profile" className="cursor-pointer">
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/dashboard/settings" className="cursor-pointer">
                  Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => signOut({ callbackUrl: '/' })}
              >
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
