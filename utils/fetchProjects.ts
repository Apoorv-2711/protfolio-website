import { Project } from "@/typings";

export async function fetchProjects(): Promise<Project[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/project`, {
    next: {revalidate: 3600}
  });
  const data = await res.json();
  const projects: Project[] = data.projects;

  return projects;
}
