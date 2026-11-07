import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

import { style } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'outline';
  IconLeft?: React.ReactNode;
}

export const Button = ({
  title,
  variant = 'primary',
  IconLeft,
  style: styleProp,
  disabled,
  ...rest
}: ButtonProps) => {
  const isOutline = variant === 'outline';

  return (
    <TouchableOpacity
      style={[
        style.button,
        isOutline && style.buttonOutline,
        disabled && style.buttonDisabled,
        styleProp
      ]}
      activeOpacity={0.8}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      {...rest}
    >
      {IconLeft ? <View style={style.icon}>{IconLeft}</View> : null}
      <Text style={[style.text, isOutline && style.textOutline]}>{title}</Text>
    </TouchableOpacity>
  );
};
