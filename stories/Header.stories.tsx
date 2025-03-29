import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '../components/Header';
import { HeaderPresenter } from '../components/Header/presenter';

const meta = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

// プレゼンターコンポーネントのストーリー
export const DesktopView: StoryObj<typeof HeaderPresenter> = {
  render: () => (
    <HeaderPresenter
      isMobile={false}
      isMenuOpen={false}
      toggleMenu={() => {}}
    />
  ),
};

export const MobileView: StoryObj<typeof HeaderPresenter> = {
  render: () => (
    <HeaderPresenter
      isMobile={true}
      isMenuOpen={false}
      toggleMenu={() => {}}
    />
  ),
};

export const MobileMenuOpen: StoryObj<typeof HeaderPresenter> = {
  render: () => (
    <HeaderPresenter
      isMobile={true}
      isMenuOpen={true}
      toggleMenu={() => {}}
    />
  ),
};
