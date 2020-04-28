import React, { Component } from 'react';
import { Text, View, ImageBackground,StatusBar,Image} from 'react-native';
import { Container, Content, Header, Form, Input, Item, Label, Button, Root, Toast, Card, CardItem, Left, Right, Icon, Title, Body, Picker } from 'native-base';
import styles from './Styles/MainScreenStyle';
class MainScreen extends Component {

  static navigationOptions = {
    header: null
  }


  render() {
    return (

      <View style={styles.container}>
        <StatusBar  />
            <Image
             style={{height:300,width:300}}
              source={require('./Images/logo.png')}
            />
      
        <Button style={styles.btn} mode="contained" onPress={() => this.props.navigation.navigate('MenuScreen')}>
          <Text style={styles.txt}>Get Started</Text>
        </Button>
        
      </View>
      

    );
  }
}

export default MainScreen;



