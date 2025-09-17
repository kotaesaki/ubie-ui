import { composeStory } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import Meta, { WithCustomDataAttribute, WithId } from './Icon.stories';

const WithCustomDataAttributeStory = composeStory(WithCustomDataAttribute, Meta);
const WithIdStory = composeStory(WithId, Meta);

describe('Icon', () => {
  test('Add custom data attributes', async () => {
    render(<WithCustomDataAttributeStory />);

    const iconElement = await screen.findByTestId('testid');

    expect(iconElement).toBeInTheDocument();
  });

  test('Add id', async () => {
    render(<WithIdStory />);

    const iconElement = await screen.findByTestId('testid');

    expect(iconElement).toHaveAttribute('id', 'icon-id');
  });
});
