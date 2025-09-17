import { StoryObj } from '@storybook/react';
import { ErrorMessage } from '..';

export default {
  title: 'Form/ErrorMessage',
  component: ErrorMessage,
};

type Story = StoryObj<typeof ErrorMessage>;

export const Default: Story = {
  render: () => <ErrorMessage>全角カタカナでご入力ください</ErrorMessage>,
};

export const CustomDataAttribute: Story = {
  render: () => <ErrorMessage data-test-id="error-message-custom">全角カタカナでご入力ください</ErrorMessage>,
};
