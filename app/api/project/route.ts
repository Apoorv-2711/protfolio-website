import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import { NextResponse } from "next/server";
import { Project } from "@/typings";

const query = groq`*[_type == "project"] {
    ...,
    technologies[]->
}`;

type Data = {
  projects: Project[];
};

export async function GET(request: Request) {
  const projects: Project[] = await sanityClient.fetch(
    query,
    {},
    {
      // cache: 'no-store',
      next: { revalidate: 3600 },
    }
  );

  return NextResponse.json({ projects }, { status: 200 });
}
