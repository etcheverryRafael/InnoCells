import {StyleSheet} from 'react-native';

const mainStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dbdbdb',
    alignItems: 'center',
  },
  menu: {
    width: 30,
    height: 16,
    marginLeft: 15,
    marginRight: 15,
  },
  headerRight: {
    width: 60,
  },
  connectionContainer: {
    width: 60,
    paddingTop: 12,
    alignItems: 'center',
  },
  connected: {
    fontSize: 9,
    color: 'lightgreen',
    marginTop: 2,
  },
  greenCircle: {
    width: 17,
    height: 17,
    borderRadius: 10,
    backgroundColor: 'lightgreen',
    textAlign: 'center',
  },
  redCircle: {
    width: 17,
    height: 17,
    borderRadius: 10,
    backgroundColor: 'red',
  },
  disconnected: {
    fontSize: 9,
    color: 'red',
    marginTop: 2,
    textAlign: 'center',
  },
  holdedContainer: {
    flex: 1,
    alignItems: 'center',
  },
  holdedIcon: {
    width: 202,
    height: 52,
  },
  title: {
    marginTop: 5,
    fontSize: 20,
    color: 'white',
  },
  listAmount: {
    marginTop: 10,
    textAlign: 'center',
    color: 'white',
    fontSize: 10,
  },
});

export default mainStyles;
