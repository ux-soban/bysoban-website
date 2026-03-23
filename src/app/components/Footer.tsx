import logoImg from "../../mylogo.png";

export function Footer() {
  const socialLinks = [
    {
      label: "Instagram",
      href: "https://instagram.com/ux.soban",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <circle cx="12" cy="12" r="4"/>
          <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/soban-butt-1bbb5b246",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect x="2" y="9" width="4" height="12"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      ),
    },
    {
      label: "Behance",
      href: "https://www.behance.net/sobansaeed",
      icon: (
        <svg width="20" height="20" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.79,14.88V48.5h16.4S33,49.31,33,38.1c0,0-.25-5.82-5.48-7.88a9,9,0,0,0,3.76-7.79s.84-7.53-9.13-7.55S4.79,14.88,4.79,14.88Z"/>
          <path d="M12.07,20.51v7.64H18.9S24,28.51,24,24.33s-5.13-3.82-5.13-3.82Z"/>
          <path d="M12.07,34.1v7.65h8.4s5.13.36,5.13-3.83-5.13-3.82-5.13-3.82Z"/>
          <path d="M42.74,37.89H60.25s.35-14.47-11.5-14.47-13.13,9-12.68,14.47,4,11.3,12.06,11.25,11.14-5.55,11.7-8H53.67S52.88,44,48.58,44,42.89,41.08,42.74,37.89Z"/>
          <path d="M53.54,33.6a5.41,5.41,0,0,0-10.82,0Z"/>
          <rect x="41.1" y="16" width="14.43" height="3.93"/>
        </svg>
      ),
    },
    {
      label: "X",
      href: "https://x.com/ux_soban",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.261 5.632 5.903-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
    {
      label: "Fiverr",
      href: "https://www.fiverr.com/s/yvPp4p6",
      icon: (
        <svg width="17" height="17" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none">
          <path d="M121.1 170h34.75V67.04H90.21v-7.72s0-9.01 9.01-9.01h21.88V22H99.22s-43.76 0-43.76 37.32v7.72h-19.3v28.31h19.3v74.64h34.75V95.36h30.89V170Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="12"/>
        </svg>
      ),
    },
  ];

  return (
    <footer
      style={{
        backgroundColor: "#080808",
        borderTop: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <div
        className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-6"
      >
        {/* Logo — left */}
        <a
          href="#home"
          style={{ textDecoration: "none", flexShrink: 0 }}
        >
          <img
            src={logoImg}
            alt="BySoban"
            style={{ height: "32px", width: "auto", display: "block" }}
          />
        </a>

        {/* Copyright — center */}
        <p
          style={{
            color: "#444444",
            fontSize: "0.78rem",
            fontWeight: 400,
            textAlign: "center",
          }}
        >
          © 2026 BySoban. All rights reserved.
        </p>

        {/* Social links — right */}
        <nav className="flex items-center gap-5 flex-wrap justify-center sm:justify-end">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              title={social.label}
              style={{
                color: "#555555",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#C8F04E";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#555555";
              }}
            >
              {social.icon}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
