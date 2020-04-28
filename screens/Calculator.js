import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Label, Button, Root, Fab, Toast, Card, CardItem, Left, Right, Icon, Title, Body, Picker } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './Styles/CalculatorStyle'
class Calculator extends Component {

  constructor(props) {
    super(props);

    this.state = {
      serviceNo: null,
      billingDate: null,
      units: null,
      cost: null,
      slab1: null,
      slab2: null,
      slab3: null,

    };

  }
  componentDidMount = async () => {
    const slab1 = await AsyncStorage.getItem('slab1');
    const slab2 = await AsyncStorage.getItem('slab2');
    const slab3 = await AsyncStorage.getItem('slab3');
    console.log('data1slaaabbb1', slab1, slab2, slab3)

    if (slab1 !== null && slab2 !== null && slab3 !== null) {
      this.setState({ slab1: JSON.parse(slab1), slab2: JSON.parse(slab2), slab3: JSON.parse(slab3) });
    }

  }

  calculate = () => {
    global.amount = 0
    if (this.state.units <= 100) {
      amount = this.state.units * this.state.slab1
      this.setState({ cost: amount })
      this.setState({ billingDate: new Date })
      //alert(amount)   



    }
    else if (this.state.units == 0) {
      this.setState({ cost: 0 })
      this.setState({ billingDate: new Date })
    }
    else if (this.state.units <= 500) {
      amount = 500 + (this.state.units - 100) * this.state.slab2
      this.setState({ cost: amount })
      this.setState({ billingDate: new Date })
      
    }
    else {
      amount = 500 + 3200 + (this.state.units - 500) * this.state.slab3
      this.setState({ cost: amount })
      this.setState({ billingDate: new Date })
    }
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Left>
            <Icon style={{ color: 'white' }} name='menu' onPress={() => this.props.navigation.openDrawer()}></Icon>
          </Left>
          <Body>
            <Text style={styles.heading}>Calculator</Text>
          </Body>
        </Header>
        <View style={{ marginLeft: 30, marginTop: 60 }}>
          <Text
            style={styles.title}>
            Bill Calculator
              </Text>
          <Item
            floatingLabel
            style={styles.textBox}>
            <Label
              style={styles.textContent}>Total Units</Label>
            <Input
              style={styles.textContent}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(units) => this.setState({ units })} />
          </Item>

          <Item
            style={styles.textBox}
            floatingLabel >
            <Label
              style={styles.textContent}>Service Number</Label>
            <Input
              style={styles.textContent}
              autoCorrect={false}
              onChangeText={(serviceNumber) => this.setState({ serviceNumber })} />
          </Item>
          <Card style={{ marginTop: 45, marginRight: 20 }}>
            <CardItem>
              <Text style={{ fontSize: 25 }}>
                Total Bill: {this.state.cost}
              </Text>

              {/* <Icon name="ios-people" /> */}
            </CardItem>
          </Card>
          <Button
            style={styles.btn}
            mode="contained"
            onPress={() => this.calculate()}>
            <Text style={{ color: 'white', fontSize: 15 }}>CALCULATE COST</Text>
          </Button>
        </View>

      </Container>
    );
  }
}

export default Calculator;


