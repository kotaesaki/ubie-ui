import { Meta, StoryObj } from '@storybook/react';
import { Box, Stack } from '..';
import type { ComponentProps } from 'react';

export default {
  component: Box,
} satisfies Meta<typeof Box>;

const defaultArgs = {
  children: 'Box',
  pt: 'md',
  pr: 'md',
  pb: 'md',
  pl: 'md',
  radius: 'md',
  backgroundColor: 'primary',
} satisfies Partial<ComponentProps<typeof Box>>;

type Story = StoryObj<typeof Box>;

export const Default: Story = {
  args: defaultArgs,
};

export const BackgroundColor: Story = {
  render: () => (
    <div>
      <Box {...defaultArgs} backgroundColor="primary">
        Primary
      </Box>
      <Box {...defaultArgs} mt="md" backgroundColor="primaryDarken">
        Primary Darken
      </Box>
      <Box {...defaultArgs} mt="md" backgroundColor="accent">
        Accent
      </Box>
      <Box {...defaultArgs} mt="md" backgroundColor="accentDarken">
        Accent Darken
      </Box>
      <Box {...defaultArgs} mt="md" backgroundColor="alert">
        Alert
      </Box>
      <Box {...defaultArgs} mt="md" backgroundColor="gray">
        Gray
      </Box>
      <Box {...defaultArgs} mt="md" backgroundColor="white">
        White
      </Box>
    </div>
  ),
};

export const Padding: Story = {
  render: () => (
    <div>
      <Box {...defaultArgs} pt="xxs" pr="xxs" pb="xxs" pl="xxs">
        xxs
      </Box>
      <Box {...defaultArgs} mt="md" pt="xs" pr="xs" pb="xs" pl="xs">
        xs
      </Box>
      <Box {...defaultArgs} mt="md" pt="sm" pr="sm" pb="sm" pl="sm">
        sm
      </Box>
      <Box {...defaultArgs} mt="md" pt="md" pr="md" pb="md" pl="md">
        md
      </Box>
      <Box {...defaultArgs} mt="md" pt="lg" pr="lg" pb="lg" pl="lg">
        lg
      </Box>
      <Box {...defaultArgs} mt="md" pt="xl" pr="xl" pb="xl" pl="xl">
        xl
      </Box>
      <Box {...defaultArgs} mt="md" pt="xxl" pr="xxl" pb="xxl" pl="xxl">
        xxl
      </Box>
    </div>
  ),
};

export const Margin: Story = {
  render: () => (
    <div>
      <Box {...defaultArgs} mt="xxs" mr="xxs" mb="xxs" ml="xxs">
        xxs
      </Box>
      <hr />
      <Box {...defaultArgs} mt="xs" mr="xs" mb="xs" ml="xs">
        xs
      </Box>
      <hr />
      <Box {...defaultArgs} mt="sm" mr="sm" mb="sm" ml="sm">
        sm
      </Box>
      <hr />
      <Box {...defaultArgs} mt="md" mr="md" mb="md" ml="md">
        md
      </Box>
      <hr />
      <Box {...defaultArgs} mt="lg" mr="lg" mb="lg" ml="lg">
        lg
      </Box>
      <hr />
      <Box {...defaultArgs} mt="xl" mr="xl" mb="xl" ml="xl">
        xl
      </Box>
      <hr />
      <Box {...defaultArgs} mt="xxl" mr="xxl" mb="xxl" ml="xxl">
        xxl
      </Box>
    </div>
  ),
};

export const Radius: Story = {
  render: () => (
    <div>
      <Box {...defaultArgs} pt="md" pr="md" pb="md" pl="md" radius="xs">
        xs
      </Box>
      <Box {...defaultArgs} mt="md" pt="md" pr="md" pb="md" pl="md" radius="sm">
        sm
      </Box>
      <Box {...defaultArgs} mt="md" pt="md" pr="md" pb="md" pl="md" radius="md">
        md
      </Box>
      <Box {...defaultArgs} mt="md" pt="md" pr="md" pb="md" pl="md" radius="lg">
        lg
      </Box>
    </div>
  ),
};

export const Border: Story = {
  render: () => (
    <div>
      <Box {...defaultArgs} backgroundColor="white" border="gray">
        Border Gray
      </Box>

      <Box {...defaultArgs} backgroundColor="white" border="gray">
        Border Gray
      </Box>
      <Box mt="md" {...defaultArgs} backgroundColor="white" border="grayThick">
        Border Gray Thick
      </Box>
      <Box {...defaultArgs} mt="md" backgroundColor="white" border="primary">
        Primary Border
      </Box>
      <Box {...defaultArgs} mt="md" backgroundColor="white" border="primaryThick">
        Primary Border Thick
      </Box>
    </div>
  ),
};

export const Width: Story = {
  render: () => (
    <Stack spacing="md">
      <p>
        Flexコンテナの子要素では、デフォルトでは横幅がintrinsic（コンテンツに応じた幅）となります。widthをfullとすることで100%を維持できます。
      </p>
      <Box {...defaultArgs} width="full">
        Width Full
      </Box>

      <Box {...defaultArgs}>Not Width Full</Box>
    </Stack>
  ),
};

