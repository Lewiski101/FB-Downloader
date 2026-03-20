import { NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';

const execPromise = promisify(exec);

export async function POST(request: Request) {
  try {
    const { url } = await request.json();

    if (!url || (!url.includes('facebook.com') && !url.includes('fb.watch') && !url.includes('fb.com'))) {
      return NextResponse.json({ error: 'Invalid Facebook URL. Please enter a valid Facebook link.' }, { status: 400 });
    }

    // Use yt-dlp to get video info
    // -j: dump JSON
    // --no-playlist: only process the single video
    // --user-agent: use a real browser user agent to avoid blocks
    const userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36";
    
    try {
      // Use python -m yt_dlp to ensure it's found in the environment
      const { stdout, stderr } = await execPromise(`python -m yt_dlp -j --no-playlist --user-agent "${userAgent}" "${url}"`);
      
      if (stdout) {
        const info = JSON.parse(stdout);
        const formats = info.formats || [];
        const videoLinks = formats
          .filter((f: any) => f.vcodec !== 'none' && f.url)
          .map((f: any) => ({
            quality: f.format_note || f.format_id || 'Unknown',
            url: f.url,
            size: f.filesize_approx ? `${(f.filesize_approx / 1024 / 1024).toFixed(2)} MB` : 'Unknown'
          }))
          .reverse();

        return NextResponse.json({
          title: info.title || "Facebook Video",
          thumbnail: info.thumbnail || null,
          duration: info.duration_string || null,
          links: videoLinks.length > 0 ? videoLinks : []
        });
      }
    } catch (ytError) {
      console.warn("yt-dlp failed, falling back to extraction bridges:", ytError);
    }

    // Fallback to extraction bridges if yt-dlp fails
    const encodedUrl = encodeURIComponent(url);
    return NextResponse.json({
      title: "Facebook Video",
      thumbnail: null,
      links: [
        { 
          quality: "HD Video", 
          url: `https://saveas.co/api/download?url=${encodedUrl}&quality=hd`, 
          size: "High Definition" 
        },
        { 
          quality: "SD Video", 
          url: `https://saveas.co/api/download?url=${encodedUrl}&quality=sd`, 
          size: "Standard" 
        }
      ]
    });
  } catch (error) {
    console.error("Download error:", error);
    return NextResponse.json({ error: 'Failed to process video. Please try again.' }, { status: 500 });
  }
}
