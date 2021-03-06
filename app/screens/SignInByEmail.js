import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  TextInput,
  Modal,
  FlatList,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import LinearGradient from 'react-native-linear-gradient';

import {HeaderBar} from '../components';
import {COLORS, SIZES, FONTS, icons} from '../constants';

const SignInByEmail = ({navigation}) => {
  let textInput = useRef(null);

  const {t} = useTranslation();
  const maxLengthEmail = 320;
  const [areas, setAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [focusInput, setFocusInput] = useState(true);
  const [email, setEmail] = useState();
  const [errorValidate, setErrorValidate] = useState(true);
  const [errorMsg, setErrorMsg] = useState(t('troubleLogin:emailSignInInfo'));

  const onChangeEmail = (email) => {
    email.replace(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, '');
    setEmail(email);
    setErrorValidate(true);
    setErrorMsg(t('troubleLogin:emailSignInInfo'));
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
        navigation.navigate('TroubleLogin', {
          page: 'CheckYourEmail',
          email: email,
        });
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
  }, []);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then((response) => response.json())
      .then((data) => {
        let areaData = data.map((item) => {
          return {
            code: item.alpha2Code,
            name: item.name,
            callingCode: `+${item.callingCodes[0]}`,
            flag: `https://www.countryflags.io/${item.alpha2Code}/flat/64.png`,
          };
        });

        setAreas(areaData);

        if (areaData.length > 0) {
          let defaultData = areaData.filter((a) => a.code == 'MY');

          if (defaultData.length > 0) {
            setSelectedArea(defaultData[0]);
          }
        }
      });
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
          {t('troubleLogin:signInByEmail')}
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
            placeholder={t('troubleLogin:enterEmail')}
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
        {/*</View>*/}

        {/* Error Message */}
        <Text
          style={{
            color: errorValidate ? COLORS.displayText : COLORS.errorMsg,
            marginTop: SIZES.base,
            marginHorizontal: SIZES.padding,
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
          marginTop: SIZES.padding2 * 4,
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

  function renderAreaCodesModal() {
    const renderItem = ({item}) => {
      return (
        <TouchableOpacity
          style={{padding: SIZES.padding, flexDirection: 'row'}}
          onPress={() => {
            setSelectedArea(item);
            setModalVisible(false);
          }}>
          <Image
            source={{uri: item.flag}}
            style={{
              width: 30,
              height: 30,
              marginRight: 10,
            }}
          />
          <Text style={{...FONTS.body4}}>{item.name}</Text>
        </TouchableOpacity>
      );
    };

    return (
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View
              style={{
                height: 400,
                width: SIZES.width * 0.8,
                backgroundColor: COLORS.titleBg,
                borderRadius: SIZES.radius,
              }}>
              <FlatList
                data={areas}
                renderItem={renderItem}
                keyExtractor={(item) => item.code}
                showsVerticalScrollIndicator={false}
                style={{
                  padding: SIZES.padding * 2,
                  marginBottom: SIZES.padding * 2,
                }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
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
      {renderAreaCodesModal()}
    </KeyboardAvoidingView>
  );
};

export default SignInByEmail;
