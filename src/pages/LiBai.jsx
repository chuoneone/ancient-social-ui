import React, { useState } from "react";
import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  Grid,
  User,
  Search,
  Home,
  Film,
  MoreHorizontal,
  X,
  ArrowLeft,
  Phone,
  Video,
  ChevronLeft,
  ChevronRight,
  Lock,
  Mic,
  Image as ImageIcon,
  BookOpen,
} from "lucide-react";

// --- 資料層：李白的貼文數據 ---
const POSTS = [
  {
    id: 1,
    imageKeyword: "moon",
    color: "bg-slate-800",
    likes: "12.5萬",
    poemTitle: "靜夜思",
    poemContent: ["床前明月光，", "疑是地上霜。", "舉頭望明月，", "低頭思故鄉。"],
    translation:
      "明亮的月光灑在床前，好像地上泛起了一層霜。我抬起頭望向明月，低頭便思念起故鄉。",
    date: "開元十四年 九月十五",
    location: "長安",
  },
  {
    id: 2,
    imageKeyword: "wine",
    color: "bg-amber-900",
    likes: "9.8萬",
    poemTitle: "將進酒",
    poemContent: ["君不見黃河之水天上來，", "奔流到海不復回。"],
    translation:
      "你沒看見黃河之水從天上奔湧而下，流向大海再也不會回來。",
    date: "開元十七年 三月",
    location: "洛陽",
  },
];

export default function LiBaiIG() {
  const [showPost, setShowPost] = useState(null);

  return (
    <div className="min-h-screen bg-[#F0F2F5] font-sans flex justify-center py-6">
      <div className="w-full max-w-6xl px-2">
        {/* IG 手機框 */}
        <div className="max-w-md mx-auto bg-black rounded-xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="flex justify-between items-center p-4 bg-black text-white border-b border-gray-800">
            <h1 className="text-xl font-bold">libai_official</h1>
            <MoreHorizontal />
          </div>

          {/* 貼文清單 */}
          <div>
            {POSTS.map((post) => (
              <div key={post.id} className="relative">
                {/* 圖片區塊 */}
                <div
                  className={`h-96 flex items-center justify-center cursor-pointer ${post.color}`}
                  onClick={() => setShowPost(post)}
                >
                  <span className="text-5xl opacity-60">
                    {post.imageKeyword === "moon" ? "🌕" : "🍶"}
                  </span>
                </div>

                {/* 動作列 */}
                <div className="p-3 text-white flex items-center gap-3">
                  <Heart />
                  <MessageCircle />
                  <Send />
                  <Bookmark className="ml-auto" />
                </div>

                {/* 點讚 */}
                <div className="px-3 pb-3 text-gray-300 text-sm">
                  {post.likes} 個讚
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 單一貼文彈出視窗 */}
        {showPost && (
          <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
            <div className="bg-black w-[90%] max-w-md rounded-lg overflow-hidden text-white relative">
              <X
                className="absolute top-3 right-3 cursor-pointer"
                onClick={() => setShowPost(null)}
              />

              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{showPost.poemTitle}</h2>
                <p className="text-gray-400 mb-2 text-sm">{showPost.date}</p>
                <p className="text-gray-400 mb-2 text-sm">📍 {showPost.location}</p>
                <pre className="whitespace-pre-line leading-relaxed mb-4">
                  {showPost.poemContent.join("\n")}
                </pre>
                <div className="bg-gray-800 rounded-lg p-3 text-sm leading-relaxed">
                  <span className="font-bold">💬 李白說：</span>
                  <br />
                  {showPost.translation}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
