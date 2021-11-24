//Libraries
import React, {useState,  useEffect} from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet, Switch} from 'react-native';
import * as Animatable from 'react-native-animatable';
//Styles
import * as Colors from '../../styles/colors'
import { x, y, margin_left, margin_top} from '../../styles/styles'

export default function Profile() {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
    return (
      <View style={{flex:1, backgroundColor:Colors.light_green}}>
        <View style={{flex: 1.5}}>   
          <Image
              source={{uri:"https://images.unsplash.com/photo-1476979735039-2fdea9e9e407?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}}
              resizeMode="cover"
              style={{width:x(600), height:y(380),position:"absolute",opacity:0.7}}
          />
          <TouchableOpacity style={{marginTop:x(60), marginRight:x(30)}}>
            <Image
                source={require("../../../assets/icons/logout.png")}
                resizeMode="contain"
                style={{width:x(45),height:y(45),tintColor:Colors.middle,position:"absolute", alignSelf:"flex-end"}}
            />
          </TouchableOpacity>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={{flex: 4,backgroundColor: '#fff',borderTopLeftRadius: 50,borderTopRightRadius: 50, alignItems:"center"}}
        >
            <Image
              source={{uri:"https://images.unsplash.com/photo-1484627147104-f5197bcd6651?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}}
              resizeMode="cover"
              style={{width:x(230), height:y(230),borderRadius:x(165),position:"absolute", marginTop:(-(x(100))), alignSelf:"center", borderWidth:2, borderColor:Colors.light_green}}
            />    
             <TouchableOpacity style={{width:x(65),height:y(65),borderRadius:x(40),backgroundColor:Colors.light_green, borderWidth:1,borderColor:Colors.middle,position:"absolute", marginTop:x(80),right:x(210),justifyContent:"center", alignItems:"center"}}>
                <Image
                    source={require("../../../assets/icons/camara.png")}
                    resizeMode="contain"
                    style={{width:x(38),height:y(38)}}
                />
             </TouchableOpacity>
            <Text style={{fontSize:x(38),fontFamily:"MontserratSemiBold" ,color:Colors.dark_green, marginTop:x(150)}}>Hola Amy</Text>
            <TouchableOpacity style={{flexDirection:"row",width:x(500), height:y(100),borderRadius:x(25),backgroundColor:"white",alignItems:"center",marginTop:margin_top,...styles.Shadow}}>
                <Image
                    source={require("../../../assets/icons/cards.png")}
                    resizeMode="contain"
                    style={{width:x(40),height:y(40), marginLeft:margin_left}}
                />
                <Text style={{fontSize:x(30),fontFamily:"Montserrat" ,color:Colors.light_green, marginLeft:margin_left}}>Método de pago</Text>
            </TouchableOpacity>
            <View style={{flexDirection:"row",width:x(500), height:y(100),borderRadius:x(25),backgroundColor:"white",alignItems:"center",marginTop:margin_top,...styles.Shadow}}>
                <Image
                    source={require("../../../assets/icons/campana.png")}
                    resizeMode="contain"
                    style={{width:x(40),height:y(40), marginLeft:margin_left}}
                />
                <Text style={{fontSize:x(30),fontFamily:"Montserrat" ,color:Colors.light_green, marginLeft:margin_left}}>Notificaciones</Text>
                <View style={{marginLeft:x(100)}}>
                  <Switch
                    trackColor={{ false: "#C9C9C9", true: Colors.light_green}}
                    thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
                    ios_backgroundColor="#C9C9C9"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                  />
                </View>
            </View>
            <TouchableOpacity style={{flexDirection:"row",width:x(500), height:y(100),borderRadius:x(25),backgroundColor:"white",alignItems:"center",marginTop:margin_top,...styles.Shadow}}>
                <Image
                    source={require("../../../assets/icons/password.png")}
                    resizeMode="contain"
                    style={{width:x(40),height:y(40), marginLeft:margin_left}}
                />
                <Text style={{fontSize:x(30),fontFamily:"Montserrat" ,color:Colors.light_green, marginLeft:margin_left}}>Cambiar Contraseña</Text>
            </TouchableOpacity>
        </Animatable.View>
      </View>
    );
};

const styles = StyleSheet.create({
  Shadow: {
     shadowColor: "#BDBDBD",
      shadowOffset: {
          width: 0,
          height: 10,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elevation:2
   }
})

