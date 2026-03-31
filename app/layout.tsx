import type {Metadata} from 'next';
import './globals.css'; // Global styles
import { AuthProvider } from '@/lib/auth';

export const metadata: Metadata = {
  title: 'Simple Social Network',
  description: 'A simple social network application with authentication, resembling Facebook.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="bg-[#F0F2F5]">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
