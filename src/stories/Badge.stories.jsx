import { Badge } from "./Badge";

export default {
  title: "Example/Badge",
  component: Badge,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    type: "primary",
    label: "badge",
  },
};

export const Danger = {
  args: {
    type: "danger",
  },
};
