/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 *
 */

//@flow
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import FirstScreen from './screens/FirstScreen';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,Button,
  StatusBar,Picker,
} from 'react-native';
import colors from './constants/colors';



let name: string = 'Jack';
const add = (a: number, b: number): number => {
  return a + b;
};
const Stack = createStackNavigator();
const App: () => React$Node = () => {

  return (
    <>
      <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      {/*<SafeAreaView>*/}
      {/*  <ScrollView*/}
      {/*    contentInsetAdjustmentBehavior="automatic"*/}
      {/*    style={styles.scrollView}>*/}
      {/*    <View style={styles.body}>*/}
      {/*      <Text>{name}</Text>*/}
      {/*      <Text>aaa</Text>*/}
      {/*      <Text>{add(3,5)}</Text>*/}

      {/*    </View>*/}
      {/*  </ScrollView>*/}
      {/*</SafeAreaView>*/}
          <Stack.Navigator initialRouteName="Home" screenOptions={{
              headerStyle: {
                  backgroundColor: colors.primary,
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                  fontWeight: 'bold',
              },
          }}>
              <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'HomeScreenTitle' }}/>
              <Stack.Screen name="FirstScreen" component={FirstScreen} options={{ title: 'FirstScreenTitle',headerRight: () => (
                      <Button
                          onPress={() => alert('This is a button!')}
                          title="Add"
                          color="#fff"
                      />
                  ), }}/>
          </Stack.Navigator>

      </NavigationContainer>

    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
