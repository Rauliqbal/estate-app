import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import icons from '../constant/icons'
import styles from '../styles/homepage.style'

export default function Header() {
  return (
    <View style={styles.headerContainer}>
          <View>
            <Text style={{fontSize: 24 , fontFamily: "popBold"}}>Estate</Text>
            <Text style={{color: '#6B6978',fontSize: 14 }}>Best dicovery ever</Text>
          </View>
          <TouchableOpacity style={styles.iconBtn}>
            <Image source={icons.bell}/>
          </TouchableOpacity>
      </View>
  )
}