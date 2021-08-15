import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Nofiticaion(){
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pagina Notifição</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0000',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
  },
})