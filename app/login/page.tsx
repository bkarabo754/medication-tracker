'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Loader2, Pill } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { signIn } from 'next-auth/react'; // Ensure signIn is imported

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      console.log('Attempting signIn...');
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
        callbackUrl: '/dashboard',
      });

      // ********************************************
      // ADD THESE CRITICAL CONSOLE LOGS
      console.log('--- SIGN IN RESULT START ---');
      console.log('Result object:', result);
      console.log('Result.ok:', result?.ok);
      console.log('Result.url:', result?.url);
      console.log('Result.error:', result?.error);
      console.log('--- SIGN IN RESULT END ---');
      // ********************************************

      if (result?.error) {
        toast.error(
          result.error === 'CredentialsSignin'
            ? 'Invalid credentials'
            : `Login failed: ${result.error}` // More specific error
        );
        return;
      }

      if (result?.ok && result?.url) {
        toast.success('Logged in successfully');
        console.log('Attempting router.push to:', result.url); // Log before push
        router.push(result.url);
      } else {
        // This 'else' means result.ok is false or result.url is null, but no explicit error string
        toast.error(
          'Unexpected login outcome: result.ok was false or url was null'
        );
        console.error('Unexpected login outcome:', result);
      }
    } catch (error) {
      toast.error('Something went wrong during login (catch block)');
      console.error('Login catch error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-muted/20">
      {/* Header with logo */}
      <motion.div
        className="sm:mx-auto sm:w-full sm:max-w-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center">
          <Link href="/" className="flex items-center space-x-2">
            <Pill className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">MedTrack</span>
          </Link>
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-muted-foreground">
          Or{' '}
          <Link
            href="/register"
            className="font-medium text-primary hover:text-primary/90"
          >
            create a new account
          </Link>
        </p>
      </motion.div>

      {/* Badges */}
      <motion.div
        className="mt-6 sm:mx-auto sm:w-full sm:max-w-md flex flex-wrap justify-center gap-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Badge variant="outline" className="text-sm px-4 py-2">
          Health Tips
        </Badge>
        <Badge variant="outline" className="text-sm px-4 py-2">
          Updates
        </Badge>
        <Badge variant="outline" className="text-sm px-4 py-2">
          Resources
        </Badge>
        <Badge variant="outline" className="text-sm px-4 py-2">
          Support
        </Badge>
      </motion.div>

      {/* Login form */}
      <motion.div
        className="mt-8 sm:mx-auto sm:w-full sm:max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="bg-card py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="email">Email address</Label>
              <div className="mt-3">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <div className="mt-2">
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                />
              </div>
            </div>

            <div>
              <Button
                type="submit"
                className="w-full cursor-pointer flex items-center justify-center"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="animate-spin h-5 w-5" />
                ) : (
                  'Sign in'
                )}
              </Button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
