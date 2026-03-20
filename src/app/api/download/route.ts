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
    const { stdout, stderr } = await execPromise(`yt-dlp -j --no-playlist "${url}"`);
    
    if (stderr && !stdout) {
      console.error("yt-dlp error:", stderr);
      return NextResponse.json({ error: 'Failed to extract video info.' }, { status: 500 });
    }

    const info = JSON.parse(stdout);

    // Extract relevant links (HD/SD)
    // Facebook formats often include 'hd' or 'sd' in format_id or note
    const formats = info.formats || [];
    const videoLinks = formats
      .filter((f: any) => f.vcodec !== 'none' && f.url)
      .map((f: any) => ({
        quality: f.format_note || f.format_id || 'Unknown',
        url: f.url,
        size: f.filesize_approx ? `${(f.filesize_approx / 1024 / 1024).toFixed(2)} MB` : 'Unknown'
      }))
      .reverse(); // Often better quality is at the end

    return NextResponse.json({
      title: info.title || "Facebook Video",
      thumbnail: info.thumbnail || null,
      duration: info.duration_string || null,
      links: videoLinks.length > 0 ? videoLinks : [
        {
          quality: "Original",
          url: info.url,
          size: "Direct Link"
        }
      ]
    });
  } catch (error) {
    console.error("Download error:", error);
    return NextResponse.json({ error: 'Failed to process video. Please try again.' }, { status: 500 });
  }
}
