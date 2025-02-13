export {
  default as createTheme,
  default as unstable_createMuiStrictModeTheme,
  createMuiTheme,
  ThemeOptions,
  Theme,
} from './createTheme';
export { default as adaptV4Theme, DeprecatedThemeOptions } from './adaptV4Theme';
export {
  Palette,
  PaletteColor,
  PaletteColorOptions,
  PaletteOptions,
  SimplePaletteColorOptions,
} from './createPalette';
export { default as createStyles } from './createStyles';
export {
  Typography as TypographyVariants,
  TypographyOptions as TypographyVariantsOptions,
  TypographyStyle,
  Variant as TypographyVariant,
} from './createTypography';
export { default as responsiveFontSizes } from './responsiveFontSizes';
export { ComponentsPropsList } from './props';
export {
  Duration,
  Easing,
  Transitions,
  TransitionsOptions,
  duration,
  easing,
} from './createTransitions';
export {
  Direction,
  Breakpoint,
  BreakpointOverrides,
  Breakpoints,
  BreakpointsOptions,
  CreateMUIStyled,
  CSSObject,
  // color manipulators
  hexToRgb,
  rgbToHex,
  hslToRgb,
  decomposeColor,
  recomposeColor,
  getContrastRatio,
  getLuminance,
  emphasize,
  alpha,
  darken,
  lighten,
  ColorFormat,
  ColorObject,
} from '@mui/system';
export { default as useTheme } from './useTheme';
export { default as useThemeProps } from './useThemeProps';
export * from './useThemeProps';
export { default as styled } from './styled';
/**
 * @deprecated will be removed in v5.beta, please use styled from @mui/material/styles instead
 */
export { default as experimentalStyled } from './styled';
export { default as ThemeProvider } from './ThemeProvider';
export { ComponentsProps } from './props';
export { ComponentsVariants } from './variants';
export { ComponentsOverrides } from './overrides';
export { StyledEngineProvider } from '@mui/system';

export type ClassNameMap<ClassKey extends string = string> = Record<ClassKey, string>;

export interface StyledComponentProps<ClassKey extends string = string> {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<ClassNameMap<ClassKey>>;
}

export { default as makeStyles } from './makeStyles';
export { default as withStyles } from './withStyles';
export { default as withTheme } from './withTheme';
