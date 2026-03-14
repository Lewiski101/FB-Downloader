import Link from "next/link";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
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
        </div>
      </nav>

      <main className="max-w-3xl mx-auto py-20 px-6">
        <h1 className="text-4xl font-black text-gray-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-blue text-gray-700 space-y-6">
          <p>Last updated: March 14, 2026</p>
          <p>At FBDownloader, we take your privacy seriously. This policy outlines how we handle your data when you use our Facebook video downloading service.</p>
          
          <h2 className="text-2xl font-bold text-gray-900">1. Information We Do Not Collect</h2>
          <p>We do not require users to create an account or provide any personal information such as names, email addresses, or phone numbers to use our downloader.</p>
          
          <h2 className="text-2xl font-bold text-gray-900">2. Link Processing</h2>
          <p>When you paste a Facebook URL into our service, we process that link solely to extract the video file. We do not store the videos on our servers, nor do we keep a log of the URLs you have downloaded.</p>
          
          <h2 className="text-2xl font-bold text-gray-900">3. Cookies and Analytics</h2>
          <p>We may use standard cookies and third-party analytics (like Google Analytics) to understand how visitors interact with our site. This data is anonymous and used only for improving site performance and user experience.</p>
          
          <h2 className="text-2xl font-bold text-gray-900">4. Third-Party Links</h2>
          <p>Our website may contain links to third-party sites, including advertisers. We are not responsible for the privacy practices or content of these external websites.</p>
          
          <h2 className="text-2xl font-bold text-gray-900">5. Changes to This Policy</h2>
          <p>We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page with an updated date.</p>
        </div>
      </main>
    </div>
  );
}
