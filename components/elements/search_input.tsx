import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

export default function SearchInput() {
  const [searchText, setSearchText] = useState<string>("");
  const [isFocus, setIsFocus] = useState<boolean>(false);

  return (
    <TextInput
      style={
        isFocus
          ? { ...styles.input, ...styles.inputFocused }
          : { ...styles.input }
      }
      onChangeText={setSearchText}
      value={searchText}
      placeholder="Search"
      placeholderTextColor="#d3d3d3"
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#353535",
    backgroundColor: "#1D1944",
    paddingVertical: 12,
    paddingHorizontal: 16,
    color: "#fff",
  },
  inputFocused: {},
});
