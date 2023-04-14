import React, { createContext, useContext, useId } from "react";
import { AccordianContext } from "./Accordian";

export const AccordianItemContext = createContext();
function AccordianItem({ children, id }) {
  const uniqueId = useId();
  const accId = id ?? uniqueId;
  const { expandedIds, allowMultiple, onToggleAccordian, activeId } =
    useContext(AccordianContext);

  return (
    <AccordianItemContext.Provider
      value={{
        isExpanded: allowMultiple
          ? expandedIds?.includes(accId)
          : activeId === accId,
        onToggleAccordian,
        id: accId,
      }}
    >
      <li style={{ listStyleType: "none" }} id={accId}>
        {children}
      </li>
    </AccordianItemContext.Provider>
  );
}

export default AccordianItem;
