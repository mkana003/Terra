//Libraries
import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//Stacks
import RentStack from './components/RentStack'
import ActivitiesStack from './components/ActivitiesStack'
import BookStack from './components/BookStack'
import myReservationsStack from './components/myReservationsStack'
import ProfileStack from './components/ProfileStack'

//Styles
import * as Colors from '../styles/colors'

// MAIN
export default function Navigator() {
    const Tab = createBottomTabNavigator()

    const CustomTabBarButton = (props) => {
        return (
        <TouchableOpacity
            style={{
                top: -20,
                justifyContent: "center",
                alignItems: "center",
                shadowColor: props.accessibilityStates[0] == "selected" ? Colors.light_orange : Colors.dark_green,
                shadowOffset: {
                    width: 0,
                    height: 10,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.5,
                elevation:2
            }}
            onPress={props.onPress}
        >
            <View style={{width: 70, height: 70, borderRadius:35, backgroundColor: props.accessibilityStates[0] == "selected" ? Colors.dark_orange : Colors.light_green}}>
                {props.children}
            </View>
        </TouchableOpacity>
        )
    };

    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Reservar"
                screenOptions={{
                    headerShown:false,
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        
                        borderTopLeftRadius: 35,
                        borderTopRightRadius: 35,   
                        height: 85,                  
                    }
                }}
            >
                <Tab.Screen name="Actividades" component={ActivitiesStack} options={{tabBarIcon: ({focused}) => (
                    <View style={{alignItems:"center", justifyContent:"center"}}>
                        <Image
                            source={require("../../assets/icons/actividades.png")}
                            resizeMode="contain"
                            style={{
                                width:35,
                                height:35,
                                tintColor: focused ? Colors.dark_orange : Colors.light_green
                            }}
                        />
                        <Text style={{fontSize:8,fontFamily:"MontserratSemiBold" ,color: focused ? Colors.dark_orange : Colors.light_green}}>Actividades</Text>
                    </View>
                ),}}/>
                <Tab.Screen name="Rentar" component={RentStack} options={{tabBarIcon: ({focused}) => (
                    <View style={{alignItems:"center", justifyContent:"center"}}>
                        <Image
                            source={require("../../assets/icons/rentar.png")}
                            resizeMode="contain"
                            style={{
                                width:35,
                                height:35,
                                tintColor: focused ? Colors.dark_orange : Colors.light_green
                            }}
                        />
                        <Text style={{fontSize:8,fontFamily:"MontserratSemiBold" ,color: focused ? Colors.dark_orange : Colors.light_green}}>Rentar</Text>
                    </View>
                ),}}/>
                <Tab.Screen name="Reservar" component={BookStack} options={{
                    tabBarIcon:({focused}) => (
                        <View style={{alignItems:"center", justifyContent:"center"}}>
                        <Image
                            source={require("../../assets/icons/reservar.png")}
                            resizeMode="contain"
                            style={{
                                width:40,
                                height:27,
                                tintColor: Colors.middle
                            }}
                        />
                        <Text style={{fontSize:10,fontFamily:"MontserratSemiBold" ,color: Colors.middle}}>Reservar</Text>
                    </View>    
                    ),
                    tabBarButton:(props) => (
                        <CustomTabBarButton {...props}/> 
                    )
                }}/>
                <Tab.Screen name="Mis Reservaciones" component={myReservationsStack} options={{tabBarIcon: ({focused}) => (
                    <View style={{alignItems:"center", justifyContent:"center"}}>
                        <Image
                            source={require("../../assets/icons/misReservas.png")}
                            resizeMode="contain"
                            style={{
                                width:35,
                                height:35,
                                tintColor: focused ? Colors.dark_orange : Colors.light_green
                            }}
                        />
                        <Text style={{fontSize:8,fontFamily:"MontserratSemiBold",color: focused ? Colors.dark_orange : Colors.light_green}}>Mis Reservaciones</Text>
                    </View>
                ),}}/>
                <Tab.Screen name="Perfil" component={ProfileStack} options={{tabBarIcon: ({focused}) => (
                    <View style={{alignItems:"center", justifyContent:"center"}}>
                        <Image
                            source={require("../../assets/icons/perfil.png")}
                            resizeMode="contain"
                            style={{
                                width:35,
                                height:35,
                                tintColor: focused ? Colors.dark_orange : Colors.light_green
                            }}
                        />
                        <Text style={{fontSize:8,fontFamily:"MontserratSemiBold",color: focused ? Colors.dark_orange : Colors.light_green}}>Perfil</Text>
                    </View>
                ),}}/>
            </Tab.Navigator>
        </NavigationContainer>
    )

}