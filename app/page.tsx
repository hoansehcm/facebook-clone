'use client';
import { useAuth } from '@/lib/auth';
import Login from '@/components/Login';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import RightSidebar from '@/components/RightSidebar';
import Feed from '@/components/Feed';

export default function Home() {
  const { user } = useAuth();

  if (!user) {
    return <Login />;
  }

  return (
    <div className="min-h-screen bg-[#F0F2F5]">
      <Navbar />
      <div className="flex justify-center pt-14 w-full">
        <Sidebar />
        <Feed />
        <RightSidebar />
      </div>
    </div>
  );
}
