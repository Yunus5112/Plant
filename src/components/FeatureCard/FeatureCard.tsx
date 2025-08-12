import React from 'react';
import { View, Text, StyleProp, ViewStyle, Dimensions } from 'react-native';
import { styles } from './FeatureCard.style';
import type { FeatureCardProps } from './FeatureCard.logic';

type Props = FeatureCardProps & { style?: StyleProp<ViewStyle> };

const DEFAULT_CARD_WIDTH = Math.round(Dimensions.get('window').width * 0.7);

const FeatureCard = ({ title, subtitle, icon, width, style }: Props) => {
  return (
    <View style={[styles.container, { width: width ?? DEFAULT_CARD_WIDTH }, style]}>
      {icon ? <View style={styles.iconContainer}>{icon}</View> : null}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

export default FeatureCard;


