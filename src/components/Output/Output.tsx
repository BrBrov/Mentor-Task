import { ReactNode } from "react";
import './Output.css';
import OutputProps from "../../types/Output-types";
import Item from "../Item/Item";
import RecordType from '../../types/Record-type.ts';



function Output({ input }: OutputProps): ReactNode {  

  return (
    <div className="list">
      <ul className="list__container">
        {input.map((el: RecordType) => (
          <Item key={el.id} input={el.data} />
        ))}
      </ul>
    </div>
  );
}

export default Output;
