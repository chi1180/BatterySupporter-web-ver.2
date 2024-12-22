import {NextRequest, NextResponse} from "next/server";

export default function GET(request: NextRequest)
{
  const searchParams = request.nextUrl.searchParams;
  const method = searchParams.get("method") || "";  // classing | get
  const content = searchParams.get("content") || "";  // task's text (title + note)
  return NextResponse.json({
    status: 200,
    content: [
      { title: "sample data_1", note: "sample note data", ignore: false },
      { title: "sample data_2", note: "sample note data", ignore: true },
      { title: "sample data_3", note: "sample note data", ignore: false },
      { title: "sample data_4", note: "sample note data", ignore: true },
      { title: "sample data_5", note: "sample note data", ignore: false },
    ]
  });
}

