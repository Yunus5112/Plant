import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  title: {
    fontSize: 28,
    fontFamily: 'Rubik-Regular',
    color: '#13231B',
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  titleHighlight: {
    fontFamily: 'Rubik-Bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#13231BB2',
    paddingHorizontal: 24,
    marginTop: 8,
    fontFamily: 'Rubik-Regular',
  },
  imageWrapper: {
    flex: 1,
    marginTop: 24,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: '#597165B2',
    fontSize: 11,
    fontFamily: 'Rubik-Regular',
    textAlign: 'center',
  },
  link: {
    textDecorationLine: 'underline',
  },
});
