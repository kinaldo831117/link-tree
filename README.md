# 링크 나무 🌳

내 모든 링크를 한 페이지에 모아두고 URL 하나로 공유하는 서비스입니다. (Next.js 16 · Tailwind CSS · MongoDB Atlas)

## 실행

```bash
npm install
cp .env.example .env.local   # MONGODB_URI 값을 채우세요
npm run dev                  # http://localhost:3000
```

## 내용 수정

`src/data/profile.ts` 하나만 수정하면 됩니다 (이름, 소개, 프로필 사진, 링크).

## 클릭 수

- 링크를 누르면 `POST /api/click` 으로 MongoDB `clicks` 컬렉션에 저장됩니다.
- `GET /api/click` 으로 링크별 클릭 수를 확인할 수 있습니다.
