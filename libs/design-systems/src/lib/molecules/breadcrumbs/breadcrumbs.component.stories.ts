import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { LinkComponent } from '../../atoms/link/link.component';
import {
  BreadcrumbDirective,
  BreadcrumbsComponent,
} from './breadcrumbs.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<BreadcrumbsComponent> = {
  component: BreadcrumbsComponent,
  title: 'Molecules/Breadcrumbs',
  decorators: [
    moduleMetadata({
      imports: [LinkComponent, BreadcrumbDirective],
    }),
  ],
};
export default meta;

type Story = StoryObj<
  BreadcrumbsComponent & {
    items: string[];
  }
>;

const render: Story['render'] = (args) => ({
  template: `
    <ds-breadcrumbs [separator]="'${args.separator}'">
      ${args.items
        .map((item) => `<ds-link *dsBreadcrumb>${item}</ds-link>`)
        .join('\n')}
    </ds-breadcrumbs>
  `,
});

const play: Story['play'] = async ({ canvasElement, args }) => {
  const canvas = within(canvasElement);
  expect(canvas.getByText('breadcrumbs works!')).toBeTruthy();
};

export const Default: Story = {
  render,
  args: {
    separator: '/',
    items: ['Home', 'About', 'Contact'],
  },
  play,
};

export const AlternativeSeparator: Story = {
  render,
  args: {
    ...Default.args,
    separator: '→',
  },
  play,
};
