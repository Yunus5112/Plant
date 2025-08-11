import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F1C17',
  },
  backgroundWrapper: {
    ...StyleSheet.absoluteFillObject,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    gap: 16,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '800',
  },
  headerSubtitle: {
    color: '#FFFFFFB2',
    fontSize: 17,
    fontFamily: 'Rubik-Light',
    marginTop: -6,
  },
  footerNote: {
    color: '#FFFFFF85',
    fontFamily: 'Rubik-Light',
    textAlign: 'center',
  },
  footerLinksRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  footerLink: {
    color: '#FFFFFF80',
    fontFamily: 'Rubik-Regular',
    fontSize: 11,
  },
  dotSeparator: {
    width: 2,
    height: 2,
    borderRadius: 2,
    backgroundColor: '#FFFFFF80',
  },
});


