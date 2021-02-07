import { BoxProps } from "grommet";

import { colors } from "../../../theme/theme-new";

export type Type = "danger" | "dark" | "ghost" | "primary" | "secondary";

export const activeBackground: { [type in Type]: BoxProps["background"] } = {
  danger: colors.danger7,
  dark: colors.gray10,
  ghost: colors.gray3,
  primary: colors.primaryDarker,
  secondary: colors.gray0,
};

export const background: { [type in Type]: BoxProps["background"] } = {
  danger: colors.danger5,
  dark: colors.gray10,
  ghost: colors.gray0,
  primary: colors.primary,
  secondary: colors.gray0,
};

export const hoverBackground: { [type in Type]: string } = {
  danger: colors.dangerDark,
  dark: colors.gray10,
  ghost: colors.gray2,
  primary: colors.primaryDark,
  secondary: colors.gray0,
};

export const textColor: { [type in Type]: string } = {
  danger: colors.gray0,
  dark: colors.gray0,
  ghost: colors.gray9,
  primary: colors.gray0,
  secondary: colors.gray9,
};
