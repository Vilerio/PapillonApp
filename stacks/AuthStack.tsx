import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import { headerTitleStyles } from './AppStack';
import GetUIColors from '../utils/GetUIColors';

import { LoginSkolengoSelectSchool } from '../views/NewAuthStack/Skolengo/LoginSkolengoSelectSchool';

const AuthStack = ({ navigation }) => {
  const UIColors = GetUIColors();

  const views = [
    {
      name: 'NewLogin',
      component: require('../views/NewAuthStack/LoginView').default,
      options: {
        headerShown: false,
      }
    },
    {
      name: 'SelectService',
      component: require('../views/NewAuthStack/SelectService').default,
      options: {
      }
    },
    {
      name: 'FindEtab',
      component: require('../views/NewAuthStack/Pronote/FindEtab').default,
      options: {
        headerTitle: 'Connexion via PRONOTE',
        headerBackTitleVisible: false,
      }
    },
    {
      name: 'NewPronoteQR',
      component: require('../views/NewAuthStack/Pronote/NewPronoteQR').default,
      options: {
        headerTitle: 'Scanner un QR-Code',
        headerBackTitle: 'Retour',
        headerTransparent: true,
        headerTintColor: '#ffffff',
      }
    },
    {
      name: 'LoginPronoteQR',
      component: require('../views/NewAuthStack/Pronote/LoginPronoteQRToken').default,
      options: {
        presentation: 'modal',
      }
    },
    {
      name: 'NGPronoteLogin',
      component: require('../views/NewAuthStack/Pronote/NGPronoteLogin').default,
      options: {
        headerTitle: 'Se connecter',
        headerTransparent: true,
        presentation: 'modal',
      }
    },
    {
      name: 'LoginURL',
      component: require('../views/NewAuthStack/Pronote/LoginURL').default,
      options: {
        headerTitle: 'Connexion via PRONOTE',
        presentation: 'modal',
      }
    },
    {
      name: 'LocateEtab',
      component: require('../views/NewAuthStack/Pronote/LocateEtab').default,
      options: {
        headerTitle: 'Ville de l\'établissement',
        headerBackTitle: 'Retour',
        presentation: 'modal',
      }
    },
    {
      name: 'LocateEtabList',
      component: require('../views/NewAuthStack/Pronote/LocateEtabList').default,
      options: {
        headerTitle: 'Établissements',
        headerBackTitle: 'Ville',
        presentation: 'modal',
      }
    },
    {
      name: 'LoginSkolengoSelectSchool',
      component: LoginSkolengoSelectSchool,
      options: {
        title: 'Se connecter via Skolengo',
        presentation: 'modal',
      }
    },
  ]

  return (
    <Stack.Navigator
      screenOptions={
        Platform.OS === 'android'
          ? {
            animation: 'fade_from_bottom',
            navigationBarColor: '#00000000',
          }
          : {
            ...headerTitleStyles,
            headerTintColor: UIColors.text,
          }
      }
    >
      {views.map((view, index) => (
        <Stack.Screen
          key={index}
          name={view.name}
          component={view.component}
          options={view.options}
        />
      ))}
    </Stack.Navigator>
  );
};

export default AuthStack;
