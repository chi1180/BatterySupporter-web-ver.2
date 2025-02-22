import Content from "@/components/content";
import Link from "next/link";
import List from "@/components/list";
import { AppInfo } from "@/data";
import LinkList from "./link-list";

export default function About() {
  return (
    <div className={"w-full h-full flex"}>
      <div className={"w-1/2 h-full flex flex-col"}>
        <div className={"w-full h-1/2"}>
          <Content
            content_title={"Information"}
            inner_content={
              <div className={"w-full h-full"}>
                <List
                  icon={null}
                  title={`Current version : ${AppInfo.current_version}`}
                  inner_content={null}
                />
                <List
                  icon={null}
                  title={`Release date : ${AppInfo.release_date}`}
                  inner_content={null}
                />
              </div>
            }
          />
        </div>
        <div className={"w-full h-1/2"}>
          <Content
            content_title={"Links"}
            inner_content={
              <ol
                className={
                  "w-full h-full pl-4 *:text-link-color *:block *:w-fit"
                }
              >
                <LinkList />
              </ol>
            }
          />
        </div>
      </div>

      <div className={"w-1/2 h-full"}>
        <Content
          content_title={"Release note"}
          inner_content={
            <div
              className={
                "w-full h-full border border-secondary-color rounded-md"
              }
            >
              <textarea
                readOnly={true}
                className={"w-full h-full resize-none py-2 px-4"}
                value={AppInfo.release_note}
              ></textarea>
            </div>
          }
        />
      </div>
    </div>
  );
}
