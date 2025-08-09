import React from 'react';
import { Text, TouchableOpacity, ViewStyle, TextStyle, StyleProp } from 'react-native';
import { styles } from './Button.style';

type ButtonProps = {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export default function Button({ title, onPress, disabled = false, style, textStyle }: ButtonProps) {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      activeOpacity={0.8}
      style={[styles.button, disabled && styles.buttonDisabled, style]}
      onPress={disabled ? undefined : onPress}
    >
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

