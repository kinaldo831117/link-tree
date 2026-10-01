import Image from "next/image";

type Props = {
  name: string;
  bio: string;
  image?: string;
};

// 여러 겹의 그림자로 사진이 살짝 떠 있는 입체감을 줍니다.
const avatarFrame =
  "relative h-28 w-28 overflow-hidden rounded-full ring-4 ring-white/80 shadow-[0_1px_2px_rgba(120,60,40,0.12),0_8px_16px_-4px_rgba(160,80,50,0.22),0_24px_48px_-12px_rgba(160,80,50,0.3)] sm:h-32 sm:w-32";

export default function ProfileHeader({ name, bio, image }: Props) {
  return (
    <header className="flex flex-col items-center text-center">
      <div className={avatarFrame}>
        {image ? (
          <Image
            src={image}
            alt={`${name} 프로필 사진`}
            fill
            sizes="128px"
            priority
            className="object-cover"
          />
        ) : (
          <div
            aria-hidden
            className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#ffc7a6] via-[#f59e8b] to-[#e7798a] text-5xl text-white"
          >
            {name.charAt(0)}
          </div>
        )}
        {/* 위쪽 하이라이트 */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/35 via-transparent to-black/5"
        />
      </div>
      <h1 className="mt-7 text-[1.75rem] leading-tight tracking-[0.12em] text-[#3b2a24]">{name}</h1>
      <p className="mt-2 text-[0.95rem] text-[#8a6a5e]">{bio}</p>
    </header>
  );
}
