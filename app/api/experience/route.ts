import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import { NextResponse } from "next/server";
import { Experience } from "@/typings";

const query = groq`*[_type == "experience"] {
    ...,
    technologies[]->
}`;

type Data = {
  experiences: Experience[];
};

export async function GET(request: Request) {
  const experiences: Experience[] = await sanityClient.fetch(
    query,
    {},
    {
      // cache: 'no-store',
      next: { revalidate: 10 },
    }
  );

  return NextResponse.json({ experiences }, { status: 200 });
}
