import { View, Text, ScrollView,Pressable } from 'react-native'
import React from 'react'
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { cleanCart, decrementQuantity, incrementQuantity } from '../redux/CartReducer';
import RazorpayCheckout from 'react-native-razorpay';

const CartScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();


    const total = cart
    .map((item) => item.price * item.quantity)
    .reduce((curr, prev) => curr + prev, 0);

    const instructions = [
        {
          id: "0",
          name: "Avoid Ringing",
          iconName: "bell",
        },
        {
          id: "1",
          name: "Leave at the door",
          iconName: "door-open",
        },
        {
          id: "2",
          name: "directions to reach",
          iconName: "directions",
        },
        {
          id: "3",
          name: "Avoid Calling",
          iconName: "phone-alt",
        },
      ];

      const handlePayment = () => {
        const options = {
          description: 'Buy BMW CAR',
          image: 'https://i.imgur.com/3g7nmJC.png',
          currency: 'INR',
          key: 'rzp_test_vQMmsZeL61EJYD' ,
          amount: total+50,
          name: 'test order',
          order_id: "", //Replace this with an order_id created using Orders API. Learn more at https://razorpay.com/docs/api/orders.
          prefill: {
            email: 'xyz@gmail.com',
            contact: '9999999999',
            name: 'User 1'
          },
          theme: { color: '#F37254' }
        }
    
        RazorpayCheckout.open(options).then((data) => {
          // handle success
          alert(`Success: ${data.razorpay_payment_id}`);
        })
          .catch((error) => {
            // handle failure
            console.log(error)
            alert(`Error: ${error.code} | ${error.description}`);
          });

          navigation.navigate("Payment");
            dispatch(cleanCart());
      }
  return (

    <>
    <ScrollView style={{ marginTop: 50 }}>
                  {total > 0 ? (  
                    <>
        <View
          style={{
            padding: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons
            onPress={() => navigation.goBack()}
            name="arrow-back"
            size={24}
            color="black"
          />
          <Text style={{ fontSize: 17, fontWeight: "600", marginLeft: 3 }}>
            {route.params.name}
          </Text>
        </View>

        <View
              style={{
                backgroundColor: "white",
                padding: 15,
                borderRadius: 8,
                marginHorizontal: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "500" }}>
                Ordering for Someone else ?{" "}
              </Text>
              <Text
                style={{ fontSize: 16, fontWeight: "700", color: "#FF4500" }}
              >
                Add Details
              </Text>
            </View>


            
            <View
              style={{
                marginTop: 16,
                marginHorizontal: !5,
                backgroundColor: "white",
                borderRadius: 12,
                padding: 14,
                marginLeft: 10,
                marginRight: 10,
              }}
            >
              {cart.map((item, index) => (
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginVertical: 10,
                  }}
                  key={index}
                >
                  <Text style={{ width: 100, fontSize: 16, fontWeight: "600" }}>
                    {item.name}
                  </Text>

                  <Pressable
                    style={{
                      flexDirection: "row",
                      paddingHorizontal: 10,
                      paddingVertical: 5,
                      alignItems: "center",
                      borderColor: "#BEBEBE",
                      borderWidth: 0.5,
                      borderRadius: 10,
                    }}
                  >
                    <Pressable
                      onPress={() => {
                        dispatch(decrementQuantity(item));
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 20,
                          color: "green",
                          paddingHorizontal: 6,
                          fontWeight: "600",
                        }}
                      >
                        -
                      </Text>
                    </Pressable>

                    <Pressable>
                      <Text
                        style={{
                          fontSize: 19,
                          color: "green",
                          paddingHorizontal: 8,
                          fontWeight: "600",
                        }}
                      >
                        {item.quantity}
                      </Text>
                    </Pressable>

                    <Pressable
                      onPress={() => {
                        dispatch(incrementQuantity(item));
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 20,
                          color: "green",
                          paddingHorizontal: 6,
                          fontWeight: "600",
                        }}
                      >
                        +
                      </Text>
                    </Pressable>
                  </Pressable>

                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                    ₹{item.price * item.quantity}
                  </Text>
                </View>
              ))}
            </View>

            <View style={{ padding: 10 }}>
              <Text style={{ fontSize: 16, fontWeight: "600" }}>
                Delivery Instructions
              </Text>
              <ScrollView
                horizontal
                style={{ marginTop: 10 }}
                showsHorizontalScrollIndicator={false}
              >
                {instructions.map((item, i) => (
                  <Pressable
                    style={{
                      margin: 10,
                      borderRadius: 10,
                      padding: 10,
                      backgroundColor: "white",
                    }}
                  >
                    <View>
                      <FontAwesome5
                        name={item.iconName}
                        size={22}
                        color={"gray"}
                      />
                      <Text
                        style={{
                          width: 75,
                          fontSize: 13,
                          color: "#383838",
                          paddingTop: 10,
                        }}
                      >
                        {item.name}
                      </Text>
                    </View>
                  </Pressable>
                ))}
              </ScrollView>
            </View>

            <View style={{ marginHorizontal: 10 }}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Billing Details
              </Text>
              <View
                style={{
                  backgroundColor: "white",
                  borderRadius: 7,
                  padding: 10,
                  marginTop: 15,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{ fontSize: 18, fontWeight: "400", color: "gray" }}
                  >
                    Item Total
                  </Text>
                  <Text style={{ fontSize: 18, fontWeight: "400" }}>
                    ₹{total}
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginVertical: 8,
                  }}
                >
                  <Text
                    style={{ fontSize: 18, fontWeight: "400", color: "gray" }}
                  >
                    Delivery Fee | 1.2KM
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "400",
                      color: "#FF4500",
                    }}
                  >
                    FREE
                  </Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text
                    style={{ fontSize: 18, fontWeight: "500", color: "gray" }}
                  >
                    Free Delivery on Your order
                  </Text>
                </View>

                <View
                  style={{
                    borderColor: "gray",
                    height: 1,
                    borderWidth: 0.5,
                    marginTop: 10,
                  }}
                />

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginVertical: 10,
                  }}
                >
                  <Text
                    style={{ fontSize: 18, fontWeight: "500", color: "gray" }}
                  >
                    Delivery Tip
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "400",
                      color: "#FF4500",
                    }}
                  >
                    ADD TIP
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{ fontSize: 18, fontWeight: "500", color: "gray" }}
                  >
                    Taxes and Charges
                  </Text>

                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "400",
                      color: "#FF4500",
                    }}
                  >
                    50
                  </Text>
                </View>

                <View
                  style={{
                    borderColor: "gray",
                    height: 1,
                    borderWidth: 0.5,
                    marginTop: 10,
                  }}
                />

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginVertical: 8,
                  }}
                >
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                    To Pay
                  </Text>
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                    {total + 50}
                  </Text>
                </View>
              </View>
            </View>
            </>
            ) :(

                <View
                style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
              >
                <Text
                  style={{ textAlign: "center", fontSize: 16, fontWeight: "600" }}
                >
                  Your Cart is Empty!
                </Text>
              </View>
            ) }

   

        </ScrollView>

        {total === 0 ? null : (
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "white",
            marginBottom: 20,
            padding: 20,
          }}
        >
          <View>
            <Text style={{fontSize:18,fontWeight:"600"}}>₹{total + 50}</Text>
            <Text style={{color:"#00A877",fontSize:17}}>View Detailed Bill</Text>
          </View>

          <Pressable
          onPress={handlePayment}
            style={{
              backgroundColor: "#00A877",
              padding: 14,
              width: 200,
              borderRadius: 6,
            }}
          >
            <Text style={{color:"white",fontSize:16,fontWeight:"bold",textAlign:"center"}}>Proceed To pay</Text>
          </Pressable>
        </Pressable>
      )}
    </>
    
  )
}

export default CartScreen