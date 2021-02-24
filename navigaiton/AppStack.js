// In App.js in a new project

import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeTeacher from '../screens/homeScreenTeacher';
import MakeQuestion from '../screens/makeQuestionScreen';
import MakeSubject from '../screens/makeSubjectScreen';
import studentScore from '../screens/studentScore';



const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator initialRouteName="HomeTeacher">
      <Stack.Screen name="HomeTeacher" component={HomeTeacher} />
      <Stack.Screen name="MakeSubject" component={MakeSubject} />
      <Stack.Screen name="MakeQuestion" component={MakeQuestion}/>
      <Stack.Screen name="studentScore" component={studentScore}/>

    </Stack.Navigator>
  );
}

export default AppStack;
