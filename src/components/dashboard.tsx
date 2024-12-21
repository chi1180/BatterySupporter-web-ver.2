import Content from "@/components/content";

export default function Dashboard()
{
  return (
      <div className={"w-full h-full flex"}>
        <div className={"w-1/2 h-full"}>
          <Content
              content_title={"監視中の直近のタスク"}
              inner_content={<></>}
          />
        </div>
        <div className={"w-1/2 h-full flex flex-col"}>
          <Content
              content_title={"監視の ON/OFF"}
              inner_content={<></>}
          /><Content
              content_title={"アカウント"}
              inner_content={<></>}
          />
        </div>
      </div>
  );
}