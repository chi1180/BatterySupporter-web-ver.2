/* << Components interfaces /> */


import {Dispatch, ReactNode, SetStateAction} from "react";

export interface sectionProps {
  section_name: string | undefined;
  shared_state: string;
  set_state: Dispatch<SetStateAction<string>>;
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

