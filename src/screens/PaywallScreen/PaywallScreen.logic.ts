import { Dimensions } from 'react-native';
import type { Plan } from '../../components/PlanCard/PlanCard.logic';

export const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const CARD_SPACING = 12;
export const FEATURE_CARD_WIDTH = Math.round(screenWidth * 0.4);
export const FEATURE_SNAP_INTERVAL = FEATURE_CARD_WIDTH + CARD_SPACING;

export const HEADER_TOP_OFFSET = Math.round(screenHeight * 0.3);

export const getDefaultFeatures = () => [
  { id: 'f1', title: 'Unlimited', subtitle: 'Plant Identify' },
  { id: 'f2', title: 'Faster', subtitle: 'Process' },
  { id: 'f3', title: 'Detailed', subtitle: 'Plant care' },
];

export const getDefaultPlans = (): Plan[] => [
  { id: 'month', title: '1 Month', subtitle: '$2.99/month, auto renewable' },
  { id: 'year', title: '1 Year', subtitle: 'First 3 days free, then $29.99/year', badgeText: 'Save 50%' },
];


