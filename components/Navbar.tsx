'use client';
import { Search, Home, Users, MonitorPlay, Store, UsersRound, Bell, MessageCircle, Grid } from 'lucide-react';
import { useAuth } from '@/lib/auth';

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 h-14 bg-white shadow-sm z-50 flex items-center justify-between px-4">
      {/* Left */}
      <div className="flex items-center gap-2 w-1/4">
        <svg viewBox="0 0 36 36" className="fill-[#0866FF] h-10 w-10 cursor-pointer">
          <path d="M20.181 35.87C29.094 34.791 36 27.202 36 18c0-9.941-8.059-18-18-18S0 8.059 0 18c0 8.442 5.811 15.526 13.652 17.471L14 23h-4v-5h4v-3.619c0-3.78 2.22-5.845 5.613-5.845 1.616 0 3.006.12 3.414.174v3.95l-2.343.001c-1.838 0-2.194.874-2.194 2.154V18h4.5l-.586 5h-3.914v12.87z"></path>
        </svg>
        <div className="hidden xl:flex items-center bg-gray-100 rounded-full px-3 py-2 h-10">
          <Search className="w-4 h-4 text-gray-500" />
          <input type="text" placeholder="Search Facebook" className="bg-transparent border-none outline-none ml-2 text-[15px] w-48" />
        </div>
        <div className="xl:hidden flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 cursor-pointer">
          <Search className="w-5 h-5 text-gray-600" />
        </div>
      </div>

      {/* Center */}
      <div className="hidden md:flex items-center justify-center gap-2 w-2/4 max-w-[680px]">
        <NavIcon icon={<Home />} active />
        <NavIcon icon={<Users />} />
        <NavIcon icon={<MonitorPlay />} />
        <NavIcon icon={<Store />} />
        <NavIcon icon={<UsersRound />} />
      </div>

      {/* Right */}
      <div className="flex items-center justify-end gap-2 w-1/4">
        <div className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer transition-colors">
          <Grid className="w-5 h-5" />
        </div>
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer transition-colors">
          <MessageCircle className="w-5 h-5" />
        </div>
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer transition-colors">
          <Bell className="w-5 h-5" />
        </div>
        <div className="relative group cursor-pointer ml-1" onClick={logout}>
          <img src={user?.avatar} alt="Profile" className="w-10 h-10 rounded-full border border-gray-200 hover:brightness-95 transition-all" />
          <div className="absolute right-0 top-12 bg-white shadow-lg rounded-lg p-3 hidden group-hover:block w-48 text-center border border-gray-100">
            <div className="font-semibold text-gray-800 mb-2">{user?.name}</div>
            <hr className="mb-2" />
            <span className="text-sm font-semibold text-red-600 hover:underline">Log Out</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavIcon({ icon, active }: { icon: React.ReactNode, active?: boolean }) {
  return (
    <div className={`flex-1 flex items-center justify-center h-12 rounded-lg cursor-pointer transition-colors relative group ${active ? 'text-[#0866FF]' : 'text-gray-500 hover:bg-gray-100'}`}>
      <div className="w-full h-full flex items-center justify-center">
        {icon}
      </div>
      {active && (
        <div className="absolute bottom-[-5px] left-0 right-0 h-[3px] bg-[#0866FF] rounded-t-md"></div>
      )}
    </div>
  );
}
