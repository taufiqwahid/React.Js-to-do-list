import React from "react";
import "./ListItems.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlipMove from "react-flip-move";

export default function Listitems(props) {
  const items = props.items;

  const listItem = items.map((item) => {
    return (
      <div className="list" key={item.key}>
        <p
        //  defaultValue={item.text}
        // id={item.key}
        // className="itemText"
        // onChange={(e) => {
        //   props.updateItem(e.target.value, item.key);
        // }}
        >
          <span className={`spinner${item.key}`} id={`spinner${item.key}`}>
            <FontAwesomeIcon
              className="spinner"
              id="spinner"
              icon="spinner"
              onClick={() => props.processItem(item.key)}
            />
          </span>
          <span className={`check${item.key}`} id={`check${item.key}`}>
            <FontAwesomeIcon
              className="checkCircle"
              id="checkCircle"
              icon="check-circle"
              onClick={() => props.doneItem(item.key)}
            />
          </span>
          {/* {item.text} */}
          <input
            type="text"
            defaultValue={item.text}
            id="itemText"
            className="itemText"
            onChange={(e) => {
              props.updateItem(e.target.value, item.key);
            }}
          />
          <span className="icon3" id="icon3">
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
