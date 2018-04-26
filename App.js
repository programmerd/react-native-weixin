/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import store from './js/Store';
import { Provider } from 'mobx-react/native';
import MainScreen from './js/MainScreen';
type Props = {};

class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <MainScreen />
      </Provider>
    );
  }
}
export default App;
