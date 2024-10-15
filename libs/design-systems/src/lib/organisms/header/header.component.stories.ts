import {
  BreadcrumbDirective,
  BreadcrumbsComponent,
  LinkComponent,
} from '@storybook-workshop/design-system';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { expect } from '@storybook/jest';

import { within } from '@storybook/testing-library';
import { HeaderComponent } from './header.component';

const meta: Meta<HeaderComponent> = {
  component: HeaderComponent,
  title: 'Organisms/Header',
  decorators: [
    moduleMetadata({
      imports: [BreadcrumbsComponent, BreadcrumbDirective, LinkComponent],
    }),
  ],
};
export default meta;

type Story = StoryObj<HeaderComponent>;

const play: Story['play'] = async ({ canvasElement, args }) => {
  const canvas = within(canvasElement);
  expect(canvas.getByText(args.title)).toBeTruthy();
};

export const Default: Story = {
  args: {
    title: 'The Brand',
  },
  play,
};

export const WithBreadcrumbs: Story = {
  args: {
    ...Default.args,
  },
  play,
  render: (args) => ({
    template: `
      <ds-header [title]="'${args.title}'">
        <ds-breadcrumbs>
          <ds-link *dsBreadcrumb>Home</ds-link>
          <ds-link *dsBreadcrumb>About</ds-link>
          <ds-link *dsBreadcrumb>Contact</ds-link>
        </ds-breadcrumbs>
      </ds-header>
    `,
  }),
};
