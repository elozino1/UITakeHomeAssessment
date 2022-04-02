import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BillPayment from './screens/billPayment/BillPayment';
import Dashboard from './screens/dashboard/Dashboard';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center'
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
        {/* <Stack.Screen name="Airtime" component={Airtime} />
        <Stack.Screen name="Airtime Recharge" component={AirtimeRecharge} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
