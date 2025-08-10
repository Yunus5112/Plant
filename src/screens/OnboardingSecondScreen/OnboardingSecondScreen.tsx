
import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../../App";
import { SvgXml } from "react-native-svg";
import phoneSvg from "../../assets/OnboardingSecondScreen/PhoneSvg";
import { styles } from "./OnboardingSecondScreen.style";
import Button from "../../components/Button/Button";
import Dots from "../../components/Dots/Dots";


export default function OnboardingSecond() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <SafeAreaView style={styles.container}>
      {/* Üst Başlık */}
      <Text style={styles.title}>
       Get plant <Text style={styles.titleHighlight}>care guides</Text>
      </Text>
     
      {/* Bitki Görseli (SVG) */}
      <View style={styles.imageWrapper}>
        <SvgXml xml={phoneSvg} width="100%" height="100%" />
      </View>

       {/* Button */}
       <Button title="Continue" onPress={() => navigation.navigate('Paywall', {})} />
       <Dots total={3} activeIndex={1} />

    </SafeAreaView>
  );
}

 
