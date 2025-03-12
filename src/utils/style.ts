import DesignTokens from '@ubie/design-tokens';
import {
  Spacing,
  Radius,
  HeadingFontSize,
  TextType,
  BodyFontSize,
  BodyLeading,
  ButtonFontSize,
  ButtonLeading,
  HeadingLeading,
  TagFontSize,
  TagLeading,
  CSSMinWidth,
  CSSMaxWidth,
  CSSWitdh,
  TextColorVariant,
  TextColorTokenKey,
  BackgroundColorVariant,
  BackgroundColorTokenKey,
  BorderVariant,
  BorderColorTokenKey,
  IconColorVariant,
} from '../types/style';
import type { CSSProperties } from 'react';

export type Opacity = 'normal' | 'darker';
export const opacityToClassName = (opacity: Opacity) => {
  switch (opacity) {
    case 'normal':
      return 'normalOverlay';
    case 'darker':
      return 'darkerOverlay';
  }
};

export const createSpacingVariableFromKey = (key: Spacing) => {
  return `var(--${DesignTokens.size[`spacing-${key}`].path.join('-')})`;
};

const createRadiusVariableFromKey = (key: Radius) => {
  return `var(--${DesignTokens.radius[key].path.join('-')})`;
};

export const cssFontSizeToken = ({
  type,
  size,
}:
  | {
      type: Extract<TextType, 'body'>;
      size: BodyFontSize;
    }
  | {
      type: Extract<TextType, 'heading'>;
      size: HeadingFontSize;
    }
  | {
      type: Extract<TextType, 'button'>;
      size: ButtonFontSize;
    }
  | {
      type: Extract<TextType, 'tag'>;
      size: TagFontSize;
    }) => {
  switch (type) {
    case 'body':
      return `var(--${DesignTokens.text[`${type}-${size}-size`].path.join('-')})`;
    case 'heading':
      return `var(--${DesignTokens.text[`${type}-${size}-size`].path.join('-')})`;
    case 'button':
      return `var(--${DesignTokens.text[`${type}-${size}-size`].path.join('-')})`;
    case 'tag':
      return `var(--${DesignTokens.text[`${type}-${size}-size`].path.join('-')})`;
    default:
      // eslint-disable-next-line no-case-declarations
      const _: never = type;
  }

  return '';
};

export const cssLeadingToken = ({
  type,
  size,
  leading,
}:
  | {
      type: Extract<TextType, 'body'>;
      size: BodyFontSize;
      leading: BodyLeading;
    }
  | {
      type: Extract<TextType, 'heading'>;
      size: HeadingFontSize;
      leading: HeadingLeading;
    }
  | {
      type: Extract<TextType, 'button'>;
      size: ButtonFontSize;
      leading: ButtonLeading;
    }
  | {
      type: Extract<TextType, 'tag'>;
      size: TagFontSize;
      leading: TagLeading;
    }) => {
  switch (type) {
    case 'body':
      return leading === 'default'
        ? `var(--${DesignTokens.text[`${type}-${size}-line`].path.join('-')})`
        : `var(--${DesignTokens.text[`${type}-${size}-${leading}-line`].path.join('-')})`;
    case 'heading':
      return `var(--${DesignTokens.text[`${type}-${size}-line`].path.join('-')})`;
    case 'button':
      return `var(--${DesignTokens.text[`${type}-${size}-line`].path.join('-')})`;
    case 'tag':
      return `var(--${DesignTokens.text[`${type}-${size}-line`].path.join('-')})`;
    default:
      // eslint-disable-next-line no-case-declarations
      const _: never = type;
  }

  return '';
};

const PascalToKebab = (str: string) => {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase();
};

const textColorVariantToTokenKey = (color: TextColorVariant) => {
  return `text-${PascalToKebab(color)}` as TextColorTokenKey;
};

/**
 * Returns css variants based on the foreground color key
 */
export const colorVariable = (color: TextColorVariant | undefined): CSSProperties => {
  if (color == null) {
    return {
      '--text-color': 'inherit',
    } as CSSProperties;
  }

  return {
    '--text-color': `var(--${DesignTokens.color[textColorVariantToTokenKey(color)].path.join('-')})`,
  } as CSSProperties;
};

const backgroundColorVariantToTokenKey = (color: BackgroundColorVariant) => {
  return `background-${PascalToKebab(color)}` as BackgroundColorTokenKey;
};

