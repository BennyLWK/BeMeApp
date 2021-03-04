@echo Init project in Window PC

call yarn install

set mypath=%cd%

call copy /Y %mypath%\init\rn-banner-carousel\Carousel.js %mypath%\node_modules\react-native-banner-carousel\out\Carousel.js

@echo 'Done'

pause