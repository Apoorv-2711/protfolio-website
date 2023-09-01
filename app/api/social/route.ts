import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import { NextResponse } from "next/server";
import { Social } from "@/typings";

const query = groq`*[_type == "social"]`;

type Data = {
  socials: Social[];
};

export async function GET(request: Request, res: NextResponse<Data>) {
  const socials: Social[] = await sanityClient.fetch(
    query,
    {},
    {
      // cache: 'no-store',
      next: { revalidate: 10 },
    }
  );

  return NextResponse.json({ socials }, { status: 200 });
}
