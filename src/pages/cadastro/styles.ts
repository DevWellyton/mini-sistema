import { StyleSheet } from 'react-native';

import { tokens } from '../../global/tokens';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tokens.colors.background
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40
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
  }
});
