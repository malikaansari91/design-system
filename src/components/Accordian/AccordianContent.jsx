import React, { useContext } from "react";
import { AccordianItemContext } from "./AccordianItem";

function AccordianContent({ children }) {
  const { isExpanded } = useContext(AccordianItemContext);
  if (!isExpanded) return null;
  return <section>{children}</section>;
}

export default AccordianContent;
