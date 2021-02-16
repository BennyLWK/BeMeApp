import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import '../localization';
import {useTranslation} from 'react-i18next';
import LanguageSelector from './LanguageSelector';

const Home = ({navigation}) => {
  const {t} = useTranslation();
  console.log(t);
  return (
    <View style={styles.container}>
      <LanguageSelector />
      <Text>{t('homePage:welcome')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});

export default Home;
