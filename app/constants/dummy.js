import icons from './icons';
import {useTranslation} from 'react-i18next';

export const model = [
  {
    id: 1,
    image: require('../assets/images/model01.png'),
  },
  {
    id: 2,
    image: require('../assets/images/model02.png'),
  },
  {
    id: 3,
    image: require('../assets/images/model03.png'),
  },
  {
    id: 4,
    image: require('../assets/images/model04.png'),
  },
  {
    id: 5,
    image: require('../assets/images/model05.png'),
  },
  {
    id: 6,
    image: require('../assets/images/model06.png'),
  },
  {
    id: 7,
    image: require('../assets/images/model07.png'),
  },
  {
    id: 8,
    image: require('../assets/images/model08.png'),
  },
  {
    id: 9,
    image: require('../assets/images/model09.png'),
  },
  {
    id: 10,
    image: require('../assets/images/model10.png'),
  },
  {
    id: 11,
    image: require('../assets/images/model11.png'),
  },
  {
    id: 12,
    image: require('../assets/images/model12.png'),
  },
  {
    id: 13,
    image: require('../assets/images/model13.png'),
  },
  {
    id: 14,
    image: require('../assets/images/model14.png'),
  },
];

export const categoryScanEngine = [
  {
    id: 1,
    name: 'homePage:mirrorFaceMeasurement',
    icon: icons.face_analysis,
  },
  {
    id: 2,
    name: 'homePage:threeDImage',
    icon: icons.threeD,
  },
  {
    id: 3,
    name: 'homePage:starFace',
    icon: icons.star_face,
  },
  {
    id: 4,
    name: 'homePage:skinDetection',
    icon: icons.skin_analysis,
  },
  {
    id: 5,
    name: 'homePage:mirrorFaceMeasurement',
    icon: icons.face_analysis,
  },
  {
    id: 6,
    name: 'homePage:threeDImage',
    icon: icons.threeD,
  },
];

const categoryService = [
  {
    id: 1,
    name: 'homePage:hyaluronicAcid',
    icon: icons.hyaluronic,
  },
  {
    id: 2,
    name: 'homePage:faceLift',
    icon: icons.face_lift,
  },
  {
    id: 3,
    name: 'homePage:breasts',
    icon: icons.breasts,
  },
  {
    id: 4,
    name: 'homePage:eye',
    icon: icons.eye,
  },
  {
    id: 5,
    name: 'homePage:nose',
    icon: icons.nose,
  },
  {
    id: 6,
    name: 'homePage:dentalBeauty',
    icon: icons.dental,
  },
  {
    id: 7,
    name: 'homePage:skinBeauty',
    icon: icons.skin,
  },
  {
    id: 8,
    name: 'homePage:fatFilling',
    icon: icons.fat_filling,
  },
  {
    id: 9,
    name: 'homePage:hairGrowth',
    icon: icons.hair,
  },
  {
    id: 10,
    name: 'homePage:laserHairRemoval',
    icon: icons.laser_hair,
  },
  {
    id: 11,
    name: 'homePage:ear',
    icon: icons.ear,
  },
  {
    id: 12,
    name: 'homePage:privateSurgery',
    icon: icons.private_surgery,
  },
  {
    id: 13,
    name: 'homePage:facialContour',
    icon: icons.facial,
  },
  {
    id: 14,
    name: 'homePage:bodyShaping',
    icon: icons.body,
  },
  {
    id: 15,
    name: 'homePage:lipSurgery',
    icon: icons.lip_surgery,
  },
  {
    id: 16,
    name: 'homePage:semiMakeup',
    icon: icons.semi_makeup,
  },
  {
    id: 17,
    name: 'homePage:medicalHealth',
    icon: icons.medical_health,
  },
  {
    id: 18,
    name: 'homePage:antiAging',
    icon: icons.anti_aging,
  },
  {
    id: 19,
    name: 'homePage:other',
    icon: icons.other,
  },
];

const dummyData = {
  categoryService,
  categoryScanEngine,
  model,
};

export default dummyData;
