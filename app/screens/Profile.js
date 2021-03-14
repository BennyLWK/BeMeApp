import React, {useContext} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {useTranslation} from 'react-i18next';
import {COLORS, FONTS, icons, SIZES} from '../constants';
import {AuthContext} from '../navigation/AuthProvider';

const Profile = ({navigation}) => {
  const {t} = useTranslation();
  const {user, logout} = useContext(AuthContext);

  const LogoutButton = ({
    customContainerStyle,
    customTextStyle,
    label,
    onPress,
  }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        style={[styles.logoutBtn, {...customContainerStyle}]}
        onPress={onPress}>
        <View style={styles.logoutTextView}>
          <Text style={[styles.logoutText, {...customTextStyle}]}>{label}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {user && user.displayName ? <Text>Name: {user.displayName}</Text> : null}
      {user && user.email ? <Text>Email: {user.email}</Text> : null}
      <LogoutButton
        customContainerStyle={{
          backgroundColor: COLORS.primary,
          marginTop: SIZES.padding2 * 5,
        }}
        label={t('common:logout')}
        onPress={() => {
          console.log('Logout');
          logout();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: SIZES.radius,
    height: SIZES.height * 0.06,
    width: '69%',
  },
  logoutTextView: {
    flex: 1,
  },
  logoutText: {
    color: COLORS.white,
    textAlign: 'center',
    ...FONTS.body2,
  },
});

export default Profile;
