/* << Components interfaces /> */


import {Dispatch, ReactNode, SetStateAction} from "react";

export interface sectionProps {
  section_name: string | undefined;
  shared_state: taskData[] | [];
  set_state: Dispatch<SetStateAction<taskData[]>> | Dispatch<SetStateAction<never[]>>;
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

export interface taskData {
  title: string;
  note: string;
  ignore: boolean;
}

/* << Libs interfaces /> */



