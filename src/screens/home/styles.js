import { StyleSheet } from 'react-native';
import COLORS  from '../../constants/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontFamily: 'Quicksand-Light',
        fontWeight: 'bold',
        fontSize: 24,
        color: COLORS.black,
        marginTop: 24,
        marginBottom: 24,
        alignSelf: 'center',
    },
    buttonContainer: {
        margin: 24,
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 12,
        backgroundColor: COLORS.primaryColor,
        maxWidth: 320,
        alignSelf: 'center',
    },
    buttonText: {
        fontFamily: 'Quicksand-Bold',
        fontWeight: 'bold',
        color: COLORS.white,
        alignSelf: 'center',
    },
});
