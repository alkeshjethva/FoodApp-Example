import React from 'react';
import DrawerNavigation from './src/Navigations/DrawerNavigation/DrawerNavigation'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  )
}

export default App