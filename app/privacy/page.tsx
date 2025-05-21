'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ShieldCheck, Database, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 dark:from-zinc-900 dark:to-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.history.back()}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>

          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
              Privacy Policy
            </h1>
            <p className="text-gray-700 dark:text-gray-400 mt-2">
              Last updated: April 15, 2024
            </p>
            <Badge
              variant="outline"
              className="mt-4 bg-indigo-100 text-indigo-800 dark:bg-indigo-200 dark:text-indigo-900"
            >
              Data Protection First
            </Badge>
          </div>
        </motion.div>

        {/* Privacy Policy Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Information We Collect */}
          <Card className="shadow-lg border border-gray-300 dark:border-gray-700">
            <CardHeader>
              <CardTitle>
                <ShieldCheck className="mr-2 inline-block text-indigo-500" />
                Information We Collect
              </CardTitle>
              <CardDescription>
                The types of information we gather to provide our services.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-300">
                <li>Account information (name, email, password)</li>
                <li>Medication details and schedules</li>
                <li>Usage data and preferences</li>
                <li>Communication preferences</li>
              </ul>
            </CardContent>
          </Card>

          {/* How We Use Your Information */}
          <Card className="shadow-lg border border-gray-300 dark:border-gray-700">
            <CardHeader>
              <CardTitle>
                <Database className="mr-2 inline-block text-indigo-500" />
                How We Use Your Information
              </CardTitle>
              <CardDescription>
                How your information helps us serve you better.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-300">
                <li>Provide and maintain MedTrack services</li>
                <li>Send medication reminders and notifications</li>
                <li>Improve our services and user experience</li>
                <li>Communicate with you about updates and changes</li>
                <li>Protect against unauthorized access and abuse</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card className="shadow-lg border border-gray-300 dark:border-gray-700">
            <CardHeader>
              <CardTitle>
                <Lock className="mr-2 inline-block text-indigo-500" />
                Data Security
              </CardTitle>
              <CardDescription>
                Keeping your data safe is our top priority.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-300">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments</li>
                <li>Access controls and authentication</li>
                <li>Secure data backups</li>
              </ul>
            </CardContent>
          </Card>

          {/* Additional Section */}
          <div className="text-center">
            <p className="text-gray-700 dark:text-gray-400">
              Have questions? Contact us at{' '}
              <a
                href="mailto:privacy@medtrack.app"
                className="text-indigo-600 underline"
              >
                privacy@medtrack.app
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
