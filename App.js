import {useState} from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native' 
import Slider from '@react-native-community/slider' 

let charset = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-={}[]:< >,.?/~1234567890"

export default function App(){
  const [size, setSize] = useState(10)
  const [passwordValue, setPasswordValue] = useState("")

  function generatePassword(){
    
    let password = "";
    for (let i = 0, n = charset.length; i < size; i++){
      password += charset.charAt(Math.floor(Math.random() * n))
    }

     setPasswordValue(password)

  }


  return(
    <View style={styles.container} >
      <Image
      source={require("./src/asset/cadeadoHD.png")}
      style={styles.logo}
      

      />
    <Text style={styles.title}> {size} Caracteres </Text>
    
    <View style={styles.area}>
    <Slider 
    style={{ height: 50}}
    minimumValue={6}
    maximumValue={20}
    thumbTintColor='#003566'
    minimumTrackTintColor='#080708'
    value={size}
    onValueChange={(value) => setSize(value.toFixed(0))}
    />

    </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}> Gerar Senha </Text>
      </TouchableOpacity>

    </View>

  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#FFFF",
    justifyContent: 'center',
    alignItems:'center'
  },

  logo:{
    marginBottom: 60,
    width: 300,
    height: 350
  
  },

  area:{
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
  },

  button:{
    backgroundColor: "#003566",
    width: "80%",
    height: 50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 8,
    marginBottom:18

  },

  buttonText:{
    color: "#FFF",
    fontSize: 20,
    fontWeight:'bold'
  },
  title:{
    fontSize:20,
    fontWeight:'bold'
  } 



})


