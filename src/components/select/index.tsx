import React, { useState } from 'react';
import { Modal, Pressable, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { tokens } from '../../global/tokens';
import { style } from './styles';

export interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps {
  label: string;
  options: SelectOption[];
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  active?: boolean;
}

export const Select = ({
  label,
  options,
  value,
  onChange,
  placeholder = 'Selecione uma opção',
  active = true
}: SelectProps) => {
  const [open, setOpen] = useState(false);
  const insets = useSafeAreaInsets();
  const selected = options.find((option) => option.value === value);
  const color = active ? tokens.colors.borderActive : tokens.colors.borderInactive;
  const labelColor = active ? tokens.colors.primary : tokens.colors.textMuted;

  const handleSelect = (option: SelectOption) => {
    onChange(option.value);
    setOpen(false);
  };

  return (
    <>
      <Pressable
        style={[style.container, { borderColor: color }]}
        onPress={() => setOpen(true)}
        accessibilityRole="button"
        accessibilityState={{ expanded: open }}
        accessibilityLabel={`${label}: ${selected ? selected.label : placeholder}`}
      >
        <Text style={[style.label, { color: labelColor }]}>{label}</Text>
        <Text style={[style.value, !selected && style.placeholder]}>
          {selected ? selected.label : placeholder}
        </Text>
        <MaterialCommunityIcons
          name={open ? 'chevron-up' : 'chevron-down'}
          size={22}
          color={tokens.colors.textMuted}
        />
      </Pressable>

      <Modal
        visible={open}
        transparent
        animationType="fade"
        statusBarTranslucent
        onRequestClose={() => setOpen(false)}
      >
        <Pressable style={style.overlay} onPress={() => setOpen(false)}>
          <View style={[style.sheet, { paddingBottom: insets.bottom + 24 }]}>
            <View style={style.sheetHeader}>
              <Text style={style.sheetTitle}>{label}</Text>
              <TouchableOpacity
                onPress={() => setOpen(false)}
                accessibilityRole="button"
                accessibilityLabel="Fechar lista"
              >
                <MaterialCommunityIcons
                  name="close"
                  size={22}
                  color={tokens.colors.textMuted}
                />
              </TouchableOpacity>
            </View>

            {options.map((option) => {
              const isSelected = option.value === value;

              return (
                <TouchableOpacity
                  key={option.value}
                  style={[style.option, isSelected && style.optionSelected]}
                  onPress={() => handleSelect(option)}
                  activeOpacity={0.7}
                  accessibilityRole="button"
                  accessibilityState={{ selected: isSelected }}
                >
                  <Text style={[style.optionText, isSelected && style.optionTextSelected]}>
                    {option.label}
                  </Text>
                  {isSelected ? (
                    <MaterialCommunityIcons
                      name="check"
                      size={20}
                      color={tokens.colors.primary}
                    />
                  ) : null}
                </TouchableOpacity>
              );
            })}
          </View>
        </Pressable>
      </Modal>
    </>
  );
};
