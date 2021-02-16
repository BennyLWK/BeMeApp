import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {useTranslation} from 'react-i18next';

const AskDoctor = ({navigation}) => {
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <Text>{t('common:askDoctor')}</Text>
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

export default AskDoctor;
