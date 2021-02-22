import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  Text,View,ImageBackground,StyleSheet,ScrollView,
  TouchableHighlight,Modal,Image,Button,
} from "react-native";
import { Colors } from "../constants";
import Icons from "../Icons";
import Product from '../Product'

const Products = (props) => {
  const [productOpen, setProductOpen] = useState(false);
  const [pressedProduct, setPressedProduct] = useState([]);
  const all = props.data;
  
  const getproduct = (value) => {
    setProductOpen(true);
    setPressedProduct(
      all.filter((item) => {
        return item.id == value;
      })
    );
  };

  return (
    <View>
      <ScrollView>
        {all.map((product) => {
          return (
            <View key={product.id} style={{ marginVertical: 10 }}>
              <TouchableHighlight
                activeOpacity={0.5}
                underlayColor={Colors.primary}
                onPress={() => getproduct(product.id)}
              >
                <ImageBackground
                  style={styles.image}
                  resizeMode="cover"
                  source={{ uri: product.imageurl }}
                >
                  <View>
                    <View style={styles.productcategory}>
                      <Text>{product.category}</Text>
                    </View>
                    <View style={styles.productprice}>
                      <Text>{product.price}</Text>
                    </View>
                    <View style={styles.producttitle}>
                      <Text style={styles.productDescription}>
                        {product.title}
                      </Text>
                    </View>
                  </View>
                </ImageBackground>
              </TouchableHighlight>
            </View>
          );
        })}
      </ScrollView>

      <View style={styles.product}>
        <Modal visible={productOpen}>
          <View style={styles.addnavbar}>
            <Icons size={40} color="white">
              <Ionicons
                onPress={() => setProductOpen(false)}
                name="chevron-back-outline"
                size={24}
                color={Colors.primary}
              />
            </Icons>
            <Text style={{ marginLeft: 80, fontSize: 30, color: "white" }}>
              Product
            </Text>
          </View>
          <Product data={pressedProduct}/>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    paddingHorizontal: 10,
    width: "100%",
    height: 200,
  },
  detail: {
    width: "100%",
    backgroundColor: "grey",
    height: 200,
    borderRadius: 20,
  },
  productDescription: {
    fontSize: 20,
    fontWeight: "bold",
  },
  producttitle: {
    position: "absolute",
    top: 170,
    width: "100%",
    height: 30,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  product: {
    flex: 1,
    backgroundColor: "white",
  },
  addnavbar: {
    height:"9%",
    padding: 10,
    backgroundColor: Colors.primary,
    flexDirection: "row",
  },
  productcategory: {
    position: "absolute",
    left: 0,
    width: "20%",
    height: 30,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  productprice: {
    position: "absolute",
    right: 0,
    width: "20%",
    height: 30,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Products;
