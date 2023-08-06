import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getProjects } from "~/app/actions";
import type { Project } from "~/types/project";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const results = await getProjects();
  return NextResponse.json<Project[]>(results, {
    status: 200,
    headers: requestHeaders,
  }).json();
}

export async function POST() {}