export const AsSection: Story = {
  render: () => (
    <Box as="section" pt="md" pr="md" pb="md" pl="md" radius="md" backgroundColor="primary">
      <h2>Heading</h2>

      <p>body</p>
    </Box>
  ),
};

export const TextVariations: Story = {
  render: () => (
    <div>
      <Box
        {...defaultArgs}
        backgroundColor="gray"
        textColor="primary"
        textBold
        textType="body"
        textSize="lg"
        textLeading="narrow"
      >
        <p>Text Bold</p>

        <Box {...defaultArgs} backgroundColor="gray">
          <p>nested</p>
        </Box>

        <Box
          {...defaultArgs}
          mt="md"
          backgroundColor="gray"
          textType="note"
          textSize="lg"
          textLeading="tight"
          textBold={false}
        >
          <p>nested. reset styles</p>
        </Box>
      </Box>

      <Box {...defaultArgs} backgroundColor="gray" mt="xl" textColor="main">
        <p>Color Main</p>
      </Box>
      <Box {...defaultArgs} backgroundColor="gray" mt="md" textColor="sub">
        <p>Color Sub</p>
      </Box>
      <Box {...defaultArgs} backgroundColor="gray" mt="md" textColor="link">
        <p>Color Main</p>
      </Box>
      <Box {...defaultArgs} backgroundColor="gray" mt="md" textColor="linkSub">
        <p>Color Link Sub</p>
      </Box>
      <Box {...defaultArgs} backgroundColor="gray" mt="md" textColor="disabled">
        <p>Color Disabled</p>
      </Box>
      <Box {...defaultArgs} backgroundColor="gray" mt="md" textColor="primary">
        <p>Color Primary</p>
      </Box>
      <Box {...defaultArgs} backgroundColor="gray" mt="md" textColor="accent">
        <p>Color Accent</p>
      </Box>
      <Box {...defaultArgs} backgroundColor="gray" mt="md" textColor="alert">
        <p>Color Alert</p>
      </Box>
      <Box {...defaultArgs} mt="xl" textType="body">
        <p>Body size & leading default value</p>
      </Box>

      <Box {...defaultArgs} mt="xl" textType="body" textSize="sm" textLeading="default">
        <p>Body Small Default</p>
      </Box>
      <Box {...defaultArgs} mt="md" textType="body" textSize="sm" textLeading="narrow">
        <p>Body Small Narrow</p>
      </Box>
      <Box {...defaultArgs} mt="md" textType="body" textSize="sm" textLeading="tight">
        <p>Body Small Tight</p>
      </Box>

      <Box {...defaultArgs} mt="xl" textType="body" textSize="md" textLeading="default">
        <p>Body Medium Default</p>
      </Box>
      <Box {...defaultArgs} mt="md" textType="body" textSize="md" textLeading="narrow">
        <p>Body Medium Narrow</p>
      </Box>
      <Box {...defaultArgs} mt="md" textType="body" textSize="md" textLeading="tight">
        <p>Body Medium Tight</p>
      </Box>

      <Box {...defaultArgs} mt="xl" textType="body" textSize="lg" textLeading="default">
        <p>Body Large Default</p>
      </Box>
      <Box {...defaultArgs} mt="md" textType="body" textSize="lg" textLeading="narrow">
        <p>Body Large Narrow</p>
      </Box>
      <Box {...defaultArgs} mt="md" textType="body" textSize="lg" textLeading="tight">
        <p>Body Large Tight</p>
      </Box>

      <Box {...defaultArgs} mt="xl" textType="note">
        <p>Note size & leading default value</p>
      </Box>

      <Box {...defaultArgs} mt="xl" textType="note" textSize="sm" textLeading="default">
        <p>Note Small Default</p>
      </Box>
      <Box {...defaultArgs} mt="md" textType="note" textSize="sm" textLeading="narrow">
        <p>Note Small Narrow</p>
      </Box>
      <Box {...defaultArgs} mt="md" textType="note" textSize="sm" textLeading="tight">
        <p>Note Small Tight</p>
      </Box>

      <Box {...defaultArgs} mt="xl" textType="note" textSize="md" textLeading="default">
        <p>Note Medium Default</p>
      </Box>
      <Box {...defaultArgs} mt="md" textType="note" textSize="md" textLeading="narrow">
        <p>Note Medium Narrow</p>
      </Box>
      <Box {...defaultArgs} mt="md" textType="note" textSize="md" textLeading="tight">
        <p>Note Medium Tight</p>
      </Box>

      <Box {...defaultArgs} mt="xl" textType="note" textSize="lg" textLeading="default">
        <p>Note Large Default</p>
      </Box>
      <Box {...defaultArgs} mt="md" textType="note" textSize="lg" textLeading="narrow">
        <p>Note Large Narrow</p>
      </Box>
      <Box {...defaultArgs} mt="md" textType="note" textSize="lg" textLeading="tight">
        <p>Note Large Tight</p>
      </Box>
    </div>
  ),
};
