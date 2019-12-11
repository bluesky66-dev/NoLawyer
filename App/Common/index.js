import {heightPercentageToDP, widthPercentageToDP} from 'react-native-responsive-screen';
import Assistant from './Assistant';
import _AssistantIds from './AssistantIds';

export const heightPercentage = dimension => {
    return heightPercentageToDP(dimension / 620 * 100);
};

export const widthPercentage = dimension => {
    return widthPercentageToDP(dimension / 360 * 100);
};

export const EstonAssistant = Assistant;
export const AssistantIds = _AssistantIds;
