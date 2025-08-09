
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../../App';
import { SvgXml } from 'react-native-svg';
import getStartedSvg from '../../assets/GetStartedScreen/GetStartedScreenSvg';
import { styles } from './GetStarted.style';
import Button from '../../components/Button/Button';

export default function GetStarted() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <SafeAreaView style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>
        Welcome to <Text style={styles.titleHighlight}>PlantApp</Text>
      </Text>
      <Text style={styles.subtitle}>
        Identify more than 3000+ plants and{"\n"}88% accuracy.
      </Text>
      {/* SVG */}
      <View style={styles.imageWrapper}>
        <SvgXml xml={getStartedSvg} width="100%" height="100%" />
      </View>

      {/* Button */}
      <Button title="Get Started" onPress={() => navigation.navigate('OnboardingFirst')} />

      {/* Footer Text */}
      <Text style={styles.footerText}>
        By tapping next, you are agreeing to PlantID{"\n"}
        <Text style={styles.link}>Terms of Use</Text> &{" "}
        <Text style={styles.link}>Privacy Policy</Text>.
      </Text>
    </SafeAreaView>
  );
}

 
