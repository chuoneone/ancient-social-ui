import React, { useState, useRef } from 'react';
import {
  Heart, MessageCircle, Send, Bookmark, Grid, User, Search, Home, Film,
  MoreHorizontal, X, ArrowLeft, Phone, Video, ChevronLeft, ChevronRight,
  Lock, Mic, Image as ImageIcon, BookOpen
} from 'lucide-react';

/* ---------------------------------
   📌 李白貼文資料
---------------------------------- */
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
  {
    id: 3,
    imageKeyword: "waterfall",
    color: "bg-cyan-700",
    likes: "45.2萬",
    poemTitle: "望廬山瀑布",
    poemContent: ["日照香爐生紫煙，", "遙看瀑布掛前川。", "飛流直下三千尺，", "疑是銀河落九天。"],
    translation: "陽光照耀著香爐峰，升起紫色的煙霧，遠遠望去瀑布像長河懸掛在山前。飛流急下三千尺，讓人懷疑是銀河從九天落下來。",
    date: "開元十四年",
    location: "廬山",
    caption: "終於來打卡了！廬山瀑布真的太壯觀，現場看那個水氣（紫煙）簡直自帶濾鏡。感覺像是銀河直接倒下來一樣。大自然的鬼斧神工，人類真的很渺小。推薦大家連假來走走！🏞️✨",
    hashtags: ["#廬山", "#瀑布", "#大自然", "#旅遊博主", "#直出"]
  },
  {
    id: 4,
    imageKeyword: "boat",
    color: "bg-emerald-600",
    likes: "30.1萬",
    poemTitle: "早發白帝城",
    poemContent: ["朝辭白帝彩雲間，", "千里江陵一日還。", "兩岸猿聲啼不住，", "輕舟已過萬重山。"],
    translation: "早晨告別彩雲繚繞的白帝城，千里之遙的江陵一天就可以到達。",
    date: "乾元二年",
    location: "長江三峽",
    caption: "重獲自由的感覺真好！！🎉 早上從白帝城出發，心情好到覺得雲都是彩色的。船開得飛快，旁邊猴子還在叫，我已經過了好幾座山了。流放結束，我要回家啦！🚤💨",
    hashtags: ["#自由", "#回家", "#速度與激情", "#輕舟", "#心情好"]
  },
  {
    id: 5,
    imageKeyword: "friend",
    color: "bg-indigo-600",
    likes: "22.4萬",
    poemTitle: "贈汪倫",
    poemContent: ["李白乘舟將欲行，", "忽聞岸上踏歌聲。", "桃花潭水深千尺，", "不及汪倫送我情。"],
    translation: "李白坐上船剛要離開，聽到岸邊踏歌聲，即使潭水千尺深，也比不上情誼深。",
    date: "天寶十四年",
    location: "桃花潭",
    caption: "剛上船準備走，汪倫這傢伙還帶人唱歌送我... 雖然之前騙我有十里桃花(其實是地名)，但我還是感動啦 😭🤝",
    hashtags: ["#兄弟情", "#汪倫", "#桃花潭", "#送別"]
  }
];

/* ---------------------------------
   📩 訊息列表資料
---------------------------------- */
const USERS_DATA = [
  {
    id: 1,
    name: "杜甫 Du Fu",
    username: "dufu_real",
    avatar: "🏚️",
    isPrivate: true,
    verified: true,
    bio: "詩聖 | 憂國憂民 | 李白鐵粉\n📍成都草堂",
    stats: { posts: 1450, followers: "1.2M", following: 1 },
    lastMessage: "太白兄！昨晚夢見你了…😭",
    time: "剛剛",
    unread: true,
    chatHistory: [
      { sender: 'me', text: "子美啊，最近在忙什麼？", time: "昨天 14:00" },
      { sender: 'them', text: "還是在修草堂…", time: "昨天 14:30" },
      { sender: 'them', text: "寫了首《夢李白》你看看！😭", time: "剛剛" }
    ]
  }
];

/* ---------------------------------
   📚 精選動態
---------------------------------- */
const STORIES_DATA = {
  "喝酒": [
    { id: 1, type: 'image', content: '🍶', caption: '百年三萬六千日，一日須傾三百杯！', time: '52週前' }
  ],
  "練劍": [
    { id: 1, type: 'image', content: '⚔️', caption: '十步殺一人，千里不留行。', time: '80週前' }
  ]
};

