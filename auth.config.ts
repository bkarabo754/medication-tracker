import CredentialsProvider from 'next-auth/providers/credentials';
import GitHubProvider from 'next-auth/providers/github';

const authConfig = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (
          credentials?.email === 'test@example.com' &&
          credentials?.password === 'password123'
        ) {
          return { id: '1', name: 'Test User', email: 'test@example.com' };
        }
        return null;
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET || '',
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
    error: '/auth/error',
  },
  callbacks: {
    async redirect({
      url,
      baseUrl,
    }: {
      url: string;
      baseUrl: string;
    }): Promise<string> {
      if (url === `${baseUrl}/login`) return `${baseUrl}/dashboard`;
      return url.startsWith(baseUrl) ? url : `${baseUrl}/dashboard`;
    },
  },
};

export default authConfig;
