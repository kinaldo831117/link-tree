// 페이지에 보여줄 내용은 이 파일만 수정하면 됩니다.

export type LinkItem = {
  /** 클릭 수를 저장할 때 쓰는 고유 ID (바꾸면 클릭 수가 새로 시작됩니다) */
  id: string;
  title: string;
  url: string;
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
    { id: "github", title: "GitHub", url: "https://github.com/" },
    { id: "blog", title: "블로그", url: "https://example.com/blog" },
    { id: "instagram", title: "Instagram", url: "https://instagram.com/" },
  ],
};
