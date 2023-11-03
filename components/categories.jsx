import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from '../styles/homepage.style'
import { categories } from '../data/utils'

export default function Categories() {
  return (
    <View style={{marginTop: 19,}}>
      <Text style={styles.headerTitle}>Categories</Text>
      <FlatList 
        data={categories}
        renderItem={({item}) => (
          <View style={{alignItems: "center"}}>
            <TouchableOpacity style={styles.categoriesBtn}>
            <Image style={{width: 24, height: 24}} source={item.icon}/>
          </TouchableOpacity>
            <Text style={styles.categoriesBtnText}>{item.title}</Text>
          </View>
        )}
        keyExtractor={(item) => item.title}
        contentContainerStyle={{columnGap: 16}}
        horizontal
      />
    </View>
  )
}