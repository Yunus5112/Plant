
import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../../App";
import { SvgXml } from "react-native-svg";
import phoneSvg from "../../assets/OnboardingSecondScreen/PhoneSvg";
import blurLeafSvg from "../../assets/OnboardingSecondScreen/BlurLeafSvg";
import plantsSvg from "../../assets/OnboardingSecondScreen/PlantsSvg";
import { styles } from "./OnboardingSecondScreen.style";
import Button from "../../components/Button/Button";
import Dots from "../../components/Dots/Dots";
import { texts } from './OnboardingSecondScreen.text';


export default function OnboardingSecond() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <SafeAreaView style={styles.container}>
      {/* Üst Başlık */}
      <Text style={styles.title}>
        {texts.titlePrefix}
        <Text style={styles.titleHighlight}>{texts.highlight}</Text>
      </Text>
     
      {/* Görseller */}
      <View style={styles.imageWrapper}>
        <SvgXml xml={blurLeafSvg} width="100%" height="100%" style={styles.blurLeaf} />
        <SvgXml xml={phoneSvg} width="100%" height="100%" />
        {/* <SvgXml xml={plantsSvg} width={170} height={150} style={styles.plantsDeck} /> */}
      </View>

       {/* Button */}
       <View style={styles.ctaWrapper}>
         <Button title={texts.cta} onPress={() => navigation.navigate('Paywall', {})} />
       </View>
       <Dots total={3} activeIndex={1} />

    </SafeAreaView>
  );
}

 
