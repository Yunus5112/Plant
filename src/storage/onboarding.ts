import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'onboardingCompleted';

export async function setOnboardingCompleted(completed: boolean): Promise<void> {
  try {
    await AsyncStorage.setItem(KEY, completed ? '1' : '0');
  } catch {
    // noop
  }
}

export async function getOnboardingCompleted(): Promise<boolean> {
  try {
    const v = await AsyncStorage.getItem(KEY);
    return v === '1';
  } catch {
    return false;
  }
}


