import React, { createContext, useState, useEffect } from "react";
import AccordianItem from "./AccordianItem";
import AccordianHeader from "./AccordianHeader";
import AccordianContent from "./AccordianContent";

export const AccordianContext = createContext();

function Accordian({
  allowMultiple,
  activeIds,
  allowToggle,
  children,
  ...rest
}) {
  const [expandedIds, setExpandedIds] = useState([...activeIds] ?? []);
  const [activeId, setActiveId] = useState(null);

  const onToggleAccordian = (id) => {
    if (allowMultiple) {
      setExpandedIds((prev) => {
        if (allowToggle && prev.includes(id)) {
          return prev.filter((item) => item !== id);
        }
        return [...prev, id];
      });
    } else {
      if (allowToggle && activeId === id) {
        setActiveId(null);
      } else {
        setActiveId(id);
      }
    }
  };

  return (
    <AccordianContext.Provider
      value={{ allowMultiple, expandedIds, activeId, onToggleAccordian }}
    >
      <ul>{children}</ul>
    </AccordianContext.Provider>
  );
}

export default Accordian;

//accordianProps
//allowMultiple

//Item Props
//disabled
//id

Accordian.Item = AccordianItem;
Accordian.Header = AccordianHeader;
Accordian.Content = AccordianContent;
