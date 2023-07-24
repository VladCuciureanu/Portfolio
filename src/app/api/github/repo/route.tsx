import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const repoName = searchParams.get("name");
  const repoOwner = searchParams.get("user");

  const repoData = await fetch(
    `https://api.github.com/repos/${repoOwner}/${repoName}`,
    {
      next: {
        revalidate: 86400, // Once a day
      },
    }
  ).then((res) => res.json());

  return NextResponse.json(repoData);
}
