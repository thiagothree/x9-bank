import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Switch,
  Image
} from 'react-native'

//Importação
import Header from './src/components/Header'
import Slider from '@react-native-community/slider'
import { Picker } from '@react-native-picker/picker'
import { StatusBar } from 'expo-status-bar'

export default function App() {
  //useStates para receber informações do formulário
  const [nome, setName] = useState('')
  const [idade, setIdade] = useState('')
  const [sexo, setSexo] = useState('Masculino')
  const [limite, setLimite] = useState(1120)
  const [statusAluno, setStatusAluno] = useState(false)

  let logo = require('./src/images/logo.png')

  function confirmaCadastro(props) {
    alert(`Cadastro realizado com sucesso!`)
    alert(`
      Nome: ${nome}\n
      Idade: ${idade}\n
      Sexo: ${sexo}\n
      Limite: ${limite.toFixed(0)}\n
      Estudante: ${statusAluno ? 'Sim' : 'Não'}
      `)
    setTimeout(() => {
      setName('')
      setIdade('')
      setLimite(0)
      setStatusAluno(false)
    }, 6000)
  }

  return (
    <View style={styles.container}>

      {/* Header */}
      <Header />

      {/* Formulário de Cadastro */}
      <View style={styles.cadastro}>
        <ScrollView style={styles.formularioCadastro}>
          <View style={styles.logoContainer}>
            <Image source={logo} style={styles.imageLogo} />
            <Text style={styles.textoTitulo}>Cadastre-se</Text>
          </View>

          {/* Inputs */}
          <View style={styles.containerTextInput}>
            <Text style={styles.textoTextInput}>Nome Completo</Text>
            <View style={styles.containerInput}>
              <TextInput
                style={styles.textInput}
                placeholder="Nome"
                placeholderTextColor={'#868686'}
                value={nome}
                onChangeText={valor => setName(valor)}
              />
            </View>
          </View>
          <View style={styles.containerTextInput}>
            <Text style={styles.textoTextInput}>Idade</Text>
            <View style={styles.containerInput}>
              <TextInput
                style={styles.textInput}
                placeholder="Idade"
                placeholderTextColor={'#868686'}
                value={idade}
                onChangeText={valor => setIdade(valor)}
              />
            </View>
          </View>
          <View style={styles.pickerContainer}>
            <Text style={styles.labelPicker}>Sexo</Text>
            <View style={styles.containerInput}>
              <Picker
                style={styles.picker}
                selectedValue={sexo}
                onValueChange={(itemValue, itemIndex) => setSexo(itemValue)}
              >
                <Picker.Item
                  label="Masculino"
                  value="Masculino"
                  style={styles.pickerItem}
                />
                <Picker.Item
                  label="Feminino"
                  value="Feminino"
                  style={styles.pickerItem}
                />
              </Picker>
            </View>
          </View>
          <View style={styles.containerTextInput}>
            <Text style={styles.textoTextInput}>Limite desejado:</Text>
            <View style={styles.containerInput}>
              <Slider
                style={{ width: 300 }}
                minimumValue={250}
                maximumValue={2000}
                minimumTrackTintColor="#ED2590"
                maximumTrackTintColor="#868686"
                thumbTintColor="#ED2590"
                value={limite}
                onValueChange={valorSelecionado => setLimite(valorSelecionado)}
              />
            </View>
            <Text style={styles.textLimite}>R$ {limite.toFixed(0)}</Text>
          </View>
          <View style={styles.switchAluno}>
            <Text style={styles.textoTextInput}>Estudante:</Text>
            <View style={styles.containerInput}>
              <Switch
                value={statusAluno}
                onValueChange={valorSelecionado =>
                  setStatusAluno(valorSelecionado)
                }
                style={{ marginLeft: 10 }}
                thumbColor={'#ED2590'}
                trackColor={{ false: '#868686', true: '#ED2590' }}
              />
            </View>
          </View>
          <View style={styles.containerInput}>
            <TouchableOpacity style={styles.button} onPress={confirmaCadastro}>
              <Text style={styles.textButton}>Abrir Conta</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <StatusBar style="auto" backgroundColor="#ffffff" translucent />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9E6F7'
  },
  cadastro: {
    marginTop: 50,
    alignItems: 'center'
  },
  formularioCadastro: {
    width: '90%',
    backgroundColor: '#FDFEFF',
    borderRadius: 15
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageLogo: {
    width: 50,
    height: 50,
    marginTop: 20
  },
  textoTitulo: {
    fontSize: 20,
    color: '#ED2590',
    fontWeight: 'bold'
  },
  containerTextInput: {
    marginTop: 10
  },
  textoTextInput: {
    marginBottom: 5,
    color: '#ED2590',
    fontWeight: 'bold',
    marginLeft: 30
  },
  containerInput: {
    alignItems: 'center'
  },
  textInput: {
    borderRadius: 6,
    backgroundColor: '#EFF3F8',
    width: 280,
    height: 40,
    paddingLeft: 8,
    color: '#ED2590'
  },
  pickerContainer: {
    marginTop: 10
  },
  labelPicker: {
    color: '#ED2590',
    fontFamily: 'Inter-SemiBold',
    marginBottom: 5,
    marginLeft: 30
  },
  picker: {
    width: 280,
    backgroundColor: '#EFF3F8'
  },
  pickerItem: {
    fontSize: 12,
    color: '#868686'
  },
  textLimite: {
    textAlign: 'center',
    color: '#ED2590',
    fontWeight: 'bold'
  },
  switchAluno: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  button: {
    width: 280,
    height: 36,
    borderRadius: 6,
    backgroundColor: '#ED2590',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  textButton: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  }
});
