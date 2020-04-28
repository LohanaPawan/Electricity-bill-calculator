import {createAppContainer} from 'react-navigation';
import React,{Component} from 'react';
import {SafeAreaView,ScrollView,Image,View,Text,TouchableOpacity,Icon,Button} from 'react-native';
import MenuScreen from './screens/MenuScreen';
import MainScreen from './screens/MainScreen';
import UserData from './screens/UserData';
import Calculator from './screens/Calculator';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator,DrawerItems} from 'react-navigation-drawer';

console.disableYellowBox = true;

const CustomDrawerContentComponent = props => (
  <SafeAreaView style={{flex:1}}>
   
    <View style={{height:80,backgroundColor:'#34495E',alignItems:'center',justifyContent:'center'}}>
    
          <Text style={{color:'white',fontSize:18}}>Welcome, User !</Text>

    </View>
    <ScrollView>
    <DrawerItems {...props} activeTintColor='#2196f3'  activeBackgroundColor='#A8A8A8' inactiveTintColor='#808080' inactiveBackgroundColor='transparent' style={{backgroundColor: '#E0E0E0'}} labelStyle={{color: '#484848'}}/>
    </ScrollView>
    </SafeAreaView>
);

    
 

const AppDrawerNavigator = createDrawerNavigator({
  MenuScreen: {screen:MenuScreen,
    navigationOptions: {
      header: null,
      drawerLabel: 'Current Rates Per Slab',
      
    }
},
UserData :{screen:UserData,
    navigationOptions: {
    header:null,
    drawerLabel:'User Data'
  }},
  Calculator :{screen:Calculator,
    navigationOptions: {
    header:null,
    drawerLabel:'Calculator'
  }}

}
,{
  
  contentComponent:CustomDrawerContentComponent,
});



const AppNavigator=createStackNavigator({
  
  MainScreen: {screen:MainScreen},
 MenuScreen: {screen:AppDrawerNavigator,navigationOptions: {
  header: null}},
 UserData: {screen:AppDrawerNavigator,navigationOptions: {
    header: null}},
    Calculator: {screen:AppDrawerNavigator,navigationOptions: {
      header: null}}

  

});

export default createAppContainer(AppNavigator);

