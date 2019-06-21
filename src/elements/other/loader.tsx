import classNames from "classnames";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type LoaderProps = HelpersProps;

export const Loader = forwardRefAs<LoaderProps>(
  ({ className, ...rest }, ref) => (
    <Generic ref={ref} className={classNames("loader", className)} {...rest} />
  ),
  {
    as: "div",
    children: false,
  },
);

Loader.displayName = "Loader";
