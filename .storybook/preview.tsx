import '@ubie/design-tokens/dist/tokens.css';
import { Preview } from '@storybook/react';
// @ts-ignore
import { resetCss, ResetCssDecorator } from './decorators/ResetCssDecorator';

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
export const tags = ['autodocs'];

const preview: Preview = {
  globalTypes: {
    resetCss: {
      description: 'Global theme for components',
      defaultValue: resetCss.modernCss,
      toolbar: {
        title: 'Reset CSS',
        icon: 'markup',
        items: [resetCss.none, resetCss.modernCss],
      },
    },
  },
  decorators: [
    (story, context) => {
      const applyResetCss = context.globals.resetCss || resetCss.none;

      return <ResetCssDecorator applyResetCss={applyResetCss}>{story()}</ResetCssDecorator>;
    },
  ],
};

export default preview;
