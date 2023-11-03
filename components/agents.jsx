import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import styles from '../styles/homepage.style'
import { agents } from '../data/utils'
import { FONT } from '../constant/theme'

export default function Agents() {
  return (
    <View style={{marginTop: 24}}> 
      <Text style={styles.headerTitle}>Best Agents</Text>
      <FlatList data={agents} renderItem={({item})=> (
        <View style={{padding: 16, backgroundColor: "#FFF",borderRadius: 10, alignItems:"center", width: 90}}>
          <Image source={item.image} style={{width: 40, height: 40}}/>
          <Text style={{fontFamily: FONT.semibold, fontSize: 12, marginTop: 10}}>{item.title}</Text>
          <Text style={{fontSize: 12, color: "#6B6978"}}>{item.customer} Sold</Text>
          </View>
      )}
      contentContainerStyle={{columnGap: 16}}
      horizontal
      />
    </View>
  )
}