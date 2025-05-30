import React from 'react'
import {View,Text,Button} from 'react-native'
import { RouteProp } from '@react-navigation/native'
import Card from 'components/Card';

type RootStackParamList = {
  Home: undefined;
  'Review Details': {
    title: string;
    rating: number;
    body: string;
  };
};

const getRatingImage = (rating: number) => {
  switch(rating) {
    case 1:
      return require('../assets/rating-1.png');
    case 2:
      return require('../assets/rating-2.png');
    case 3:
      return require('../assets/rating-3.png');
    case 4:
      return require('../assets/rating-4.png');
    case 5:
      return require('../assets/rating-5.png');
    default:
      return require('../assets/rating-1.png');
  }
};

const ReviewDetails = ({route}: {route: RouteProp<RootStackParamList, 'Review Details'>}) => {
    const {title, rating, body} = route.params;
  return (
   <View>
   <Card 
     title={title} 
     rating={rating} 
     review={body} 
     image={getRatingImage(rating)} 
   />
   </View>
  )
}

export default ReviewDetails
