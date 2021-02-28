import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {useTranslation} from 'react-i18next';
import moment from 'moment';

import {COLORS, SIZES} from '../constants';
import {ItemButton} from './index';

export const FlatListView = (props: any) => {
  const {data} = props;
  const {t, i18n} = useTranslation();
  const selectedLngCode = i18n.language;

  const renderItem = ({item}) => (
    <ItemButton
      customContainerStyle={{
        justifyContent: 'flex-start',
        marginBottom: SIZES.padding,
        width: SIZES.width * 0.19,
      }}
      customIconStyle={{
        width: SIZES.width * 0.11,
        height: SIZES.width * 0.11,
      }}
      customLabelStyle={{color: COLORS.textTitle}}
      icon={item.icon}
      label={t(item.name)}
      onPress={() => console.log(t(item.name))}
    />
  );
  return (
    <View
      style={[
        styles.slide,
        {
          height:
            selectedLngCode === 'zh'
              ? SIZES.height * 0.2
              : SIZES.height < 668
              ? SIZES.height * 0.37
              : SIZES.height * 0.3,
        },
      ]}>
      <FlatList
        data={data}
        numColumns={5}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        keyExtractor={(item) => `menu${item.id}`}
        listKey={moment().valueOf().toString()}
        renderItem={renderItem}
        style={{backgroundColor: COLORS.white, marginHorizontal: -10}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    paddingHorizontal: SIZES.padding,
    flexBasis: '100%',
    flex: 1,
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
});

export default FlatListView;
