import React from 'react';
import {Button, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
const HomeScreen = ({navigation}) => {
    return (
        <>
        <Text>
            Home
        </Text>
        <Button
    title="Go to FirstScreen"
    onPress={() => navigation.navigate('FirstScreen')}
    />
    </>
    );
};

export default HomeScreen;
