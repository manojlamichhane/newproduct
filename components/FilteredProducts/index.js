import React, { useState } from "react";
import { Text, View, StyleSheet, Modal } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import Products from "../Products";
import { Colors } from "../constants";
import Icons from "../Icons";
import { Ionicons } from "@expo/vector-icons";

const FilteredProducts = (props) => {
  const [all, setAll] = useState(props.data);
  const [category, setCategory] = useState("");
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [filteredOpen, setFilteredOpen] = useState(false);

  const changeFilter = (value) => {
    setFilteredOpen(true);
    setCategory(value);
    setFilteredProduct(all.filter((item) => item.category == category));
  };
  return (
    <View style={styles.container}>
      <RNPickerSelect
        value={category}
        onValueChange={(value) => changeFilter(value)}
        items={[
          { label: "Hatchback", value: "hatchback" },
          { label: "Sedan", value: "sedan" },
          { label: "Coupe", value: "coupe" },
          { label: "SUV", value: "suv" },
        ]}
      />
      <Products data={all} />

      <View style={styles.container}>
        <Modal visible={filteredOpen}>
          <View style={styles.navbar}>
            <Icons size={40} color="white">
              <Ionicons
                onPress={() => setFilteredOpen(false)}
                name="chevron-back-outline"
                size={24}
                color={Colors.primary}
              />
            </Icons>
            <Text style={{ marginLeft: 45, fontSize: 30, color: "white" }}>
              Products
            </Text>
          </View>

          <RNPickerSelect
            value={category}
            onValueChange={(value) => changeFilter(value)}
            items={[
              { label: "Hatchback", value: "hatchback" },
              { label: "Sedan", value: "sedan" },
              { label: "Coupe", value: "coupe" },
              { label: "SUV", value: "suv" },
            ]}
          />

          <Products data={filteredProduct} />
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 14,
    backgroundColor: "white",
  },
  navbar: {
    flex: 0.11,
    padding: 10,
    backgroundColor: Colors.primary,
    flexDirection: "row",
  },
});
export default FilteredProducts;
