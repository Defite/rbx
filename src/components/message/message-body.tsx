import classNames from "classnames";
import React from "react";

import { forwardRefAs, Generic, HelpersProps } from "../../base";

export type MessageBodyProps = HelpersProps;

export const MessageBody = forwardRefAs<HTMLDivElement, MessageBodyProps>(
  ({ className, ...rest }, ref) => (
    <Generic
      className={classNames("message-body", className)}
      ref={ref}
      {...rest}
    />
  ),
  { as: "div" },
);

MessageBody.displayName = "Message.Body";
