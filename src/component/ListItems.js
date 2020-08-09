import React from "react";
import "./ListItems.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlipMove from "react-flip-move";

export default function Listitems(props) {
  const items = props.items;
  const listItem = items.map((item) => {
    return (
      <div className="list" key={item.key}>
        <p>
          <input type="checkbox" className="checkbox" id="checkbox" />
          <input
            type="text"
            defaultValue={item.text}
            id={item.key}
            className="itemText"
            onChange={(e) => {
              props.updateItem(e.target.value, item.key);
            }}
          />
          <span className="fitur">
            <FontAwesomeIcon
              className="trash"
              icon="trash"
              onClick={() => props.deleteItem(item.key)}
            />
          </span>
        </p>
      </div>
    );
  });
  return (
    <div className="content">
      <FlipMove duration={400} easing="ease-in-out" delay={0}>
        {listItem}
      </FlipMove>
    </div>
  );
}
