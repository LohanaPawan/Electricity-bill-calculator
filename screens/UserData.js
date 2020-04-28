
import React,{Component} from 'react';
import { StyleSheet, Text, View,Animated,ActivityIndicator,ImageBackground,Image,StatusBar,FlatList,TouchableOpacity} from 'react-native';
import {Container,Content,Header,Form,Input,Item,Label,Button, Root,Fab,Toast,Card,CardItem,Left,Right,Icon,Title,Body,Picker} from 'native-base';
import axios from 'axios';
import styles from './Styles/UserDataStyle'
class UserData extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoading:true,
          users:[],
        };
      }
  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        console.log(response.data);
        this.setState({users: response.data});
        this.setState({isLoading:false})

        console.log(this.state.users)
      })
      .catch((error) => {
        console.log(error);
        //this.setState({errorMsg: 'Error retrieving data'});
        console.log(error);
      });
  }

  static navigationOptions = {
    header: null}

    renderItem = ({item}) => (
         <TouchableOpacity onPress={()=> alert(JSON.stringify(item,null,"    "))}>
          <View>
          <Text style={{padding:5,borderBottomWidth:1,borderBottomColor:"#eee",fontSize:19,marginTop:10}}>
           User Id: {item.id}   {"\n"}Name: {item.name}
           
          </Text>
          
          </View>
          </TouchableOpacity>
    );
      
    render(){ 
        return(
            <Container  style={styles.container}>
            <Header style={styles.header}>
             <Left>
             
            <Icon style={{color:'white'}} name='menu' onPress={() => this.props.navigation.openDrawer()}></Icon>
          </Left>
             
             <Body>
             <Text style={styles.heading}>User Information</Text>
              
             </Body>
            
           </Header> 
          

     

          <View style={{flex:1}}>{ !this.state.isLoading &&
              this.state.users.length > 0 ?
              <View style={styles.flatlist}>

              <FlatList
              style={{flex: 1}}
              data={this.state.users}
              KeyExtractor={item => item.id}
              renderItem={this.renderItem}
            />
            </View> : <ActivityIndicator size="large" animating ></ActivityIndicator>
            

            
          }

          </View>

          
             
             </Container>
      
       
           );
    }
}

export default UserData;


