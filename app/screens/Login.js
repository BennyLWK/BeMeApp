import React, {useContext, useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  Platform,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import auth from '@react-native-firebase/auth';

import {AnimatedBackground} from '../components';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';
import {AuthContext} from '../navigation/AuthProvider';

const Login = ({navigation}) => {
  const {t} = useTranslation();
  const {appleLogin, fbLogin, googleLogin} = useContext(AuthContext);

  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = (user) => {
    setUser(user);
    console.log('onAuthStateChanged => ' + user);

    if (user) {
      console.log('navigate to EnterPhoneNumber after login');
      navigation.navigate('EnterPhoneNumber');
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const LoginButton = ({
    customContainerStyle,
    customTextStyle,
    icon,
    label,
    onPress,
  }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        style={[styles.loginBtn, {...customContainerStyle}]}
        onPress={onPress}>
        <Image source={icon} style={styles.loginIcon} />
        <View style={styles.loginTextView}>
          <Text style={[styles.loginText, {...customTextStyle}]}>{label}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <AnimatedBackground />
      <ImageBackground source={images.white_bg} style={styles.backgroundImage}>
        <SafeAreaView style={styles.containerSafeArea}>
          {/* <HeaderBar /> */}
          <View style={styles.containerView}>
            <Image
              source={images.beme_logo}
              style={{
                width: SIZES.width * 0.38,
                height: SIZES.height * 0.06,
                marginTop:
                  SIZES.height > SIZES.deviceHeight ? 360 : SIZES.height * 0.4,
              }}
            />
            {/* Logo Text */}
            <Text style={styles.logoText}>{t('login:beautyMakeEasy')}</Text>

            <View style={styles.containerBottom}>
              {/* Login with Apple ID/Gmail */}
              <LoginButton
                customContainerStyle={{
                  backgroundColor: COLORS.titleBg,
                  marginBottom: SIZES.base,
                }}
                customTextStyle={{color: COLORS.textTitle}}
                label={
                  Platform.OS === 'ios'
                    ? t('login:appleLogin')
                    : t('login:googleLogin')
                }
                icon={Platform.OS === 'ios' ? icons.apple : icons.google}
                onPress={() => {
                  console.log('Apple/Google login');
                  Platform.OS === 'ios' ? appleLogin() : googleLogin();
                }}
              />

              {/* Login with Facebook */}
              <LoginButton
                customContainerStyle={{
                  backgroundColor: '#1977F3',
                  marginBottom: SIZES.base,
                }}
                label={t('login:fbLogin')}
                icon={icons.fb}
                onPress={() => {
                  console.log(t('login:fbLogin'));
                  fbLogin();
                }}
              />

              {/* Login with Phone Number */}
              <LoginButton
                customContainerStyle={{
                  backgroundColor: COLORS.primary,
                  marginBottom: SIZES.padding,
                }}
                label={t('login:phoneNumLogin')}
                icon={icons.phone}
                onPress={() => {
                  navigation.navigate('EnterPhoneNumber');
                }}
              />

              {/* Trouble Link */}
              <TouchableOpacity
                style={{marginBottom: SIZES.padding}}
                onPress={() => {
                  console.log(t('login:trouble'));
                  navigation.navigate('TroubleLogin', {
                    page: 'accountRecovery',
                    email: '',
                  });
                }}>
                <Text style={styles.troubleText}>{t('login:trouble')}</Text>
              </TouchableOpacity>

              {/* Remark */}
              <View style={styles.remarkView}>
                <Text style={styles.remarkText}>{t('login:loginRemark1')}</Text>
                <TouchableOpacity
                  onPress={() => console.log(t('login:termOfService'))}>
                  <Text style={styles.hyperlinkText}>
                    {t('login:termOfService')}
                  </Text>
                </TouchableOpacity>
                <Text style={styles.remarkText}>{t('login:loginRemark2')}</Text>
                <TouchableOpacity
                  onPress={() => console.log(t('login:privatePolicy'))}>
                  <Text style={styles.hyperlinkText}>
                    {t('login:privatePolicy')}
                  </Text>
                </TouchableOpacity>
                <Text style={styles.remarkText}>{t('login:loginRemark3')}</Text>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  modelImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  containerSafeArea: {
    flex: 1,
  },
  containerView: {
    flex: 1,
    alignItems: 'center',
  },
  logoText: {
    color: COLORS.textTitle,
    ...FONTS.body3,
  },
  containerBottom: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  loginBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: SIZES.radius,
    height: SIZES.height * 0.06,
    width: '69%',
  },
  loginIcon: {
    marginLeft: SIZES.padding * 2,
    marginRight: SIZES.padding,
    height: SIZES.width * 0.06,
    width: SIZES.width * 0.06,
    resizeMode: 'stretch',
  },
  loginTextView: {
    flex: 1,
  },
  loginText: {
    color: COLORS.white,
    textAlign: 'center',
    ...FONTS.body2,
  },
  troubleText: {
    color: COLORS.textTitle,
    ...FONTS.body4,
  },
  remarkView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '55%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  remarkText: {
    textAlign: 'center',
    ...FONTS.body5,
  },
  hyperlinkText: {...FONTS.body5, color: COLORS.primary, textAlign: 'center'},
});

export default Login;
