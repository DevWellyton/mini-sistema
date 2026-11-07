import React from 'react';
import { Text, View } from 'react-native';

import { StatusEstoque } from '../../global/produtos';
import { tokens } from '../../global/tokens';
import { style } from './styles';

const BADGE_CONFIG: Record<StatusEstoque, { label: string; color: string; background: string }> = {
  EM_ESTOQUE: {
    label: 'Em Estoque',
    color: tokens.colors.success,
    background: tokens.colors.successSoft
  },
  ESTOQUE_BAIXO: {
    label: 'Estoque Baixo',
    color: tokens.colors.danger,
    background: tokens.colors.dangerSoft
  }
};

interface StatusBadgeProps {
  status: StatusEstoque;
}

export const StatusBadge = ({ status }: StatusBadgeProps) => {
  const { label, color, background } = BADGE_CONFIG[status];

  return (
    <View style={[style.badge, { backgroundColor: background }]}>
      <Text style={[style.text, { color }]}>{label}</Text>
    </View>
  );
};
