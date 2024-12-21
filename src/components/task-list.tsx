import Content from "@/components/content";

export default function TaskList()
{
  return (
      <div className={"w-full h-full flex"}>
        <div className={"w-1/2 h-full"}>
          <Content
              content_title={"バッテリを消費するタスク"}
              inner_content={<></>}
          />
        </div>
        <div className={"w-1/2 h-full"}>
          <Content
              content_title={"無視したタスク"}
              inner_content={<></>}
          />
        </div>
      </div>
  );
}