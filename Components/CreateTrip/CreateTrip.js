import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { postNewTrip } from '../../apiCalls';


export const CreateTrip = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} />
      </View>
      <Text style={styles.label}>Starting Location</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} />
      </View>
      <Text style={styles.label}>Final Location</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} />
      </View>
      <TouchableOpacity activeOpacity={.8} style={styles.addDestination}>
        <Text style={{color: '#0D47A1', fontSize: 20, fontWeight: 'bold'}}>Add A Destination</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={.8} style={styles.submitDestination}>
        <Text style={{color: '#0D47A1', fontSize: 20, fontWeight: 'bold'}}>Send it!</Text>
      </TouchableOpacity>
    </View>
  )
}

{/* <TouchableOpacity onPress={() => navigation.navigate('Calendar')}>
  <Image
    style={{ height: 60, width: 60 }}
    source={{ uri: 'https://img.icons8.com/plasticine/200/000000/calendar.png' }}
  />
  <Text>how long with you stay?</Text>
</TouchableOpacity> */}

{/* <Text style={styles.label}>Destination</Text>
  <View style={styles.inputContainer}>
    <TextInput style={styles.input} />
  </View> */}


const styles = StyleSheet.create({
    container: {
      backgroundColor: '#1E88E5',
      height: '100%',
      alignItems: 'center',
      padding: 15
    },
    inputContainer: {
      width: '100%',
      alignItems: 'center',
      backgroundColor: '#fff',
      marginBottom: 20,
      marginTop: 5,
      borderRadius: 5,
      height: 70
    },
    label: {
      color: '#fff',
      fontSize: 20
    },
    input: {
      justifyContent: 'center',
      height: '100%',
      width: '100%',
      fontSize: 20
    },
    addDestination: {
      backgroundColor: '#2CCB70',
      width: '100%',
      height: 50,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 15
    },
    submitDestination: {
      backgroundColor: '#FDD835',
      width: '100%',
      height: 50,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 15
    }
  })


export default CreateTrip;