import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../styles/homepage.style";
import { discovers } from "../data/utils";
import { FONT } from "../constant/theme";

export default function Discovers() {
  return (
    <View style={{ marginTop: 24 }}>
      <Text style={styles.headerTitle}>Staff Picks</Text>
      <FlatList
        data={discovers}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <View
              style={{ backgroundColor: "#FFF", padding: 10, borderRadius: 10 }}
            >

              <View style={{position:"relative"}}>
              <View style={{position:"absolute", zIndex: 2, backgroundColor: "#322E4A",borderRadius: 100, marginLeft:10,marginTop: 10}}><Text style={{color: "#F7AF4B", fontSize: 8, paddingHorizontal: 6, paddingVertical:2, fontFamily: FONT.semibold}}>New</Text></View>
              <Image
                style={{ width: 180, height: 110, borderRadius: 8 }}
                source={item.image}
              />
              </View>
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10
                }}
              >
                <View>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  <Text style={styles.cardSubTitle}>{item.surface}</Text>
                </View>
                <Text style={styles.cardPrice}>${item.price}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.title}
        horizontal
        contentContainerStyle={{ columnGap: 16 }}
      />
    </View>
  );
}
