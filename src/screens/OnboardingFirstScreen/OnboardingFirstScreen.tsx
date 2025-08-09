import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { styles } from './OnboardingFirstScreen.style';
import Button from '../../components/Button/Button';

export default function OnboardingFirstScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Onboarding 1</Text>
        <Text style={styles.subtitle}>Introduce your app benefits here.</Text>
      </View>
      <Button title="Next" onPress={() => {}} />
    </SafeAreaView>
  );
}


