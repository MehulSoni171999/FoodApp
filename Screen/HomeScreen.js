import { StyleSheet, Text, View, TextInput, StatusBar, ScrollView, Pressable, FlatList } from 'react-native'
// import { SafeAreaView } from 'react-native-safe-area-context';

import React, { useEffect, useState } from 'react'
import { EvilIcons } from '@expo/vector-icons';
import Carousel from '../Component/Carousel';
import FoodType from '../Component/FoodType';
import QuickFood from '../Component/QuickFood';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import hoteldata from '../Data/hoteldata';
import MenuItem from '../Component/MenuItem';

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulate fetching data asynchronously
    setTimeout(() => {
      const fetchedData = hoteldata ;
      setData(fetchedData);
    }, 1000); // Simulate a delay of 2 seconds
  }, []);

  const handleSearch = (text) => {
    setSearchQuery(text);
    const filtered = data.filter(item => item.name.toLowerCase().includes(text.toLowerCase()));
    setFilteredData(filtered);
  };

  return (
    <ScrollView style={{ margintop: 40 }}>
      <StatusBar></StatusBar>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderWidth: 1, margin: 10, padding: 10, borderColor: "#cococo", borderRadius: 7 }} >
        <TextInput style={{ fontSize: 17 }} placeholder='search for Resturant iteam or more ' onChangeText={handleSearch} 
        value={searchQuery} />
        <EvilIcons name="search" size={24} color="orange" />
       
      </View>

        
 {searchQuery.length > 0 && (

   <View>
      <FlatList
        data={searchQuery ? filteredData : data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View >
<MenuItem  item={item}  />
          </View>
        )}
      />
      </View>
 )}

     
      <Carousel />
      <FoodType />
      <QuickFood />

      <View style={{
          
          flexDirection:"row",
          alignItems:'center',
          justifyContent:"space-around",
          
          }} >
        <Pressable style={{
          marginHorizontal: 10,
          flexDirection:"row",
          alignItems:'center',
          justifyContent:"space-around",
          width:100,
          borderWidth:1,
          borderRadius:20,
          borderColor:"#D0D0D0",
          padding:10,
          }}>
          <Text>Filter</Text>
          <MaterialCommunityIcons name="filter-variant" size={24} color="black" />
        </Pressable>
        <Pressable style={{
          marginHorizontal: 10,
          flexDirection:"row",
          alignItems:'center',
          justifyContent:"space-around",
          width:120,
          borderWidth:1,
          borderRadius:20,
          borderColor:"#D0D0D0",
          padding:10,
          }}>
          <Text>sort by Rating</Text>
        </Pressable>
        <Pressable style={{
          marginHorizontal: 10,
          flexDirection:"row",
          alignItems:'center',
          justifyContent:"space-around",
          width:100,
          borderWidth:1,
          borderRadius:20,
          borderColor:"#D0D0D0",
          padding:10,
          }}>
          <Text>sort by Price</Text>
        </Pressable>

      </View>
      {data.map((item,index)=>(
      <MenuItem  item={item} key={index} />
      ))}
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})