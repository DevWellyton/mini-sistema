import React from 'react';
import { KeyboardTypeOptions, Text, TextInput, View } from 'react-native';

import { tokens } from '../../global/tokens';
import { style } from './styles';

interface InputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  IconLeft?: React.ReactNode;
  active?: boolean;
}

export const Input = ({
  label,
  value,
  onChangeText,
  placeholder,
  keyboardType = 'default',
  secureTextEntry,
  IconLeft,
  active = true,
}: InputProps) => {
  const color = active ? tokens.colors.borderActive : tokens.colors.borderInactive;
  const labelColor = active ? tokens.colors.primary : tokens.colors.textMuted;

  return (
    <View style={[style.container, { borderColor: color }]}>
      <Text style={[style.label, { color: labelColor }]}>{label}</Text>
      {IconLeft ? <View style={style.icon}>{IconLeft}</View> : null}
      <TextInput
        style={style.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={tokens.colors.textMuted}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};