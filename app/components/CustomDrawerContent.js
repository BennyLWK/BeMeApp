import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import {useTranslation} from 'react-i18next';

import {dummyData, COLORS, FONTS, SIZES} from '../constants';
import LanguageSelector from './LanguageSelector';

const CustomDrawerContent = ({navigation}) => {
  const {t} = useTranslation();

  const renderDrawerItem = ({item}) => (
    <TouchableOpacity
      style={styles.menuItem}
      onPress={() => {
        navigation.navigate(`${item.screenName}`, {isStatusBarHidden: false});
      }}>
      <View
        style={{
          height: 50,
          width: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={item.icon}
          resizeMode="contain"
          style={{
            height: 30,
            width: 30,
          }}
        />
      </View>
      <Text numberOfLines={2} style={styles.menuItemText}>
        {t(item.name)}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={dummyData.sideMenu}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderDrawerItem}
      />
      <LanguageSelector />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuItem: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SIZES.padding * 2,
  },
  menuItemText: {
    color: COLORS.textTitle,
    width: 100,
    textAlign: 'center',
    ...FONTS.body3,
  },
});

export default CustomDrawerContent;
