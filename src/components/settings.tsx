import Content from "@/components/content";
import List from "@/components/list";
import SwitchBtn from "@/components/switch-btn";
import NumberInp from "@/components/number-inp";

export default function Settings() {
  return (
      <div className={"w-full h-full flex"}>
        <div className={"w-1/2 h-full flex flex-col"}>
          <Content
              content_title={"起動設定"}
              inner_content={
                <div className={"w-full h-full"}>
                  <ol className={"w-full h-full"}>
                    <li className={"w-full"}>
                      <List icon={null} title={"サインイン時に起動"}
                            inner_content={<SwitchBtn property={"start_on_sign_in"}/>}/>
                    </li>
                    <li className={"w-full"}>
                      <List icon={null} title={"システムトレイに最小化"}
                            inner_content={<SwitchBtn property={"minimize_in_system_try"}/>}/>
                    </li>
                  </ol>
                </div>
              }/>
          <Content
              content_title={"通知設定"}
              inner_content={
                <div className={"w-full h-full"}>
                  <ol className={"w-full h-full"}>
                    <li className={"w-full"}>
                      <List icon={null} title={"バッテリの残量不足を通知"}
                            inner_content={<SwitchBtn property={"notify_battery_insufficient"}/>}/>
                    </li>
                  </ol>
                </div>
              }/>
        </div>

        <div className={"w-1/2 h-full flex"}>
          <Content
              content_title={"バッテリ残量不足の判定基準"}
              inner_content={
                <div className={"w-full h-full"}>
                  <ol className={"w-full h-full"}>
                    <li className={"w-full"}>
                      <List
                          icon={null}
                          title={"タスクの個数"}
                          inner_content={
                            <div>
                              <NumberInp property={"task_count"}/>
                            </div>
                          }/>
                    </li>
                    <li className={"w-full"}>
                      <List
                          icon={null}
                          title={"バッテリの残量"}
                          inner_content={
                            <div>
                              <NumberInp property={"battery_level"}/>
                            </div>
                          }/>
                    </li>
                  </ol>
                </div>
              }/>
        </div>
      </div>);
}

/* MEMO //
- バッテリの残量が battery_level 以下で尚且つタスクの個数が task_count 以上になった場合、push 通知。
* */

