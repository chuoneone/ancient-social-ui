import React, { useState } from 'react';
import {
  Search, Home, Tv, Store, Users, MessageCircle, Bell, ThumbsUp, 
  MessageSquare, Share2, MoreHorizontal, X, Lock, ArrowLeft, Phone, 
  Plus, Globe, Heart
} from 'lucide-react';

// 你的原本 USERS_DB, POSTS, STORIES_LIST 等資料維持不變
// 🟡 這裡只貼核心 UI 改版區域

export default function TangTaizongFB() {
  const [view, setView] = useState('home');
  const [param, setParam] = useState('');
  const [storyUser, setStoryUser] = useState(null);

  const handleNav = (target) => {
    if (target.startsWith('profile:')) {
      setParam(target.split(':')[1]);
      setView('profile');
    } else {
      setView(target);
    }
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-[#F0F2F5] flex justify-center py-6 font-sans">
      {/* 手機框 */}
      <div className="w-full max-w-md bg-black rounded-xl shadow-2xl overflow-hidden relative">

        {/* ▓▓▓ Header ▓▓▓ */}
        <div className="flex justify-between items-center px-4 py-2 bg-black text-white border-b border-gray-700 sticky top-0 z-50">
          <div className="text-lg font-bold">TangBook</div>
          <div className="flex gap-3">
            <Search size={18} />
            <Bell size={18} />
          </div>
        </div>

        {/* ▓▓▓ 內部內容（原始 Facebook UI） ▓▓▓ */}
        <div className="bg-[#18191a] text-[#e4e6eb] overflow-y-auto h-[calc(100vh-64px)]">
          
          {/* ----- 首頁 ----- */}
          {view === 'home' && (
            <div className="p-4 space-y-4">

              {/* 建立限時動態 */}
              <div className="grid grid-cols-4 gap-2 h-36">
                <div className="bg-[#242526] rounded-xl relative flex flex-col">
                  <div className="flex-1 bg-gray-700 flex items-center justify-center text-4xl">🐲</div>
                  <div className="text-center text-xs pb-1">建立動態</div>
                  <div className="absolute bottom-7 left-1/2 -translate-x-1/2 bg-blue-500 p-1 rounded-full">
                    <Plus size={16} className="text-white" />
                  </div>
                </div>
                {STORIES_LIST.slice(1).map((s, i) => (
                  <div key={i}
                    className="rounded-xl cursor-pointer relative bg-gray-600"
                    onClick={() => setStoryUser(s.name)}
                  >
                    <div className="absolute top-1 left-1 w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-lg">
                      {USERS_DB[s.name]?.avatar}
                    </div>
                    <div className="text-xs absolute bottom-1 left-1">{s.name}</div>
                  </div>
                ))}
              </div>

              {/* 模擬貼文區 */}
              {POSTS.map((post) => (
                <div key={post.id} className="bg-[#242526] rounded-lg p-3">
                  <div className="flex gap-2">
                    <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-xl">
                      {USERS_DB[post.author]?.avatar}
                    </div>
                    <div>
                      <div className="font-semibold">{post.author}</div>
                      <div className="text-xs text-gray-400">{post.time} · <Globe size={12} /></div>
                    </div>
                  </div>
                  <div className="mt-2">{post.content}</div>
                  <div className="flex justify-around mt-3 text-sm text-gray-400 border-t border-gray-600 pt-2">
                    <button className="flex items-center gap-1"><ThumbsUp size={16} />讚</button>
                    <button className="flex items-center gap-1"><MessageSquare size={16} />留言</button>
                    <button className="flex items-center gap-1"><Share2 size={16} />分享</button>
                  </div>
                </div>
              ))}

            </div>
          )}

          {/* ----- 個人頁面 ----- */}
          {view === 'profile' && (
            <div className="p-4">
              <button onClick={() => setView('home')} className="flex items-center gap-2 mb-3">
                <ArrowLeft size={18} /> 返回
              </button>
              <div className="text-xl font-bold">{param}</div>
              <div className="mt-2 text-sm">此區可呈現唐太宗個人資料</div>
            </div>
          )}

          {/* ----- 聊天室 ----- */}
          {view === 'messages' && (
            <div className="p-4">
              <h2 className="text-lg font-bold">Messenger</h2>
              {CHAT_LIST.map(chat => (
                <div key={chat.id} className="p-2 rounded hover:bg-[#242526] cursor-pointer">
                  <div className="flex justify-between">
                    <span>{chat.name}</span>
                    <span className="text-xs text-gray-400">{chat.time}</span>
                  </div>
                  <div className="text-sm text-gray-400">{chat.lastMsg}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
