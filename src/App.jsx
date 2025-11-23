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
  BookOpen,
  Wine,
  PenTool
} from 'lucide-react';

// 李白的模擬數據
const LI_BAI_DATA = {
  name: "李白 (Li Bai)",
  profilePicColor: "bg-indigo-600",
  coverPhotoColor: "bg-blue-100", 
  bio: "人生得意須盡歡，莫使金樽空對月 🌕 | 翰林待詔 (已離職) | 旅遊部落客 | 品酒師 | 劍術愛好者 ⚔️",
  intro: [
    { icon: <Briefcase size={18} />, text: "曾擔任 翰林供奉 － 於 唐朝宮廷" },
    { icon: <GraduationCap size={18} />, text: "曾就讀 隱居山林大學社會系" },
    { icon: <MapPin size={18} />, text: "居住於 四海為家 (目前可能在長江上)" },
    { icon: <Heart size={18} />, text: "一言難盡 (月亮算嗎？)" },
    { icon: <Wine size={18} />, text: "興趣：喝酒、寫詩、練劍" },
    { icon: <Users size={18} />, text: "追蹤者：杜甫和其他 100 萬人" },
  ],
  friends: [
    { name: "杜甫", mutual: "頭號粉絲 (每篇都按讚)", color: "bg-gray-600" },
    { name: "孟浩然", mutual: "廣陵之交", color: "bg-green-600" },
    { name: "汪倫", mutual: "送禮大戶", color: "bg-red-500" },
    { name: "高力士", mutual: "這個人封鎖我", color: "bg-purple-600" },
    { name: "楊貴妃", mutual: "前同事", color: "bg-pink-400" },
    { name: "賀知章", mutual: "金龜換酒酒友", color: "bg-yellow-600" },
  ],
  photos: [
    { id: 1, title: "廬山瀑布", color: "bg-blue-300" },
    { id: 2, title: "長安夜景", color: "bg-indigo-900" },
    { id: 3, title: "桃花潭", color: "bg-pink-200" },
    { id: 4, title: "我的寶劍", color: "bg-gray-400" },
    { id: 5, title: "陳年花雕", color: "bg-amber-700" },
    { id: 6, title: "敬亭山自拍", color: "bg-green-700" },
  ],
  posts: [
    {
      id: 1,
      time: "剛剛",
      location: "白帝城",
      status: "心情好",
      content: "終於！！收到特赦令了！！🎉🎉 原本以為要在夜郎這種鬼地方待一輩子，結果突然說我可以回家了。心情太爽，感覺船開得跟飛的一樣快，原本好幾天的路程，一天就到了！掰掰啦白帝城，我要回江陵囉～🚤💨",
      poemTitle: "《早發白帝城》",
      poemContent: "朝辭白帝彩雲間，\n千里江陵一日還。\n兩岸猿聲啼不住，\n輕舟已過萬重山。",
      translation: "早晨告別了雲霞繚繞的白帝城，相距千里的江陵一日之內就可以到達。兩岸懸崖上的猿猴叫聲還沒停歇，輕快的小船已經穿過了萬重青山。",
      hashtags: ["#自由 #特赦 #船速飆到極限 #江陵我來了 #心情美麗"],
      likes: 1205,
      comments: 88,
      shares: 300,
      privacy: "public"
    },
    {
      id: 2,
      time: "昨天 23:30",
      location: "月下獨酌",
      status: "覺得寂寞",
      content: "半夜睡不著，提著一壺酒去花園喝。結果根本沒人揪，這群朋友真的是吼... 沒關係，我還有月亮跟我的影子。我們三個一起喝，也是很熱鬧啦 (苦笑)。喝醉了就唱歌跳舞，醒了就各走各的。這種邊緣人的快樂，你們不懂啦。🍷💃🕺",
      poemTitle: "《月下獨酌》",
      poemContent: "花間一壺酒，獨酌無相親。\n舉杯邀明月，對影成三人。\n月既不解飲，影徒隨我身。\n暫伴月將影，行樂須及春。\n我歌月徘徊，我舞影零亂。\n醒時同交歡，醉後各分散。\n永結無情遊，相期邈雲漢。",
      translation: "在花叢中擺上一壺酒，自斟自飲身邊沒有親友。舉起酒杯邀請天上的明月，對著地上的影子，我們就成了三個人。月亮不懂得飲酒，影子只是徒然跟隨著我的身體。暫且伴隨這月亮和影子，趁著春暖花開的時節及時行樂。我唱歌，月亮在空中徘徊；我起舞，影子在地上零亂。清醒時我們共同歡樂，酒醉後便各奔東西。願與月亮和身影永遠結下忘我的交遊，相約在那遙遠的銀河岸邊。",
      hashtags: ["#邊緣人 #月亮 #影子 #三人行 #喝多了 #不要管我"],
      likes: 5600,
      comments: 420,
      shares: 120,
      privacy: "public"
    },
    {
      id: 3,
      time: "上週五",
      location: "桃花潭",
      status: "覺得感動",
      content: "正準備要搭船離開，突然聽到岸上有踏歌的聲音。回頭一看，竟然是汪倫這傢伙！雖然桃花潭水有幾千尺深，但絕對比不上汪倫送我的這份情誼啊！😭😭 兄弟，謝啦！禮物我收到了！",
      poemTitle: "《贈汪倫》",
      poemContent: "李白乘舟將欲行，\n忽聞岸上踏歌聲。\n桃花潭水深千尺，\n不及汪倫送我情。",
      translation: "李白我坐上小船剛剛要離開，忽然聽到岸上傳來告別的歌聲。即使桃花潭的水有千尺那麼深，也比不上汪倫為我送行的情誼深厚。",
      hashtags: ["#BFF #汪倫 #桃花潭 #兄弟情 #不要哭"],
      likes: 890,
      comments: 50,
      shares: 30,
      privacy: "friends"
    },
    {
      id: 4,
      time: "很久以前",
      location: "某個旅館",
      status: "想家",
      content: "今晚月亮真的太亮了，照在床前地板上，我還以為地上結霜了勒（笑死，眼花）。抬頭看了一下月亮，突然想到小時候老家的樣子... 唉，不說了，越想越難過，低頭繼續睡。大家晚安。🌕💤",
      poemTitle: "《靜夜思》",
      poemContent: "床前明月光，\n疑是地上霜。\n舉頭望明月，\n低頭思故鄉。",
      translation: "明亮的月光灑在床前的窗戶紙上，好像地上泛起了一層霜。我禁不住抬起頭來，看那天窗外空中的一輪明月，不由得低頭沉思，想起遠方的家鄉。",
      hashtags: ["#失眠 #想家 #月光 #我是不是老了"],
      likes: 120000,
      comments: 9999,
      shares: 50000,
      privacy: "public"
    }
  ]
};

