import { View, Text, Pressable ,Image } from 'react-native'
import React, { useState } from 'react';
import { FontAwesome } from "@expo/vector-icons";
import { useDispatch } from 'react-redux';
import { addToCart, decrementQuantity, incrementQuantity, removeFromCart } from '../redux/CartReducer';

const MenuComponent = ({food}, {index}) => {
      
  const dispatch = useDispatch();
  const [additems, setAddItems] = useState(0);
  const [selected, setSelected] = useState(false);


  return (
    <View>
      <Pressable style={{margin:10,flexDirection:'row',justifyContent:"space-between"}} key={index}>
        <View>
            <Text style={{fontSize:18,fontWeight:"bold"}}>{food.name}</Text>
            <Text>{food.price}</Text>
            <Text style={{marginTop:5,borderRadius:4}} >
                {[0,0,0,0,0].map((en,i)=>(
            <FontAwesome
            style={{paddingHorizontal:3}}
             name={i<Math.floor(food.rating) ? "star": "star-o"} 
             size={15} 
             color="#ff9900" />
            ))}</Text>
         <Text style={{width:180, marginTop:10,color:"grey"}}>{food.description.length > 30 ? food.description.substring(0,35) + "..." : food.description}</Text>
        </View>

        <Pressable style={{marginRight:10}}>
            <View>
                <Image style={{width:120,height:120, borderRadius:8}} source={{uri:food.image}}></Image>
           
           {selected ? (
               
               <Pressable
               style={{
                 position: "absolute",
                 top: 90,
                 left: 15,
 
                 flexDirection: "row",
                 paddingHorizontal: 10,
                 paddingVertical: 5,
                 alignItems: "center",
                 backgroundColor: "white",
                 borderRadius: 5,
               }}
             >
               <Pressable onPress={() => {
                 if(additems === 1){
                   dispatch(removeFromCart(food))
                   setSelected(false)
                   setAddItems(0);
                 }else{
                   setAddItems((c) => c - 1);
                   dispatch(decrementQuantity(food))
 
                 }
               }}>
                 <Text
                   style={{
                     fontSize: 25,
                     color: "green",
                     paddingHorizontal: 6,
                   }}
                 >
                   -
                 </Text>
               </Pressable>
 
               <Pressable>
                 <Text
                   style={{
                     fontSize: 20,
                     color: "green",
                     paddingHorizontal: 6,
                   }}
                 >
                   {additems}
                 </Text>
               </Pressable>
 
               <Pressable onPress={() => {
                 setAddItems((c) => c + 1);
                 dispatch(incrementQuantity(food))
               }}>
                 <Text
                   style={{
                     fontSize: 20,
                     color: "green",
                     paddingHorizontal: 6,
                   }}
                 >
                   +
                 </Text>
               </Pressable>
             </Pressable>

           ) : (     
               <Pressable  onPress={()=>{
          setSelected(true);
          if(additems==0){
            setAddItems((c)=>c + 1);
          }
          dispatch(addToCart(food))
        }}
             style={{
                position: "absolute",
                top: 90,
                left: 20,

                flexDirection: "row",
                paddingHorizontal: 25,
                paddingVertical: 5,
                alignItems: "center",
                backgroundColor: "white",
                borderRadius: 5,
              }}
        >
            <Text
        style={{
          fontSize: 16,
          fontWeight: "600",
          color: "#018749",
        }}
      >
        ADD
      </Text>
        </Pressable>) }


            </View>
        </Pressable>
      </Pressable>
    </View>
  )
}

export default MenuComponent