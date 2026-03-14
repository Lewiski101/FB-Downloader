import Link from "next/link";

export default function Terms() {
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
        <h1 className="text-4xl font-black text-gray-900 mb-8">Terms of Service</h1>
        <div className="prose prose-blue text-gray-700 space-y-6">
          <p>Last updated: March 14, 2026</p>
          <p>By using FBDownloader, you agree to comply with and be bound by the following terms and conditions.</p>
          
          <h2 className="text-2xl font-bold text-gray-900">1. Acceptance of Terms</h2>
          <p>Your access to and use of FBDownloader is conditioned upon your acceptance of these Terms. If you do not agree, please do not use our service.</p>
          
          <h2 className="text-2xl font-bold text-gray-900">2. Permitted Use</h2>
          <p>FBDownloader is intended for personal, non-commercial use only. You agree to use the service only for downloading content that you have the legal right to access and save under applicable copyright laws.</p>
          
          <h2 className="text-2xl font-bold text-gray-900">3. Intellectual Property</h2>
          <p>We do not own the content you download. All rights, title, and interest in the downloaded content remain with the original creators and copyright holders. You are solely responsible for respecting these rights.</p>
          
          <h2 className="text-2xl font-bold text-gray-900">4. Prohibited Actions</h2>
          <p>You may not use our service to download content for the purpose of redistribution, sale, or any form of copyright infringement. Any unauthorized use of the service is strictly prohibited.</p>
          
          <h2 className="text-2xl font-bold text-gray-900">5. Limitation of Liability</h2>
          <p>FBDownloader is provided "as is" without any warranties. we are not liable for any damages resulting from your use of the service or the content you download.</p>
        </div>
      </main>
    </div>
  );
}
