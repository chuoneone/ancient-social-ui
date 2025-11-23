// src/pages/LiBai.jsx
import React, { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark, Grid, User, Search, Home, Film, MoreHorizontal, X, ArrowLeft, Phone, Video, ChevronLeft, ChevronRight, Lock, Mic, Image as ImageIcon, BookOpen } from 'lucide-react';

const POSTS = [/* ← 這裡貼你的 POSTS 陣列 */];
const USERS_DATA = [/* ← 這裡貼你的 USERS_DATA 陣列 */];
const STORIES_DATA = {/* ← 這裡貼你的 STORIES_DATA 物件 */};

// SVG 圖示小組件
const PostImage = ({ keyword, color, className }) => {
  let icon;
  switch (keyword) {
    case 'moon': icon = "🌙"; break;
    case 'wine': icon = "🍷"; break;
    case 'waterfall': icon = "🌊"; break;
    case 'boat': icon = "⛵"; break;
    case 'friend': icon = "🤝"; break;
    case 'mountain': icon = "⛰️"; break;
    default: icon = "📷";
  }
  return (
    <div className={`w-full h-full flex items-center justify-center text-6xl ${color} ${className}`}>
      {icon}
    </div>
  );
};

// Footer 導覽列組件
const FooterNav = ({ active = 'home' }) => (
  <div className="absolute bottom-0 w-full bg-black border-t border-gray-800 py-3 px-6 flex justify-between items-center z-20">
    <Home size={28} className={active === 'home' ? 'text-white' : 'text-gray-500'} />
    <Search size={28} className="text-gray-500" />
    <div className="w-7 h-7 border-2 border-white rounded-lg flex items-center justify-center">
      <span className="text-xl font-bold">+</span>
    </div>
    <Film size={28} className="text-gray-500" />
    <div className="w-7 h-7 rounded-full bg-gray-500 border border-white overflow-hidden">
      <div className="w-full h-full bg-gradient-to-tr from-yellow-400 to-red-500"></div>
    </div>
  </div>
);

export default function LiBai() { 
  // ← 改名為 LiBai（避免跟 default import 混淆）
  // 你的原始程式內容（從這行開始直接貼下去）
}
