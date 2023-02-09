import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Sales from '../../modules/sales/adapters/screens/Sales'
const Stack = createNativeStackNavigator()

export default function SalesStack(){
    return (
        <Stack.Navigator
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: 'white',
                headerStyle: {backgroundColor: '#ff5a60'}
            }}>
            <Stack.Screen 
                name='salesStack'
                options={{title: 'Ventas'}}
                component={Sales}
            />
        </Stack.Navigator>
    )
}