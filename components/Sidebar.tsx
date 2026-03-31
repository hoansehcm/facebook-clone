'use client';
import { useAuth } from '@/lib/auth';
import { Users, Bookmark, Clock, MonitorPlay, Store, ChevronDown } from 'lucide-react';

export default function Sidebar() {
  const { user } = useAuth();

  return (
    <div className="hidden xl:block w-[360px] flex-shrink-0 p-4 sticky top-14 h-[calc(100vh-56px)] overflow-y-auto hover:scrollbar-thin scrollbar-thumb-gray-300">
      <SidebarItem icon={<img src={user?.avatar} className="w-9 h-9 rounded-full" alt="Profile" />} text={user?.name || ''} />
      <SidebarItem icon={<Users className="w-9 h-9 text-blue-500 p-1.5 bg-blue-100 rounded-full" />} text="Friends" />
      <SidebarItem icon={<Clock className="w-9 h-9 text-blue-500 p-1.5 bg-blue-100 rounded-full" />} text="Memories" />
      <SidebarItem icon={<Bookmark className="w-9 h-9 text-purple-500 p-1.5 bg-purple-100 rounded-full" />} text="Saved" />
      <SidebarItem icon={<Users className="w-9 h-9 text-blue-500 p-1.5 bg-blue-100 rounded-full" />} text="Groups" />
      <SidebarItem icon={<MonitorPlay className="w-9 h-9 text-blue-500 p-1.5 bg-blue-100 rounded-full" />} text="Video" />
      <SidebarItem icon={<Store className="w-9 h-9 text-blue-500 p-1.5 bg-blue-100 rounded-full" />} text="Marketplace" />
      <SidebarItem icon={<div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center"><ChevronDown className="w-5 h-5" /></div>} text="See more" />
      
      <hr className="my-3 border-gray-300" />
      
      <div className="flex items-center justify-between px-2 py-2 group cursor-pointer">
        <h3 className="text-gray-500 font-semibold text-[17px]">Your shortcuts</h3>
        <span className="text-blue-500 text-sm hidden group-hover:block">Edit</span>
      </div>
      
      <SidebarItem icon={<div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-yellow-400 to-orange-500 shadow-sm" />} text="Candy Crush Saga" />
      <SidebarItem icon={<div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-blue-400 to-blue-600 shadow-sm" />} text="8 Ball Pool" />
      <SidebarItem icon={<div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-green-400 to-emerald-600 shadow-sm" />} text="FarmVille 3" />
      
      <div className="mt-4 px-2 text-xs text-gray-500 leading-relaxed">
        Privacy · Terms · Advertising · Ad Choices · Cookies · More · Meta © 2026
      </div>
    </div>
  );
}

function SidebarItem({ icon, text }: { icon: React.ReactNode, text: string }) {
  return (
    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 cursor-pointer transition-colors">
      {icon}
      <span className="font-medium text-[15px]">{text}</span>
    </div>
  );
}
