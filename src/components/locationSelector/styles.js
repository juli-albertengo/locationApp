import { StyleSheet } from 'react-native';
import COLORS  from '../../constants/colors';

export const styles = StyleSheet.create({
    subTitle: {
        fontFamily: 'Quicksand-Bold',
        fontWeight: 'bold',
        fontSize: 16,
        color: COLORS.black,
        margin: 24,
    },
    buttonContainer: {
        margin: 24,
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 12,
        backgroundColor: COLORS.primaryColor,
        alignSelf: 'center',
    },
    buttonText: {
        fontFamily: 'Quicksand-Bold',
        fontWeight: 'bold',
        color: COLORS.white,
        alignSelf: 'center',
    },
});
