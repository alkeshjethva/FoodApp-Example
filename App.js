import React from 'react';
import DrawerNavigation from './src/Navigations/StackNavigation'
import { NavigationContainer } from '@react-navigation/native'

// import TabNavigation from './React-navigation/TabNavigation'
import NavigationV5 from './NavigationV5/Navigation'
const App = () => {
  return (
    // <NavigationContainer>
    //   <DrawerNavigation />
    // </NavigationContainer>
    // <TabNavigation />
    <NavigationV5 />
  )
}

export default App