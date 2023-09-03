import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import { NextResponse } from "next/server";
import { PageInfo } from "@/typings";

const query = groq`*[_type == "pageInfo"][0]`;

type Data = {
  pafeInfo: PageInfo;
};

export async function GET(request: Request) {
  const pageInfo: PageInfo = await sanityClient.fetch(
    query,
    {},
    {
      // cache: 'no-store',
      next: { revalidate: 3600 },
    }
  );

  return NextResponse.json({ pageInfo }, { status: 200 });
}
