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

import React from 'react';
import 'react-native-gesture-handler';
import Home from './MyZomato/Screens/Home';
import { Provider } from 'react-redux';
import Store from './MyZomato/Redux/Store/Store';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Settings from './MyZomato/Screens/Settings'
import Profile from './MyZomato/Screens/Profile'
import Notification from './MyZomato/Screens/Notification'
import DrawerContent from './MyZomato/Navigation/Drawer/DrawerContent'


const Drawer = createDrawerNavigator();
const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer >
        <Drawer.Navigator
          drawerContent={props => <DrawerContent {...props} />}
          drawerType="slide"
          drawerPosition={"right"}>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Settings" component={Settings} />
          <Drawer.Screen name="Notification" component={Notification} />
          <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>

  )
}

export default App



