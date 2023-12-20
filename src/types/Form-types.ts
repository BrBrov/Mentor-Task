import { Dispatch } from "react";

export interface ActionForm {
  type: string;
  payload: string;
}

interface FormProps {
  getInput: Dispatch<ActionForm>;
}

export default FormProps;
