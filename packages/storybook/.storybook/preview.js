import { addParameters } from "@storybook/react";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";

import "!style-loader!css-loader!@elmono/ui/dist/index.css";

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage
  }
});
