'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LogIn, UserPlus } from 'lucide-react';
import { useAuth } from '@/lib/auth';

export default function LoginPage() {
  const router = useRouter();
  const { login, signUp, isAuthenticated } = useAuth();

  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const isRegister = mode === 'register';

  // Redirect if already authenticated
  if (isAuthenticated) {
    router.push('/');
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isRegister) {
        if (password !== confirmPassword) {
          setError('Password tidak cocok');
          setLoading(false);
          return;
        }
        await signUp(email, password);
        // After successful registration, switch to login mode
        setMode('login');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setError('');
      } else {
        await login(email, password);
        router.push('/');
      }
    } catch (err: any) {
      setError(err.message || (isRegister ? 'Registrasi gagal' : 'Login gagal'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-indigo-50 flex">
      {/* LEFT – BRANDING */}
      <div className="hidden lg:flex lg:w-1/2 bg-linear-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative z-10 flex flex-col justify-center px-12 text-white">
          <div className="mb-10">
            <div className="mb-6">
              <div className="w-20 h-20 bg-white/10 rounded-xl flex items-center justify-center">
                <span className="text-4xl font-bold">KOP</span>
              </div>
            </div>

            <h1 className="text-4xl font-bold mb-3">Sistem Informasi</h1>
            <h2 className="text-2xl font-light mb-6">Perkumpulan Pensiunan Telkom</h2>

            <p className="text-lg text-blue-100 leading-relaxed">
              Platform pengelolaan data anggota pensiunan secara terpusat,
              aman, dan terstruktur.
            </p>
          </div>

          <div className="space-y-4 text-blue-100">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-white rounded-full" />
              PERSAUDARAAN
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-white rounded-full" />
              KEBERSAMAAN
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-white rounded-full" />
              SALING PEDULI
            </div>
          </div>
        </div>

        {/* dekorasi */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-48 -translate-x-48" />
      </div>

      {/* RIGHT – FORM */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
          {/* header */}
          <div className="text-center mb-8">
            <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center">
              {isRegister ? (
                <UserPlus className="text-white" size={28} />
              ) : (
                <LogIn className="text-white" size={28} />
              )}
            </div>

            <h2 className="text-2xl font-bold text-gray-900">
              {isRegister ? 'Daftar Akun' : 'Login'}
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              {isRegister
                ? 'Buat akun untuk mengakses sistem'
                : 'Masuk ke sistem informasi perkumpulan'}
            </p>
          </div>

          {/* error */}
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
              {error}
            </div>
          )}

          {/* form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="admin@p2tel.or.id"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="••••••••"
              />
            </div>

            {isRegister && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Konfirmasi Password
                </label>
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  placeholder="••••••••"
                />
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed font-medium"
            >
              {loading
                ? 'Memproses...'
                : isRegister
                ? 'Daftar'
                : 'Login'}
            </button>
          </form>

          {/* toggle */}
          <div className="mt-6 text-center text-sm text-gray-600">
            {isRegister ? 'Sudah punya akun?' : 'Belum punya akun?'}{' '}
            <button
              type="button"
              onClick={() => {
                setMode(isRegister ? 'login' : 'register');
                setError('');
                setPassword('');
                setConfirmPassword('');
              }}
              className="text-blue-600 font-medium hover:underline"
            >
              {isRegister ? 'Login' : 'Daftar'}
            </button>
          </div>

          {/* Demo credentials info - only show in login mode */}
          {!isRegister && (
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-xs font-semibold text-blue-900 mb-2">
                Akun Demo:
              </p>
              <div className="space-y-1 text-xs text-blue-700">
                <p>Admin: admin@p2tel.or.id / admin123</p>
                <p>Staff: staff@p2tel.or.id / staff123</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
