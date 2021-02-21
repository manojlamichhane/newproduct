import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Icons = (props) => (
  <View
    style={{
      ...styles.container,
      width: props.size,
      height: props.size,
      borderRadius: props.size / 2,
      backgroundColor: props.color,
    }}
  >
    {props.children}
  </View>
);
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Icons;
