'use client';

import { motion } from 'framer-motion';
import { Bell, Calendar, ClipboardCheck, Clock } from 'lucide-react';

const features = [
  {
    icon: <Calendar className="h-10 w-10 text-primary" />,
    title: 'Medication Schedule',
    description:
      'Organize all your medications in one place with detailed dosage and instructions.',
  },
  {
    icon: <Bell className="h-10 w-10 text-primary" />,
    title: 'Smart Reminders',
    description:
      'Receive timely email reminders to never miss taking your prescribed medications.',
  },
  {
    icon: <ClipboardCheck className="h-10 w-10 text-primary" />,
    title: 'Track Adherence',
    description:
      'Keep a comprehensive history of medications taken, skipped, or missed.',
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: 'Personalized Timing',
    description:
      'Set custom schedules for each medication based on your daily routine.',
  },
];

export function LandingFeatures() {
  return (
    <section id="features" className="bg-muted/50 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Features to Keep You on Track
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-lg">
            Our medication tracker provides everything you need to manage your
            health regimen effectively.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center rounded-lg bg-card p-6 text-center shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
