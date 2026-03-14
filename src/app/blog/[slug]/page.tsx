import { notFound } from "next/navigation";
import Link from "next/link";
import articles from "../articles.json";

interface Article {
  slug: string;
  title: string;
  content: string;
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const article = (articles as Article[]).find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
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
            <Link href="/blog" className="hover:text-[#1877f2] transition-colors text-[#1877f2]">Blog</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto py-20 px-6">
        <Link href="/blog" className="text-[#1877f2] font-bold flex items-center gap-2 mb-8 hover:underline">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
          Back to Blog
        </Link>
        <article>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-8 leading-tight">
            {article.title}
          </h1>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            {article.content.split('\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </article>

        {/* Call to Action */}
        <div className="mt-20 bg-[#f0f2f5] p-10 rounded-3xl text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to download?</h3>
          <p className="text-gray-600 mb-8">Try the fastest Facebook video downloader today. Fast, free, and secure.</p>
          <Link href="/" className="bg-[#1877f2] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#166fe5] transition-all inline-block">
            Download Now
          </Link>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500">© 2026 FBDownloader Blog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

// Generate static params for all articles
export async function generateStaticParams() {
  return (articles as Article[]).map((article) => ({
    slug: article.slug,
  }));
}
