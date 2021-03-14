import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import LinearGradient from 'react-native-linear-gradient';

import {HeaderBar} from '../components';
import {COLORS, SIZES, FONTS, icons} from '../constants';
import {AuthContext} from '../navigation/AuthProvider';

const EnterEmail = ({navigation}) => {
  let textInput = useRef(null);

  const {t} = useTranslation();
  const {user} = useContext(AuthContext);
  const maxLengthEmail = 320;
  const [focusInput, setFocusInput] = useState(true);
  const [email, setEmail] = useState();
  const [errorValidate, setErrorValidate] = useState(true);
  const [errorMsg, setErrorMsg] = useState(t('login:emailGuideline'));

  const onChangeEmail = (email) => {
    email.replace(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, '');
    setEmail(email);
    setErrorValidate(true);
    setErrorMsg(t('login:emailGuideline'));
  };

  const onPressContinue = () => {
    if (email) {
      if (emailValidation(email) === false) {
        setEmail('');
        setErrorMsg(t('errorMessage:invalidEmail'));
        setErrorValidate(false);
      } else {
        setErrorValidate(true);
        console.log('Email: ' + email);
        navigation.navigate('GenderSelection');
      }
    }
  };

  const onChangeFocus = () => {
    setFocusInput(true);
  };

  const onChangeBlur = () => {
    setFocusInput(false);
  };

  useEffect(() => {
    textInput.focus();
    {
      user && user.email ? setEmail(user.email) : null;
    }
  }, []);

  function emailValidation(email) {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email) === false) {
      return false;
    } else {
      return true;
    }
  }

  function renderInstruction() {
    return (
      <View
        style={{
          marginTop: SIZES.padding * 5,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{...FONTS.body1, color: COLORS.textTitle}}>
          {t('login:enterEmail')}
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
        }}>
        {/* Email */}
        <View
          style={{
            flexDirection: 'row',
          }}>
          {/* Email input */}
          <TextInput
            ref={(input) => (textInput = input)}
            style={{
              flex: 1,
              borderBottomColor: focusInput
                ? COLORS.primary
                : COLORS.displayText,
              borderBottomWidth: 1,
              height: 50,
              color: COLORS.subtitle,
              paddingBottom: 0,
              ...FONTS.body2,
            }}
            keyboardType="email-address"
            placeholder={t('login:enterEmail')}
            maxLength={maxLengthEmail}
            placeholderTextColor={COLORS.displayText}
            selectionColor={COLORS.white}
            value={email}
            onChangeText={onChangeEmail}
            secureTextEntry={false}
            onFocus={onChangeFocus}
            onBlur={onChangeBlur}
            autoFocus={focusInput}
          />
        </View>

        {/* Error Message */}
        <Text
          style={{
            color: errorValidate ? COLORS.displayText : COLORS.errorMsg,
            marginTop: SIZES.base,
            marginHorizontal: SIZES.padding,
            height: SIZES.padding2 * 4,
            ...FONTS.body3,
          }}>
          {errorMsg}
        </Text>
      </View>
    );
  }

  function renderButton() {
    return (
      <View
        style={{
          alignItems: 'center',
          flex: 1,
          marginTop: SIZES.padding2 * 1,
        }}>
        <TouchableOpacity
          style={{
            width: SIZES.width * 0.69,
            height: SIZES.height * 0.06,
            backgroundColor: email ? COLORS.primary : '#EFEFEF',
            borderRadius: SIZES.radius,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={onPressContinue}>
          <Text
            style={{
              color: email ? COLORS.white : COLORS.displayText,
              ...FONTS.body1,
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
          {renderButton()}
        </ScrollView>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

export default EnterEmail;
