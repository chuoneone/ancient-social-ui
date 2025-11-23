// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MendelFB from "./pages/MendelFB";
import LiBaiIG from "./pages/LiBai";

export default function App() {
  return (
    <BrowserRouter basename="/">
      <div className="min-h-screen bg-gray-50 p-8 text-center">
        <h1 className="text-3xl font-bold mb-6">古人社群模擬互動館</h1>
        <p className="text-gray-600 mb-8">
          If ancient people had social media...
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <Link to="/mendel" className="bg-white shadow rounded-lg p-4 hover:bg-gray-100">
            🧬 孟德爾 Facebook
          </Link>
          <Link to="/li-bai" className="bg-white shadow rounded-lg p-4 hover:bg-gray-100">
            🖋 李白 Instagram
          </Link>
        </div>
      </div>

      <Routes>
        <Route path="/mendel" element={<MendelFB />} />
        <Route path="/li-bai" element={<LiBaiIG />} />
      </Routes>
    </BrowserRouter>
  );
}
