/* << Components interfaces /> */


import {ReactNode} from "react";

export interface sectionProps {
  section_name: string | undefined;
}

export interface contentProps {
  content_title: string;
  inner_content: ReactNode;
}

export interface listProps {
  icon: ReactNode;
  title: string;
  inner_content: ReactNode | undefined;
}


/* << Libs interfaces /> */

export interface taskForm {
  title: string;
  notes: string;
  due: string;
  id: string;
  use_battery: boolean;
  ignore: boolean;
}

export interface taskClassificationProps {
  type: "use-battery";
  content: string;
}

