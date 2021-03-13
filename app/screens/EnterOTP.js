import React, {useEffect, useRef, useState} from 'react';
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
import {COLORS, SIZES, FONTS} from '../constants';

const EnterOTP = ({navigation}) => {
  const {t} = useTranslation();
  const defaultCountdown = 60;
  const lengthInput = 6;
  const [internalVal, setInternalVal] = useState('');
  const [countdown, setCountdown] = useState(defaultCountdown);
  const [enableResend, setEnableResend] = useState(false);

  let textInput = useRef(null);
  let clockCall = null;

  useEffect(() => {
    clockCall = setInterval(() => {
      decrementClock();
    }, 1000);
    return () => {
      clearInterval(clockCall);
    };
  });

  const decrementClock = () => {
    if (countdown === 0) {
      setEnableResend(true);
      setCountdown(0);
      clearInterval(clockCall);
    } else {
      setCountdown(countdown - 1);
    }
  };

  const onOtpChange = (value) => {
    if (isNaN(Number(value))) {
      // do nothing when a non digit is pressed
      return;
    }
    setInternalVal(value);
  };

  const onResendOTP = () => {
    if (enableResend) {
      setCountdown(defaultCountdown);
      setEnableResend(false);
      clearInterval(clockCall);
      clockCall = setInterval(() => {
        decrementClock();
      }, 1000);
    }
  };

  useEffect(() => {
    textInput.focus();
  }, []);

  const onPressContinue = () => {
    if (internalVal && internalVal.length > 5) {
      setInternalVal('');
      navigation.navigate('EnterEmail');
    }
  };

  function renderInstruction() {
    return (
      <View
        style={{
          marginTop: SIZES.padding * 5,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{...FONTS.body1, color: COLORS.textTitle}}>
          {t('login:enterOTP')}
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
        {/* OTP */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TextInput
            ref={(input) => (textInput = input)}
            onChangeText={onOtpChange}
            style={{width: 0, height: 0}}
            value={internalVal}
            maxLength={lengthInput}
            returnKeyType="done"
            keyboardType="numeric"
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {Array(lengthInput)
              .fill()
              .map((data, index) => (
                <View
                  key={index}
                  style={{
                    backgroundColor: COLORS.titleBg,
                    paddingVertical: 1,
                    width: 40,
                    height: 50,
                    margin: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderBottomWidth: 1.5,
                    borderBottomColor:
                      index === internalVal.length
                        ? COLORS.primary
                        : COLORS.displayText,
                  }}>
                  <Text
                    style={{
                      textAlign: 'justify',
                      alignItems: 'flex-end',
                      justifyContent: 'flex-end',
                      paddingTop: 10,
                      ...FONTS.body6,
                    }}
                    onPress={() => textInput.focus()}>
                    {internalVal && internalVal.length > 0
                      ? internalVal[index]
                      : ''}
                  </Text>
                </View>
              ))}
          </View>
        </View>
        {/* Resend Button & Countdown Timer View */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: SIZES.padding2,
          }}>
          <View style={{}}>
            <Text
              style={{
                alignItems: 'center',
                color: COLORS.subtitle,
                ...FONTS.body3,
              }}>
              {new Date(1000 * countdown).toISOString().substr(14, 5)}
            </Text>
          </View>
          {/* Resend Button */}
          <TouchableOpacity onPress={onResendOTP}>
            <View
              style={{
                alignItems: 'center',
                marginLeft: SIZES.base,
              }}>
              <Text
                style={{
                  alignItems: 'center',
                  color: enableResend ? COLORS.primary : COLORS.displayText,
                  ...FONTS.body3,
                }}>
                {t('login:resend')}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderButton() {
    return (
      <View
        style={{
          alignItems: 'center',
          flex: 1,
          marginTop: SIZES.padding2 * 2,
        }}>
        <TouchableOpacity
          style={{
            width: SIZES.width * 0.69,
            height: SIZES.height * 0.06,
            backgroundColor:
              internalVal && internalVal.length > 5
                ? COLORS.primary
                : '#EFEFEF',
            borderRadius: SIZES.radius,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={onPressContinue}>
          <Text
            style={{
              color:
                internalVal && internalVal.length > 5
                  ? COLORS.white
                  : COLORS.displayText,
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

export default EnterOTP;
