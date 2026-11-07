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
  value: {
    flex: 1,
    fontSize: 16,
    color: tokens.colors.textDark
  },
  placeholder: {
    color: tokens.colors.textMuted
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    justifyContent: 'flex-end'
  },
  sheet: {
    backgroundColor: tokens.colors.surface,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 32
  },
  sheetHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12
  },
  sheetTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: tokens.colors.textDark
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 52,
    borderRadius: 8,
    paddingHorizontal: 12
  },
  optionSelected: {
    backgroundColor: tokens.colors.background
  },
  optionText: {
    fontSize: 16,
    color: tokens.colors.textDark
  },
  optionTextSelected: {
    color: tokens.colors.primary,
    fontWeight: '600'
  }
});
