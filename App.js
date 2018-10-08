/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';

import Group from './screens/Group'
import Maps from './screens/Maps'
import Social from './screens/Social'
import Contact from './screens/Contact'
import Profile from './screens/Profile'

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome</Text>
      </View>
    );
  }
}

export default createBottomTabNavigator({
  Group: {
    screen: Group,
    navigationOptions:{
      tabBarLabel:'Group',
      tabBarIcon:(
        <Image source={require('./icon/group.png')} style={{width: 24, height: 24}} />
      )
    }
  },
  Maps: {
    screen: Maps,
    navigationOptions:{
      tabBarLabel:'Maps',
      tabBarIcon:(
        <Image source={require('./icon/map.png')} style={{width: 24, height: 24}} />
      )
    }
  },
  Social: {
    screen: Social,
    navigationOptions:{
      tabBarLabel:'Social',
      tabBarIcon:(
        <Image source={require('./icon/social.png')} style={{width: 24, height: 24}} />
      )
    }
  },
  Contact: {
    screen: Contact,
    navigationOptions:{
      tabBarLabel:'Contact',
      tabBarIcon:(
        <Image source={require('./icon/contact.png')} style={{width: 24, height: 24}} />
      )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions:{
      tabBarLabel:'Profile',
      tabBarIcon:(
        <Image source={require('./icon/profile.png')} style={{width: 24, height: 24}} />
      )
    }
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});