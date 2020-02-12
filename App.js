/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 *
 */

//@flow
import 'react-native-gesture-handler';

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
  Picker,
} from 'react-native';
import colors from './constants/colors';
import MainNavigation from './navigation/Navigation';
let name: string = 'Jack';
const add = (a: number, b: number): number => {
  return a + b;
};
const App: () => React$Node = () => {
  return (
    <>
      <MainNavigation />
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
