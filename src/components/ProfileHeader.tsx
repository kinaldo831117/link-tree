import Image from "next/image";

type Props = {
  name: string;
  bio: string;
  image?: string;
};

export default function ProfileHeader({ name, bio, image }: Props) {
  return (
    <header className="flex flex-col items-center text-center">
      {image ? (
        <Image
          src={image}
          alt={`${name} 프로필 사진`}
          width={144}
          height={144}
          priority
          className="h-32 w-32 rounded-full border-2 border-zinc-800 object-cover sm:h-36 sm:w-36"
        />
      ) : (
        <div
          aria-hidden
          className="flex h-32 w-32 items-center justify-center rounded-full border-2 border-zinc-800 bg-zinc-100 text-5xl font-bold text-zinc-700 sm:h-36 sm:w-36"
        >
          {name.charAt(0)}
        </div>
      )}
      <h1 className="mt-7 text-3xl font-bold tracking-[0.3em] sm:text-4xl">{name}</h1>
      <p className="mt-2 text-lg text-zinc-600">{bio}</p>
    </header>
  );
}
