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

const EnterDOB = ({navigation}) => {
  const {t} = useTranslation();
  const lengthInput = 8;
  const [internalVal, setInternalVal] = useState('');

  let textInput = useRef(null);
  let clockCall = null;

  const onDOBChange = (value) => {
    if (isNaN(Number(value))) {
      // do nothing when a non digit is pressed
      return;
    }
    setInternalVal(value);
  };

  useEffect(() => {
    textInput.focus();
  }, []);

  const onPressContinue = () => {
    if (internalVal && internalVal.length > lengthInput - 1) {
      setInternalVal('');
      navigation.navigate('GenderSelection');
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
          {t('login:myDOB')}
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
        {/* DOB */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TextInput
            ref={(input) => (textInput = input)}
            onChangeText={onDOBChange}
            style={{
              width: 0,
              height: 0,
            }}
            value={internalVal}
            maxLength={lengthInput}
            returnKeyType="done"
            keyboardType="numeric"
            placeholder="DDMMYYYY"
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
                    paddingVertical: 1,
                    width: 20,
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
                      ...FONTS.body2,
                    }}
                    onPress={() => textInput.focus()}>
                    {internalVal && internalVal.length > 0
                      ? internalVal[index]
                      : ''}
                  </Text>
                </View>
              ))}
            <Text
              style={{
                color: COLORS.displayText,
                marginTop: SIZES.padding * 0,
                marginHorizontal: SIZES.padding,
                position: 'absolute',
                left: 50,
                top: 20,
                ...FONTS.body3,
              }}>
              {'/             /'}
            </Text>
          </View>
        </View>

        <Text
          style={{
            color: COLORS.displayText,
            marginTop: SIZES.padding2,
            marginHorizontal: SIZES.padding,
            textAlign: 'center',
            ...FONTS.body3,
          }}>
          DD/MM/YYYY
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
          marginTop: SIZES.padding2 * 2,
        }}>
        <TouchableOpacity
          style={{
            width: SIZES.width * 0.69,
            height: SIZES.height * 0.06,
            backgroundColor:
              internalVal && internalVal.length > lengthInput - 1
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
                internalVal && internalVal.length > lengthInput - 1
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

export default EnterDOB;
