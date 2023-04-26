import { Meta, StoryObj } from "@storybook/react";
import { TitlePage } from "./TitlePage";

const meta = {
  title: "UI components/TitlePage",
  component: TitlePage,
  tags: ["autodocs"],
} satisfies Meta<typeof TitlePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Stock: Story = {
  args: {
    title: "Фильмы смотреть онлайн",
  },
};

export const OneGenre: Story = {
  args: {
    title: "Фильмы: Артхаус",
  },
};

export const moreGenre: Story = {
  args: {
    title: "Фильмы",
  },
};
