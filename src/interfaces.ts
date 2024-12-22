/* << Components interfaces /> */


import {ReactNode} from "react";

export interface sectionProps {
  section_name: string;
}

export interface contentProps {
  content_title: string;
  inner_content: ReactNode;
}

export interface listProps {
  icon_src: string;
  title: string;
  inner_content: ReactNode;
}


/* << Libs interfaces /> */

