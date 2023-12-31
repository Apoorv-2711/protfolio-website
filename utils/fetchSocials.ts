import { Social } from "@/typings";

export async function fetchSocial(): Promise<Social[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/social`, {
    next: {revalidate: 3600}
  });
  const data = await res.json();
  const socials: Social[] = data.socials;

  return socials;
}
