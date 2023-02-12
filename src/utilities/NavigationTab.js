import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';
import {LogIn} from '../../screens/LogIn';
import { Home } from './../../screens/Home';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SignUp } from './../../screens/SignUp';
import { List } from './../../screens/List';
import ListFood from './../../screens/ListFood';
import Maps from '../../screens/Maps';
import { ListRedux } from '../../screens/ListRedux';

const Tab = createBottomTabNavigator();

export default function NavigationTab() {
  return (
    <Tab.Navigator initialRouteName='Home'
        screenOptions={ {
            headerShown: false,
            tabBarShowLabel:false,
            tabBarStyle: styles.tabBar,
        }}
    >
      <Tab.Screen 
      name="Home"
       component={Home} 
       options={{
        tabBarIcon:({focused}) => (
        <View style={styles.item}>
            <AntDesign name="heart" size={24} color="#FFE0C5" />
            <Text>Inicio</Text>
        </View>
        )
       }}
      />
      <Tab.Screen 
      name="Login" 
      component={LogIn} 
      options={{
        tabBarIcon:({focused}) => (
        <View style={styles.item}>
            <AntDesign name="user" size={24} color="#FFE0C5" />
            <Text>Perfil</Text>
        </View>
        )
       }}
      />
        <Tab.Screen
        name="Signup"
        title="Ingresar"
        component={SignUp}
        options={{
            headerShown:false,
            tabBarIcon:({focused}) => (
            <View style={styles.item}>
                <AntDesign name="adduser" size={24} color="#FFE0C5" />
                <Text>Unirse</Text>
            </View>
            )
           }}
        />
        <Tab.Screen
        name="List"
        title="Lista desafio"
        component={List}
        options={{
            headerShown:false,
            tabBarIcon:({focused}) => (
            <View style={styles.item}>
                 <Entypo name="list" size={24} color="#FFE0C5" />
                <Text>Lista</Text>
            </View>
            )
           }}
        />
        <Tab.Screen
        name="ListFood"
        title="Lista comida desafio"
        component={ListFood}
        options={{
            headerShown:false,
            tabBarIcon:({focused}) => (
            <View style={styles.item}>
                <Ionicons name="fast-food-outline" size={24} color="#FFE0C5" />
                <Text>Comida</Text>
            </View>
            )
           }}
        />
        {/* <Tab.Screen
        name="Maps"
        title="Maps"
        component={Maps}
        options={{
            headerShown:false,
            tabBarIcon:({focused}) => (
            <View style={styles.item}>
                <MaterialCommunityIcons name="google-maps" size={24} color="#FFE0C5" />
                <Text>Mapa</Text>
            </View>
            )
           }}
        /> */}
           <Tab.Screen
        name="Redux"
        title="Redux"
        component={ListRedux}
        options={{
            headerShown:false,
            tabBarIcon:({focused}) => (
            <View style={styles.item}>
                <MaterialCommunityIcons name="google-maps" size={24} color="#FFE0C5" />
                <Text>List Redux</Text>
            </View>
            )
           }}
        />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
    tabBar:{
        shadowColor:'#7f5df0',
        shadowOffset:{width:0, height:10},
        shadowOpacity:0.25,
        shadowRadius:0.25,
        position: 'absolute',
        height:80,
        backgroundColor:'#ED6B5B',
        borderTopColor:'#F9AC66',
        borderTopWidth:3,
    },
    item:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})