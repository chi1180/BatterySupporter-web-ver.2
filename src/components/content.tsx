import {contentProps} from "@/interfaces";

export default function Content({ content_title, inner_content }: contentProps)
{
  return (
      <div className={"w-full h-full p-2 flex flex-col"}>
        <h3 className={"text-xl pl-2 pb-2"}>{content_title}</h3>
        {inner_content}
      </div>
  );
}

