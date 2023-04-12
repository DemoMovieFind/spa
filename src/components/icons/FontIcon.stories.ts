import type { Meta, StoryObj } from "@storybook/react";

import { FontIcon } from "./FontIcon";

const meta = {
  title: "UI Components/FontIcon",
  component: FontIcon,
  tags: ["autodocs"],
} satisfies Meta<typeof FontIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    appearance: "play",
  },
};
