import { StyleSheet } from 'react-native';

import { tokens } from '../../global/tokens';

export const style = StyleSheet.create({
  button: {
    flexDirection: 'row',
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
  buttonOutline: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: tokens.colors.primary,
    elevation: 0,
    shadowOpacity: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 0
    }
  },
  buttonDisabled: {
    opacity: 0.6
  },
  icon: {
    marginRight: 8
  },
  text: {
    color: tokens.colors.white,
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 0.5
  },
  textOutline: {
    color: tokens.colors.primary
  }
});
