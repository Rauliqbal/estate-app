import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import styles from '../styles/homepage.style'
import { cities } from '../data/utils'

export default function Cities() {
  return (
    <View style={{marginTop: 24, marginBottom: 48}}> 
    <Text style={styles.headerTitle}>Cities</Text>
    <FlatList 
      data={cities}
      renderItem={({item}) =>(
        <View style={{backgroundColor: "#FFF", paddingHorizontal:10, borderRadius: 10, paddingVertical: 10, flexDirection: "row", alignItems: "center", columnGap: 16}}>
          <Image style={{borderRadius: 8, width: 90, height: 70}} source={item.image}/>
          <View>
          <Text style={styles.cardTitle}>{item.title}</Text>
                  <Text style={styles.cardSubTitle}>{item.property} property</Text>
          </View>
        </View>
        
      )}
      contentContainerStyle={{rowGap: 16}}
    />
    </View>
  )
}