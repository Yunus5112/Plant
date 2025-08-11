import React from 'react';
import { SafeAreaView, Text, View, ScrollView, Image } from 'react-native';
import { styles } from './HomeScreen.style';
import { useCategories, useQuestions } from './HomeScreen.logic';
import { SvgXml } from 'react-native-svg';
import leftLeaf from '../../assets/HomeScreen/LeftLeafSvg';
import rightLeaf from '../../assets/HomeScreen/RightLeafSvg';
import letterIcon from '../../assets/HomeScreen/LetterIconSvg';

const HomeScreen: React.FC = () => {
  const { data: questions } = useQuestions();
  const { data: categories } = useCategories();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerWrap}>
          <Text style={styles.title}>Hi, plant lover!</Text>
          <Text style={styles.subtitle}>Good Afternoon!</Text>
          <View style={styles.searchWrap}>
            <SvgXml xml={leftLeaf} width="40%" height="100%" style={styles.searchLeavesLeft} />
            <SvgXml xml={rightLeaf} width="40%" height="100%" style={styles.searchLeavesRight} />
            <View style={styles.searchInputContainer}>
              <Text style={styles.searchPlaceholder}>Search for plants</Text>
            </View>
          </View>
        </View>

        <View style={styles.bannerWrap}>
          <View style={styles.banner}>
            <SvgXml xml={letterIcon} width={28} height={28} style={styles.bannerIcon} />
            <View style={styles.bannerTextWrap}>
              <Text style={styles.bannerTitle}>FREE Premium Available</Text>
              <Text style={styles.bannerSubtitle}>Tap to upgrade your account!</Text>
            </View>
            <Text style={styles.bannerChevron}>›</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Get Started</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 12 }} style={{ paddingHorizontal: 16 }}>
          {questions?.map((q) => (
            <View key={q.id} style={styles.questionCard}>
              <Image source={{ uri: q.image_uri }} style={{ width: '100%', height: '100%' }} />
              <View style={styles.questionOverlay}>
                <Text style={styles.questionTitle}>{q.title}</Text>
              </View>
            </View>
          ))}
        </ScrollView>

        <View style={styles.categoriesGrid}>
          {categories?.map((c) => (
            <View key={c.id} style={styles.categoryItem}>
              <Text style={styles.categoryTitle}>{c.title}</Text>
              <Image source={{ uri: c.imageUrl }} style={styles.categoryImage} />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;


