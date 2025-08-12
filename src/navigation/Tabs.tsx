import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';
import HomeIcon from '../assets/Tabs/HomeIconSvg';
import DiagnoseIcon from '../assets/Tabs/DiagnoseIconSvg';
import GardenIcon from '../assets/Tabs/GardenIconSvg';
import ProfileIcon from '../assets/Tabs/ProfileIconSvg';
import ScanIcon from '../assets/Tabs/ScanIconSvg';
import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const DiagnoseScreen = () => (
  <View style={styles.center}><Text>Diagnose</Text></View>
);
const ScanScreen = () => (
  <View style={styles.center}><Text>Scan</Text></View>
);
const MyGardenScreen = () => (
  <View style={styles.center}><Text>My Garden</Text></View>
);
const ProfileScreen = () => (
  <View style={styles.center}><Text>Profile</Text></View>
);

type TabParamList = {
  Home: {};
  Diagnose: {};
  Scan: {};
  MyGarden: {};
  Profile: {};
};

const Tab = createBottomTabNavigator<TabParamList>();

function tintSvg(xml: string, color: string): string {
  // Replace stroke and fill colors except 'none'
  return xml
    .replace(/stroke="(?!none)[^"]+"/g, `stroke="${color}"`)
    .replace(/fill="(?!none)[^"]+"/g, `fill="${color}"`);
}

const CustomTabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.tabBar, { paddingBottom: Math.max(10, insets.bottom) }]}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name as never);
          }
        };

        if (route.name === 'Scan') {
          return (
            <View key={route.key} style={[styles.scanButtonWrapper, { marginBottom: insets.bottom }]}>
              <TouchableOpacity accessibilityRole="button" activeOpacity={0.9} onPress={onPress} style={styles.scanButton}>
                <SvgXml xml={tintSvg(ScanIcon, '#FFFFFF')} width={28} height={28} />
              </TouchableOpacity>
            </View>
          );
        }

        const iconMap: Record<string, string> = {
          Home: HomeIcon,
          Diagnose: DiagnoseIcon,
          MyGarden: GardenIcon,
          Profile: ProfileIcon,
        };
        const labelMap: Record<string, string> = {
          Home: 'Home',
          Diagnose: 'Diagnose',
          MyGarden: 'My Garden',
          Profile: 'Profile',
        };
        const xml = iconMap[route.name] ?? HomeIcon;
        const label = labelMap[route.name] ?? route.name;
        const tint = isFocused ? '#28AF6E' : '#A0ACA6';

        return (
          <TouchableOpacity key={route.key} accessibilityRole="button" activeOpacity={0.7} onPress={onPress} style={styles.tabButton}>
            <SvgXml xml={tintSvg(xml, tint)} width={22} height={22} />
            <Text style={{ color: tint, fontSize: 12, marginTop: 4 }}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default function Tabs() {
  return (
    <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />} screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Diagnose" component={DiagnoseScreen} />
      <Tab.Screen name="Scan" component={ScanScreen} />
      <Tab.Screen name="MyGarden" component={MyGardenScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  center: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  tabBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 0.5,
    borderTopColor: '#13231B1A',
  },
  tabButton: {
     flex: 1, 
     alignItems: 'center'
    },
  scanButtonWrapper: {
    width: 64,
    alignItems: 'center',
    marginTop: -24,
  },
  scanButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#28AF6E',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


