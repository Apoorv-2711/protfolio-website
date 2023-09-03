import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import { NextResponse } from "next/server";
import { Skill } from "@/typings";

const query = groq`*[_type == "skill"]`;

type Data = {
  socials: Skill[];
};

export async function GET(request: Request) {
  const skills: Skill[] = await sanityClient.fetch(
    query,
    {},
    {
      // cache: 'no-store',
      next: { revalidate: 3600 },
    }
  );

  return NextResponse.json({ skills }, { status: 200 });
}
