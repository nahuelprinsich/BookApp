import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { BookListContainer, BookDetailContainer } from '../containers';
  
const Stack = createNativeStackNavigator();

const ApplicationNavigator = () => {

    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        flex: 1,
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <NavigationContainer>
                <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
                <Stack.Navigator>
                    <Stack.Screen name="BookList" component={BookListContainer} options={{headerShown: false}}/>
                    <Stack.Screen 
                        name="BookDetail" 
                        component={BookDetailContainer}
                        options={{
                            headerTitleAlign: 'center',
                            title: 'Book detail'
                        }}
                    />
                </Stack.Navigator>  
            </NavigationContainer>
        </SafeAreaView>
    )
}

export default ApplicationNavigator