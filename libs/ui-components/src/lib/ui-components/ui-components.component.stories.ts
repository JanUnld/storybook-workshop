import type { Meta, StoryObj } from '@storybook/angular';
import { UiComponentsComponent } from './ui-components.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UiComponentsComponent> = {
  component: UiComponentsComponent,
  title: 'UiComponentsComponent',
};
export default meta;
type Story = StoryObj<UiComponentsComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ui-components works!/gi)).toBeTruthy();
  },
};
