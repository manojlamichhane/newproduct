import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../constants";
import Icons from "../Icons";
const Header = (props) => (
  <View style={styles.container}>
    <Text style={{ marginRight: 90, fontSize: 30, color: "white" }}>
      Gallery
    </Text>
    <View>
      <Icons size={40} color="white">
        <Ionicons
          onPress={() => props.onView()}
          name="menu"
          size={24}
          color={Colors.primary}
        />
      </Icons>
    </View>
  </View>
);
const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
export default Header;
