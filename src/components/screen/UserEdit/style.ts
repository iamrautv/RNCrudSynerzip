import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  userItem: {
    backgroundColor: '#fff',
    borderBottomColor: '#f5f5f5',
    borderBottomWidth: 1,
    paddingHorizontal: 30,
    paddingVertical: 10
  },
  btnWrap: {
    paddingHorizontal: 20,
    justifyContent: 'space-evenly',
    marginTop: 20,
    alignItems: 'center'
  },
  inputStyle: {
    backgroundColor: '#ddd',
    marginBottom: 15,
    paddingHorizontal: 15
  }
});

export default styles;