const NavBar = () => (
  <div className="bg-white shadow-md sticky top-0 z-50 h-14 flex items-center px-4 justify-between">
    <div className="flex items-center gap-2">
      <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
        唐
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

    <div className="hidden md:flex gap-10 px-4 h-full">
      <div className="h-full flex items-center border-b-4 border-indigo-600 px-4 cursor-pointer">
        <Home size={24} className="text-indigo-600" />
      </div>
      <div className="h-full flex items-center px-4 cursor-pointer hover:bg-gray-100 rounded-lg relative">
        <Users size={24} className="text-gray-500" />
        <span className="absolute top-3 right-3 bg-red-500 text-white text-[10px] rounded-full px-1">99+</span>
      </div>
      <div className="h-full flex items-center px-4 cursor-pointer hover:bg-gray-100 rounded-lg">
        <Wine size={24} className="text-gray-500" />
      </div>
    </div>

    <div className="flex gap-2">
      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300">
        <Menu size={20} />
      </div>
      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300">
        <MessageSquare size={20} />
      </div>
      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 relative">
        <Bell size={20} />
        <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
      </div>
      <div className="w-10 h-10 bg-indigo-600 rounded-full cursor-pointer relative overflow-hidden border border-gray-300">
          <div className="absolute inset-0 flex items-center justify-center text-white font-bold">李</div>
      </div>
    </div>
  </div>
);

