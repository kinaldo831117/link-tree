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
      className="flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border-2 border-zinc-800 bg-white px-4 py-2.5 text-center font-medium transition hover:bg-zinc-800 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-800 active:scale-[0.98]"
    >
      {icon && <span aria-hidden>{icon}</span>}
      {title}
    </a>
  );
}
