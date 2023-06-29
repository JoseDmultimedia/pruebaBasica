import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import NavigationStack from './src/navigation/NavigationStack';
import NavigationTab from './src/navigation/NavigationTab';
import NavigationDrawer from './src/navigation/NavigationDrawer';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      {/* <NavigationStack></NavigationStack> */}
      {/* <NavigationTab></NavigationTab> */}
      <NavigationDrawer></NavigationDrawer>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "white",
    alignItems: 'center',
    justifyContent: 'center',
    // color: "black"
  },
});

export default App;
