import React, { useState } from 'react';
import { 
  ThumbsUp, 
  MessageCircle, 
  Share2, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Heart, 
  Search, 
  Bell, 
  MessageSquare, 
  Home, 
  Users, 
  Menu, 
  Camera, 
  MoreHorizontal,
  Globe,
  Sprout,
  BookOpen
} from 'lucide-react';

// 模擬數據
const MENDEL_DATA = {
  name: "葛雷格·孟德爾 (Gregor Mendel)",
  profilePicColor: "bg-emerald-700", // 修道士袍色
  coverPhotoColor: "bg-green-100",   // 豌豆園色
  bio: "種豆得豆，種瓜得瓜... 還是其實不一定？🧬 | 遺傳學愛好者 | 上帝的僕人 | 豌豆狂熱者 🫛",
  intro: [
    { icon: <Briefcase size={18} />, text: "院長 － 於 聖湯瑪斯修道院 (St. Thomas's Abbey)" },
    { icon: <Briefcase size={18} />, text: "兼職氣象觀測員" },
    { icon: <GraduationCap size={18} />, text: "曾就讀 維也納大學 (University of Vienna)" },
    { icon: <MapPin size={18} />, text: "居住於 奧地利帝國 布爾諾 (Brno)" },
    { icon: <Heart size={18} />, text: "單身（已嫁給科學與上帝）" },
    { icon: <Sprout size={18} />, text: "追蹤者：29,000 株豌豆" },
  ],
  friends: [
    { name: "查爾斯·達爾文", mutual: "0 位共同朋友 (他沒回我信)", color: "bg-gray-400" },
    { name: "卡爾·奈格里", mutual: "經常爭論山柳菊", color: "bg-red-400" },
    { name: "方濟各院長", mutual: "修道院同事", color: "bg-amber-600" },
    { name: "克里斯蒂安·都普勒", mutual: "大學教授", color: "bg-blue-500" },
    { name: "上帝", mutual: "心靈導師", color: "bg-yellow-400" },
    { name: "豌豆小編", mutual: "粉絲專頁", color: "bg-green-500" },
  ],
  photos: [
    { id: 1, title: "高莖與矮莖", color: "bg-green-300" },
    { id: 2, title: "紫花", color: "bg-purple-400" },
    { id: 3, title: "黃圓豆", color: "bg-yellow-300" },
    { id: 4, title: "綠皺豆", color: "bg-green-700" },
    { id: 5, title: "手稿筆記", color: "bg-amber-100" },
    { id: 6, title: "修道院花園", color: "bg-emerald-200" },
    { id: 7, title: "顯微鏡", color: "bg-gray-300" },
    { id: 8, title: "F1世代", color: "bg-green-500" },
    { id: 9, title: "F2世代", color: "bg-yellow-500" },
  ],
  posts: [
    {
      id: 1,
      time: "1866年2月8日",
      content: "終於發表了我的論文《植物雜交實驗》！這是我八年來數了幾萬顆豌豆的心血結晶。雖然台下的反應有點冷淡... 感覺大家好像聽不太懂數學跟生物的結合？沒關係，我相信總有一天會有人懂的！😤",
      hashtags: ["#遺傳法則 #分離律 #獨立分配律 #我的時代會來臨的"],
      likes: 3,
      comments: 0,
      shares: 0,
      image: null,
      privacy: "public"
    },
    {
      id: 2,
      time: "1865年 某個下午",
      content: "又是一個收成的日子。今天的數據依然完美符合 3:1 的比例！顯性性狀完全遮蓋了隱性性狀，但在F2世代隱性性狀又回來了。大自然的數學真是太美妙了。🌿🧮",
      hashtags: ["#顯性與隱性 #黃圓綠皺 #豌豆湯喝到怕"],
      likes: 12,
      comments: 2,
      shares: 1,
      image: "pea_chart",
      privacy: "public"
    },
    {
      id: 3,
      time: "1864年",
      content: "剛剛寄了一份論文副本給達爾文先生。希望能收到他的回覆... 聽說他在研究演化論，我覺得我的發現可以幫他解決遺傳機制的缺口！有人認識他嗎？幫忙標記一下 @CharlesDarwin 🙏",
      hashtags: ["#求擴散 #演化論 #遺傳學"],
      likes: 1,
      comments: 0,
      shares: 0,
      image: null,
      privacy: "friends"
    },
    {
      id: 4,
      time: "1856年",
      content: "修道院的花園不夠用了... 我申請把實驗擴大到溫室。院長看我的眼神有點無奈，但他還是答應了。感謝主！🙏 開始大規模種植計畫！",
      hashtags: ["#實驗生活 #修道士的日常"],
      likes: 45,
      comments: 5,
      shares: 2,
      image: null,
      privacy: "public"
    }
  ]
};

