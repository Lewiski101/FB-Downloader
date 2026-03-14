import Link from "next/link";

const articles = [
  {
    title: "How to Download Facebook Videos on Android and iPhone",
    slug: "how-to-download-facebook-videos-android-iphone",
    excerpt: "Learn the easiest ways to save Facebook videos directly to your mobile device gallery for offline viewing.",
    date: "March 14, 2026"
  },
  {
    title: "Top 5 Facebook Video Downloaders for PC in 2026",
    slug: "top-5-facebook-video-downloaders-pc-2026",
    excerpt: "Looking for the best tools to download Facebook videos on your computer? We've reviewed the top 5 options available today.",
    date: "March 12, 2026"
  },
  {
    title: "How to Save Private Facebook Videos Legally",
    slug: "how-to-save-private-facebook-videos",
    excerpt: "Step-by-step guide on how to download videos from private Facebook groups and profiles that you have access to.",
    date: "March 10, 2026"
  },
  {
    title: "The Ultimate Guide to Facebook Reels Downloader",
    slug: "ultimate-guide-facebook-reels-downloader",
    excerpt: "Everything you need to know about downloading Facebook Reels in HD quality without watermarks.",
    date: "March 8, 2026"
  },
  {
    title: "How to Download Facebook Live Videos After They End",
    slug: "download-facebook-live-videos-after-end",
    excerpt: "Missed a live stream? Here is how you can download the recorded version of any Facebook Live video.",
    date: "March 6, 2026"
  },
  {
    title: "Best Practices for Downloading High Quality Facebook Videos",
    slug: "best-practices-downloading-high-quality-facebook-videos",
    excerpt: "Ensure you get the best 1080p and 4K resolution every time you save a video from Facebook.",
    date: "March 4, 2026"
  },
  {
    title: "How to Fix Facebook Video Downloader Not Working",
    slug: "fix-facebook-video-downloader-not-working",
    excerpt: "Common issues and troubleshooting steps when your favorite Facebook video downloader stops working.",
    date: "March 2, 2026"
  },
  {
    title: "Download Facebook Stories Before They Disappear",
    slug: "download-facebook-stories-before-disappear",
    excerpt: "A simple trick to save Facebook Stories to your device before the 24-hour limit expires.",
    date: "February 28, 2026"
  },
  {
    title: "Why You Should Use an Online Facebook Video Downloader",
    slug: "why-use-online-facebook-video-downloader",
    excerpt: "The benefits of using web-based tools over installing potentially dangerous software on your device.",
    date: "February 26, 2026"
  },
  {
    title: "Is It Legal to Download Facebook Videos?",
    slug: "legal-to-download-facebook-videos",
    excerpt: "Understanding copyright and fair use when it comes to saving content from social media platforms.",
    date: "February 24, 2026"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#f0f2f5]">
      {/* Navbar */}
      <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-[#1877f2] p-1.5 rounded-lg">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
            <span className="text-2xl font-bold text-[#1877f2] tracking-tight">FBDownloader</span>
          </Link>
          <div className="flex gap-8 font-medium text-gray-600">
            <Link href="/" className="hover:text-[#1877f2] transition-colors">Home</Link>
            <Link href="/blog" className="text-[#1877f2]">Blog</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-black text-gray-900 mb-4 text-center">FBDownloader Blog</h1>
        <p className="text-xl text-gray-600 mb-16 text-center">Tips, tricks, and guides for downloading Facebook content.</p>

        <div className="grid gap-8 sm:grid-cols-2">
          {articles.map((article) => (
            <Link key={article.slug} href={`/blog/${article.slug}`} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#1877f2]/20 transition-all group">
              <span className="text-sm font-bold text-[#1877f2] mb-3 block">{article.date}</span>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#1877f2] transition-colors">{article.title}</h2>
              <p className="text-gray-600 leading-relaxed">{article.excerpt}</p>
              <div className="mt-6 flex items-center gap-2 text-[#1877f2] font-bold">
                Read More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500">© 2026 FBDownloader Blog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
