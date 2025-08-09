import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GetStarted from './src/screens/GetStartedScreen/GetStarted';
import OnboardingFirst from './src/screens/OnboardingFirstScreen/OnboardingFirstScreen';

export type RootStackParamList = {
  GetStarted: undefined;
  OnboardingFirst: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GetStarted" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="OnboardingFirst" component={OnboardingFirst} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
