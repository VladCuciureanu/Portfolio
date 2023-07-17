export async function getGithubDetails(id: string) {
  const urlParts = id.split("/");
  const repoName = urlParts.pop() || urlParts.pop();
  const repoOwner = urlParts.pop() || urlParts.pop();

  const repoData = await fetch(
    `https://api.github.com/repos/${repoOwner}/${repoName}`,
    {
      next: {
        revalidate: 86400, // Once a day
      },
    }
  ).then((res) => res.json());

  return {
    title: repoData.name,
    description: repoData.description,
    stars: repoData.stargazers_count,
    forks: repoData.forks_count,
  };
}
