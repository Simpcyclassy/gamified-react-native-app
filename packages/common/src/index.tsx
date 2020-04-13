import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import { Provider } from 'react-redux';

import store from './store';
import Router from './components/router/components/Router'


declare var global: {HermesInternal: null | {}};

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Router />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default App;
