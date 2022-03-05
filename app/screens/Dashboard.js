import React from 'react';
import styled from 'styled-components/native';
import { Checkbox } from 'react-native-paper';
import  {
  Component,
  useState 
} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView
} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

const Container = styled.View`
  flex: 1;
`;


function Dashboard() {
    
  const [checked, setChecked] = React.useState(false);
  return (
    <Container style={{

      backgroundColor: "white",
    }}>
      <View style={styles.header}>
            <Image source={require('../images/logo.png')} style={styles.logo}/>
            <Image source={require('../images/plus.png')} style={styles.plus}/>
            <Image source={require('../images/man.png')} style={styles.avatar}/>
          </View>  
      <ScrollView>
      <View style={styles.MainContainer}>
      <Image source={require('../images/chart.png')} />
      
      <View style={styles.tasksCard}>
        <Text
          style={{
            fontSize: 28,
            fontWeight: 'bold'
          }}
        >
          Tasks
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <Text
            style={{
              fontSize: 18
            }}
          >
            Attend one more study session
          </Text>
          <Checkbox
            color='black'
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 18
          }}
        >
          Next reward: invitation to HackIT
        </Text>
      </View>
      <Image source={require('../images/stats.png')} style={styles.stats}/>
      </View>
      </ScrollView>
    </Container>
  );
}

export default Dashboard;
const styles = StyleSheet.create({

  MainContainer: {
    
    backgroundColor: 'white',
    
    alignItems: 'center'
  },

  header: {
    backgroundColor: 'white',
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
  stats:{
    marginTop: 10,
    
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  tasksCard: {
    width: 340,
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 20,
    shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 0.3,
              shadowRadius: 5,
              elevation: 3,
  }
  
});