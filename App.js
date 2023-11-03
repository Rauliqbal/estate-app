import * as React from 'react';
import { Image, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './app/home';
import { FONT } from './constant/theme';

function favoriteScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function tvnewsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function settingScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
const Tab = createBottomTabNavigator();
const screenOptions = {
 tabBarShowLabel : false,
 headerShown : false  
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator  screenOptions={screenOptions}>
        <Tab.Screen name="Home" component={Home} options={
         { tabBarIcon : ({focused}) => (
          <View style={{alignItems:"center",}}>
            <Image style={{width: 24, height: 24, marginBottom: 8}} source={require('./assets/icons/ic-home.png')}/>
          </View>
         )}
        }/>
        <Tab.Screen  name="favorite" component={favoriteScreen} options={
         { tabBarIcon : ({focused}) => (
          <View style={{alignItems:"center",}}>
            <Image style={{width: 24, height: 24, marginBottom: 8}} source={require('./assets/icons/ic-favorite.png')}/>
          </View>
         )}
        }/>
        <Tab.Screen  name="tvNews" component={tvnewsScreen} options={
         { tabBarIcon : ({focused}) => (
          <View style={{alignItems:"center",}}>
            <Image style={{width: 24, height: 24, marginBottom: 8}} source={require('./assets/icons/ic-tv.png')}/>
          </View>
         )}
        }/>
        <Tab.Screen  name="setting" component={settingScreen} options={
         { tabBarIcon : ({focused}) => (
          <View style={{alignItems:"center",}}>
            <Image style={{width: 24, height: 24, marginBottom: 8}} source={require('./assets/icons/ic-setting.png')}/>
          </View>
         )}
        }/>
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}