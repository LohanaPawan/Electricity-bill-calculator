import React from 'react';
import { Container, Header, Input, Item, Label, Button, Left, Icon, Body } from 'native-base';
import { View, Text, AsyncStorage } from 'react-native';
import styles from './Styles/MenuScreenStyle'

export default class MenuScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      slab1: 5,
      slab2: 8,
      slab3: 10,
    }
    this.updateslab = this.updateslab.bind(this);
  }
  updateslab() {
    const { slab1, slab2, slab3 } = this.state;
    AsyncStorage.setItem('slab1', JSON.stringify(this.state.slab1));
    AsyncStorage.setItem('slab2', JSON.stringify(this.state.slab2));
    AsyncStorage.setItem('slab3', JSON.stringify(this.state.slab3));
    AsyncStorage.getItem('slab3');
    alert("Cost Updated!")
    console.log(slab1, slab2, slab3);
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Left>
            <Icon style={{ color: 'white' }} name='menu' onPress={() => this.props.navigation.openDrawer()}></Icon>
          </Left>
          <Body>
            <Text style={styles.headercon}>Slab</Text>
          </Body>
        </Header>

        <View style={{ marginLeft: 30, marginTop: 60 }}>

          <Text
            style={styles.heading}>
            Rates Per Slab
          </Text>
          <Text
            style={styles.label}>
            1-100 units
          </Text>

          <Item
            floatingLabel
            style={styles.textBox}>
            <Label
              style={styles.textContent}>@ 5 Rs. / unit </Label>
            <Input
              style={styles.textContent}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(slab1) => this.setState({ slab1 })}
            />
          </Item>

          <Text
            style={styles.label}>
            101- 500 units
          </Text>

          <Item
            style={styles.textBox}
            floatingLabel >
            <Label
              style={styles.textContent}>@ 8 Rs. / unit </Label>
            <Input
              style={styles.textContent}
              autoCorrect={false}
              onChangeText={(slab2) => this.setState({ slab2 })}

            />

          </Item>
          <Text
            style={styles.label}>
            Above 500 units
              </Text>

          <Item
            style={styles.textBox}
            floatingLabel >
            <Label
              style={styles.textContent}>@ 10 Rs. / unit </Label>
            <Input
              style={styles.textContent}
              autoCorrect={false}
              onChangeText={(slab3) => this.setState({ slab3 })}
            />

          </Item>
          <Button
            style={styles.btn}

            mode="contained"
            onPress={this.updateslab}
          >
            <Text style={{ color: 'white', fontSize: 15 }}>UPDATE SLAB</Text>
          </Button>


        </View>
      </Container>
    );
  }
};



