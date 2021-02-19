import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import '../localization';
import {useTranslation} from 'react-i18next';
import LanguageSelector from './LanguageSelector';

import {dummyData, icons, images, SIZES, COLORS, FONTS} from '../constants';

const Home = ({navigation}) => {
  const {t} = useTranslation();

  const [selectedCategory, setSelectedCategory] = React.useState(null);

  // Render
  function renderHeader() {
    return (
      <View style={{flexDirection: 'row', height: 50}}>
        {/* Location */}
        <TouchableOpacity
          style={{
            paddingLeft: SIZES.padding * 2,
            justifyContent: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Text
              numberOfLines={1}
              style={{color: COLORS.textTitle, width: 70, ...FONTS.body3}}>
              {t('homePage:malaysia')}
            </Text>
            <Image
              source={icons.down_arrow}
              style={{
                height: 20,
                width: 20,
              }}
            />
          </View>
        </TouchableOpacity>

        {/* Search Bar */}
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: SIZES.padding,
          }}>
          <TouchableOpacity
            style={{
              width: '90%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: SIZES.radius,
              borderWidth: 1,
              borderColor: COLORS.primary,
            }}>
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: SIZES.padding,
              }}>
              <Image
                source={icons.search}
                style={{
                  width: 20,
                  height: 20,
                  marginRight: SIZES.base,
                }}
              />
              <Text
                style={{
                  color: COLORS.displayText,
                  marginRight: SIZES.base,
                  ...FONTS.body3,
                }}>
                {t('homePage:faceLift')}
              </Text>
              <View
                style={{
                  backgroundColor: COLORS.primary,
                  borderRadius: SIZES.radius,
                  paddingHorizontal: SIZES.padding,
                }}>
                <Text style={{color: COLORS.white, ...FONTS.body3}}>
                  {t('homePage:popular')}
                </Text>
              </View>
              <View style={{flex: 1}}></View>
            </View>
          </TouchableOpacity>
        </View>

        {/* Side Menu */}
        <TouchableOpacity
          style={{
            width: 50,
            paddingRight: SIZES.padding,
            justifyContent: 'center',
          }}>
          <Image
            source={icons.btn_Menu}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderService() {
    const Header = () => (
      <View style={{marginBottom: SIZES.padding * 2}}>
        <Text style={{...FONTS.h3}}>Features</Text>
      </View>
    );

    const renderItem = ({item}) => (
      <TouchableOpacity
        style={{
          marginBottom: SIZES.padding,
          width: 80,
          alignItems: 'center',
        }}
        onPress={() => console.log(item.description)}>
        <View
          style={{
            height: 50,
            width: 50,
            marginBottom: 5,
            borderRadius: 20,
            backgroundColor: item.backgroundColor,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={item.icon}
            resizeMode="contain"
            style={{
              height: 30,
              width: 30,
              tintColor: item.color,
            }}
          />
        </View>
        <Text
          style={{
            color: COLORS.textTitle,
            textAlign: 'center',
            flexWrap: 'wrap',
            ...FONTS.body5,
          }}>
          {t(item.name)}
        </Text>
      </TouchableOpacity>
    );

    return (
      <FlatList
        //ListHeaderComponent={Header}
        //horizontal
        data={dummyData.categoryService}
        numColumns={5}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        style={{backgroundColor: COLORS.white, marginTop: SIZES.padding * 2}}
      />
    );
  }

  function renderScanEngine() {
    const renderItem = ({item}) => {
      return (
        <TouchableOpacity
          style={{
            //paddingBottom: SIZES.padding,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: SIZES.padding,
            //...styles.shadow,
          }}
          onPress={() => console.log(item)}
          //onSelectCategory(item)
        >
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={item.icon}
              resizeMode="contain"
              style={{
                width: 50,
                height: 50,
              }}
            />
          </View>

          <Text
            numberOfLines={2}
            style={{
              textAlign: 'center',
              width: 80,
              marginTop: SIZES.padding,
              color: COLORS.subtitle,
              ...FONTS.body5,
            }}>
            {t(item.name)}
          </Text>
        </TouchableOpacity>
      );
    };

    return (
      <View style={{backgroundColor: COLORS.base, padding: SIZES.padding}}>
        <FlatList
          data={dummyData.categoryScanEngine}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
          contentContainerStyle={{paddingVertical: SIZES.padding}}
        />
      </View>
    );
  }

  function renderBanners() {
    return (
      <View style={{height: 450, backgroundColor: COLORS.base}}>
        {/* <View
          style={{
            flex: 1,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: COLORS.white,
          }}> */}
        <View
          style={{
            marginTop: SIZES.font,
            marginHorizontal: SIZES.padding,
          }}>
          <View
            style={{
              flexDirection: 'row',
              height: '88%',
              marginTop: SIZES.base,
            }}>
            <View style={{backgroundColor: COLORS.primary, flex: 1.3}}>
              <TouchableOpacity
                style={{flex: 1, marginLeft: SIZES.font}}
                onPress={() => {
                  //navigation.navigate('PlantDetail');
                }}>
                <Image
                  source={images.beme_banner}
                  resizeMode="contain"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 20,
                  }}
                />
              </TouchableOpacity>
            </View>

            <View style={{flex: 1}}>
              <TouchableOpacity
                style={{flex: 1}}
                onPress={() => {
                  //navigation.navigate('PlantDetail');
                }}>
                <Image
                  source={images.organizations}
                  resizeMode="contain"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 20,
                  }}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{flex: 1, marginTop: SIZES.font}}
                onPress={() => {
                  //navigation.navigate('PlantDetail');
                }}>
                <Image
                  source={images.elite_doctor}
                  resizeMode="contain"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 20,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* </View> */}
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      {renderHeader()}

      <ScrollView
        contentContainerStyle={{paddingBottom: 100}}
        style={{backgroundColor: COLORS.base}}>
        {renderService()}

        {renderScanEngine()}

        {renderBanners()}
        <LanguageSelector />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});

export default Home;
