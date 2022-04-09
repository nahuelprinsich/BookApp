import React from 'react';
import { enableScreens } from 'react-native-screens';
import ApplicationNavigator from './src/navigators/Application';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { store, persistor } from './src/stores'

enableScreens();

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ApplicationNavigator />
    </PersistGate>
  </Provider>
);

export default App;
