'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Heart, Users, Shield, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';

export default function AboutPage() {
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
              About MedTrack
            </h1>
            <p className="text-gray-700 dark:text-gray-400 mt-2">
              Empowering better health through medication management
            </p>
            <Badge
              variant="outline"
              className="mt-4 bg-indigo-100 text-indigo-800 dark:bg-indigo-200 dark:text-indigo-900"
            >
              Our Vision and Values
            </Badge>
          </div>
        </motion.div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Our Mission */}
          <Card className="shadow-lg border border-gray-300 dark:border-gray-700">
            <CardHeader>
              <CardTitle>
                <Heart className="mr-2 inline-block text-red-500" />
                Our Mission
              </CardTitle>
              <CardDescription>
                Improving lives through effective medication management.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-800 dark:text-gray-300">
                We aim to empower individuals to take control of their health by
                providing tools to simplify and improve medication tracking.
              </p>
            </CardContent>
          </Card>

          {/* Who We Serve */}
          <Card className="shadow-lg border border-gray-300 dark:border-gray-700">
            <CardHeader>
              <CardTitle>
                <Users className="mr-2 inline-block text-blue-500" />
                Who We Serve
              </CardTitle>
              <CardDescription>
                Supporting everyone, from individuals to families.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-800 dark:text-gray-300">
                Whether you manage your own medications, care for a loved one,
                or need help tracking vitamins, MedTrack is designed for you.
              </p>
            </CardContent>
          </Card>

          {/* Privacy First */}
          <Card className="shadow-lg border border-gray-300 dark:border-gray-700">
            <CardHeader>
              <CardTitle>
                <Shield className="mr-2 inline-block text-green-500" />
                Privacy First
              </CardTitle>
              <CardDescription>
                Your health data is always secure with us.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-800 dark:text-gray-300">
                We prioritize your privacy by using the latest security measures
                to protect your information.
              </p>
            </CardContent>
          </Card>

          {/* Reliability */}
          <Card className="shadow-lg border border-gray-300 dark:border-gray-700">
            <CardHeader>
              <CardTitle>
                <CheckCircle className="mr-2 inline-block text-purple-500" />
                Reliability
              </CardTitle>
              <CardDescription>
                Trustworthy tools for consistent medication management.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-800 dark:text-gray-300">
                Our platform is built with modern, reliable technology to ensure
                uninterrupted service.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Call to Action */}
        <div className="text-center space-x-4">
          <Link href="/register">
            <Button
              size="lg"
              //   className="bg-indigo-600 hover:bg-indigo-700 text-white"
            >
              Get Started
            </Button>
          </Link>
          <Link href="/login">
            <Button variant="outline" size="lg">
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
