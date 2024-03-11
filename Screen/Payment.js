import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
const Payment = () => {
  return (
    <View>
      <View
          style={{
            height: 300,
            backgroundColor: "#ffb3b3",
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
            alignItems:"center",
            justifyContent:"center"
          }}
        >
          <Ionicons name="checkmark-done-circle-outline" size={24} color="grey" />
                <Text style={{marginTop:20,fontSize:19,fontWeight:"600",textAlign:"center"}}>Your Order Has been Recieved</Text>

        </View> 
    </View>
  )
}

export default Payment