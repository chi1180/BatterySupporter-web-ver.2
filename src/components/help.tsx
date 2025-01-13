import Content from "@/components/content";
import { Button } from "@mui/material";
import { FormEvent } from "react";
import emailSender from "@/lib/email-sender";
import LinkList from "./link-list";

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
                className={
                  "w-1/2 min-w-96 *:w-full h-44 *:border *:border-secondary-color *:rounded-md *:my-1 *:py-1 *:px-2"
                }
              >
                <input
                  type="email"
                  placeholder={"あなたのメールアドレスを入力してください。"}
                  className={"focus:outline-none focus:border-2"}
                />
                <input
                  type="text"
                  required={true}
                  placeholder={
                    "フェードバックレポートのタイトルを入力してください。（必須）"
                  }
                  className={"focus:outline-none focus:border-2"}
                />
              </div>
              <textarea
                required={true}
                className={
                  "w-full h-full border rounded-md my-1 resize-none py-1 px-2 focus:outline-none focus:border-2"
                }
                placeholder={
                  "どのような問題がありましたか？\n発生した問題や、フェードバックを入力してください。（必須）"
                }
              ></textarea>
              <div className={"w-full h-32 flex items-center justify-end"}>
                <Button variant={"contained"} color={"inherit"} type={"submit"}>
                  send
                </Button>
              </div>
            </form>
          }
        />
      </div>

      <div className={"w-full h-1/3"}>
        <Content
          content_title={"Links"}
          inner_content={
            <ol
              className={"w-full h-full pl-4 *:text-link-color *:block *:w-fit"}
            >
              <LinkList />
            </ol>
          }
        />
      </div>
    </div>
  );
}