const NavBar = () => (
  <div className="bg-white shadow-md sticky top-0 z-50 h-14 flex items-center px-4 justify-between">
    <div className="flex items-center gap-2">
      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
        f
      </div>
      <div className="hidden md:flex items-center bg-gray-100 rounded-full px-3 py-2 w-64">
        <Search size={18} className="text-gray-500" />
        <input 
          type="text" 
          placeholder="搜尋 Facebook" 
          className="bg-transparent border-none outline-none ml-2 w-full text-sm"
        />
      </div>
    </div>

    <div className="hidden md:flex gap-8 px-4 h-full">
      <div className="h-full flex items-center border-b-4 border-blue-600 px-2 cursor-pointer">
        <Home size={28} className="text-blue-600" />
      </div>
      <div className="h-full flex items-center px-2 cursor-pointer hover:bg-gray-100 rounded-lg">
        <Users size={28} className="text-gray-500" />
      </div>
      <div className="h-full flex items-center px-2 cursor-pointer hover:bg-gray-100 rounded-lg">
        <BookOpen size={28} className="text-gray-500" />
      </div>
    </div>

    <div className="flex gap-2">
      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300">
        <Menu size={20} />
      </div>
      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300">
        <MessageSquare size={20} />
      </div>
      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300">
        <Bell size={20} />
      </div>
      <div className="w-10 h-10 bg-emerald-700 rounded-full cursor-pointer relative overflow-hidden border border-gray-300">
          {/* Avatar Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center text-white text-xs">Me</div>
      </div>
    </div>
  </div>
);

const CreatePost = () => (
  <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
    <div className="flex gap-3 mb-3 border-b pb-3 border-gray-200">
      <div className="w-10 h-10 rounded-full bg-emerald-700 flex-shrink-0"></div>
      <input 
        className="w-full bg-gray-100 rounded-full px-4 hover:bg-gray-200 transition cursor-pointer outline-none"
        placeholder="孟德爾，你在想什麼？"
        readOnly
      />
    </div>
    <div className="flex justify-between px-2">
      <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 px-3 py-1 rounded-lg">
        <Camera className="text-red-500" size={20} />
        <span className="text-gray-600 font-medium text-sm">直播視訊</span>
      </div>
      <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 px-3 py-1 rounded-lg">
        <div className="text-green-500"><Sprout size={20} /></div>
        <span className="text-gray-600 font-medium text-sm">相片/影片</span>
      </div>
      <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 px-3 py-1 rounded-lg">
        <div className="text-yellow-500">😊</div>
        <span className="text-gray-600 font-medium text-sm">感受/活動</span>
      </div>
    </div>
  </div>
);

const Post = ({ post, author }) => {
  const [likes, setLikes] = useState(post.likes);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm mb-4">
      <div className="p-4">
        {/* Post Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex gap-2">
            <div className={`w-10 h-10 rounded-full ${author.profilePicColor} flex items-center justify-center text-white font-bold border-2 border-white shadow-sm`}>
               GM
            </div>
            <div>
              <div className="font-bold text-gray-800 hover:underline cursor-pointer">{author.name}</div>
              <div className="text-xs text-gray-500 flex items-center gap-1">
                {post.time} · 
                {post.privacy === 'public' ? <Globe size={12} /> : <Users size={12} />}
              </div>
            </div>
          </div>
          <MoreHorizontal className="text-gray-500 cursor-pointer" />
        </div>

        {/* Post Content */}
        <div className="text-gray-800 mb-3 whitespace-pre-wrap">
          {post.content}
        </div>
        
        {post.hashtags && (
          <div className="text-blue-600 text-sm mb-3 font-medium cursor-pointer">
            {post.hashtags.join(" ")}
          </div>
        )}

        {/* Mock Image Content */}
        {post.image === 'pea_chart' && (
          <div className="w-full h-64 bg-green-50 rounded-lg border-2 border-green-100 flex flex-col items-center justify-center mb-3 relative overflow-hidden">
             <div className="grid grid-cols-2 gap-2 w-32 h-32">
                <div className="bg-yellow-300 rounded-full flex items-center justify-center text-xs font-bold text-yellow-800 shadow-sm">圓黃(YR)</div>
                <div className="bg-yellow-300 rounded-full flex items-center justify-center text-xs font-bold text-yellow-800 shadow-sm">圓黃(Yr)</div>
                <div className="bg-yellow-300 rounded-full flex items-center justify-center text-xs font-bold text-yellow-800 shadow-sm">圓黃(yR)</div>
                <div className="bg-green-600 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-sm animate-pulse">皺綠(yr)</div>
             </div>
             <p className="mt-2 text-green-800 font-mono text-sm">F2 Phenotype Ratio 9:3:3:1</p>
          </div>
        )}

        {/* Stats */}
        <div className="flex justify-between items-center text-gray-500 text-sm py-2 border-b border-gray-200">
          <div className="flex items-center gap-1">
            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white">
              <ThumbsUp size={12} fill="white" />
            </div>
            <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white -ml-1">
              <Heart size={12} fill="white" />
            </div>
            <span className="ml-1 hover:underline cursor-pointer">{likes}</span>
          </div>
          <div className="flex gap-3">
             <span className="hover:underline cursor-pointer">{post.comments} 則留言</span>
             <span className="hover:underline cursor-pointer">{post.shares} 次分享</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex pt-1">
          <button 
            onClick={handleLike}
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg hover:bg-gray-100 font-medium ${isLiked ? 'text-blue-600' : 'text-gray-500'}`}
          >
            <ThumbsUp size={20} /> 讚
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg hover:bg-gray-100 font-medium text-gray-500">
            <MessageCircle size={20} /> 留言
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg hover:bg-gray-100 font-medium text-gray-500">
            <Share2 size={20} /> 分享
          </button>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState('posts');

  return (
    <div className="bg-[#F0F2F5] min-h-screen font-sans">
      <NavBar />
      
      {/* Header Area */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto">
          {/* Cover Photo */}
          <div className={`w-full h-[200px] md:h-[350px] ${MENDEL_DATA.coverPhotoColor} rounded-b-xl relative overflow-hidden group`}>
             <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-200 to-green-800"></div>
             <div className="absolute bottom-4 right-4 bg-white px-3 py-1.5 rounded-lg shadow-sm text-sm font-semibold cursor-pointer hover:bg-gray-50 flex items-center gap-2">
                <Camera size={16} /> 編輯封面相片
             </div>
             {/* Decorative Peas */}
             <div className="absolute top-10 left-10 text-4xl opacity-50">🌱</div>
             <div className="absolute bottom-10 right-20 text-4xl opacity-50">🪴</div>
          </div>

          {/* Profile Section */}
          <div className="px-4 md:px-8 pb-4 relative">
            <div className="flex flex-col md:flex-row items-center md:items-end -mt-16 md:-mt-8 gap-4">
              {/* Profile Pic */}
              <div className="relative">
                <div className={`w-[168px] h-[168px] rounded-full ${MENDEL_DATA.profilePicColor} border-4 border-white shadow-lg flex items-center justify-center text-white text-6xl relative z-10 overflow-hidden`}>
                   <span className="select-none">👴🏻</span>
                </div>
                <div className="absolute bottom-2 right-2 bg-gray-200 p-2 rounded-full border border-white cursor-pointer hover:bg-gray-300 z-20">
                   <Camera size={20} />
                </div>
              </div>

              {/* Name & Bio */}
              <div className="flex-1 text-center md:text-left mb-2 md:mb-4">
                <h1 className="text-3xl font-bold text-gray-900">{MENDEL_DATA.name}</h1>
                <p className="text-gray-500 font-semibold text-lg hover:underline cursor-pointer">{MENDEL_DATA.friends.length} 位朋友</p>
                
                {/* Friend Avatars */}
                <div className="flex justify-center md:justify-start -space-x-2 mt-2">
                   {MENDEL_DATA.friends.slice(0, 5).map((friend, i) => (
                      <div key={i} className={`w-8 h-8 rounded-full border-2 border-white ${friend.color}`} title={friend.name}></div>
                   ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 mb-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2">
                  <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center text-blue-600 text-xs">+</div>
                  發送訊息
                </button>
                <button className="bg-gray-200 hover:bg-gray-300 text-black px-4 py-2 rounded-lg font-semibold flex items-center gap-2">
                  <span className="text-lg">👋</span>
                  打招呼
                </button>
              </div>
            </div>

            <div className="border-t border-gray-300 mt-6 pt-1">
              <div className="flex gap-1 md:gap-6 overflow-x-auto">
                {['貼文', '關於', '朋友', '相片', '影片', '打卡'].map((tab) => (
                  <button 
                    key={tab}
                    onClick={() => setActiveTab(tab === '貼文' ? 'posts' : tab)}
                    className={`px-4 py-4 font-semibold text-[15px] whitespace-nowrap relative ${activeTab === (tab === '貼文' ? 'posts' : tab) ? 'text-blue-600' : 'text-gray-600 hover:bg-gray-100 rounded-lg'}`}
                  >
                    {tab}
                    {activeTab === (tab === '貼文' ? 'posts' : tab) && (
                      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-600 rounded-t-sm"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-12 gap-4">
        
        {/* Left Sidebar */}
        <div className="md:col-span-5 lg:col-span-5 flex flex-col gap-4">
          
          {/* Intro Card */}
          <div className="bg-white rounded-xl shadow-sm p-4">
            <h2 className="text-xl font-bold mb-4">簡介</h2>
            <div className="text-center mb-4 pb-4 border-b border-gray-200">
               <p className="text-sm text-gray-700 italic">"{MENDEL_DATA.bio}"</p>
               <button className="w-full bg-gray-100 hover:bg-gray-200 text-black font-semibold py-1.5 rounded-lg mt-3 text-sm">編輯簡介</button>
            </div>
            <div className="flex flex-col gap-4">
              {MENDEL_DATA.intro.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-gray-700">
                  <div className="mt-1 text-gray-500">{item.icon}</div>
                  <span className="text-[15px]">{item.text}</span>
                </div>
              ))}
            </div>
            <button className="w-full bg-gray-100 hover:bg-gray-200 text-black font-semibold py-1.5 rounded-lg mt-4 text-sm">編輯詳細資料</button>
            <button className="w-full bg-gray-100 hover:bg-gray-200 text-black font-semibold py-1.5 rounded-lg mt-2 text-sm">新增興趣</button>
          </div>

          {/* Photos Preview Card */}
          <div className="bg-white rounded-xl shadow-sm p-4">
             <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold hover:underline cursor-pointer">相片</h2>
                <span className="text-blue-600 text-[15px] cursor-pointer hover:bg-gray-100 px-2 py-1 rounded">查看全部</span>
             </div>
             <div className="grid grid-cols-3 gap-1 rounded-xl overflow-hidden">
                {MENDEL_DATA.photos.map((photo) => (
                   <div key={photo.id} className={`aspect-square ${photo.color} relative group cursor-pointer`}>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/20 text-white text-xs text-center p-1 transition-opacity font-bold shadow-md">
                         {photo.title}
                      </div>
                   </div>
                ))}
             </div>
          </div>

          {/* Friends Preview Card */}
          <div className="bg-white rounded-xl shadow-sm p-4">
             <div className="flex justify-between items-center mb-1">
                <h2 className="text-xl font-bold hover:underline cursor-pointer">朋友</h2>
                <span className="text-blue-600 text-[15px] cursor-pointer hover:bg-gray-100 px-2 py-1 rounded">查看全部</span>
             </div>
             <p className="text-gray-500 text-[15px] mb-4">{MENDEL_DATA.friends.length} 位朋友</p>
             <div className="grid grid-cols-3 gap-3">
                {MENDEL_DATA.friends.slice(0, 9).map((friend, idx) => (
                   <div key={idx} className="cursor-pointer">
                      <div className={`aspect-square ${friend.color} rounded-lg mb-1`}></div>
                      <p className="text-[13px] font-semibold leading-tight">{friend.name}</p>
                   </div>
                ))}
             </div>
          </div>

        </div>

        {/* Right Content / Feed */}
        <div className="md:col-span-7 lg:col-span-7">
          <CreatePost />
          
          {/* Filters (Mock) */}
          <div className="bg-white rounded-xl shadow-sm p-2 mb-4 flex justify-between items-center px-4">
             <h3 className="font-bold text-lg">貼文</h3>
             <button className="bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-1">
                <div className="rotate-90"><MoreHorizontal size={14}/></div> 篩選條件
             </button>
          </div>

          {/* Posts List */}
          {MENDEL_DATA.posts.map(post => (
            <Post key={post.id} post={post} author={MENDEL_DATA} />
          ))}

          <div className="text-center text-gray-500 py-4 text-sm">
             <p>這就是全部了！再往下就回到 1822 年了。</p>
          </div>
        </div>

      </div>
    </div>
  );
}
