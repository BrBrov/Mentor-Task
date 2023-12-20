import { ReactNode } from "react";
import './Output.css';
import OutputProps from "../../types/Output-types";
import Item from "../Item/Item";



function Output({ input }: OutputProps): ReactNode {  

  return (
    <div className="list">
      <ul className="list__container">
        {input.map((el: string) => (
          <Item key={Date.now()} input={el} />
        ))}
      </ul>
    </div>
  );
}

export default Output;
