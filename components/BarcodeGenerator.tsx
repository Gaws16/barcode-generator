import { useState } from "react";
import { TextInput, View, Text } from "react-native";
import JsBarcode from "jsbarcode";
import Svg, { Path, Rect } from "react-native-svg";
import tw from "twrnc";
import Barcode from "./Barcode";
export default function BarcodeGenerator() {
  const [barcodeText, setBarcodeText] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={tw`flex justify-center items-center`}>
      <Text
        style={[
          tw`text-3xl font-bold text-purple-600 mb-6`,
          {
            textShadowColor: "#7c3aed", // purple-600
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 1,
          },
        ]}
      >
        Barcode Generator
      </Text>
      <TextInput
        placeholder="Enter text to generate barcode"
        placeholderTextColor={tw.color("stone-500/50")}
        style={[
          tw`border border-purple-500 text-lg  m-3 p-3 rounded-full`,
          isFocused && tw`border-2 border-purple-700`,
        ]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={barcodeText}
        onChangeText={setBarcodeText}
      />
      {barcodeText && <Barcode barcodeText={barcodeText} />}
    </View>
  );
}
