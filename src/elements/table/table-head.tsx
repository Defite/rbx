import React from "react";

import { forwardRefAs, Generic, HelpersProps } from "../../base";

export type TableHeadProps = HelpersProps;

export const TableHead = forwardRefAs<HTMLElement, TableHeadProps, "thead">(
  (props, ref) => <Generic ref={ref} {...props} />,
  { as: "thead" },
);

TableHead.displayName = "Table.Head";
