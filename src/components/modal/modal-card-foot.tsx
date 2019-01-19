import classNames from "classnames";
import React from "react";

import { forwardRefAs, Generic, HelpersProps } from "../../base";

export type ModalCardFootProps = HelpersProps;

export const ModalCardFoot = forwardRefAs<HTMLElement, ModalCardFootProps>(
  ({ className, ...rest }, ref) => (
    <Generic
      className={classNames("modal-card-foot", className)}
      ref={ref}
      {...rest}
    />
  ),
  { as: "footer" },
);

ModalCardFoot.displayName = "Modal.Card.Foot";
