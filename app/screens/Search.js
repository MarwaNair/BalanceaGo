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
import { Searchbar } from 'react-native-paper';

const Container = styled.View`
  flex: 1;
`;


function Search() {
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
      year: '1CS/ Freelancer',
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
      year: '1CS/ Freelancer',
      gender: 'm',
    },
    {
      id: 5,
      name: 'Ouafaa Zougli',
      year: '2CP',
      gender: 'f',
    },
    {
      id: 6,
      name: 'Khaled Wali',
      year: '1CS/ Freelancer',
      gender: 'm',
    },
    
 
  ];
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
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
    <Text style={styles.comp}>Compatibility level 5</Text>
    <TouchableOpacity style={styles.btn}>
      <Text style={styles.text_btn}>View Profile</Text>
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
      
        <SafeAreaView style={styles.MainContainer}>
         <View style={styles.header}>
            <Image source={require('../images/logo.png')} style={styles.logo}/>
            <Image source={require('../images/plus.png')} style={styles.plus}/>
            <Image source={require('../images/man.png')} style={styles.avatarr}/>
          </View>
          <Searchbar
            style={styles.search}
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
         />
              
              <FlatList
                
                data={PPL_NAMES}
                numColumns={2}
                renderItem={({ item }) => <ItemRender name={item.name} year={item.year} gender={item.gender} />}
                keyExtractor={item => item.id.toString()}
                ItemSeparatorComponent={Separator}
                horizontal={false}
                columnWrapperStyle={{justifyContent: 'center'}}
                />

          
         
        </SafeAreaView>
        
    </Container>
  );
}

export default Search;

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
  avatarr: {
    height: 45,
    width: 45,
    borderRadius: 50,
    position: 'absolute',
    right: 5,
  },
 
  itemText: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center'
  },
  container: {
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    width: 150,
    height: 170,
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
  flatlist: {
    alignItems: 'center',
    padding: 10
  },
  comp: {
    color: '#2485CE'
  },
  search:{
    borderRadius: 15,
    width: '90%',
    alignSelf: 'center',
    margin: 15,
    backgroundColor: '#E9E9E9'
  }
});