import { Social } from "@/typings";

export const fetchSocial = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/social`, {
    cache: "no-store",
  });
  const data = await res.json();
  console.log(data, "data");
  const socials: Social[] = data.socials;

  return socials;
};
