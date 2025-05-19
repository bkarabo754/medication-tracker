'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  PlusCircle,
  Calendar,
  Clock,
  LineChart,
  Settings,
  GanttChartSquare,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface NavProps {
  setIsOpen?: (open: boolean) => void;
}

export function DashboardNav({ setIsOpen }: NavProps) {
  const pathname = usePathname();

  const routes = [
    {
      href: '/dashboard',
      label: 'Overview',
      icon: LayoutDashboard,
      exact: true,
    },
    {
      href: '/dashboard/medications',
      label: 'Medications',
      icon: GanttChartSquare,
      exact: false,
    },
    {
      href: '/dashboard/schedule',
      label: 'Schedule',
      icon: Calendar,
      exact: true,
    },
    {
      href: '/dashboard/history',
      label: 'History',
      icon: Clock,
      exact: true,
    },
    {
      href: '/dashboard/reports',
      label: 'Reports',
      icon: LineChart,
      exact: true,
    },
    {
      href: '/dashboard/settings',
      label: 'Settings',
      icon: Settings,
      exact: true,
    },
  ];

  return (
    <nav className="grid items-start gap-3 px-4 py-6 sm:px-6 sm:py-8">
      {routes.map((route, i) => (
        <Link
          key={i}
          href={route.href}
          onClick={() => {
            if (setIsOpen) setIsOpen(false);
          }}
        >
          <Button
            variant="ghost"
            className={cn(
              'w-full justify-start gap-2 rounded-md px-3 py-2 text-sm font-normal cursor-pointer',
              (
                route.exact
                  ? pathname === route.href
                  : pathname.startsWith(route.href)
              )
                ? 'bg-muted font-medium text-primary shadow-sm'
                : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
            )}
          >
            <route.icon className="h-5 w-5" />
            {route.label}
          </Button>
        </Link>
      ))}
      <Link
        href="/dashboard/medications/new"
        onClick={() => {
          if (setIsOpen) setIsOpen(false);
        }}
      >
        <Button className="w-full justify-start gap-2 mt-4 px-3 py-2 text-sm font-medium shadow-md">
          <PlusCircle className="h-5 w-5" />
          Add Medication
        </Button>
      </Link>
    </nav>
  );
}
