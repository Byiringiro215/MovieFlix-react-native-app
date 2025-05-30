import React from 'react'
import {View,Text,Button,FlatList, TouchableOpacity, ImageSourcePropType, Image} from 'react-native'
interface CardProps{
    title:String,
    rating:any,
    review:String,
    image?:ImageSourcePropType
}

const Card = ({title,rating,review,image}:CardProps) => {

  return (
 <View className='shadow-lg rounded-2xl border-4 border-blue-500 mx-10 my-5 py-5 px-5'>
    <Text className='font-Poppins-Bold text-2xl'>{title}</Text>
    <Text className='text-[#333] text-sm'><Text className='font-bold'>Review: </Text>{review}</Text>
    <Text className='text-blue-500 font-bold'>
      <View className='flex-row gap-2'>
      <Text className='font-bold'>Rating: </Text>
      {image && <Image source={image}  />}
      </View>
    </Text>
 </View>
  )
}

export default Card
