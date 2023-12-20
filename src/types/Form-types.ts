import { Dispatch } from "react";
import RecordType from './Record-type.ts';

export interface ActionForm {
  type: string;
  payload: RecordType;
}

interface FormProps {
  getInput: Dispatch<ActionForm>;
}

export default FormProps;
