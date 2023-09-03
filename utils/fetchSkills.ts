import { Skill } from "@/typings";

export async function fetchSkills(): Promise<Skill[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/skill`, {
    cache: "no-store",
  });
  const data = await res.json();
  const skills: Skill[] = data.skills;

  return skills;
}
