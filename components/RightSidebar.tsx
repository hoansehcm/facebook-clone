'use client';
import { Search, MoreHorizontal, Video } from 'lucide-react';

export default function RightSidebar() {
  const contacts = [
    { name: 'Alice Johnson', online: true },
    { name: 'Bob Smith', online: true },
    { name: 'Charlie Brown', online: false },
    { name: 'Diana Prince', online: true },
    { name: 'Evan Wright', online: true },
    { name: 'Fiona Gallagher', online: false },
    { name: 'George Miller', online: true },
    { name: 'Hannah Abbott', online: true },
    { name: 'Ian Malcolm', online: false },
    { name: 'Julia Roberts', online: true },
  ];

  return (
    <div className="hidden lg:block w-[360px] flex-shrink-0 p-4 sticky top-14 h-[calc(100vh-56px)] overflow-y-auto hover:scrollbar-thin scrollbar-thumb-gray-300">
      <h3 className="text-gray-500 font-semibold px-2 mb-2 text-[17px]">Sponsored</h3>
      <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 cursor-pointer transition-colors mb-2">
        <div className="w-[110px] h-[110px] bg-gray-300 rounded-lg overflow-hidden flex-shrink-0">
          <img src="https://picsum.photos/seed/ad1/200/200" alt="Ad" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1">
          <p className="font-medium text-[15px] leading-tight">Learn React in 2026</p>
          <p className="text-xs text-gray-500 mt-1">react.dev</p>
        </div>
      </div>
      
      <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 cursor-pointer transition-colors mb-4">
        <div className="w-[110px] h-[110px] bg-gray-300 rounded-lg overflow-hidden flex-shrink-0">
          <img src="https://picsum.photos/seed/ad2/200/200" alt="Ad" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1">
          <p className="font-medium text-[15px] leading-tight">Master Tailwind CSS</p>
          <p className="text-xs text-gray-500 mt-1">tailwindcss.com</p>
        </div>
      </div>

      <hr className="my-3 border-gray-300" />
      
      <div className="flex items-center justify-between px-2 py-2">
        <h3 className="text-gray-500 font-semibold text-[17px]">Contacts</h3>
        <div className="flex gap-2 text-gray-500">
          <div className="p-1 hover:bg-gray-200 rounded-full cursor-pointer transition-colors"><Video className="w-4 h-4" /></div>
          <div className="p-1 hover:bg-gray-200 rounded-full cursor-pointer transition-colors"><Search className="w-4 h-4" /></div>
          <div className="p-1 hover:bg-gray-200 rounded-full cursor-pointer transition-colors"><MoreHorizontal className="w-4 h-4" /></div>
        </div>
      </div>

      {contacts.map((contact, i) => (
        <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 cursor-pointer transition-colors">
          <div className="relative">
            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${contact.name}`} className="w-9 h-9 rounded-full bg-gray-100 border border-gray-200" alt={contact.name} />
            {contact.online && (
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
            )}
          </div>
          <span className="font-medium text-[15px]">{contact.name}</span>
        </div>
      ))}
    </div>
  );
}
