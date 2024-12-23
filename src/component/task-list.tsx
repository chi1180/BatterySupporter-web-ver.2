import Content from "@/component/content";
import {sectionProps} from "@/interfaces";
import List from "@/component/list";
import {Add, DoDisturb} from "@mui/icons-material";
import {IconButton} from "@mui/material";

export default function TaskList({shared_state, set_state}: sectionProps)
{
  return (
      <div className={"w-full h-full flex"}>
        <div className={"w-1/2 h-full"}>
          <Content
              content_title={"バッテリを消費するタスク"}
              inner_content={<ol>
                {shared_state.length > 0 ? JSON.parse(shared_state).map((item, index) => (
                    <List
                        icon={
                      <IconButton
                          title={item.ignore ? "バッテリを消費するタスクに変更" : "バッテリを消費しないタスクに変更"}
                          onClick={() => item.ignore = !item.ignore}
                      >
                        {item.ignore ? <Add/> : <DoDisturb/>}
                      </IconButton>
                    }
                        title={item.title}
                        inner_content={
                          <>
                            <p>{item.notes}</p>
                            <p>{item.due ? `Due @ ${new Date(item.due).toLocaleDateString("en")}` : ""}</p>
                        </>
                        }
                        key={index}
                    />
                )) : <></>}
              </ol>}
          />
        </div>
        <div className={"w-1/2 h-full"}>
          <Content
              content_title={"バッテリを消費しないタスク"}
              inner_content={<></>}
          />
        </div>
      </div>
  );
}