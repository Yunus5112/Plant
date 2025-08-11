import React from 'react';
import { View, Text, StyleProp, ViewStyle, Dimensions } from 'react-native';
import { styles } from './FeatureCard.style';
import type { FeatureCardProps } from './FeatureCard.logic';

type Props = FeatureCardProps & { style?: StyleProp<ViewStyle> };

const DEFAULT_CARD_WIDTH = Math.round(Dimensions.get('window').width * 0.7);

const FeatureCard: React.FC<Props> = ({ title, subtitle, icon, width, style }) => {
  return (
    <View style={[styles.container, { width: width ?? DEFAULT_CARD_WIDTH }, style]}>
      <View style={styles.row}>
        {icon ? <View style={styles.icon}>{icon}</View> : null}
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

export default FeatureCard;