/* ---------------------------------
   🖼️ 模擬圖片
---------------------------------- */
const PostImage = ({ keyword, color }) => {
  const icons = {
    moon: "🌙", wine: "🍷", waterfall: "🌊", boat: "⛵", friend: "🤝", mountain: "⛰️"
  };
  return (
    <div className={`w-full h-full flex items-center justify-center text-6xl ${color}`}>
      {icons[keyword] || "📷"}
    </div>
  );
};

/* ---------------------------------
   📱 底部導航列
---------------------------------- */
const FooterNav = ({ active }) => (
  <div className="absolute bottom-0 w-full bg-black border-t border-gray-800 py-3 px-6 flex justify-between items-center z-20">
    <Home size={28} className={active === 'home' ? 'text-white' : 'text-gray-500'} />
    <Search size={28} className="text-gray-500" />
    <div className="w-7 h-7 border-2 border-white rounded-lg flex items-center justify-center">
      <span className="text-xl font-bold">+</span>
    </div>
    <Film size={28} className="text-gray-500" />
    <div className="w-7 h-7 rounded-full bg-gray-500 border border-white"></div>
  </div>
);

/* ============================================================================
   📲 主組件（李白 IG 完整模擬）
============================================================================ */
export default function LiBai() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [activeTab, setActiveTab] = useState('posts');
  const [isTranslated, setIsTranslated] = useState(false);

  const handlePostClick = (post) => {
    setSelectedPost(post);
    setIsTranslated(false);
    setCurrentView('post-detail');
  };

  return (
    <div className="min-h-screen bg-stone-900 text-white flex justify-center items-center font-sans p-4">
      {/* 模擬手機外框 */}
      <div className="w-full max-w-[375px] h-[812px] bg-black rounded-[3rem] relative shadow-2xl border-[8px] border-gray-800 overflow-hidden">
        {/* 狀態列 */}
        <div className="absolute top-0 w-full h-10 bg-black flex justify-between items-end px-6 pb-2 text-xs font-bold">
          <span>9:41</span>
          <span>🔋</span>
        </div>

        {/* ---- 首頁 (Profile) ---- */}
        {currentView === 'home' && (
          <div className="h-full pt-10 overflow-y-auto">
            {/* 頭貼與資料 */}
            <div className="px-4 py-4 text-center">
              <div className="text-4xl">🍶</div>
              <h1 className="text-lg font-bold mt-2">libai_official ✓</h1>
              <p className="text-sm text-gray-300 mt-1">
                ✒️ 詩仙 | 🍷 酒神 | ⛰️ 旅遊達人
              </p>
            </div>

            {/* 貼文列表 */}
            <div className="grid grid-cols-3 gap-1 pb-16">
              {POSTS.map((post) => (
                <div key={post.id} onClick={() => handlePostClick(post)}>
                  <PostImage keyword={post.imageKeyword} color={post.color} />
                </div>
              ))}
            </div>

            <FooterNav active="home" />
          </div>
        )}

        {/* ---- 貼文詳情 ---- */}
        {currentView === 'post-detail' && selectedPost && (
          <div className="absolute inset-0 bg-black flex flex-col">
            <div className="p-3 flex items-center">
              <ArrowLeft onClick={() => setCurrentView('home')} />
            </div>

            <PostImage keyword={selectedPost.imageKeyword} color={selectedPost.color} />

            <div className="p-3 text-sm">
              <div className="font-bold">{selectedPost.likes} 個讚</div>

              <p className="mt-2">{selectedPost.caption}</p>

              <div className="mt-2 text-blue-400">
                {selectedPost.hashtags.map((tag) => (
                  <span key={tag} className="mr-1">{tag}</span>
                ))}
              </div>

              <div className="bg-gray-800 p-3 rounded-lg mt-3">
                <p className="font-bold">《{selectedPost.poemTitle}》</p>
                {selectedPost.poemContent.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}

                {isTranslated && (
                  <p className="mt-2 text-gray-300">{selectedPost.translation}</p>
                )}

                <button
                  onClick={() => setIsTranslated(!isTranslated)}
                  className="text-xs text-blue-400 mt-2"
                >
                  {isTranslated ? "隱藏翻譯" : "翻譯年糕"}
                </button>
              </div>
            </div>

            <FooterNav />
          </div>
        )}
      </div>
    </div>
  );
}
