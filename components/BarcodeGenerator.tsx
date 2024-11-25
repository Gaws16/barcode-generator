import { useRef, useState } from "react";
import { TextInput, View, Text } from "react-native";
import tw from "twrnc";
import Barcode from "./Barcode";
import BarcodeType from "react-native-barcode-svg";
export default function BarcodeGenerator() {
  const [barcodeText, setBarcodeText] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const barcodeRef = useRef<BarcodeType>(null);
  console.log(barcodeRef?.current);
  const saveBarcode = () => {
    
  }
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
          tw`border border-purple-500 text-lg  m-3 p-3 rounded-full w-80`,
          isFocused && tw`border-2 border-purple-700`,
        ]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={barcodeText}
        onChangeText={setBarcodeText}
        maxLength={50}
      />
      {barcodeText !== "" && (
        <Barcode barcodeText={barcodeText} ref={barcodeRef} handleSave={saveBarcode} />
      )}
    </View>
  );
}
