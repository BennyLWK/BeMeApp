import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
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

const TroubleLogin = ({navigation, route}) => {
  const {t} = useTranslation();
  const [AccountRecoveryInfo] = useState(t('troubleLogin:accountRecovery'));
  const [selectedArea, setSelectedArea] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const email = route.params.email;
  let isAccountRecovery = route.params.page == 'accountRecovery' ? true : false;

  const onPressSignInWithEmail = () => {
    navigation.navigate(isAccountRecovery ? 'SignInByEmail' : 'Login');
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
          {isAccountRecovery == true
            ? t('troubleLogin:accountRecovery')
            : t('checkYourEmail:checkYourEmail')}
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
          }}></View>

        {/* Account Recovery Info */}
        <Text
          style={{
            ...FONTS.body2,
            color: COLORS.displayText,
            textAlign: 'center',
          }}>
          {isAccountRecovery == true
            ? t('troubleLogin:accRecoveryInfo')
            : t('checkYourEmail:confirmationEmail1') +
              email +
              t('checkYourEmail:confirmationEmail2')}
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
            backgroundColor: COLORS.primary,
            borderRadius: SIZES.radius,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={onPressSignInWithEmail}>
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.body1,
            }}>
            {isAccountRecovery == true
              ? t('troubleLogin:signInWithEmail')
              : t('checkYourEmail:OK')}
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

export default TroubleLogin;
