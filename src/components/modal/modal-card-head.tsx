import classNames from "classnames";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";
import { Delete } from "../../elements";
import { ModalContextValue, useModal } from "./modal-context";

export type ModalCardHeadProps = HelpersProps;

const mapChildren = (
  children: React.ReactNode,
  close: ModalContextValue["close"],
) =>
  React.Children.map(children, child => {
    if (typeof child === "object" && child !== null && "type" in child) {
      if (child.type === Delete) {
        const onClick = (child.props as React.HTMLAttributes<Element>).onClick;

        return React.cloneElement(child, {
          onClick: (event: React.MouseEvent) => {
            if (onClick !== undefined) {
              onClick(event);
            }
            close();
          },
        });
      } else if (child.type === React.Fragment) {
        return (
          <React.Fragment
            children={mapChildren(
              (child.props as React.ComponentPropsWithoutRef<
                typeof React.Fragment
              >).children,
              close,
            )}
          />
        );
      }
    }

    return child;
  });

export const ModalCardHead = forwardRefAs<ModalCardHeadProps>(
  ({ className, children, ...rest }, ref) => {
    const { close } = useModal();
    return (
      <Generic
        children={mapChildren(children, close)}
        className={classNames("modal-card-head", className)}
        ref={ref}
        {...rest}
      />
    );
  },
  { as: "header" },
);

ModalCardHead.displayName = "Modal.Card.Head";
