//Libraries
import React, {useState,  useEffect} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native'
import { useNavigation } from '@react-navigation/native';

//Styles
import * as Colors from '../../../styles/colors'
import { x, y, margin_left, margin_top } from '../../../styles/styles'
//Components
import BackButton from '../../components/BackButton'
import BookButton from '../../components/BookButton'
// MAIN
export default function Book({route}) {

    const navigation = useNavigation();
    
    function Component() {
            return (
                <ScrollView style={{flex:1,backgroundColor: Colors.light_green }}>
                <View style={{width:x(600),height:y(880)}}>
                     <Image
                       source={{uri: route.params.item.LargeImage}}
                       resizeMode="cover"
                       style={{width:x(600),height:y(950),position:"absolute",opacity:route.params.item.Type == "Light" ? 0.5 : 1}}
                     />
                     <BackButton/>
                     <View style={{flex:2, marginHorizontal:x(75), marginTop:margin_top}}>
                         <Text style={{fontSize:x(32),fontFamily:"MontserratSemiBold" ,color:Colors.middle}}>{route.params.item.City}</Text>
                         <Text style={{fontSize:x(80),fontFamily:"MontserratLight" ,color:Colors.middle}} numberOfLines={3}>{route.params.item.Name}</Text>
                     </View>
                     <View style={{flex:1,alignItems:"flex-end",marginHorizontal:x(75),marginTop:margin_top}}>
                        {( route.params.type == "reservar" ?
                            <Text style={{fontSize:x(20),fontFamily:"Montserrat" ,color:Colors.middle}}>Entrada: {route.params.item.Price}</Text>
                            : 
                            <Text style={{fontSize:x(20),fontFamily:"Montserrat" ,color:Colors.middle}}>Costo: {route.params.item.Price}</Text>
                        )}
                         
                     </View>
                     <View style={{flexDirection:"row", justifyContent:"space-between", marginHorizontal:x(75), marginBottom:x(40)}}>
                        {( route.params.type == "reservar" ?
                            <TouchableOpacity
                            style={{width:x(200), height:y(95),borderRadius:x(23) ,backgroundColor:Colors.middle, justifyContent:"center", alignItems:"center"}}
                            onPress={() => {navigation.navigate('Actividades')}}
                            >
                                <Image
                                    source={require("../../../../assets/icons/actividades.png")}
                                    resizeMode="contain"
                                    style={{width:x(50),height:y(50),tintColor:Colors.light_green}}
                                />
                                <Text style={{fontSize:x(25),fontFamily:"MontserratLight" ,color:Colors.light_green}}>Actividades</Text>
                            </TouchableOpacity>
                            : 
                            <TouchableOpacity
                            style={{width:x(200), height:y(95),borderRadius:x(23) ,backgroundColor:Colors.middle, justifyContent:"center", alignItems:"center"}}
                            onPress={() => {navigation.navigate('Home')}}
                            >
                                <Image
                                    source={require("../../../../assets/icons/reservar.png")}
                                    resizeMode="contain"
                                    style={{width:x(50),height:y(50),tintColor:Colors.light_green}}
                                />
                                <Text style={{fontSize:x(25),fontFamily:"MontserratLight" ,color:Colors.light_green}}>Reservar</Text>
                            </TouchableOpacity>
                        )}
                         <TouchableOpacity
                             style={{width:x(200), height:y(95),borderRadius:x(23) ,backgroundColor:Colors.dark_orange,justifyContent:"center", alignItems:"center"}}
                             onPress={() => {navigation.navigate('Rentar')}}
                         >
                              <Image
                                 source={require("../../../../assets/icons/rentar.png")}
                                 resizeMode="contain"
                                 style={{width:x(50),height:y(50),tintColor:Colors.middle}}
                             />
                             <Text style={{fontSize:x(25),fontFamily:"MontserratLight" ,color:Colors.middle}}>Rentar Equipo</Text>
                         </TouchableOpacity>
                     </View>
                     
                </View>
                <View style={{flex:1, backgroundColor:Colors.background_color, borderTopLeftRadius:x(80), borderTopRightRadius:x(80)}}>
                     <TouchableOpacity 
                        style={{width:x(120),height:y(8) ,backgroundColor:"#D9D9D7", borderRadius:x(8), alignSelf:"center", marginTop:margin_top}}
                    />
                    <Text style={{fontSize:x(48),fontFamily:"MontserratSemiBold" ,color:Colors.dark_green, marginTop:margin_top,marginLeft:x(75)}}>Acerca De</Text>
                    <Text style={{fontSize:x(25),fontFamily:"MontserratLight" ,color:Colors.base_text, marginTop:margin_top,marginHorizontal:x(75)}}>{route.params.item.Description}</Text>
                    {( route.params.type == "reservar" ?
                            <View style={{flexDirection:"row",marginLeft:x(75), marginTop:x(10),alignItems:"center"}}>
                            <Image
                                source={require("../../../../assets/icons/FogataComplete.png")}
                                resizeMode="contain"
                                style={{width:x(30),height:y(50),tintColor:Colors.light_orange, marginRight:x(10)}}
                            />
                            <Image
                                source={require("../../../../assets/icons/FogataComplete.png")}
                                resizeMode="contain"
                                style={{width:x(30),height:y(50),tintColor:Colors.light_orange, marginRight:x(10)}}
                            />
                            <Image
                                source={require("../../../../assets/icons/FogataComplete.png")}
                                resizeMode="contain"
                                style={{width:x(30),height:y(50),tintColor:Colors.light_orange, marginRight:x(10)}}
                            />
                            <Image
                                source={require("../../../../assets/icons/FogataComplete.png")}
                                resizeMode="contain"
                                style={{width:x(30),height:y(50),tintColor:Colors.light_orange, marginRight:x(10)}}
                            />
                            <Image
                                source={require("../../../../assets/icons/Fogata.png")}
                                resizeMode="contain"
                                style={{width:x(30),height:y(50),tintColor:Colors.light_orange, marginRight:x(10)}}
                            />
                            <TouchableOpacity>
                                <Text style={{fontSize:x(20),fontFamily:"MontserratSemiBold" ,color:Colors.light_green}}>{route.params.item.Grade} (431) Comentarios</Text>
                            </TouchableOpacity>
                        </View>
                        : 
                        <TouchableOpacity style={{marginLeft:x(75), marginTop:x(10)}}>
                            <Text style={{fontSize:x(20),fontFamily:"MontserratSemiBold" ,color:Colors.light_green, textDecorationLine:"underline"}}>Experiencia Necesaria: {route.params.item.Experiencia}</Text>
                        </TouchableOpacity>
                    )}
                    <View style={{flexDirection:"row", marginHorizontal:x(55), marginTop:margin_top}}>
                        <Image
                        source={{uri: route.params.item.LargeImage}}
                        resizeMode="cover"
                        style={{width:x(180),height:y(260),opacity:1, borderRadius:x(25)}}
                        />
                        <View  style={{marginHorizontal:x(8), justifyContent:"space-between"}}>
                            <Image
                                source={{uri: route.params.item.Image}}
                                resizeMode="cover"
                                style={{width:x(200),height:y(120),opacity:1, borderRadius:x(25)}}
                            />
                            <Image
                                source={{uri:route.params.item.SecondImage}}
                                resizeMode="cover"
                                style={{width:x(200),height:y(120),opacity:1, borderRadius:x(25)}}
                            />
                        </View>
                        <View  style={{justifyContent:"space-between"}}>
                            <Image
                                source={{uri:route.params.item.ThirdImage}}
                                resizeMode="cover"
                                style={{width:x(100),height:y(150),opacity:1, borderRadius:x(25)}}
                            />
                            <View style={{width:x(100),height:y(100),borderRadius:x(25), backgroundColor:Colors.light_green, alignItems:"center", justifyContent:"center"}}>
                                <Image
                                    source={{uri:route.params.item.FourthImage}}
                                    resizeMode="cover"
                                    style={{width:x(100),height:y(100),opacity:0.2, borderRadius:x(25), position:"absolute"}}
                                />
                                 <Text style={{fontSize:x(40),fontFamily:"MontserratSemiBold" ,color:Colors.middle}}>+1</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection:"row",width:x(600),height:y(130) , borderTopRightRadius:x(80),borderTopLeftRadius:x(80), alignItems:"center", justifyContent:"space-evenly"}}>
                        <View style={{justifyContent:"center"}}>
                            <Text style={{fontSize:x(30),fontFamily:"MontserratSemiBold" ,color:Colors.dark_green}}>{route.params.item.Price}</Text>
                            <Text style={{fontSize:x(20),fontFamily:"MontserratLight" ,color:Colors.base_text}}>por persona</Text>
                        </View>
                        <BookButton/>
                    </View>
                </View>
             </ScrollView>
            ) 
      }
  
  return(
      <Component/>
  )
}

