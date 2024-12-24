import Content from "@/components/content";
import Account from "@/components/account";
import {sectionProps} from "@/interfaces";

export default function Dashboard({shared_state, set_state}: sectionProps)
{
  return (
      <div className={"w-full h-full flex"}>
        <div className={"w-1/2 h-full"}>
          <Content
              content_title={"監視中の直近のタスク"}
              inner_content={<>{JSON.stringify(shared_state)}</>}
          />
        </div>
        <div className={"w-1/2 h-full flex flex-col"}>
          <Content
              content_title={"監視の ON/OFF"}
              inner_content={<></>}
          /><Content
              content_title={"アカウント"}
              inner_content={<Account />}
          />
        </div>
      </div>
  );
}