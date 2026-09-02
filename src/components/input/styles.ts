import { StyleSheet } from 'react-native';

import { tokens } from '../../global/tokens';

export const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    borderWidth: 1.5,
    borderRadius: 8,
    paddingHorizontal: 16,
    backgroundColor: tokens.colors.background
  },
  label: {
    position: 'absolute',
    top: -10,
    left: 12,
    backgroundColor: tokens.colors.background,
    paddingHorizontal: 6,
    fontSize: 13,
    fontWeight: '500',
    zIndex: 1
  },
  icon: {
    marginRight: 12
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: tokens.colors.textDark
  }
});