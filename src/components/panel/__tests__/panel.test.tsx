import { Panel } from "src/components/panel/panel";
import { PanelBlock } from "src/components/panel/panel-block";
import { PanelHeading } from "src/components/panel/panel-heading";
import { PanelIcon } from "src/components/panel/panel-icon";
import { PanelTab } from "src/components/panel/panel-tab";
import {
  hasProperties,
  testForwardRefAsExoticComponentIntegration,
  testThemeIntegration,
} from "src/__tests__/testing";

const COMPONENT = Panel;
const DISPLAY_NAME = "Panel";
const DEFAULT_ELEMENT = "nav";
const BULMA_CLASS_NAME = "panel";

describe(`${DISPLAY_NAME} component`, () => {
  hasProperties(COMPONENT, {
    Block: PanelBlock,
    defaultProps: { as: DEFAULT_ELEMENT },
    Heading: PanelHeading,
    Icon: PanelIcon,
    Tab: PanelTab,
  });

  testForwardRefAsExoticComponentIntegration(COMPONENT, {
    bulmaClassName: BULMA_CLASS_NAME,
    defaultElement: DEFAULT_ELEMENT,
    displayName: DISPLAY_NAME,
  });

  testThemeIntegration(COMPONENT);
});
