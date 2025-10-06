import logoUrl from "./assets/aterna-group.png";
import aMarkUrl from "./assets/logo.png";

export default function AternaLanding() {
  const year = new Date().getFullYear();
  return (
    <div
      className="relative min-h-screen bg-white text-[#2b2f33] antialiased"
      style={{ fontFamily: '"Maven Pro", system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji"' }}
    >
      {/* Google Font (single-file demo; move to <head> in production) */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;500;600;700&display=swap" rel="stylesheet" />

      {/* Top bar: logo (left) + email (right) */}
      <div className="absolute inset-x-0 top-0 flex items-center justify-between px-6 py-5 text-sm">
        <div className="flex items-center gap-3 text-[#4a5056]">
          <img
            src={logoUrl}
            alt="Aterna Group Oy"
            className="h-6 w-auto select-none"
            draggable={false}
          />
        </div>
        <a
          href="mailto:contact@aternagroup.com"
          className="text-[#4a5056] hover:text-[#1f2327]"
        >
          contact@aternagroup.com
        </a>
      </div>

      {/* Center stage */}
      <main className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 text-center">
        <img
          src={aMarkUrl}
          alt="Aterna mark"
          className="mb-8 h-[180px] w-auto select-none md:h-[220px]"
          draggable={false}
        />

        <h1 className="text-[clamp(26px,4vw,40px)] font-semibold leading-tight tracking-tight text-[#2b2f33]">
          Quietly capable software
        </h1>
        <p className="mt-3 text-[clamp(14px,1.2vw,16px)] text-[#5a6167]">
          Focused tools that do their job
        </p>
      </main>

      {/* Footer */}
      <footer className="absolute inset-x-0 bottom-0 px-6 py-5 text-center text-xs text-[#6b7177]">
        © {year} Aterna Group Oy
      </footer>
    </div>
  );
}