
import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../../App";
import { SvgXml } from "react-native-svg";
import { styles } from "./OnboardingFirstScreen.style";
import Button from "../../components/Button/Button";
import onboardingFirstScreenSvg from "../../assets/OnboardingFirstScreen/OnboardingSFirstScreenSvg";

export default function OnboardingFirst() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <SafeAreaView style={styles.container}>
      {/* Üst Başlık */}
      <Text style={styles.title}>
       Take a photo to <Text style={styles.titleHighlight}>identify {"\n"}<Text style={styles.title}>the plant!</Text></Text>
      </Text>
     
      {/* Bitki Görseli (SVG) */}
      <View style={styles.imageWrapper}>
        <SvgXml xml={onboardingFirstScreenSvg} width="100%" height="100%" />
      </View>

      {/* Buton */}
      <Button title="Continue" onPress={() => navigation.navigate("OnboardingSecond")} />

    </SafeAreaView>
  );
}

 
