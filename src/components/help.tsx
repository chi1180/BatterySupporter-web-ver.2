import Content from "@/components/content";
import Link from "next/link";
import {Button} from "@mui/material";
import {FormEvent} from "react";
import emailSender from "@/lib/email-sender";

export default function Help() {
  function submittedEventHandler(event: FormEvent) {
    event.preventDefault();

    const inputs = event.currentTarget.querySelectorAll("input");
    const textarea = event.currentTarget.querySelector("textarea");
    const message = `From: ${inputs[0].value}\nTitle: ${inputs[1].value}\n\n${textarea ? textarea.value : ""}`;
    emailSender(message);
  }

  return (
      <div className={"w-full h-full"}>
        <div className={"w-full h-2/3"}>
          <Content
              content_title={"フェードバックレポートの提出"}
              inner_content={
                <form
                    className={"w-full h-full flex flex-col"}
                    onSubmit={(event) => submittedEventHandler(event)}
                >
                    <div
                        className={"w-1/2 min-w-96 *:w-full h-44 *:border *:border-main-color *:rounded-md *:my-1 *:py-1 *:px-2"}>
                      <input type="email" placeholder={"あなたのメールアドレスを入力してください。"}
                             className={"focus:outline-none hover:border-secondary-color focus:border-secondary-color"}/>
                      <input type="text" required={true}
                             placeholder={"フェードバックレポートのタイトルを入力してください。"}
                             className={"focus:outline-none hover:border-secondary-color focus:border-secondary-color"}/>
                    </div>
                    <textarea
                        required={true}
                        className={"w-full h-full border border-main-color rounded-md my-1 resize-none py-1 px-2 focus:outline-none hover:border-secondary-color focus:border-secondary-color"}
                        placeholder={"どのような問題がありましたか？\n発生した問題や、フェードバックを入力してください。"}
                    ></textarea>
                    <div
                        className={"w-full h-32 flex items-center justify-end"}>
                      <Button
                          variant={"contained"}
                          color={"inherit"}
                          type={"submit"}
                      >send</Button>
                    </div>
                </form>
              }/>
        </div>

        <div className={"w-full h-1/3"}>
          <Content
              content_title={"Links"}
              inner_content={
                <ol className={"w-full h-full pl-4 *:text-link-color *:block *:w-fit"}>
                  <Link href={"https://chi1180.github.io/BatterySupporter-homepage/"} target={"_blank"} className={"hover:font-bold"}>Web site</Link>
                  <Link href={"https://chi1180.github.io/BatterySupporter-documentation/starter.html"} target={"_blank"} className={"hover:font-bold"}>Documentation</Link>
                </ol>
              }/>
        </div>
      </div>
  );
}