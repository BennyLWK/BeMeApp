import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import LinearGradient from 'react-native-linear-gradient';

import {HeaderBar} from '../components';
import {COLORS, SIZES, FONTS} from '../constants';

const GenderSelection = ({navigation}) => {
  const {t} = useTranslation();
  const [female, setFemale] = useState(false);
  const [male, setMale] = useState(false);
  const [selected, setSelected] = useState(false);

  const onPressContinue = () => {
    navigation.navigate('App');
  };

  function renderInstruction() {
    return (
      <View
        style={{
          marginTop: SIZES.height * 0.26,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{...FONTS.body1, color: COLORS.textTitle}}>
          {t('login:iAmA')}
        </Text>
      </View>
    );
  }

  function renderForm() {
    return (
      <View
        style={{
          justifyContent: 'center',
          marginTop: SIZES.padding * 4,
          marginHorizontal: SIZES.padding * 4,
          alignSelf: 'center',
        }}>
        <TouchableOpacity
          style={{
            width: SIZES.width * 0.69,
            height: SIZES.height * 0.06,
            borderColor: female ? COLORS.primary : COLORS.displayText,
            borderRadius: SIZES.radius,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
            marginBottom: SIZES.padding,
          }}
          onPress={() => {
            setMale(false);
            setFemale(true);
            setSelected(true);
          }}>
          <Text
            style={{
              color: female ? COLORS.primary : COLORS.displayText,
              ...FONTS.body1,
              textAlign: 'center',
            }}>
            {t('login:woman')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: SIZES.width * 0.69,
            height: SIZES.height * 0.06,
            borderColor: male ? COLORS.primary : COLORS.displayText,
            borderRadius: SIZES.radius,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
          }}
          onPress={() => {
            setFemale(false);
            setMale(true);
            setSelected(true);
          }}>
          <Text
            style={{
              color: male ? COLORS.primary : COLORS.displayText,
              ...FONTS.body1,
              textAlign: 'center',
            }}>
            {t('login:man')}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  function renderFooterButton() {
    return (
      <View style={{alignItems: 'center', marginBottom: SIZES.height * 0.08}}>
        <TouchableOpacity
          style={{
            width: SIZES.width * 0.69,
            height: SIZES.height * 0.06,
            backgroundColor: selected ? COLORS.primary : COLORS.titleBg,
            borderRadius: SIZES.radius,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={onPressContinue}>
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.body1,
              textAlign: 'center',
            }}>
            {t('login:continue')}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1}}>
      <LinearGradient colors={[COLORS.white, COLORS.white]} style={{flex: 1}}>
        <ScrollView>
          <HeaderBar
            customContainerStyle={{
              marginTop: Platform.OS === 'ios' ? SIZES.padding * 5 : 0,
            }}
          />
          {renderInstruction()}
          {renderForm()}
        </ScrollView>
        {renderFooterButton()}
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

export default GenderSelection;
