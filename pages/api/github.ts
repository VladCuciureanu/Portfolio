import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const userResponse = await fetch("https://api.github.com/users/VladCuciureanu");
  const userReposResponse = await fetch(
    "https://api.github.com/users/VladCuciureanu/repos?per_page=100"
  );

  const user = await userResponse.json();
  const repositories = await userReposResponse.json();

  const mine = repositories.filter((repo: { fork: any; }) => !repo.fork);
  const stars = mine.reduce((accumulator: any, repository: { [x: string]: any; }) => {
    return accumulator + repository["stargazers_count"];
  }, 0);

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=1200, stale-while-revalidate=600"
  );

  return res.status(200).json({
    followers: user.followers,
    stars,
  });
}
