import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Switch } from 'react-native';
import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [sexo, setSexo] = useState('Masculino');
  const [limite, setLimite] = useState(1120);
  const [statusAluno, setStatusAluno] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.cadastreSe}>X9 Bank - Cadastre-se</Text>
      </View>
      <ScrollView>
        <View>
          <Text>Nome Completo</Text>
          <TextInput
            style={{borderColor: '#121212', borderWidth: 1}}
          />
        </View>
        <View>
          <Text>Idade</Text>
          <TextInput
            style={{borderColor: '#121212', borderWidth: 1}}
          />
        </View>
        <View>
          <Text>Sexo</Text>
          <Picker
            selectedValue={sexo}
            onValueChange={(itemValue, itemIndex) => setSexo(itemValue)}>
              <Picker.Item label='Masculino' value='Masculino'/>
              <Picker.Item label='Feminino' value='Feminino'/>
          </Picker>
          <Text>{sexo}</Text>
        </View>
        <View>
          <Text>Seu limite desejado:</Text>
          <Slider
          minimumValue={250}
          maximumValue={2000}
          value={limite}
          onValueChange={(valorSelecionado) => setLimite(valorSelecionado)}
          />
          <Text>{limite.toFixed(0)}</Text>
        </View>
        <View>
          <Text>Aluno:</Text>
          <Switch
            value={statusAluno}
            onValueChange={(valorSelecionado) => setStatusAluno(valorSelecionado)}
          />
          <Text>{statusAluno ? 'Verdade' : 'Falso'}</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Text>Abrir Conta</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 55,
    borderWidth: 0.3,
    borderColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#12f355'
  },
  cadastreSe: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  teste: {
    height: 200
  }
});
