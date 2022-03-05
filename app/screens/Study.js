import React from 'react';
import styled from 'styled-components/native';
import {
  StyleSheet,
  Text,
  Button,
  View,
  Image,
  TouchableOpacity,
  Platform,
  TextInput,
  Alert,
  SafeAreaView,
  Animated,
  FlatList,
  StatusBar,
  ScrollView
} from 'react-native';
const Container = styled.View`
  flex: 1;
`;


function Study() {
  return (
    <Container>
       
        <SafeAreaView style={styles.MainContainer}>
         <View style={styles.header}>
            <Image source={require('../images/logo.png')} style={styles.logo}/>
            <Image source={require('../images/plus.png')} style={styles.plus}/>
            <Image source={require('../images/man.png')} style={styles.avatar}/>
          </View>  
          <View style={styles.container}>
      <Text
        style={{
          marginTop: 100,
          fontSize: 32,
          marginBottom: 70
        }}
      >
        Study Center
      </Text>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.option_text}>Find teammates</Text>
        <Image
          style={{
            marginTop: 2
          }}
          source={require('../images/arrow.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.option_text}>Contact an advisor</Text>
        <Image
          style={{
            marginTop: 2
          }}
          source={require('../images/arrow.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.option_text}>Join a study session</Text>
        <Image
          style={{
            marginTop: 2
          }}
          source={require('../images/arrow.png')}
        />
      </TouchableOpacity>
    </View>
        </SafeAreaView>
     
    </Container>
  );
}

export default Study;

const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    backgroundColor: 'white'
  },

  header: {
    marginTop: 30,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
    
  },
  logo: {
    width: 150,
    height: 20,
    position: 'absolute',
    left: 5,
  },
  plus: {
    position: 'absolute',
    right: 50,
    marginRight: 5,
  },
  avatar: {
    height: 45,
    width: 45,
    borderRadius: 50,
    position: 'absolute',
    right: 5,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  option: {
    width: 340,
    borderRadius: 20,
    padding: 20,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 40
  },
  option_text: {
    fontSize: 17
  },
});