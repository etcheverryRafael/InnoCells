/**
 * Holded
 */

import React from 'react';
import {YellowBox} from 'react-native';

import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import {PersistGate} from 'redux-persist/integration/react';
import {applyMiddleware} from 'redux';
//import thunk for doing asynchronous operations in redux
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import MainScreen from './src/screens/main';
import postsReducer from './src/redux/reducers/posts-reducer';

YellowBox.ignoreWarnings(['RCTRootView cancelTouches']);

const allReducers = combineReducers({
  postsReducer: postsReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

//const persistedReducer = persistReducer(persistConfig, allReducers);
const store = createStore(allReducers, applyMiddleware(thunk));
//let persistor = persistStore(store);

// Render the app container component with the provider around it
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainScreen />
      </Provider>
    );
  }
}

// Render the app container component with the provider around it
// export default class App extends React.Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <PersistGate loading={null} persistor={persistor}>
//           <MainScreen />
//         </PersistGate>
//       </Provider>
//     );
//   }
// }
