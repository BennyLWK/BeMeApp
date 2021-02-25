import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {useTranslation} from 'react-i18next';

import {HeaderBar} from '../components';

const Booking = ({navigation}) => {
  const {t} = useTranslation();

  return (
    <SafeAreaView style={styles.containerSafeArea}>
      <HeaderBar />
      <View style={styles.container}>
        <Text>{t('common:booking')}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerSafeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Booking;
