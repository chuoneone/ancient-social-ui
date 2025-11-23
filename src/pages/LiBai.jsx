import React, { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark, Grid, User, Search, Home, Film, MoreHorizontal, X, ArrowLeft, Phone, Video, ChevronRight, Lock, Mic, Image as ImageIcon, BookOpen } from 'lucide-react';

// --- 資料層：李白的貼文數據 ---
const POSTS = [
  {
    id: 1,
    imageKeyword: "moon",
    color: "bg-slate-800",
    likes: "12.5萬",
    poemTitle: "靜夜思",
    poemContent: ["床前明月光，", "疑是地上霜。", "舉頭望明月，", "低頭思故鄉。"],
    translation: "明亮的月光灑在床前，好像地上泛起了一層霜。我抬起頭望向明月，低頭便思念起故鄉。",
    date: "開元十四年 九月十五",
    location: "揚州旅舍",
    caption: "失眠了... 說實話，這裡的月亮雖然圓，但還是沒有家鄉的亮。剛才迷迷糊糊以為地上結霜了，結果只是月光。唉，想家了。有沒有還沒睡的朋友？在线等。🌕🍂",
    hashtags: ["#思鄉", "#失眠", "#月亮代表我的心", "#揚州", "#emo時刻"]
  },
  {
    id: 2,
    imageKeyword: "wine",
    color: "bg-amber-700",
    likes: "88.8萬",
    poemTitle: "將進酒 (節錄)",
    poemContent: ["人生得意須盡歡，", "莫使金樽空對月。", "天生我材必有用，", "千金散盡還復來。"],
    translation: "人生得意時應該盡情歡樂，不要讓金杯空對著月亮。上天賦予我才華必有其用處，即使千金散盡也會再次得來。",
    date: "天寶十一年",
    location: "穎陽山莊",
    caption: "昨天跟岑夫子還有丹丘生喝嗨了！🍷 他們一直叫我停，我說停什麼停！將進酒，杯莫停！錢花光了沒關係，哥有的是才華，千金散盡還復來嘛！大家嗨起來！🕺💃",
    hashtags: ["#YOLO", "#派對", "#喝酒", "#人生苦短", "#及時行樂", "#我的馬呢拿去換酒"]
  },
  // ... 其餘維持原樣（略）
];

// --- 精選動態（移除型別） ---
const STORIES_DATA = {
  "喝酒": [
    { id: 1, type: 'image', content: '🍶', caption: '百年三萬六千日，一日須傾三百杯！', time: '52週前' },
    { id: 2, type: 'text', content: '跟賀知章喝掛了...\n金龜換酒真的是太狂了', bg: 'bg-red-900', time: '52週前' }
  ],
  // ... 其餘同前
};

// 小組件：SVG 圖片生成
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
  return <div className={`w-full h-full flex items-center justify-center text-6xl ${color} ${className}`}>{icon}</div>;
};

// Footer Nav
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

// -----------------------------------------------------------
// 🔥 主元件（完全 JS 化）
// -----------------------------------------------------------
export default function LiBaiInstagram() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedPost, setSelectedPost] = useState(null);
  const [isTranslated, setIsTranslated] = useState(false);

  const navigateTo = view => setCurrentView(view);
  const handlePostClick = post => {
    setSelectedPost(post);
    setIsTranslated(false);
    navigateTo('post-detail');
  };

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center p-4">
      <div className="w-full max-w-[375px] h-[812px] bg-black rounded-[3rem] border-[8px] border-gray-800 overflow-hidden relative">
        
        {currentView === 'home' && (
          <div className="h-full overflow-y-auto pt-10">
            <h1 className="text-center text-xl font-bold">libai_official</h1>
            <div className="grid grid-cols-3">
              {POSTS.map(post => (
                <div key={post.id} onClick={() => handlePostClick(post)} className="aspect-square cursor-pointer">
                  <PostImage keyword={post.imageKeyword} color={post.color} />
                </div>
              ))}
            </div>
            <FooterNav />
          </div>
        )}

        {currentView === 'post-detail' && selectedPost && (
          <div className="absolute inset-0 bg-black">
            <button onClick={() => navigateTo('home')} className="m-4">
              <ArrowLeft size={24} />
            </button>

            <div className="p-4">
              <PostImage keyword={selectedPost.imageKeyword} color={selectedPost.color} />
              <div className="mt-2">{selectedPost.caption}</div>

              <button onClick={() => setIsTranslated(!isTranslated)} className="text-blue-500 text-sm mt-2">
                {isTranslated ? "隱藏翻譯" : "翻譯年糕"}
              </button>

              {isTranslated && (
                <div className="bg-gray-800 p-2 mt-2 rounded">
                  {selectedPost.translation}
                </div>
              )}
            </div>

            <FooterNav active="home" />
          </div>
        )}
      </div>
    </div>
  );
}
