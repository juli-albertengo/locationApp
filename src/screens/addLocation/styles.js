import { StyleSheet } from 'react-native';
import COLORS  from '../../constants/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontFamily: 'Quicksand-Bold',
        fontWeight: 'bold',
        fontSize: 24,
        color: COLORS.black,
        marginTop: 24,
        marginBottom: 24,
        alignSelf: 'center',
    },
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
    input: {
        borderBottomColor: COLORS.primaryColor,
        borderBottomWidth: 1,
        marginVertical: 10,
        padding: 5,
        width: 240,
        alignSelf: 'center',
    },
});
