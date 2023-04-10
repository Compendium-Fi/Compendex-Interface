import { ReactNode } from "react";
import cx from "clsx";
import {
  MantineGradient,
  Button,
  ButtonProps,
  useMantineTheme,
  MantineColor,

} from "@mantine/core";

interface ButtonBorderGradientProps extends ButtonProps {
  fromColor: MantineColor;
  viaColor?: MantineColor;
  toColor: MantineColor;
  containerClassName?: string;
  buttonClassName: string;
  onClick: () => void
}

export const ButtonBorderGradient = ({
  onClick,
  children,
  buttonClassName,
  fromColor,
  viaColor,
  toColor,
  disabled,
  containerClassName,
}: ButtonBorderGradientProps) => {
  const theme = useMantineTheme();

  return (

    <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}
      onClick={onClick}
      disabled={!!disabled}
      className={cx(buttonClassName)}
      radius="md"
      size="lg"
      style={{ minWidth: 0 }}
    >
      {children}
    </Button>

  );
};