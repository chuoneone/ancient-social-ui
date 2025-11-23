import React, { useState, useEffect } from 'react';
import { 
  Search, Home, Tv, Store, Users, MessageCircle, Bell, Menu, 
  ThumbsUp, MessageSquare, Share2, MoreHorizontal, X, 
  Image as ImageIcon, Smile, Video, Flag, ChevronDown, Plus,
  Globe, Heart, ArrowLeft, MapPin, Briefcase, GraduationCap, Lock, Send, Phone
} from 'lucide-react';

// ==========================
// 1️⃣ 資料設定區（移除 TS 型別）
// ==========================
const CURRENT_USER_ID = 'u0';

const USERS_DB = {
  "李世民": {
    id: 'u0',
    name: "李世民",
    avatar: "🐲",
    bio: "大唐 CEO | 天可汗 | 書法愛好者",
    cover: "bg-gradient-to-r from-yellow-700 to-red-800",
    verified: true,
    isPrivate: false,
    intro: [
      { icon: <Briefcase size={16} />, text: "皇帝 at 大唐帝國" },
      { icon: <GraduationCap size={16} />, text: "曾就讀 弘文館" },
      { icon: <MapPin size={16} />, text: "住在 長安太極宮" },
    ]
  },
  "魏徵": {
    id: 'u1',
    name: "魏徵",
    avatar: "😠",
    bio: "職業諫官 | 專治各種不服 | 鏡子\n(此帳號已開啟私人模式)",
    cover: "bg-slate-800",
    verified: true,
    isPrivate: true,
    intro: [
      { icon: <Briefcase size={16} />, text: "侍中 at 門下省" },
      { icon: <MapPin size={16} />, text: "住在 長安城" },
    ]
  },
  "長孫皇后": {
    id: 'u2',
    name: "長孫皇后",
    avatar: "👑",
    bio: "母儀天下 | 觀音婢 | 二郎的賢內助",
    cover: "bg-pink-800",
    verified: true,
    isPrivate: false,
    intro: [
      { icon: <Briefcase size={16} />, text: "皇后 at 後宮" },
      { icon: <Heart size={16} />, text: "配偶：李世民" },
    ]
  },
  "程咬金": {
    id: 'u3',
    name: "程咬金",
    avatar: "🪓",
    bio: "盧國公 | 福將 | 三板斧",
    cover: "bg-green-800",
    verified: true,
    isPrivate: false,
    intro: [
      { icon: <Briefcase size={16} />, text: "大將軍 at 右武衛" },
    ]
  },
  "玄奘": {
    id: 'u4',
    name: "玄奘",
    avatar: "🙏",
    bio: "不負如來不負卿... 啊不對，是只負如來。",
    cover: "bg-yellow-600",
    verified: true,
    isPrivate: false,
    intro: [
      { icon: <MapPin size={16} />, text: "前往 天竺" },
    ]
  }
};

const POSTS = [
  {
    id: 1,
    author: "李世民",
    time: "剛剛",
    privacy: "public",
    content: "剛寫了一幅字，大家看看筆力如何？最近在練王羲之的風格，感覺越來越有心得了。🖊️\n#蘭亭序 #書法 #朕的墨寶",
    imageType: "calligraphy",
    likes: 1205,
    comments: 58,
    shares: 200,
    topComments: [
      { user: "魏徵", text: "陛下，玩物喪志。...", likes: 500 },
      { user: "長孫皇后", text: "二郎的字越發精進了，氣勢磅礡！❤️", likes: 2000 },
      { user: "褚遂良", text: "臣甘拜下風！", likes: 100 }
    ]
  },
  // ... 其它貼文（略）
];

const STORIES_LIST = [
  { name: "李世民", hasStory: true },
  { name: "長孫皇后", hasStory: true },
  { name: "李治(稚奴)", hasStory: true },
  { name: "武才人", hasStory: true },
];

const STORIES_CONTENT = {
  "李世民": [
    { type: "text", content: "朕今天心情好，\n想去打獵！🏹 🦌", bg: "bg-yellow-700" },
    { type: "text", content: "魏徵又在罵我了...\n心累 😔", bg: "bg-gray-700" }
  ],
  "長孫皇后": [
    { type: "text", content: "御花園的牡丹開了🌸", bg: "bg-pink-700" }
  ]
};

const CHAT_LIST = [
  { id: 1, name: "魏徵", lastMsg: "陛下，這件事您做錯了！", time: "剛剛", unread: true }
];

const CHAT_HISTORY = {
  "魏徵": [
    { sender: 'them', text: "陛下，聽說您又要修宮殿？" },
    { sender: 'me', text: "就修一點點..." }
  ]
};

// ==========================
// 2️⃣ 子元件（移除型別）
// ==========================
const Header = ({ onNav, unreadCount }) => (
  <div className="sticky top-0 ...">{/* 原來的內容保留不變 */}</div>
);

const PostCard = ({ post, onUserClick }) => {
  const [liked, setLiked] = useState(false);
  return (
    <div className="bg-[#242526]">{/* 原內容 */}</div>
  );
};

const UserProfile = ({ name, onBack, onUserClick }) => {
  const user = USERS_DB[name] || {};
  return (
    <div>{/* 原內容 */}</div>
  );
};

// 其他子元件不限版面，略…

// ==========================
// 3️⃣ 主程式（完全 JS 版）
// ==========================
export default function TangBook() {
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
    <div className="bg-[#18191a] min-h-screen">
      {/* 原畫面架構保持不變 */}
    </div>
  );
}
