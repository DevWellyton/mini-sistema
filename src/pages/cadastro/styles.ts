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
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: tokens.colors.textDark,
    marginLeft: 12
  },
  form: {
    gap: 24
  },
  button: {
    backgroundColor: tokens.colors.primary,
    height: 52,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  buttonText: {
    color: tokens.colors.white,
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 0.5
  }
});