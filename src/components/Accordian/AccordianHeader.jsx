import React, { useContext } from "react";
import { AccordianItemContext } from "./AccordianItem";

import { AccordianContext } from "./Accordian";

function AccordianHeader({ children, ...rest }) {
  const { isExpanded, id } = useContext(AccordianItemContext);

  const { onToggleAccordian } = useContext(AccordianContext);
  return (
    <button {...rest} onClick={() => onToggleAccordian(id)}>
      <span>{isExpanded ? "-" : "+"}</span>
      {children}
    </button>
  );
}

export default AccordianHeader;
