import React from 'react';
import {Dimensions} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// screens
import Letters from '../screens/Letter';
import Home from '../screens/Home';
import MembersList from '../screens/MembersList';
import Circulars from '../screens/Circulars';
import FlightSafety from '../screens/FlightSafety';
import Onboarding from '../screens/OnBoarding';
import Elements from '../screens/Elements';
import Template from '../screens/Template';
import Grievance from '../screens/Grevience';
import Request from '../screens/Request';
import Profile from '../screens/Profile';
import EditProfile from '../screens/EditProfile';
import News from '../screens/News';
import Notification from '../screens/Notification';
import Constitution from '../screens/Constitution';
import _Schemes from '../screens/Schemes';
// drawer
import CustomDrawerContent from './Menu';

// header for screens
import {Header} from '../components';

const {width} = Dimensions.get('screen');

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function RequestStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Request"
        component={Request}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Flight Request"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: {backgroundColor: '#F8F9FE'},
        }}
      />
    </Stack.Navigator>
  );
}
function ProfileStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="About Us"
        component={Profile}
        options={{
          header: ({navigation, scene}) => (
            <Header title="About Us" navigation={navigation} scene={scene} />
          ),
          cardStyle: {backgroundColor: '#F8F9FE'},
        }}
      />
    </Stack.Navigator>
  );
}
function NewsStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="News"
        component={News}
        options={{
          header: ({navigation, scene}) => (
            <Header title="News" navigation={navigation} scene={scene} />
          ),
          cardStyle: {backgroundColor: '#F8F9FE'},
        }}
      />
    </Stack.Navigator>
  );
}
function GrevienceStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Grievance"
        component={Grievance}
        options={{
          header: ({navigation, scene}) => (
            <Header title="Grievance" navigation={navigation} scene={scene} />
          ),
          cardStyle: {backgroundColor: '#F8F9FE'},
        }}
      />
    </Stack.Navigator>
  );
}
function EditScreen(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Edit Profile"
        component={EditProfile}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Edit Profile"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: {backgroundColor: '#F8F9FE'},
        }}
      />
    </Stack.Navigator>
  );
}
function HomeStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Home"
              options
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: {backgroundColor: '#F8F9FE'},
        }}
      />
    </Stack.Navigator>
  );
}
function LetterStack() {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Letter"
        component={Letters}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Letters"
              options
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: {backgroundColor: '#F8F9FE'},
        }}
      />
    </Stack.Navigator>
  );
}
export default function OnboardingStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        option={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen name="App" component={AppStack} />
    </Stack.Navigator>
  );
}
function CircularsStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Circulars"
        component={Circulars}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Circulars"
              options
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: {backgroundColor: '#F8F9FE'},
        }}
      />
    </Stack.Navigator>
  );
}
function FlightSafetyStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Flight Safety"
        component={FlightSafety}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Flight Safety"
              options
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: {backgroundColor: '#F8F9FE'},
        }}
      />
    </Stack.Navigator>
  );
}
function MemberListStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Members"
        component={MembersList}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Members"
              search
              options
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: {backgroundColor: '#F8F9FE'},
        }}
      />
    </Stack.Navigator>
  );
}
function NotificationStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Notification"
              options
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: {backgroundColor: '#F8F9FE'},
        }}
      />
    </Stack.Navigator>
  );
}
function ConstitutionStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Notification"
        component={Constitution}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Constitution"
              options
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: {backgroundColor: '#F8F9FE'},
        }}
      />
    </Stack.Navigator>
  );
}
function WelfareSchemeStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Welfare Scheme"
        component={_Schemes}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Welfare Schemes"
              options
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: {backgroundColor: '#F8F9FE'},
        }}
      />
    </Stack.Navigator>
  );
}
function AppStack(props) {
  return (
    <Drawer.Navigator
      style={{flex: 1}}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerStyle={{
        backgroundColor: 'white',
        width: width * 0.8,
      }}
      drawerContentOptions={{
        activeTintcolor: 'white',
        inactiveTintColor: '#000',
        activeBackgroundColor: 'transparent',
        itemStyle: {
          width: width * 0.75,
          backgroundColor: 'transparent',
          paddingVertical: 16,
          paddingHorizonal: 12,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
        },
        labelStyle: {
          fontSize: 18,
          marginLeft: 12,
          fontWeight: 'normal',
        },
      }}
      initialRouteName="Home">
      <Drawer.Screen name="News" component={NewsStack} />
      <Drawer.Screen name="Letters" component={LetterStack} />
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Circulars" component={CircularsStack} />
      <Drawer.Screen name="Flight Safety" component={FlightSafetyStack} />
      <Drawer.Screen name="Request" component={RequestStack} />
      <Drawer.Screen name="Grievance Section" component={GrevienceStack} />
      <Drawer.Screen name="About Us" component={ProfileStack} />
      <Drawer.Screen name="Edit Profile" component={EditScreen} />
      <Drawer.Screen name="Members" component={MemberListStack} />
      <Drawer.Screen name="Notification" component={NotificationStack} />
      <Drawer.Screen name="Constitution" component={ConstitutionStack} />
      <Drawer.Screen name="Welfare Scheme" component={WelfareSchemeStack} />
    </Drawer.Navigator>
  );
}
