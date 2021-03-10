import React, {useMemo, useState, useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Animated, {Easing, stopClock} from 'react-native-reanimated';

import {images, SIZES} from '../constants';

const imageSize = {
  width: 2155,
  height: 132,
};

const animatedWidth = SIZES.width + imageSize.width;

const {
  useCode,
  block,
  set,
  Value,
  Clock,
  eq,
  clockRunning,
  not,
  cond,
  startClock,
  timing,
  interpolate,
  and,
} = Animated;

const runTiming = (clock) => {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0),
  };

  const config = {
    duration: 35000,
    toValue: 1,
    easing: Easing.inOut(Easing.linear),
  };

  return block([
    // we run the step here that is going to update position
    cond(
      not(clockRunning(clock)),
      set(state.time, 0),
      timing(clock, state, config),
    ),
    cond(eq(state.finished, 1), [
      set(state.finished, 0),
      set(state.position, 0),
      set(state.frameTime, 0),
      set(state.time, 0),
    ]),
    state.position,
  ]);
};

const AnimatedBackground = () => {
  const {progress, clock, isPlaying} = useMemo(
    () => ({
      progress: new Value(0),
      isPlaying: new Value(1),
      clock: new Clock(),
    }),
    [],
  );

  useEffect(() => {
    isPlaying.setValue(1);
  }, [isPlaying]);

  useCode(
    () =>
      block([
        cond(
          and(not(clockRunning(clock)), eq(isPlaying, 1)),
          startClock(clock),
        ),
        cond(and(clockRunning(clock), eq(isPlaying, 0)), stopClock(clock)),
        set(progress, runTiming(clock)),
      ]),
    [progress, clock],
  );

  const translateX = interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, -imageSize.width],
  });

  return (
    <View
      style={{
        height: SIZES.height > SIZES.deviceHeight ? 360 : SIZES.height * 0.4,
        position: 'absolute',
      }}>
      <Animated.View style={[styles.image, {transform: [{translateX}]}]}>
        <Image style={styles.image} source={images.model} resizeMode="cover" />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: animatedWidth,
    height: '100%',
  },
});

export default AnimatedBackground;
