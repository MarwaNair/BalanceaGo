import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './screens/Home';
import Search from './screens/Search';
import Dashboard from './screens/Dashboard';
import Direct from './screens/Direct';
import Study from './screens/Study';

import TabComponent from './components/Tab';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarButton: (props) => <TabComponent label="home" {...props} />,
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarButton: (props) => <TabComponent label="search" {...props} />,
          }}
        />
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            tabBarButton: (props) => (
              <TabComponent label="dashboard" {...props} />
            ),
          }}
        />
        <Tab.Screen
          name="Direct"
          component={Direct}
          options={{
            tabBarButton: (props) => <TabComponent label="direct" {...props} />,
          }}
        />
        <Tab.Screen
          name="Study"
          component={Study}
          options={{
            tabBarButton: (props) => <TabComponent label="study" {...props} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
