'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function LandingHero() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Never Miss a Dose Again
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                The smart way to track your medications, receive timely
                reminders, and maintain your health.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/register">
                <Button size="lg" className="w-full min-[400px]:w-auto">
                  Get Started
                </Button>
              </Link>
              <Link href="/login">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full min-[400px]:w-auto"
                >
                  Login
                </Button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative w-full h-80 sm:h-96 lg:h-full rounded-lg overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-lg">
                <div className="absolute inset-0 bg-white/90 dark:bg-black/50 rounded-lg">
                  <div className="p-6 h-full flex flex-col">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="font-semibold">Today's Schedule</div>
                      <div className="text-sm text-muted-foreground">
                        April 15
                      </div>
                    </div>
                    <div className="space-y-3 flex-1">
                      {[
                        {
                          time: '8:00 AM',
                          med: 'Aspirin',
                          dose: '81mg',
                          status: 'taken',
                        },
                        {
                          time: '12:00 PM',
                          med: 'Vitamin D',
                          dose: '1000 IU',
                          status: 'upcoming',
                        },
                        {
                          time: '6:00 PM',
                          med: 'Metformin',
                          dose: '500mg',
                          status: 'upcoming',
                        },
                        {
                          time: '10:00 PM',
                          med: 'Simvastatin',
                          dose: '20mg',
                          status: 'upcoming',
                        },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="p-3 rounded-md border bg-card flex items-center justify-between"
                        >
                          <div>
                            <div className="font-medium">{item.med}</div>
                            <div className="text-xs text-muted-foreground">
                              {item.dose} • {item.time}
                            </div>
                          </div>
                          <div
                            className={`w-3 h-3 rounded-full ${
                              item.status === 'taken'
                                ? 'bg-green-500'
                                : item.status === 'missed'
                                  ? 'bg-red-500'
                                  : 'bg-amber-500'
                            }`}
                          ></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
