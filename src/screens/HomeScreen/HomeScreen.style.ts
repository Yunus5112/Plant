import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7F6',
  },
  headerWrap: {
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    color: '#13231B',
    fontFamily: 'Rubik',
  },
  subtitle: {
    fontSize: 24,
    fontWeight: '500',
    fontFamily: 'Rubik',
    color: '#13231B',
    marginTop: 4,
    marginBottom: 12,
  },
  searchWrap: {
    position: 'relative',
    height: 64,
    justifyContent: 'center',
    marginBottom: 16,
  },
  searchLeavesLeft: {
    position: 'absolute',
    left: 0,
    top: -18,
    height: '140%',
  },
  searchLeavesRight: {
    position: 'absolute',
    right: 0,
    top: -18,
    height: '140%',
  },
  searchInputContainer: {
    height: 48,
    backgroundColor: '#FFFFFFE0',
    borderRadius: 12,
    borderWidth:1,
    borderColor: '#3C3C4340',
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  searchPlaceholder: {
    color: '#AFAFAF',
    fontSize: 15.5,
    fontWeight: '400',
    fontFamily: 'Rubik',
  },
  bannerWrap: {
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  banner: {
    backgroundColor: '#24201A',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bannerIcon: {
    marginRight: 12,
  },
  bannerTextWrap: {
    flex: 1,
  },
  bannerTitle: {
    color: '#E4B046',
    fontSize: 16,
    fontWeight: '700',
  },
  bannerSubtitle: {
    color: '#F5C25B',
    fontSize: 13,
    fontWeight: '400',
    
    marginTop: 2,
  },
  bannerChevron: {
    color: '#D0B070',
    height: 24,
    width: 24,
    marginLeft: 8,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#13231B',
    marginTop: 16,
    marginBottom: 8,
    paddingHorizontal: 16,
  },
  questionCard: {
    width: 240,
    height: 164,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF1A',
  },
  questionOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: 12,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  questionTitle: {
    color: '#FFFFFF',
    fontFamily: 'Rubik-Regular',
    fontSize: 15,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    paddingHorizontal: 16,
    marginTop:24,
  },
  categoryItem: {
    width: '48%',
    height: 150,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    position: 'relative',
  },
  categoryTitle: {
    position: 'absolute',
    top: 12,
    left: 12,
    color: '#13231B',
    fontFamily: 'Rubik-Medium',
    fontSize: 16,
  },
  categoryImage: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
});