const CreatePost = () => (
  <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
    <div className="flex gap-3 mb-3 border-b pb-3 border-gray-200">
      <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold flex-shrink-0">李</div>
      <input 
        className="w-full bg-gray-100 rounded-full px-4 hover:bg-gray-200 transition cursor-pointer outline-none"
        placeholder="太白，你今天有什麼詩興？"
        readOnly
      />
    </div>
    <div className="flex justify-between px-2">
      <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 px-3 py-1 rounded-lg">
        <Camera className="text-red-500" size={20} />
        <span className="text-gray-600 font-medium text-sm">直播喝酒</span>
      </div>
      <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 px-3 py-1 rounded-lg">
        <div className="text-green-500"><PenTool size={20} /></div>
        <span className="text-gray-600 font-medium text-sm">吟詩</span>
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
  const [showTranslation, setShowTranslation] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm mb-4 animate-fade-in-up">
      <div className="p-4">
        {/* Post Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex gap-2">
            <div className={`w-10 h-10 rounded-full ${author.profilePicColor} flex items-center justify-center text-white font-bold border-2 border-white shadow-sm relative`}>
               李
               <div className="absolute -bottom-1 -right-1 bg-green-500 w-3 h-3 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <div className="font-bold text-gray-800 hover:underline cursor-pointer flex items-center gap-1">
                {author.name}
                {post.status && <span className="font-normal text-gray-500 text-sm"> 覺得{post.status}</span>}
                {post.location && <span className="font-normal text-gray-500 text-sm"> ── 在 <span className="font-bold text-gray-800 cursor-pointer hover:underline">{post.location}</span></span>}
              </div>
              <div className="text-xs text-gray-500 flex items-center gap-1">
                {post.time} · 
                {post.privacy === 'public' ? <Globe size={12} /> : <Users size={12} />}
              </div>
            </div>
          </div>
          <MoreHorizontal className="text-gray-500 cursor-pointer" />
        </div>

        {/* Modern Content */}
        <div className="text-gray-900 mb-4 text-[15px] leading-relaxed">
          {post.content}
        </div>
        
        {post.hashtags && (
          <div className="text-indigo-600 text-sm mb-3 font-medium cursor-pointer">
            {post.hashtags.join(" ")}
          </div>
        )}

        {/* Poem Card (Styled differently to look like "content") */}
        <div className="bg-amber-50 rounded-lg p-5 border-l-4 border-amber-500 mb-3 relative overflow-hidden group">
            <div className="absolute top-0 right-0 opacity-10 text-6xl pointer-events-none">📜</div>
            <h3 className="font-bold text-amber-900 text-lg mb-2 border-b border-amber-200 pb-1 inline-block">{post.poemTitle}</h3>
            <p className="font-serif text-lg text-gray-800 whitespace-pre-wrap leading-loose">
                {post.poemContent}
            </p>
        </div>

        {/* Translation Rice Cake Button */}
        <div className="mb-3">
            <button 
                onClick={() => setShowTranslation(!showTranslation)}
                className="text-xs font-bold text-gray-500 hover:bg-gray-100 px-2 py-1 rounded flex items-center gap-1 transition-colors select-none"
            >
                <Globe size={14} /> 
                {showTranslation ? "隱藏翻譯年糕" : "查看翻譯年糕"}
            </button>
            
            {showTranslation && (
                <div className="mt-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-100 animate-fade-in">
                    <span className="font-bold text-gray-400 text-xs block mb-1">翻譯年糕提供</span>
                    {post.translation}
                </div>
            )}
        </div>

        {/* Stats */}
        <div className="flex justify-between items-center text-gray-500 text-sm py-2 border-b border-gray-200">
          <div className="flex items-center gap-1">
            <div className="w-5 h-5 bg-indigo-500 rounded-full flex items-center justify-center text-white z-20 border-2 border-white">
              <ThumbsUp size={10} fill="white" />
            </div>
            <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white -ml-2 z-10 border-2 border-white">
              <Heart size={10} fill="white" />
            </div>
            <span className="ml-1 hover:underline cursor-pointer flex items-center gap-1">
                杜甫和其他 {likes} 人
            </span>
          </div>
          <div className="flex gap-3">
             <span className="hover:underline cursor-pointer">{post.comments} 則留言</span>
             <span className="hover:underline cursor-pointer">{post.shares} 次分享</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex pt-1 mt-1">
          <button 
            onClick={handleLike}
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg hover:bg-gray-100 font-medium ${isLiked ? 'text-indigo-600' : 'text-gray-500'}`}
          >
            <ThumbsUp size={18} /> 讚
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg hover:bg-gray-100 font-medium text-gray-500">
            <MessageCircle size={18} /> 留言
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg hover:bg-gray-100 font-medium text-gray-500">
            <Share2 size={18} /> 分享
          </button>
        </div>
      </div>
      
      {/* Featured Comment (Mock) */}
      {post.id === 2 && (
          <div className="px-4 pb-4 pt-0">
              <div className="bg-gray-100 rounded-xl p-3 text-sm">
                  <div className="font-bold text-gray-800 cursor-pointer">杜甫</div>
                  <div className="text-gray-800">太白兄，少喝點，傷身啊！下次我陪你喝！</div>
                  <div className="text-xs text-gray-500 mt-1 flex gap-2">
                      <span className="cursor-pointer hover:underline">讚</span> · 
                      <span className="cursor-pointer hover:underline">回覆</span> · 
                      <span>剛剛</span>
                  </div>
              </div>
          </div>
      )}
    </div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState('posts');

  return (
    <div className="bg-[#F0F2F5] min-h-screen font-sans text-gray-900">
      <NavBar />
      
      {/* Header Area */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto">
          {/* Cover Photo */}
          <div className={`w-full h-[200px] md:h-[350px] ${LI_BAI_DATA.coverPhotoColor} rounded-b-xl relative overflow-hidden group`}>
             <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
             {/* Decorative Elements */}
             <div className="absolute top-10 left-10 text-6xl opacity-30 select-none">🏔️</div>
             <div className="absolute bottom-20 right-20 text-6xl opacity-30 select-none">🦅</div>
             
             <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm text-sm font-semibold cursor-pointer hover:bg-white flex items-center gap-2">
                <Camera size={16} /> 編輯封面相片
             </div>
          </div>

          {/* Profile Section */}
          <div className="px-4 md:px-8 pb-4 relative">
            <div className="flex flex-col md:flex-row items-center md:items-end -mt-16 md:-mt-8 gap-4">
              {/* Profile Pic */}
              <div className="relative group">
                <div className={`w-[168px] h-[168px] rounded-full ${LI_BAI_DATA.profilePicColor} border-4 border-white shadow-lg flex items-center justify-center text-white text-7xl relative z-10 overflow-hidden`}>
                   <span className="select-none transform hover:scale-110 transition-transform duration-300">🍶</span>
                </div>
                <div className="absolute bottom-2 right-2 bg-gray-200 p-2 rounded-full border border-white cursor-pointer hover:bg-gray-300 z-20">
                   <Camera size={20} />
                </div>
              </div>

              {/* Name & Bio */}
              <div className="flex-1 text-center md:text-left mb-2 md:mb-4">
                <h1 className="text-3xl font-bold text-gray-900 flex items-center justify-center md:justify-start gap-2">
                    {LI_BAI_DATA.name}
                    <div className="bg-blue-500 text-white p-0.5 rounded-full text-[10px] w-4 h-4 flex items-center justify-center" title="已驗證的詩仙">✓</div>
                </h1>
                <p className="text-gray-500 font-semibold text-lg hover:underline cursor-pointer">{LI_BAI_DATA.friends.length} 位朋友 · {LI_BAI_DATA.friends.slice(0,3).map(f=>f.name).join('、')}...</p>
                
                {/* Friend Avatars */}
                <div className="flex justify-center md:justify-start -space-x-2 mt-2">
                   {LI_BAI_DATA.friends.slice(0, 6).map((friend, i) => (
                      <div key={i} className={`w-8 h-8 rounded-full border-2 border-white ${friend.color} flex items-center justify-center text-[10px] text-white font-bold cursor-pointer hover:z-10 relative`} title={friend.name}>
                          {friend.name[0]}
                      </div>
                   ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 mb-4">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2">
                  <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center text-indigo-600 text-xs">+</div>
                  追蹤
                </button>
                <button className="bg-gray-200 hover:bg-gray-300 text-black px-4 py-2 rounded-lg font-semibold flex items-center gap-2">
                  <span className="text-lg">💬</span>
                  發送訊息
                </button>
              </div>
            </div>

            <div className="border-t border-gray-300 mt-6 pt-1">
              <div className="flex gap-1 md:gap-6 overflow-x-auto">
                {['貼文', '關於', '朋友', '相片', '影片', '打卡'].map((tab) => (
                  <button 
                    key={tab}
                    onClick={() => setActiveTab(tab === '貼文' ? 'posts' : tab)}
                    className={`px-4 py-4 font-semibold text-[15px] whitespace-nowrap relative ${activeTab === (tab === '貼文' ? 'posts' : tab) ? 'text-indigo-600' : 'text-gray-600 hover:bg-gray-100 rounded-lg'}`}
                  >
                    {tab}
                    {activeTab === (tab === '貼文' ? 'posts' : tab) && (
                      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-indigo-600 rounded-t-sm"></div>
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
               <p className="text-[15px] text-gray-900 leading-normal">"{LI_BAI_DATA.bio}"</p>
               <button className="w-full bg-gray-100 hover:bg-gray-200 text-black font-semibold py-1.5 rounded-lg mt-3 text-sm">編輯簡介</button>
            </div>
            <div className="flex flex-col gap-4">
              {LI_BAI_DATA.intro.map((item, idx) => (
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
                <span className="text-indigo-600 text-[15px] cursor-pointer hover:bg-gray-100 px-2 py-1 rounded">查看全部</span>
             </div>
             <div className="grid grid-cols-3 gap-1 rounded-xl overflow-hidden">
                {LI_BAI_DATA.photos.map((photo) => (
                   <div key={photo.id} className={`aspect-square ${photo.color} relative group cursor-pointer`}>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 text-white text-xs text-center p-1 transition-opacity font-bold shadow-md">
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
                <span className="text-indigo-600 text-[15px] cursor-pointer hover:bg-gray-100 px-2 py-1 rounded">查看全部</span>
             </div>
             <p className="text-gray-500 text-[15px] mb-4">{LI_BAI_DATA.friends.length} 位朋友</p>
             <div className="grid grid-cols-3 gap-3">
                {LI_BAI_DATA.friends.slice(0, 9).map((friend, idx) => (
                   <div key={idx} className="cursor-pointer">
                      <div className={`aspect-square ${friend.color} rounded-lg mb-1 flex items-center justify-center text-white font-bold text-xl`}>
                          {friend.name[0]}
                      </div>
                      <p className="text-[13px] font-semibold leading-tight">{friend.name}</p>
                   </div>
                ))}
             </div>
          </div>

        </div>

        {/* Right Content / Feed */}
        <div className="md:col-span-7 lg:col-span-7">
          <CreatePost />
          
          {/* Filters */}
          <div className="bg-white rounded-xl shadow-sm p-2 mb-4 flex justify-between items-center px-4">
             <h3 className="font-bold text-lg">貼文</h3>
             <button className="bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-1">
                <div className="rotate-90"><MoreHorizontal size={14}/></div> 篩選條件
             </button>
          </div>

          {/* Posts List */}
          {LI_BAI_DATA.posts.map(post => (
            <Post key={post.id} post={post} author={LI_BAI_DATA} />
          ))}

          <div className="text-center text-gray-500 py-4 text-sm">
             <p>已經到底了，再往下就穿越回唐朝了。</p>
          </div>
        </div>

      </div>
    </div>
  );
}
