// 페이지에 보여줄 내용은 이 파일만 수정하면 됩니다.

export type LinkItem = {
  /** 클릭 수를 저장할 때 쓰는 고유 ID (바꾸면 클릭 수가 새로 시작됩니다) */
  id: string;
  title: string;
  url: string;
  /** 제목 앞에 붙는 아이콘 (이모지). 비워두면 표시하지 않습니다. */
  icon?: string;
};

export type Profile = {
  name: string;
  bio: string;
  /** public/ 폴더 기준 이미지 경로. 비워두면 이름 첫 글자가 표시됩니다. */
  image?: string;
  links: LinkItem[];
};

export const profile: Profile = {
  name: "기성훈",
  bio: "세계 최강 바이브코더",
  image: "",
  links: [
    { id: "github", title: "깃허브", url: "https://github.com/kinaldo831117", icon: "🐙" },
    { id: "blog", title: "블로그", url: "https://" },
    { id: "email", title: "이메일", url: "mailto:kinaldo831117@gmail.com", icon: "✉️" },
  ],
};
