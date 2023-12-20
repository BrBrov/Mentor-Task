import { ReactNode } from "react";
import ItemProps from "../../types/Item-types";
import './Item.css';

function Item({input}: ItemProps): ReactNode {
  return (
    <li className="list__item">{input}</li>
  );
}

export default Item;
