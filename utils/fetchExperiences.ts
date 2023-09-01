import { Experience } from "@/typings";

export async function fetchExperiences(): Promise<Experience[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/experience`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  const experiences: Experience[] = data.experiences;

  return experiences;
}
