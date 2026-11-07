import { tokens } from './tokens';

/**
 * Tema legado usado pela tela de Login.
 * Mantido com a mesma API (themas.Colors) para não alterar os estilos existentes,
 * mas apontando para os tokens globais para o app inteiro ter uma única paleta.
 */
export const themas = {
  Colors: {
    primary: tokens.colors.primary,
    secondary: tokens.colors.white,
    lightGray: tokens.colors.border,
    gray: tokens.colors.textMuted,
    bgScreen: tokens.colors.background,
    red: tokens.colors.danger,
    blueLigth: '#134e70ff',
    blackTransparent: '#00000040'
  }
};
