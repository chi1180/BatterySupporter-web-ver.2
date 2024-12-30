import Content from "@/components/content";
import Account from "@/components/account";
import {useEffect, useState} from "react";
import {localstorage_data_names} from "@/datas";
import {taskForm} from "@/interfaces";
import List from "@/components/list";
import SwitchBtn from "@/components/switch-btn";

export default function Dashboard() {
  const [taskData, setTaskData] = useState([]);
  const checkUpDataTaskData = () => {
    if (typeof window === "undefined") return;

    const storedTask = localStorage.getItem(localstorage_data_names.taskData);
    if (storedTask) setTaskData(JSON.parse(storedTask));
  }

  useEffect(() => {
    checkUpDataTaskData();
    const interval = setInterval(checkUpDataTaskData, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
      <div className={"w-full h-full flex"}>
        <div className={"w-1/2 h-full"}>
          <Content
              content_title={"監視中のタスク"}
              inner_content={<ol>{taskData.map((task: taskForm) => (<li key={task.id}>{
                task.ignore ? <></> : <List
                    icon={null}
                    title={task.title}
                    inner_content={
                      <div>
                        <p>{task.notes}</p>
                        <p>{task.due ? "Due date: " + new Date(task.due).toLocaleDateString("en") : ""}</p>
                      </div>
                    }/>
              }</li>))}</ol>}
          />
        </div>
        <div className={"w-1/2 h-full flex flex-col"}>
          <Content
              content_title={"監視の ON/OFF"}
              inner_content={<SwitchBtn property={"process_status"}/>}
          /><Content
            content_title={"アカウント"}
            inner_content={<Account/>}
        />
        </div>
      </div>
  );
}