import { Social } from "@/typings";

export async function fetchSocials(): Promise<Social[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/social`, {
    cache: "no-store",
  });
  const data = await res.json();
  const socials: Social[] = data.socials;

  return socials;
}
