import "dotenv/config";

const protocol = process.env.NODE_ENV === "production" ? "https:" : "http:";

export async function getGithubDetails(id: string) {
  const urlParts = id.split("/");
  const repoName = urlParts.pop() || urlParts.pop()!;
  const repoOwner = urlParts.pop() || urlParts.pop()!;

  const repoData = await fetch(
    `${protocol}//${process.env.HOST}/api/github/repo?${new URLSearchParams({
      user: repoOwner,
      name: repoName,
    })}`
  ).then((res) => res.json());

  return {
    title: repoData.name,
    description: repoData.description,
    stars: repoData.stargazers_count,
    forks: repoData.forks_count,
  };
}
