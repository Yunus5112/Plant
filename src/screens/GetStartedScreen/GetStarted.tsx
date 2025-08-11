
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../../App';
import { SvgXml } from 'react-native-svg';
import getStartedSvg from '../../assets/GetStartedScreen/GetStartedScreenSvg';
import { styles } from './GetStarted.style';
import Button from '../../components/Button/Button';
import { texts } from './GetStarted.text';

export default function GetStarted() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <SafeAreaView style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>
        {texts.titlePrefix}
        <Text style={styles.titleHighlight}>{texts.titleBrand}</Text>
      </Text>
      <Text style={styles.subtitle}>{texts.subtitle}</Text>
      {/* SVG */}
      <View style={styles.imageWrapper}>
        <SvgXml xml={getStartedSvg} width="100%" height="100%" />
      </View>

      {/* Button */}
      <Button title={texts.cta} onPress={() => navigation.navigate('OnboardingFirst', {})} />

      {/* Footer Text */}
      <Text style={styles.footerText}>
        {texts.footer}{"\n"}
        <Text style={styles.link}>{texts.terms}</Text> & <Text style={styles.link}>{texts.privacy}</Text>.
      </Text>
    </SafeAreaView>
  );
}

 
