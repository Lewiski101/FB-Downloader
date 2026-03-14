"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    setLoading(true);
    // Logic will go here
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-[#1877f2] p-1.5 rounded-lg">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
            <span className="text-2xl font-bold text-[#1877f2] tracking-tight">FBDownloader</span>
          </div>
          <div className="hidden sm:flex gap-8 font-medium text-gray-600">
            <a href="#" className="hover:text-[#1877f2] transition-colors">Home</a>
            <a href="/blog" className="hover:text-[#1877f2] transition-colors">Blog</a>
            <a href="#" className="hover:text-[#1877f2] transition-colors">How to Use</a>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-[#f0f2f5] py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Facebook Video Downloader
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Download Facebook videos in High Quality (HD) for free. Just paste the link below and start downloading instantly.
            </p>

            <form onSubmit={handleDownload} className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Paste Facebook video URL here..."
                className="w-full p-5 pr-40 rounded-xl border-2 border-gray-200 focus:border-[#1877f2] focus:ring-4 focus:ring-[#1877f2]/10 outline-none transition-all text-lg shadow-lg"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <button
                type="submit"
                disabled={loading}
                className="absolute right-2 top-2 bottom-2 bg-[#1877f2] text-white px-8 rounded-lg font-bold hover:bg-[#166fe5] transition-colors disabled:opacity-70 flex items-center gap-2"
              >
                {loading ? (
                  <span className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                ) : (
                  "Download"
                )}
              </button>
            </form>
            <p className="mt-4 text-sm text-gray-500">
              By using our service, you agree to our Terms of Service.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">Why use FBDownloader?</h2>
            <div className="grid sm:grid-cols-3 gap-12">
              <div className="text-center group">
                <div className="w-16 h-16 bg-blue-50 text-[#1877f2] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#1877f2] group-hover:text-white transition-all duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Fast & Free</h3>
                <p className="text-gray-600">Download any Facebook video in seconds without any hidden costs or subscriptions.</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-blue-50 text-[#1877f2] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#1877f2] group-hover:text-white transition-all duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <h3 className="text-xl font-bold mb-3">High Quality</h3>
                <p className="text-gray-600">We support downloading videos in HD, 1080p, and even 4K quality where available.</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-blue-50 text-[#1877f2] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#1877f2] group-hover:text-white transition-all duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Secure & Private</h3>
                <p className="text-gray-600">We don't store your videos or track your history. Your privacy is our top priority.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Use Section */}
        <section className="py-20 bg-[#f0f2f5]">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How to download Facebook videos?</h2>
            <div className="space-y-6">
              {[
                { step: 1, text: "Copy the Facebook video URL from your browser or the Facebook app." },
                { step: 2, text: "Paste the URL into the input field at the top of this page." },
                { step: 3, text: "Click the 'Download' button and wait for the links to generate." },
                { step: 4, text: "Choose your preferred quality and save the video to your device." }
              ].map((item) => (
                <div key={item.step} className="flex items-center gap-6 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <span className="text-3xl font-black text-[#1877f2]/20">{item.step}</span>
                  <p className="text-lg font-medium text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="bg-[#1877f2] p-1 rounded-lg">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-900">FBDownloader</span>
          </div>
          <p className="text-gray-500 mb-8">© 2026 FBDownloader. All rights reserved.</p>
          <div className="flex justify-center gap-8 text-sm font-medium text-gray-400">
            <a href="#" className="hover:text-[#1877f2]">Privacy Policy</a>
            <a href="#" className="hover:text-[#1877f2]">Terms of Service</a>
            <a href="#" className="hover:text-[#1877f2]">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
