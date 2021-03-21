import icons from './icons';
import images from './images';

const model = [
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

const categoryScanEngine = [
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

const categoryService1 = [
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
];

const categoryService2 = [
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

const advertisement = [
  {
    id: 1,
    img: images.banner1,
    title: 'common:adTitle1',
    clinic: 'common:adClinic1',
    oriPrice: 'common:adOriPrice1',
    newPrice: 'common:adNewPrice1',
    place: 'common:adPlace1',
  },
  {
    id: 2,
    img: images.banner2,
    title: 'common:adTitle2',
    clinic: 'common:adClinic2',
    oriPrice: 'common:adOriPrice2',
    newPrice: 'common:adNewPrice2',
    place: 'common:adPlace2',
  },
  {
    id: 3,
    img: images.banner3,
    title: 'common:adTitle3',
    clinic: 'common:adClinic3',
    oriPrice: 'common:adOriPrice3',
    newPrice: 'common:adNewPrice3',
    place: 'common:adPlace3',
  },
  {
    id: 4,
    img: images.banner4,
    title: 'common:adTitle4',
    clinic: 'common:adClinic4',
    oriPrice: null,
    newPrice: 'common:adNewPrice4',
    place: 'common:adPlace4',
  },
];

const sideMenu = [
  {
    id: 1,
    name: 'common:myBooking',
    icon: icons.btn_booking,
    screenName: 'Booking',
  },
  {
    id: 2,
    name: 'common:writeDiary',
    icon: icons.btn_diary,
    screenName: 'Booking',
  },
  {
    id: 3,
    name: 'common:blogging',
    icon: icons.btn_blogging,
    screenName: 'Booking',
  },
  {
    id: 4,
    name: 'common:askQuestion',
    icon: icons.btn_question,
    screenName: 'Booking',
  },
  {
    id: 5,
    name: 'common:applyCert',
    icon: icons.btn_verify,
    screenName: 'Booking',
  },
];

const clinic = [
  {
    id: 1,
    name: 'DR.KO Skin Specialist',
    img: images.clinic1,
    rate: 4,
    likes: 888,
    liked: false,
  },
  {
    id: 2,
    name: 'Kalo Cosmetic Surgery',
    img: images.clinic2,
    rate: 3,
    likes: 4576,
    liked: false,
  },
  {
    id: 3,
    name: 'Promenade Plastic Surgery',
    img: images.clinic3,
    rate: 5,
    likes: 124,
    liked: true,
  },
  {
    id: 4,
    name: 'DR.KO Skin Specialist',
    img: images.clinic1,
    rate: 2,
    likes: 333,
    liked: false,
  },
];

const doctor = [
  {
    id: 1,
    name: 'Dr. Jest Wong',
    description: 'Jest Experct Clinic',
    img: images.doctor1,
    rate: 5,
  },
  {
    id: 2,
    name: 'Dr. Eric Wong',
    description: 'Eric Plastic Surgery Clinic',
    img: images.doctor2,
    rate: 3,
  },
  {
    id: 3,
    name: 'Dr. Sam Winchester',
    description: 'Sam Experct Clinic',
    img: images.doctor3,
    rate: 4,
  },
  {
    id: 4,
    name: 'Dr. Jack Liew',
    description: 'Jack Plastic Surgery',
    img: images.doctor1,
    rate: 5,
  },
];

const dummyData = {
  advertisement,
  categoryService1,
  categoryService2,
  categoryScanEngine,
  model,
  sideMenu,
  clinic,
  doctor,
};

export default dummyData;
