'use client';

import { useEffect, useState } from 'react';
import { account, ID } from '../appwrite';

type User = {
  $id: string;
  name?: string;
  email?: string;
};

export default function AuthPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    account.get()
      .then((current) => setUser(current as User))
      .catch(() => setUser(null));
  }, []);

  async function login() {
    setLoading(true);
    setError(null);
    try {
      await account.createEmailPasswordSession(email, password);
      const current = await account.get();
      setUser(current as User);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  }

  async function register() {
    setLoading(true);
    setError(null);
    try {
      await account.create(ID.unique(), email, password, name);
      await login();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed');
      setLoading(false);
    }
  }

  async function logout() {
    setLoading(true);
    setError(null);
    try {
      await account.deleteSession('current');
      setUser(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Logout failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <section className="mx-auto max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl">
        <div className="mb-8 space-y-2">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">SaaS Studio</p>
          <h1 className="text-3xl font-bold">Appwrite Auth</h1>
          <p className="text-sm text-slate-300">Email/password register, login, logout.</p>
        </div>

        {user ? (
          <div className="space-y-4">
            <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-sm text-emerald-100">
              Logged in as {user.name || user.email || user.$id}
            </div>
            <button
              onClick={logout}
              disabled={loading}
              className="w-full rounded-lg bg-white px-4 py-3 font-semibold text-slate-950 disabled:opacity-60"
            >
              {loading ? 'Logging out...' : 'Logout'}
            </button>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Name for registration"
              className="w-full rounded-lg border border-white/10 bg-slate-900 px-4 py-3 outline-none ring-cyan-400 focus:ring-2"
            />
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
              type="email"
              className="w-full rounded-lg border border-white/10 bg-slate-900 px-4 py-3 outline-none ring-cyan-400 focus:ring-2"
            />
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
              type="password"
              className="w-full rounded-lg border border-white/10 bg-slate-900 px-4 py-3 outline-none ring-cyan-400 focus:ring-2"
            />
            {error ? <p className="rounded-lg bg-red-500/10 p-3 text-sm text-red-200">{error}</p> : null}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={login}
                disabled={loading}
                className="rounded-lg bg-cyan-300 px-4 py-3 font-semibold text-slate-950 disabled:opacity-60"
              >
                Login
              </button>
              <button
                type="button"
                onClick={register}
                disabled={loading}
                className="rounded-lg bg-white px-4 py-3 font-semibold text-slate-950 disabled:opacity-60"
              >
                Register
              </button>
            </div>
          </form>
        )}
      </section>
    </main>
  );
}
