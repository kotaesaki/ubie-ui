import { Meta, StoryObj } from '@storybook/react';
import { BlankLinkIcon, TrashIcon, UbieIcon } from '@ubie/ubie-icons';
import { LinkButton, Stack } from '../';
import type { ComponentProps } from 'react';

export default {
  title: 'Button/LinkButton',
  component: LinkButton,
} satisfies Meta<typeof LinkButton>;

type Story = StoryObj<typeof LinkButton>;

/**
 * Using Story's args, a non-existent prop is treated as having a value if its type is required.
 */
const defaultArgs = {
  children: 'ボタン',
  href: 'https://vitals.ubie.life/',
} satisfies Partial<ComponentProps<typeof LinkButton>>;

export const Default: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}>
        <LinkButton {...defaultArgs} />
        <LinkButton {...defaultArgs} variant="secondary" />
        <LinkButton {...defaultArgs} variant="alert" />
        <LinkButton {...defaultArgs} variant="text" />
        <LinkButton {...defaultArgs} variant="textAlert" />
      </div>
    </div>
  ),
};

export const Size: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}>
        <LinkButton {...defaultArgs} size="small">
          Small
        </LinkButton>
        <LinkButton {...defaultArgs} size="medium">
          Medium
        </LinkButton>
        <LinkButton {...defaultArgs}>Large</LinkButton>
      </div>
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Stack spacing="lg">
      <Stack spacing="lg" as="dl">
        <dt style={{ fontWeight: 'bold' }}>Position Prefix</dt>

        <dd style={{ margin: 0 }}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}>
            <LinkButton prefixIcon={<UbieIcon />} {...defaultArgs} />
            <LinkButton prefixIcon={<UbieIcon />} {...defaultArgs} variant="secondary" />
            <LinkButton prefixIcon={<UbieIcon />} {...defaultArgs} variant="alert" />
            <LinkButton prefixIcon={<UbieIcon />} {...defaultArgs} variant="text" />
            <LinkButton prefixIcon={<TrashIcon />} {...defaultArgs} variant="textAlert" />
          </div>
        </dd>
      </Stack>

      <Stack spacing="lg" as="dl">
        <dt style={{ fontWeight: 'bold' }}>Position Suffix</dt>
        <dd style={{ margin: 0 }}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}>
            <LinkButton suffixIcon={<BlankLinkIcon />} {...defaultArgs} />
            <LinkButton suffixIcon={<BlankLinkIcon />} {...defaultArgs} variant="secondary" />
            <LinkButton suffixIcon={<BlankLinkIcon />} {...defaultArgs} variant="alert" />
            <LinkButton suffixIcon={<BlankLinkIcon />} {...defaultArgs} variant="text" />
            <LinkButton suffixIcon={<BlankLinkIcon />} {...defaultArgs} variant="textAlert" />
            <LinkButton suffixIcon={<TrashIcon />} {...defaultArgs} variant="textAlert" />
          </div>
        </dd>
      </Stack>

      <Stack spacing="lg" as="dl">
        <dt style={{ fontWeight: 'bold' }}>Position Fixed</dt>

        <dd style={{ margin: 0 }}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}>
            <LinkButton fixedIcon={<BlankLinkIcon />} {...defaultArgs} />
            <LinkButton fixedIcon={<BlankLinkIcon />} {...defaultArgs} variant="secondary" />
            <LinkButton fixedIcon={<BlankLinkIcon />} {...defaultArgs} variant="alert" />
            <LinkButton fixedIcon={<BlankLinkIcon />} {...defaultArgs} variant="text" />
            <LinkButton fixedIcon={<TrashIcon />} {...defaultArgs} variant="textAlert" />
          </div>
        </dd>
      </Stack>

      <Stack spacing="lg" as="dl">
        <dt style={{ fontWeight: 'bold' }}>Name specification</dt>
        <dd style={{ margin: 0 }}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}>
            <LinkButton icon="BlankLinkIcon" {...defaultArgs}>
              Icon
            </LinkButton>
            <LinkButton suffixIcon="BlankLinkIcon" {...defaultArgs}>
              Suffix Icon
            </LinkButton>
            <LinkButton fixedIcon="BlankLinkIcon" {...defaultArgs}>
              Fixed Icon
            </LinkButton>
          </div>
        </dd>
      </Stack>

      <Stack spacing="lg" as="dl">
        <dt style={{ fontWeight: 'bold' }}>Auth Icon</dt>
        <dd style={{ margin: 0 }}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}>
            <LinkButton variant="authGoogle" icon="default" {...defaultArgs}>
              Icon
            </LinkButton>
            <LinkButton variant="authGoogle" suffixIcon="default" {...defaultArgs}>
              Suffix Icon
            </LinkButton>
            <LinkButton variant="authGoogle" fixedIcon="default" {...defaultArgs}>
              Fixed Icon
            </LinkButton>
          </div>
        </dd>
      </Stack>

      <Stack spacing="lg" as="dl">
        <dt style={{ fontWeight: 'bold' }}>icon prop(deprecated)</dt>

        <dd style={{ margin: 0 }}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}>
            <LinkButton icon={<UbieIcon />} {...defaultArgs} />
            <LinkButton icon={<UbieIcon />} {...defaultArgs} variant="secondary" />
            <LinkButton icon={<UbieIcon />} {...defaultArgs} variant="alert" />
            <LinkButton icon={<UbieIcon />} {...defaultArgs} variant="text" />
            <LinkButton icon={<TrashIcon />} {...defaultArgs} variant="textAlert" />
          </div>
        </dd>
      </Stack>
    </Stack>
  ),
};

export const Block: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <LinkButton {...defaultArgs} size="small" variant="secondary" block />
      </div>
      <div>
        <LinkButton {...defaultArgs} size="medium" variant="secondary" block />
      </div>
      <div>
        <LinkButton {...defaultArgs} size="large" variant="secondary" block />
      </div>
    </div>
  ),
};

export const Margin: Story = {
  render: () => (
    <div style={{ backgroundColor: 'var(--color-background-black-darken)', width: 'fit-content', overflow: 'hidden' }}>
      <LinkButton {...defaultArgs} mt="lg" mr="lg" mb="lg" ml="lg" />
    </div>
  ),
};

export const CustomDataAttribute: Story = {
  args: {
    ...defaultArgs,
    'data-test-id': 'link-button-custom-attribute',
  },
  render: (args) => <LinkButton {...args}>Please enter in English</LinkButton>,
};

export const TextWrap: Story = {
  render: (args) => {
    return <LinkButton {...args} />;
  },
  args: {
    ...defaultArgs,
    children: '[抽選で謝礼あり]\nアンケートにご協力ください',
    whiteSpace: 'pre-wrap',
    block: true,
  },
};
