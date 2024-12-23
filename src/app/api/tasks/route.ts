import {NextRequest, NextResponse} from "next/server";
import {currentUser} from "@clerk/nextjs/server";
import getGoogleTasks from "@/lib/get-googletasks";
import classingTasks from "@/lib/classing-tasks";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const method = searchParams.get("method") || "";  // classing | get
    const content = searchParams.get("content") || "";  // task's text (title + note) | null(undefined)

    if (method === "get") {
      const user = await currentUser();
      if (user) {
        return NextResponse.json({
          status: 200,
          message: "Get google tasks data successfully",
          content: await getGoogleTasks(user.id),
        });
      }
    }

    if (method === "classing" && content.length > 0) {
      return NextResponse.json({
        status: 200,
        message: `Classing task '${content}' successfully`,
        content: await classingTasks(content),
      });
    }

    return NextResponse.json({
      status: 400,
      message: "Request with invalid value",
      content: null
    });

  } catch (error) {
    return NextResponse.json({
      status: 400,
      message: `Same error occurred in tasks API\n${error}`,
      content: null,
    })
  }
}

