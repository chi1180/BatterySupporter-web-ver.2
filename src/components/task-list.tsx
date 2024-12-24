import Content from "@/components/content";
import {sectionProps} from "@/interfaces";
import List from "@/components/list";
import {Add, DoDisturb} from "@mui/icons-material";
import {IconButton} from "@mui/material";

export default function TaskList({shared_state, set_state}: sectionProps)
{
  return (
      <div className={"w-full h-full flex"}>
        <div className={"w-1/2 h-full"}>
          <Content
              content_title={"バッテリを消費するタスク"}
              inner_content={<ol>{shared_state.length > 0 ? JSON.parse(shared_state).map((item, index) => (
                    !item.ignore ?
                    <List
                        icon={
                      <IconButton
                          title={"バッテリを消費しないタスクに変更"}
                          onClick={() => {
                            const updata_tasks = JSON.parse(shared_state);
                            for (const task of updata_tasks) {
                              if (task.id === item.id) task.ignore = true;
                            }
                            set_state(JSON.stringify(updata_tasks));
                          }}
                      >
                        {<DoDisturb/>}
                      </IconButton>
                    }
                        title={item.title}
                        inner_content={
                          <>
                            <p>{item.notes}</p>
                            <p>{item.due ? `Due @ ${new Date(item.due).toLocaleDateString("en")}` : ""}</p>
                        </>
                        }
                        key={`use-battery-task-${index}`}
                    /> : <></>
                )) : <></>}
              </ol>}
          />
        </div>
        <div className={"w-1/2 h-full"}>
          <Content
              content_title={"バッテリを消費しないタスク"}
              inner_content={<ol>{shared_state.length > 0 ? JSON.parse(shared_state).map((item, index) => (
                    item.ignore ?
                        <List
                            icon={
                              <IconButton
                                  title={"バッテリを消費するタスクに変更"}
                                  onClick={() => {
                                    const updata_tasks = JSON.parse(shared_state);
                                    for (const task of updata_tasks) {
                                      if (task.id === item.id) task.ignore = false;
                                    }
                                    set_state(JSON.stringify(updata_tasks));
                                  }}
                              >
                                {<Add />}
                              </IconButton>
                            }
                            title={item.title}
                            inner_content={
                              <>
                                <p>{item.notes}</p>
                                <p>{item.due ? `Due @ ${new Date(item.due).toLocaleDateString("en")}` : ""}</p>
                              </>
                            }
                            key={`not-use-battery-task-${index}`}
                        /> : <></>
                )) : <></>}
              </ol>}
          />
        </div>
      </div>
  );
}