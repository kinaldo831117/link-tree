import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    // 모바일: 화면 전체 / 태블릿 이상: 와이어프레임처럼 가운데 카드 프레임
    <main className="flex flex-1 items-start justify-center sm:items-center sm:p-8">
      <div className="flex w-full flex-col items-center px-6 pb-12 pt-14 sm:max-w-sm sm:rounded-[2rem] sm:border-2 sm:border-zinc-800 sm:bg-white sm:px-8 sm:py-14 sm:shadow-xl">
        <ProfileHeader name={profile.name} bio={profile.bio} image={profile.image} />
        <nav aria-label="링크 목록" className="mt-6 flex w-full max-w-64 flex-col gap-3 sm:max-w-none">
          {profile.links.map((link) => (
            <LinkCard key={link.id} {...link} />
          ))}
        </nav>
      </div>
    </main>
  );
}
