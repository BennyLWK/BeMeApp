import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {COLORS, SIZES, icons} from '../constants';

const HeaderBar = ({customContainerStyle, onBackPress, right}) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        paddingHorizontal: SIZES.padding,
        paddingTop: SIZES.padding,
        flexDirection: 'row',
        ...customContainerStyle,
      }}>
      <View style={{flex: 1, alignItems: 'flex-start'}}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={() => {
            {
              onBackPress && onBackPress();
            }
            navigation.goBack();
          }}>
          <Image
            source={icons.back}
            resizeMode="contain"
            style={{
              width: 25,
              height: 25,
              tintColor: COLORS.textTitle,
            }}
          />
        </TouchableOpacity>
      </View>

      {right && (
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <TouchableOpacity>
            <Image
              source={icons.star}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
              }}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default HeaderBar;
