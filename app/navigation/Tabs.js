import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTranslation} from 'react-i18next';

import {AskDoctor, Discover, Home, Promotion, Profile} from '../screens';
import {COLORS, FONTS, icons, SIZES} from '../constants';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const {t} = useTranslation();

  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: COLORS.white,
          borderTopColor: 'transparent',
          height: SIZES.height * 0.11,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={focused ? icons.home_active : icons.home}
                resizeMode="contain"
                style={[styles.imageStyle]}
              />
              <Text
                style={[
                  styles.textStyle,
                  {
                    color: focused ? COLORS.primary : COLORS.textTitle,
                  },
                ]}>
                {t('common:home')}
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Promotion"
        component={Promotion}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={focused ? icons.promotion_active : icons.promotion}
                resizeMode="contain"
                style={[styles.imageStyle]}
              />
              <Text
                style={[
                  styles.textStyle,
                  {
                    color: focused ? COLORS.primary : COLORS.textTitle,
                  },
                ]}>
                {t('common:promotion')}
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Ask Doctor"
        component={AskDoctor}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={focused ? icons.doctor_active : icons.doctor}
                resizeMode="contain"
                style={[styles.imageStyle]}
              />
              <Text
                style={[
                  styles.textStyle,
                  {
                    color: focused ? COLORS.primary : COLORS.textTitle,
                  },
                ]}>
                {t('common:askDoctor')}
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={focused ? icons.discover_active : icons.discover}
                resizeMode="contain"
                style={[styles.imageStyle]}
              />
              <Text
                style={[
                  styles.textStyle,
                  {
                    color: focused ? COLORS.primary : COLORS.textTitle,
                  },
                ]}>
                {t('common:discover')}
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="My Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={focused ? icons.profile_active : icons.profile}
                resizeMode="contain"
                style={[styles.imageStyle]}
              />
              <Text
                style={[
                  styles.textStyle,
                  {
                    color: focused ? COLORS.primary : COLORS.textTitle,
                  },
                ]}>
                {t('common:profile')}
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: SIZES.width * 0.07,
    height: SIZES.width * 0.07,
  },
  textStyle: {
    textAlign: 'center',
    width: SIZES.width * 0.2,
    ...FONTS.body5,
  },
});

export default Tabs;
