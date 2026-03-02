'use client';

import { ReactNode, useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Layout1 } from '@/components/layout';
import { ScreenLoader } from '@/components/screen-loader';
import { ProtectedRoute } from '@/components/auth/protected-route';
import { useAuth } from '@/lib/auth';

export default function MainLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthenticated, loading: authLoading } = useAuth();

  useEffect(() => {
    // Simulate short loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Redirect to login if not authenticated (after auth check completes)
    if (!authLoading && !isAuthenticated && !isLoading) {
      router.push('/login');
    }
  }, [isAuthenticated, authLoading, isLoading, router]);

  if (isLoading || authLoading) {
    return <ScreenLoader />;
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <ProtectedRoute>
      <Layout1>
        {children}
      </Layout1>
    </ProtectedRoute>
  );
}
