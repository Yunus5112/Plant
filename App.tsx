import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import GetStarted from './src/screens/GetStartedScreen/GetStarted';
import OnboardingFirst from './src/screens/OnboardingFirstScreen/OnboardingFirstScreen';
import OnboardingSecond from './src/screens/OnboardingSecondScreen/OnboardingSecondScreen';
import Paywall from './src/screens/PaywallScreen/PaywallScreen';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import Tabs from './src/navigation/Tabs';

export type RootStackParamList = {
  GetStarted: {};
  OnboardingFirst: {};
  OnboardingSecond: {};
  Paywall: {};
  Home: {};
  Tabs: {};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="GetStarted" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="GetStarted" component={GetStarted} />
          <Stack.Screen name="OnboardingFirst" component={OnboardingFirst} />
          <Stack.Screen name="OnboardingSecond" component={OnboardingSecond} />
          <Stack.Screen name="Paywall" component={Paywall} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Tabs" component={Tabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
