import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import {FONTS} from '../constants';

const ItemButton = ({
  icon,
  label,
  customContainerStyle,
  customIconStyle,
  customIconContainerStyle,
  customLabelStyle,
  onPress,
  resizeMode,
}) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        ...customContainerStyle,
      }}
      onPress={onPress}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          ...customIconContainerStyle,
        }}>
        <Image
          source={icon}
          resizeMode={resizeMode}
          style={{
            ...customIconStyle,
          }}
        />
      </View>
      <Text style={{textAlign: 'center', ...FONTS.body4, ...customLabelStyle}}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default ItemButton;
