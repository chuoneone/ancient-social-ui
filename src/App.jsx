// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MendelFB from "./pages/MendelFB";
import LiBaiIG from "./pages/LiBai";  

// ❗暫時先拿掉沒完成的頁面，等寫好再加回來
// import TangTaizongFB from "./pages/TangTaizong";
// import QingLine from "./pages/QingLine";

export default function App() {
  return (
    <BrowserRouter basename="/">
      <div className="min-h-screen bg-gray-50 p-8 text-center">
        <h1 className="text-3xl font-bold mb-6">古人社群模擬互動館</h1>
        <p className="text-gray-600 mb-8">If ancient people had social media...</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <Link to="/mendel" className="bg-white shadow rounded-lg p-4 hover:bg-gray-100">🧬 孟德爾 Facebook</Link>
          <Link to="/li-bai" className="bg-white shadow rounded-lg p-4 hover:bg-gray-100">🖋 李白 Instagram</Link>

          {/* 目前還沒完成的先移除，避免 build 失敗
          <Link to="/tang" className="bg-white shadow rounded-lg p-4 hover:bg-gray-100">👑 唐太宗 Facebook</Link>
          <Link to="/qing" className="bg-white shadow rounded-lg p-4 hover:bg-gray-100">🗨️ 清朝 LINE 群</Link>
          */}
        </div>
      </div>

      <Routes>
        {/* 設一個首頁路由 */}
        <Route path="/" element={
          <div className="text-center p-6">
            <h2 className="text-xl font-bold mb-2">歡迎光臨古人社群模擬互動館 👋</h2>
            <p>請從上面的選單選擇一位古人進入互動界面 📱</p>
          </div>
        } />

        <Route path="/mendel" element={<MendelFB />} />
        <Route path="/li-bai" element={<LiBaiIG />
