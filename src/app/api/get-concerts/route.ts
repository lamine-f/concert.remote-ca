import {NextResponse} from "next/server";
import {CONCERTS} from "@/app/api/bd";

export async function GET (request: Request) {
  return NextResponse.json(CONCERTS)
}