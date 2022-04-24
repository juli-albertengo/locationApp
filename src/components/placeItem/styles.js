import {StyleSheet} from 'react-native';
import COLORS  from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  name: {
    color: COLORS.primaryColor,
    fontSize: 16,
    marginBottom: 10,
    marginTop: 16,
  },
  address: {
    color: COLORS.black,
    fontSize: 14,
    marginBottom: 4,
  },
});
