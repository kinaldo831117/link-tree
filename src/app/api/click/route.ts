import { getDb } from "@/lib/mongodb";
import { profile } from "@/data/profile";

const validIds = new Set(profile.links.map((link) => link.id));

// 링크별 클릭 수를 1 증가시킵니다. body: { id: string }
export async function POST(request: Request) {
  let id: unknown;
  try {
    ({ id } = await request.json());
  } catch {
    return Response.json({ error: "잘못된 요청입니다." }, { status: 400 });
  }

  if (typeof id !== "string" || !validIds.has(id)) {
    return Response.json({ error: "알 수 없는 링크입니다." }, { status: 400 });
  }

  try {
    const db = await getDb();
    await db
      .collection<{ _id: string; count: number }>("clicks")
      .updateOne({ _id: id }, { $inc: { count: 1 } }, { upsert: true });
    return Response.json({ ok: true });
  } catch (error) {
    console.error("클릭 수 저장 실패:", error);
    return Response.json({ error: "클릭 수 저장에 실패했습니다." }, { status: 500 });
  }
}

// 전체 클릭 수 조회: GET /api/click
export async function GET() {
  try {
    const db = await getDb();
    const docs = await db
      .collection<{ _id: string; count: number }>("clicks")
      .find()
      .toArray();
    const counts = Object.fromEntries(docs.map((doc) => [doc._id, doc.count]));
    return Response.json({ counts });
  } catch (error) {
    console.error("클릭 수 조회 실패:", error);
    return Response.json({ error: "클릭 수 조회에 실패했습니다." }, { status: 500 });
  }
}
