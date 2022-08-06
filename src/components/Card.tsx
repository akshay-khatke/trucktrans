import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type CardProp = {
    card:any;
    handleClick:(card:any)=>void;
    flipped:boolean

}
const Card: React.FC<CardProp> = ({card,handleClick}) => {
  const onChange=()=>{
    handleClick(card)
  }
    
   return (
        <TouchableOpacity onPress={onChange} style={styles.container} >
            
           <Text style={{fontSize:20,color:"white",fontWeight:'bold'}}>{card.char}</Text>
        </TouchableOpacity>
    )

}

export default Card;

const styles=StyleSheet.create({

container:{
borderRadiuds:10,
  padding:30,backgroundColor:"blue",
  margin:10
    

}


})