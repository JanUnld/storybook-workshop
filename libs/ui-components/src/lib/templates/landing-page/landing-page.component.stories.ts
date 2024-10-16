import {
  BreadcrumbDirective,
  BreadcrumbsComponent,
  LinkComponent,
} from '@storybook-workshop/design-system';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { expect } from '@storybook/jest';

import { within } from '@storybook/testing-library';
import { LandingPageComponent } from './landing-page.component';

const meta: Meta<LandingPageComponent> = {
  component: LandingPageComponent,
  title: 'Templates/LandingPage',
};
export default meta;

type Story<AdditionalProps = {}> = StoryObj<
  LandingPageComponent & AdditionalProps
>;

const play: Story['play'] = async ({ canvasElement, args }) => {
  const canvas = within(canvasElement);
  expect(canvas.getByText(args.headerTitle)).toBeTruthy();
};

export const Default: Story = {
  args: {
    headerTitle: 'Landing page title',
  },
  play,
};

export const WithHeaderContent: Story<{ headerContentText: string }> = {
  render: (args) => ({
    template: `
    <ui-landing-page [headerTitle]="'${args.headerTitle}'">
      <div uiLandingPageHeaderContent>${args.headerContentText}</div>
    </ui-landing-page>
  `,
  }),
  args: {
    ...Default.args,
    headerContentText: 'Landing page header content',
  },
  play,
};

export const WithBreadcrumbs: Story = {
  decorators: [
    moduleMetadata({
      imports: [BreadcrumbsComponent, BreadcrumbDirective, LinkComponent],
    }),
  ],
  render: (args) => ({
    template: `
      <ui-landing-page [headerTitle]="'${args.headerTitle}'">
        <ds-breadcrumbs uiLandingPageHeaderContent>
          <ds-link *dsBreadcrumb>Home</ds-link>
          <ds-link *dsBreadcrumb>Landing Page</ds-link>
        </ds-breadcrumbs>
      </ui-landing-page>
    `,
  }),
  args: {
    ...Default.args,
  },
  play,
};

export const WithContent: Story<{
  spotlightContentText: string;
  contentText: string;
}> = {
  decorators: [
    moduleMetadata({
      imports: [BreadcrumbsComponent, BreadcrumbDirective, LinkComponent],
    }),
  ],
  render: (args) => ({
    template: `
      <ui-landing-page [headerTitle]="'${args.headerTitle}'">
        <ds-breadcrumbs uiLandingPageHeaderContent>
          <ds-link *dsBreadcrumb>Home</ds-link>
          <ds-link *dsBreadcrumb>Landing Page</ds-link>
        </ds-breadcrumbs>
        <div uiLandingPageSpotlightContent>${args.spotlightContentText}</div>
        <div>
          <p>${args.contentText}</p>
        </div>
      </ui-landing-page>
    `,
  }),
  args: {
    ...Default.args,
    spotlightContentText: 'Spotlight content',
    contentText: 'Main content',
  },
  play,
};
