"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";

interface DownloadLink {
  quality: string;
  url: string;
  size: string;
}

interface VideoData {
  title: string;
  links: DownloadLink[];
  thumbnail?: string;
}

function HomeContent() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [videoData, setVideoData] = useState<VideoData | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const validateUrl = (url: string) => {
    const fbRegex = /^(https?:\/\/)?(www\.)?(facebook\.com|fb\.watch|fb\.com)\/.+$/;
    return fbRegex.test(url);
  };

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!url) {
      setError("Please enter a Facebook video link.");
      return;
    }

    if (!validateUrl(url)) {
      setError("You have entered an invalid link. Please enter a Facebook video link or something similar! (e.g., https://www.facebook.com/watch/...)");
      return;
    }

    setLoading(true);

    try {
      setLoading(true);
      const response = await fetch("/api/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to process the video. Please try again.");
      }

      setVideoData(data);
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const handleExternalDownload = (url: string) => {
    // Open in a new tab to ensure it bypasses any iframe restrictions
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const reset = () => {
    setVideoData(null);
    setUrl("");
    setError(null);
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen flex flex-col bg-[#f0f2f5]">
      {/* Navbar */}
      <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button onClick={reset} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="bg-[#1877f2] p-1.5 rounded-lg">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
            <span className="text-2xl font-bold text-[#1877f2] tracking-tight">FBDownloader</span>
          </button>
          <div className="hidden sm:flex gap-8 font-medium text-gray-600">
            <button onClick={reset} className="hover:text-[#1877f2] transition-colors">Home</button>
            <Link href="/blog" className="hover:text-[#1877f2] transition-colors">Blog</Link>
            <a href="#how-to" className="hover:text-[#1877f2] transition-colors">How to Use</a>
          </div>
        </div>
      </nav>

      <main className="flex-grow" suppressHydrationWarning>
        {!videoData ? (
          /* Input Section */
          <section className="bg-gradient-to-b from-white to-[#f0f2f5] py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-bold mb-8 animate-pulse">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                BREAKING: Massive Design Layoffs Following Google Stitch Beta. <Link href="/blog/massive-ui-ux-design-layoffs-google-stitch-beta" className="underline">Read More</Link>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
                Facebook Video Downloader
              </h1>
              <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                Download Facebook videos in High Quality (HD) for free. Just paste the link below and start downloading instantly.
              </p>

              <form onSubmit={handleDownload} className="relative max-w-2xl mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Paste Facebook video URL here..."
                    className={`w-full p-5 pr-40 rounded-xl border-2 outline-none transition-all text-lg shadow-lg ${
                      error ? "border-red-400 focus:border-red-500 ring-red-100" : "border-gray-200 focus:border-[#1877f2] focus:ring-4 focus:ring-[#1877f2]/10"
                    }`}
                    value={url}
                    onChange={(e) => {
                      setUrl(e.target.value);
                      if (error) setError(null);
                    }}
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
                </div>
                {error && (
                  <div className="mt-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm font-medium animate-in fade-in slide-in-from-top-2">
                    {error}
                  </div>
                )}
              </form>
              <p className="mt-4 text-sm text-gray-500">
                By using our service, you agree to our Terms of Service.
              </p>
            </div>
          </section>
        ) : (
          /* Result Section */
          <section className="py-12 px-4">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden animate-in zoom-in-95 duration-300">
              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-full md:w-64 aspect-video bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center border border-gray-100">
                    {videoData.thumbnail ? (
                      <img src={videoData.thumbnail} alt={videoData.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="text-[#1877f2]/20">
                        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M21 3H3c-1.11 0-2 .89-2 2v14c0 1.1.89 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm-9 12V9l5 3-5 3z"/></svg>
                      </div>
                    )}
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{videoData.title}</h2>
                    <p className="text-gray-500 text-sm mb-6 break-all line-clamp-1">{url}</p>
                    
                    <div className="space-y-3">
                      {videoData.links.map((link, idx) => (
                        <div key={idx} className="flex items-center justify-between p-4 bg-[#f0f2f5] rounded-xl hover:bg-gray-200 transition-colors">
                          <div className="flex items-center gap-3">
                            <span className="bg-[#1877f2] text-white text-xs font-bold px-2 py-1 rounded uppercase">
                              {link.quality}
                            </span>
                            <span className="font-semibold text-gray-700">{link.size}</span>
                          </div>
                          <a 
                            href={link.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-[#1877f2] text-white px-6 py-2 rounded-lg font-bold hover:bg-[#166fe5] transition-colors shadow-md active:scale-95"
                          >
                            Download Now
                          </a>
                        </div>
                      ))}
                    </div>

                    <button 
                      onClick={reset}
                      className="mt-8 w-full flex items-center justify-center gap-2 text-gray-600 font-bold hover:text-[#1877f2] transition-colors py-3 border-2 border-dashed border-gray-200 rounded-xl hover:border-[#1877f2]/30"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
                      Download Another Video
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">Why use FBDownloader?</h2>
            <div className="grid sm:grid-cols-3 gap-12">
              <div className="text-center group">
                <div className="w-16 h-16 bg-blue-50 text-[#1877f2] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#1877f2] group-hover:text-white transition-all duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Fast & Free</h3>
                <p className="text-gray-600">Download any Facebook video in seconds without any hidden costs or subscriptions.</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-blue-50 text-[#1877f2] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#1877f2] group-hover:text-white transition-all duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">High Quality</h3>
                <p className="text-gray-600">We support downloading videos in HD, 1080p, and even 4K quality where available.</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-blue-50 text-[#1877f2] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#1877f2] group-hover:text-white transition-all duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Secure & Private</h3>
                <p className="text-gray-600">We don't store your videos or track your history. Your privacy is our top priority.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Use Section */}
        <section id="how-to" className="py-20 bg-[#f0f2f5]">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">How to download Facebook videos?</h2>
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
            <Link href="/privacy" className="hover:text-[#1877f2]">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#1877f2]">Terms of Service</Link>
            <a href="#" className="hover:text-[#1877f2]">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={null}>
      <HomeContent />
    </Suspense>
  );
}
