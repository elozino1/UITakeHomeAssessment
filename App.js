import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-ionicons';

import Airtime from './screens/airtime/Airtime';
import AuthorizeRecharge from './screens/airtimePurchase/AuthorizeRecharge'
import BillPayment from './screens/billPayment/BillPayment';
import Dashboard from './screens/dashboard/Dashboard';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Dashboard'
        screenOptions={{
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={Dashboard}
          options={{
            headerShown: false
          }} 
        />
        <Stack.Screen name="Bill Payments" component={BillPayment} />
        <Stack.Screen name="Airtime" component={Airtime} />
        <Stack.Screen 
          name="Airtime Recharge" 
          component={AuthorizeRecharge} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
