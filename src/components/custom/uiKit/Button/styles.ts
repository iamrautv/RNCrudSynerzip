import { StyleSheet } from 'react-native';
import { colors, globalStyles } from '../../../../config';

const styles = StyleSheet.create({
  wrapStyle: {
    alignItems: 'flex-start'
  },
  btnPrimary: {
    backgroundColor: colors.primary,
    ...globalStyles.padV(8),
    ...globalStyles.padH(15),
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  txtStylePrimary: {
    color: '#ffffff'
  },
});

export default styles;
