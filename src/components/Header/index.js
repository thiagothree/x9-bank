import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
     return(
          <View style={styles.header}>
               <Text style={styles.cadastreSe}>X9 Bank</Text>
          </View>
     );
};

const styles = StyleSheet.create({
     header: {
          height: 50,
          marginTop: 22,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FDFEFF'
        },
     cadastreSe: {
          fontWeight: 'bold',
          fontSize: 18,
          color: '#ED2590'
        },
})