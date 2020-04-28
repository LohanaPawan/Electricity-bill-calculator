import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#ffffff'
      
    },
    header:{
      backgroundColor: '#34495E',
       height: 60, 
       width:'100%'
    },
    heading:{
      color: '#ffffff', 
      fontSize: 20, 
      alignContent: 'center' 
  
    },
    title:{
      color: '#707070',
       fontSize: 32, 
       fontWeight: "bold",
       marginLeft:50
  
    },
      textBox:{
        marginTop:10,
        backgroundColor: "#B8B8B830",
        color:'#707070',
        width: 300, 
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
      },
      btn:{
        marginTop:20,
        width: 200,
         height: 50,
         backgroundColor: '#34495E',
         alignContent:'center',
         justifyContent:'center',
         marginLeft:50
        },
        textContent:{
          color:'#707070',
          marginLeft:30,
          
        }
  
  });
  export default styles;  