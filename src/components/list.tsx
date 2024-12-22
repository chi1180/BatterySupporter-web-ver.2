import Image from "next/image";
import {listProps} from "@/interfaces";

export default function List({ icon_src, title, inner_content }: listProps)
{
  return (
      <details className={"w-full p-2 rounded-md border border-secondary-color"}>
        <summary className={"w-full h-12 py-2 flex"}>
          <span className={"h-full aspect-square rounded-full relative"}>
            <Image src={icon_src || "/ignore.svg"} alt={title} layout={"fill"} />
          </span>
          <p className={"text-2xl pl-4"}>{title}</p>
        </summary>
        <div className={"w-full"}>
          <span className={"w-11/12 h-1 bg-secondary-color rounded-full"}></span>
          <div className={"w-full"}>{inner_content}</div>
        </div>
      </details>
  )
}