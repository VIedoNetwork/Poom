
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeStudent from '../screens/homeScreenStudent';
import NameExame from '../screens/nameExam';
import ExamTest from '../screens/examTest';



const Stack = createStackNavigator();

function AppStudent() {
  return (
    <Stack.Navigator initialRouteName="HomeStudent">
      <Stack.Screen name="Home Student" component={HomeStudent} />
      <Stack.Screen name="NameExame" component={NameExame} />
      <Stack.Screen name="ExameTest" component={ExamTest} />

    </Stack.Navigator>
  );
}

export default AppStudent;
