import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  Button,
} from "react-native";
import { Colors } from "../constants";
import RNPickerSelect from "react-native-picker-select";

const ProductForm = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [imageurl, setImageUrl] = useState("");

  return (
    <View style={styles.container}>
      <ScrollView>
        <TextInput
          style={styles.inputfield}
          value={title}
          onChangeText={(text) => setTitle(text)}
          placeholder="Product Title"
        />
        <TextInput
          style={{
            width: "100%",
            height: 100,
            borderBottomColor: Colors.primary,
            borderBottomWidth: 1,
          }}
          multiline={true}
          numberOfLines={3}
          value={desc}
          onChangeText={(text) => setDesc(text)}
          placeholder="Product Description"
        />
        <TextInput
          style={styles.inputfield}
          value={price}
          keyboardType="number-pad"
          onChangeText={(text) => setPrice(text)}
          placeholder="Product Price"
        />
        <TextInput
          style={styles.inputfield}
          value={imageurl}
          onChangeText={(text) => setImageUrl(text)}
          placeholder="Product Image Address"
        />
        <Text>{category}</Text>
        <RNPickerSelect
          value={category}
          onValueChange={setCategory}
          items={[
            { label: "Hatchback", value: "hatchback" },
            { label: "Sedan", value: "sedan" },
            { label: "Coupe", value: "coupe" },
            { label: "SUV", value: "suv" },
          ]}
        />
      </ScrollView>
      <Button
        color={Colors.primary}
        title="Add"
        onPress={() =>
          props.onClick({
            title,
            desc,
            price,
            imageurl,
            category,
          })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 14,
    backgroundColor: "white",
    padding: 10,
  },
  inputfield: {
    width: "100%",
    height: 50,
    marginBottom: 20,
    borderBottomColor: Colors.primary,
    borderBottomWidth: 1,
  },
});
export default ProductForm;
