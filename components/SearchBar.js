import React, { useState } from "react";
import { TextInput, View, StyleSheet, Dimensions } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

export default function SearchBar({ fetchWeatherData }) {
  const [cityName, setCityName] = useState("");

  return (
    <View style={styles.SearchBar}>
      <TextInput
        placeholder="Enter City Name"
        value={cityName}
        onChangeText={(text) => setCityName(text)}
      />

      <EvilIcons
        name="search"
        size={40}
        color="black"
        onPress={() => fetchWeatherData(cityName)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  SearchBar: {
    marginTop: 35,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: Dimensions.get("screen").width - 20,
    borderWidth: 1.5,
    paddingVertical: 10,
    borderRadius: 25,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    backgroundColor: "lightgray",
    borderColor: "lightgray",
  },
});
