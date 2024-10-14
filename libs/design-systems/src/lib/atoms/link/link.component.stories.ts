import type { Meta, StoryObj } from '@storybook/angular';
import { LinkComponent } from './link.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<LinkComponent> = {
  component: LinkComponent,
  title: 'LinkComponent',
};
export default meta;
type Story = StoryObj<LinkComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/link works!/gi)).toBeTruthy();
  },
};
