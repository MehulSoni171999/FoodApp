import { View, Text, FlatList, Dimensions, Image } from 'react-native'
import React from 'react'
 const img = require("../assets/6059923.jpg")
const Carousel = () => {

  const screenWidth =Dimensions.get("window").width;
const CarouselData = [
{
  id:"01",

  image:require("../assets/6059923.jpg")
},
{
  id:"02",
  image:require("../assets/img4.jpg"),
},
{
  id:"03",
  image:require("../assets/img3.jpg"),

}

]

const renderItem =({item, index})=>{

  return (
    <View>
<Image source={item.image} style={{height:200,width:screenWidth, } } ></Image>
 {/* <Text>h:{item.id} xccmcdmcdmcmckfc</Text>  */}
    </View>
  )
}

  return (
    <View>
      <Text >bbnnn</Text>

      <FlatList data={CarouselData} renderItem={renderItem} horizontal={true} pagingEnabled={true}/>
    </View>
  )
}

export default Carousel 