import React, { useMemo, useState } from 'react';
import { SafeAreaView, Text, View, ScrollView } from 'react-native';
import { SvgXml } from 'react-native-svg';
import paywallScreenSvg from '../../assets/PaywallScreen/PaywallScreenSvg';
import FeatureCard from '../../components/FeatureCard/FeatureCard';
import PlanCard from '../../components/PlanCard/PlanCard';
import type { Plan } from '../../components/PlanCard/PlanCard.logic';
import Button from '../../components/Button/Button';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../../App';
import { styles } from './PaywallScreen.style';
import {
  CARD_SPACING,
  FEATURE_CARD_WIDTH,
  FEATURE_SNAP_INTERVAL,
  getDefaultFeatures,
  getDefaultPlans,
  HEADER_TOP_OFFSET,
} from './PaywallScreen.logic';

const PaywallScreen: React.FC = () => {
  const [selectedPlanId, setSelectedPlanId] = useState<string>('year');
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const features = useMemo(() => getDefaultFeatures(), []);

  const plans: Plan[] = useMemo(() => getDefaultPlans(), []);

  return (
    <SafeAreaView style={styles.container}>
      {/* Background image */}
      <View style={styles.backgroundWrapper}>
        <SvgXml xml={paywallScreenSvg} width="100%" height="65%" preserveAspectRatio="xMidYMid slice" />
      </View>

      {/* Foreground content */}
      <View style={[styles.content, { paddingTop: HEADER_TOP_OFFSET }]}>
        <Text style={styles.headerTitle}>PlantApp <Text style={{ fontWeight: '400' }}>Premium</Text></Text>
        <Text style={styles.headerSubtitle}>Access All Features</Text>

        {/* Feature cards - horizontal carousel */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
          snapToInterval={FEATURE_SNAP_INTERVAL}
          decelerationRate="fast"
        >
          {features.map((item, index) => (
            <View key={item.id} style={{ marginRight: index === features.length - 1 ? 0 : CARD_SPACING }}>
              <FeatureCard title={item.title} subtitle={item.subtitle} width={FEATURE_CARD_WIDTH} />
            </View>
          ))}
        </ScrollView>

        {/* Plans */}
        <View style={{ gap: 12, marginTop: 2 }}>
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} selected={selectedPlanId === plan.id} onSelect={setSelectedPlanId} />
          ))}
        </View>

        <Button title="Try free for 3 days" onPress={() => navigation.navigate('Tabs', {})} />

        {/* Footer links (static text for now) */}
        <Text style={styles.footerNote}>
          After the 3-day free trial period you'll be charged $27.49 per year unless you cancel before the trial expires. Yearly subscription is Auto-Renewable.
        </Text>
        <View style={styles.footerLinksRow}>
          <Text style={styles.footerLink}>Terms</Text>
          <View style={styles.dotSeparator} />
          <Text style={styles.footerLink}>Privacy</Text>
          <View style={styles.dotSeparator} />
          <Text style={styles.footerLink}>Restore</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PaywallScreen;


