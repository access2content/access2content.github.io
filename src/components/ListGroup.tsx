import { useState } from "react";

interface PropsListGroup {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ heading, items, onSelectItem }: PropsListGroup) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const getMessage = () => {
    return items.length === 0 && <p>No item found.</p>;
  };

  return (
    <>
      <h1>{heading}</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((name, itemIndex) => {
          return (
            <li
              className={
                selectedIndex === itemIndex
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={name}
              onClick={() => {
                setSelectedIndex(itemIndex);
                onSelectItem(name);
              }}
            >
              {name}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ListGroup;
