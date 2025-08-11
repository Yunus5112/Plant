
import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../../App";
import { SvgXml } from "react-native-svg";
import { styles } from "./OnboardingFirstScreen.style";
import Button from "../../components/Button/Button";
import onboardingFirstScreenSvg from "../../assets/OnboardingFirstScreen/OnboardingSFirstScreenSvg";
import Dots from "../../components/Dots/Dots";
import { texts } from './OnboardingFirstScreen.text';

export default function OnboardingFirst() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <SafeAreaView style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>
        {texts.titleLine1}
        <Text style={styles.titleHighlight}>{texts.highlight}</Text>
        {"\n"}
        <Text style={styles.title}>{texts.titleLine2}</Text>
      </Text>
     
      {/* SVG */}
      <View style={styles.imageWrapper}>
        <SvgXml xml={onboardingFirstScreenSvg} width="100%" height="100%" />
      </View>

      {/* Button */}
      <Button title={texts.cta} onPress={() => navigation.navigate('OnboardingSecond', {})} />
      <Dots total={3} activeIndex={0} />

    </SafeAreaView>
  );
}

 
