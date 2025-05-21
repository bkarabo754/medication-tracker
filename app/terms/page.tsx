'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Shield, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 dark:from-zinc-900 dark:to-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          {/* Back Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.history.back()}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>

          {/* Page Title */}
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
              Terms of Service
            </h1>
            <p className="text-gray-700 dark:text-gray-400 mt-2">
              Last updated: April 15, 2025
            </p>
            <Badge
              variant="outline"
              className="mt-4 bg-indigo-100 text-indigo-800 dark:bg-indigo-200 dark:text-indigo-900"
            >
              Important
            </Badge>
          </div>
        </motion.div>

        {/* Terms Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 space-y-8"
        >
          {/* Terms Section */}
          <Card className="shadow-lg border border-gray-300 dark:border-gray-700">
            <CardHeader>
              <CardTitle>
                <FileText className="mr-2 inline-block text-indigo-500" />
                Acceptance of Terms
              </CardTitle>
              <CardDescription className="text-gray-700 dark:text-gray-400">
                By accessing and using MedTrack, you agree to be bound by these
                Terms of Service.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-800 dark:text-gray-300">
                If you do not agree with any of these terms, you are prohibited
                from using or accessing this site.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg border border-gray-300 dark:border-gray-700">
            <CardHeader>
              <CardTitle>
                <Shield className="mr-2 inline-block text-indigo-500" />
                Use License
              </CardTitle>
              <CardDescription className="text-gray-700 dark:text-gray-400">
                Permission is granted to temporarily access MedTrack for
                personal use.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-300">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>
                  Attempt to decompile or reverse engineer any software
                  contained in MedTrack
                </li>
                <li>
                  Remove any copyright or other proprietary notations from the
                  materials
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg border border-gray-300 dark:border-gray-700">
            <CardHeader>
              <CardTitle>
                <CheckCircle className="mr-2 inline-block text-indigo-500" />
                Medical Disclaimer
              </CardTitle>
              <CardDescription className="text-gray-700 dark:text-gray-400">
                MedTrack is not a substitute for professional medical advice.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-800 dark:text-gray-300">
                Always seek the advice of your physician or other qualified
                health provider with any questions you may have regarding a
                medical condition.
              </p>
            </CardContent>
          </Card>

          {/* Additional Sections */}
          <div className="text-center">
            <p className="text-gray-700 dark:text-gray-400">
              Your use of MedTrack is also governed by our{' '}
              <Link href="/privacy" className="text-indigo-600 underline">
                Privacy Policy
              </Link>
              .
            </p>
            <p className="mt-6 text-gray-700 dark:text-gray-400">
              <strong>Questions?</strong> Contact us at{' '}
              <a
                href="mailto:support@medtrack.app"
                className="text-indigo-600 underline"
              >
                support@medtrack.app
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
