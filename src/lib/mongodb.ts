import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB ?? "link-tree";

// 개발 중 Hot Reload 때마다 연결이 새로 생기지 않도록 전역에 보관합니다.
const globalForMongo = globalThis as unknown as {
  _mongoClientPromise?: Promise<MongoClient>;
};

export async function getDb() {
  if (!uri) {
    throw new Error("MONGODB_URI 환경변수가 설정되지 않았습니다 (.env.local 확인).");
  }
  if (!globalForMongo._mongoClientPromise) {
    globalForMongo._mongoClientPromise = new MongoClient(uri).connect();
  }
  const client = await globalForMongo._mongoClientPromise;
  return client.db(dbName);
}
