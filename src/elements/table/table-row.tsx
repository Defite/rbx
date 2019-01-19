import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import { forwardRefAs, Generic, HelpersProps } from "../../base";

export type TableRowHelperProps = Partial<{
  selected: boolean;
}>;

export type TableRowProps = HelpersProps & TableRowHelperProps;

export const TableRow = forwardRefAs<HTMLTableRowElement, TableRowProps>(
  ({ className, selected, ...rest }, ref) => (
    <Generic
      className={classNames({ "is-selected": selected }, className)}
      ref={ref}
      {...rest}
    />
  ),
  { as: "tr" },
);

TableRow.displayName = "Table.Row";
TableRow.propTypes = {
  selected: PropTypes.bool,
};