export const backgroundColorVariable = (color: BackgroundColorVariant | undefined): CSSProperties => {
  if (color == null) {
    return {
      '--background-color': 'transparent',
    } as CSSProperties;
  }

  return {
    '--background-color': `var(--${DesignTokens.color[backgroundColorVariantToTokenKey(color)].path.join('-')})`,
  } as CSSProperties;
};

export const iconColorVariable = (color?: IconColorVariant): CSSProperties => {
  if (color == null) {
    return {
      '--icon-color': 'inherit',
    } as CSSProperties;
  }

  if (color === 'white') {
    return {
      '--icon-color': 'var(--color-ubie-white)',
    } as CSSProperties;
  }

  // FIXME icon用のトークンが定義されたら差し替え
  return {
    '--icon-color': `var(--color-ubie-${color}-600)`,
  } as CSSProperties;
};

/**
 * Accepts optional arguments to unify default values.
 */
export const paddingVariables = ({
  p,
  px,
  py,
  pt,
  pr,
  pb,
  pl,
}: {
  p?: Spacing;
  px?: Spacing;
  py?: Spacing;
  pt?: Spacing;
  pr?: Spacing;
  pb?: Spacing;
  pl?: Spacing;
}) => {
  const topKey = pt ?? py ?? p;
  const rightKey = pr ?? px ?? p;
  const bottomKey = pb ?? py ?? p;
  const leftKey = pl ?? px ?? p;

  return {
    '--padding-top': topKey ? createSpacingVariableFromKey(topKey) : '0',
    '--padding-right': rightKey ? createSpacingVariableFromKey(rightKey) : '0',
    '--padding-bottom': bottomKey ? createSpacingVariableFromKey(bottomKey) : '0',
    '--padding-left': leftKey ? createSpacingVariableFromKey(leftKey) : '0',
  } as CSSProperties;
};

/**
 * Accepts optional arguments to unify default values.
 */
export const marginVariables = ({
  m,
  mx,
  my,
  mt,
  mr,
  mb,
  ml,
}: {
  m?: Spacing;
  mx?: Spacing;
  my?: Spacing;
  mt?: Spacing;
  mr?: Spacing;
  mb?: Spacing;
  ml?: Spacing;
}) => {
  const topKey = mt ?? my ?? m;
  const rightKey = mr ?? mx ?? m;
  const bottomKey = mb ?? my ?? m;
  const leftKey = ml ?? mx ?? m;

  return {
    '--margin-top': topKey ? createSpacingVariableFromKey(topKey) : '0',
    '--margin-right': rightKey ? createSpacingVariableFromKey(rightKey) : '0',
    '--margin-bottom': bottomKey ? createSpacingVariableFromKey(bottomKey) : '0',
    '--margin-left': leftKey ? createSpacingVariableFromKey(leftKey) : '0',
  } as CSSProperties;
};

/**
 * Accepts optional arguments to unify default values.
 */
export const radiusVariables = (radius?: Radius) => {
  return {
    '--radius': radius ? createRadiusVariableFromKey(radius) : '0',
  } as CSSProperties;
};

/**
 * Accepts optional arguments to unify default values.
 */
export const gapVariables = (spacing?: Spacing) => {
  return {
    '--gap': spacing ? `var(--size-spacing-${spacing})` : '0',
  } as CSSProperties;
};

export const widthVariables = ({
  width = 'auto',
  minWidth = 'auto',
  maxWidth = 'none',
}: {
  width?: CSSWitdh;
  minWidth?: CSSMinWidth;
  maxWidth?: CSSMaxWidth;
}) => {
  return {
    '--width': width,
    '--min-width': minWidth,
    '--max-width': maxWidth,
  } as CSSProperties;
};

const borderVariantToColorTokenKey = (border: BorderVariant) => {
  const color = border.replace('Thick', '');
  return `border-${PascalToKebab(color)}` as BorderColorTokenKey;
};

export const borderVariables = (border?: BorderVariant) => {
  if (border == null) {
    return {
      '--border-width': '0px',
    };
  }

  const isThick = border.endsWith('Thick');
  const colorKey = borderVariantToColorTokenKey(border);

  return {
    '--border-width': isThick ? '2px' : '1px',
    '--border-color': `var(--${DesignTokens.color[colorKey].path.join('-')})`,
  };
};
