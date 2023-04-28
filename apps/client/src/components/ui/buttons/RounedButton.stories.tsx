// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { RoundedButton } from './RounedButton';
import React from 'react';
import Link from '../Link';

const meta: Meta<typeof RoundedButton> = {
  component: RoundedButton,
};

export default meta;
type Story = StoryObj<typeof RoundedButton>;

export const Default: Story = {
  render: () => <RoundedButton>Default</RoundedButton>,
};

export const Custom: Story = {
  render: (args) => <RoundedButton {...args}>Custom</RoundedButton>,
};

export const CustomComponentLink: Story = {
  render: (args) => (
    <RoundedButton href="# " component={Link} {...args}>
      Button Link
    </RoundedButton>
  ),
};
