import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-ionicons';

import Airtime from './screens/airtime/Airtime';
import AuthorizeRecharge from './screens/airtimePurchase/AuthorizeRecharge'
import BillPayment from './screens/billPayment/BillPayment';
import Dashboard from './screens/dashboard/Dashboard';
import CustomHeader from './components/CustomHeader';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Airtime'
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
        <Stack.Screen 
          name="Bill Payments" 
          component={BillPayment}
          options={{
            header: () => {
                const title = 'Bill Payments'
                return <CustomHeader title={title} />
            },
          }}
        />
        <Stack.Screen 
          name="Airtime" 
          component={Airtime} 
          options={{
            header: () => {
                const title = 'Airtime'
                return <CustomHeader title={title} />
            },
          }}
        />
        <Stack.Screen 
          name="Airtime Recharge" 
          component={AuthorizeRecharge} 
          options={{
            header: () => {
                const title = ''
                return <CustomHeader title={title} />
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
