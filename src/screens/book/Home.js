//Libraries
import React from 'react'
import {SafeAreaView,View, Text, FlatList} from 'react-native'

//Styles
import * as Colors from '../../styles/colors'
import { x, y, margin_left, margin_top} from '../../styles/styles'

//Components
import SearchBar from '../components/SearchBar'
import Filter from './components/Filter'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'
import LoadingAnimation from '../components/LoadingAnimation'
import { places } from '../../data/data'

// MAIN
export default function Home() {

  function HeaderItem({item}) {
    return (
      <MediumCard item={item} type={"reservar"}/>
    )
  }

  function BodyItem({item}) {
    return (
      <SmallCard item={item} type={"reservar"}/>
    )
  }

  return(
    <SafeAreaView style={{flex:1, backgroundColor:Colors.background_color}}>
      <View style ={{flexDirection:"row", justifyContent:"space-between", marginHorizontal: margin_left}}>
        <SearchBar/>
        <Filter/>
      </View>
      <Text style={{fontSize:x(38),fontFamily:"MontserratSemiBold" ,color:Colors.dark_green, marginTop:margin_top, marginLeft: margin_left}}>Explorar</Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ height:y(500),marginTop:margin_top,marginLeft:margin_left}}
        data={places}
        keyExtractor={(item) => item.ID}
        renderItem={HeaderItem}
        initialScrollIndex={0}
        ListEmptyComponent={<LoadingAnimation/>}
        pagingEnabled
      />
      <Text style={{fontSize:x(38),fontFamily:"MontserratSemiBold",marginLeft: margin_left,marginTop:margin_top,color:Colors.dark_green}}>Recomendado</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{marginTop: margin_top}}
        data={places}
        keyExtractor={(item) => item.ID}
        renderItem={BodyItem}
        initialScrollIndex={0}
        numColumns={2}
        columnWrapperStyle={{justifyContent:"space-evenly"}}
      />
    </SafeAreaView>
  )
}