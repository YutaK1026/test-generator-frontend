import type { Meta, StoryObj } from "@storybook/react";
import { LoginForm } from "../components/LoginForm";
import { LoginFormPresenter } from "../components/LoginForm/presenter";

const meta = {
  title: "Components/LoginForm",
  component: LoginForm,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const DesktopView: StoryObj<typeof LoginFormPresenter> = {
  render: () => <LoginFormPresenter />,
};
