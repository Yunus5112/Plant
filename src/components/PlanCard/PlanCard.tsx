import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './PlanCard.style';
import type { PlanCardProps } from './PlanCard.logic';

const PlanCard: React.FC<PlanCardProps> = ({ plan, selected, onSelect }) => {
  const content = (
    <>
      <View style={styles.row}>
        <View
          style={[
            styles.radioOuter,
            selected && { borderColor: '#28AF6E', borderWidth:2, backgroundColor: '#28AF6E' },
          ]}
        >
          {selected ? <View style={styles.radioInner} /> : null}
        </View>
        <View style={styles.textWrap}>
          <Text style={styles.title}>{plan.title}</Text>
          {plan.subtitle ? <Text style={styles.subtitle}>{plan.subtitle}</Text> : null}
          {plan.priceNote ? <Text style={styles.subtitle}>{plan.priceNote}</Text> : null}
        </View>
        {plan.badgeText ? (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{plan.badgeText}</Text>
          </View>
        ) : null}
      </View>
    </>
  );

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={() => onSelect(plan.id)}>
      <View style={[styles.container, selected && { borderWidth: 1.5, borderColor: '#28AF6E' }]}>{content}</View>
    </TouchableOpacity>
  );
};

export default PlanCard;


