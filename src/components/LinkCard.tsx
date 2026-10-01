"use client";

import type { LinkItem } from "@/data/profile";

export default function LinkCard({ id, title, url, icon }: LinkItem) {
  // mailto: 같은 링크는 새 탭 없이 바로 메일 앱을 엽니다.
  const isWeb = url.startsWith("http");

  // 페이지를 떠나도 요청이 전송되도록 sendBeacon을 사용합니다.
  function recordClick() {
    const body = JSON.stringify({ id });
    if (!navigator.sendBeacon?.("/api/click", new Blob([body], { type: "application/json" }))) {
      fetch("/api/click", { method: "POST", body, keepalive: true }).catch(() => {});
    }
  }

  return (
    <a
      href={url}
      target={isWeb ? "_blank" : undefined}
      rel={isWeb ? "noopener noreferrer" : undefined}
      onClick={recordClick}
      // 아이콘 | 제목 | 같은 폭의 빈칸 → 아이콘이 있어도 제목이 정확히 가운데
      className="grid min-h-14 w-full grid-cols-[1.75rem_1fr_1.75rem] items-center gap-2 rounded-2xl border border-white/70 bg-white/45 px-5 py-3.5 text-[#3b2a24] shadow-[0_1px_0_rgba(255,255,255,0.8)_inset,0_6px_20px_-8px_rgba(150,80,60,0.25)] backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-px hover:bg-white/60 hover:shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_10px_24px_-10px_rgba(150,80,60,0.3)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e7798a] active:translate-y-0 motion-reduce:transition-none"
    >
      <span aria-hidden className="text-center text-lg leading-none">
        {icon}
      </span>
      <span className="text-center text-[0.98rem] font-semibold tracking-wide">{title}</span>
      <span aria-hidden />
    </a>
  );
}
