// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import Link from './Link';

const meta: Meta<typeof Link> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  component: Link,
};

export default meta;
type Story = StoryObj<typeof Link>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  render: () => <Link href={'#'}>Link Default</Link>,
};

export const CustomLink: Story = {
  render: (args) => (
    <Link href={'#'} {...args}>
      CustomComponent
    </Link>
  ),
};
