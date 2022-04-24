import { StyleSheet } from 'react-native';
import COLORS  from '../../constants/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listContainer: {
        padding: 24,
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
});
