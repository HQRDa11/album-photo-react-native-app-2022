import { StyleSheet } from "react-native";

export const Style = {
  TITLE: StyleSheet.create({
    LABEL: {
      fontSize: 12,
    },
    SMALL: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    MEDIUM: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    LARGE: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 15,
    }
  }),
  CONTAINER: StyleSheet.create({
    DEFAULT: {
      flex: 1,
    },
    DEFAULT_CENTERED: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    WRAPPER_ROUNDED: {
      width: '96%',
      borderRadius: 5,
      padding: 10,
      backgroundColor: 'white',
    }
  }),
  TEXT: StyleSheet.create({
    UNDERLINED: {
      textDecorationLine: 'underline',
    },
    LIGHT: {
      fontWeight: '100',
    },
    SEMI_LIGHT: {
      fontWeight: '300',
    },
    NORMAL: {
      fontWeight: '500',
    },
    BOLD: {
      fontWeight: 'bold',
    },
  }),
  ALIGN: StyleSheet.create({
    CENTER: {
      margin: 'auto',
    }
  })
}