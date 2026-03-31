'use client';
import { useState } from 'react';
import { useAuth } from '@/lib/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In our mock auth, we just use the email prefix as the name
    login(email.split('@')[0] || 'Demo User');
  };

  return (
    <div className="min-h-screen bg-[#f0f2f5] flex flex-col items-center justify-center p-4">
      <div className="max-w-[980px] w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
        <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0 lg:pr-8">
          <h1 className="text-5xl lg:text-6xl font-bold text-[#0866FF] mb-4 tracking-tight">facebook</h1>
          <p className="text-2xl lg:text-3xl text-gray-800 leading-tight font-normal">
            Connect with friends and the world around you on Facebook.
          </p>
        </div>
        
        <div className="w-full max-w-[400px]">
          <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100">
            <form onSubmit={handleLogin} className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Email or phone number"
                className="w-full p-3.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0866FF] focus:border-transparent text-[17px]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0866FF] focus:border-transparent text-[17px]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="submit"
                className="w-full bg-[#0866FF] text-white font-bold text-xl p-3 rounded-md hover:bg-[#1854F4] transition-colors mt-2"
              >
                Log In
              </button>
              <div className="text-center mt-2 mb-2">
                <a href="#" className="text-[#0866FF] text-sm hover:underline">Forgot password?</a>
              </div>
              <hr className="my-2 border-gray-300" />
              <div className="flex justify-center mt-4 mb-2">
                <button
                  type="button"
                  onClick={() => login('New User')}
                  className="bg-[#42b72a] text-white font-bold text-[17px] px-4 py-3 rounded-md hover:bg-[#36a420] transition-colors w-fit"
                >
                  Create new account
                </button>
              </div>
            </form>
          </div>
          <div className="text-center mt-6 text-sm">
            <a href="#" className="font-bold hover:underline">Create a Page</a> for a celebrity, brand or business.
          </div>
        </div>
      </div>
    </div>
  );
}
