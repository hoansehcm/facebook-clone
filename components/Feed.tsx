'use client';
import { useState } from 'react';
import { useAuth } from '@/lib/auth';
import { Video, Image as ImageIcon, Smile, ThumbsUp, MessageSquare, Share2, MoreHorizontal, Globe } from 'lucide-react';

type PostType = {
  id: string;
  author: { name: string; avatar: string };
  content: string;
  image?: string;
  time: string;
  likes: number;
  comments: number;
};

export default function Feed() {
  const { user } = useAuth();
  const [postText, setPostText] = useState('');
  const [posts, setPosts] = useState<PostType[]>([
    {
      id: '1',
      author: { name: 'Mark Zuckerberg', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mark' },
      content: 'Just setting up my new social network prototype! What do you guys think?',
      time: '2 hrs',
      likes: 1245,
      comments: 342,
    },
    {
      id: '2',
      author: { name: 'Jane Doe', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane' },
      content: 'Beautiful day for a hike! 🏔️',
      image: 'https://picsum.photos/seed/hike/600/400',
      time: '5 hrs',
      likes: 89,
      comments: 12,
    }
  ]);

  const handlePost = () => {
    if (!postText.trim() || !user) return;
    
    const newPost: PostType = {
      id: Date.now().toString(),
      author: { name: user.name, avatar: user.avatar },
      content: postText,
      time: 'Just now',
      likes: 0,
      comments: 0,
    };

    setPosts([newPost, ...posts]);
    setPostText('');
  };

  return (
    <div className="flex-1 max-w-[680px] w-full mx-auto py-6 px-4">
      {/* Stories */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
        <div className="w-36 h-64 flex-shrink-0 rounded-xl bg-white shadow-sm relative overflow-hidden cursor-pointer group border border-gray-200">
          <img src={user?.avatar} className="w-full h-40 object-cover transition-transform group-hover:scale-105" alt="Profile" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-white flex flex-col items-center justify-end pb-3">
            <div className="absolute -top-5 w-10 h-10 bg-[#0866FF] rounded-full border-4 border-white flex items-center justify-center text-white font-bold text-xl">
              +
            </div>
            <span className="text-[13px] font-semibold">Create story</span>
          </div>
        </div>
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="w-36 h-64 flex-shrink-0 rounded-xl relative overflow-hidden cursor-pointer group shadow-sm">
            <img src={`https://picsum.photos/seed/story${i}/200/300`} className="w-full h-full object-cover transition-transform group-hover:scale-105" alt="Story" />
            <div className="absolute top-4 left-4 w-10 h-10 rounded-full border-4 border-[#0866FF] overflow-hidden">
              <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=User${i}`} className="w-full h-full bg-white" alt="Avatar" />
            </div>
            <span className="absolute bottom-3 left-3 text-white font-semibold text-[13px] drop-shadow-md">User {i}</span>
          </div>
        ))}
      </div>

      {/* Create Post */}
      <div className="bg-white rounded-xl shadow-sm p-4 mb-4 border border-gray-200">
        <div className="flex gap-2 mb-3">
          <img src={user?.avatar} className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200" alt="Profile" />
          <input
            type="text"
            placeholder={`What's on your mind, ${user?.name.split(' ')[0]}?`}
            className="flex-1 bg-[#F0F2F5] rounded-full px-4 outline-none hover:bg-[#E4E6E9] transition-colors cursor-pointer text-[17px]"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handlePost()}
          />
        </div>
        <hr className="my-3 border-gray-200" />
        <div className="flex justify-between">
          <div className="flex-1 flex items-center justify-center gap-2 p-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors text-gray-500 font-semibold text-[15px]">
            <Video className="w-6 h-6 text-[#F3425F]" />
            <span className="hidden sm:inline">Live video</span>
          </div>
          <div className="flex-1 flex items-center justify-center gap-2 p-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors text-gray-500 font-semibold text-[15px]">
            <ImageIcon className="w-6 h-6 text-[#45BD62]" />
            <span className="hidden sm:inline">Photo/video</span>
          </div>
          <div className="flex-1 flex items-center justify-center gap-2 p-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors text-gray-500 font-semibold text-[15px]">
            <Smile className="w-6 h-6 text-[#F7B928]" />
            <span className="hidden sm:inline">Feeling/activity</span>
          </div>
        </div>
      </div>

      {/* Posts */}
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img src={post.author.avatar} className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200" alt={post.author.name} />
                <div>
                  <h4 className="font-semibold text-[15px] hover:underline cursor-pointer">{post.author.name}</h4>
                  <div className="flex items-center gap-1 text-[13px] text-gray-500 hover:underline cursor-pointer">
                    <span>{post.time}</span>
                    <span>·</span>
                    <Globe className="w-3 h-3" />
                  </div>
                </div>
              </div>
              <div className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center cursor-pointer text-gray-500 transition-colors">
                <MoreHorizontal className="w-5 h-5" />
              </div>
            </div>
            
            <div className="px-4 pb-3 text-[15px] leading-relaxed">
              {post.content}
            </div>

            {post.image && (
              <div className="w-full border-y border-gray-200">
                <img src={post.image} alt="Post content" className="w-full h-auto object-contain max-h-[500px] bg-gray-100" />
              </div>
            )}

            <div className="px-4 py-2.5 flex items-center justify-between text-gray-500 text-[15px] border-b border-gray-200">
              <div className="flex items-center gap-1.5 cursor-pointer hover:underline">
                <div className="w-4.5 h-4.5 rounded-full bg-[#0866FF] flex items-center justify-center p-1">
                  <ThumbsUp className="w-3 h-3 text-white fill-white" />
                </div>
                <span>{post.likes}</span>
              </div>
              <div className="flex gap-3">
                <span className="hover:underline cursor-pointer">{post.comments} comments</span>
                <span className="hover:underline cursor-pointer">4 shares</span>
              </div>
            </div>

            <div className="px-4 py-1 flex justify-between">
              <div className="flex-1 flex items-center justify-center gap-2 p-1.5 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors text-gray-500 font-semibold text-[15px]">
                <ThumbsUp className="w-5 h-5" />
                <span>Like</span>
              </div>
              <div className="flex-1 flex items-center justify-center gap-2 p-1.5 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors text-gray-500 font-semibold text-[15px]">
                <MessageSquare className="w-5 h-5" />
                <span>Comment</span>
              </div>
              <div className="flex-1 flex items-center justify-center gap-2 p-1.5 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors text-gray-500 font-semibold text-[15px]">
                <Share2 className="w-5 h-5" />
                <span>Share</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
