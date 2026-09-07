import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="lost-page">
      <header className="lost-header shell">
        <Link href="/" className="brand" aria-label="Nisaab360 home">
          <span className="brand-icon"><Image src="/Logo.png" width={34} height={34} alt="" /></span>
          Nisaab360
        </Link>
        <span className="eyebrow">A small detour</span>
      </header>

      <main className="lost-main shell">
        <div className="lost-art" aria-hidden="true">
          <span className="lost-margin-note">Attendance register / Missing page</span>
          <div className="lost-digits"><span>4</span><span className="lost-zero">0</span><span>4</span></div>
          <span className="lost-stamp">Absent today</span>
          <svg className="lost-plane" viewBox="0 0 160 130" fill="none">
            <path d="M9 39 149 9 99 119 71 69 9 39Z" fill="#c7de5d" stroke="#171c1a" strokeWidth="2" strokeLinejoin="round" />
            <path d="m149 9-78 60 28 50M71 69l-8 31 24-14" stroke="#171c1a" strokeWidth="2" strokeLinejoin="round" />
            <path d="m63 100 8-31 16 17-24 14Z" fill="#526329" stroke="#171c1a" strokeWidth="2" />
          </svg>
          <svg className="lost-trail" viewBox="0 0 400 100" fill="none">
            <path d="M2 76c70 30 125-72 170-62s8 71-24 54 25-63 93-39 109 21 153-21" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 7" strokeLinecap="round" />
          </svg>
          <span className="lost-pencil" />
          <span className="lost-art-caption">Even the best students take a wrong turn.</span>
        </div>

        <div className="lost-copy">
          <p className="eyebrow">Error 404 · Page not found</p>
          <h1>Lost between<br />classes?</h1>
          <p>This page didn’t make it to roll call. The link may have moved, or the address might need a second look.</p>
          <div className="lost-actions">
            <Link href="/" className="primary-button">Back to home <span aria-hidden="true">↗</span></Link>
            <Link href="/#request" className="text-link">Request institution access <span aria-hidden="true">→</span></Link>
          </div>
          <div className="lost-tip"><span aria-hidden="true">01</span><p>No late slip needed.<br /><strong>We’ll get you back on track.</strong></p></div>
        </div>
      </main>

      <footer className="lost-footer shell"><span>School management & learning, connected.</span><span>Wrong page. Right platform.</span></footer>
    </div>
  );
}
