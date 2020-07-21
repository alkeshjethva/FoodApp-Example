// import React, { Component } from 'react'
// import Counter from './Components/Counter'
// import { Provider } from 'react-redux'
// import { store } from './Redux/CounterIncreament/Store/Store'

// export default class App extends Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <Counter />
//       </Provider>
//     );
//   }
// }


// tu application run kras ctrl+m karine reload karas to aa data means store khali kari nakhe 6e, retu nathi 
// n jo app close thay ne to b data vaya jaay Che

// aa vastu me morfose ma face kareli Che

// atle aa data ne sachvva redux-persist no use thay Che
// tu persisit vagar try karje
// n then persisir add karine karje ok!

// ............................................................

import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import Navigation from './MyZomato/Navigation/Navigation/Navigation';

import { persistor, store } from './MyZomato/Redux/Store/Store';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';


import SplashScreen from 'react-native-splash-screen'

const App = () => {

  useEffect(() => {
    SplashScreen.hide()
  })

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>

  )
}

export default App



