import { PageInfo } from "@/typings";

export async function fetchPageInfo(): Promise<PageInfo> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/pageInfo`, {
    cache: "no-store",
  });
  const data = await res.json();
  const pageInfo: PageInfo = data.pageInfo;

  return pageInfo;
}
