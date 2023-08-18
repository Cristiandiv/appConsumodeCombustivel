import { Text, SafeAreaView, StyleSheet, View, TextInput, Button, TouchableOpacity } from 'react-native';
import React, {useState} from 'react'





export default function App() {

  function CalculoCombustivel(){
  const resultado = km / combustivel;
  alert('O consumo por litro do seu carro é ' + resultado);
  }

  const [km,setkm] = useState('');
  const [combustivel,setcombustivel] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
       Consumo de Combustivel
      </Text>
      <TextInput
      style={styles.input}
      placeholder="Digite os kilometros percorridos" placeholderTextColor='#fff'
      keyboardType="numeric"
      onChangeText={(km)=>setkm(km)}
      />

      <TextInput
      style={styles.input}
      placeholder="Digite a quantidade de combustivel" 
      placeholderTextColor='#fff'
      onChangeText={(combustivel)=>setcombustivel(combustivel)}
      />
      <TouchableOpacity style={styles.btn} onPress={CalculoCombustivel}>
        <Text style={styles.textbtn}>Calcular o Consumo</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom:10,
  },

  btn:{
    alignItems:'center',
    backgroundColor:'#FF0000',
    padding: 15,
    borderRadius: 10,
    margin: 15,
    marginTop: 50,
  },

  textbtn:{
    fontSize:30,
    color:'#fff',
  },

  input:{
    fontSize: 16,
    padding: 20,
    backgroundColor:'#a0c225',
    borderRadius:10,
    margin: 15,
  }
});
