import { View, Text, ScrollView, Pressable, ImageBackground } from 'react-native'
import React from 'react'
import quickfoodData from '../Data/quickfoodData'
import { MaterialIcons } from '@expo/vector-icons';
const QuickFood = () => {
  const data = quickfoodData;
  return (
    <View style={{ margin: 10 }}>
      <Text style={{ fontSize: 16, fontWeight: "500" }}>Get it Quickly</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {
          data.map((item, index) => (
            <Pressable key={index} style={{ margin: 10 }}>
              <ImageBackground imageStyle={{ borderRadius: 15 }} source={{ uri: item.image }} style={{ aspectRatio: 5 / 6, height: 178, }}>

                              <Text style={{ fontSize: 30,bottom:10, left:10, position:'absolute', color:"#dadada", fontWeight:"700", }}>{item.offer} OFF</Text>

              </ImageBackground>
             <Text style={{marginTop:10, fontWeight:"700",fontSize:15}}>{item.name}</Text>
            <View style={{flexDirection:'row',alignItems:'center',marginTop:3}}>
            <MaterialIcons name="stars" size={24} color="green" />
            <Text style={{marginLeft:3}}>{item.rating}</Text>
            <Text style={{marginLeft:3}}>.</Text>
            <Text style={{marginLeft:3}}>{item.time}mins</Text>


            </View>
            </Pressable>
          ))

        }
      </ScrollView>
    </View>
  )
}

export default QuickFood