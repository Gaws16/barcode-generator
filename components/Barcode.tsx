import React from "react";
import Bcode from "react-native-barcode-svg";
import { Text, View } from "react-native";
import tw from "twrnc";

interface BarcodeProps {
  height?: number;
  width?: number;
  barcodeText?: string;
  format?: "CODE128" | "CODE39" | "EAN13" | "UPC-A";
}
const Barcode: React.FC<BarcodeProps> = ({
  height = 100,
  width = 300,
  barcodeText = "test",
  format = "CODE128",
}) => {
  return (
    <View style={tw`flex justify-center items-center`}>
      <Bcode
        value={barcodeText}
        format={format}
        maxWidth={width}
        height={height}
      />
      <Text>{barcodeText}</Text>
    </View>
  );
};
export default Barcode;