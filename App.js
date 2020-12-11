import { StatusBar } from 'expo-status-bar';
import React , {useState}from 'react';
import { StyleSheet, Text, View ,TouchableOpacity , TextInput , Image} from 'react-native';

export default function App() {

  const [vaildCode , setVaildCode] = useState('');
  const [vaildState , setVaildState] = useState('');
  const [count , setCount] = useState(0);
  // const successImageUri = {uri:"https://www.flaticon.com/authors/kiranshastry" };
  // const errorImageUri = {uri:"https://www.flaticon.com/authors/kiranshastry"} ;
  
  const vaild = () => {
    
    {
       setCount(1);
       return vaildCode === '12345' ? setVaildState(true)  : setVaildState(false)
    }
  }
  return (
    <View style={styles.container}>
     
        <Text style={{
          fontSize:40,
          color:'white'
          }}>FaceBook</Text>
   
        { count ===1 ? (vaildState === true ?  <Image source={ require('./assets/check.png')} style={styles.image}></Image> :  <Image source={require('./assets/cancel.png')} style={styles.image}></Image>) : <Text></Text>}

        
        <TextInput style={styles.textInput} placeholder="請輸入帳號" textAlign='center'/>

        <TextInput style={styles.textInput} placeholder="請輸入密碼" textAlign='center' maxLength = {10} marginTop= {20} secureTextEntry={true} keyboardType='numeric' onChangeText={(text) =>{setVaildCode(text)}} />
        
        <TouchableOpacity style={styles.touchableOpacity} onPress={() => { vaild()}}>
            <Text style={{fontSize:20 , textAlign:'center' , color:'white'}} > Login </Text>
        </TouchableOpacity>
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#004B97',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInput: {
    height : 40 ,
    width : 300 ,
    borderRadius : 5 ,
    borderWidth:0.5,
    borderColor : 'black',
    backgroundColor : 'white',
    fontSize : 18 ,
    color : 'black',
    marginTop : 30
  } ,

  touchableOpacity :{
    width: 300,
    height : 40,
    backgroundColor :'#0080FF',
    borderWidth:2,
    borderColor:'black',
    borderRadius: 10,
    marginTop :20
  },
  image: {
    width: 100, 
    height:100, 
    justifyContent: 'center',
    margin : 20
  },

});
