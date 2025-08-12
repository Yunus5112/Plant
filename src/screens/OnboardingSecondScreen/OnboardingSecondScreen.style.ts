import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontFamily: 'Rubik-Medium',
    color: "#13231B",
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  titleHighlight: {
    fontFamily: 'Rubik-Bold',
  },
  imageWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    marginTop: 20,
    position: 'relative',
    overflow: 'visible',
  },
  blurLeaf: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  plantsDeck: {
    position: 'absolute',
    right: 24,
    top: 36,
  },
  ctaWrapper: {
    marginTop: -24,
  },
});


