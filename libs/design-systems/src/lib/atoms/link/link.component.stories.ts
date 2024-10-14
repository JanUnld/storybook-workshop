import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  applicationConfig,
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular';
import { LinkComponent } from './link.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<LinkComponent> = {
  component: LinkComponent,
  title: 'Atoms/LinkComponent',
};
export default meta;

type Story = StoryObj<LinkComponent & { text: string }>;

const render: Story['render'] = (args) => ({
  template: `<ds-link [href]="'${args.href}'" [openInNewTab]="${args.openInNewTab}">${args.text}</ds-link>`,
});

const play: Story['play'] = async ({ canvasElement, args }) => {
  const canvas = within(canvasElement);
  expect(canvas.getByText(args.text)).toBeTruthy();
};

export const Default: Story = {
  render,
  args: {
    text: 'Link works!',
    href: 'https://storybook.js.org',
    openInNewTab: false,
  },
  play,
};

export const OpenInNewTab: Story = {
  render,
  args: {
    ...Default.args,
    openInNewTab: true,
  },
  play,
};
