import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

export default class example extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>BEME Home Page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
});
