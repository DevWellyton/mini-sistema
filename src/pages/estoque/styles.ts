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
    marginBottom: 28
  },
  headerSubtitle: {
    flex: 1,
    marginLeft: 12,
    fontSize: 15,
    lineHeight: 20,
    color: tokens.colors.textMuted
  },
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    marginBottom: 28,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: tokens.colors.border,
    backgroundColor: tokens.colors.surface
  },
  summaryItem: {
    flex: 1,
    alignItems: 'center'
  },
  summaryValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: tokens.colors.textDark
  },
  summaryLabel: {
    marginTop: 4,
    fontSize: 12,
    color: tokens.colors.textMuted
  },
  summaryDivider: {
    width: 1,
    height: 36,
    backgroundColor: tokens.colors.border
  },
  sectionTitle: {
    marginBottom: 12,
    fontSize: 15,
    fontWeight: '600',
    color: tokens.colors.textDark
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: tokens.colors.border,
    backgroundColor: tokens.colors.surface
  },
  cardIcon: {
    width: 44,
    height: 44,
    marginRight: 12,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: tokens.colors.background
  },
  cardInfo: {
    flex: 1
  },
  cardName: {
    fontSize: 15,
    fontWeight: '600',
    color: tokens.colors.textDark
  },
  cardMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 6
  },
  cardQuantity: {
    fontSize: 13,
    color: tokens.colors.textMuted
  },
  empty: {
    paddingVertical: 24,
    textAlign: 'center',
    color: tokens.colors.textMuted
  }
});
