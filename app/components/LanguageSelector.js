import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useTranslation} from 'react-i18next';

import {COLORS, SIZES} from '../constants';

const LANGUAGES = [
  {lngCode: 'en', label: 'English'},
  {lngCode: 'zh', label: '中文'},
];

const LanguageSelector = () => {
  const {i18n} = useTranslation();
  const selectedLngCode = i18n.language;
  const setLng = (lngCode) => i18n.changeLanguage(lngCode);
  return (
    <View style={styles.container}>
      {LANGUAGES.map((l) => {
        const selected = l.lngCode === selectedLngCode;
        return (
          <TouchableOpacity
            onPress={() => setLng(l.lngCode)}
            key={l.lngCode}
            disabled={selected}>
            <View style={[styles.row, selected ? styles.selectedRow : {}]}>
              <Text style={[selected ? styles.selectedText : styles.text]}>
                {l.label}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default LanguageSelector;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    flexDirection: 'row',
    height: SIZES.height * 0.05,
    width: SIZES.width * 0.4,
  },
  select: {
    fontSize: SIZES.body3,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SIZES.width * 0.2,
  },
  selectedRow: {
    backgroundColor: COLORS.primary,
  },
  selectedText: {
    color: COLORS.white,
  },
  text: {
    color: COLORS.primary,
  },
});
