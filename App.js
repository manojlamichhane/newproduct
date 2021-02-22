import React, { useState } from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import { Colors } from "./components/constants";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import Icons from "./components/Icons";
import ProductForm from "./components/ProductForm";
import Products from "./components/Products";
import FilteredProducts from "./components/FilteredProducts";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [allproducts, setAllProducts] = useState([
    {
      id: 1,
      title: "Ford EcoSport",
      desc:
        "Ford has added a sunroof to the Titanium variant of the EcoSport and has revised the SUV’s prices as well",
      price: "40,00,000",
      category: "suv",
      imageurl:
      "https://www.india.ford.com/content/dam/Ford/website-assets/ap/in/nameplate/ecosport/1.5l-dv5-diesel-engine-titanium/thumbnail/titanium.jpg",
    },
  ]);

  const addproduct = (value) => {
    setAllProducts([
      { ...value, id: Math.random().toString() },...allproducts,
    ]);
    setIsOpen(false);
  };

  const getFilter = () => {
    setFilterOpen(true);
  };
  return (
    <View style={styles.container}>
      <Header onView={getFilter} />
      <View style={styles.products}>
        <Products data={allproducts} />
      </View>
      <View style={styles.floatingIcon}>
        <Icons size={60} color={Colors.primary}>
          <AntDesign
            onPress={() => setIsOpen(true)}
            name="plus"
            size={30}
            color="white"
          />
        </Icons>
      </View>
      <View>
        <Modal visible={isOpen}>
          <View style={styles.addnavbar}>
            <Icons size={40} color="white">
              <Ionicons
                onPress={() => setIsOpen(false)}
                name="chevron-back-outline"
                size={24}
                color={Colors.primary}
              />
            </Icons>
            <Text style={{ marginLeft: 45, fontSize: 30, color: "white" }}>
              Add a Product
            </Text>
          </View>
          <ProductForm onClick={addproduct} />
        </Modal>
      </View>
      <View>
        <Modal visible={filterOpen}>
          <View style={styles.addnavbar}>
            <Icons size={40} color="white">
              <Ionicons
                onPress={() => setFilterOpen(false)}
                name="chevron-back-outline"
                size={24}
                color={Colors.primary}
              />
            </Icons>
            <Text style={{ marginLeft: 45, fontSize: 30, color: "white" }}>
              Products
            </Text>
          </View>
          <FilteredProducts data={allproducts} />
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: Colors.primary,
  },
  floatingIcon: {
    position: "absolute",
    bottom: 30,
    right: 10,
  },
  products: {
    flex: 2,
    backgroundColor: "white",
  },
  addnavbar: {
    flex: 1,
    padding: 10,
    backgroundColor: Colors.primary,
    flexDirection: "row",
  },
  addProduct: {
    flex: 2,
    backgroundColor: "white",
  },
});
