import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";
import { ModalContext, ModalContextValue } from "./modal-context";

export type ModalCloseModifierProps = {
  onClick?: React.MouseEventHandler;
};

export type ModalCloseProps = HelpersProps & ModalCloseModifierProps;

const onClickHandler = (
  onClick: ModalCloseProps["onClick"] | undefined,
  ctx: ModalContextValue,
) => (event: React.MouseEvent) => {
  if (onClick !== undefined) {
    onClick(event);
  }
  ctx.close();
};

export const ModalClose = forwardRefAs<ModalCloseProps>(
  ({ className, onClick, ...rest }, ref) => (
    <ModalContext.Consumer>
      {ctx => (
        <Generic
          aria-label="close"
          className={classNames("modal-close", "is-large", className)}
          onClick={onClickHandler(onClick, ctx)}
          ref={ref}
          {...rest}
        />
      )}
    </ModalContext.Consumer>
  ),
  { as: "button" },
);

ModalClose.displayName = "Modal.Close";
ModalClose.propTypes = {
  onClick: PropTypes.func,
};
