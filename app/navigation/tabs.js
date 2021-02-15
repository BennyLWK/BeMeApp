import React from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';

import {AskDoctor, Discover, Home, Inbox, Profile} from '../screens';
import {COLORS, FONTS, icons} from '../constants';

const Tab = createBottomTabNavigator();

const Tabs = () => {
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
          height: 100,
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
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? COLORS.primary : COLORS.textTitle,
                }}
              />
              <Text
                style={{
                  color: focused ? COLORS.primary : COLORS.textTitle,
                  ...FONTS.body5,
                }}>
                Home
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
                source={focused ? icons.discover_active : icons.discover_active}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? COLORS.primary : COLORS.textTitle,
                }}
              />
              <Text
                style={{
                  color: focused ? COLORS.primary : COLORS.textTitle,
                  ...FONTS.body5,
                }}>
                Discover
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Aks Doctor"
        component={AskDoctor}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={focused ? icons.doctor_active : icons.doctor}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? COLORS.primary : COLORS.textTitle,
                }}
              />
              <Text
                style={{
                  color: focused ? COLORS.primary : COLORS.textTitle,
                  ...FONTS.body5,
                }}>
                Aks Doctor
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={focused ? icons.inbox_active : icons.inbox}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? COLORS.primary : COLORS.textTitle,
                }}
              />
              <Text
                style={{
                  color: focused ? COLORS.primary : COLORS.textTitle,
                  ...FONTS.body5,
                }}>
                Inbox
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
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? COLORS.primary : COLORS.textTitle,
                }}
              />
              <Text
                style={{
                  color: focused ? COLORS.primary : COLORS.textTitle,
                  ...FONTS.body5,
                }}>
                My Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default Tabs;
