import { View, Text, ScrollView,Image } from 'react-native'
import React from 'react'

const FoodType = () => {

  const types = [
    { id: 1,
       name: 'pizza',
       image:"https://png.pngtree.com/png-vector/20230321/ourmid/pngtree-modern-kitchen-food-boxed-cheese-lunch-pizza-png-image_6651523.png" },
    { id: 2,
       name: 'Salads',
       image:"https://w7.pngwing.com/pngs/650/1008/png-transparent-greek-salad-caesar-salad-wrap-bean-salad-pasta-salad-salad-vegetable-salad-leaf-vegetable-food-recipe.png"
    },
    { id: 3, 
      name: 'Burger',
       image:"https://png.pngtree.com/png-vector/20230417/ourmid/pngtree-food-beef-burger-png-image_6712821.png"
  },
  { id: 4, 
    name: 'noodels',
     image:"https://e7.pngegg.com/pngimages/579/604/png-clipart-seafood-noodles-fried-noodles-chow-mein-peking-duck-chinese-cuisine-laksa-shrimp-and-vegetable-fried-noodles-food-seafood-thumbnail.png"
},
{ id: 5, 
  name: 'Sandwich',
   image:"https://png.pngtree.com/png-vector/20210415/ourmid/pngtree-vegetarian-diet-sandwich-png-image_3219823.jpg"
},
    { id: 6,
       name: 'Biryani ',
      image:"https://png.pngtree.com/png-clipart/20230527/original/pngtree-chicken-biryani-top-view-png-image_9171063.png" },
    // Add more categories as needed
  ];

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>

        {types.map((item, index) => (
          <View key={index} style={{margin:10 , justifyContent:"space-between",alignItems:"center"}}>
            <Image source={{uri:item.image}} style={{width:60,height:60,borderRadius:30}} ></Image>
            <Text>{item.name}</Text>
          </View>))}


      </ScrollView>
    </View>
  )
}

export default FoodType