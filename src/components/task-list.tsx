import Content from "@/components/content";
import {sectionProps} from "@/interfaces";

export default function TaskList({shared_state, set_state}: sectionProps)
{
  return (
      <div className={"w-full h-full flex"}>
        <div className={"w-1/2 h-full"}>
          <Content
              content_title={"バッテリを消費するタスク"}
              inner_content={<>{JSON.stringify(shared_state)}</>}
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