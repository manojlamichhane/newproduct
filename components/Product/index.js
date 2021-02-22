import React from 'react';
import { View,Text,StyleSheet,ImageBackground,TouchableHighlight } from 'react-native';
import { Colors } from "../constants";

const Product = (props) => {
    return(
    <View>
    {props.data .map((item) => {
          return (
            <View key={item.id}>
              <ImageBackground
                resizeMode="contain"
                style={styles.image}
                source={{ uri: item.imageurl }}
                  >
                    <View style={styles.badge}>
                      <Text style={{ color: "white", paddingHorizontal: 10 }}>
                        {item.title}
                      </Text>
                    </View>
                  </ImageBackground>

                  <View style={styles.description}>
                    <Text
                      style={{
                        color: Colors.primary,
                        fontSize: 18,
                        marginBottom: 80,
                      }}
                    >
                      {item.desc}
                    </Text>
                    <View style={styles.button}>
                      <Text
                        style={{
                          color: "white",
                          fontSize: 18,
                        }}
                      >
                        {item.price}
                      </Text>
                    </View>
                    <View style={styles.button}>
                      <Text
                        style={{
                          color: "white",
                          fontSize: 18,
                        }}
                      >
                        {item.category}
                      </Text>
                    </View>

                    <TouchableHighlight
                      activeOpacity={0.1}
                      underlayColor="white"
                      onPress={() => console.log("hello")}
                    >
                      <View style={styles.button}>
                        <Text
                          style={{
                            color: "white",
                            fontSize: 18,
                          }}
                        >
                          Book for a test ride
                        </Text>
                      </View>
                    </TouchableHighlight>
                  </View>
                </View>
              );
            })}
    </View>
)};
const styles= StyleSheet.create({
    image: {
    paddingHorizontal: 10,
    width: "100%",
    height: 200,
  },
  description: {
    marginHorizontal: 20,
    borderRadius: 20,
    backgroundColor: "white",
  },
  button: {
    backgroundColor: Colors.primary,
    marginBottom: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  badge:{
      backgroundColor:"black",
      position:"absolute",
      top:180,
      left:"40%",
      height:"10%",
      borderRadius:10,
      alignItems:"center",
      justifyContent:"center"
  }
})
export default Product;
