import React, {useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  RefreshControl,
  FlatList,
  BackHandler,
  Alert,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import Carousel from 'react-native-banner-carousel';

import '../localization';
import {CustomCarousel, ItemButton} from '../components';
import {dummyData, icons, images, SIZES, COLORS, FONTS} from '../constants';

const Home = ({navigation}) => {
  const {t} = useTranslation();
  const highestRate = 5;
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {
    const backAction = () => {
      Alert.alert('', t('homePage:exitApp'), [
        {
          text: t('common:cancel'),
          onPress: () => null,
          style: 'cancel',
        },
        {text: t('common:yes'), onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

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
              <View style={{flex: 1}} />
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
    return (
      <CustomCarousel
        style="flatList"
        itemsPerInterval={1}
        items={[
          {
            id: 101,
            data: dummyData.categoryService1,
          },
          {
            id: 102,
            data: dummyData.categoryService2,
          },
        ]}
      />
    );
  }

  function renderScanEngine() {
    const renderItem = ({item}) => {
      return (
        <ItemButton
          customContainerStyle={{marginRight: SIZES.padding}}
          customIconStyle={{
            width: SIZES.width * 0.15,
            height: SIZES.width * 0.15,
          }}
          icon={item.icon}
          label={t(item.name)}
          onPress={() => console.log(t(item.name))}
          customLabelStyle={{
            width: SIZES.width * 0.25,
            marginTop: SIZES.padding,
            color: COLORS.subtitle,
          }}
        />
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

  function renderClinic() {
    const renderClinicItem = ({item}) => {
      return (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 5,
            paddingVertical: SIZES.base,
            borderColor: COLORS.titleBg,
            borderRadius: SIZES.base,
            borderWidth: 0.5,
            width: SIZES.width * 0.26,
          }}>
          {/* Image View */}
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              borderColor: COLORS.titleBg,
              borderRadius: 50,
              borderWidth: 1,
            }}>
            <Image
              source={item.img}
              style={{
                width: SIZES.width * 0.12,
                height: SIZES.width * 0.12,
              }}
            />
          </View>
          {/* Clinic Name */}
          <Text
            numberOfLines={2}
            style={{
              width: SIZES.width * 0.2,
              textAlign: 'center',
              color: COLORS.textTitle,
              ...FONTS.body5,
              lineHeight: SIZES.body3,
              marginTop: SIZES.base,
            }}>
            {item.name}
          </Text>
          {/* Rating View */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 5,
            }}>
            {Array(item.rate)
              .fill()
              .map((data, index) => (
                <View
                  key={index}
                  style={{
                    margin: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={icons.icn_rating_active}
                    resizeMode="contain"
                    style={{
                      width: 15,
                      height: 15,
                    }}
                  />
                </View>
              ))}
          </View>
          {/* Like View */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={{
                left: 7,
              }}
              onPress={() => {
                console.log('Likes ' + item.name + ' on pressed');
              }}>
              <Image
                source={item.liked ? icons.like_active : icons.like}
                resizeMode="contain"
                style={{
                  width: 15,
                  height: 15,
                }}
              />
            </TouchableOpacity>
            <Text
              numberOfLines={1}
              style={{
                width: SIZES.width * 0.15,
                textAlign: 'left',
                color: COLORS.textTitle,
                marginLeft: 12,
                ...FONTS.body5,
              }}>
              {item.likes} Likes
            </Text>
          </View>
        </View>
      );
    };

    return (
      <View
        style={{
          backgroundColor: COLORS.white,
          paddingBottom: SIZES.base,
          width: SIZES.width,
          marginLeft: -10,
        }}>
        <View
          style={{
            marginTop: SIZES.base,
            marginHorizontal: SIZES.padding,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            {/* Title View */}
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Image
                source={icons.icn_clinic}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                }}
              />
              <Text
                style={{
                  color: COLORS.textTitle,
                  marginLeft: SIZES.padding,
                  ...FONTS.body3,
                }}>
                {t('homePage:clinic')}
              </Text>
            </View>
            {/* More Button */}
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
              onPress={() => {
                console.log('More on Clinic pressed');
              }}>
              <Text
                style={{
                  color: COLORS.primary,
                  marginRight: 3,
                  ...FONTS.body4,
                }}>
                {t('homePage:more')}
              </Text>
              <Image
                source={icons.more}
                resizeMode="contain"
                style={{
                  width: 10,
                  height: 10,
                }}
              />
            </TouchableOpacity>
          </View>

          <View style={{marginTop: SIZES.base}}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={dummyData.clinic}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderClinicItem}
            />
          </View>
        </View>
      </View>
    );
  }

  function renderDoctor() {
    const renderDoctorItem = ({item}) => {
      return (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 5,
            paddingVertical: SIZES.base,
            borderColor: COLORS.titleBg,
            borderRadius: SIZES.base,
            borderWidth: 0.5,
            width: SIZES.width * 0.26,
          }}>
          {/* Image View */}
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              borderColor: COLORS.titleBg,
              borderRadius: 50,
              borderWidth: 1,
            }}>
            <Image
              source={item.img}
              style={{
                width: SIZES.width * 0.12,
                height: SIZES.width * 0.12,
              }}
            />
          </View>
          {/* Doctor Name */}
          <Text
            numberOfLines={1}
            style={{
              width: SIZES.width * 0.2,
              textAlign: 'center',
              color: COLORS.textTitle,
              ...FONTS.body5,
              lineHeight: SIZES.body3,
              marginTop: SIZES.base,
            }}>
            {item.name}
          </Text>
          {/* Doctor Description */}
          <Text
            numberOfLines={1}
            style={{
              width: SIZES.width * 0.2,
              textAlign: 'center',
              color: COLORS.subtitle,
              ...FONTS.body5,
              fontSize: SIZES.padding,
            }}>
            {item.description}
          </Text>
          {/* Rate */}
          <Text
            style={{
              textAlign: 'center',
              color: '#FFAC00',
              ...FONTS.title4,
            }}>
            {item.rate.toFixed(1)}
          </Text>
          {/* Rating View */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {/* Active */}
            {Array(item.rate)
              .fill()
              .map((data, index) => (
                <View
                  key={index}
                  style={{
                    margin: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={icons.icn_rating_active}
                    resizeMode="contain"
                    style={{
                      width: 15,
                      height: 15,
                    }}
                  />
                </View>
              ))}
            {/* Inactive */}
            {Array(highestRate - item.rate)
              .fill()
              .map((data, index) => (
                <View
                  key={index}
                  style={{
                    margin: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={icons.icn_rating_deactive}
                    resizeMode="contain"
                    style={{
                      width: 15,
                      height: 15,
                    }}
                  />
                </View>
              ))}
          </View>
        </View>
      );
    };

    return (
      <View
        style={{
          backgroundColor: COLORS.white,
          paddingBottom: SIZES.base,
          width: SIZES.width,
          marginLeft: -10,
          marginTop: SIZES.padding,
        }}>
        <View
          style={{
            marginTop: SIZES.base,
            marginHorizontal: SIZES.padding,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            {/* Title View */}
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Image
                source={icons.icn_doctor}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                }}
              />
              <Text
                style={{
                  color: COLORS.textTitle,
                  marginLeft: SIZES.padding,
                  ...FONTS.body3,
                }}>
                {t('homePage:doctor')}
              </Text>
            </View>
            {/* More Button */}
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
              onPress={() => {
                console.log('More on Doctor pressed');
              }}>
              <Text
                style={{
                  color: COLORS.primary,
                  marginRight: 3,
                  ...FONTS.body4,
                }}>
                {t('homePage:more')}
              </Text>
              <Image
                source={icons.more}
                resizeMode="contain"
                style={{
                  width: 10,
                  height: 10,
                }}
              />
            </TouchableOpacity>
          </View>

          <View style={{marginTop: SIZES.base}}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={dummyData.doctor}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderDoctorItem}
            />
          </View>
        </View>
      </View>
    );
  }

  function renderBanners() {
    const ImageTextButton = ({customContainerStyle, image, label, onPress}) => {
      return (
        <ItemButton
          customContainerStyle={{
            flex: 1,
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            ...customContainerStyle,
          }}
          customIconStyle={{
            width: '100%',
            height: '100%',
            borderRadius: SIZES.font,
          }}
          customIconContainerStyle={{
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            width: '100%',
            height: '100%',
            borderRadius: SIZES.font,
          }}
          customLabelStyle={{
            ...FONTS.body3,
            color: COLORS.textTitle,
            position: 'absolute',
            top: SIZES.base,
            left: SIZES.base,
          }}
          icon={image}
          label={t(label)}
          onPress={onPress}
        />
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
        {renderClinic()}
        {renderDoctor()}
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
          <View style={{marginBottom: SIZES.height * 0.12}} /> //Platform.OS == 'ios' ? 80 : 120}} />
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
