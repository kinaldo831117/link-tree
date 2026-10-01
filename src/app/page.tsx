import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="flex flex-1 justify-center px-7 pb-16 pt-20 sm:px-8 sm:pt-28">
      <div className="flex w-full max-w-sm flex-col items-center">
        <ProfileHeader name={profile.name} bio={profile.bio} image={profile.image} />
        <nav aria-label="링크 목록" className="mt-12 flex w-full flex-col gap-4">
          {profile.links.map((link) => (
            <LinkCard key={link.id} {...link} />
          ))}
        </nav>
      </div>
    </main>
  );
}
