import { provideHttpClient } from '@angular/common/http';
import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { HomePageComponent } from './home-page.component';

const meta: Meta<HomePageComponent> = {
  component: HomePageComponent,
  title: 'Pages/HomePage',
  decorators: [
    applicationConfig({
      providers: [provideHttpClient()],
    }),
  ],
};
export default meta;

type Story = StoryObj<HomePageComponent>;

export const Default: Story = {
  args: {},
};
