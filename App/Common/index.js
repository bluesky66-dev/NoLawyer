import {heightPercentageToDP, widthPercentageToDP} from 'react-native-responsive-screen';

export const heightPercentage = dimension => {
    return heightPercentageToDP(dimension / 812 * 100);
};

export const widthPercentage = dimension => {
    return widthPercentageToDP(dimension / 375 * 100);
};
