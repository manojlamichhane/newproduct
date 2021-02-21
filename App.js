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
      category: "SUV",
      imageurl:
        "data:image/jpeg;base64,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",
    },
  ]);

  const addproduct = (value) => {
    setAllProducts([
      { ...value, id: Math.random().toString() },
      ...allproducts,
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
