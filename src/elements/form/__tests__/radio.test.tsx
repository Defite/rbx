import * as React from "react";

import { Radio } from "src/elements/form/radio";
import {
  hasProperties,
  makeShallowWrapperFactory,
  testForwardRefAsExoticComponentIntegration,
  testThemeIntegration,
} from "src/__tests__/testing";

const COMPONENT = Radio;
const DISPLAY_NAME = "Radio";
const DEFAULT_ELEMENT = "input";
const BULMA_CLASS_NAME = undefined;

describe(`${DISPLAY_NAME} component`, () => {
  hasProperties(COMPONENT, {
    defaultProps: { as: DEFAULT_ELEMENT },
  });

  testForwardRefAsExoticComponentIntegration(COMPONENT, {
    bulmaClassName: BULMA_CLASS_NAME,
    defaultElement: DEFAULT_ELEMENT,
    displayName: DISPLAY_NAME,
  });

  testThemeIntegration(COMPONENT);

  it("should be a radio", () => {
    const node = <Radio />;
    const makeShallowWrapper = makeShallowWrapperFactory();
    const wrapper = makeShallowWrapper({ node });
    expect(
      (wrapper.props() as React.InputHTMLAttributes<Element>).type,
    ).toEqual("radio");
  });
});
