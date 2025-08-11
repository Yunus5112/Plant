import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 14,
    padding: 14,
    backgroundColor: '#FFFFFF0D',
    borderWidth: 0.5,
    borderColor: '#FFFFFF4D',
    position: 'relative',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textWrap: {
    flex: 1,
  },
  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FFFFFF4D',
    backgroundColor: '#FFFFFF26',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  },
  title: {
    color: '#FFFFFF',
    fontFamily: 'Rubik-Medium',
    fontSize: 16,
  },
  subtitle: {
    color: '#FFFFFFB2',
    fontFamily: 'Rubik-Light',
    marginTop: 8,
  },
  badge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#28AF6E',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderTopRightRadius: 14,
    borderBottomLeftRadius: 20,
  },
  badgeText: {
    color: '#FFFFFF',
    fontFamily:'Rubik-Medium',
    fontSize: 12,
  },
});


