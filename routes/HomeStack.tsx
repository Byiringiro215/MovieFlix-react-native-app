// HomeStack.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from 'screens/home';
import ReviewDetails from 'screens/reviewDetails';

type RootStackParamList = {
  Home: undefined;
  'Review Details': {
    title: string;
    rating: number;
    body: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Review Details" component={ReviewDetails} />
    </Stack.Navigator>
  );
}
