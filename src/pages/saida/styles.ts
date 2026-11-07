import { StyleSheet } from 'react-native';

import { tokens } from '../../global/tokens';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tokens.colors.background
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 32
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32
  },
  headerSubtitle: {
    flex: 1,
    marginLeft: 12,
    fontSize: 15,
    lineHeight: 20,
    color: tokens.colors.textMuted
  },
  form: {
    gap: 24
  },
  hint: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 24,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: tokens.colors.border,
    backgroundColor: tokens.colors.surface
  },
  hintText: {
    flex: 1,
    marginLeft: 8,
    fontSize: 13,
    lineHeight: 18,
    color: tokens.colors.textMuted
  }
});
