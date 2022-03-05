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

import 'react-native-gesture-handler';

const Container = styled.View`
  flex: 1;
`;

function Home() {

  const PPL_NAMES = [
    {
      id: 1,
      name: 'Ouafaa Zougli',
      year: '2CP',
      gender: 'f',
    },
    {
      id: 2,
      name: 'Khaled Wali',
      year: '1CS',
      gender: 'm',
    },
    {
      id: 3,
      name: 'Ouafaa Zougli',
      year: '2CP',
      gender: 'f',
    },
    {
      id: 4,
      name: 'Khaled Wali',
      year: '1CS',
      gender: 'm',
    },
    {
      id: 5,
      name: 'Ouafaa Zougli',
      year: '2CP',
      gender: 'f',
    },
    
 
  ];



  const ItemRender = ({ name , year , gender}) => (
    <View style={styles.container}>
      { gender == 'f' ? (
        <Image source={require('../images/girl.png')} style={styles.avatar}/>
      )
        :
      (
        <Image source={require('../images/boy.png')} style={styles.avatar}/>
      )
      }
    
    <Text>{name}</Text>
    <Text>{year}</Text>
    <TouchableOpacity style={styles.btn}>
      <Text style={styles.text_btn}>Connect</Text>
    </TouchableOpacity>

 </View>
  );
 
  const Separator = () => {
    return (
      <View
        style={{
          height: 50,
          width: 1,
          backgroundColor: "white",
        }}
      />
    );
  }
 
 
  return (
    <Container>
      <ScrollView >
       <SafeAreaView style={styles.MainContainer}>
       <View style={styles.header}>
       <Image source={require('../images/logo.png')} style={styles.logo}/>
       <Image source={require('../images/plus.png')} style={styles.plus}/>
       <Image source={require('../images/man.png')} style={styles.avatarr}/>
      </View>  
       <View style={styles.containerr}>
         <View style={styles.card}>
          <View style={styles.topCard}>
          <View style={styles.avatar}>
            <Image
              style={{
                height: 45,
                width: 45
              }}
              source={require('../images/CSE.png')}
            />
          </View>
          <View>
            <Text style={[styles.setColorWhite, styles.setBold]}>
              Club scientifique de l'ESI
            </Text>
            <Text style={[styles.setColorWhite]}>Student community club</Text>
          </View>
        </View>
        <Text
          style={{
            marginTop: 20,
            color: 'white',
            fontSize: 36,
            fontWeight: '700'
          }}
        >
          HACK-IT
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 20
          }}
        >
          Hackathon
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row'
          }}
        >
          <View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '47%',
                alignItems: 'center'
              }}
            >
              <Image source={require('../images/clock.png')} />
              <Text style={[styles.setColorWhite]}>March 17th</Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '46%',
                alignItems: 'center'
              }}
            >
              <Image source={require('../images/location.png')} />
              <Text style={[styles.setColorWhite]}>ESI, Algiers</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.buttonParticipate}>
            <Text
              style={{
                color: '#707070'
              }}
            >
              Participate
            </Text>
            <Image
              style={{
                marginLeft: 10,
                marginTop: 2
              }}
              source={require('../images/arrow.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style='auto' />
    </View>
          <Text style={styles.titleText}>Suggested for you</Text>

            <FlatList
            style={styles.flatlist}
            data={PPL_NAMES}
            renderItem={({ item }) => <ItemRender name={item.name} year={item.year} gender={item.gender} />}
            keyExtractor={item => item.id.toString()}
            ItemSeparatorComponent={Separator}
            horizontal={true}
            />
     <View style={styles.containerr}>
         <View style={[styles.card,{backgroundColor:'#F35548'}]}>
          <View style={styles.topCard}>
          <View style={styles.avatar}>
            <Image
              style={{
                height: 45,
                width: 45
              }}
              source={require('../images/boy.png')}
            />
          </View>
          <View>
            <Text style={[styles.setColorWhite, styles.setBold]}>
              Khaled Wari                     </Text>
            <Text style={[styles.setColorWhite]}>1CS / Freelancer</Text>
          </View>
        </View>
        <Text
          style={{
            marginTop: 20,
            color: 'white',
            fontSize: 36,
            fontWeight: '700'
          }}
        >
          Movie Night
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 20
          }}
        >
          Uncharted
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row'
          }}
        >
          <View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '47%',
                alignItems: 'center'
              }}
            >
              <Image source={require('../images/clock.png')} />
              <Text style={[styles.setColorWhite]}>March 6th  </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '46%',
                alignItems: 'center'
              }}
            >
              <Image source={require('../images/location.png')} />
              <Text style={[styles.setColorWhite]}>Cosmos    </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.buttonParticipate}>
            <Text
              style={{
                color: '#707070'
              }}
            >
              Participate
            </Text>
            <Image
              style={{
                marginLeft: 10,
                marginTop: 2
              }}
              source={require('../images/arrow.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style='auto' />
    </View>     


        </SafeAreaView>
     </ScrollView >        
    </Container>
  );
}

export default Home;

const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    backgroundColor: 'white'
  },

  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    padding: 12
  },

  itemText: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center'
  },
  container: {
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    width: 110,
    height: 150,
    margin: 5,
    alignItems: 'center',
     shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 0.3,
              shadowRadius: 5,
              elevation: 3,
  },
  avatar : {
    borderRadius: 20,
    width: 40,
    height: 40,
    margin:10
  },
  btn: {
    margin: 20,
    padding: 2,
    width: 88,
    height:25,
    backgroundColor: '#3196E2',
    borderRadius: 8,
    alignItems: 'center',
  },
  text_btn:{
    color: '#fff'
  },
  containerr: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    marginBottom : 15
  },
  card: {
    height: 250,
    width: 380,
    backgroundColor: '#B440C7',
    borderRadius: 25,
    padding: 25,
    color: '#fff',
    

  },
  topCard: {
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  avatar: {
    height: 45,
    width: 45,
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  setColorWhite: {
    color: '#fff'
  },
  setBold: {
    fontWeight: 'bold',
    fontSize: 18
  },
  buttonParticipate: {
    height: '100%',
    width: '35%',
    borderRadius: 10,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  flatlist: {
    height: '20%',
    
  },

  header: {
    marginTop: 30,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    
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
  avatarr: {
    height: 45,
    width: 45,
    borderRadius: 50,
    position: 'absolute',
    right: 5,
  },
});