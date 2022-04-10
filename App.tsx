import React, { useEffect } from 'react';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import SplashScreen from  "react-native-splash-screen";

import ApplicationNavigator from './src/navigators/Application';
import { store, persistor } from './src/stores'

enableScreens();

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApplicationNavigator />
      </PersistGate>
    </Provider>
  )
};

export default App;
