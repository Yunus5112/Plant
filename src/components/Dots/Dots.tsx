import React from 'react';
import { View } from 'react-native';
import { styles } from './Dots.style';
import type { DotsProps } from './Dots.logic';
import { getDotStyles } from './Dots.logic';

const Dots = ({ total, activeIndex }: DotsProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.dotsRow}>
        {Array.from({ length: total }).map((_, index) => {
          const { isActive } = getDotStyles(index, activeIndex);
          return <View key={index} style={[styles.dot, isActive && styles.dotActive]} />;
        })}
      </View>
    </View>
  );
};

export default Dots;


