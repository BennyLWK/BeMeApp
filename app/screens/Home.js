import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  RefreshControl,
  FlatList,
  Platform,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import Carousel from 'react-native-banner-carousel';

import '../localization';
import {dummyData, icons, images, SIZES, COLORS, FONTS} from '../constants';

const Home = ({navigation}) => {
  const {t} = useTranslation();

  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  // Render
  function renderHeader() {
    return (
      <View style={{flexDirection: 'row', height: 50}}>
        {/* Location */}
        <TouchableOpacity
          style={{
            paddingLeft: SIZES.padding * 2,
            justifyContent: 'center',
          }}
          onPress={() => {
            console.log('location press');
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Text
              numberOfLines={1}
              style={{color: COLORS.textTitle, width: 60, ...FONTS.body4}}>
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
            }}
            onPress={() => {
              console.log('Search press');
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
                <Text style={{color: COLORS.white, ...FONTS.body5}}>
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
          }}
          onPress={() => {
            console.log('Side menu clicked');
            navigation.openDrawer();
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
    const renderItem = ({item}) => (
      <TouchableOpacity
        style={{
          marginBottom: SIZES.padding,
          width: 80,
          alignItems: 'center',
        }}
        onPress={() => console.log(t(item.name))}>
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
            ...FONTS.body4,
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
        style={{backgroundColor: COLORS.white, marginHorizontal: -10}}
      />
    );
  }

  function renderScanEngine() {
    const renderItem = ({item}) => {
      return (
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: SIZES.padding,
          }}
          onPress={() => console.log(t(item.name))}
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
              ...FONTS.body4,
            }}>
            {t(item.name)}
          </Text>
        </TouchableOpacity>
      );
    };

    return (
      <View style={{backgroundColor: COLORS.base}}>
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

  function renderBannerAdPage(item, index) {
    return (
      <View key={index}>
        <TouchableOpacity
          onPress={() => {
            console.log('Banner Advertisement: ' + t(item.title));
            navigation.navigate('Discover');
          }}>
          <Image
            style={{width: '100%', height: '100%', borderRadius: SIZES.font}}
            source={item.img}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderBanners() {
    const ImageTextButton = ({customContainerStyle, image, label, onPress}) => {
      return (
        <TouchableOpacity
          style={{flex: 1, ...customContainerStyle}}
          onPress={onPress}>
          <View
            style={{
              width: '100%',
              height: '100%',
              borderRadius: SIZES.font,
            }}>
            <Image
              source={image}
              resizeMode="cover"
              style={{
                width: '100%',
                height: '100%',
                borderRadius: SIZES.font,
              }}
            />
            <Text
              style={{
                ...FONTS.body3,
                color: COLORS.textTitle,
                position: 'absolute',
                top: SIZES.base,
                left: SIZES.base,
              }}>
              {t(label)}
            </Text>
          </View>
        </TouchableOpacity>
      );
    };

    return (
      <View style={{height: SIZES.width / 2 - 15 + 160}}>
        <View
          style={{
            flexDirection: 'row',
            height: '100%',
          }}>
          {/* Banner Advertisement */}
          <View
            style={{
              backgroundColor: COLORS.titleBg,
              borderRadius: SIZES.font,
              flex: 1.0,
            }}>
            <Carousel
              autoplay
              autoplayTimeout={5000}
              loop
              index={0}
              activePageIndicatorStyle={{backgroundColor: COLORS.white}}
              pageIndicatorStyle={{backgroundColor: COLORS.white, opacity: 0.4}}
              pageSize={SIZES.width / 2 - 15}>
              {dummyData.advertisement.map((item, index) =>
                renderBannerAdPage(item, index),
              )}
            </Carousel>
          </View>

          {/* Right View */}
          <View style={{flex: 1, marginLeft: SIZES.padding}}>
            {/* Organizations */}
            <ImageTextButton
              image={images.organizations}
              label={'homePage:proOrganizations'}
              onPress={() => console.log('homePage:proOrganizations')}
            />

            {/* Doctor */}
            <ImageTextButton
              customContainerStyle={{marginTop: SIZES.padding}}
              image={images.elite_doctor}
              label={'homePage:eliteDoctors'}
              onPress={() => console.log('homePage:eliteDoctors')}
            />
          </View>
        </View>
      </View>
    );
  }

  function renderComponents() {
    const HeaderComponent = () => (
      <View>
        {renderService()}
        {renderScanEngine()}
        {renderBanners()}
      </View>
    );

    const renderAdItem = ({item}) => (
      <TouchableOpacity
        style={{
          marginTop: SIZES.padding,
          width: SIZES.width / 2 - 15,
        }}
        onPress={() => console.log(t(item.title))}>
        {/*Ad Image*/}
        <View
          style={{
            height: SIZES.width / 2 - 15,
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
            backgroundColor: COLORS.titleBg,
          }}>
          <Image
            source={item.img}
            resizeMode="contain"
            style={{
              width: '100%',
              height: '100%',
              borderTopLeftRadius: SIZES.font,
              borderTopRightRadius: SIZES.font,
            }}
          />
        </View>

        {/*Ad Info*/}
        <View
          style={{
            padding: SIZES.padding,
            backgroundColor: COLORS.white,
            borderBottomLeftRadius: SIZES.font,
            borderBottomRightRadius: SIZES.font,
          }}>
          {/* Title */}
          <Text
            numberOfLines={2}
            style={{
              ...FONTS.body4,
              color: COLORS.textTitle,
              height: SIZES.radius * 2,
            }}>
            {t(item.title)}
          </Text>
          {/* Clinic */}
          <Text
            style={{
              ...FONTS.body5,
              color: COLORS.subtitle,
              marginTop: SIZES.base,
            }}>
            {t(item.clinic)}
          </Text>
          {/* Price */}
          <View style={{flexDirection: 'row', marginTop: SIZES.base}}>
            <Text style={{...FONTS.body5, color: COLORS.primary}}>RM</Text>
            <Text
              style={{
                ...FONTS.title3,
                color: COLORS.primary,
                paddingLeft: 3,
              }}>
              {t(item.newPrice)}
            </Text>
            {item.oriPrice && item.oriPrice.length > 0 ? (
              <Text
                style={{
                  ...FONTS.body5,
                  paddingLeft: SIZES.base,
                  textDecorationLine: 'line-through',
                }}>
                RM{t(item.oriPrice)}
              </Text>
            ) : null}
          </View>

          {/* Place */}
          <Text
            style={{
              ...FONTS.body5,
              color: COLORS.subtitle,
              marginTop: SIZES.base,
            }}>
            {t(item.place)}
          </Text>
        </View>
      </TouchableOpacity>
    );

    return (
      <FlatList
        ListHeaderComponent={HeaderComponent}
        contentContainerStyle={{
          backgroundColor: COLORS.base,
          paddingHorizontal: SIZES.padding,
        }}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        data={dummyData.advertisement}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderAdItem}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
        ListFooterComponent={
          <View style={{marginBottom: Platform.OS == 'ios' ? 80 : 120}}></View>
        }
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      {renderHeader()}

      {/*Component*/}
      {renderComponents()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});

export default Home;
